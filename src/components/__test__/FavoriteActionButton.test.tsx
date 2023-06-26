import { SetStateAction } from 'react';
import FavoriteActionButton from '../FavoriteActionButton';

import { shallowRender } from './utils/shallowRenderer';
import { favoriteDataset } from './utils/dataset';

describe('FavoriteActionButton Component', () => {
  describe('Rendering', () => {
    test('should display component', () => {
      // eslint-disable-next-line testing-library/render-result-naming-convention
      const favoriteActionButton = shallowRender(<FavoriteActionButton isActive={false} setIsActive={function (value: SetStateAction<boolean>): void {
		  throw new Error('Function not implemented.');
	  } } favorite={favoriteDataset} />);

      expect(favoriteActionButton).toMatchSnapshot();
    });
  });
});