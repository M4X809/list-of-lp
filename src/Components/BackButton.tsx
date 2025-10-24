"use client";

import { Button } from "@mantine/core";
import { Link } from "next-view-transitions";
import type { AlbumTheme } from "@/lib/themes";

interface BackButtonProps {
	theme?: AlbumTheme;
}

export default function BackButton({ theme }: BackButtonProps) {
	return (
		<Button
			component={Link}
			href="/"
			variant="subtle"
			className="mb-8 transition-all duration-200"
			style={{
				color: theme?.text.secondary || "#d1d5db",
				backgroundColor: "transparent",
			}}
			onMouseEnter={(e) => {
				e.currentTarget.style.backgroundColor = theme?.card.background || "rgba(31, 41, 55, 0.5)";
				e.currentTarget.style.color = theme?.text.primary || "#ffffff";
			}}
			onMouseLeave={(e) => {
				e.currentTarget.style.backgroundColor = "transparent";
				e.currentTarget.style.color = theme?.text.secondary || "#d1d5db";
			}}
		>
			← Back to Albums
		</Button>
	);
}
