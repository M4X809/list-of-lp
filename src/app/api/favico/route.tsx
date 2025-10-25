import { type NextRequest, NextResponse } from "next/server";
import { albums } from "../../../lib/list";
import { cookies } from "next/headers";

// Absolute URL redirect is required by Next.js middleware & API routes
export async function GET(request: NextRequest) {
	const urlENV = process.env.URL;

	const url = new URL(request.url);
	const randParam = url.searchParams.get("rand");
	const cookieStore = await cookies();
	const lastImage = cookieStore.get("lastImage")?.value;

	// Get all available albums, excluding the previous image
	const availableAlbums = lastImage ? albums.filter((album) => album.image !== lastImage) : albums;

	// Choose a random album, optionally seeded by the "rand" query param
	let randomIndex: number;
	if (randParam && !Number.isNaN(Number(randParam))) {
		randomIndex = Number(randParam) % availableAlbums.length;
	} else {
		randomIndex = Math.floor(Math.random() * availableAlbums.length);
	}
	const album = availableAlbums[randomIndex];
	cookieStore.set("lastImage", album.image);

	// Ensure image path starts with a slash
	const imagePath = album.image.startsWith("/") ? album.image : `/${album.image}`;
	// Build absolute URL for the redirect
	const { nextUrl } = request;
	const absoluteUrl = urlENV ? `${urlENV}${imagePath}` : `${nextUrl.protocol}//${nextUrl.host}${imagePath}`;

	return NextResponse.redirect(absoluteUrl, 307);
}
