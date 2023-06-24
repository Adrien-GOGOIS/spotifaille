import FavoritesContainer from '../FavoritesContainer';
import { FavoriteTrack } from '../../types/types';

import { shallowRender } from './utils/shallowRenderer';
import { favoriteDataset } from './utils/dataset';

const favoritesFromApi: FavoriteTrack[] = [
	favoriteDataset
]
describe('FavoritesContainer Component', () => {
  describe('Rendering', () => {
    test('should display component', () => {
      // eslint-disable-next-line testing-library/render-result-naming-convention
      const favoritesContainer = shallowRender(<FavoritesContainer favorites={favoritesFromApi} />);

      expect(favoritesContainer).toMatchSnapshot();
    });
  });
});