import * as React from "react";
import {
  DropzoneLocalizerSelector,
  Localization,
  LocalLabels,
} from "@files-ui/core"
import "./DropzoneChildren.scss";

declare type DropzoneChildrenProps = {
  children?: React.ReactNode | [];
  label?: string;
  localization?: Localization;
};

const DropzoneChildren: React.FC<DropzoneChildrenProps> = (
  props: DropzoneChildrenProps
) => {
  const { children, label, localization } = props;
  
  const isEmptyArray = Array.isArray(children) && children.length===0;
  //console.log("isEmptyArray", isEmptyArray,children);
  const DropzoneLocalizer: LocalLabels =
    DropzoneLocalizerSelector(localization);

  //children will be always consider as more important
  if (children && !isEmptyArray) {
    return (
      <div className="files-ui-dropzone-children-container">{children}</div>
    );
  } else
    return (
      <div className="files-ui-dropzone-children-container">
        <label> {label || (DropzoneLocalizer.defaultLabel as string)}</label>
      </div>
    );
};
export default DropzoneChildren;
