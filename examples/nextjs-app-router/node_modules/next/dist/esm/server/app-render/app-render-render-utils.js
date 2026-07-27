import { InvariantError } from '../../shared/lib/invariant-error';
/**
 * This is a utility function to make scheduling sequential tasks that run back to back easier.
 * We schedule on the same queue (setTimeout) at the same time to ensure no other events can sneak in between.
 */ export function scheduleInSequentialTasks(render, followup) {
    if (process.env.NEXT_RUNTIME === 'edge') {
        throw Object.defineProperty(new InvariantError('`scheduleInSequentialTasks` should not be called in edge runtime.'), "__NEXT_ERROR_CODE", {
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
/**
 * This is a utility function to make scheduling sequential tasks that run back to back easier.
 * We schedule on the same queue (setTimeout) at the same time to ensure no other events can sneak in between.
 * The function that runs in the second task gets access to the first tasks's result.
 */ export function pipelineInSequentialTasks(one, two, three) {
    if (process.env.NEXT_RUNTIME === 'edge') {
        throw Object.defineProperty(new InvariantError('`pipelineInSequentialTasks` should not be called in edge runtime.'), "__NEXT_ERROR_CODE", {
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