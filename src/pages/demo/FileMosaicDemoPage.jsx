import Alert from "@mui/material/Alert";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import AlertTitle from "@mui/material/AlertTitle";
import * as React from "react";
import CodeHighlight from "../../components/codeHighlight/CodeHighlight";
import DescParagraph from "../../components/demo-components/desc-paragraph/DescParagraph";
import SubTitle from "../../components/demo-components/sub-title/SubTitle";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import MainTitle from "../../components/main-title/MainTitle";
import MainParagraph from "../../components/paragraph-main/MainParagraph";
import RightMenu from "../../components/RightMenu/RightMenu";
import TypeHighlight from "../../components/typeHighlight/TypeHighlight";
import AnchorToTab from "../../components/util-components/AnchorToTab";

import CodeJSFileMosaicBasic from "../../components/demo-components/filemosaic-demo/CodeJSFileMosaicBasic";
import DemoFileMosaicBasic from "../../components/demo-components/filemosaic-demo/DemoFileMosaicBasic";
import DemoFileMosaicImagePreview from "../../components/demo-components/filemosaic-demo/DemoFileMosaicImagePreview";
import CodeJSFileMosaicImagePreview from "../../components/demo-components/filemosaic-demo/CodeJSFileMosaicImagePreview";
import DemoContainerFileMosaic from "../../components/demo-components/filemosaic-demo/DemoContainerFileMosaic";
import CodeJSFileMosaicValidation from "../../components/demo-components/filemosaic-demo/CodeJSFileMosaicValidation";
import DemoFileMosaicValidation from "../../components/demo-components/filemosaic-demo/DemoFileMosaicValidation";
import CodeJSFileMosaicUploadStatus from "../../components/demo-components/filemosaic-demo/CodeJSFileMosaicUploadStatus";
import DemoFileMosaicUploadStatus from "../../components/demo-components/filemosaic-demo/DemoFileMosaicUploadStatus";

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
            information from a{" "}
            <TypeHighlight>
              <AnchorToTab href="https://developer.mozilla.org/en-US/docs/Web/API/File">
                File
              </AnchorToTab>
            </TypeHighlight>{" "}
            object or from individual props.
          </DescParagraph>

          <DemoContainerFileMosaic>
            <DemoFileMosaicBasic />
          </DemoContainerFileMosaic>

          <CodeJSFileMosaicBasic />

          <Alert severity="info">
            <AlertTitle> FileInputButton </AlertTitle>
            For completeness, some of these examples include{" "}
            <CodeHighlight>{`<FileInputButton/>`} </CodeHighlight>
            component for allowing the user to select files. For further
            information of this component check out the{" "}
            <a href="/components/fileinputbutton">FileInputButton</a> page.
          </Alert>
        </section>

        <section id="image-preview">
          <SubTitle content="Image preview" />
          <DescParagraph>
            By setting the <CodeHighlight>preview</CodeHighlight> prop to{" "}
            <TypeHighlight>true</TypeHighlight> the component will show an image
            preview by taking the <CodeHighlight>imageUrl</CodeHighlight>
            prop or by reading the <TypeHighlight>File</TypeHighlight> object if
            given.
          </DescParagraph>

          <DemoContainerFileMosaic>
            <DemoFileMosaicImagePreview />
          </DemoContainerFileMosaic>

          <CodeJSFileMosaicImagePreview />
          <Alert severity="info">
            As you can notice, when
            <CodeHighlight>{`imageUrl`}</CodeHighlight> prop is present, the{" "}
            <CodeHighlight>{`preview`}</CodeHighlight> prop is not needed since
            it has more priority.
            <br />
            On the other side, for displaying an image preview as a result of
            reading an image File it is necesary to set the{" "}
            <CodeHighlight>{`preview`}</CodeHighlight> prop, otherwise a default
            image preview will be shown.
          </Alert>
        </section>
        <section id="validation">
          <SubTitle content="Validation" />
          <DescParagraph>
            The <CodeHighlight>valid</CodeHighlight> prop can be set to{" "}
            <TypeHighlight>true</TypeHighlight>,{" "}
            <TypeHighlight>false</TypeHighlight> or{" "}
            <TypeHighlight>undefined</TypeHighlight>.
          </DescParagraph>

          <DemoContainerFileMosaic>
            <DemoFileMosaicValidation />
          </DemoContainerFileMosaic>

          <CodeJSFileMosaicValidation />
        </section>

        <section id="uploading">
          <SubTitle content="Uploading status" />
          <DescParagraph>
            The <CodeHighlight>uploadStatus</CodeHighlight> prop can be set to{" "}
            <TypeHighlight>"preparing"</TypeHighlight>,{" "}
            <TypeHighlight>"uploading"</TypeHighlight>,{" "}
            <TypeHighlight>"aborted"</TypeHighlight>,{" "}
            <TypeHighlight>"error"</TypeHighlight> or{" "}
            <TypeHighlight>"success"</TypeHighlight>. Also the{" "}
            <CodeHighlight>uploadMessage</CodeHighlight> prop is used for
            displaying the error or success message and the{" "}
            <CodeHighlight>progress</CodeHighlight> prop can be used to show the
            current progress of the upload process.
            <br />
            Each of the following examples demonstrates one state combination of
            the FileMosaic component.
          </DescParagraph>

          <Paper
            variant="outlined"
            style={{
              padding: "25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "7px",
            }}
          >
            <DemoFileMosaicUploadStatus />
          </Paper>

          <CodeJSFileMosaicUploadStatus />
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
    referTo: "/components/filemosaic#basic-filemosaic",
  },
  {
    id: 1,
    label: "Image Preview",
    referTo: "/components/filemosaic#image-preview",
  },
  {
    id: 2,
    label: "Validation",
    referTo: "/components/filemosaic#validation",
  },
  {
    id: 3,
    label: "Uploading",
    referTo: "/components/filemosaic#uploading",
  },
  {
    id: 4,
    label: "Localization",
    referTo: "/components/filemosaic#localization",
  },
  {
    id: 5,
    label: "Previews",
    referTo: "/components/filemosaic#previews",
  },
  {
    id: 6,
    label: "Actions",
    referTo: "/components/filemosaic#actions",
  },
  {
    id: 7,
    label: "Default previews",
    referTo: "/components/filemosaic#default-previews",
  },
  {
    id: 8,
    label: "Dark mode",
    referTo: "/components/filemosaic#dark-mode",
  },
];
