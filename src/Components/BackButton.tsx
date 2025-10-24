"use client";

import { Button } from "@mantine/core";
import { Link } from "next-view-transitions";

export default function BackButton() {
	return (
		<Button
			component={Link}
			href="/"
			variant="subtle"
			color="gray"
			className="mb-8 text-gray-300 hover:bg-gray-800 hover:text-white"
		>
			← Back to Albums
		</Button>
	);
}
