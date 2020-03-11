import * as call from '../../utils/testUtils';
import FourOhFour from "./index";

describe('Profile Component', () => {
   describe('renders without crashing with expected Props', () => {
      test('renders without crashing', () => {
         const wrapper = call.setup(FourOhFour, {
            hideLabel: 0,
            search: '',
            resetSearchLabel: () => { }
         });
         const appComponent = call.findByAttr(wrapper, '.container-four-oh-four');
         expect(appComponent.length).toBe(1);
      });
   })
});