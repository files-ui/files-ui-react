import * as React from "react";
import { Localization, UPLOADSTATUS } from "../../../core";
import {
  AbortedStatus,
  EmptyStatus,
  ErrorStatus,
  PreparingStatus,
  SuccessStatus,
  UploadingStatus,
} from "../../file-status";
import "./FileCardUploadLayer.scss";
export interface FileCardUploadLayerPropsMap {
  visible?: boolean;
  uploadStatus?: UPLOADSTATUS;
  onCancel?: Function;
  onAbort?: Function;
  progress?: number;
  localization?: Localization;
}

export type FileCardUploadLayerProps = {
  [T in keyof FileCardUploadLayerPropsMap]: FileCardUploadLayerPropsMap[T];
};

const FileCardUploadLayer: React.FC<FileCardUploadLayerProps> = (
  props: FileCardUploadLayerProps
) => {
  const { uploadStatus, onCancel, onAbort, progress, localization } = props;
  const elevationContainerRef = React.useRef<HTMLDivElement | null>(null);
  const listContainerStoryRef = React.useRef<HTMLDivElement | null>(null);

  const [statusHistory, setStatusHistory] = React.useState<
    Array<UPLOADSTATUS | undefined>
  >([undefined]);

  React.useEffect(() => {
    setStatusHistory((statusHistory: Array<UPLOADSTATUS | undefined>) => {
      if (
        statusHistory[statusHistory.length - 1] === "preparing" &&
        uploadStatus === "uploading"
      ) {
        const tempStatusHistory = [...statusHistory];
        tempStatusHistory[statusHistory.length - 1] = uploadStatus;
        //replace
        return [...tempStatusHistory];
      }
      return [...statusHistory, uploadStatus];
    });
  }, [uploadStatus]);

  const elevate = () => {
    const currentElevationContainer = elevationContainerRef.current;
    const currentElevationList = listContainerStoryRef.current;
    if (currentElevationContainer === null || currentElevationList === null)
      return;

    currentElevationList.style.top =
      0 - (statusHistory.length - 1) * 100 + "px";
  };
  React.useEffect(() => {
    if (statusHistory.length > 1) elevate();
    // eslint-disable-next-line
  }, [statusHistory.length]);

  return (
    <div className={"elevation-layer-container"} ref={elevationContainerRef}>
      <div className="elevation-list-card" ref={listContainerStoryRef}>
        {statusHistory.map((status, index) => {
          switch (status) {
            case "preparing":
              return (
                <div className="elevation-item-card" key={index + 1}>
                  <PreparingStatus
                    onCancel={onCancel}
                    localization={localization}
                  />
                </div>
              );
            case "uploading":
              return (
                <div className="elevation-item-card" key={index + 1}>
                  <UploadingStatus
                    onAbort={onAbort}
                    progress={progress}
                    localization={localization}
                  />
                </div>
              );
            case "error":
              return (
                <div className="elevation-item-card" key={index + 1}>
                  <ErrorStatus size={60} localization={localization} />
                </div>
              );
            case "success":
              return (
                <div className="elevation-item-card" key={index + 1}>
                  <SuccessStatus localization={localization} />
                </div>
              );
            case "aborted":
              return (
                <div className="elevation-item-card" key={index + 1}>
                  <AbortedStatus localization={localization} />
                </div>
              );
            default:
              return (
                <div className="elevation-item-card" key={index + 1}>
                  <EmptyStatus />
                </div>
              );
          }
        })}
      </div>
    </div>
  );
};
export default FileCardUploadLayer;
