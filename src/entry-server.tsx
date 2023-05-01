import { StaticRouter } from 'react-router-dom/server';
import React from 'react';
import App from './components/app';
import { Provider } from 'react-redux';
import store from './store';
import { renderToPipeableStream } from 'react-dom/server';

export default function render(url: string, opts: {}) {
  return renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </React.StrictMode>,
    opts
  );
}
