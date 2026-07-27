import type { DynamicParamTypesShort } from '../shared/lib/app-router-types';
import type { NormalizedSearch } from './components/segment-cache';
import type { RSCResponse } from './components/router-reducer/fetch-server-response';
import type { ParsedUrlQuery } from 'querystring';
export type RouteParamValue = string | Array<string> | null;
export type RouteParam = {
    name: string;
    value: RouteParamValue;
    type: DynamicParamTypesShort;
};
export declare function getRenderedSearch(response: RSCResponse<unknown> | Response): NormalizedSearch;
export declare function getRenderedPathname(response: RSCResponse<unknown> | Response): string;
export declare function parseDynamicParamFromURLPart(paramType: DynamicParamTypesShort, pathnameParts: Array<string>, partIndex: number): RouteParamValue;
export declare function doesStaticSegmentAppearInURL(segment: string): boolean;
export declare function getCacheKeyForDynamicParam(paramValue: RouteParamValue, renderedSearch: NormalizedSearch): string;
export declare function urlToUrlWithoutFlightMarker(url: URL): URL;
export declare function getParamValueFromCacheKey(paramCacheKey: string, paramType: DynamicParamTypesShort): string | string[];
export declare function urlSearchParamsToParsedUrlQuery(searchParams: URLSearchParams): ParsedUrlQuery;
