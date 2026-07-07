import * as React from "react";

export type DownloadHiddenProps = {
  downloadUrl?: string;
  videoUrl?: string;
  anchorRef: React.RefObject<HTMLAnchorElement>;
  fileName: string;
};

function handleClick<T extends HTMLAnchorElement>(
  evt: React.MouseEvent<T, MouseEvent>,
): void {
  evt.stopPropagation();
}

const DownloadHidden: React.FC<DownloadHiddenProps> = (
  props: DownloadHiddenProps,
) => {
  const { downloadUrl, videoUrl, anchorRef, fileName } = props;
  const finalDownloadUrl: string | undefined = videoUrl || downloadUrl;

  if (finalDownloadUrl)
    return (
      <a
        ref={anchorRef}
        target={"_blank"}
        href={finalDownloadUrl}
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