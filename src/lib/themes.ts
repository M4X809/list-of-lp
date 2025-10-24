export const getThemeColors = (albumId: string) => {
	return themes[albumId] || themes["hybrid-theory"];
};

const themes: Record<string, { primary: string; secondary: string; accent: string; bg: string }> = {
	"hybrid-theory": {
		primary: "#ff6b35",
		secondary: "#f7931e",
		accent: "#ff1744",
		bg: "from-orange-900 via-red-900 to-orange-800",
	},
	meteora: {
		primary: "#8b5cf6",
		secondary: "#a855f7",
		accent: "#ec4899",
		bg: "from-purple-900 via-pink-900 to-purple-800",
	},
	"minutes-to-midnight": {
		primary: "#1e40af",
		secondary: "#3b82f6",
		accent: "#06b6d4",
		bg: "from-slate-900 via-blue-900 to-slate-800",
	},
};
export type Theme = (typeof themes)["hybrid-theory"];
