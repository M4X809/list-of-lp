import { Box, Container, Title, Text, SimpleGrid, Center } from "@mantine/core";
import AlbumCard from "../Components/AlbumCard";
import { albums } from "../lib/list";

export default function HomePage() {
	return (
		<>
			<Box className="min-h-screen bg-gray-900">
				<Container size="xl" className="py-16">
					<Box className="mb-12 text-center text-pretty">
						<Title
							order={1}
							className="mb-4 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-6xl font-bold text-transparent"
						>
							Linkin Park Albums
						</Title>
						<Text size="xl" className="text-gray-400">
							On this website you can find all the albums of Linkin Park. Their new Live Versions with Emily made by fans and
							the official Live Versions from the Linkin Park Youtube Channel.
						</Text>
					</Box>

					<SimpleGrid cols={3} className="gap-8">
						{albums.map((album) => (
							<AlbumCard key={album.id} album={album} />
						))}
					</SimpleGrid>
				</Container>
			</Box>
			<Box className="bg-gray-900 pb-12">
				<Center>
					<Text size="sm" className="text-gray-400">
						Disclaimer: This website is not affiliated with Linkin Park or any of its members. <br />
						All rights reserved to the respective owners. This website is a fan-made project and is not intended to be used
						for commercial purposes.
						<br />
						The Album Covers are the property of the respective owners.
					</Text>
				</Center>
			</Box>
		</>
	);
}
