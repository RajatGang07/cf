import Profile from "./index";
import * as call from '../../utils/testUtils';

describe('Profile Component', () => {
   describe('renders without crashing with expected Props', () => {
      test('renders without crashing', () => {
         const wrapper = call.setup(Profile, {
            hideLabel: 0,
            search: '',
            resetSearchLabel: () => { }
         });
         const appComponent = call.findByAttr(wrapper, '.profile');
         expect(appComponent.length).toBe(1);
      });
   })
});