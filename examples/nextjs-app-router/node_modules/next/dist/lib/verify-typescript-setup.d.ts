import type { TypeCheckResult } from './typescript/runTypeCheck';
export declare function verifyTypeScriptSetup({ dir, distDir, cacheDir, intentDirs, tsconfigPath, typeCheckPreflight, disableStaticImages, hasAppDir, hasPagesDir, isolatedDevBuild, }: {
    dir: string;
    distDir: string;
    cacheDir?: string;
    tsconfigPath: string | undefined;
    intentDirs: string[];
    typeCheckPreflight: boolean;
    disableStaticImages: boolean;
    hasAppDir: boolean;
    hasPagesDir: boolean;
    isolatedDevBuild: boolean | undefined;
}): Promise<{
    result?: TypeCheckResult;
    version: string | null;
}>;
