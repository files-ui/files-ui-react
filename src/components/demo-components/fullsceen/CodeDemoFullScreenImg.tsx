import * as React from "react";
import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeDemoFullScrrenImg = () => {
  return (
    <ShowDemoCode
      codeCompleteJS={completeCodeJS}
      codeCompleteTS={completeCodeTS}
      codeSandboxJS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSandboxTS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSplittedJS={splittedCodeJS}
      codeSplittedTS={splittedCodeTS}
    />
  );
};
export default CodeDemoFullScrrenImg;

const splittedCodeJS = `<FileCard id={0} {...imageSample} onSee={handleSee} />
<FileMosaic id={0} {...imageSample} onSee={handleSee} />
<FullScreen
  open={imgSrc !== undefined}
  onClose={() => setImgSrc(undefined)}
>
  <ImagePreview src={imgSrc} />
</FullScreen>

const imageSample = {
    id: "fileId-1",
    size: 28 * 1024 * 1024,
    type: "image/gif",
    name: "Iron man in stark tower.gif",
    imageUrl:
      "https://i.pinimg.com/originals/b6/1d/6a/b61d6a1079d8e54932dcde9dc260dd2e.gif",
};`;

const completeCodeJS = `import * as React from "react";
import { FileCard, FileMosaic, FullScreen, ImagePreview } from "@files-ui/react";

const imageSample = {
    id: "fileId-1",
    size: 28 * 1024 * 1024,
    type: "image/gif",
    name: "Iron man in stark tower.gif",
    imageUrl:
        "https://i.pinimg.com/originals/b6/1d/6a/b61d6a1079d8e54932dcde9dc260dd2e.gif",
};

export default function App() {
    const [imgSrc, setImgSrc] = React.useState(undefined);
    const handleSee = (imageSource) => {
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
};`;

const splittedCodeTS = `<FileCard id={0} {...imageSample} onSee={handleSee} />
<FileMosaic id={0} {...imageSample} onSee={handleSee} />
<FullScreen
  open={imgSrc !== undefined}
  onClose={() => setImgSrc(undefined)}
>
  <ImagePreview src={imgSrc} />
</FullScreen>

const imageSample: ExtFile = {
    id: "fileId-1",
    size: 28 * 1024 * 1024,
    type: "image/gif",
    name: "Iron man in stark tower.gif",
    imageUrl:
      "https://i.pinimg.com/originals/b6/1d/6a/b61d6a1079d8e54932dcde9dc260dd2e.gif",
};`;
const completeCodeTS = `import * as React from "react";
import { ExtFile, FileCard, FileMosaic, FullScreen, ImagePreview } from "@files-ui/react";

const imageSample: ExtFile = {
    id: "fileId-1",
    size: 28 * 1024 * 1024,
    type: "image/gif",
    name: "Iron man in stark tower.gif",
    imageUrl:
        "https://i.pinimg.com/originals/b6/1d/6a/b61d6a1079d8e54932dcde9dc260dd2e.gif",
};

export default function App() {
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
};`;
