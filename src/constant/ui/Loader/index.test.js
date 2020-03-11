import * as call from '../../../utils/testUtils';
import Loader from './index';

describe('Profile Component', () => {
   describe('renders without crashing with expected Props', () => {
      test('renders without crashing', () => {
         const wrapper = call.setup(Loader, {
            hideLabel: 0,
            search: '',
            resetSearchLabel: () => { }
         });
         const appComponent = call.findByAttr(wrapper, '.content');
         expect(appComponent.length).toBe(1);
      });
   })
});