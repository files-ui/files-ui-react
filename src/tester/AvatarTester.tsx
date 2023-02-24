import * as React from "react";
import { Avatar } from "../files-ui";
import {
  ServerResponse,
  //UploadPromiseResponse,
  //uploadPromiseXHR,
} from "../files-ui/core";

import { uploadFile } from "../files-ui/core";

export const resultURL: string =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1YdE-2sQT4na6RwujeATyMBcCXqg0Gf76TYTplRkMkq0wIi_SewCDq6VeUGxPwpK_Qd8&usqp=CAU";
export const initURL: string =
  "https://sm.ign.com/ign_latam/screenshot/default/goku-ssj-blue-3_6qjv.jpg";

const rowStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  padding: "20px",
  border: "1px dotted orange",
  borderRadius: "8px",
  boxSizing: "border-box",
  margin: "25px 0",
  backgroundColor: "white",
  gap: "15px",
};


const REMOTE = "https://files-ui-express-static-file-storage.vercel.app/39d33dff2d41b522c1ea276c4b82507f96b9699493d2e7b3f5c864ba743d9503";
const LOCAL = "http://localhost/39d33dff2d41b522c1ea276c4b82507f96b9699493d2e7b3f5c864ba743d9503";


interface AvatarTesterProps {}
const AvatarTester: React.FC<AvatarTesterProps> = (
  props: AvatarTesterProps
) => {
  const [avatarSrc, setAvatarSrc] = React.useState<string | undefined>(
    undefined
  );

 /*  const handleChange = async (file: File) => {
    const endpoint: string = "http://localhost:2800/upload-avatar";
    const response: UploadPromiseResponse = await uploadPromiseXHR(
      { id: 0, file: file, xhr: new XMLHttpRequest() },
      endpoint,
      "POST",
      {
        Authorization: "bearer bJUKYIBVUKIBHUKYIBHVKULIUBHKLÑBJ",
        "z-header": "HAAAAAAA",
      }
    );
    //  const res: boolean = uploadFile(file, endpoint);
    const serverResponse: ServerResponse = response.uploadResponse
      .serverResponse as ServerResponse;
    const { url } = serverResponse.payload;
    setAvatarSrc(url);
    console.log(serverResponse.payload);
  }; */

  const handleChange2 = async (file: File) => {
    const endpoint: string = REMOTE + "/file/28048465460";
    const res: ServerResponse = await uploadFile(file, endpoint);
    const { url } = res.payload;
    setAvatarSrc(url);
  };

  return (
    <React.Fragment>
      <div style={rowStyle}>
        <Avatar
          src={avatarSrc}
          variant="circle"
          style={{ width: "300px", height: "300px" }}
          onChange={handleChange2}
        />
      </div>
    </React.Fragment>
  );
};
export default AvatarTester;
