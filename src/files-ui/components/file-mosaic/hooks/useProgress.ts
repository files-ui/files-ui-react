import * as React from "react";

/**
 * @param progress the progress given as a prop to the component
 * @param xhr the XMLHttpRequest object for AJAX operations
 * @returns the progress to be shown in the component
 */
const useProgress = (
    progress: number | undefined,
    xhr?: XMLHttpRequest,

): number | undefined => {
    console.log("getProgress", progress, xhr);

    const [localProgress, setLocalProgress] = React.useState<number | undefined>(undefined);

    if (progress !== undefined) {
        if (localProgress !== progress) {
            setLocalProgress(progress);
        }

    } else {
        if (xhr !== undefined && xhr !== null && xhr.upload.onprogress === null) {
            // xhr was given but it was not initialized the `onprogress` event
            xhr.upload.onprogress = (event: ProgressEvent<EventTarget>) => {
                console.log("getProgress progress", progress, (event.loaded / event.total) * 100);


                setLocalProgress((event.loaded / event.total) * 100);

            };
            //initial progress value set to 0
            setLocalProgress(0);
        }
        //return undefined;
    }

    return localProgress;
}
export default useProgress;