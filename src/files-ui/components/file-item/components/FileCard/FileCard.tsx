import * as React from "react";
import { FileCardProps, FileCardPropsDefault } from "./FileCardProps";
import "./FileCard.scss";
import "./FileCardPaper.scss";
import FileItemImage from "../FileItemImage/FileItemImage";
import useFileItemInitializer from "../../hooks/useFileItemInitializer";
import { getLocalFileItemData } from "../../utils/getLocalFileItemData";
import { Clear } from "../../../icons";
import { fileSizeFormater, shrinkWord } from "../../../../core";
import { mergeProps } from "../../../overridable";
import { showFileItemComponent } from "../../utils/showFileItemComponent";
import useFileItemProgress from "../../hooks/useFileItemProgress";
import MainLayerBodyNeo from "../FileItemMainLayer/MainLayerBody/MainLayerBodyNeo";

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
  darkMode: boolean,
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
    file,
    name: propName,
    size: propSize,
    type: propType,
    onDelete,
    onSee,
    onWatch,
    style,
    preview,
    //onlyImage,
    info,
    id,
    valid,
    uploadStatus,
    uploadMessage,
    hd,
    localization,
    errors,
    imageUrl,
    elevation,
    alwaysActive,
    resultOnTooltip,
    downloadUrl,
    onDownload,
    progress,
    onAbort,
    xhr,
    onCancel,
    showProgress,
    className,
    onDoubleClick,
    onRightClick,
    backgroundBlurImage,
    darkMode,
  } = mergeProps(props, FileCardPropsDefault);

  //ref for anchor element
  const downloadAnchorRef = React.useRef<HTMLAnchorElement>(null);

  //className created
  const finalClassName: string = makeFileCardClassName(
    elevation,
    darkMode,
    className
  );

  const showFileItem: boolean = showFileItemComponent(
    file,
    propName
    // Boolean(rootClassNameCreated)
  );

  // local properties from file
  const [localName, localType, localSize]: [
    string,
    string | undefined,
    number | undefined
  ] = getLocalFileItemData(file, propName, propType, propSize);

  // handle progress
  const localProgress = useFileItemProgress(progress, showProgress, xhr);

  //Initialize File Item
  const [isImage, isVideo, url, imageSource]: [
    boolean,
    boolean,
    string,
    string | undefined
  ] = useFileItemInitializer(
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

  /*************** Click ***************/
  /**
   * TO-DO: Add functionallity on click event
   * @param e event object
   */
  function handleClick<T extends HTMLDivElement>(
    e: React.MouseEvent<T, MouseEvent>
  ): void {
    //avoid children to trigger onClick ripple from parent
    e.stopPropagation();
  }

  /***************** HANDLERS **********/
  //delete file item
  const handleDelete = (): void => {
    onDelete?.(id);
  };
  //open info layer
  /*  const handleOpenInfo = () => {
    setShowInfo(true);
  }; */
  //close info layer
  /*   const handleCloseInfo = () => {
    setShowInfo(false);
  }; */
  //handle watch video
  const handleOpenVideo = async () => {
    if (file) onWatch?.(file);
  };
  //open image
  const handleOpenImage = async () => {
    if (imageSource) {
      //  if (hd) {
      //    const response = await readImagePromise(file);
      //    onSee?.(response || "");
      //  } else {
      onSee?.(imageSource);
      //}
    }
  };

  /********** DOWNLOAD HANDLERS **********/
  /**
   * onDownload, form 1
   * Trigger dowload directly performing a click on anchor element
   */
  const innerDownload = () => {
    const anchorElement = downloadAnchorRef.current;
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
  /**
   * Perform abort event when xhr is given
   */
  const handleAbort = (): void => {
    //trigger abort event
    xhr?.abort();
    // handle externally the abort event
    onAbort?.(id);
  };
  /**
   * Handle onCancel event
   */
  const handleCancel = (): void => {
    // handle externally the cancel event
    onCancel?.(id);
  };

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
    // onRightClick?.(evt);
  }
  //console.log("FileItem onCancel", onCancel);

  if (showFileItem) {
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
