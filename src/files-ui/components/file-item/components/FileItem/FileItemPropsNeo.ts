import { Localization, UPLOADSTATUS } from "../../../../core";
import { OverridableComponentProps } from "../../../overridable";



export interface FileItemPropsNeoMap extends OverridableComponentProps {
    /**
     * The file object
     */
    file?: File;
    /**
     * A function of what to do when close button is pressed or clicked
     */
    onDelete?: (fileId: number | string | undefined) => void;
    /**
     * A function that return a file object when "see" button is pressed or clicked
     */
    onSee?: (imageUrl: string) => void;
    /**
     * A function that return a file object when "play" button is presssed or clicked
     */
    onWatch?: (videoUrl: File) => void;
    /**
     * Whether to see as grid or inline (horizontal list)
     */
    errors?: string[];
    /**
     * individual validator for each file
     */
    //validator?: FileItemValidator;
    /**
     * identifier for the file
     */
    id?: string | number;
    /**
     * if true, and if the file is an image,
     * makes visible the "view" button that will get the image url
     * Also, it will be visible only when file is valid
     */
    preview?: boolean;
    /**
    * whether to show a valid or rejected message ("ok", "rejected")
    * by def. valid is false (if not present, it's false too)
    * This value wil affect preview behaviour,
    * If not valid, the preview will not be shown, nor the view button
    */
    valid?: boolean | null;
    /**
    * This feature is hidden, it is not present on the documentation
    * because it's experimental. If you found this prop, you can test it 
    * and comment us if any issue is found. Thanks in advance.
    * 
    * Make file name, info layer, size and "valid message"
    * not visible
    */
    onlyImage?: boolean;
    /** 
     * whether to show the info layer or not
     * also whether to make visible the info button or not ,
     * Only works when given a image file
     */
    info?: boolean;
    /**
     * A string representation or web url of the image
     * that will be set to the "src" prop of an <img/> tag
     * <img src={`${url}`} />
     */
    imageUrl?: string;
    /**
     * The message from server
     */
    uploadMessage?: string;
    /**
     * where to place the file name
     * [in construction]
     */
    //fileName?: "bottom" | "inside";
    /**
     * The current upload status of the file
     */
    uploadStatus?: UPLOADSTATUS;
    /**
     * If present, preview on full screen will
     * be presented in the real image resolution
     */
    hd?: boolean | undefined;
    /**
     * language to be used
     * for now
     * only English and Spanish is supported
     */
    localization?: Localization;
    /**
     * The elevation or shadow of container
     * range of shadows is from 0 to 4,
     * other number o values are considered as 0
     */
    elevation?: "1" | "2" | "3" | "4" | 1 | 2 | 3 | 4 | false;
    /**
     * Flag that determines whether actions are visible always, or only on hover event
     */
    alwaysActive?: boolean;
    /**
     * Where to display result of validation: on InfoLayer or in Tooltip when user hovers the FileItem
     */
    resultOnTooltip?: boolean;
    /**
     * Url to perform a GET request in order to download the file.
     * This  action is triggered when download button is clicked or pressed.
     * In case onDownload prop is given
     */
    downloadUrl?: string;
    /**
     * Event that is triggered when download button is clicked or pressed
     */
    onDownload?: (fileId: number | string | undefined, downloadUrl?: string) => void;
    /**
     * the current percentage upload progress
     *
     */
    progress?: number;
    /**
     * Whether to show progress or not.
     * @default true if xhr is initialized
     */
    showProgress?: boolean;
    /**
     * abort event
     */
    onAbort?: Function;
    /**
     * cancel when preparing event
     */
    onCancel?: Function;
    /**
     * A reference to the XHR object that allows the upload and abort event.
     *  and progress
     */
    xhr?: XMLHttpRequest;
}
export type FileItemPropsNeo = {
    [F in keyof FileItemPropsNeoMap]: FileItemPropsNeoMap[F]
}
/**
 * Base default props
 */
export const FileItemNeoPropsDefault: FileItemPropsNeo = {
    onDelete: undefined,
    file: undefined,
    //color: "#071e25",
    //  validator: undefined,
    id: undefined,
    style: {},
    preview: false,
    valid: undefined,
    info: false,
    hd: undefined,
    localization: "EN-en",
    onlyImage: false,
    imageUrl: undefined,
    errors: undefined,
    elevation: false,
    alwaysActive: undefined,
    progress: undefined,
    showProgress: true
    //fileName: "bottom"
}
