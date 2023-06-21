import React from 'react';
import { favoritesService } from './services/favorites.service';

const App: React.FunctionComponent = () => {
	let token: string = '';
	const connect = async () => {
		try {
			const response = await fetch("https://accounts.spotify.com/api/token", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: "grant_type=client_credentials&client_id=1af9eba0816d4494b162a17b1d1a4e9a&client_secret=db12d2718436458aac3b09ed3aa1d482",
			})
			const result = await response.json();
			console.log(result.access_token);
			token = result.access_token;
		} catch {
			console.log('error');
		}
	  }

	  const getData = async () => {
		const response = await fetch("https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb", {
			headers: {
				"Authorization": "Bearer  " + token
			}
		});
		const jsonData = await response.json();
		console.log(jsonData);
	  }

	return (
	  <>
	  <div>
		<p>
			<button onClick={connect}>Refresh Token</button>
			<button onClick={getData}>Get some data</button>
		</p>
	  </div>
	  </>
	);
  };

export default App;
