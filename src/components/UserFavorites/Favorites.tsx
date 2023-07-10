import { FunctionComponent, useEffect, useState } from "react";
import { FavoriteTrack } from "../../types/types";
import { favoriteServiceInstance } from "../../services/favorite.service";
import Loader from "../Loader";
import FavoritesContainer from "./FavoritesContainer";

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

	return isLoading ? <Loader /> : <FavoritesContainer favorites={favorites} /> 
}

export default Favorites;