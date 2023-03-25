import { Localization, UPLOADSTATUS } from "theamazingunkowntext"


export interface FileMosaicStatusProps {
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
    localization?: Localization;


    style?:React.CSSProperties;

}