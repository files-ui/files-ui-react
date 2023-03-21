import * as React from "react";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import MainLayoutPage from "../../components/layout-pages/MainLayoutPage";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import MainTitle from "../../components/main-title/MainTitle";
import RightMenu from "../../components/RightMenu/RightMenu";

const rightMenuItems = [
  {
    id: 0,
    label: "Upload to server",
    referTo: "/file-upload/#uploadtoaws",
  },
  {
    id: 1,
    label: "Upload to AWS",
    referTo: "/file-upload/#uploadtoaws",
  },
];

interface FileUploaderPageProps {}
const FileUploaderPage: React.FC<FileUploaderPageProps> = (
  props: FileUploaderPageProps
) => {
  return (
    <React.Fragment>
      <MainLayoutPage selectedIndex={8}>
        <MainContentContainer>
          <MainTitle>File Upload</MainTitle>
        </MainContentContainer>
      </MainLayoutPage>

      <RightMenuContainer>
        <RightMenu width="240px" items={rightMenuItems} />
      </RightMenuContainer>
    </React.Fragment>
  );
};
export default FileUploaderPage;
