import * as React from "react";
import ShowDemoCode from "../../show-demo-code/ShowDemoCode";
interface CodeDemoAvatarPickFileProps{}
const CodeDemoAvatarPickFile:React.FC<CodeDemoAvatarPickFileProps> = (props:CodeDemoAvatarPickFileProps) =>{
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
}
export default CodeDemoAvatarPickFile;


const splittedCodeJS = `<Avatar src={imageSource} alt="Avatar" onChange={handleChangeSource} />`;
const splittedCodeTS = splittedCodeJS;
const completeCodeJS = `import * as React from "react";
import { Avatar } from "@files-ui/react";

const imageSrc =
  "https://i.pinimg.com/564x/9a/8b/cf/9a8bcfaba81783eff9241538b00343b1.jpg";

export default function DemoAvatarPickingFile = () => {
  const [imageSource, setImageSource] = React.useState(imageSrc);
  const handleChangeSource = (selectedFile) => {
    setImageSource(selectedFile);
  };
  return (
    <Avatar src={imageSource} alt="Avatar" onChange={handleChangeSource} />
  );
};`;

const completeCodeTS =`import * as React from "react";
import { Avatar, AvatarProps } from "@files-ui/react";

const imageSrc =
  "https://i.pinimg.com/564x/9a/8b/cf/9a8bcfaba81783eff9241538b00343b1.jpg";
  
export default function DemoAvatarPickingFile = () => {
  const [imageSource, setImageSource] 
                    = React.useState<AvatarProps["src"] | undefined>(imageSrc);

  const handleChangeSource = (selectedFile: File) => {
    setImageSource(selectedFile);
  };
  return (
    <Avatar src={imageSource} alt="Avatar" onChange={handleChangeSource} />
  );
};`;
