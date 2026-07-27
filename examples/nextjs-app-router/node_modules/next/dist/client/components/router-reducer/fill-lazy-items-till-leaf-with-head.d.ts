import type { CacheNode } from '../../../shared/lib/app-router-types';
import type { FlightRouterState, CacheNodeSeedData } from '../../../shared/lib/app-router-types';
export declare function fillLazyItemsTillLeafWithHead(navigatedAt: number, newCache: CacheNode, existingCache: CacheNode | undefined, routerState: FlightRouterState, cacheNodeSeedData: CacheNodeSeedData | null, head: React.ReactNode): void;
