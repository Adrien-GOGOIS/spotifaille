import { FunctionComponent, useEffect, useState } from "react";
import { FavoriteTrack } from "../types/types";
import { favoriteServiceInstance } from "../services/favorite.service";

interface Props {
	favorite: FavoriteTrack;
}

const FavoriteCard: FunctionComponent<Props> = ({favorite}: Props) => {

	const removeFavorite = async (favoriteId: string) => {
		favoriteServiceInstance.removeFavorite(favoriteId);
	}

	const saveTrack = async (favoriteId: string) => {
		favoriteServiceInstance.saveFavorite(favoriteId);
	}

	return (
		<div className="w-1/2 max-w-sm rounded overflow-hidden shadow-lg">
			<img className="w-full" src={favorite.track.album.images[0].url} alt="Sunset in the mountains"/>
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{favorite.track.artists[0].name}</div>
				<div className="font-bold text-lg mb-2">{favorite.track.album.name}</div>
				<p className="text-gray-700 text-base">{favorite.track.name}</p>
			</div>
			<div className="px-6 pt-4 pb-2">
				<button onClick={() => removeFavorite(favorite.track.id)} className="btn m-2">Remove</button>
				<button onClick={() => saveTrack(favorite.track.id)} className="btn">Save</button>
			</div>
		</div>
	)
}

export default FavoriteCard;