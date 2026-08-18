import * as React from "react";

/**
 * @param progress the progress given as a prop to the component
 * @param xhr the XMLHttpRequest object for AJAX operations
 * @returns the progress to be shown in the component
 */
export const useProgress = (
    progress: number | undefined,
    xhr?: XMLHttpRequest,

): number | undefined => {
    const [localProgress, setLocalProgress] = React.useState<number | undefined>(progress);

    React.useEffect(() => {
        if (progress !== undefined) {
            setLocalProgress(progress);
            return;
        }

        if (!xhr) {
            setLocalProgress(undefined);
            return;
        }

        const onProgress = (event: ProgressEvent<EventTarget>) => {
            if (!event.lengthComputable || event.total <= 0) {
                return;
            }

            setLocalProgress((event.loaded / event.total) * 100);
        };

        xhr.upload.onprogress = onProgress;
        setLocalProgress(0);

        return () => {
            if (xhr.upload.onprogress === onProgress) {
                xhr.upload.onprogress = null;
            }
        };
    }, [progress, xhr]);

    return localProgress;
}