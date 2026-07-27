import type { DynamicParamTypes } from '../../app-router-types';
/**
 * Parse dynamic route segment to type of parameter
 */
export declare function getSegmentParam(segment: string): {
    param: string;
    type: DynamicParamTypes;
} | null;
export declare function isCatchAll(type: DynamicParamTypes): type is 'catchall' | 'catchall-intercepted' | 'optional-catchall';
export declare function getParamProperties(paramType: DynamicParamTypes): {
    repeat: boolean;
    optional: boolean;
};
