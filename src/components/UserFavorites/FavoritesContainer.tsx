import { FunctionComponent } from "react";
import { FavoriteTrack } from "../../types/types";
import FavoriteCard from "./FavoriteCard";

interface Props {
	favorites: FavoriteTrack[];
}

const FavoritesContainer: FunctionComponent<Props> = ({ favorites }: Props) => {

	return (
		<div className='box-content w-100 flex flex-col text-center'>
			<div className="container text-center my-12 mx-auto">
				<div className="flex">
					{ favorites.length > 0 && favorites.map((favorite) => {
						return (<FavoriteCard key={favorite.track.name} favorite={favorite} />)
					}) }
				</div>
			</div>
		</div>
	)
}

export default FavoritesContainer;