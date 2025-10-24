export type Track = {
	id: string;
	label: string;
	duration: string;
	studioUrl: string | null;
	emilyLiveUrl: string | null;
	lpLiveUrl: string | null;
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
