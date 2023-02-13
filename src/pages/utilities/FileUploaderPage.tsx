import * as React from "react";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import MainTitle from "../../components/main-title/MainTitle";
import RightMenu from "../../components/RightMenu/RightMenu";

const rightMenuItems = [
  {
    id: 0,
    label: "Upload to AWS",
    referTo: "/utilities-methods/file-reader/#read-as-url",
  },
];

interface FileUploaderPageProps {}
const FileUploaderPage: React.FC<FileUploaderPageProps> = (
  props: FileUploaderPageProps
) => {
  return (
    <React.Fragment>
      <MainContentContainer>
        <MainTitle>File Upoad</MainTitle>
      </MainContentContainer>

      <RightMenuContainer>
        <RightMenu width="240px" items={rightMenuItems} />
      </RightMenuContainer>
    </React.Fragment>
  );
};
export default FileUploaderPage;
