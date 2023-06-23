import { FunctionComponent, useEffect, useState } from "react";
import { FavoriteTrack } from "../types/types";
import FavoriteCard from "./FavoriteCard";
import { favoriteServiceInstance } from "../services/favorite.service";

const Favorites: FunctionComponent = () => {
	const [ favorites, setFavorites ] = useState<FavoriteTrack[]>([]);
	const [ isLoading, setIsLoading ] = useState<boolean>(true);

	const getFavorites = async () => {
		const favorites = await favoriteServiceInstance.getFavorites();
		setFavorites(favorites);
		setIsLoading(false);
	}

	useEffect(() => {
		getFavorites();
	}, [])

	return (
		<div className="text-center">
			<h1 className="text-xl text-center m-5 border-2 w-1/2">
				{ isLoading ? 'Chargement...' : `Les ${favorites.length} favoris ont été chargés !` }
			</h1>
			<div className="flex gap-5 text-center ms-6">
				{ favorites.length > 0 && favorites.map((favorite) => {
					return (<FavoriteCard key={favorite.track.name} favorite={favorite} />)
				}) }
			</div>
			
		</div>
	)
}

export default Favorites;