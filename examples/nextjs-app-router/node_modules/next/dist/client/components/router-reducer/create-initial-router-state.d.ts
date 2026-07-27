import type { CacheNode, FlightDataPath } from '../../../shared/lib/app-router-types';
import type { AppRouterState } from './router-reducer-types';
export interface InitialRouterStateParameters {
    navigatedAt: number;
    initialCanonicalUrlParts: string[];
    initialRenderedSearch: string;
    initialParallelRoutes: CacheNode['parallelRoutes'];
    initialFlightData: FlightDataPath[];
    location: Location | null;
}
export declare function createInitialRouterState({ navigatedAt, initialFlightData, initialCanonicalUrlParts, initialRenderedSearch, initialParallelRoutes, location, }: InitialRouterStateParameters): AppRouterState;
