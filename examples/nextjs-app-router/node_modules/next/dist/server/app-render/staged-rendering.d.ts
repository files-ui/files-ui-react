export declare enum RenderStage {
    Static = 1,
    Runtime = 2,
    Dynamic = 3
}
export type NonStaticRenderStage = RenderStage.Runtime | RenderStage.Dynamic;
export declare class StagedRenderingController {
    private abortSignal;
    currentStage: RenderStage;
    private runtimeStagePromise;
    private dynamicStagePromise;
    constructor(abortSignal?: AbortSignal | null);
    advanceStage(stage: NonStaticRenderStage): void;
    private getStagePromise;
    waitForStage(stage: NonStaticRenderStage): Promise<void>;
    delayUntilStage<T>(stage: NonStaticRenderStage, displayName: string | undefined, resolvedValue: T): Promise<T>;
}
