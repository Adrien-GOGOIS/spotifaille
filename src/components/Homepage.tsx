import { FunctionComponent, useEffect, useState } from 'react';
import Favorites from './Favorites';

import { authentificationServiceInstance } from '../services/authentification.service';

const Homepage: FunctionComponent  = () => {
	const [ isLoggedIn, setLoggedIn ] = useState<boolean>(false);
	const [ accessToken, setAccessToken ] = useState<string>('');

	const hashParams = authentificationServiceInstance.getHashParams();
	const access_token = hashParams.access_token;

	useEffect(() => {
		if (access_token) {
		setLoggedIn(true);
		setAccessToken(access_token);
		}
	}, []);

	return (
		<div>
		<div >
			{ !isLoggedIn &&
			<button
			onClick={() => window.open(authentificationServiceInstance.getAuthorizeHref(), '_self')}
			className='btn border-2 p-2'
			>
			Connectez-vous à Spotify
			</button> }
			{ isLoggedIn && <Favorites/> }
		</div>
		</div>
	);
}

export default Homepage;