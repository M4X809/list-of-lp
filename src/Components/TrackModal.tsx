"use client";
import { getSongLink } from "@/lib/songLinks";
import type { AlbumTheme } from "@/lib/themes";
import type { Track } from "@/lib/ListTypes";
import {
	faApple,
	faSpotify,
	faYoutube,
	faYoutubeSquare,
	type IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionIcon, Box, Divider, Grid, GridCol, Group, Modal, Stack, Text, Title, Tooltip } from "@mantine/core";
import Link from "next/link";

interface TrackModalProps {
	opened: boolean;
	onClose: () => void;
	track: Track;
	theme: AlbumTheme;
}

export default function TrackModal({ opened, onClose, track, theme }: TrackModalProps) {
	const songLink = getSongLink(track.id);

	return (
		<Modal
			centered
			opened={opened}
			onClose={onClose}
			withCloseButton={false}
			transitionProps={{ duration: 150, transition: "fade" }}
			styles={{
				body: {
					background: theme.background.gradient,
					boxShadow: "none",
				},
			}}
		>
			<Stack>
				<Title order={1}>{track.label}</Title>
				<Divider
					color={theme.accent.DEFAULT}
					size={"lg"}
					label={
						<Title c={theme.accent.DEFAULT} order={3}>
							Studio Version
						</Title>
					}
				/>
				<Grid columns={songLink && Object.keys(songLink).length > 0 ? Object.keys(songLink).length : 4}>
					{songLink &&
						Object.entries(songLink).map(([key, value]) => {
							let themeColor: {
								color: string;
								icon: IconDefinition;
								tooltip: string;
							};
							switch (key) {
								case "spotify":
									themeColor = {
										color: "#1ED760",
										icon: faSpotify,
										tooltip: "Spotify",
									};
									break;
								case "youtube":
									themeColor = {
										color: "#FF0000",
										icon: faYoutube,
										tooltip: "YouTube",
									};
									break;
								case "youtubeMusic":
									themeColor = {
										color: "#FF0000",
										icon: faYoutubeSquare,
										tooltip: "YouTube Music",
									};
									break;
								case "appleMusic":
									themeColor = {
										color: "#FF4E6B",
										icon: faApple,
										tooltip: "Apple Music",
									};
									break;
								default:
									return null;
							}

							if (!themeColor) return null;

							return (
								<GridCol
									span={1}
									key={`${track.id}_${key}`}
									style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
								>
									<Tooltip label={themeColor.tooltip}>
										<ActionIcon
											tabIndex={-1}
											variant="filled"
											color={themeColor.color}
											size="lg"
											component={Link}
											href={value}
											target="_blank"
											rel="noopener noreferrer"
										>
											<FontAwesomeIcon icon={themeColor.icon} />
										</ActionIcon>
									</Tooltip>
								</GridCol>
							);
						})}
				</Grid>
				{Array.isArray(track.emilyLive) && (
					<>
						<Divider
							color={theme.accent.DEFAULT}
							size={"lg"}
							label={
								<Title c={theme.accent.DEFAULT} order={3}>
									Fan Live Versions
								</Title>
							}
						/>
						<Stack>
							{track.emilyLive.map((live) => (
								<Box style={{ width: "100%" }} key={`emilyLive_${live.url}`}>
									<Group justify="space-between" align="center">
										<Box style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
											<Text>By: {live.author}</Text>
											<Text>{live.location}</Text>
											<Text>
												{new Date(live.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
											</Text>
										</Box>
										<ActionIcon
											tabIndex={-1}
											variant="filled"
											color={"#FF0000"}
											size="lg"
											component={Link}
											href={live.url}
											target="_blank"
											rel="noopener noreferrer"
										>
											<FontAwesomeIcon icon={faYoutube} />
										</ActionIcon>
									</Group>
								</Box>
							))}
						</Stack>
					</>
				)}

				{track.lpLive && (
					<>
						<Divider
							color={theme.accent.DEFAULT}
							size={"lg"}
							label={
								<Title c={theme.accent.DEFAULT} order={3}>
									Linkin Park Live Versions
								</Title>
							}
						/>
						<Group justify="space-between" align="center">
							<Box style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
								<Text>
									{new Date(track.lpLive.date).toLocaleDateString("en-US", {
										year: "numeric",
										month: "long",
										day: "numeric",
									})}
								</Text>
								<Text>{track.lpLive.location}</Text>
							</Box>
							<ActionIcon
								tabIndex={-1}
								variant="filled"
								color={"#FF0000"}
								size="lg"
								component={Link}
								href={track.lpLive.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faYoutube} />
							</ActionIcon>
						</Group>
					</>
				)}
			</Stack>
		</Modal>
	);
}
