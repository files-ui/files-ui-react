import * as React from "react";
import { Avatar } from "../../../files-ui";
const imgSrc =
  "https://i.pinimg.com/564x/9a/8b/cf/9a8bcfaba81783eff9241538b00343b1.jpg";
const DemoAvatarStyling = () => {
  return (
    <>
      <Avatar
        readOnly
        src={imgSrc}
        alt="Isabella"
        style={{ width: "100px", height: "100px" }}
      />
      <Avatar readOnly src={imgSrc} alt="Isabella" borderRadius={"50px"} />
    </>
  );
};
export default DemoAvatarStyling;
