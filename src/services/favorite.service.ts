import { FavoriteTrack } from "../types/types";
import { authentificationServiceInstance } from "./authentification.service";

export class FavoriteService {
	public hashParams = authentificationServiceInstance.getHashParams();
	public accessToken = this.hashParams.access_token;

	public getFavorites = async (): Promise<FavoriteTrack[]> => {
		const response = await fetch("https://api.spotify.com/v1/me/tracks?limit=5", {
			headers: {
				"Authorization": "Bearer  " + this.accessToken
			}
		});
		const jsonData = await response.json();
		
		return jsonData.items as FavoriteTrack[]
	}

 	public removeFavorite = async (favoriteId: string) => {
		await fetch(`https://api.spotify.com/v1/me/tracks?ids=${favoriteId}`, {
			method: 'DELETE',
			headers: {
				"Authorization": "Bearer  " + this.accessToken
			}
		});
	}

	public saveFavorite = async (favoriteId: string) => {
		await fetch(`https://api.spotify.com/v1/me/tracks?ids=${favoriteId}`, {
			method: 'PUT',
			headers: {
				"Authorization": "Bearer  " + this.accessToken
			}
		});
	}
}

export const favoriteServiceInstance = new FavoriteService();
