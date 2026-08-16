import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App.jsx';

export { POST_SLUGS, PAGE_PATHS } from './App.jsx';
export { POSTS } from './site/BlogPage.jsx';

/** Renders one route to an HTML string for the build-time prerender. */
export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}
