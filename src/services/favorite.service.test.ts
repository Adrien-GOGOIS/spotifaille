import { FavoriteTrack } from "../types/types";
import { favoriteServiceInstance } from "./favorite.service";

const favoritesFromApi: {items: FavoriteTrack[]} = {
	items : [
				{
					added_at: "[[DATE]]",
					track: {
						album: {
						album_type: '[[ALBUM_TYPE]]',
						total_tracks: 2,
						available_markets: ['[[AVAILABLE_MARKET]]'],
						external_urls: {
							spotify: '[[SPOTIFY]]',
						},
						href: '[[HREF]]',
						id: '[[ID]]',
						images: [
							{
							url: '[[URL]]',
							height: 2,
							width: 2
							},
							{
							url: '[[URL]]',
							height: 2,
							width: 2
							},
							{
							url: '[[URL]]',
							height: 2,
							width: 2
							}
						],
						name: '[[NAME]]',
						release_date: '[[RELEASE_DATE]]',
						release_date_precision: '[[RELEASE_DATE_PRECISION]]',
						type: '[[TYPE]]',
						uri: '[[URI]]',
						artists: [
							{
							external_urls: {
								spotify: '[[SPOTIFY]]'
							},
							href: '[[HREF]]',
							id: '[[ID]]',
							name: '[[NAME]]',
							type: '[[TYPE]]',
							uri: '[[URI]]'
							}
						]
						},
						artists: [
						{
							external_urls: {
							spotify: '[[SPOTIFY]]'
							},
							href: '[[HREF]]',
							id: '[[ID]]',
							name: '[[NAME]]',
							type: '[[TYPE]]',
							uri: '[[URI]]'
						}
						],
						available_markets: ['[[AVAILABLE_MARKET]]'],
						disc_number: 2,
						duration_ms: 2,
						explicit: true,
						external_ids: {
						isrc: '[[ISRC]]'
						},
						external_urls: {
						spotify: '[[SPOTIFY]]'
						},
						href: '[[HREF]]',
						id: '[[ID]]',
						name: '[[]]',
						popularity: 2,
						preview_url: '[[PREVIEW_URL]]',
						track_number: 2,
						type: '[[TYPE]]',
						uri: '[[URI]]',
						is_local: false
					}
				}
		]
	}

describe('favorites service', () => {
	it("finds favorites", async () => {
		global.fetch = jest.fn(() =>
		Promise.resolve({
			json: () => Promise.resolve(favoritesFromApi),
		}),
		) as jest.Mock;
	
		const favorites = await favoriteServiceInstance.getFavorites();

		expect(favorites).toEqual([
			{
			  added_at: '[[DATE]]',
			  track: {
				album: {
				  album_type: '[[ALBUM_TYPE]]',
				  total_tracks: 2,
				  available_markets: [ '[[AVAILABLE_MARKET]]' ],
				  external_urls: { spotify: '[[SPOTIFY]]' },
				  href: '[[HREF]]',
				  id: '[[ID]]',
				  images: [
					{ url: '[[URL]]', height: 2, width: 2 },
					{ url: '[[URL]]', height: 2, width: 2 },
					{ url: '[[URL]]', height: 2, width: 2 },
				  ],
				  name: '[[NAME]]',
				  release_date: '[[RELEASE_DATE]]',
				  release_date_precision: '[[RELEASE_DATE_PRECISION]]',
				  type: '[[TYPE]]',
				  uri: '[[URI]]',
				  artists: [
					{
					  external_urls: { spotify: '[[SPOTIFY]]' },
					  href: '[[HREF]]',
					  id: '[[ID]]',
					  name: '[[NAME]]',
					  type: '[[TYPE]]',
					  uri: '[[URI]]'
					},
				  ]
				},
				artists: [
				  {
					external_urls: { spotify: '[[SPOTIFY]]' },
					href: '[[HREF]]',
					id: '[[ID]]',
					name: '[[NAME]]',
					type: '[[TYPE]]',
					uri: '[[URI]]'
				  },
				],
				available_markets: [ '[[AVAILABLE_MARKET]]' ],
				disc_number: 2,
				duration_ms: 2,
				explicit: true,
				external_ids: { isrc: '[[ISRC]]' },
				external_urls: { spotify: '[[SPOTIFY]]' },
				href: '[[HREF]]',
				id: '[[ID]]',
				name: '[[]]',
				popularity: 2,
				preview_url: '[[PREVIEW_URL]]',
				track_number: 2,
				type: '[[TYPE]]',
				uri: '[[URI]]',
				is_local: false
			  }
			},
		  ]);
		expect(fetch).toHaveBeenCalledTimes(1);
	  });
})

