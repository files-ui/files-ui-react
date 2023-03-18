import * as React from "react";
import { Avatar } from "../../../files-ui";
const imageSrc =
  "https://i.pinimg.com/564x/9a/8b/cf/9a8bcfaba81783eff9241538b00343b1.jpg";

const DemoAvatarLabels = () => {
  return (
    <>
      <Avatar
        alt="Isabella"
        emptyLabel={"You can choose an image..."}
        onChange={() => {}}
      />
      <Avatar
        src={imageSrc}
        alt="Isabella"
        changeLabel={"Do you want to change this amazing picture?"}
        onChange={() => {}}
      />
      <Avatar
        src={imageSrc}
        alt="Isabella"
        loadingLabel={"You can drink a cup of coffee in the meanwhile"}
        isLoading={true}
      />
    </>
  );
};
export default DemoAvatarLabels;
