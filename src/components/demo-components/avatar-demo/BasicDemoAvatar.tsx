import * as React from "react";
import { Avatar,ServerResponse, uploadFile } from "../../../files-ui";

const REMOTE =
  "https://files-ui-express-static-file-storage.vercel.app/39d33dff2d41b522c1ea276c4b82507f96b9699493d2e7b3f5c864ba743d9503";

const BasicDemoAvatar = () => {
  const [avatarSrc, setAvatarSrc] = React.useState<string | undefined>(
    "https://files-ui-temp-storage.s3.amazonaws.com/3b3b28b79c49f52ef1d89a35337797532b9cf4b5f3a00678e6f775c974dfbd56.png"
  );
  const [isUloading, setIsUploading] = React.useState<boolean>(false);

  const handleChange2 = async (file: File) => {
    const endpoint: string = REMOTE + "/file/28048465460";
    setIsUploading(true);
    try {
      const res: ServerResponse = await uploadFile(file, endpoint);
      if (!res.success) alert(res.message);
      else {
        const { URL } = res.payload;
        setAvatarSrc(URL);
      }
      setIsUploading(false);
    } catch (error) {
      console.log("ERROR:", error);
      alert("ERROR ON UPLOAD");
      setIsUploading(false);
    }
  };

  return (
    <React.Fragment>
      <Avatar
        src={avatarSrc}
        //variant="circle"
        style={{ width: "280px", height: "280px" }}
        onChange={handleChange2}
        isUloading={isUloading}
      />
    </React.Fragment>
  );
};
export default BasicDemoAvatar;
