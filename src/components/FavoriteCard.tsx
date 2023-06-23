import { FunctionComponent, useState } from "react";
import { FavoriteTrack } from "../types/types";

interface Props {
	favorite: FavoriteTrack;
}

const FavoriteCard: FunctionComponent<Props> = ({favorite}: Props) => {

	const removeFavorite = (favoriteId: string) => {

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