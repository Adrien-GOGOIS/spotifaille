import { FunctionComponent } from "react";
import { FavoriteTrack } from "../types/types";
import FavoriteCard from "./FavoriteCard";

interface Props {
	favorites: FavoriteTrack[];
}

const FavoritesContainer: FunctionComponent<Props> = ({ favorites }: Props) => {

	return (
		<div>
			<h1 className="text-xl text-center border-2 w-1/2 my-12 mx-auto">
				Les {favorites.length} favoris ont été chargés !
			</h1>
			<div className="container text-center my-12 mx-auto">
				<div className="flex flex-wrap w-screen">
					{ favorites.length > 0 && favorites.map((favorite) => {
						return (<FavoriteCard key={favorite.track.name} favorite={favorite} />)
					}) }
				</div>
			</div>
		</div>
	)
}

export default FavoritesContainer;