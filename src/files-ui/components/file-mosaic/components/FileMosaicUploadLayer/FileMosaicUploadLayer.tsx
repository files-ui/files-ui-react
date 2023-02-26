import * as React from "react";
import { FileMosaicUploadLayerProps } from "./FileMosaicUploadLayerProps";
import "./FileMosaicUploadLayer.scss";
import InfiniteLoader from "../../../loader/InfiniteLoader/InfiniteLoader";
import {
  FileItemLocalizerSelector,
  LocalLabels,
  UPLOADSTATUS,
} from "../../../../core";
import {
  CheckCircle,
  Clear,
  //CloudDone,
  DoDisturb,
  //UploadError,
} from "../../../icons";
import { DynamicLoader } from "../../../loader";

const FileMosaicUploadLayer: React.FC<FileMosaicUploadLayerProps> = (
  props: FileMosaicUploadLayerProps
) => {
  const { uploadStatus, onCancel, onAbort, progress, localization } = props;
  //console.log("FileMosaicUploadLayer CHANGE progress", progress, uploadStatus);
  const elevationContainerRef = React.useRef<HTMLDivElement | null>(null);
  const listContainerStoryRef = React.useRef<HTMLDivElement | null>(null);

  const FileItemStatusLocalizer: LocalLabels = FileItemLocalizerSelector(
    localization
  ).status as LocalLabels;

  const [statusHistory, setStatusHistory] = React.useState<
    Array<UPLOADSTATUS | undefined>
  >([undefined]);

  React.useEffect(() => {
    setStatusHistory((statusHistory: Array<UPLOADSTATUS | undefined>) => {
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
    if (statusHistory.length > 1) {
      elevate();
    }
            // eslint-disable-next-line
  }, [statusHistory.length]);

  const PreparingStatus = () => {
    return (
      <React.Fragment>
        <InfiniteLoader onClick={onCancel} size={65} />
        <span>{FileItemStatusLocalizer.preparing as string}</span>
      </React.Fragment>
    );
  };
  const UploadingStatus = React.useMemo(
    () => () =>
      (
        <React.Fragment>
          {progress !== undefined ? (
            <DynamicLoader
              size={70}
              x={35}
              y={35}
              radius={32}
              percentage={progress}
              width={6}
              hidePerncentage={progress === undefined || onAbort !== undefined}
              onClick={onAbort}
            />
          ) : (
            <InfiniteLoader onClick={onAbort} size={70} />
          )}
          <span> {FileItemStatusLocalizer.uploading as string}</span>
        </React.Fragment>
      ),
    [progress, onAbort, FileItemStatusLocalizer]
  );

  const SuccessStatus = () => {
    return (
      <React.Fragment>
        <CheckCircle
          color="#4caf50"
          size={65}
          //style={{ backgroundColor: "rgba(255,255,255,0.8)", borderRadius: "50%", padding: 8 }}
        />
        <span> {FileItemStatusLocalizer.success as string}</span>
      </React.Fragment>
    );
  };
  const ErrorStatus = () => {
    return (
      <React.Fragment>
        <Clear
          color="rgba(255,255,255,0.4)"
          style={{
            backgroundColor: "rgba(244, 67, 54, 0.8)",
            borderRadius: "50%",
          }}
          size={65}
        />
        <span> {FileItemStatusLocalizer.error as string}</span>
      </React.Fragment>
    );
  };
  const AbortedStatus = () => {
    return (
      <React.Fragment>
        <DoDisturb color="#f44336" size={65} />
        <span> {FileItemStatusLocalizer.aborted as string}</span>
      </React.Fragment>
    );
  };
  const Empty = () => {
    return (
      <React.Fragment>
        <div style={{ width: "100%", height: "132px" }}>
          {/*  <span> VACIOOOOO</span> */}
        </div>
      </React.Fragment>
    );
  };

  const StatusSelector = (status: UPLOADSTATUS | undefined) => {
    switch (status) {
      case "preparing":
        return <PreparingStatus />;
      case "uploading":
        return <UploadingStatus />;
      case "error":
        return <ErrorStatus />;
      case "success":
        return <SuccessStatus />;
      case "aborted":
        return <AbortedStatus />;
      default:
        return <Empty />;
    }
  };
  //default phase

  return (
    <div className={"elevation-layer-container"} ref={elevationContainerRef}>
      <div className="elevation-list" ref={listContainerStoryRef}>
        {statusHistory.map((status, index) => {
          return (
            <div className="elevation-item" key={index + 1}>
              {StatusSelector(status)}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FileMosaicUploadLayer;
