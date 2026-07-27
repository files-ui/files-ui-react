"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "needsExperimentalReact", {
    enumerable: true,
    get: function() {
        return needsExperimentalReact;
    }
});
function needsExperimentalReact(config) {
    const { taint } = config.experimental || {};
    return Boolean(taint);
}

//# sourceMappingURL=needs-experimental-react.js.map