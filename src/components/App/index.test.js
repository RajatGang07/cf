import React from 'react';
import { shallow } from 'enzyme';
import * as call from '../../utils/testUtils';
import App from '.';

describe('App Component', () => {
  describe('renders without crashing with expected Props', () => {
    test('renders without crashing', () => {
      const wrapper = call.setup(App, {
        hideLabel: 0,
        search: '',
        resetSearchLabel: () => { }
      });
      const appComponent = call.findByAttr(wrapper, '.app-container');
      expect(appComponent.length).toBe(1);
    });
  })
});
