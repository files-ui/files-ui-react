import * as React from "react";
import { FileItemLocalizerSelector, LocalLabels } from "@files-ui/core"
import { DynamicLoader } from "../loader";
import InfiniteLoader from "../loader/InfiniteLoader/InfiniteLoader";
import { FileStatusProps } from "./FileStatusProps";

export type UploadingStatusProps = {
  [P in keyof FileStatusProps]: FileStatusProps[P];
} & {
  onAbort?: Function;
  progress?: number;
};

const UploadingStatus: React.FC<UploadingStatusProps> = (
  props: UploadingStatusProps
) => {
  const {  localization, size, onAbort, progress } = props;
  const FileItemStatusLocalizer: LocalLabels = FileItemLocalizerSelector(
    localization
  ).status as LocalLabels;
  return (
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
        <InfiniteLoader onClick={onAbort} size={size || 70} />
      )}
      <span> {FileItemStatusLocalizer.uploading as string}</span>
    </React.Fragment>
  );
};
export default UploadingStatus;
