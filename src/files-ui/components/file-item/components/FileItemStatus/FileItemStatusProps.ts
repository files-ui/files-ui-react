import { Localization, UPLOADSTATUS } from "../../../../core";


export interface FileItemStatusProps {
    /**
     * whether show a valid or rejected message
     * by def. valid is false (if not present, is false too)
     */
    valid?: boolean | null;
    /**
     * 
     */
    uploadStatus?: UPLOADSTATUS;
    /**
     * A message for the status item
     */
    message?: string;
    /**
    * language to be used
    * for now
    * only English and Spanish is supported
    */
    localization: Localization;
    /**
     * the current percentage upload progress
     * 
     */
    progress?: number;
    /**
     * abort event 
     */
    onAbort?: Function;
}