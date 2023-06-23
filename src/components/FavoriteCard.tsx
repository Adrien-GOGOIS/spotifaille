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

	return (
		<>
			<p>{favorite.track.artists[0].name}</p>
			<p>{favorite.track.album.name}</p>
			<p>{favorite.track.name}</p>
			<button onClick={() => removeFavorite(favorite.track.id)}>Remove</button>
		</>
	)
}

export default FavoriteCard;