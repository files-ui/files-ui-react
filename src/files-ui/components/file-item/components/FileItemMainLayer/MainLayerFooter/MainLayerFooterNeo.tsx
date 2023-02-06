import * as React from "react";
import { Localization, UPLOADSTATUS } from "../../../../../core";
import {
  PlayIcon,
  DownloadFile,
  InfoDisney,
  Visibility,
} from "../../../../icons";

import FileItemStatus from "../../FileItemStatus/FileItemStatus";
import FileItemSize from "../FileItemSize";

import "./MainLayerFooter.scss";
export type MainLayerFooterNeoProps = {
  hovering?: boolean;
  uploadStatus?: UPLOADSTATUS;
  // uploadComplete?: boolean;
  localization?: Localization;
  sizeFormatted?: string;
  /**
   * whether show a valid or rejected message
   * by def. valid is false (if not present, is false too)
   */
  valid?: boolean | null;
  isImage?: boolean;
  isVideo?: boolean;
  info?: boolean;
  onOpenInfo?: Function;
  onOpenImage?: Function | undefined;
  onOpenVideo?: Function | undefined;
  onDownloadFile?: Function | undefined;
  hide: boolean;
};
const MainLayerFooterNeo: React.FC<MainLayerFooterNeoProps> = (
  props: MainLayerFooterNeoProps
) => {
  const {
    uploadStatus,
    hide,
    localization,
    sizeFormatted,
    valid,
    info,
    isImage,
    isVideo,
    onDownloadFile,
    onOpenImage,
    onOpenVideo,
    onOpenInfo,
    hovering,
  } = props;
  const handleOpenInfo = () => {
    onOpenInfo?.();
  };
  const handleOpenImage = () => {
    onOpenImage?.();
  };
  const handleOpenVideo = () => {
    onOpenVideo?.();
  };
  const handleDownloadFile = () => {
    onDownloadFile?.();
  };

  const [uploadComplete, setUploadComplete] = React.useState<boolean>(false);
  React.useEffect(() => {
    if (
      uploadStatus &&
      ["success", "error", "aborted"].includes(uploadStatus)
    ) {
      setTimeout(() => {
        setUploadComplete(true);
      }, 2000);
    }
    return () => {
      setUploadComplete(false);
    };
  }, [uploadStatus]);

  return (
    <React.Fragment>
      <div className="dui-main-layer-footer-container">
        {/** Show only when footer is not visible */}
        <div className="dui-main-layer-footer-status">
          {!hide &&
          uploadStatus &&
          uploadStatus !== "uploading" &&
          uploadComplete ? (
            <React.Fragment>
              {!hovering && (
                <FileItemStatus
                  uploadStatus={uploadStatus}
                  localization={localization as Localization}
                />
              )}
            </React.Fragment>
          ) : (
            <React.Fragment>
              {!hovering && typeof valid !== "undefined" && (
                <FileItemStatus
                  valid={valid}
                  localization={localization as Localization}
                />
              )}
            </React.Fragment>
          )}
        </div>
        {/** Action buttons and file size */}
        <div className="dui-main-layer-footer">
          {!hide && hovering && (
            <React.Fragment>
              {<FileItemSize sizeFormatted={sizeFormatted} />}

              {isImage &&
                onOpenImage &&
                typeof valid === "boolean" &&
                valid && (
                  <Visibility
                    className="dui-file-item-icon"
                    color="rgba(255,255,255,0.851)"
                    onClick={handleOpenImage}
                    size="small"
                  />
                )}
              {isVideo &&
                onOpenVideo &&
                typeof valid === "boolean" &&
                valid && (
                  <PlayIcon
                    className="dui-file-item-icon"
                    color="rgba(255,255,255,0.851)"
                    onClick={handleOpenVideo}
                    size="small"
                  />
                )}
              {onDownloadFile && (
                <DownloadFile
                  className="dui-file-item-icon"
                  color="rgba(255,255,255,0.851)"
                  onClick={handleDownloadFile}
                  size="small"
                />
              )}
              {info && (
                <InfoDisney
                  className="dui-file-item-icon"
                  onClick={handleOpenInfo}
                  color="rgba(255,255,255,0.851)"
                  size="micro"
                />
              )}
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
export default MainLayerFooterNeo;
