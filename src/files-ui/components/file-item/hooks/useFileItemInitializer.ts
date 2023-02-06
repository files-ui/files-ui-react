import * as React from "react";
import { getURLFileIco, readAsDataURL } from "../../../core";
import { getURLFileIcoFromNameAndType } from "../../../core/mime/mime";

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
const useFileItemInitializer = (
    file: File | undefined,
    name: string | undefined,
    type: string | undefined,
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
        name: string | undefined,
        type: string | undefined,
        valid: boolean | undefined | null,
        preview: boolean,
        imageUrl: string | undefined,
        xhr?: XMLHttpRequest,
        progress?: number
    ) => {
        //////////////////////////////
        //console.log("init", file, name, type);

        if (!file && (!name && !type)) return;

        const { url } = file ? getURLFileIco(file) :
            getURLFileIcoFromNameAndType(name, type);

        //console.log("init", url);

        setUrl(url);

        if (imageUrl) {
            setIsImage(true);
            setImageSource(imageUrl);
            return;
        } else {
            const [headerMime, tailMime] = getHeaderAndTail(file, type);

            setIsImage(headerMime === "image");
            setIsVideo(
                headerMime === "video" && ["mp4", "ogg", "webm"].includes(tailMime)
            );
            if (
                preview &&
                (valid || typeof valid === "undefined" || valid === null) &&
                headerMime === "image"
            ) {
                //lets check for image preview from File
                let response: string | undefined = undefined;
                if (file) {
                    response = await readAsDataURL(file);
                    if (response) {
                        setImageSource(response as string);
                    }
                }
                //console.log("response image", response);

            }
        }
        /////////////// UPLOAD OBJECT ///////////////

        //if (!localProgress) {
        //handleProgress(1);
        //}
    };



    //////   EFFECT
    React.useEffect(() => {
        init(file, name, type, valid, preview || false, imageUrl);
        return () => {
            setImageSource(undefined);
            setIsImage(false);
            setIsVideo(false);
        };
        // eslint-disable-next-line
    }, [file, name, type, valid, preview, imageUrl,]);
    return [isImage, isVideo, url, imageSource];
}
export default useFileItemInitializer;

/* export const identifyFileSource = (file: File | undefined, name: string, fileType: string) => {
    if(!file){

    }
} */

const getHeaderAndTail = (
    file: File | undefined,
    type: string | undefined,
): [string, string] => {

    if (file) {
        if (file.type) {
            const splittedType: string[] = file.type.split("/");
            return [splittedType[0], splittedType[1]];
        } else {
            return ["octet", "octet"];
        }
    } else {
        const splittedType: string[] | undefined = type?.split("/");
        if (splittedType && splittedType.length > 1) {
            return [splittedType[0], splittedType[1]];
        } else {
            return ["octet", "octet"];
        }
    }


}