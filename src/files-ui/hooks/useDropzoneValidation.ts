import * as React from "react"
import { CustomValidateFileResponse } from "../core";

export const useDropzoneValidation = (
    accept: string | undefined,
    maxFileSize: number | undefined,
    maxFiles: number | undefined,
    validator: ((f: File) => CustomValidateFileResponse) | undefined
) => {
    const [validateFlag, setValidateFlag] = React.useState<boolean>(false);
    React.useEffect(() => {
        //set the flag accordin to the props
        if (
            (accept && accept?.length > 0) ||
            (maxFileSize && maxFileSize >= 0) ||
            (maxFiles && maxFiles >= 0) ||
            validator
        ) {
            setValidateFlag(true);
        } else {
            setValidateFlag(false);
        }
    }, [accept, maxFileSize, maxFiles, validator]);

    return validateFlag;
}

