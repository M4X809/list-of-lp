"use client";

import { Card, Group, Text, Badge, Box, Tooltip } from "@mantine/core";
import { useState } from "react";
import type { AlbumTheme } from "@/lib/themes";
import type { Track } from "@/lib/ListTypes";
import TrackModal from "./TrackModal";
import { twMerge } from "tailwind-merge";

interface TrackCardProps {
	track: Track;
	index: number;
	theme: AlbumTheme;
}

export default function TrackCard({ track, index, theme }: TrackCardProps) {
	const [modalOpened, setModalOpened] = useState(false);

	return (
		<>
			<Card
				onClick={() => setModalOpened(true)}
				className={twMerge(
					"transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:shadow-lg",
					theme.card.background,
					theme.card.backgroundHover,
					theme.card.border,
				)}
				style={{}}
			>
				<Group justify="space-between" align="center">
					<Group gap="md">
						<Box
							style={{
								minWidth: "40px",
								height: "40px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								background: theme.primary.DEFAULT,
								borderRadius: "8px",
								fontWeight: 700,
								fontSize: "18px",
								color: theme.text.contrast,
								boxShadow: `0 4px 12px ${theme.primary.DEFAULT}60`,
							}}
						>
							{index + 1}
						</Box>
						<Text size="lg" fw={500} style={{ color: theme.text.primary }}>
							{track.label}
						</Text>
					</Group>

					<Group gap="md">
						<Group gap="xs">
							{track.__SPOTIFY_URL__ && (
								<Badge
									size="sm"
									variant="filled"
									style={{
										background: theme.badges.studio,
										color: theme.text.contrast,
									}}
								>
									Studio
								</Badge>
							)}
							{track.emilyLive && (
								<Badge
									size="sm"
									variant="filled"
									style={{
										background: theme.badges.liveEmily,
										color: theme.text.contrast,
									}}
								>
									Emily Live
								</Badge>
							)}
							{track.lpLive && (
								<Tooltip label={track.lpLive.disclaimer} hidden={!track.lpLive.disclaimer}>
									<Badge
										size="sm"
										variant="filled"
										style={{
											background: theme.badges.liveLP,
											color: theme.text.contrast,
										}}
									>
										LP Live{track.lpLive.disclaimer ? "*" : ""}
									</Badge>
								</Tooltip>
							)}
							{track.lpTV && (
								<Badge
									size="sm"
									variant="filled"
									style={{
										background: theme.badges.lpTV,
										color: theme.text.contrast,
									}}
								>
									LP TV
								</Badge>
							)}
						</Group>
						<Text
							size="sm"
							fw={500}
							style={{
								color: theme.text.muted,
								fontFamily: "monospace",
								background: theme.background.tertiary,
								padding: "4px 12px",
								borderRadius: "6px",
							}}
						>
							{track.duration}
						</Text>
					</Group>
				</Group>
			</Card>
			<TrackModal opened={modalOpened} onClose={() => setModalOpened(false)} track={track} theme={theme} />
		</>
	);
}
