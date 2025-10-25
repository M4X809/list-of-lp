"use client";

import { Card, Group, Text, Badge, Box } from "@mantine/core";
import { useState } from "react";
import type { AlbumTheme } from "@/lib/themes";
import type { Track } from "@/lib/ListTypes";
import { useHash } from "@mantine/hooks";

interface TrackCardProps {
	track: Track;
	index: number;
	theme: AlbumTheme;
}

export default function TrackCard({ track, index, theme }: TrackCardProps) {
	const [isHovered, setIsHovered] = useState(false);
	const [_hash, setHash] = useHash();

	return (
		<Card
			onClick={() => setHash(`trackModal_${track.id}`)}
			className="backdrop-blur-sm transition-all duration-300"
			style={{
				background: isHovered ? theme.card.backgroundHover : theme.card.background,
				border: `1px solid ${isHovered ? theme.border.light : theme.card.border}`,
				cursor: "pointer",
				// transform: isHovered ? "translateY(-2px)" : "translateY(0)",
				boxShadow: isHovered ? `0 8px 24px ${theme.primary.DEFAULT}30` : "none",
			}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
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
						{track.studioUrl && (
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
							<Badge
								size="sm"
								variant="filled"
								style={{
									background: theme.badges.liveLP,
									color: theme.text.contrast,
								}}
							>
								LP Live
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
	);
}
