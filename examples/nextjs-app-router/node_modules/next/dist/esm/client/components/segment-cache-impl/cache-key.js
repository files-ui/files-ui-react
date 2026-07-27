// TypeScript trick to simulate opaque types, like in Flow.
export function createCacheKey(originalHref, nextUrl) {
    // TODO: We should remove the hash from the href and track that separately.
    // There's no reason to vary route entries by hash.
    const originalUrl = new URL(originalHref);
    const cacheKey = {
        href: originalHref,
        search: originalUrl.search,
        nextUrl: nextUrl
    };
    return cacheKey;
}

//# sourceMappingURL=cache-key.js.map