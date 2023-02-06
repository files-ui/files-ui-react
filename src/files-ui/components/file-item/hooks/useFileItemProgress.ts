import * as React from "react";

/**
 * 
 * @param progress 
 * @param showProgress 
 * @param xhr 
 * @returns 
 */
const useFileItemProgress = (
    progress: number | undefined,
    showProgress: boolean | undefined,
    xhr?: XMLHttpRequest,

): number | undefined => {

    const [localProgress, setLocalProgress] = React.useState<number | undefined>(undefined);
    // handlers
    const handleProgress = (currentProgress: number): void => {
        setLocalProgress(currentProgress);
    };

    React.useEffect(() => {
        if (progress && showProgress)
            handleProgress(typeof progress === "undefined" || progress === 0 ? 1 : progress);
    }, [progress, showProgress]);


    React.useEffect(() => {
        if (xhr && xhr !== null && showProgress && xhr.upload.onprogress === null) {
            xhr.upload.onprogress = (event) => {
                if (!progress)
                    handleProgress((event.loaded / event.total) * 100);
            };
            handleProgress(1);
        }
    }, [xhr, showProgress, progress]);

    return localProgress;
}
export default useFileItemProgress;