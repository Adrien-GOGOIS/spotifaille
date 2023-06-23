import { FunctionComponent, useEffect, useState } from "react";
import { FavoriteTrack } from "../types/types";
import FavoriteCard from "./FavoriteCard";
import { favoriteServiceInstance } from "../services/favorite.service";

interface Props {
	accessToken: string;
}

const Favorites: FunctionComponent<Props> = ({accessToken}: Props) => {
	const [favorites, setFavorites] = useState<FavoriteTrack[]>([]);

	const getFavorites = async () => {
		const favorites = await favoriteServiceInstance.getFavorites();
		setFavorites(favorites);
	}

	useEffect(() => {
		getFavorites();
	}, [])

	return (
		<div className="flex gap-5">
			{favorites.length > 0 && favorites.map((favorite) => {
				return (<FavoriteCard key={favorite.track.name} favorite={favorite} />)
			})}
		</div>
	)
}

export default Favorites;