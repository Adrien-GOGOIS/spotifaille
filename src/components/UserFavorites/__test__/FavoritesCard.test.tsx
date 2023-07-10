import FavoriteCard from '../FavoriteCard';
import { favoriteDataset } from './utils/dataset';

import { shallowRender } from './utils/shallowRenderer';

describe('FavoriteCard Component', () => {
  describe('Rendering', () => {
    test('should display component', () => {
      // eslint-disable-next-line testing-library/render-result-naming-convention
      const favoriteCard = shallowRender(<FavoriteCard favorite={favoriteDataset} />);

      expect(favoriteCard).toMatchSnapshot();
    });
  });
});