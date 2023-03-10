import { Localization, UPLOADSTATUS } from "../../../../core";
import { OverridableComponentProps } from "../../../overridable";

export interface FileMosaicPropsMap extends OverridableComponentProps {
    /**
     * The identifier for the file
     */
    id?: string | number;
    /**
     * The file object obtained from client drop or selection
     */
    file?: File;
    /**
     * The name of the file
     */
    name?: string;
    /**
     * The file mime type
     */
    type?: string;
    /**
     * the size of the file in bytes
     */
    size?: number;
    /**
    * whether to show a valid or rejected message ("ok", "rejected")
    * by def. valid is false (if not present, it's false too)
    * This value wil affect preview behaviour,
    * If not valid, the preview will not be shown, nor the view button
    */
    valid?: boolean | null;
    /**
     * The list of errors according to the validation criteria or custom validation function given.
     */
    errors?: string[];
    /**
     * The message from server
     */
    uploadMessage?: string;
    /**
     * The current upload status of the file
     */
    uploadStatus?: UPLOADSTATUS;
    /**
     * if true, and if the file is an image,
     * makes visible the "view" button that will get the image url
     * Also, it will be visible only when file is valid
     */
    preview?: boolean;
    /** 
     * whether to show the info layer or not
     * also whether to make visible the info button or not ,
     * Only works when given a image file
     */
    info?: boolean;
    /**
     * A string representation or web url of the image
     * that will be set to the "src" prop of an <img/> tag
     * <img src={`${imageUrl}`} />
     */
    imageUrl?: string;
    /**
     * A string representation or web url of the video
     * that will be set to the "src" prop of an <video/> tag
     * <video src={`${videoUrl}`} />
     */
    videoUrl?: string;
    /**
    * If true, a background blur image will be shown
    */
    backgroundBlurImage?: boolean;
    /**
    * If true, dark mode colors are used in the component.
    */
    darkMode?: boolean;
    /**
     * language to be used
     * for now
     * only English and Spanish is supported
     */
    localization?: Localization;
    /**
     * The current percentage of upload progress.
     * This value will have a higher priority over the upload progress value calculated inside the component.
     * @default undefined
     */
    progress?: number;
    /**
     * A reference to the XHR object that allows the upload and abort event.
     *  and progress
     */
    xhr?: XMLHttpRequest;
    /**
     * A function that return a file object when "see" button is pressed or clicked
     */
    onSee?: (imageSource: string | undefined) => void;
    /**
     * A function that return a file object when "play" button is presssed or clicked
     */
    onWatch?: (videoSource: File | string | undefined) => void;
    /**
     * Event that is triggered when `delete` button is clicked or pressed.
     * If present, `delete` button will be visible.
     */
    onDelete?: (fileId: number | string | undefined) => void;
    /**
     * Event that is triggered when `abort` button is clicked or pressed during `uploading` event
     * If present, `abort` button in `uploading` phase will be visible.
     */
    onAbort?: (fileId: number | string | undefined) => void;
    /**
     * Event that is triggered when `cancel` button is clicked or pressed during `preparing` event
     * If present, `cancel` button in `preparing` phase will be visible.
     */
    onCancel?: (fileId: number | string | undefined) => void;
    /**
     * Event that is triggered when `download` button is clicked or pressed.
     * If present, `download` button will be visible.
     */
    onDownload?: (fileId: number | string | undefined, downloadUrl?: string) => void;
    /**
     * Event that is triggered when user clicks the component
     */
    onClick?: (evt: React.MouseEvent) => void;
    /**
     * Event that is triggered when user double clicks the component
     */
    onDoubleClick?: (evt: React.MouseEvent) => void;
    /**
     * Event that is triggered when user right clicks the component
     */
    onRightClick?: (evt: React.MouseEvent) => void;

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
     * This action is triggered when download button is clicked or pressed.
     * In case onDownload prop is given
     */
    downloadUrl?: string;
}
//React.HTMLProps<HTMLDivElement>
export type FileMosaicProps =
    /*   {
        [D in keyof React.HTMLProps<HTMLDivElement>]: React.HTMLProps<HTMLDivElement>[D]
      } & */
    {
        [F in keyof FileMosaicPropsMap]: FileMosaicPropsMap[F]
    }
