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
				p="sm"
			>
				<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
					{/* Track Number and Title */}
					<Group gap="xs" wrap="nowrap" className="min-w-0 flex-1">
						<Box
							style={{
								minWidth: "32px",
								width: "32px",
								height: "32px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								background: theme.primary.DEFAULT,
								borderRadius: "8px",
								fontWeight: 700,
								fontSize: "16px",
								color: theme.text.contrast,
								boxShadow: `0 4px 12px ${theme.primary.DEFAULT}60`,
							}}
							className="sm:h-[40px] sm:w-[40px] sm:min-w-[40px] sm:text-lg"
						>
							{index + 1}
						</Box>
						<Text size="md" fw={500} style={{ color: theme.text.primary }} className="truncate sm:text-lg">
							{track.label}
						</Text>
					</Group>

					{/* Badges and Duration */}
					<div className="flex flex-wrap items-center justify-between gap-2 sm:justify-end">
						<Group gap="xs" wrap="wrap">
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
							size="xs"
							fw={500}
							style={{
								color: theme.text.muted,
								fontFamily: "monospace",
								background: theme.background.tertiary,
								padding: "4px 8px",
								borderRadius: "6px",
							}}
							className="sm:px-3 sm:text-sm"
						>
							{track.duration}
						</Text>
					</div>
				</div>
			</Card>
			<TrackModal opened={modalOpened} onClose={() => setModalOpened(false)} track={track} theme={theme} />
		</>
	);
}
