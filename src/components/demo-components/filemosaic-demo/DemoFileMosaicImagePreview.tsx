import * as React from "react";
import { FileCard, FileInputButton, FileMosaic } from "../../../files-ui";
import { ExtFile } from "../../../files-ui/core";

interface DemoFileMosaicImagePreviewProps {
  card?: boolean;
}

const sampleFileProps: ExtFile = {
  id: "fileId",
  size: 28 * 1024 * 1024,
  type: "image/jpeg",
  name: "Thor arrives wakanda.jpg",
  imageUrl: "https://cdn.wallpapersafari.com/0/95/1zms6H.jpg",
};
const DemoFileMosaicImagePreview: React.FC<DemoFileMosaicImagePreviewProps> = (
  props: DemoFileMosaicImagePreviewProps
) => {
  const [value, setValue] = React.useState<ExtFile | undefined>(undefined);

  const updateFile = (incommingFiles: ExtFile[]) => {
    console.log("incomming extFiles", incommingFiles);
    setValue(incommingFiles[0]);
  };

  const removeFile = () => {
    setValue(undefined);
  };
  if (props.card)
    return (
      <>
        {value ? (
          <FileCard {...value} onDelete={removeFile} info preview />
        ) : (
          <FileInputButton
            value={value ? [value] : []}
            onChange={updateFile}
            accept="image/*"
          />
        )}
        <FileCard {...sampleFileProps} info />
      </>
    );
  return (
    <>
      {value ? (
        <FileMosaic {...value} onDelete={removeFile} info preview />
      ) : (
        <FileInputButton
          value={value ? [value] : []}
          onChange={updateFile}
          accept="image/*"
        />
      )}
      <FileMosaic {...sampleFileProps} info />
    </>
  );
};
export default DemoFileMosaicImagePreview;
