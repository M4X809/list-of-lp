export type Track = {
	id: string;
	label: string;
	duration: string;

	emilyLive:
		| null
		| {
				url: string;
				date: string;
				location: string;
				author: string;
		  }[];
	lpLive: null | {
		url: string;
		date: string;
		location: string;
		disclaimer?: string;
	};

	lpTV?: null | {
		url: string;
		date: string;
	};

	// this is the spotify url for the album
	__SPOTIFY_URL__: string;
};

export type Album = {
	id: string;
	label: string;
	releaseDate: string;
	image: string;
	url: string;
	description: string;
	tracks: Track[];
};
