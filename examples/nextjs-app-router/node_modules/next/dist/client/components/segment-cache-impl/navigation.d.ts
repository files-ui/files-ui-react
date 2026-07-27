import type { FlightRouterState, FlightSegmentPath } from '../../../shared/lib/app-router-types';
import type { CacheNode } from '../../../shared/lib/app-router-types';
import { NavigationResultTag } from '../segment-cache';
type MPANavigationResult = {
    tag: NavigationResultTag.MPA;
    data: string;
};
type NoOpNavigationResult = {
    tag: NavigationResultTag.NoOp;
    data: {
        canonicalUrl: string;
        shouldScroll: boolean;
    };
};
type SuccessfulNavigationResult = {
    tag: NavigationResultTag.Success;
    data: {
        flightRouterState: FlightRouterState;
        cacheNode: CacheNode;
        canonicalUrl: string;
        renderedSearch: string;
        scrollableSegments: Array<FlightSegmentPath>;
        shouldScroll: boolean;
        hash: string;
    };
};
type AsyncNavigationResult = {
    tag: NavigationResultTag.Async;
    data: Promise<MPANavigationResult | NoOpNavigationResult | SuccessfulNavigationResult>;
};
export type NavigationResult = MPANavigationResult | SuccessfulNavigationResult | NoOpNavigationResult | AsyncNavigationResult;
/**
 * Navigate to a new URL, using the Segment Cache to construct a response.
 *
 * To allow for synchronous navigations whenever possible, this is not an async
 * function. It returns a promise only if there's no matching prefetch in
 * the cache. Otherwise it returns an immediate result and uses Suspense/RSC to
 * stream in any missing data.
 */
export declare function navigate(url: URL, currentUrl: URL, currentCacheNode: CacheNode, currentFlightRouterState: FlightRouterState, nextUrl: string | null, shouldScroll: boolean, accumulation: {
    collectedDebugInfo?: Array<unknown>;
}): NavigationResult;
export {};
