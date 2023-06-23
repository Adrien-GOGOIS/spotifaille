import { FunctionComponent, useEffect, useState } from "react";
import { FavoriteTrack } from "../types/types";
import FavoriteCard from "./FavoriteCard";

interface Props {
	accessToken: string;
}

const Favorites: FunctionComponent<Props> = ({accessToken}: Props) => {
	const [data, setData] = useState<FavoriteTrack[]>([]);

	const getData = async () => {
		const response = await fetch("https://api.spotify.com/v1/me/tracks", {
			headers: {
				"Authorization": "Bearer  " + accessToken
			}
		});
		const jsonData = await response.json();
		setData(jsonData.items)
	}

	return (
		<>
			<button onClick={getData}>clique</button>
			<div className="flex gap-5">
			{data.length > 0 && data.map((favorite) => {
				return (
					<FavoriteCard key={favorite.track.name} favorite={favorite} />
				)
			})}
			</div>
		</>
	)
}

export default Favorites;