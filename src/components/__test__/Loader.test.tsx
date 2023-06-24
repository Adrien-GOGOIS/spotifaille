import Loader from '../Loader';

import { shallowRender } from './utils/shallowRenderer';

describe('Loader Component', () => {
  describe('Rendering', () => {
    test('should display component', () => {
      // eslint-disable-next-line testing-library/render-result-naming-convention
      const loader = shallowRender(<Loader />);

      expect(loader).toMatchSnapshot();
    });
  });
});