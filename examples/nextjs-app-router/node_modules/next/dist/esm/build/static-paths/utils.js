/**
 * Encodes a parameter value using the provided encoder.
 *
 * @param value - The value to encode.
 * @param encoder - The encoder to use.
 * @returns The encoded value.
 */ export function encodeParam(value, encoder) {
    let replaceValue;
    if (Array.isArray(value)) {
        replaceValue = value.map(encoder).join('/');
    } else {
        replaceValue = encoder(value);
    }
    return replaceValue;
}
/**
 * Normalizes a pathname to a consistent format.
 *
 * @param pathname - The pathname to normalize.
 * @returns The normalized pathname.
 */ export function normalizePathname(pathname) {
    return pathname.replace(/\\/g, '/').replace(/(?!^)\/$/, '');
}
/**
 * Creates a fallback route param.
 *
 * @param paramName - The name of the param.
 * @param isParallelRouteParam - Whether this is a parallel route param or
 * descends from a parallel route param.
 * @returns The fallback route param.
 */ export function createFallbackRouteParam(paramName, paramType, isParallelRouteParam) {
    return {
        paramName,
        paramType,
        isParallelRouteParam
    };
}

//# sourceMappingURL=utils.js.map