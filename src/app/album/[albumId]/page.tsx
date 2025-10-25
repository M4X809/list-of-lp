import { notFound } from "next/navigation";
import { Box, Container, Title, Text, Image, Stack, Grid, GridCol } from "@mantine/core";
import { albums } from "../../../lib/list";
import BackButton from "../../../Components/BackButton";
import { getThemeColors } from "@/lib/themes";
import TrackCard from "@/Components/TrackCard";
import TrackModal from "@/Components/TrackModal";

export function generateStaticParams() {
	return albums.map((album) => ({
		albumId: album.id,
	}));
}

export async function generateMetadata({ params }: { params: Promise<{ albumId: string }> }) {
	const { albumId } = await params;
	const album = albums.find((a) => a.id === albumId);

	if (!album) {
		return {
			title: "Album Not Found",
		};
	}

	return {
		title: `${album.label} - Linkin Park Albums`,
		description: album.description,
	};
}

export default async function AlbumDetail({ params }: { params: Promise<{ albumId: string }> }) {
	const { albumId } = await params;
	const album = albums.find((a) => a.id === albumId);

	if (!album) {
		notFound();
	}

	const theme = getThemeColors(albumId);

	return (
		<Box
			className="min-h-screen"
			style={{
				background: theme.background.gradient,
				viewTransitionName: `album-card-background-${album.id}`,
			}}
		>
			<TrackModal />
			<Container size="xl" className="py-12">
				{/* Back Button */}
				<BackButton theme={theme} />

				<Grid columns={5} gutter={"xl"} className="mb-12">
					<GridCol span={"content"}>
						<Box
							style={{
								border: `3px solid ${theme.border.light}`,
								borderRadius: "8px",
								padding: "4px",
								background: theme.background.secondary,
								boxShadow: `0 8px 32px ${theme.primary.DEFAULT}40`,
								viewTransitionName: `album-card-image-${album.id}`,
							}}
						>
							<Image
								src={album.image}
								alt={album.label}
								h={200}
								w={200}
								className="aspect-square!"
								style={{
									borderRadius: "4px",
								}}
							/>
						</Box>
					</GridCol>

					<GridCol span={"auto"}>
						<Title
							order={1}
							className="mb-3 text-6xl font-bold"
							style={{
								color: theme.text.primary,
								textShadow: `0 0 20px ${theme.primary.DEFAULT}80`,
							}}
						>
							<span style={{ viewTransitionName: `album-card-title-${album.id}` }}>{album.label}</span>
						</Title>
						<Text
							size="xl"
							className="mb-4"
							style={{
								color: theme.text.secondary,
							}}
						>
							<span style={{ viewTransitionName: `album-card-release-date-${album.id}` }}>
								<span style={{ color: theme.accent.DEFAULT, fontWeight: 600 }}>Released: </span>
								{new Date(album.releaseDate).toLocaleDateString("en-US", {
									year: "numeric",
									month: "long",
									day: "numeric",
								})}
							</span>
						</Text>
						<Text size="md" style={{ color: theme.text.muted, lineHeight: 1.6 }}>
							{album.description}
						</Text>
					</GridCol>
				</Grid>

				{/* Track List */}
				{album.tracks.length > 0 && (
					<Box>
						<Title
							order={2}
							className="mb-6 text-3xl font-bold"
							style={{
								color: theme.text.primary,
								borderBottom: `2px solid ${theme.border.light}`,
								paddingBottom: "12px",
							}}
						>
							Track List
						</Title>

						<Stack gap="xs" pt={"md"} pb={50}>
							{album.tracks.map((track, index) => (
								<TrackCard key={track.id} track={track} index={index} theme={theme} />
							))}
						</Stack>
					</Box>
				)}
			</Container>
		</Box>
	);
}
