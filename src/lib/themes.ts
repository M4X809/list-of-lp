export interface AlbumTheme {
	// Primary color palette
	primary: {
		DEFAULT: string;
		light: string;
		dark: string;
		100: string;
		500: string;
		900: string;
	};
	// Secondary color palette
	secondary: {
		DEFAULT: string;
		light: string;
		dark: string;
	};
	// Accent colors
	accent: {
		DEFAULT: string;
		light: string;
		dark: string;
	};
	// Background variations
	background: {
		primary: string;
		secondary: string;
		tertiary: string;
		gradient: string;
	};
	// Text colors
	text: {
		primary: string;
		secondary: string;
		muted: string;
		contrast: string;
	};
	// Border colors
	border: {
		DEFAULT: string;
		light: string;
		focus: string;
	};
	// Badge colors
	badges: {
		studio: string;
		liveEmily: string;
		liveLP: string;
		lpTV: string;
	};
	// Card styling
	card: {
		background: string;
		backgroundHover: string;
		border: string;
	};
}

const themes: Record<string, AlbumTheme> = {
	"hybrid-theory": {
		primary: {
			DEFAULT: "#47090E",
			light: "#95121d",
			dark: "#1F0506",
			100: "#f6b3b8",
			500: "#47090E",
			900: "#0f0203",
		},
		secondary: {
			DEFAULT: "#8C786C",
			light: "#bbaea7",
			dark: "#554841",
		},
		accent: {
			DEFAULT: "#ec6672",
			light: "#f6b3b8",
			dark: "#95121d",
		},
		background: {
			primary: "#050404",
			secondary: "#1F0506",
			tertiary: "#3D3D39",
			gradient: "linear-gradient(135deg, #050404 0%, #47090E 50%, #1F0506 100%)",
		},
		text: {
			primary: "#e8e4e2",
			secondary: "#d2c9c4",
			muted: "#a49389",
			contrast: "#ffffff",
		},
		border: {
			DEFAULT: "#3D3D39",
			light: "#8C786C",
			focus: "#47090E",
		},
		badges: {
			studio: "#95121d",
			liveEmily: "#ec6672",
			liveLP: "#8C786C",
			lpTV: "#C4729F",
		},
		card: {
			background: "bg-[#3D3D39]/60",
			backgroundHover: "hover:bg-[#47090E]/60",
			border: "border-[#3D3D39] border-2",
		},
	},
	meteora: {
		primary: {
			DEFAULT: "#8B7B65",
			light: "#9A8B71",
			dark: "#55493C",
			100: "#ebe8e2",
			500: "#8B7B65",
			900: "#1c1914",
		},
		secondary: {
			DEFAULT: "#9A8B71",
			light: "#c2b9a9",
			dark: "#7c6f58",
		},
		accent: {
			DEFAULT: "#bbb0a1",
			light: "#d6d0c6",
			dark: "#a4917e",
		},
		background: {
			primary: "#241C16",
			secondary: "#32271F",
			tertiary: "#55493C",
			gradient: "linear-gradient(135deg, #241C16 0%, #32271F 50%, #55493C 100%)",
		},
		text: {
			primary: "#e8e5e0",
			secondary: "#d2cac0",
			muted: "#a49682",
			contrast: "#ffffff",
		},
		border: {
			DEFAULT: "#55493C",
			light: "#8B7B65",
			focus: "#9A8B71",
		},
		badges: {
			studio: "#8B7B65",
			liveEmily: "#bbb0a1",
			liveLP: "#9A8B71",
			lpTV: "#F9DDFC",
		},
		card: {
			background: "bg-[#55493C]/60",
			backgroundHover: "hover:bg-[#8B7B65]/30",
			border: "border-[#55493C]",
		},
	},
	"minutes-to-midnight": {
		primary: {
			DEFAULT: "#77716F",
			light: "#A09D9C",
			dark: "#292527",
			100: "#fafafa",
			500: "#77716F",
			900: "#181716",
		},
		secondary: {
			DEFAULT: "#A09D9C",
			light: "#c6c4c4",
			dark: "#615e5d",
		},
		accent: {
			DEFAULT: "#928d8b",
			light: "#b3b1b0",
			dark: "#5f5a59",
		},
		background: {
			primary: "#292527",
			secondary: "#2f2d2d",
			tertiary: "#474443",
			gradient: "linear-gradient(135deg, #292527 0%, #474443 50%, #5f5a59 100%)",
		},
		text: {
			primary: "#F2F1F0",
			secondary: "#d9d8d7",
			muted: "#b3b1b0",
			contrast: "#FEFFFC",
		},
		border: {
			DEFAULT: "#474443",
			light: "#77716F",
			focus: "#A09D9C",
		},
		badges: {
			studio: "#77716F",
			liveEmily: "#928d8b",
			liveLP: "#A09D9C",
			lpTV: "#C4729F",
		},
		card: {
			background: "bg-[#474443]/60",
			backgroundHover: "hover:bg-[#77716F]/30",
			border: "border-[#474443]",
		},
	},
	"a-thousand-suns": {
		primary: {
			DEFAULT: "#909293",
			light: "#C2C4C5",
			dark: "#2A2A2C",
			100: "#fefefe",
			500: "#909293",
			900: "#1d1d1d",
		},
		secondary: {
			DEFAULT: "#C2C4C5",
			light: "#e7e8e8",
			dark: "#9a9ea0",
		},
		accent: {
			DEFAULT: "#a6a8a8",
			light: "#d3d3d4",
			dark: "#737575",
		},
		background: {
			primary: "#232325",
			secondary: "#2A2A2C",
			tertiary: "#565858",
			gradient: "linear-gradient(135deg, #232325 0%, #2A2A2C 50%, #565858 100%)",
		},
		text: {
			primary: "#FCFCFC",
			secondary: "#e9e9e9",
			muted: "#bdbdbe",
			contrast: "#FCFCFC",
		},
		border: {
			DEFAULT: "#565858",
			light: "#909293",
			focus: "#C2C4C5",
		},
		badges: {
			studio: "#909293",
			liveEmily: "#a6a8a8",
			liveLP: "#C2C4C5",
			lpTV: "#bdbdbe",
		},
		card: {
			background: "bg-[#565858]/60",
			backgroundHover: "hover:bg-[#909293]/30",
			border: "border-[#565858]",
		},
	},
};

export const getThemeColors = (albumId: string): AlbumTheme => {
	return themes[albumId] || themes["hybrid-theory"];
};

export type Theme = AlbumTheme;
