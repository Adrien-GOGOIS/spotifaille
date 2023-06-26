import Favorites from '../Favorites';

import { shallowRender } from './utils/shallowRenderer';

describe('Favorites Component', () => {
  describe('Rendering', () => {
    test('should display component', () => {
      // eslint-disable-next-line testing-library/render-result-naming-convention
      const favorites = shallowRender(<Favorites />);

      expect(favorites).toMatchSnapshot();
    });
  });
});