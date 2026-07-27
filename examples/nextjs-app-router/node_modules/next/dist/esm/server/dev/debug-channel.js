import { createBufferedTransformStream } from '../stream-utils/node-web-streams-helper';
import { HMR_MESSAGE_SENT_TO_BROWSER } from './hot-reloader-types';
const reactDebugChannelsByRequestId = new Map();
export function connectReactDebugChannel(requestId, sendToClient) {
    const debugChannel = reactDebugChannelsByRequestId.get(requestId);
    if (!debugChannel) {
        return;
    }
    const reader = debugChannel.readable.pipeThrough(// We're sending the chunks in batches to reduce overhead in the browser.
    createBufferedTransformStream({
        maxBufferByteLength: 128 * 1024
    })).getReader();
    const stop = ()=>{
        sendToClient({
            type: HMR_MESSAGE_SENT_TO_BROWSER.REACT_DEBUG_CHUNK,
            requestId,
            chunk: null
        });
        reactDebugChannelsByRequestId.delete(requestId);
    };
    const onError = (err)=>{
        console.error(Object.defineProperty(new Error('React debug channel stream error', {
            cause: err
        }), "__NEXT_ERROR_CODE", {
            value: "E810",
            enumerable: false,
            configurable: true
        }));
        stop();
    };
    const progress = (entry)=>{
        if (entry.done) {
            stop();
        } else {
            sendToClient({
                type: HMR_MESSAGE_SENT_TO_BROWSER.REACT_DEBUG_CHUNK,
                requestId,
                chunk: entry.value
            });
            reader.read().then(progress, onError);
        }
    };
    reader.read().then(progress, onError);
}
export function setReactDebugChannel(requestId, debugChannel) {
    reactDebugChannelsByRequestId.set(requestId, debugChannel);
}
export function deleteReactDebugChannel(requestId) {
    reactDebugChannelsByRequestId.delete(requestId);
}

//# sourceMappingURL=debug-channel.js.map