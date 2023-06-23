import { getHashParams } from "./connectToApi.service";

const hashParams = getHashParams();
const accessToken = hashParams.access_token;

export const removeFavorite = async (favoriteId: string) => {
	await fetch(`https://api.spotify.com/v1/me/tracks?ids=${favoriteId}`, {
			method: 'DELETE',
			headers: {
				"Authorization": "Bearer  " + accessToken
			}
		});
	}