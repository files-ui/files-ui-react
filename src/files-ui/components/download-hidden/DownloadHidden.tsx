import * as React from "react";
export type DownloadHiddenProps = {
  downloadUrl?: string;
  anchorRef: React.RefObject<HTMLAnchorElement>;
  fileName: string;
};

const DownloadHidden: React.FC<DownloadHiddenProps> = (
  props: DownloadHiddenProps
) => {
  const { downloadUrl, anchorRef, fileName } = props;
  if (downloadUrl)
    return (
      <a
        ref={anchorRef}
        href={downloadUrl}
        download={fileName}
        style={{ display: "none" }}
      >
        download_file
      </a>
    );
  return <></>;
};
export default DownloadHidden;
