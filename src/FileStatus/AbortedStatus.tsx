import * as React from "react";
import { FileItemLocalizerSelector, LocalLabels } from "../core";
import { DoDisturb } from "../icons";
import { FileStatusProps } from "./FileStatusProps";
interface AbortedStatusProps extends FileStatusProps {}

const AbortedStatus: React.FC<AbortedStatusProps> = (
  props: AbortedStatusProps
) => {
  const { localization, size } = props;
  const FileItemStatusLocalizer: LocalLabels = FileItemLocalizerSelector(
    localization
  ).status as LocalLabels;
  return (
    <React.Fragment>
      <DoDisturb color="#f44336" size={size || 65} />
      <span> {FileItemStatusLocalizer.aborted as string}</span>
    </React.Fragment>
  );
};
export default AbortedStatus;
