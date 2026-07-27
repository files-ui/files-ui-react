import { type HmrMessageSentToBrowser } from './hot-reloader-types';
export interface ReactDebugChannelForBrowser {
    readonly readable: ReadableStream<Uint8Array>;
}
export declare function connectReactDebugChannel(requestId: string, sendToClient: (message: HmrMessageSentToBrowser) => void): void;
export declare function setReactDebugChannel(requestId: string, debugChannel: ReactDebugChannelForBrowser): void;
export declare function deleteReactDebugChannel(requestId: string): void;
