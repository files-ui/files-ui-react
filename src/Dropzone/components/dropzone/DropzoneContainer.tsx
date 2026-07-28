import * as React from "react";
import type { DropzoneProps } from "./DropzoneProps";
import DropzoneClient from "./DropzoneClient";

const DropzoneContainer: React.FC<DropzoneProps> = (props: DropzoneProps) => {
  return <DropzoneClient {...props} />;
};

export { DropzoneContainer };
export default DropzoneContainer;
