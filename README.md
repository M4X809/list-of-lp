# Linkin Park Albums

A modern web application showcasing the complete discography of Linkin Park, built with Next.js 15 and React 19.

## Features

- 🎵 Browse all Linkin Park albums
- 📱 Responsive design with Tailwind CSS
- 🎨 Beautiful UI with Mantine components
- ⚡ Fast static generation with Next.js App Router
- 🖥️ Server components for optimal performance
- 🎭 Smooth transitions and hover effects

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **React**: React 19 (Canary)
- **UI Components**: Mantine Core 8.3.5
- **Styling**: Tailwind CSS 4.1.15
- **Package Manager**: Bun
- **TypeScript**: 5.9.3

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Mantine provider
│   ├── page.tsx            # Home page (server component)
│   └── album/
│       └── [albumId]/
│           ├── page.tsx    # Album detail page (server component)
│           └── not-found.tsx
├── components/
│   ├── AlbumCard.tsx       # Album card component (client component)
│   └── BackButton.tsx      # Back button (client component)
├── lib/
│   ├── list.ts             # Album data
│   └── ListTypes.ts        # TypeScript types
└── index.css               # Global styles
```

## Getting Started

Install dependencies:

```bash
bun install
```

Run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Build

Build for production:

```bash
bun run build
```

Start the production server:

```bash
bun run start
```

## Features Explanation

### Server Components

The app leverages Next.js App Router with server components for optimal performance:
- Home page (`page.tsx`) - Server component that renders the album grid
- Album detail page (`album/[albumId]/page.tsx`) - Server component with static generation

### Client Components

Interactive components use the `"use client"` directive:
- `AlbumCard` - Handles click navigation to album details
- `BackButton` - Handles navigation back to home

### Static Generation

Album detail pages are statically generated at build time using `generateStaticParams`, providing instant page loads.

## License

MIT
