import "@mantine/core/styles.css";
import "../index.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { ViewTransitions } from "next-view-transitions";
import { Nunito } from "next/font/google";

const nunito = Nunito({
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
	title: "Linkin Park Albums",
	description: "Explore the complete discography of Linkin Park",
	icons: {
		icon: "/api/favico",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ViewTransitions>
			<html lang="en">
				<head>
					<meta name="darkreader-lock" />
					{/* <ColorSchemeScript defaultColorScheme="dark" /> */}
				</head>
				<body className={nunito.className}>
					<MantineProvider defaultColorScheme="dark">{children}</MantineProvider>
				</body>
			</html>
		</ViewTransitions>
	);
}
