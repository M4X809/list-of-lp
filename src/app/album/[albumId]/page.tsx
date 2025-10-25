import { notFound } from "next/navigation";
import { Box, Container, Title, Text, Stack, Grid, GridCol } from "@mantine/core";
import { albums } from "../../../lib/list";
import BackButton from "../../../Components/BackButton";
import { getThemeColors } from "@/lib/themes";
import TrackCard from "@/Components/TrackCard";
import Image from "next/image";
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
				minHeight: "100vh",
				viewTransitionName: `album-card-background-${album.id}`,
			}}
		>
			<Container size="xl" className="px-4 py-6 sm:py-12">
				{/* Back Button */}
				<BackButton theme={theme} />

				<Grid gutter={{ base: "md", sm: "xl" }} className="mb-8 sm:mb-12">
					<GridCol span={{ base: 12, sm: "content" }}>
						<Box
							style={{
								border: `3px solid ${theme.border.light}`,
								borderRadius: "8px",
								background: theme.background.secondary,
								boxShadow: `0 8px 32px ${theme.primary.DEFAULT}40`,
								viewTransitionName: `album-card-image-${album.id}`,
							}}
							className="mx-auto max-w-[200px] sm:mx-0"
						>
							<Image
								src={album.image}
								alt={album.label}
								width={200}
								height={200}
								className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
							/>
						</Box>
					</GridCol>

					<GridCol span={{ base: 12, sm: "auto" }}>
						<Title
							order={1}
							className="mb-3 text-center text-3xl font-bold sm:text-left sm:text-4xl md:text-5xl lg:text-6xl"
							style={{
								color: theme.text.primary,
								textShadow: `0 0 20px ${theme.primary.DEFAULT}80`,
							}}
						>
							<span style={{ viewTransitionName: `album-card-title-${album.id}` }}>{album.label}</span>
						</Title>
						<Text
							size="lg"
							className="mb-4 text-center sm:text-left"
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
						<Text size="md" style={{ color: theme.text.muted, lineHeight: 1.6 }} className="text-center sm:text-left">
							{album.description}
						</Text>
					</GridCol>
				</Grid>

				{/* Track List */}
				{album.tracks.length > 0 && (
					<Box>
						<Title
							order={2}
							className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl"
							style={{
								color: theme.text.primary,
								borderBottom: `2px solid ${theme.border.light}`,
								paddingBottom: "8px",
							}}
						>
							Track List
						</Title>

						<Stack gap="xs" pt={{ base: "sm", sm: "md" }} pb={{ base: 25, sm: 50 }}>
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
