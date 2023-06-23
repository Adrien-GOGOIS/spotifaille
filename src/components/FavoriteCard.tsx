import { FunctionComponent, useState } from "react";
import { FavoriteTrack } from "../types/types";
import { removeFavorite } from "../services/handleFavorites.service";

interface Props {
	favorite: FavoriteTrack;
}

const FavoriteCard: FunctionComponent<Props> = ({favorite}: Props) => {

	const remove = async (favoriteId: string) => {
		removeFavorite(favoriteId);
	}

	return (
		<>
			<p>{favorite.track.artists[0].name}</p>
			<p>{favorite.track.album.name}</p>
			<p>{favorite.track.name}</p>
			<button onClick={() => remove(favorite.track.id)}>Remove</button>
		</>
	)
}

export default FavoriteCard;