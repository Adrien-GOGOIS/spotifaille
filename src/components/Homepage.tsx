import { FunctionComponent, useEffect, useState } from 'react';
import Favorites from './Favorites';

import { authentificationServiceInstance } from '../services/authentification.service';
import { favoriteServiceInstance } from '../services/favorite.service';

const Homepage: FunctionComponent  = () => {
	const [ isLoggedIn, setLoggedIn ] = useState<boolean>(false);
	const access_token = favoriteServiceInstance.getAccessToken();

	useEffect(() => {
		if (access_token) {
			setLoggedIn(true);
		}
	}, []);

	return (
		<div>
			{ !isLoggedIn &&
				<button
					onClick={() => window.open(authentificationServiceInstance.getAuthorizeHref(), '_self')}
					className='btn border-2 p-2'
				>
					Connectez-vous à Spotify
				</button> 
			}
			{ isLoggedIn && <Favorites/> }
		</div>
	);
}

export default Homepage;