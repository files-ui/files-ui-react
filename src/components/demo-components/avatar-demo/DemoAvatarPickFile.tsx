import * as React from "react";
import { Avatar, AvatarProps } from "../../../files-ui";
interface DemoAvatarPickFileProps {}
const imageSrc =
  "https://i.pinimg.com/564x/9a/8b/cf/9a8bcfaba81783eff9241538b00343b1.jpg";

const DemoAvatarPickFile: React.FC<DemoAvatarPickFileProps> = (
  props: DemoAvatarPickFileProps
) => {
  const [imageSource, setImageSource] = React.useState<
    AvatarProps["src"] | undefined
  >(imageSrc);

  const handleChangeSource = (selectedFile: File) => {
    setImageSource(selectedFile);
  };
  return (
    <Avatar src={imageSource} alt="Avatar" onChange={handleChangeSource} />
  );
};
export default DemoAvatarPickFile;
