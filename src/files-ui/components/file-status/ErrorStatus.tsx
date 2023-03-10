import * as React from "react";
import { FileItemLocalizerSelector, LocalLabels } from "../../core";
import { Clear } from "../icons";
import { FileStatusProps } from "./FileStatusProps";
interface ErrorStatusProps extends FileStatusProps {}

const ErrorStatus: React.FC<ErrorStatusProps> = (props: ErrorStatusProps) => {
  const { localization, size } = props;
  const FileItemStatusLocalizer: LocalLabels = FileItemLocalizerSelector(
    localization
  ).status as LocalLabels;
  return (
    <React.Fragment>
      <Clear
        color="rgba(255,255,255,0.4)"
        style={{
          backgroundColor: "rgba(244, 67, 54, 0.8)",
          borderRadius: "50%",
        }}
        size={size || 65} 
      />
      <span> {FileItemStatusLocalizer.error as string}</span>
    </React.Fragment>
  );
};
export default ErrorStatus;
