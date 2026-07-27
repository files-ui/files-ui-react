"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    pipelineInSequentialTasks: null,
    scheduleInSequentialTasks: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    pipelineInSequentialTasks: function() {
        return pipelineInSequentialTasks;
    },
    scheduleInSequentialTasks: function() {
        return scheduleInSequentialTasks;
    }
});
const _invarianterror = require("../../shared/lib/invariant-error");
function scheduleInSequentialTasks(render, followup) {
    if (process.env.NEXT_RUNTIME === 'edge') {
        throw Object.defineProperty(new _invarianterror.InvariantError('`scheduleInSequentialTasks` should not be called in edge runtime.'), "__NEXT_ERROR_CODE", {
            value: "E591",
            enumerable: false,
            configurable: true
        });
    } else {
        return new Promise((resolve, reject)=>{
            let pendingResult;
            setTimeout(()=>{
                try {
                    pendingResult = render();
                } catch (err) {
                    reject(err);
                }
            }, 0);
            setTimeout(()=>{
                followup();
                resolve(pendingResult);
            }, 0);
        });
    }
}
function pipelineInSequentialTasks(one, two, three) {
    if (process.env.NEXT_RUNTIME === 'edge') {
        throw Object.defineProperty(new _invarianterror.InvariantError('`pipelineInSequentialTasks` should not be called in edge runtime.'), "__NEXT_ERROR_CODE", {
            value: "E875",
            enumerable: false,
            configurable: true
        });
    } else {
        return new Promise((resolve, reject)=>{
            let oneResult = undefined;
            setTimeout(()=>{
                try {
                    oneResult = one();
                } catch (err) {
                    clearTimeout(twoId);
                    clearTimeout(threeId);
                    reject(err);
                }
            }, 0);
            let twoResult = undefined;
            const twoId = setTimeout(()=>{
                // if `one` threw, then this timeout would've been cleared,
                // so if we got here, we're guaranteed to have a value.
                try {
                    twoResult = two(oneResult);
                } catch (err) {
                    clearTimeout(threeId);
                    reject(err);
                }
            }, 0);
            const threeId = setTimeout(()=>{
                // if `two` threw, then this timeout would've been cleared,
                // so if we got here, we're guaranteed to have a value.
                try {
                    resolve(three(twoResult));
                } catch (err) {
                    reject(err);
                }
            }, 0);
        });
    }
}

//# sourceMappingURL=app-render-render-utils.js.map