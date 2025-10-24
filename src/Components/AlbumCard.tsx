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
		<div
			style={{
				border: `1px solid ${theme.border.DEFAULT}`,
				boxShadow: `0 4px 20px ${theme.primary.DEFAULT}20`,
				overflow: "hidden",
				borderRadius: "8px",
			}}
			className="group relative col-span-1 cursor-pointer rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
		>
			<Card
				component={Link}
				href={`/album/${album.id}`}
				style={{
					background: theme.background.gradient,
					viewTransitionName: `album-card-background-${album.id}`,
				}}
			>
				<Box
					className="relative overflow-hidden rounded-lg"
					style={{
						border: `2px solid ${theme.border.light}`,
						borderRadius: "8px",
						padding: "2px",
						background: theme.background.secondary,
						viewTransitionName: `album-card-image-${album.id}`,
					}}
				>
					<Box>
						<Image
							src={image}
							alt={label}
							radius="md"
							className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
						/>
					</Box>
				</Box>
				<Box className="space-y-3 p-4">
					<Text
						size="xl"
						fw={700}
						className="transition-colors"
						style={{
							viewTransitionName: `album-card-title-${album.id}`,
							color: theme.text.primary,
						}}
					>
						{label}
					</Text>

					<Text
						size="sm"
						style={{
							viewTransitionName: `album-card-release-date-${album.id}`,
							color: theme.text.secondary,
						}}
					>
						<span style={{ color: theme.accent.DEFAULT, fontWeight: 600 }}>Released: </span>
						{new Date(releaseDate).toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</Text>

					<Group gap="xs">
						<Badge
							size="sm"
							variant="filled"
							style={{
								background: theme.primary.DEFAULT,
								color: theme.text.contrast,
							}}
						>
							{songs.count} Songs
						</Badge>
						{songs.emilyLiveSongs > 0 && (
							<Badge
								size="sm"
								variant="filled"
								style={{
									background: theme.badges.liveEmily,
									color: theme.text.contrast,
								}}
							>
								{songs.emilyLiveSongs} Emily Live
							</Badge>
						)}
						{songs.lpLiveSongs > 0 && (
							<Badge
								size="sm"
								variant="filled"
								style={{
									background: theme.badges.liveLP,
									color: theme.text.contrast,
								}}
							>
								{songs.lpLiveSongs} LP Live
							</Badge>
						)}
					</Group>
				</Box>
			</Card>
		</div>
	);
}
