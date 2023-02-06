import * as React from "react";
import {
  DropzoneLocalizerSelector,
  Localization,
  LocalLabels,
} from "../../core";

declare type DropzoneChildrenProps = {
  children?: React.ReactNode | [];
  label?: string;
  localization?: Localization;
};

const DropzoneChildren: React.FC<DropzoneChildrenProps> = (
  props: DropzoneChildrenProps
) => {
  const { children, label, localization } = props;
  const DropzoneLocalizer: LocalLabels =
    DropzoneLocalizerSelector(localization);

  //children will be always consider as more important
  if (children) {
    return <React.Fragment>{children}</React.Fragment>;
  } else
    return (
      <React.Fragment>
        <label> {label || (DropzoneLocalizer.defaultLabel as string)}</label>
      </React.Fragment>
    );
};
export default DropzoneChildren;
