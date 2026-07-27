"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    defaultConfig: null,
    normalizeConfig: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    defaultConfig: function() {
        return defaultConfig;
    },
    normalizeConfig: function() {
        return normalizeConfig;
    }
});
const _os = /*#__PURE__*/ _interop_require_default(require("os"));
const _imageconfig = require("../shared/lib/image-config");
const _constants = require("../lib/constants");
const _canaryonlyconfigerror = require("../shared/lib/errors/canary-only-config-error");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const defaultConfig = Object.freeze({
    env: {},
    webpack: null,
    typescript: {
        ignoreBuildErrors: false,
        tsconfigPath: undefined
    },
    typedRoutes: false,
    distDir: '.next',
    cleanDistDir: true,
    assetPrefix: '',
    cacheHandler: process.env.NEXT_CACHE_HANDLER_PATH,
    // default to 50MB limit
    cacheMaxMemorySize: 50 * 1024 * 1024,
    configOrigin: 'default',
    useFileSystemPublicRoutes: true,
    generateBuildId: ()=>null,
    generateEtags: true,
    pageExtensions: [
        'tsx',
        'ts',
        'jsx',
        'js'
    ],
    poweredByHeader: true,
    compress: true,
    images: _imageconfig.imageConfigDefault,
    devIndicators: {
        position: 'bottom-left'
    },
    onDemandEntries: {
        maxInactiveAge: 60 * 1000,
        pagesBufferLength: 5
    },
    basePath: '',
    sassOptions: {},
    trailingSlash: false,
    i18n: null,
    productionBrowserSourceMaps: false,
    excludeDefaultMomentLocales: true,
    reactProductionProfiling: false,
    reactStrictMode: null,
    reactMaxHeadersLength: 6000,
    httpAgentOptions: {
        keepAlive: true
    },
    logging: {},
    compiler: {},
    expireTime: process.env.NEXT_PRIVATE_CDN_CONSUMED_SWR_CACHE_CONTROL ? undefined : 31536000,
    staticPageGenerationTimeout: 60,
    output: !!process.env.NEXT_PRIVATE_STANDALONE ? 'standalone' : undefined,
    modularizeImports: undefined,
    outputFileTracingRoot: process.env.NEXT_PRIVATE_OUTPUT_TRACE_ROOT || '',
    allowedDevOrigins: undefined,
    // Will default to cacheComponents value.
    enablePrerenderSourceMaps: undefined,
    cacheComponents: false,
    cacheLife: {
        default: {
            stale: undefined,
            revalidate: 60 * 15,
            expire: _constants.INFINITE_CACHE
        },
        seconds: {
            stale: 30,
            revalidate: 1,
            expire: 60
        },
        minutes: {
            stale: 60 * 5,
            revalidate: 60,
            expire: 60 * 60
        },
        hours: {
            stale: 60 * 5,
            revalidate: 60 * 60,
            expire: 60 * 60 * 24
        },
        days: {
            stale: 60 * 5,
            revalidate: 60 * 60 * 24,
            expire: 60 * 60 * 24 * 7
        },
        weeks: {
            stale: 60 * 5,
            revalidate: 60 * 60 * 24 * 7,
            expire: 60 * 60 * 24 * 30
        },
        max: {
            stale: 60 * 5,
            revalidate: 60 * 60 * 24 * 30,
            expire: 60 * 60 * 24 * 365
        }
    },
    cacheHandlers: {
        default: process.env.NEXT_DEFAULT_CACHE_HANDLER_PATH,
        remote: process.env.NEXT_REMOTE_CACHE_HANDLER_PATH,
        static: process.env.NEXT_STATIC_CACHE_HANDLER_PATH
    },
    experimental: {
        adapterPath: process.env.NEXT_ADAPTER_PATH || undefined,
        useSkewCookie: false,
        cssChunking: true,
        multiZoneDraftMode: false,
        appNavFailHandling: false,
        prerenderEarlyExit: true,
        serverMinification: true,
        serverSourceMaps: false,
        linkNoTouchStart: false,
        caseSensitiveRoutes: false,
        clientSegmentCache: true,
        clientParamParsingOrigins: undefined,
        dynamicOnHover: false,
        preloadEntriesOnStart: true,
        clientRouterFilter: true,
        clientRouterFilterRedirects: false,
        fetchCacheKeyPrefix: '',
        proxyPrefetch: 'flexible',
        optimisticClientCache: true,
        manualClientBasePath: false,
        cpus: Math.max(1, (Number(process.env.CIRCLE_NODE_TOTAL) || (_os.default.cpus() || {
            length: 1
        }).length) - 1),
        memoryBasedWorkersCount: false,
        imgOptConcurrency: null,
        imgOptTimeoutInSeconds: 7,
        imgOptMaxInputPixels: 268402689,
        imgOptSequentialRead: null,
        imgOptSkipMetadata: null,
        isrFlushToDisk: true,
        workerThreads: false,
        proxyTimeout: undefined,
        optimizeCss: false,
        nextScriptWorkers: false,
        scrollRestoration: false,
        externalDir: false,
        disableOptimizedLoading: false,
        gzipSize: true,
        craCompat: false,
        esmExternals: true,
        fullySpecified: false,
        swcTraceProfiling: false,
        forceSwcTransforms: false,
        swcPlugins: undefined,
        largePageDataBytes: 128 * 1000,
        disablePostcssPresetEnv: undefined,
        urlImports: undefined,
        typedEnv: false,
        clientTraceMetadata: undefined,
        parallelServerCompiles: false,
        parallelServerBuildTraces: false,
        ppr: false,
        authInterrupts: false,
        webpackBuildWorker: undefined,
        webpackMemoryOptimizations: false,
        optimizeServerReact: true,
        viewTransition: false,
        removeUncaughtErrorAndRejectionListeners: false,
        validateRSCRequestHeaders: !!(process.env.__NEXT_TEST_MODE || !(0, _canaryonlyconfigerror.isStableBuild)()),
        staleTimes: {
            dynamic: 0,
            static: 300
        },
        allowDevelopmentBuild: undefined,
        reactDebugChannel: false,
        staticGenerationRetryCount: undefined,
        serverComponentsHmrCache: true,
        staticGenerationMaxConcurrency: 8,
        staticGenerationMinPagesPerWorker: 25,
        inlineCss: false,
        useCache: undefined,
        slowModuleDetection: undefined,
        globalNotFound: false,
        browserDebugInfoInTerminal: false,
        lockDistDir: true,
        isolatedDevBuild: true,
        proxyClientMaxBodySize: 10485760,
        hideLogsAfterAbort: false,
        mcpServer: true
    },
    htmlLimitedBots: undefined,
    bundlePagesRouterDependencies: false
});
async function normalizeConfig(phase, config) {
    if (typeof config === 'function') {
        config = config(phase, {
            defaultConfig
        });
    }
    // Support `new Promise` and `async () =>` as return values of the config export
    return await config;
}

//# sourceMappingURL=config-shared.js.map