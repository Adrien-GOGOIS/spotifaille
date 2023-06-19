import React from 'react';
import { favoritesService } from './services/favorites.service';

const App: React.FunctionComponent = () => {
	const message: string = favoritesService.getFavorite();
	return (
	  <>
	  <div>
		<p>
			{message}
		</p>
	  </div>
	  </>
	);
  };

export default App;
