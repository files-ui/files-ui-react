import type { CacheNodeSeedData, FlightRouterState, FlightSegmentPath } from '../../../shared/lib/app-router-types';
import type { CacheNode, ReadyCacheNode } from '../../../shared/lib/app-router-types';
import type { HeadData } from '../../../shared/lib/app-router-types';
import type { FetchServerResponseResult } from './fetch-server-response';
type SPANavigationTask = {
    route: FlightRouterState;
    node: CacheNode | null;
    dynamicRequestTree: FlightRouterState | null;
    children: Map<string, SPANavigationTask> | null;
};
type MPANavigationTask = {
    route: null;
    node: null;
    dynamicRequestTree: null;
    children: null;
};
export type Task = SPANavigationTask | MPANavigationTask;
export declare function startPPRNavigation(navigatedAt: number, oldUrl: URL, oldCacheNode: CacheNode, oldRouterState: FlightRouterState, newRouterState: FlightRouterState, prefetchData: CacheNodeSeedData | null, prefetchHead: HeadData | null, isPrefetchHeadPartial: boolean, isSamePageNavigation: boolean, scrollableSegmentsResult: Array<FlightSegmentPath>): Task | null;
export declare function listenForDynamicRequest(task: SPANavigationTask, responsePromise: Promise<FetchServerResponseResult>): void;
export declare function abortTask(task: SPANavigationTask, error: any, debugInfo: Array<any> | null): void;
export declare function updateCacheNodeOnPopstateRestoration(oldCacheNode: CacheNode, routerState: FlightRouterState): ReadyCacheNode;
export {};
