import type { CacheNode } from '../../../shared/lib/app-router-types';
import type { NormalizedFlightData } from '../../flight-data-helpers';
/**
 * Fill cache with rsc based on flightDataPath
 */
export declare function fillCacheWithNewSubTreeData(navigatedAt: number, newCache: CacheNode, existingCache: CacheNode, flightData: NormalizedFlightData): void;
export declare function fillCacheWithNewSubTreeDataButOnlyLoading(navigatedAt: number, newCache: CacheNode, existingCache: CacheNode, flightData: NormalizedFlightData): void;
