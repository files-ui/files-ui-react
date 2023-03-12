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
import TypeHighlight from "../../components/typeHighlight/TypeHighlight";
import DemoFileMosaicLocalization from "../../components/demo-components/filemosaic-demo/DemoFileMosaicLocalization";
import CodeJSFileMosaicLocalization from "../../components/demo-components/filemosaic-demo/CodeJSFileMosaicLocalization";

const LocalizationPage = (props) => {
  const [component, setComponent] = React.useState("FileMosaic");
  const handleChangeComponent = (newVal) => {
    setComponent(newVal);
  };
  return (
    <React.Fragment>
      <MainLayoutPage selectedIndex={5}>
        <MainContentContainer>
          <MainTitle>Localization</MainTitle>
          <MainParagraph>
            Localization (also referred to as "l10n") is the process of adapting
            a product or content to a specific locale or market.
            <br />
            The default locale of Files UI is English. If you want to use other
            locales, follow the instructions below.
          </MainParagraph>

          <section id="locale-text">
            <SubTitle content="Locale texts" />
            <DescParagraph>
              Files UI components have multilanguage support. You can change the
              language in wich labels are displayed by setting the{" "}
              <CodeHighlight>{"localization"}</CodeHighlight> prop. So far only
              the following languages are supported:
              <ul>
                {[
                  "English",
                  "Spanish",
                  "French",
                  "Italian",
                  "Portuguese",
                  "Russian",
                  "Chinnese (simplified)",
                  "Chinnese (traditional)",
                ].map((x) => (
                  <li>
                    <TypeHighlight>{x}</TypeHighlight>
                  </li>
                ))}
              </ul>
            </DescParagraph>
            <FileCardMosaicSwitch
              value={component}
              onChange={handleChangeComponent}
              withInput
              row
            />
            <Paper
              variant="outlined"
              style={{
                padding: "25px 10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <DemoFileMosaicLocalization card={component === "FileCard"} />
            </Paper>
            <CodeJSFileMosaicLocalization card={component === "FileCard"} />
          </section>

          <RightMenuContainer>
            <RightMenu width="240px" items={rightMenuItems} />
          </RightMenuContainer>
        </MainContentContainer>
      </MainLayoutPage>
    </React.Fragment>
  );
};
export default LocalizationPage;

const rightMenuItems = [
  {
    id: 0,
    label: "Complete list",
    referTo: "/file-icons#complete-list",
  },
];
