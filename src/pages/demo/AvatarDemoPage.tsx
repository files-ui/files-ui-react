import * as React from "react";
import { Paper } from "@mui/material";
import CodeHighlight from "../../components/codeHighlight/CodeHighlight";
import BasicDemoAvatar from "../../components/demo-components/avatar-demo/BasicDemoAvatar";
import CodeDemoAvatarBasic from "../../components/demo-components/avatar-demo/CodeDemoAvatarBasic";
import DescParagraph from "../../components/demo-components/desc-paragraph/DescParagraph";
import SubTitle from "../../components/demo-components/sub-title/SubTitle";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import MainTitle from "../../components/main-title/MainTitle";
import MainParagraph from "../../components/paragraph-main/MainParagraph";
import RightMenu from "../../components/RightMenu/RightMenu";
import TypeHighlight from "../../components/typeHighlight/TypeHighlight";
import DemoAvatarPickFile from "../../components/demo-components/avatar-demo/DemoAvatarPickFile";
import CodeDemoAvatarPickFile from "../../components/demo-components/avatar-demo/CodeDemoAvatarPickFile";
import DemoAvatarFallBack from "../../components/demo-components/avatar-demo/DemoAvatarFallBack";
import CodeDemoAvatarFallBack from "../../components/demo-components/avatar-demo/CodeDemoAvatarFallBack";

interface AvatarDemoPageProps {}
const AvatarDemoPage: React.FC<AvatarDemoPageProps> = (
  props: AvatarDemoPageProps
) => {
  return (
    <React.Fragment>
      <MainContentContainer>
        <MainTitle>Avatar</MainTitle>

        <MainParagraph>
          This "avatar" component can be used to just display an image or even
          can be a special file <CodeHighlight>input</CodeHighlight> designed
          for setting an image
          {/* by either dragging and dropping files there or  */}
          by picking file from a file dialog.
        </MainParagraph>

        <section id="basic-avatar">
          <SubTitle content="Basic Avatar (read only)" />
          <DescParagraph>
            The most basic use is to set a fixed image from Url.
          </DescParagraph>
          <Paper
            variant="outlined"
            style={{
              padding: "25px",
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <BasicDemoAvatar />
          </Paper>
          <CodeDemoAvatarBasic />
        </section>

        <section id="picking-image-file">
          <SubTitle content="Picking an image File" />
          <DescParagraph>
            The <CodeHighlight>{"<Avatar/>"}</CodeHighlight> component supports
            both a <TypeHighlight>string</TypeHighlight> url and a{" "}
            <TypeHighlight>File</TypeHighlight> object as the source.
          </DescParagraph>
          <Paper
            variant="outlined"
            style={{
              padding: "25px",
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <DemoAvatarPickFile />
          </Paper>
          <CodeDemoAvatarPickFile />
        </section>

        <section id="fallback">
          <SubTitle content="Fallback (error on load the image)" />
          <DescParagraph>
            If there is an error loading the avatar image, the{" "}
            <CodeHighlight>{"<Avatar/>"}</CodeHighlight> component provides a
            way to fall back by defining the{" "}
            <TypeHighlight>onError</TypeHighlight> prop. This could happen if:
            <ul>
              <li>The image url is broken, or</li>
              <li>The image file selected is not an image</li>
            </ul>
          </DescParagraph>
          <Paper
            variant="outlined"
            style={{
              padding: "25px",
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly",
            }}
          >
            <DemoAvatarFallBack />
          </Paper>
          <CodeDemoAvatarFallBack />
        </section>
      </MainContentContainer>

      <RightMenuContainer>
        <RightMenu width="240px" items={rightMenuItems} />
      </RightMenuContainer>
    </React.Fragment>
  );
};
export default AvatarDemoPage;

const rightMenuItems = [
  {
    id: 0,
    label: "Basic avatar",
    referTo: "/components/avatar#basic-avatar",
  },
  {
    id: 1,
    label: "Picking image file",
    referTo: "/components/avatar#picking-image-file",
  },
  {
    id: 3,
    label: "FallBack",
    referTo: "/components/avatar#fallback",
  },
  {
    id: 4,
    label: "Smart image fit",
    referTo: "/components/filemosaic#smart-image-fit",
  },
  {
    id: 5,
    label: "Uploading & loading",
    referTo: "/components/avatar#uploading",
  },
  {
    id: 6,
    label: "Variants",
    referTo: "/components/avatar#variants",
  },
  {
    id: 7,
    label: "Styling",
    referTo: "/components/avatar#styling",
  },
  {
    id: 8,
    label: "Labels",
    referTo: "/components/avatar#labels",
  },
  {
    id: 9,
    label: "API",
    referTo: "/components/filecard#api",
  },
];
