import * as React from "react";
import {
  addClassName,
  fileSizeFormater,
  handleClickUtil,
} from "../../../../core";
import { FileMosaicProps } from "./FileMosaicProps";
import "./FileMosaic.scss";
import LayerContainer from "../file-mosaic-layer/LayerContainer";
import Layer from "../file-mosaic-layer/Layer";
import { getLocalFileItemData } from "../../../file-item/utils/getLocalFileItemData";
import FileMosaicName from "../FileMosaicName/FileMosaicName";
import FileMosaicUploadLayer from "../FileMosaicUploadLayer/FileMosaicUploadLayer";
import useFileMosaicInitializer from "../../hooks/useFileMosaicInitializer";
import FileMosaicImageLayer from "../FIleMosaicImageLayer/FileMosaicImageLayer";
import { useIsUploading } from "../../hooks/useIsUploading";
import { Tooltip } from "../../../tooltip";

import FileMosaicInfoLayer from "../FileMosaicInfoLayer/FileMosaicInfoLayer";
import useProgress from "../../hooks/useProgress";
import DownloadHidden from "../../../download-hidden/DownloadHidden";
import FileMosaicMainLayer from "../FileMosaicMainLayer.tsx/FileMosaicMainLayer";

const FileMosaic: React.FC<FileMosaicProps> = (props: FileMosaicProps) => {
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
    smartImgFit,
  } = props;
//localizers


  //ref for anchor download element
  const downloadRef = React.useRef<HTMLAnchorElement>(null);

  const finalClassName: string = addClassName(
    addClassName(
      "files-ui-file-mosaic-main-container files-ui-tooltip",
      className
    ),
    onClick ? "clickable" : undefined
  );

  const fileMosaicFileNameClassName: string = darkMode
    ? "files-ui-file-mosaic-file-name dark-mode"
    : "files-ui-file-mosaic-file-name";

  // local properties from file
  const [localName, localType, localSize]: [
    string,
    string | undefined,
    number | undefined
  ] = getLocalFileItemData(file, propName, propType, propSize);

  // handle progress
  const localProgress: number | undefined = useProgress(progress, xhr);

  //console.log("FileMosaic progress localProgress " + localProgress);

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
  const handleAbort = () => {
    xhr?.abort();
    onAbort?.(id);
  };

 
  if (isReady)
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
        <LayerContainer
          className="files-ui-file-mosaic-icon-layer-container"
          style={style}
        >
          {/** IMAGE LAYER BLUR */}
          <Layer
            className="files-ui-file-mosaic-image-layer blur"
            visible={backgroundBlurImage}
          >
            <FileMosaicImageLayer
              imageSource={imageSource}
              url={url}
              fileName={localName}
              isBlur={true}
              smartImgFit={false}
            />
          </Layer>

          {/** IMAGE LAYER NO BLUR */}
          <Layer className="files-ui-file-mosaic-image-layer" visible={true}>
            <FileMosaicImageLayer
              imageSource={imageSource}
              url={url}
              fileName={localName}
              isBlur={false}
              smartImgFit={smartImgFit}
            />
          </Layer>

          {/** MAIN LAYER ICONS & VALID & UPLOAD */}
          <Layer
            className="files-ui-file-mosaic-main-layer"
            visible={!isUploading && !showInfo}
          >
            <FileMosaicMainLayer
              deleteIcon={onDelete !== undefined}
              onDelete={handleDelete}
              darkMode={darkMode}
              valid={valid}
              uploadStatus={uploadStatus}
              localization={localization}
              sizeFormatted={sizeFormatted}
              imageIcon={isImage && onSee !== undefined}
              onSee={() => onSee?.(imageSource)}
              videoIcon={isVideo && onWatch !== undefined}
              onWatch={() => onWatch?.(videoSource)}
              downloadIcon={
                onDownload !== undefined || downloadUrl !== undefined
              }
              onDownload={handleDownload}
              infoIcon={info !== undefined}
              onOpenInfo={handleOpenInfo}
              isActive={alwaysActive || hovering}
            />
          </Layer>

          {/** INFO LAYER */}
          <Layer
            className="files-ui-file-mosaic-info-layer"
            visible={showInfo}
            onClick={handleClickUtil}
          >
            <FileMosaicInfoLayer
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
            className="files-ui-file-mosaic-upload-layer"
            visible={isUploading}
            onClick={handleClickUtil}
          >
            <FileMosaicUploadLayer
              uploadStatus={uploadStatus}
              progress={localProgress}
              onCancel={onCancel ? () => onCancel?.(id) : undefined}
              onAbort={onAbort ? handleAbort : undefined}
              localization={localization}
            />
          </Layer>
        </LayerContainer>

        <div className={fileMosaicFileNameClassName}>
          <FileMosaicName fileName={localName} />
        </div>

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
  return <></>;
};
export default FileMosaic;
