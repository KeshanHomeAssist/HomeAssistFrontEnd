#!/usr/bin/env bash
#
# Deploys dist/ to xneelo over SFTP using lftp.
#
# xneelo's shared hosting takes file transfers over SFTP on port 22 — not plain
# FTP and not FTPS. Credentials are the hosting account's FTP user (set in
# konsoleH under Configuration -> FTP Users), with your domain as the hostname.
#
#   ./deploy/deploy.sh staging     -> uploads to the staging document root
#   ./deploy/deploy.sh production  -> uploads to the live document root
#
# Credentials come from deploy/.env.deploy, which is gitignored. Copy
# deploy/.env.deploy.example and fill it in. Never commit real credentials —
# xneelo FTP details give full write access to the whole hosting account.
#
# Requires: lftp  (macOS: brew install lftp)

set -euo pipefail

TARGET="${1:-}"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENV_FILE="$ROOT/deploy/.env.deploy"

if [[ "$TARGET" != "staging" && "$TARGET" != "production" ]]; then
  echo "usage: $0 {staging|production}" >&2
  exit 1
fi

if [[ ! -f "$ENV_FILE" ]]; then
  echo "error: $ENV_FILE not found — copy deploy/.env.deploy.example and fill it in" >&2
  exit 1
fi

# shellcheck disable=SC1090
source "$ENV_FILE"

if [[ "$TARGET" == "production" ]]; then
  REMOTE_DIR="$PROD_REMOTE_DIR"
else
  REMOTE_DIR="$STAGING_REMOTE_DIR"
fi

: "${FTP_HOST:?set FTP_HOST in deploy/.env.deploy}"
: "${FTP_USER:?set FTP_USER in deploy/.env.deploy}"
: "${FTP_PASS:?set FTP_PASS in deploy/.env.deploy}"
: "${REMOTE_DIR:?set STAGING_REMOTE_DIR / PROD_REMOTE_DIR in deploy/.env.deploy}"

if [[ ! -d "$ROOT/dist" ]]; then
  echo "error: no dist/ — run 'npm run build' first" >&2
  exit 1
fi

echo "Verifying the build before uploading..."
( cd "$ROOT" && npm run --silent verify )

if [[ "$TARGET" == "production" ]]; then
  echo
  echo "About to overwrite the LIVE site at $FTP_HOST:$REMOTE_DIR"
  read -r -p "Type 'deploy' to continue: " CONFIRM
  [[ "$CONFIRM" == "deploy" ]] || { echo "aborted"; exit 1; }
fi

echo "Uploading dist/ -> $FTP_HOST:$REMOTE_DIR ($TARGET)"

# --reverse  : local -> remote
# --delete   : remove remote files that no longer exist locally
# --parallel : a few concurrent transfers; xneelo is fine with 4
lftp -c "
set sftp:auto-confirm true;
set net:max-retries 3;
set net:timeout 20;
open -u '$FTP_USER','$FTP_PASS' 'sftp://$FTP_HOST:${FTP_PORT:-22}';
mirror --reverse --delete --parallel=4 --verbose \
  --exclude-glob .DS_Store \
  '$ROOT/dist/' '$REMOTE_DIR';
bye
"

echo
echo "Upload complete."
echo "Next: purge the Cloudflare cache for this hostname, then hard-reload and check the site."
