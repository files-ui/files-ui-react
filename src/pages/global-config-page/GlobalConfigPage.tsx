import * as React from "react";
import CodeHighlight from "../../components/codeHighlight/CodeHighlight";
import DescParagraph from "../../components/demo-components/desc-paragraph/DescParagraph";
import SubTitle from "../../components/demo-components/sub-title/SubTitle";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import MainLayoutPage from "../../components/layout-pages/MainLayoutPage";
import MainTitle from "../../components/main-title/MainTitle";
import MainParagraph from "../../components/paragraph-main/MainParagraph";
import { scrollHandler } from "../../utils/scrollHandler";
import { Paper, Alert, AlertTitle } from "@mui/material";
import AnchorToTab from "../../components/util-components/AnchorToTab";
import TypeHighlight from "../../components/typeHighlight/TypeHighlight";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import RightMenu from "../../components/RightMenu/RightMenu";
import DemoGlobalConfig from "../../components/demo-components/global-demo/DemoGlobalConfig";
import FileCardMosaicSwitch from "../../components/switch/FileCardMosaicSwitch";

interface GlobalConfigPageProps {}
const GlobalConfigPage: React.FC<GlobalConfigPageProps> = (
  props: GlobalConfigPageProps
) => {
  const [selectedItem, setSelectedItem] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener("scroll", () =>
      scrollHandler(rightMenuItems, setSelectedItem)
    );
    return () => {
      window.removeEventListener("scroll", () =>
        scrollHandler(rightMenuItems, setSelectedItem)
      );
    };
  }, []);

  const [component, setComponent] = React.useState("FileMosaic");
  const handleChangeComponent = (newVal: string) => {
    setComponent(newVal);
  };

  return (
    <React.Fragment>
      <MainLayoutPage selectedIndex={10}>
        <MainContentContainer>
          <MainTitle>Global configuration</MainTitle>
          <MainParagraph>
            There are some params like <CodeHighlight>darkMode</CodeHighlight>{" "}
            or localization that can be set through a global config.
            <br />
            Also, you can add your custom icons sources.
          </MainParagraph>
          <DescParagraph>
            This feature is possible thanks to the{" "}
            <AnchorToTab href="https://react.dev/reference/react#context-hooks">
              Context hooks
            </AnchorToTab>
            .
          </DescParagraph>
          <Alert severity="info">
            <AlertTitle> FileMosaic </AlertTitle>
            For using this feature you don't need to be an expert on{" "}
            <TypeHighlight>React.Context</TypeHighlight>.
          </Alert>
          <section id="FilesUiProvider">
            <SubTitle content="FilesUiProvider" />
            <DescParagraph>
              When it comes to Context and Providers you can think that the
              provider is just the in charge one to pass globally a "prop". So
              you can avoid the set it individually on every component.
              <br></br>
              In the following themo we will set the 3 allowed params:
              <ul>
                <li>darkMode</li>
                <li>localization</li>
                <li>icons</li>
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
              <DemoGlobalConfig card={component === "FileCard"} />
            </Paper>
            {/*    <CodeJSFileMosaicLocalization card={component === "FileCard"} /> */}

            <Alert severity="info">
              <AlertTitle> FileMosaic </AlertTitle>
              This demo is a combination of 3 samples that you can find For
              completeness, these examples include{" "}
              <CodeHighlight>{`<FileMosaic/>`} </CodeHighlight>
              component for showing the files selected by the user with minimun
              props too. For further information of this component check out the{" "}
              <AnchorToTab href="/components/filemosaic">
                FileMosaic
              </AnchorToTab>{" "}
              page.
            </Alert>
            <Alert severity="info">
              <AlertTitle>
                {" "}
                config prop on {"<FIlesUiProvider>...</FIlesUiProvider>"}{" "}
              </AlertTitle>
              For further information of this data type check out the{" "}
              <AnchorToTab href="/types#globalconfig">config type</AnchorToTab>{" "}
              page.
            </Alert>
          </section>
        </MainContentContainer>
        <RightMenuContainer>
          <RightMenu
            width="240px"
            items={rightMenuItems}
            selectedItemProp={selectedItem}
            setSelected={setSelectedItem}
          />
        </RightMenuContainer>
      </MainLayoutPage>
    </React.Fragment>
  );
};
export default GlobalConfigPage;

const rightMenuItems = [
  {
    id: 0,
    label: "Localization",
    referTo: "/file-download#samehost",
  },
  {
    id: 1,
    label: "Dark mode",
    referTo: "/file-download#samehost",
  },
  {
    id: 2,
    label: "Custom file icons",
    referTo: "/file-download#samehost",
  },
];
