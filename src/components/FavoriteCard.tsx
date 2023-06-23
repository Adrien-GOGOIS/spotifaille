import { FunctionComponent, useState } from "react";
import { FavoriteTrack } from "../types/types";
import FavoriteActionButton from "./FavoriteActionButton";

interface Props {
	favorite: FavoriteTrack;
}

const FavoriteCard: FunctionComponent<Props> = ({favorite}: Props) => {
	const [ isActive, setIsActive ] = useState<boolean>(true);

	return (
		<div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 xl:w-1/5 rounded overflow-hidden shadow-lg h-auto relative">
			<img className={isActive ? "w-full" : "blur-sm w-full"} src={ favorite.track.album.images[0].url } alt="Sunset in the mountains"/>
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{ favorite.track.artists[0].name }</div>
				<div className="font-bold text-lg mb-2">{ favorite.track.album.name }</div>
				<p className="text-gray-700 text-base">{ favorite.track.name }</p>
			</div>
			<div className="mt-16">
				<FavoriteActionButton isActive={ isActive } setIsActive={ setIsActive } favorite={ favorite }/>
			</div>
		</div>
	)
}

export default FavoriteCard;