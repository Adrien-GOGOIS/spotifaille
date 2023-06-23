
import { FunctionComponent, useEffect, useState } from 'react';
import { getAuthorizeHref, getHashParams } from '../services/connectToApi.service';
import Favorites from './Favorites';

const hashParams = getHashParams();
const access_token = hashParams.access_token;

const Homepage: FunctionComponent  = () => {
	const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
	const [accessToken, setAccessToken] = useState<string>('');

  useEffect(() => {
    if (access_token) {
      setLoggedIn(true);
      setAccessToken(access_token);
    }
  }, []);

  return (
    <div>
      <div >
        {!isLoggedIn &&
          <button
          onClick={() => window.open(getAuthorizeHref(), '_self')}
          >
          Connectez-vous à Spotify
          </button>}
        {isLoggedIn && <Favorites accessToken={accessToken}/>}
      </div>
    </div>
  );
}

export default Homepage;