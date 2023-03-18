import * as React from "react";
import { Avatar } from "../../../files-ui";

const imageSrc =
  "https://i.pinimg.com/564x/9a/8b/cf/9a8bcfaba81783eff9241538b00343b1.jpg";
const DemoAvatarVariants = () => {
  return (
    <>
      <Avatar src={imageSrc} readOnly />
      <Avatar src={imageSrc} variant="circle" readOnly />
    </>
  );
};
export default DemoAvatarVariants;
