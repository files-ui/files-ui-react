import type { NextConfigComplete } from '../server/config-shared';
/**  */
export declare function validateTurboNextConfig({ dir, isDev, }: {
    dir: string;
    isDev?: boolean;
}): Promise<NextConfigComplete>;
