import * as React from 'react';
import App from '../App';
import * as renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from 'store/store';

test('app matches snapshot', () => {
  const app = renderer
    .create(
      <Provider store={store}>
        <App />
      </Provider>
    )
    .toJSON();
  expect(app).toMatchSnapshot();
});
