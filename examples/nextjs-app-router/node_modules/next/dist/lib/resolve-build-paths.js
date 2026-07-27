"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    parseBuildPathsInput: null,
    resolveBuildPaths: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    parseBuildPathsInput: function() {
        return parseBuildPathsInput;
    },
    resolveBuildPaths: function() {
        return resolveBuildPaths;
    }
});
const _util = require("util");
const _glob = /*#__PURE__*/ _interop_require_default(require("next/dist/compiled/glob"));
const _log = /*#__PURE__*/ _interop_require_wildcard(require("../build/output/log"));
const _path = /*#__PURE__*/ _interop_require_default(require("path"));
const _fs = /*#__PURE__*/ _interop_require_default(require("fs"));
const _iserror = /*#__PURE__*/ _interop_require_default(require("./is-error"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const glob = (0, _util.promisify)(_glob.default);
async function resolveBuildPaths(patterns, projectDir) {
    const appPaths = new Set();
    const pagePaths = new Set();
    for (const pattern of patterns){
        const trimmed = pattern.trim();
        if (!trimmed) {
            continue;
        }
        // Detect if pattern is glob pattern (contains glob special chars)
        const isGlobPattern = /[*?[\]{}!]/.test(trimmed);
        if (isGlobPattern) {
            try {
                // Resolve glob pattern
                const matches = await glob(trimmed, {
                    cwd: projectDir
                });
                if (matches.length === 0) {
                    _log.warn(`Glob pattern "${trimmed}" did not match any files`);
                }
                for (const file of matches){
                    // Skip directories, only process files
                    if (!_fs.default.statSync(_path.default.join(projectDir, file)).isDirectory()) {
                        categorizeAndAddPath(file, appPaths, pagePaths);
                    }
                }
            } catch (error) {
                throw Object.defineProperty(new Error(`Failed to resolve glob pattern "${trimmed}": ${(0, _iserror.default)(error) ? error.message : String(error)}`), "__NEXT_ERROR_CODE", {
                    value: "E892",
                    enumerable: false,
                    configurable: true
                });
            }
        } else {
            // Explicit path - categorize based on prefix
            categorizeAndAddPath(trimmed, appPaths, pagePaths, projectDir);
        }
    }
    return {
        appPaths: Array.from(appPaths).sort(),
        pagePaths: Array.from(pagePaths).sort()
    };
}
/**
 * Categorizes a file path to either app or pages router based on its prefix,
 * and normalizes it to the format expected by Next.js internal build system.
 *
 * The internal build system expects:
 * - App router: paths with leading slash (e.g., "/page.tsx", "/dashboard/page.tsx")
 * - Pages router: paths with leading slash (e.g., "/index.tsx", "/about.tsx")
 *
 * Examples:
 * - "app/page.tsx" → appPaths.add("/page.tsx")
 * - "app/dashboard/page.tsx" → appPaths.add("/dashboard/page.tsx")
 * - "pages/index.tsx" → pagePaths.add("/index.tsx")
 * - "pages/about.tsx" → pagePaths.add("/about.tsx")
 * - "/page.tsx" → appPaths.add("/page.tsx") (already in app router format)
 */ function categorizeAndAddPath(filePath, appPaths, pagePaths, projectDir) {
    // Normalize path separators to forward slashes (Windows compatibility)
    const normalized = filePath.replace(/\\/g, '/');
    // Skip non-file entries (like directories without extensions)
    if (normalized.endsWith('/')) {
        return;
    }
    if (normalized.startsWith('app/')) {
        // App router path: remove 'app/' prefix and ensure leading slash
        // "app/page.tsx" → "/page.tsx"
        // "app/dashboard/page.tsx" → "/dashboard/page.tsx"
        const withoutPrefix = normalized.slice(4) // Remove "app/"
        ;
        appPaths.add('/' + withoutPrefix);
    } else if (normalized.startsWith('pages/')) {
        // Pages router path: remove 'pages/' prefix and add leading slash
        // "pages/index.tsx" → "/index.tsx"
        // "pages/about.tsx" → "/about.tsx"
        const withoutPrefix = normalized.slice(6) // Remove "pages/"
        ;
        pagePaths.add('/' + withoutPrefix);
    } else if (normalized.startsWith('/')) {
        // Leading slash suggests app router format (already in correct format)
        // "/page.tsx" → "/page.tsx" (no change needed)
        appPaths.add(normalized);
    } else {
        // No obvious prefix - try to detect based on file existence
        if (projectDir) {
            const appPath = _path.default.join(projectDir, 'app', normalized);
            const pagesPath = _path.default.join(projectDir, 'pages', normalized);
            if (_fs.default.existsSync(appPath)) {
                appPaths.add('/' + normalized);
            } else if (_fs.default.existsSync(pagesPath)) {
                pagePaths.add('/' + normalized);
            } else {
                // Default to pages router for paths without clear indicator
                pagePaths.add('/' + normalized);
            }
        } else {
            // Without projectDir context, default to pages router
            pagePaths.add('/' + normalized);
        }
    }
}
function parseBuildPathsInput(input) {
    // Comma-separated values
    return input.split(',').map((p)=>p.trim()).filter((p)=>p.length > 0);
}

//# sourceMappingURL=resolve-build-paths.js.map