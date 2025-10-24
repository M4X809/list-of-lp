"use client";

import { getThemeColors } from "@/lib/themes";
import type { Album } from "../lib/ListTypes";
import { Box, Card, Image, Text, Badge, Group } from "@mantine/core";
import { Link } from "next-view-transitions";

export default function AlbumCard({ album }: { album: Album }) {
	const { label, releaseDate, image, tracks } = album;

	type Songs = {
		count: number;
		emilyLiveSongs: number;
		lpLiveSongs: number;
	};

	const songs: Songs = {
		count: tracks.length,
		emilyLiveSongs: tracks.filter((track) => track.emilyLiveUrl !== null).length,
		lpLiveSongs: tracks.filter((track) => track.lpLiveUrl !== null).length,
	};

	const theme = getThemeColors(album.id);

	return (
		<Card
			component={Link}
			href={`/album/${album.id}`}
			className="group col-span-1 cursor-pointer border border-gray-700 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-gray-800/70 hover:shadow-2xl hover:shadow-black/20"
			style={{
				background: `linear-gradient(to bottom, ${theme.bg})`,
			}}
		>
			<Box className="relative overflow-hidden rounded-lg">
				<Image
					src={image}
					alt={label}
					radius="md"
					className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
					style={{ viewTransitionName: `album-card-image-${album.id}` }}
				/>
				<Box className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
			</Box>

			<Box className="space-y-3 p-4">
				<Text
					size="xl"
					fw={700}
					className="text-white transition-colors group-hover:text-purple-300"
					style={{ viewTransitionName: `album-card-title-${album.id}` }}
				>
					{label}
				</Text>

				<Text size="sm" className="text-gray-400" style={{ viewTransitionName: `album-card-release-date-${album.id}` }}>
					Released:{" "}
					{new Date(releaseDate).toLocaleDateString("en-US", {
						year: "numeric",
						month: "long",
						day: "numeric",
					})}
				</Text>

				<Group gap="xs">
					<Badge color="purple" variant="light" size="sm" className="bg-purple-500/20 text-purple-300">
						{songs.count} Songs
					</Badge>
					{songs.emilyLiveSongs > 0 && (
						<Badge color="pink" variant="light" size="sm" className="bg-pink-500/20 text-pink-300">
							{songs.emilyLiveSongs} Emily Live
						</Badge>
					)}
					{songs.lpLiveSongs > 0 && (
						<Badge color="blue" variant="light" size="sm" className="bg-blue-500/20 text-blue-300">
							{songs.lpLiveSongs} LP Live
						</Badge>
					)}
				</Group>
			</Box>
		</Card>
	);
}
