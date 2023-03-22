import { Alert, Paper } from "@mui/material";
import * as React from "react";
import CodeHighlight from "../../components/codeHighlight/CodeHighlight";
import DescParagraph from "../../components/demo-components/desc-paragraph/DescParagraph";
import CodeDemoFullScrrenImg from "../../components/demo-components/fullsceen/CodeDemoFullScreenImg";
import CodeDemoFullScrrenVid from "../../components/demo-components/fullsceen/CodeDemoFullScreenVid";
import DemoFullScreenImg from "../../components/demo-components/fullsceen/DemoFullScreenImg";
import DemoFullScreenVid from "../../components/demo-components/fullsceen/DemoFullScreenVid";
import SubTitle from "../../components/demo-components/sub-title/SubTitle";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import MainTitle from "../../components/main-title/MainTitle";
import MainParagraph from "../../components/paragraph-main/MainParagraph";
import RightMenu from "../../components/RightMenu/RightMenu";
import AnchorToTab from "../../components/util-components/AnchorToTab";
import { scrollHandler } from "../../utils/scrollHandler";
interface FullScreenDemoPageProps {}
const FullScreenDemoPage: React.FC<FullScreenDemoPageProps> = (
  props: FullScreenDemoPageProps
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
  return (
    <React.Fragment>
      <MainContentContainer>
        <MainTitle>FullScreen</MainTitle>
        <MainParagraph>
          Basically the purpose of the{" "}
          <CodeHighlight>{"<FullScreen/>"}</CodeHighlight> component is to
          highlight any kind of component and works in a similar way a modal
          does. It provides important prompts in a user flow.
          <br />
          You can close it by clicking on the close button or with the "esc"
          key.
        </MainParagraph>

        <Alert severity="info">
          While included here as a standalone component, the most common use
          will be to display the the image preview or video preview
          withSubMenufiring the onSee event or onWatch event from
          <CodeHighlight>{"<FileMosaic/>"}</CodeHighlight> or{" "}
          <CodeHighlight>{"<FileCard/>"}</CodeHighlight> components, so for
          completeness, those components are included in the examples
        </Alert>

        <section id="imagepreview">
          <SubTitle content="Image preview" />
          <DescParagraph>
            To display an image in full screen you can use the {"<FullScreen/>"}{" "}
            and {"<ImagePreview/>"} components.
          </DescParagraph>

          <Paper
            variant="outlined"
            style={{
              padding: "25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              gap: "7px",
              flexWrap: "wrap",
              width: "100%",
              //padding: "25px 0",
              flexDirection: "row",
            }}
          >
            <DemoFullScreenImg />
          </Paper>

          <CodeDemoFullScrrenImg />
        </section>

        <section id="videopreview">
          <SubTitle content="Video preview" />
          <DescParagraph>
            To display a video in full screen you can use the {"<FullScreen/>"}{" "}
            and {"<VideoPreview/>"} components.
          </DescParagraph>

          <Paper
            variant="outlined"
            style={{
              padding: "25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              gap: "7px",
              flexWrap: "wrap",
              width: "100%",
              //padding: "25px 0",
              flexDirection: "row",
            }}
          >
            <DemoFullScreenVid />
          </Paper>

          <CodeDemoFullScrrenVid />
        </section>
        <section id="api">
          <SubTitle content="API" />
          <DescParagraph>
            See the documentation below for a complete reference to all of the
            props available to the components mentioned here.
          </DescParagraph>
          <ul>
            <li>
              <AnchorToTab href="/api/fullscreen">
                {"<FullScreen/>"}
              </AnchorToTab>
            </li>
            <li>
              <AnchorToTab href="/api/imagepreview">
                {"<ImagePreview/>"}
              </AnchorToTab>
            </li>
            <li>
              <AnchorToTab href="/api/videopreview">
                {"<VideoPreview/>"}
              </AnchorToTab>
            </li>
            <li>
              <AnchorToTab href="/api/filecard">{"<FileCard/>"}</AnchorToTab>
            </li>
            <li>
              <AnchorToTab href="/api/fileinputbuttom">
                {"<FileInputButton/>"}
              </AnchorToTab>
            </li>
          </ul>
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
    </React.Fragment>
  );
};
export default FullScreenDemoPage;
const rightMenuItems = [
  {
    id: 0,
    label: "Fullscreen Image",
    referTo: "/components/fullscreen#imagepreview",
  },
  {
    id: 1,
    label: "FullScreen Video",
    referTo: "/components/fullscreen#videopreview",
  },
];
