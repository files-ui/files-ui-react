import type { CacheNode, FlightRouterState } from '../../../shared/lib/app-router-types';
/**
 * Invalidate cache one level down from the router state.
 */
export declare function invalidateCacheByRouterState(newCache: CacheNode, existingCache: CacheNode, routerState: FlightRouterState): void;
