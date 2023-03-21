import * as React from "react";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import MainLayoutPage from "../../components/layout-pages/MainLayoutPage";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import MainTitle from "../../components/main-title/MainTitle";
import MainParagraph from "../../components/paragraph-main/MainParagraph";
import RightMenu from "../../components/RightMenu/RightMenu";

const FileDownloadPage = (props) => {
  return (
    <React.Fragment>
      <MainLayoutPage selectedIndex={9}>
        <MainContentContainer>
          <MainTitle>File Download</MainTitle>
          <MainParagraph>
            API reference docs for all the important types related to files UI
            components.
          </MainParagraph>
        </MainContentContainer>
      </MainLayoutPage>

      <RightMenuContainer>
        <RightMenu width="240px" items={rightMenuItems} />
      </RightMenuContainer>
    </React.Fragment>
  );
};
export default FileDownloadPage;

const rightMenuItems = [
  {
    id: 0,
    label: "From Same host",
    referTo: "/types#extfile",
  },
  {
    id: 1,
    label: "From Another host",
    referTo: "/types#validatefileresponse",
  },
  
];
