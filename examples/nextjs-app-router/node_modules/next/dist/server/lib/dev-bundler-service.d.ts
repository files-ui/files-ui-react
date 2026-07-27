import type { IncomingMessage } from 'http';
import type { DevBundler } from './router-utils/setup-dev-bundler';
import type { WorkerRequestHandler } from './types';
import { LRUCache } from './lru-cache';
import type { ReactDebugChannelForBrowser } from '../dev/debug-channel';
import type { ServerCacheStatus } from '../../next-devtools/dev-overlay/cache-indicator';
/**
 * The DevBundlerService provides an interface to perform tasks with the
 * bundler while in development.
 */
export declare class DevBundlerService {
    private readonly bundler;
    private readonly handler;
    appIsrManifestInner: InstanceType<typeof LRUCache<boolean>>;
    constructor(bundler: DevBundler, handler: WorkerRequestHandler);
    ensurePage: typeof this.bundler.hotReloader.ensurePage;
    logErrorWithOriginalStack: (err: unknown, type?: "unhandledRejection" | "uncaughtException" | "warning" | "app-dir") => void;
    getFallbackErrorComponents(url?: string): Promise<void>;
    getCompilationError(page: string): Promise<any>;
    revalidate({ urlPath, revalidateHeaders, opts: revalidateOpts, }: {
        urlPath: string;
        revalidateHeaders: IncomingMessage['headers'];
        opts: any;
    }): Promise<{}>;
    get appIsrManifest(): Record<string, boolean>;
    setCacheStatus(status: ServerCacheStatus, htmlRequestId: string, requestId: string): void;
    setIsrStatus(key: string, value: boolean | undefined): void;
    setReactDebugChannel(debugChannel: ReactDebugChannelForBrowser, htmlRequestId: string, requestId: string): void;
    close(): void;
}
