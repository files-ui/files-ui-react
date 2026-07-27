import type { Params } from '../../server/request/params';
export declare const SearchParamsContext: import("react").Context<URLSearchParams | null>;
export declare const PathnameContext: import("react").Context<string | null>;
export declare const PathParamsContext: import("react").Context<Params | null>;
export type InstrumentedPromise<T> = Promise<T> & {
    status: 'fulfilled';
    value: T;
    displayName: string;
};
export type NavigationPromises = {
    pathname: InstrumentedPromise<string>;
    searchParams: InstrumentedPromise<any>;
    params: InstrumentedPromise<any>;
    selectedLayoutSegmentPromises?: Map<string, InstrumentedPromise<string | null>>;
    selectedLayoutSegmentsPromises?: Map<string, InstrumentedPromise<string[]>>;
};
export declare const NavigationPromisesContext: import("react").Context<NavigationPromises | null>;
export declare function createDevToolsInstrumentedPromise<T>(displayName: string, value: T): InstrumentedPromise<T>;
