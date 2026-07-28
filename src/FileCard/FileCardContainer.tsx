import * as React from "react";
import type { FileCardProps } from "./FileCardProps";
import FileCardClient from "./FileCardClient";

const FileCardContainer: React.FC<FileCardProps> = (props: FileCardProps) => {
  return <FileCardClient {...props} />;
};

export { FileCardContainer };
export default FileCardContainer;
