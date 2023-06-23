import { authentificationServiceInstance } from "./authentification.service";

export class FavoriteService {
	public hashParams = authentificationServiceInstance.getHashParams();
	public accessToken = this.hashParams.access_token;

 	public removeFavorite = async (favoriteId: string) => {
	await fetch(`https://api.spotify.com/v1/me/tracks?ids=${favoriteId}`, {
			method: 'DELETE',
			headers: {
				"Authorization": "Bearer  " + this.accessToken
			}
		});
	}
}

export const favoriteServiceInstance = new FavoriteService();
