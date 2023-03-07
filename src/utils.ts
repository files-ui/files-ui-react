import { ExtFile, ExtFileInstance } from "./files-ui";

export const print_manager = (extFileList: ExtFile[] | ExtFileInstance[] | undefined, message: string = ""): void => {
    if (extFileList)
        console.log(`FileManagerLog ${message}`, extFileList?.map(F => F.uploadStatus));
    else
        console.log(`FileManagerLog ${message}`);

}