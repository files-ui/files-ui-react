import type { CacheNode } from '../../../shared/lib/app-router-types';
import type { NormalizedFlightData } from '../../flight-data-helpers';
export declare function applyFlightData(navigatedAt: number, existingCache: CacheNode, cache: CacheNode, flightData: NormalizedFlightData): boolean;
