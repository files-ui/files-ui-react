import type { Params } from '../../../server/request/params';
import type { AppPageRouteModule } from '../../../server/route-modules/app-page/module.compiled';
import type { AppRouteRouteModule } from '../../../server/route-modules/app-route/module.compiled';
import { type AppSegmentConfig } from './app-segment-config';
import type { FallbackRouteParam } from '../../static-paths/types';
import type { DynamicParamTypes } from '../../../shared/lib/app-router-types';
type GenerateStaticParams = (options: {
    params?: Params;
}) => Promise<Params[]>;
export type AppSegment = {
    name: string;
    paramName: string | undefined;
    paramType: DynamicParamTypes | undefined;
    filePath: string | undefined;
    config: AppSegmentConfig | undefined;
    isDynamicSegment: boolean;
    generateStaticParams: GenerateStaticParams | undefined;
    /**
     * Whether this segment is a parallel route segment or descends from a
     * parallel route segment.
     */
    isParallelRouteSegment: boolean | undefined;
};
/**
 * Collects the segments for a given route module.
 *
 * @param components the loaded components
 * @returns the segments for the route module
 */
export declare function collectSegments(routeModule: AppRouteRouteModule | AppPageRouteModule): Promise<AppSegment[]> | AppSegment[];
/**
 * Collects the fallback route params for a given app page route module. This is
 * a variant of the `collectSegments` function that only collects the fallback
 * route params without importing anything.
 *
 * @param routeModule the app page route module
 * @returns the fallback route params for the app page route module
 */
export declare function collectFallbackRouteParams(routeModule: AppPageRouteModule): readonly FallbackRouteParam[];
export {};
