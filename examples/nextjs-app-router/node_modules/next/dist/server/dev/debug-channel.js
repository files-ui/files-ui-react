"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    connectReactDebugChannel: null,
    deleteReactDebugChannel: null,
    setReactDebugChannel: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    connectReactDebugChannel: function() {
        return connectReactDebugChannel;
    },
    deleteReactDebugChannel: function() {
        return deleteReactDebugChannel;
    },
    setReactDebugChannel: function() {
        return setReactDebugChannel;
    }
});
const _nodewebstreamshelper = require("../stream-utils/node-web-streams-helper");
const _hotreloadertypes = require("./hot-reloader-types");
const reactDebugChannelsByRequestId = new Map();
function connectReactDebugChannel(requestId, sendToClient) {
    const debugChannel = reactDebugChannelsByRequestId.get(requestId);
    if (!debugChannel) {
        return;
    }
    const reader = debugChannel.readable.pipeThrough(// We're sending the chunks in batches to reduce overhead in the browser.
    (0, _nodewebstreamshelper.createBufferedTransformStream)({
        maxBufferByteLength: 128 * 1024
    })).getReader();
    const stop = ()=>{
        sendToClient({
            type: _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.REACT_DEBUG_CHUNK,
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
                type: _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.REACT_DEBUG_CHUNK,
                requestId,
                chunk: entry.value
            });
            reader.read().then(progress, onError);
        }
    };
    reader.read().then(progress, onError);
}
function setReactDebugChannel(requestId, debugChannel) {
    reactDebugChannelsByRequestId.set(requestId, debugChannel);
}
function deleteReactDebugChannel(requestId) {
    reactDebugChannelsByRequestId.delete(requestId);
}

//# sourceMappingURL=debug-channel.js.map