import * as React from "react";
import { FileCardProps } from "./FileCardProps";
import "./FileCard.scss";
import "./components/FileCardPaper.scss";
import { getLocalFileItemData } from "../file-item/utils/getLocalFileItemData";
import { fileSizeFormater, handleClickUtil, shrinkWord } from "../../core";
import useProgress from "../file-mosaic/hooks/useProgress";
import useFileMosaicInitializer from "../file-mosaic/hooks/useFileMosaicInitializer";
import { useIsUploading } from "../file-mosaic/hooks/useIsUploading";
import LayerContainer from "../file-mosaic/components/file-mosaic-layer/LayerContainer";
import Layer from "../file-mosaic/components/file-mosaic-layer/Layer";
import FileMosaicImageLayer from "../file-mosaic/components/FIleMosaicImageLayer/FileMosaicImageLayer";
import FileCardRightActions from "./components/FileCardRightActions";
import FileCardInfoLayer from "./components/FileCardInfoLayer";
import FileMosaicStatus from "../file-mosaic/components/FileMosaicStatus/FileMosaicStatus";
import FileCardUploadLayer from "./components/FileCardUploadLayer";
import { Tooltip } from "../tooltip";
import DownloadHidden from "../download-hidden/DownloadHidden";

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
  className: string | undefined,
  clickable?: boolean
): string => {
  console.log("FileCard makeFileCardClassName", elevation, darkMode, className);
  let finalClassName: string =
    "files-ui-file-card-main-container files-ui-tooltip card";

  if (elevation) {
    finalClassName += " elevation-" + setFinalElevation(elevation);
  }
  if (darkMode) {
    finalClassName += " dark-mode";
  }
  if (clickable) finalClassName += " clickable";
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
    videoUrl,
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

    elevation = 4,
    smartImgFit = "orientation",
    //} = mergeProps(props, FileCardPropsDefault);
  } = props;

  //ref for anchor element
  const downloadRef = React.useRef<HTMLAnchorElement>(null);

  //className created
  const finalClassName: string = makeFileCardClassName(
    elevation,
    darkMode,
    className,
    onClick !== undefined
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
  const [isReady, isImage, isVideo, url, imageSource, videoSource]: [
    boolean,
    boolean,
    boolean,
    string,
    string | undefined,
    File | string | undefined
  ] = useFileMosaicInitializer(
    file,
    propName,
    propType,
    valid,
    preview as boolean,
    imageUrl,
    videoUrl
  );
  //The size formatted and rounded in 2 decimals
  const sizeFormatted: string | undefined = fileSizeFormater(localSize);

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
    if (isUploading && showInfo) handleCloseInfo();

    // eslint-disable-next-line
  }, [isUploading]);

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
    onClick?.(e);
  }
  const handleDoubleClick: React.MouseEventHandler<HTMLDivElement> = (
    evt: React.MouseEvent
  ): void => {
    //alert("double click on file");
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

  const handleAbort = () => {
    xhr?.abort();
    onAbort?.(id);
  };

  if (isReady) {
    return (
      <div
        className={finalClassName}
        style={style}
        onClick={handleClick}
        onMouseEnter={handleOnHoverEnter}
        onMouseLeave={handleOnHoverLeave}
        onDoubleClick={handleDoubleClick}
        onContextMenu={handleRightClick}
      >
        <LayerContainer className="files-ui-file-card-main-layer-container">
          <Layer className="file-card-main-layer" visible={true}>
            <div className="file-card-icon-plus-data">
              {/** ICON + STATUS */}
              <div className="file-card-icon-container">
                <LayerContainer className="file-card-icon-layer">
                  {/** IMAGE LAYER BLUR */}
                  <Layer
                    className="file-card-icon-layer blur"
                    visible={backgroundBlurImage}
                  >
                    <FileMosaicImageLayer
                      imageSource={imageSource}
                      fileName={localName}
                      url={url}
                      isBlur={true}
                      smartImgFit={false}
                    />
                  </Layer>
                  {/** IMAGE LAYER NO BLUR */}
                  <Layer className="file-card-icon-layer" visible={true}>
                    <FileMosaicImageLayer
                      imageSource={imageSource}
                      url={url}
                      fileName={localName}
                      isBlur={false}
                      smartImgFit={smartImgFit}
                    />
                  </Layer>
                  <Layer className="file-card-status-layer" visible={true}>
                    <FileMosaicStatus
                      valid={valid}
                      uploadStatus={uploadStatus}
                      localization={localization}
                    />
                  </Layer>
                </LayerContainer>
              </div>
              {/**  DATA  */}
              <div
                className={
                  darkMode ? "file-card-data dark-mode" : "file-card-data"
                }
              >
                <div className={"file-card-name"}>{localName}</div>
                <div className={"file-card-size"}>{sizeFormatted}</div>
                <div className={"file-card-size"}>{shrinkWord(localType)}</div>
              </div>
            </div>
          </Layer>

          {/** INFO LAYER */}
          <Layer
            className="file-card-info-layer-container"
            visible={showInfo}
            onClick={handleClickUtil}
          >
            <FileCardInfoLayer
              onCloseInfo={handleCloseInfo}
              valid={valid}
              localization={localization}
              localName={localName}
              sizeFormatted={sizeFormatted}
              localType={localType}
            />
          </Layer>

          {/** UPLOAD LAYER */}
          <Layer
            className="file-card-upload-layer-container"
            visible={isUploading}
            onClick={handleClickUtil}
          >
            <div className="files-ui-file-card-upload-layer">
              <FileCardUploadLayer
                uploadStatus={uploadStatus}
                progress={localProgress}
                onCancel={onCancel ? () => onCancel?.(id) : undefined}
                onAbort={onAbort ? handleAbort : undefined}
                localization={localization}
              />
            </div>
          </Layer>
        </LayerContainer>
        <FileCardRightActions
          deleteIcon={onDelete !== undefined}
          onDelete={handleDelete}
          darkMode={darkMode}
          imageIcon={isImage && onSee !== undefined}
          onSee={() => onSee?.(imageSource)}
          videoIcon={isVideo && onWatch !== undefined}
          onWatch={() => onWatch?.(videoSource)}
          downloadIcon={onDownload !== undefined || downloadUrl !== undefined}
          onDownload={handleDownload}
          infoIcon={info !== undefined}
          onOpenInfo={handleOpenInfo}
          isActive={alwaysActive || hovering}
          visible={!isUploading && !showInfo}
        />
        <Tooltip
          open={resultOnTooltip}
          uploadStatus={uploadStatus}
          valid={valid}
          errors={errors}
          uploadMessage={uploadMessage}
        />
        <DownloadHidden
          fileName={localName}
          anchorRef={downloadRef}
          downloadUrl={downloadUrl}
        />
      </div>
    );
  }
  return <></>;
};
export default FileCard;
