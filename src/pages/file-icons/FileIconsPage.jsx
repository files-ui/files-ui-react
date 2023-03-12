import * as React from "react";
import CodeHighlight from "../../components/codeHighlight/CodeHighlight";
import DescParagraph from "../../components/demo-components/desc-paragraph/DescParagraph";
import SubTitle from "../../components/demo-components/sub-title/SubTitle";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import MainTitle from "../../components/main-title/MainTitle";
import MainParagraph from "../../components/paragraph-main/MainParagraph";
import RightMenu from "../../components/RightMenu/RightMenu";
import Paper from "@mui/material/Paper";
import DemoFileMosaicFileIcons from "../../components/demo-components/filemosaic-demo/DemoFileMosaicFileIcons";
import MainLayoutPage from "../../components/layout-pages/MainLayoutPage";
import AnchorToTab from "../../components/util-components/AnchorToTab";
import FileCardMosaicSwitch from "../../components/switch/FileCardMosaicSwitch";
const FileIconsPage = (props) => {
  const [component, setComponent] = React.useState("FileMosaic");
  const handleChangeComponent = (newVal) => {
    setComponent(newVal);
  };
  return (
    <React.Fragment>
      <MainLayoutPage selectedIndex={4}>
        <MainContentContainer>
          <MainTitle>File Icons (extensive list)</MainTitle>
          <MainParagraph>
            Both <CodeHighlight>{"<FileMosaic/>"}</CodeHighlight> and{" "}
            <CodeHighlight>{"<FileCard/>"}</CodeHighlight> components diplay a file icon
            according to the file mime type. A media type (also known as a
            Multipurpose Internet Mail Extensions or MIME type) indicates the
            nature and format of a document, file, or assortment of bytes. You
            can find more information{" "}
            <AnchorToTab href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types">
              here
            </AnchorToTab>
            . Files UI supports at list the least this{" "}
            <AnchorToTab href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types">
              Common MIME types
            </AnchorToTab>{" "}
            and some other extra file types.
          </MainParagraph>

          <section id="complete-list">
            <SubTitle content="Complete list" />
            <DescParagraph>
              Bellow you can see a preview of every file type supported:
            </DescParagraph>
            <FileCardMosaicSwitch
              value={component}
              onChange={handleChangeComponent}
            />
            <Paper
              variant="outlined"
              style={{
                padding: "25px 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                //flexDirection: "column",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              <DemoFileMosaicFileIcons card={component === "FileCard"} />
            </Paper>
          </section>

          <RightMenuContainer>
            <RightMenu width="240px" items={rightMenuItems} />
          </RightMenuContainer>
        </MainContentContainer>
      </MainLayoutPage>
    </React.Fragment>
  );
};
export default FileIconsPage;

const rightMenuItems = [
  {
    id: 0,
    label: "Complete list",
    referTo: "/file-icons#complete-list",
  },
];
