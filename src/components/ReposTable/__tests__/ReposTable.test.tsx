import { mount } from 'enzyme';
import * as React from 'react';
import ReposTable from '../ReposTable';
import EmptyTable from '../EmptyTable';
import { Provider } from 'react-redux';
import store from 'store/store';

test('the table initially renders with empty table', () => {
  const table = mount(
    <Provider store={store}>
      <ReposTable />
    </Provider>
  );
  expect(table.contains(<EmptyTable />)).toBe(true);
});
