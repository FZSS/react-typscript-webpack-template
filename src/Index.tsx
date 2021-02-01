import { render } from 'react-dom';
import * as React from 'react';
import App from 'components/App';
import { Provider } from 'react-redux';
import store from 'store/store';

const rootElement = document.getElementById('root');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

