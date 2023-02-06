import * as React from "react";
import { FileItemLocalizerSelector, Localization, LocalLabels } from "../../../../core";
import { CheckCircle, DoDisturb } from "../../../icons";

import "./FileItemValidStatus.scss";
export type FileItemValidStatusProps = {
  /**
   * whether show a valid or rejected message
   * by def. valid is false (if not present, is false too)
   */
  valid?: boolean | null;
  /**
   * language to be used
   * for now
   * only English and Spanish is supported
   */
  localization?: Localization;
};
const FileItemValidStatus: React.FC<FileItemValidStatusProps> = (
  props: FileItemValidStatusProps
) => {
  const { valid, localization } = props;
  const FileItemStatusLocalizer: LocalLabels = FileItemLocalizerSelector(
    localization
  ).status as LocalLabels;
  if (typeof valid === "boolean") {
    const overloadClassName: string = valid
      ? " file-status-valid"
      : " file-status-nonvalid";
    return (
      <div
        className={`fui-file-item-valid-status-container${overloadClassName}`}
      >
        {valid ? (
          <>
            <CheckCircle color="#4caf50" size="small" className="status-icon" />
            {FileItemStatusLocalizer.valid as string}
          </>
        ) : (
          <>
            <DoDisturb color="#f44336" size="small" className="status-icon" />
            {FileItemStatusLocalizer.denied as string}
          </>
        )}
      </div>
    );
  } else {
    return <React.Fragment></React.Fragment>;
  }
};
export default FileItemValidStatus;
