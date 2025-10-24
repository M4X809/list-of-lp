import { Box, Container, Title, Text, Button } from "@mantine/core";
import Link from "next/link";

export default function NotFound() {
	return (
		<Box className="min-h-screen bg-gray-900">
			<Container size="xl" className="flex min-h-screen items-center justify-center">
				<Box className="text-center">
					<Title order={1} className="mb-4 text-6xl font-bold text-white">
						404
					</Title>
					<Text size="xl" className="mb-8 text-gray-400">
						Album not found
					</Text>
					<Link href="/">
						<Button variant="filled" color="purple" size="lg">
							Back to Albums
						</Button>
					</Link>
				</Box>
			</Container>
		</Box>
	);
}
