import { ExtFile, ExtFileInstance, ExtFileManager } from "../types";

export const extFileReconcilation = (
    dropzoneId: number | string | undefined,
    extFileIncomming: ExtFile[]
): ExtFile[] | undefined => {
    let result: ExtFile[] = [];

    let arrOfExtFiles: ExtFileInstance[] | undefined =
        ExtFileManager.getExtFileInstanceList(dropzoneId);

    // continue only if arrOfExtFiles exists
    if (arrOfExtFiles) {
        //different sizes means there was deleted files
        //also can be new files to be uploaded
        //needed an extra flag to allow add files in the middle of uploading process
        // if new files are added, they are added to the Manager
        // outside they were already added to the UI
        // inside Dropzone, will be needed a .next() method for manager

        // 1st allow deleted files and ignore new ones
        // reduce the arrOfExtFileInstances array
        // parecido a listas ligadas, iterar hasta encontrar null XD
        let incommingTemp: ExtFile[] = [...extFileIncomming];
        incommingTemp = incommingTemp.filter(
            (F) => arrOfExtFiles?.findIndex(I => I.id === F.id) === -1
        );



        //different sizes not allowed
        if (arrOfExtFiles.length !== extFileIncomming.length || extFileIncomming.length === 0) {
            return undefined;
        }
        for (let i = 0; i < arrOfExtFiles.length; i++) {
            if (
                (extFileIncomming[i].uploadStatus === undefined)
                &&
                (arrOfExtFiles[i].uploadStatus === "preparing")
            ) {
                console.log("useDropzoneFileListUpdater onCancel i", i);
                arrOfExtFiles[i].uploadStatus = undefined;
            }
        }
    }

    return result;
}