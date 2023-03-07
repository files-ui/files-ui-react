import * as React from "react";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import RightMenu from "../../components/RightMenu/RightMenu";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import CodeHighlight from "../../components/codeHighlight/CodeHighlight";
import DescParagraph from "../../components/demo-components/desc-paragraph/DescParagraph";
import BasicFileMosaicDemo from "../../components/demo-components/filemosaic-demo/DemoFileMosaicBasic";
import SubTitle from "../../components/demo-components/sub-title/SubTitle";
import TypeHighlight from "../../components/typeHighlight/TypeHighlight";
import MainTitle from "../../components/main-title/MainTitle";
import MainParagraph from "../../components/paragraph-main/MainParagraph";
import DemoFileCardBasic from "../../components/demo-components/file-card-demo/DemoFileCardBasic";
import CodeJSFileCardBasic from "../../components/demo-components/file-card-demo/CodeJSFileCardBasic";
import { AlertTitle } from "@mui/material";
import DemoFileMosaicImagePreview from "../../components/demo-components/filemosaic-demo/DemoFileMosaicImagePreview";
import CodeJSFileMosaicImagePreview from "../../components/demo-components/filemosaic-demo/CodeJSFileMosaicImagePreview";
import DemoContainerFileMosaic from "../../components/demo-components/filemosaic-demo/DemoContainerFileMosaic";

const FileCardDemoPage = (props) => {
  return (
    <React.Fragment>
      <MainContentContainer>
        <MainTitle>FileCard</MainTitle>
        <MainParagraph>
          File cards, as well as file mosaics, are compact elements that
          represent a file in the UI. They can be used for just showing general
          info of the file, or either allow the user to interact with them.
        </MainParagraph>
        <DescParagraph>
          This widget allow users to see information of Files and / or trigger
          actions.
        </DescParagraph>
        <Alert severity="info">
          While included here as a standalone component, the most common use
          will be as a result of the "onChange" event of {"<Dropzone/>"} or{" "}
          {"<InputButton/>"} components, so some of the behavior demonstrated
          here is not shown in context.{" "}
        </Alert>
        <section id="basic-filecard">
          <SubTitle content="Basic FileCard" />
          <DescParagraph>
            The <CodeHighlight>FileCard</CodeHighlight> supports displaying
            information from <TypeHighlight>File</TypeHighlight> object or
            individual props.
          </DescParagraph>

          <Paper
            variant="outlined"
            style={{
              padding: "25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Stack spacing={2} direction="row" alignItems={"center"}>
              <DemoFileCardBasic />
            </Stack>
          </Paper>
          <CodeJSFileCardBasic />
          <Alert severity="info">
            <AlertTitle> FileInputButton </AlertTitle>
            For completeness, some of these examples include{" "}
            <CodeHighlight>{`<FileInputButton/>`} </CodeHighlight>
            component for allowing the user to select files. For further
            information of this component check out the{" "}
            <a href="/components/fileinputbutton">FileInputButton</a> page.
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
        <section id="image-preview">
          <SubTitle content="Image preview" />
          <DescParagraph>
            By setting the <CodeHighlight>preview</CodeHighlight> prop to{" "}
            <TypeHighlight>true</TypeHighlight> the component will show an image
            preview instead of a file icon.
            <br />
            To acomplish this task this component will take the{" "}
            <CodeHighlight>imageUrl</CodeHighlight>
            prop or will read the <TypeHighlight>File</TypeHighlight> object if
            given and if it is an image.
            <br />
            Finally, the <TypeHighlight>info</TypeHighlight> prop is used to
            show the complete information of the file.
          </DescParagraph>

          <DemoContainerFileMosaic>
            <DemoFileMosaicImagePreview card />
          </DemoContainerFileMosaic>

          <CodeJSFileMosaicImagePreview card/>
          <Alert severity="info">
            As you can notice, when
            <CodeHighlight>{`imageUrl`}</CodeHighlight> prop is present, the{" "}
            <CodeHighlight>{`preview`}</CodeHighlight> prop is not needed since
            it has more priority.
            <br />
            On the other side, for displaying an image preview as a result of
            reading an image File it is necesary to set the{" "}
            <CodeHighlight>{`preview`}</CodeHighlight> prop, otherwise a default
            image preview will be shown in order to save memory.
          </Alert>
        </section>
        <section id="validation">
          <SubTitle content="Validation" />
          <DescParagraph>
            The <CodeHighlight>valid</CodeHighlight> prop can be set to{" "}
            <TypeHighlight>true</TypeHighlight>,{" "}
            <TypeHighlight>false</TypeHighlight> or{" "}
            <TypeHighlight>undefined</TypeHighlight>
          </DescParagraph>

          <Paper variant="outlined" style={{ padding: "25px" }}>
            {/* <BasicDemoDropzone /> */}
          </Paper>
          <p></p>
          {/* <BasicDropzoneCodeJS /> */}
        </section>
      </MainContentContainer>
      <RightMenuContainer>
        <RightMenu width="240px" items={rightMenuItems} />
      </RightMenuContainer>
    </React.Fragment>
  );
};
export default FileCardDemoPage;
const rightMenuItems = [
  {
    id: 0,
    label: "Basic file mosaic",
    referTo: "/components/file-mosaic#basic-filecard",
  },
  {
    id: 1,
    label: "Image Preview",
    referTo: "/components/file-mosaic#file-mosaic-image-preview",
  },
  {
    id: 2,
    label: "Validation",
    referTo: "/components/file-mosaic#file-mosaic-validation",
  },
  {
    id: 3,
    label: "Uploading",
    referTo: "/components/file-mosaic#file-mosaic-uploading",
  },
  {
    id: 4,
    label: "Localization",
    referTo: "/components/file-mosaic#file-mosaic-localization",
  },
  {
    id: 5,
    label: "Previews",
    referTo: "/components/file-mosaic#file-mosaic-previews",
  },
  {
    id: 6,
    label: "Actions",
    referTo: "/components/file-mosaic#actions",
  },
  {
    id: 7,
    label: "Default previews",
    referTo: "/components/file-mosaic#default-previews",
  },
  {
    id: 8,
    label: "Dark mode",
    referTo: "/components/file-mosaic#dark-mode",
  },
];
