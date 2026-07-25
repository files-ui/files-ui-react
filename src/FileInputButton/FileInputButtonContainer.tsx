import * as React from "react";
import type { FileInputButtonProps } from "./InputButtonProps";
import FileInputButtonClient from "./FileInputButtonClient";

const FileInputButtonContainer: React.FC<FileInputButtonProps> = (
  props: FileInputButtonProps
) => {
  return <FileInputButtonClient {...props} />;
};

export { FileInputButtonContainer };
export default FileInputButtonContainer;
