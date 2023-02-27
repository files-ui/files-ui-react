import * as React from "react";
import { FileMosaicUploadLayerProps } from "./FileMosaicUploadLayerProps";
import "./FileMosaicUploadLayer.scss";
import { UPLOADSTATUS } from "../../../../core";

import {
  AbortedStatus,
  EmptyStatus,
  ErrorStatus,
  PreparingStatus,
  SuccessStatus,
  UploadingStatus,
} from "../../../file-status";

const FileMosaicUploadLayer: React.FC<FileMosaicUploadLayerProps> = (
  props: FileMosaicUploadLayerProps
) => {
  const { uploadStatus, onCancel, onAbort, progress, localization } = props;
  //console.log("FileMosaicUploadLayer CHANGE progress", progress, uploadStatus);
  const elevationContainerRef = React.useRef<HTMLDivElement | null>(null);
  const listContainerStoryRef = React.useRef<HTMLDivElement | null>(null);

  const [statusHistory, setStatusHistory] = React.useState<
    Array<UPLOADSTATUS | undefined>
  >([undefined]);

  React.useEffect(() => {
    setStatusHistory((statusHistory: Array<UPLOADSTATUS | undefined>) => {
      if (statusHistory[statusHistory.length - 1] === "preparing") {
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
      0 - (statusHistory.length - 1) * 132 + "px";
  };
  React.useEffect(() => {
    if (statusHistory.length > 1) elevate();
    // eslint-disable-next-line
  }, [statusHistory.length]);

  //default phase

  return (
    <div className={"elevation-layer-container"} ref={elevationContainerRef}>
      <div className="elevation-list" ref={listContainerStoryRef}>
        {statusHistory.map((status, index) => {
          switch (status) {
            case "preparing":
              return (
                <div className="elevation-item" key={index + 1}>
                  <PreparingStatus
                    onCancel={onCancel}
                    localization={localization}
                  />
                </div>
              );
            case "uploading":
              return (
                <div className="elevation-item" key={index + 1}>
                  <UploadingStatus
                    onAbort={onAbort}
                    progress={progress}
                    localization={localization}
                  />
                </div>
              );
            case "error":
              return (
                <div className="elevation-item" key={index + 1}>
                  <ErrorStatus localization={localization} />
                </div>
              );
            case "success":
              return (
                <div className="elevation-item" key={index + 1}>
                  <SuccessStatus localization={localization} />
                </div>
              );
            case "aborted":
              return (
                <div className="elevation-item" key={index + 1}>
                  <AbortedStatus localization={localization} />
                </div>
              );
            default:
              return (
                <div className="elevation-item" key={index + 1}>
                  <EmptyStatus />
                </div>
              );
          }
        })}
      </div>
    </div>
  );
};
export default FileMosaicUploadLayer;
