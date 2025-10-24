# Song Links Fetcher

This script fetches streaming links (Spotify, YouTube, YouTube Music, Apple Music) for all Linkin Park songs in the project using the SongLink API.

## Features

- 🎵 Fetches links for all songs from the `list.ts` file using their Spotify URLs
- ⏱️ Respects API rate limit (10 requests per minute)
- 💾 Caches already-fetched songs to avoid redundant API calls
- 📁 Outputs both TypeScript and JSON files
- 📊 Shows progress and summary statistics
- ⏭️ Automatically skips songs without Spotify URLs
- 🎨 Automatically formats all generated files with Prettier

## Usage

Run the script with:

```bash
bun run fetch-links
```

## Output Files

1. **`src/lib/songLinks.ts`** - TypeScript file with exported `songLinks` object
2. **`data/song-links.json`** - JSON file with all song links
3. **`data/fetched-songs.json`** - Cache file tracking which songs have been fetched

## Data Structure

The generated TypeScript file exports a `songLinks` object with this structure:

```typescript
{
  "hybrid-theory-1": {
    "spotify": "https://open.spotify.com/track/...",
    "youtube": "https://www.youtube.com/watch?v=...",
    "youtubeMusic": "https://music.youtube.com/watch?v=...",
    "appleMusic": "https://music.apple.com/..."
  },
  // ... more songs
}
```

## API Information

- **API**: [SongLink/Odesli API](https://linktree.notion.site/API-d0ebe08a5e304a55928405eb682f6741)
- **Endpoint**: `https://api.song.link/v1-alpha.1/links`
- **Parameters**: 
  - `url`: Spotify track URL (encoded)
  - `userCountry`: DE (Germany)
  - `songIfSingle`: true (for better matching)
- **Rate Limit**: 10 requests per minute
- **Delay between requests**: 6 seconds

## Requirements

Each track in `list.ts` must have a `__SPOTIFY_URL__` field with a valid Spotify track URL. Tracks without this field will be automatically skipped.

## Resumable

If the script is interrupted or fails for any song, you can simply run it again. It will:
- Skip already-fetched songs (based on the cache file)
- Continue fetching remaining songs
- Preserve all previously fetched data

## Clearing Cache

To re-fetch all songs from scratch, delete the cache file:

```bash
rm data/fetched-songs.json
```

