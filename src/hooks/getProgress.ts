const getProgress = (
    progress: number | undefined,
    xhr?: XMLHttpRequest,) => {
        
    //console.log("getProgress", progress, xhr);
    if (progress !== undefined) {
        return progress;
    } else {
        if (xhr !== undefined && xhr !== null && xhr.upload.onprogress === null) {
            // xhr was given but it was not initialized the `onprogress` event
            xhr.upload.onprogress = (event: ProgressEvent<EventTarget>) => {
                //console.log("getProgress progress", progress, (event.loaded / event.total) * 100);


                return (event.loaded / event.total) * 100;

            };
            //initial progress value set to 0
            return 0;
        }
        //return undefined;
    }
}
export default getProgress;