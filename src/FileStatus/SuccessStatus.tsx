import * as React from "react";
import { FileItemLocalizerSelector, LocalLabels } from "theamazingunkowntext"
import { CheckCircle } from "../icons";
import { FileStatusProps } from "./FileStatusProps";
interface SuccessStatusProps extends FileStatusProps {}
const SuccessStatus: React.FC<SuccessStatusProps> = (
  props: SuccessStatusProps
) => {
  const { localization, size } = props;
  const FileItemStatusLocalizer: LocalLabels = FileItemLocalizerSelector(
    localization
  ).status as LocalLabels;
  return (
    <React.Fragment>
      <CheckCircle
        color="#4caf50"
        size={size || 65}
        //style={{ backgroundColor: "rgba(255,255,255,0.8)", borderRadius: "50%", padding: 8 }}
      />
      <span> {FileItemStatusLocalizer.success as string}</span>
    </React.Fragment>
  );
};
export default SuccessStatus;
