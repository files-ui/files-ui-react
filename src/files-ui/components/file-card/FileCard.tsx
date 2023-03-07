import * as React from "react";
import { FileCardProps, FileCardPropsDefault } from "./FileCardProps";
import "./FileCard.scss";
import "./FileCardPaper.scss";
import FileItemImage from "../file-item/components/FileItemImage/FileItemImage";
import useFileItemInitializer from "../file-item/hooks/useFileItemInitializer";
import { getLocalFileItemData } from "../file-item/utils/getLocalFileItemData";
import { Clear } from "../icons";
import { fileSizeFormater, shrinkWord } from "../../core";
import { mergeProps } from "../overridable";
import { showFileItemComponent } from "../file-item/utils/showFileItemComponent";
import useFileItemProgress from "../file-item/hooks/useFileItemProgress";
import MainLayerBodyNeo from "../file-item/components/FileItemMainLayer/MainLayerBody/MainLayerBodyNeo";
import useProgress from "../file-mosaic/hooks/useProgress";
import useFileMosaicInitializer from "../file-mosaic/hooks/useFileMosaicInitializer";
import { useIsUploading } from "../file-mosaic/hooks/useIsUploading";

const setFinalElevation = (elevation: string | number): number => {
  //  let finalElevation: number  = "";
  let finalElevation = Number(elevation);

  if (!isNaN(finalElevation)) {
    if (finalElevation > 24) {
      return 24;
    } else if (finalElevation < 0) {
      return 0;
    } else {
      return finalElevation;
    }
  } else {
    return 0;
  }
};
const makeFileCardClassName = (
  elevation: FileCardProps["elevation"],
  darkMode: boolean | undefined,
  className: string | undefined
): string => {
  console.log("FileCard makeFileCardClassName", elevation, darkMode, className);
  let finalClassName: string = "files-ui-file-card-main-container";
  if (elevation) {
    finalClassName += " elevation-" + setFinalElevation(elevation);
  }
  if (darkMode) {
    finalClassName += " dark-mode";
  }
  if (className) {
    finalClassName += ` ${className}`;
  }
  console.log("FileCard finalClassName", finalClassName);

  return finalClassName;
};

const FileCard: React.FC<FileCardProps> = (props: FileCardProps) => {
  const {
    style,
    className,

    file,
    name: propName,
    size: propSize,
    type: propType,

    id,
    valid,
    errors,
    uploadStatus,
    uploadMessage,
    progress,

    xhr,

    localization,
    preview,
    imageUrl,
    info,
    backgroundBlurImage = true,
    darkMode,

    alwaysActive = true,

    resultOnTooltip = true,

    downloadUrl,

    onDelete,
    onCancel,
    onAbort,

    onDownload,
    onSee,
    onWatch,

    onDoubleClick,
    onClick,
    onRightClick,

    elevation=2,

    //} = mergeProps(props, FileCardPropsDefault);
  } = props;

  //ref for anchor element
  const downloadRef = React.useRef<HTMLAnchorElement>(null);

  const downloadAnchorRef = React.useRef<HTMLAnchorElement>(null);

  //className created
  const finalClassName: string = makeFileCardClassName(
    elevation,
    darkMode,
    className
  );

  // local properties from file
  const [localName, localType, localSize]: [
    string,
    string | undefined,
    number | undefined
  ] = getLocalFileItemData(file, propName, propType, propSize);

  // handle progress
  const localProgress: number | undefined = useProgress(progress, xhr);

  //Initialize File Item
  const [isReady, isImage, isVideo, url, imageSource]: [
    boolean,
    boolean,
    boolean,
    string,
    string | undefined
  ] = useFileMosaicInitializer(
    file,
    propName,
    propType,
    valid,
    preview as boolean,
    imageUrl
  );

  //The size formatted and rounded in 2 decimals
  const sizeFormatted: string = localSize
    ? fileSizeFormater(localSize)
    : "0 KB";

  //alwaysActive
  const [showInfo, setShowInfo] = React.useState<boolean>(false);

  /********* ALWAYS ACTIVE LOGIC  ***************/
  //state for actionOnHover
  const [hovering, setHovering] = React.useState<boolean>(false);
  const handleOnHoverEnter: React.MouseEventHandler<HTMLDivElement> = () => {
    if (alwaysActive) return;
    setHovering(true);
  };
  const handleOnHoverLeave: React.MouseEventHandler<HTMLDivElement> = () => {
    if (alwaysActive) return;
    setHovering(false);
  };

  /***************** HANDLERS **********/
  //delete file item
  const handleDelete = (): void => onDelete?.(id);

  //open info layer
  const handleOpenInfo = (): void => setShowInfo(true);

  //close info layer
  const handleCloseInfo = (): void => setShowInfo(false);

  const isUploading: boolean = useIsUploading(uploadStatus);

  React.useEffect(() => {
    //console.log("Change isUploading", isUploading);
    if (isUploading && showInfo) {
      handleCloseInfo();
    }
    // eslint-disable-next-line
  }, [isUploading]);

  /*************** Click ***************/
  /*************** CLICK ***************/
  /**
   * TO-DO: Add functionallity on click event
   * @param e event object
   */
  function handleClick<T extends HTMLDivElement>(
    e: React.MouseEvent<T, MouseEvent>
  ): void {
    //avoid children to trigger onClick ripple from parent
    e.stopPropagation();
    onClick?.(e);
  }
  const handleDoubleClick: React.MouseEventHandler<HTMLDivElement> = (
    evt: React.MouseEvent
  ): void => {
    alert("double click on file");
    evt.preventDefault();

    onDoubleClick?.(evt);
  };
  function handleRightClick(evt: React.MouseEvent) {
    // alert("right click!!!!");
    //get coordinates
    //zindex
    //create menu component
    // evt.preventDefault();
    onRightClick?.(evt);
  }

  // DOWNLOAD FILE
  /**
   * onDownload, form 1
   * Trigger dowload directly performing a click on anchor element
   */
  const innerDownload = () => {
    const anchorElement = downloadRef.current;
    if (anchorElement) {
      anchorElement.click();
    }
  };
  /**
   * onDownlad, form 2
   * Handle the download triggering an outside event
   */
  const handleDownload = () => {
    if (onDownload) {
      onDownload?.(id, downloadUrl);
    } else if (typeof downloadUrl == "string") {
      innerDownload();
    }
  };

  if (isReady) {
    return (
      <div
        className={finalClassName}
        style={style}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onContextMenu={handleRightClick}
      >
        <FileItemImage
          imageSource={imageSource}
          url={url}
          fileName={localName}
          backgroundBlurImage={backgroundBlurImage as boolean}
          card={true}
        />

        <div
          className={darkMode ? "file-card-data dark-mode" : "file-card-data"}
        >
          <div className={"file-card-name"}>{shrinkWord(localName, true)}</div>

          <div className={"file-card-size"}>{sizeFormatted}</div>
          <div className={"file-card-size"}>{shrinkWord(localType)}</div>
        </div>

        <div className="files-ui-file-card-right">
          <Clear
            style={{ position: "absolute", right: 0, top: 0 }}
            className="dui-file-item-icon"
            color="rgba(255,255,255,0.851)"
            onClick={handleDelete}
            size="small"
            colorFill="transparent"
          />
          <MainLayerBodyNeo
            hide={false}
            uploadStatus={uploadStatus}
            localization={localization}
            progress={progress}
            onAbort={onAbort}
            valid={valid}
            hovering={true}
            onCancel={onCancel}
          />
        </div>
      </div>
    );
  }
  return <></>;
};
export default FileCard;
