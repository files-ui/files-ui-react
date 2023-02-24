import Alert from "@mui/material/Alert";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import * as React from "react";
import CodeHighlight from "../../components/codeHighlight/CodeHighlight";
import DescParagraph from "../../components/demo-components/desc-paragraph/DescParagraph";
import BasicFileMosaicDemo from "../../components/demo-components/filemosaic-demo/BasicFileMosaicDemo";
import SubTitle from "../../components/demo-components/sub-title/SubTitle";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import MainTitle from "../../components/main-title/MainTitle";
import MainParagraph from "../../components/paragraph-main/MainParagraph";
import RightMenu from "../../components/RightMenu/RightMenu";
import TypeHighlight from "../../components/typeHighlight/TypeHighlight";

const FileMosaicDemoPage = (props) => {
  return (
    <React.Fragment>
      <MainContentContainer>
        <MainTitle>FileMosaic</MainTitle>
        <MainParagraph>
          File mosaics are compact elements that represent a file in the UI.
          They can be used for just showing general info of the file, or either
          allow the user to interact with them.
        </MainParagraph>
        <DescParagraph>
          This widget allow users to see information of{" "}
          <TypeHighlight> Files</TypeHighlight> and / or trigger actions.
        </DescParagraph>
        <Alert severity="info">
          While included here as a standalone component, the most common use
          will be as a result of the "onChange" event of {"<Dropzone/>"} or{" "}
          {"<InputButton/>"} components, so some of the behavior demonstrated
          here is not shown in context.{" "}
        </Alert>
        <section id="basic-filemosaic">
          <SubTitle content="Basic FileMosaic" />
          <DescParagraph>
            The <CodeHighlight>FileMosaic</CodeHighlight> supports displaying
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
              <BasicFileMosaicDemo />
            </Stack>
          </Paper>
          <p></p>
          {/* <BasicDropzoneCodeJS /> */}
        </section>
        <section id="image-preview">
          <SubTitle content="Image preview" />
          <DescParagraph>
            By setting the <CodeHighlight>preview</CodeHighlight> prop to{" "}
            <TypeHighlight>true</TypeHighlight> the component will show a image
            preview using the <CodeHighlight>imageUrl</CodeHighlight>
            prop or by reading the <TypeHighlight>File</TypeHighlight> object if
            given (file prop).
          </DescParagraph>

          <Paper variant="outlined" style={{ padding: "25px" }}>
            {/* <BasicDemoDropzone /> */}
          </Paper>
          <p></p>
          {/* <BasicDropzoneCodeJS /> */}
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
export default FileMosaicDemoPage;
const rightMenuItems = [
  {
    id: 0,
    label: "Basic file mosaic",
    referTo: "/components/file-mosaic#basic-filemosaic",
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
