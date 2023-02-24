import { Alert, AlertTitle, Paper } from "@mui/material";
import * as React from "react";
import CodeHighlight from "../../components/codeHighlight/CodeHighlight";
import BasicDemoAvatar from "../../components/demo-components/avatar-demo/BasicDemoAvatar";
import DescParagraph from "../../components/demo-components/desc-paragraph/DescParagraph";
import SubTitle from "../../components/demo-components/sub-title/SubTitle";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import MainTitle from "../../components/main-title/MainTitle";
import MainParagraph from "../../components/paragraph-main/MainParagraph";
import RightMenu from "../../components/RightMenu/RightMenu";
import TypeHighlight from "../../components/typeHighlight/TypeHighlight";

const rightMenuItems = [
  {
    id: 0,
    label: "Basic dropzone",
    referTo: "/components/dropzone#basic-dropzone",
  },
  {
    id: 1,
    label: "Validation",
    referTo: "/components/dropzone#validation",
  },
  {
    id: 1,
    label: "Custom validation",
    referTo: "/components/dropzone#custom-validation",
  },
  {
    id: 2,
    label: "Dropzone events",
    referTo: "/components/dropzone#dropzone-events",
  },
  {
    id: 3,
    label: "Uploading",
    referTo: "/components/dropzone#uploading",
  },
  {
    id: 4,
    label: "Styling",
    referTo: "/components/dropzone#styling",
  },
  {
    id: 5,
    label: "Localization",
    referTo: "/components/dropzone#localization",
  },
  {
    id: 6,
    label: "Dark mode",
    referTo: "/components/dropzone#dark-mode",
  },
];

interface AvatarDemoPageProps {}
const AvatarDemoPage: React.FC<AvatarDemoPageProps> = (
  props: AvatarDemoPageProps
) => {
  return (
    <React.Fragment>
      <MainContentContainer>
        <MainTitle>Avatar</MainTitle>

        <MainParagraph>
          The "avatar" component is a special file{" "}
          <CodeHighlight>input</CodeHighlight> designed for setting an image by
          either dragging and dropping files there or by picking files from a
          file dialog.
        </MainParagraph>

        <DescParagraph>
          You can consider that this widget is a kind of combination between
          dropzone and file mosaic components.
          <ol>
            <li>The image</li>
            <li>
              The file(s) must be validated or not. If validation is required,
              it can be done by taking into account a predefined set of allowed{" "}
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept">
                Common MIME Types
              </a>
              ; specifiying the max file size (in bytes) and/or the max amount
              of files.
            </li>
            <li>The file(s) must be uploaded somewhere in the internet.</li>
          </ol>
        </DescParagraph>
        <DescParagraph>
          It's meant to be an improved version of the "react-dropzone" and
          "dropzone" packages.
        </DescParagraph>

        <section id="basic-avatar">
          <SubTitle content="Basic Avatar" />
          <DescParagraph>
            In this demo we set avatar with the minimun props that allows you to
            get done fast. These props are{" "}
            <CodeHighlight>onChange</CodeHighlight> and{" "}
            <CodeHighlight>value</CodeHighlight>.
          </DescParagraph>
          <Paper
            variant="outlined"
            style={{
              padding: "25px",
              display: "flex",
              width: "100%",
              alignItems: "center",
            }}
          >
            <BasicDemoAvatar />
          </Paper>
          {"<BasicDemoAvatarCode/>>"}
          {/* <BasicDropzoneCodeJS /> */}
          <Alert severity="info">
            <AlertTitle> FileMosaic </AlertTitle>
            For completeness, these examples include{" "}
            <CodeHighlight>{`<FileMosaic/>`} </CodeHighlight>
            component for showing the files selected by the user with minimun
            props too. For further information of this component check out the{" "}
            <a href="/components/filemosaic">FileMosaic</a> page.
          </Alert>
          <br />
          <Alert severity="info">
            <AlertTitle> ExtFile </AlertTitle>
            {/*  This is an info alert — <strong>check it out!</strong>
             */}
            <strong>ExtFile type </strong>
            is explicity used in the
            <strong> Typescript</strong> example and is implicity used in the{" "}
            <strong>Javascript</strong> example for handling the metadata that
            makes possible the information exchange between components. For
            further information about this data type check out the{" "}
            <a href="/types#ext-file">ExtFile-API. </a>
          </Alert>
        </section>
      </MainContentContainer>

      <RightMenuContainer>
        <RightMenu width="240px" items={rightMenuItems} />
      </RightMenuContainer>
    </React.Fragment>
  );
};
export default AvatarDemoPage;
