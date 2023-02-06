import { getExt } from "../utils/getExt";

/**
 * Checks whether a file is valid or not given an array of file extentions and mime types
 * e.g. accept =  [".doc", ".docx", ".xml", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]
 * @param accept the array of strings accept items
 * @param file a File object to be evaluated
 * @returns true if the mime type file is included in the accept param
 */
 export const validateAccept = (accept: string[], file: File): boolean => {
    let valid: boolean = false;
    const { name, type } = file;
    //Array(5) [ ".doc", ".docx", ".xml", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ]
    for (let i = 0; i < accept.length; i++) {
        const acceptItem: string = accept[i];
        //check is not empty
        if (acceptItem.length !== 0) {
            //check extention
            if (acceptItem.charAt(0) === ".") {
                if (acceptItem.includes(getExt(name))) {
                    return true;
                }
            }
            //check mime
            // header/tail  => image/png  ;  image/* ; audio
            if (type && type.length > 0 && acceptItem.includes("/") && type.includes("/")) {
                let headerMime = acceptItem.split("/")[0];
                let tailMime = acceptItem.split("/")[1];

                let headerMimeFile = type.split("/")[0];
                let tailMimeFile = type.split("/")[1];

                if (headerMime === headerMimeFile) {
                    //    image/*
                    if (tailMime === "*") {
                        return true;
                    } else if (tailMime === tailMimeFile) {
                        return true;
                    }
                }
            }
        }
    }
    return valid;
}