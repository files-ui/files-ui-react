import * as React from "react";
import { print_manager } from "../../../../utils";
import { ExtFileManager } from "../../../core";

const useDropzoneFileListID = (
): number => {
    const [dropzoneId, setDuiFileID]
        = React.useState<number | undefined>(
            undefined
        );
    React.useEffect(() => {
        print_manager(undefined, "dropzoneId " + dropzoneId + "");
        if (!dropzoneId) {
            const newId: number = ExtFileManager.createFileListMap();
            setDuiFileID(newId);
        }
        // eslint-disable-next-line
    }, [dropzoneId]);

    return dropzoneId || 0;
}
export default useDropzoneFileListID;