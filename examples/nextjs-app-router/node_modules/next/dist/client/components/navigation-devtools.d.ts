import type { FlightRouterState } from '../../shared/lib/app-router-types';
import type { Params } from '../../server/request/params';
import { type InstrumentedPromise, type NavigationPromises } from '../../shared/lib/hooks-client-context.shared-runtime';
/**
 * Promises are cached by tree to ensure stability across suspense retries.
 */
type LayoutSegmentPromisesCache = {
    selectedLayoutSegmentPromises: Map<string, InstrumentedPromise<string | null>>;
    selectedLayoutSegmentsPromises: Map<string, InstrumentedPromise<string[]>>;
};
/**
 * Creates instrumented promises for layout segment hooks at a given tree level.
 * This is dev-only code for React Suspense DevTools instrumentation.
 */
export declare function createLayoutSegmentPromises(tree: FlightRouterState): LayoutSegmentPromisesCache | null;
/**
 * Creates instrumented navigation promises for the root app-router.
 */
export declare function createRootNavigationPromises(tree: FlightRouterState, pathname: string, searchParams: URLSearchParams, pathParams: Params): NavigationPromises | null;
/**
 * Creates merged navigation promises for nested layouts.
 * Merges parent promises with layout-specific segment promises.
 */
export declare function createNestedLayoutNavigationPromises(tree: FlightRouterState, parentNavPromises: NavigationPromises | null): NavigationPromises | null;
export {};
