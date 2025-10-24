# View Transitions Implementation Guide

## Overview

This project now uses the native **View Transitions API** to create smooth animations between pages, including browser back/forward navigation. The implementation is based on best practices from the [nmn.sh](https://github.com/nmn/nmn.sh) repository.

## What Changed

### 1. CSS Configuration (`src/index.css`)

Added comprehensive view transition CSS rules:

```css
/* Enable smooth cross-document view transitions (browser navigation) */
@view-transition {
	navigation: auto;
}

/* Default transition for all elements */
::view-transition-old(root),
::view-transition-new(root) {
	animation-duration: 0.3s;
	animation-timing-function: ease-in-out;
}
```

**Key Feature**: `@view-transition { navigation: auto; }` enables transitions to work with native browser navigation (back/forward buttons, URL changes), not just client-side routing.

### 2. Component Updates

**AlbumCard.tsx** and **album/[albumId]/page.tsx**:

Changed from React `ViewTransition` component wrapper:
```tsx
// ❌ Old approach (only works with client-side routing)
<ViewTransition name={`album-card-image-${album.id}`}>
  <Image src={image} alt={label} />
</ViewTransition>
```

To native CSS `viewTransitionName` property:
```tsx
// ✅ New approach (works with all navigation)
<Image 
  src={image} 
  alt={label}
  style={{ viewTransitionName: `album-card-image-${album.id}` }}
/>
```

### 3. TypeScript Support

Added type definitions in `src/types/view-transitions.d.ts` to extend React's `CSSProperties` interface with `viewTransitionName` support.

## How It Works

### Client-Side Routing
- Uses `next-view-transitions` package
- `<Link>` component from the package automatically triggers view transitions
- Smooth animations between pages when clicking links

### Browser Navigation (Back/Forward)
- Native `@view-transition { navigation: auto; }` CSS rule
- Browser automatically captures before/after states
- Smooth transitions even with browser buttons or URL changes
- **No JavaScript required** for basic transitions

### Named Transitions
Elements with matching `viewTransitionName` values will morph smoothly between pages:
- Album images: `album-card-image-{id}`
- Album titles: `album-card-title-{id}`
- Release dates: `album-card-release-date-{id}`

## Browser Support

- **Chrome/Edge**: Full support (v111+)
- **Safari**: Support in v18+ (macOS Sonoma, iOS 17)
- **Firefox**: In development
- **Fallback**: Graceful degradation to instant navigation

## Testing

1. **Client-side navigation**: Click any album card → smooth transition
2. **Browser back button**: Press back → smooth transition
3. **Direct URL change**: Type URL directly → smooth transition on supported browsers

## Benefits Over Previous Implementation

1. ✅ **Works with browser navigation** (back/forward buttons)
2. ✅ **Works with direct URL changes**
3. ✅ **Better performance** (native browser API)
4. ✅ **More reliable** (less JavaScript, more standards-based)
5. ✅ **Progressive enhancement** (works without JS)

## References

- [View Transitions API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API)
- [nmn.sh repository](https://github.com/nmn/nmn.sh)
- [Chrome View Transitions Guide](https://developer.chrome.com/docs/web-platform/view-transitions/)

