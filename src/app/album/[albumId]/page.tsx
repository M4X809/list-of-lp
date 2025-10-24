import { notFound } from "next/navigation";
import { Box, Container, Title, Text, Group, Badge, Card, Image, Stack, Grid, GridCol } from "@mantine/core";
import { albums } from "../../../lib/list";
import BackButton from "../../../Components/BackButton";
import { getThemeColors } from "@/lib/themes";

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

	// Theme colors based on album

	const theme = getThemeColors(albumId);

	return (
		<Box className="min-h-screen">
			<Container size="xl" className="py-12">
				{/* Back Button */}
				<BackButton />

				<Grid columns={5} gutter={"xl"}>
					<GridCol span={"content"}>
						<Image
							src={album.image}
							alt={album.label}
							h={200}
							w={200}
							className="aspect-square!"
							style={{ viewTransitionName: `album-card-image-${album.id}` }}
						/>
					</GridCol>

					<GridCol span={"auto"}>
						<Title
							order={1}
							className="text-6xl font-bold text-white"
							style={{ viewTransitionName: `album-card-title-${album.id}` }}
						>
							{album.label}
						</Title>
						<Text size="xl" className="text-gray-400" style={{ viewTransitionName: `album-card-release-date-${album.id}` }}>
							Released:{" "}
							{new Date(album.releaseDate).toLocaleDateString("en-US", {
								year: "numeric",
								month: "long",
								day: "numeric",
							})}
						</Text>
						<Text className="text-gray-400">{album.description}</Text>
					</GridCol>
				</Grid>

				{/* Track List */}
				{album.tracks.length > 0 && (
					<Box>
						<Title order={2} className="mb-6 text-3xl font-bold text-white">
							Track List
						</Title>

						<Stack gap="sm">
							{album.tracks.map((track, index) => (
								<Card
									key={track.id}
									className="border border-gray-700 bg-gray-800/30 backdrop-blur-sm transition-all duration-200 hover:bg-gray-800/50"
								>
									<Group justify="space-between" align="center">
										<Group gap="md">
											<Text size="lg" fw={600} style={{ color: theme.primary }} className="min-w-8">
												{index + 1}
											</Text>
											<Text size="lg" className="text-white">
												{track.label}
											</Text>
										</Group>

										<Group gap="md">
											<Text size="sm" className="text-gray-400">
												{track.duration}
											</Text>
											<Group gap="xs">
												{track.studioUrl && (
													<Badge size="sm" color="green" variant="light">
														Studio
													</Badge>
												)}
												{track.emilyLiveUrl && (
													<Badge size="sm" color="pink" variant="light">
														Emily Live
													</Badge>
												)}
												{track.lpLiveUrl && (
													<Badge size="sm" color="blue" variant="light">
														LP Live
													</Badge>
												)}
											</Group>
										</Group>
									</Group>
								</Card>
							))}
						</Stack>
					</Box>
				)}
			</Container>
		</Box>
	);
}
