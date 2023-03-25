import { UPLOADSTATUS } from "theamazingunkowntext"
import * as React from "react";
export const useIsUploading = (uploadStatus: UPLOADSTATUS | undefined): boolean => {

    const [isUploading, setIsUploading] = React.useState<boolean>(false);

    const [lastUploadStatus, setLastUploadStatus] = React.useState<
        UPLOADSTATUS | undefined
    >(uploadStatus);


    React.useEffect(() => {
        setLastUploadStatus(uploadStatus);
        if (
            ["uploading", "preparing"].includes(lastUploadStatus || "") &&
            ["success", "error", "aborted"].includes(uploadStatus || "")
        ) {
            setTimeout(() => {
                setIsUploading(false);
            }, 3500);
            return;
        } else {
            //base comparison
            setIsUploading(
                uploadStatus === "preparing" || uploadStatus === "uploading"
            );
        }
        // eslint-disable-next-line
    }, [uploadStatus]);


    return isUploading;
}