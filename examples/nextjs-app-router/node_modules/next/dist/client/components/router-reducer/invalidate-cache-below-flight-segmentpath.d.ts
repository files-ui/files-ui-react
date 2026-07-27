import type { CacheNode, FlightSegmentPath } from '../../../shared/lib/app-router-types';
/**
 * Fill cache up to the end of the flightSegmentPath, invalidating anything below it.
 */
export declare function invalidateCacheBelowFlightSegmentPath(newCache: CacheNode, existingCache: CacheNode, flightSegmentPath: FlightSegmentPath): void;
