import * as React from "react";
import { fileSizeFormater, shrinkWord } from "../../../../core";
import DownloadHidden from "../../../download-hidden/DownloadHidden";
import { mergeProps } from "../../../overridable";
import { Tooltip } from "../../../tooltip";
import useFileItemRootClassName from "../../hooks/useFileItemClassName";
import { getLocalFileItemData } from "../../utils/getLocalFileItemData";
import { showFileItemComponent } from "../../utils/showFileItemComponent";
import { FileItemProps, FileItemPropsDefault } from "./FileItemProps";
import "./FileItem.scss";
import FileItemImage from "../FileItemImage/FileItemImage";
import useFileItemInitializer from "../../hooks/useFileItemInitializer";
import FileItemMainLayer from "../FileItemMainLayer/MainLayer/FileItemMainLayer";
import useFileItemProgress from "../../hooks/useFileItemProgress";
import FileItemFullInfoLayer from "../FileItemFullInfoLayer/FileItemFullInfoLayer";

const FileItem: React.FC<FileItemProps> = (props: FileItemProps) => {
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

    alwaysActive,

    resultOnTooltip,

    onDelete,
    onCancel,
    onAbort,

    onDownload,
    onSee,
    onWatch,

    onlyImage,

    hd,

    downloadUrl,

    showProgress,

    onDoubleClick,
    onRightClick,
  } = mergeProps(props, FileItemPropsDefault);

  //ref for anchor element
  const downloadAnchorRef = React.useRef<HTMLAnchorElement>(null);

  /*************** HOVERING ***************/
  const [hovering, setHOvering] = React.useState<boolean>(false);
  const handleOnHoverEnter: React.MouseEventHandler<HTMLDivElement> = () => {
    setHOvering(true);
  };
  const handleOnHoverLeave: React.MouseEventHandler<HTMLDivElement> = () => {
    setHOvering(false);
  };
  //className created
  const rootClassNameCreated: string | undefined = useFileItemRootClassName(
    resultOnTooltip,
    className,
    hovering
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
  //alwaysActive
  const [showInfo, setShowInfo] = React.useState<boolean>(false);

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
  const handleOpenInfo = () => {
    setShowInfo(true);
  };
  //close info layer
  const handleCloseInfo = () => {
    setShowInfo(false);
  };
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
        className={rootClassNameCreated}
        style={style}
        onMouseEnter={handleOnHoverEnter}
        onMouseLeave={handleOnHoverLeave}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onContextMenu={handleRightClick}
      >
        <div className={`file-item-icon-container ${showInfo ? " hide" : ""}`}>
          <FileItemImage
            imageSource={imageSource}
            url={url}
            fileName={localName}
            backgroundBlurImage={backgroundBlurImage as boolean}
          />
          <FileItemMainLayer
            showInfo={showInfo}
            fileName={localName}
            onDelete={onDelete ? handleDelete : undefined}
            onOpenImage={onSee && preview ? handleOpenImage : undefined}
            onOpenVideo={onWatch && preview ? handleOpenVideo : undefined}
            onDownloadFile={
              onDownload || downloadUrl ? handleDownload : undefined
            }
            isVideo={isVideo}
            onOpenInfo={handleOpenInfo}
            info={info || false}
            valid={valid}
            isImage={isImage}
            sizeFormatted={sizeFormatted}
            uploadStatus={uploadStatus}
            localization={localization}
            hovering={alwaysActive || hovering}
            progress={localProgress}
            onAbort={onAbort ? handleAbort : undefined}
            onCancel={onCancel ? handleCancel : undefined}
          />
          <FileItemFullInfoLayer
            showInfo={showInfo}
            errors={errors}
            fileName={localName}
            fileSize={sizeFormatted}
            fileType={localType}
            valid={valid}
            onClose={handleCloseInfo}
            uploadStatus={uploadStatus}
            uploadMessage={uploadMessage}
            localization={localization}
            resultOnTooltip={resultOnTooltip}
          />
        </div>
        {!onlyImage && (
          <div
            className={darkMode ? "file-item-name dark-mode" : "file-item-name"}
          >
            {/* {shrinkWord(localName)} */}
            {localName}
          </div>
        )}
        <Tooltip
          open={resultOnTooltip}
          //open={true}
          uploadStatus={uploadStatus}
          valid={valid}
          errors={errors}
          uploadMessage={uploadMessage}
        ></Tooltip>
        <DownloadHidden
          downloadUrl={downloadUrl}
          anchorRef={downloadAnchorRef}
          fileName={localName}
        />
      </div>
    );
  }
  return <></>;
};
export default FileItem;
