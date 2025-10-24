import { Box, Container, Title, Text, SimpleGrid } from "@mantine/core";
import AlbumCard from "../Components/AlbumCard";
import { albums } from "../lib/list";

export default function HomePage() {
	return (
		<Box className="min-h-screen bg-gray-900">
			<Container size="xl" className="py-12">
				<Box className="mb-12 text-center">
					<Title
						order={1}
						className="mb-4 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-6xl font-bold text-transparent"
					>
						Linkin Park Albums
					</Title>
					<Text size="xl" className="text-gray-400">
						Explore the complete discography of Linkin Park
					</Text>
				</Box>

				<SimpleGrid cols={3} className="gap-8">
					{albums.map((album) => (
						<AlbumCard key={album.id} album={album} />
					))}
				</SimpleGrid>
			</Container>
		</Box>
	);
}
