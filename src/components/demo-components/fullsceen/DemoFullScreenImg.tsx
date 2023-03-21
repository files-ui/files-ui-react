import * as React from "react";
import {
  ExtFile,
  FileCard,
  FileMosaic,
  FullScreen,
  ImagePreview,
} from "../../../files-ui";

const DemoFullScreenImg = () => {
  const [imgSrc, setImgSrc] = React.useState<string | undefined>(undefined);
  const handleSee = (imageSource: string | undefined) => {
    setImgSrc(imageSource);
  };
  return (
    <>
      <FileCard id={0} {...imageSample} onSee={handleSee} />
      <FileMosaic id={0} {...imageSample} onSee={handleSee} />
      <FullScreen
        open={imgSrc !== undefined}
        onClose={() => setImgSrc(undefined)}
      >
        <ImagePreview src={imgSrc} />
      </FullScreen>
    </>
  );
};
export default DemoFullScreenImg;

const imageSample: ExtFile = {
  id: "fileId-1",
  size: 28 * 1024 * 1024,
  type: "image/gif",
  name: "Iron man in stark tower.gif",
  imageUrl:
    "https://i.pinimg.com/originals/b6/1d/6a/b61d6a1079d8e54932dcde9dc260dd2e.gif",
};
