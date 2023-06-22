
import React, { FunctionComponent, useEffect, useState } from 'react';
import { getAuthorizeHref, getHashParams } from '../services/connectToApi.service';
import { Favorites } from '../types/types';

const hashParams = getHashParams();
const access_token = hashParams.access_token;

const Homepage: FunctionComponent  = () => {
	const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
	const [accessToken, setAccessToken] = useState<string>('');
	const [data, setData] = useState<Favorites[]>([]);

  useEffect(() => {
    if (access_token) {
      setLoggedIn(true);
      setAccessToken(access_token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = async () => {
	const response = await fetch("https://api.spotify.com/v1/me/tracks", {
		headers: {
			"Authorization": "Bearer  " + accessToken
		}
	});
	const jsonData = await response.json();
	setData(jsonData.items)
	console.log(data);
}

  return (
    <div>
      <div >
        {!isLoggedIn &&
          <button
          aria-label="Log in using OAuth 2.0"
          onClick={() => window.open(getAuthorizeHref(), '_self')}
          >
          Log in with Spotify
          </button>}
        {isLoggedIn && <button onClick={getData}>DATA</button>}
      </div>
    </div>
  );
}

export default Homepage;