import * as React from "react";
import "./FileItemNeo.scss";

import FileItemFullInfoLayer from "../FileItemFullInfoLayer/FileItemFullInfoLayer";
import FileItemImage from "../FileItemImage/FileItemImage";
import Tooltip from "../../../tooltip/components/Tooltip";
import useFileItemNeoClassName from "../../hooks/useFileItemNeoClassName";
import { FileItemPropsNeo, FileItemNeoPropsDefault } from "./FileItemPropsNeo";
import useFileItemNeoInitializer from "./useFileItemNeoInitializer";

import FileItemImageNeo from "../FileItemImage/FileItemImageNeo";
import useFileItemProgress from "../../hooks/useFileItemProgress";
import FuiSkeleton from "../../../skeleton/FuiSkeleton";
import { fileSizeFormater, shrinkWord } from "../../../../core";
import { mergeProps } from "../../../overridable";
import FileItemMainLayerNeo from "../FileItemMainLayer/MainLayer/FileItemMainLayerNeo";

const FileItem: React.FC<FileItemPropsNeo> = (props: FileItemPropsNeo) => {
  const {
    file,
    onDelete,
    onSee,
    onWatch,
    style,
    preview,
    onlyImage,
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
  } = mergeProps(props, FileItemNeoPropsDefault);
  //ref for anchor element
  const dui_anchor_ref = React.useRef<HTMLAnchorElement>(null);
  //Initialize image properties for FileItem
  const localProgress = useFileItemProgress(progress, showProgress, xhr);

  const [isImage, isVideo, url, imageSource]: [
    boolean,
    boolean,
    string,
    string | undefined
  ] = useFileItemNeoInitializer(file, valid, preview as boolean, imageUrl);
  //console.table({isImage, isVideo, url, imageSource, localProgress} );
  //className created
  const classNameCreated = useFileItemNeoClassName(
    resultOnTooltip as boolean,
    elevation
  );
  //state for actionOnHover
  const [hovering, setHOvering] = React.useState<boolean>(false);
  const handleOnHoverEnter: React.MouseEventHandler<HTMLDivElement> = () => {
    setHOvering(true);
  };
  const handleOnHoverLeave: React.MouseEventHandler<HTMLDivElement> = () => {
    setHOvering(false);
  };

  //size
  const sizeFormatted: string = file ? fileSizeFormater(file.size) : "0 KB";
  //alwaysActive
  const [showInfo, setShowInfo] = React.useState<boolean>(false);
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
    if (imageSource && file) {
      //  if (hd) {
      //    const response = await readImagePromise(file);
      //    onSee?.(response || "");
      //  } else {
      onSee?.(imageSource);
      //}
    }
  };
  function handleClick<T extends HTMLDivElement>(
    e: React.MouseEvent<T, MouseEvent>
  ): void {
    //avoid children to trigger onClick ripple from parent
    e.stopPropagation();
  }
  /**
   * onDownload, form 1
   * Trigger dowload directly performing a click on anchor element
   */
  const innerDownload = () => {
    const anchorElement = dui_anchor_ref.current;
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

  const handleDoubleClick = (): void => {
    alert("double click on file");
  };
  if (file && typeof file.name == "string") {
    if (classNameCreated) {
      return (
        <div
          className={classNameCreated}
          style={style}
          onClick={handleClick}
          onMouseEnter={handleOnHoverEnter}
          onMouseLeave={handleOnHoverLeave}
          onDoubleClick={handleDoubleClick}
        >
          <div
            className={`file-item-icon-container ${showInfo ? " hide" : ""}`}
          >
            <FileItemImageNeo
              imageSource={imageSource}
              url={url}
              fileName={file.name}
            />

            <FileItemMainLayerNeo
              showInfo={showInfo}
              fileName={file.name}
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
              fileName={file.name}
              fileSize={fileSizeFormater(file.size)}
              fileType={file.type}
              valid={valid}
              onClose={handleCloseInfo}
              uploadStatus={uploadStatus}
              uploadMessage={uploadMessage}
              localization={localization}
              resultOnTooltip={resultOnTooltip}
            />
          </div>

          {!onlyImage && (
            <div className="file-item-name">{shrinkWord(file.name)}</div>
          )}
          {
            //resultOnTooltip && (
            <Tooltip
              open={resultOnTooltip && hovering}
              //open={true}
              uploadStatus={uploadStatus}
              valid={valid}
              errors={errors}
              uploadMessage={uploadMessage}
            ></Tooltip>
            //)
          }
          {downloadUrl && (
            <a
              hidden
              ref={dui_anchor_ref}
              href={downloadUrl}
              download={file.name}
            >
              download_file
            </a>
          )}
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <FuiSkeleton />
        </React.Fragment>
      );
    }
  } else {
    return <React.Fragment></React.Fragment>;
  }
};
export default FileItem;
