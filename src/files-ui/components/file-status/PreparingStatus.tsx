import * as React from "react";
import { FileItemLocalizerSelector, LocalLabels } from "../../core";
import InfiniteLoader from "../loader/InfiniteLoader/InfiniteLoader";
import { FileStatusProps } from "./FileStatusProps";

export type PreparingStatusProps = {
  [P in keyof FileStatusProps]: FileStatusProps[P];
} & {
  onCancel?: Function;
};

const PreparingStatus: React.FC<PreparingStatusProps> = (
  props: PreparingStatusProps
) => {
  const { onCancel, localization, size } = props;
  const FileItemStatusLocalizer: LocalLabels = FileItemLocalizerSelector(
    localization
  ).status as LocalLabels;
  return (
    <React.Fragment>
      <InfiniteLoader onClick={onCancel} size={size || 65} />
      <span>{FileItemStatusLocalizer.preparing as string}</span>
    </React.Fragment>
  );
};
export default PreparingStatus;
