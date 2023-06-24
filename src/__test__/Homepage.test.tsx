import Homepage from '../components/Homepage';

import { shallowRender } from './utils/shallowRenderer';

describe('Homepage Component', () => {
  describe('Rendering', () => {
    test('should display component', () => {
      // eslint-disable-next-line testing-library/render-result-naming-convention
      const homepage = shallowRender(<Homepage />);

      expect(homepage).toMatchSnapshot();
    });
  });
});