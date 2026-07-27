type GetCacheSignal = () => AbortSignal | null;
export declare function registerGetCacheSignal(getSignal: GetCacheSignal): void;
declare const DIMMED_STYLE = "dimmed";
declare const HIDDEN_STYLE = "hidden";
type LogStyle = typeof DIMMED_STYLE | typeof HIDDEN_STYLE;
export declare function setAbortedLogsStyle(style: LogStyle): void;
export {};
