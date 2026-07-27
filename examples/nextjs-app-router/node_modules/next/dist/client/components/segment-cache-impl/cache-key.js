// TypeScript trick to simulate opaque types, like in Flow.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createCacheKey", {
    enumerable: true,
    get: function() {
        return createCacheKey;
    }
});
function createCacheKey(originalHref, nextUrl) {
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

if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', { value: true });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

//# sourceMappingURL=cache-key.js.map