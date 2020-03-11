import List from "./index";
import * as call from '../../utils/testUtils';


describe('List Component', () => {
   describe('renders without crashing with expected Props', () => {
      test('renders without crashing', () => {
         const wrapper = call.setup(List, {
            hideLabel: 0,
            search: '',
            resetSearchLabel: () => { }
         });
         const appComponent = call.findByAttr(wrapper, '.list');
         expect(appComponent.length).toBe(1);
      });
   })
});

