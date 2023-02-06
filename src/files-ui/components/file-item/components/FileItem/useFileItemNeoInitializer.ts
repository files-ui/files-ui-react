import * as React from "react";
import { getURLFileIco, readAsDataURL } from "../../../../core";

/**
 * Initializer hook for FileItemNeo
 * @param file The file Object
 * @param valid Whether the file is valid, not valid or not set
 * @param preview Whether to show a preview on FileItem
 * @param imageUrl The image url
 * @param xhr the xhr object
 * @param progress the current progress given by props
 * @returns an array thta contains the following properties [isImage, isVideo, url, imageSource, localProgress]
 */
const useFileItemNeoInitializer = (
    file: File | undefined,
    valid: boolean | undefined | null,
    preview: boolean,
    imageUrl: string | undefined,
    xhr?: XMLHttpRequest,

): [boolean, boolean, string, string | undefined] => {

    const [isImage, setIsImage] = React.useState<boolean>(false);
    const [isVideo, setIsVideo] = React.useState<boolean>(false);
    const [url, setUrl] = React.useState<string>("");
    const [imageSource, setImageSource] = React.useState<string | undefined>(undefined);
    
  

    const init = async (
        file: File | undefined,
        valid: boolean | undefined | null,
        preview: boolean,
        imageUrl: string | undefined,
        xhr?: XMLHttpRequest, 
        progress?: number
    ) => {
        //////////////////////////////
        if (!file) return;
        const { url } = getURLFileIco(file as File);
        //console.log("init", url);
        setUrl(url);
        if (imageUrl) {
            setIsImage(true);
            setImageSource(imageUrl);
            return;
        } else {
            const headerMime: string = file.type ? file.type.split("/")[0] : "octet";
            const tailMime: string = file.type ? file.type.split("/")[1] : "octet";
            setIsImage(headerMime === "image");
            setIsVideo(
                headerMime === "video" && ["mp4", "ogg", "webm"].includes(tailMime)
            );
            if (
                preview &&
                (valid || typeof valid === "undefined" || valid === null) &&
                headerMime === "image"
            ) {
                const response = await readAsDataURL(file);
                //console.log("response image", response);
                if (response) {
                    setImageSource(response as string);
                    //check if resize image is enabled
                } else {
                    setImageSource(undefined);
                }
            }
        }
        /////////////// UPLOAD OBJECT ///////////////
        
        //if (!localProgress) {
        //handleProgress(1);
        //}
    };



    //////   EFFECT
    React.useEffect(() => {
        init(file, valid, preview || false, imageUrl);
        return () => {
            setImageSource(undefined);
            setIsImage(false);
            setIsVideo(false);
        };
        // eslint-disable-next-line
    }, [file, valid, preview, imageUrl,]);
    return [isImage, isVideo, url, imageSource];
}
export default useFileItemNeoInitializer;