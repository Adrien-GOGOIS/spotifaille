import { FunctionComponent } from "react";
import { favoriteServiceInstance } from "../services/favorite.service";
import { FavoriteTrack } from "../types/types";

interface Props {
	isActive: boolean;
	setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
	favorite: FavoriteTrack;
}

const FavoriteActionButton: FunctionComponent<Props> = ({isActive, setIsActive, favorite}: Props) => {

	const removeFavorite = async (favoriteId: string) => {
		favoriteServiceInstance.removeFavorite(favoriteId);
		setIsActive(false);
	}

	const saveTrack = async (favoriteId: string) => {
		favoriteServiceInstance.saveFavorite(favoriteId);
		setIsActive(true);
	}

	return (
		<button onClick={
			isActive 
			? () => removeFavorite(favorite.track.id) 
			: () => saveTrack(favorite.track.id)
		} 
		className={
			isActive ? "btn m-2 absolute bottom-0 left-0 border-2 p-2 bg-red-500 border-red-900 rounded"
			: "btn m-2 absolute bottom-0 left-0 border-2 p-2 bg-green-500 border-green-900 rounded"
		}
		>{ isActive ? 'Retirer des favoris' : 'Enregistrer dans les favoris' }</button>	
	)
}

export default FavoriteActionButton;