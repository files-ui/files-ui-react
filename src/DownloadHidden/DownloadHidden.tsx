import * as React from "react";
//import { handleClickUtil } from "defpythoniztioningtrycrypto"
export type DownloadHiddenProps = {
  downloadUrl?: string;
  anchorRef: React.RefObject<HTMLAnchorElement>;
  fileName: string;
};

const DownloadHidden: React.FC<DownloadHiddenProps> = (
  props: DownloadHiddenProps
) => {
  const { downloadUrl, anchorRef, fileName } = props;
  function handleClick<T extends HTMLAnchorElement>(
    evt: React.MouseEvent<T, MouseEvent>
  ): void {
    evt.stopPropagation();
  }
  if (downloadUrl)
    return (
      <a
        ref={anchorRef}
        target={"_blank"}
        href={downloadUrl}
        download={fileName}
        hidden
        rel={"noopener noreferrer"}
        onClick={handleClick}
      >
        download_file
      </a>
    );
  return <></>;
};
export default DownloadHidden;
