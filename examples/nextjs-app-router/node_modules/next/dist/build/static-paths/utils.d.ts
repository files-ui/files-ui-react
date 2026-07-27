import type { DynamicParamTypes } from '../../shared/lib/app-router-types';
import type { FallbackRouteParam } from './types';
/**
 * Encodes a parameter value using the provided encoder.
 *
 * @param value - The value to encode.
 * @param encoder - The encoder to use.
 * @returns The encoded value.
 */
export declare function encodeParam(value: string | string[], encoder: (value: string) => string): string;
/**
 * Normalizes a pathname to a consistent format.
 *
 * @param pathname - The pathname to normalize.
 * @returns The normalized pathname.
 */
export declare function normalizePathname(pathname: string): string;
/**
 * Creates a fallback route param.
 *
 * @param paramName - The name of the param.
 * @param isParallelRouteParam - Whether this is a parallel route param or
 * descends from a parallel route param.
 * @returns The fallback route param.
 */
export declare function createFallbackRouteParam(paramName: string, paramType: DynamicParamTypes, isParallelRouteParam: boolean): FallbackRouteParam;
