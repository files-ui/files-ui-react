import { Box, Stack, Paper, Alert, AlertTitle } from "@mui/material";
import * as React from "react";
import CodeHighlight from "../../components/codeHighlight/CodeHighlight";
import DescParagraph from "../../components/demo-components/desc-paragraph/DescParagraph";
import BasicDropzoneCodeJS from "../../components/demo-components/dropzone-demo/BasicDropzoneCodeJS";
import BasicDemoDropzone from "../../components/demo-components/dropzone-demo/BasicDropzoneDemo";
import SubTitle from "../../components/demo-components/sub-title/SubTitle";
import MainLayoutPage from "../../components/layout-pages/MainLayoutPage";
import MainTitle from "../../components/main-title/MainTitle";
import MainParagraph from "../../components/paragraph-main/MainParagraph";
import RightMenu from "../../components/RightMenu/RightMenu";
import TypeHighlight from "../../components/typeHighlight/TypeHighlight";
import NavBarTemplate from "../../templates/NavBarTemplate";
const rightMenuItems = [
  {
    id: 0,
    label: "Basic dropzone",
    referTo: "/components/dropzone/#basic-dropzone",
  },
  {
    id: 1,
    label: "Validation",
    referTo: "/components/dropzone/#validation",
  },
  {
    id: 1,
    label: "Custom validation",
    referTo: "/components/dropzone/#custom-validation",
  },
  {
    id: 2,
    label: "Dropzone events",
    referTo: "/components/dropzone/#dropzone-events",
  },
  {
    id: 3,
    label: "Uploading",
    referTo: "/components/dropzone/#uploading",
  },
  {
    id: 4,
    label: "Styling",
    referTo: "/components/dropzone/#styling",
  },
  {
    id: 5,
    label: "Localization",
    referTo: "/components/dropzone/#localization",
  },
  {
    id: 6,
    label: "Dark mode",
    referTo: "/components/dropzone/#dark-mode",
  },
  {
    id: 6,
    label: "API",
    referTo: "/components/dropzone/#api",
  },
];
const DropzoneDemoPage = (props) => {
  return (
    <MainLayoutPage
      rightMenu={<RightMenu width="240px" items={rightMenuItems} />}
    >
      <MainTitle>Dropzone</MainTitle>

      <MainParagraph>
        The "dropzone" component is a special{" "}
        <CodeHighlight>input</CodeHighlight> enhanced by the capability of
        allowing users to either drag and drop files there or picking files from
        a file dialog.
      </MainParagraph>

      <DescParagraph>
        The widget is useful for handling one{" "}
        <TypeHighlight>File</TypeHighlight> or a list of{" "}
        <TypeHighlight>Files</TypeHighlight> in one or more of these scenarios:
        <ol>
          <li>
            The file(s) must be chosen from a File Dialog or must be dragged and
            dropped into the widget
          </li>
          <li>
            The file(s) must be validated or not taking into account a
            predefined set of allowed{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept">
              Common MIME Types
            </a>
            ; specifiying the max file size (in bytes) or max amout of files.
          </li>
          <li>The file(s) must be uploaded somewhere in the internet.</li>
          <li>
            The file(s) must be shown in the screen with a preview according to
            the file type.
          </li>
        </ol>
      </DescParagraph>
      <DescParagraph>
        It's meant to be an improved version of the "react-dropzone" and
        "dropzone" packages.
      </DescParagraph>

      <section id="basic-dropzone">
        <SubTitle content="Basic Dropzone" />
        <DescParagraph>
          In this demo we set dropzone with the minimun props that allows you to
          get done fast. These props are <code className="code">onChange</code>{" "}
          and <code className="code">value</code> props.
        </DescParagraph>
        <Paper variant="outlined" style={{ padding: "25px" }}>
          <BasicDemoDropzone />
        </Paper>
        <BasicDropzoneCodeJS />
        <Alert severity="info">
          <AlertTitle> FileMosaic </AlertTitle>
          For completeness, these examples include{" "}
          <strong>{`<FileMosaic/>`} </strong>
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

    {/*    <section id="validation">
        <SubTitle content="Validation" />
        <DescParagraph>
          You can either "tell" Dropzone component to validate user files by
          providing one or more of these criteria:
          <ol>
            <li>Accept specific file types.</li>
            <li>Accept an specific number of files.</li>
            <li>Accept an specific size (in bytes) of files.</li>
          </ol>
        </DescParagraph>

        <Paper variant="outlined" style={{ padding: "25px" }}>
          <BasicDemoDropzone />
        </Paper>

        <p></p>
        <BasicDropzoneCodeJS />
      </section>

      <section id="custom-validation">
        <SubTitle content="Custom validation" />
        <DescParagraph>
          You can also "override the Dropzone validation by performimg a custom
          validation using a custom function that must fit the following
          signature:
          <div>... type</div>
        </DescParagraph>

        <Paper variant="outlined" style={{ padding: "25px" }}>
          <BasicDemoDropzone />
        </Paper>

        <p></p>
        <BasicDropzoneCodeJS />
      </section>

      <section id="dropzone-events">
        <SubTitle content="Dropzone events" />
        <DescParagraph>
          You can handle the following events:
          <ul>
            <li>
              Dropzone with the <code className="code">onDelete</code> prop
              defined can delete all the files associated with the{" "}
              <code className="code">value</code> prop.
            </li>
            <li>
              {" "}
              Dropzone with the <code className="code">onDelete</code> prop
              defined can delete all the files associated with the{" "}
              <code className="code">value</code> prop..
            </li>
            <li>Accept an specific size (in bytes) of files.</li>
          </ul>
        </DescParagraph>

        <Paper variant="outlined" style={{ padding: "25px" }}>
          <BasicDemoDropzone />
        </Paper>

        <p></p>
        <BasicDropzoneCodeJS />
      </section>
      <section id="api">
        <SubTitle content="API" />
        <DescParagraph>
          See the documentation below for a complete reference to all of the
          props and classes available to the components mentioned here.
          <ul>
            <li>
              <CodeHighlight>
                <a href="/api/dropzone">{"<Dropzone />"}</a>
              </CodeHighlight>
            </li>
            <li>
              <CodeHighlight>
                <a href="/api/file-mosaic">{"<FileMosaic />"}</a>
              </CodeHighlight>
            </li>
          </ul>
        </DescParagraph>
      </section> */}
    </MainLayoutPage>
  );
};
export default DropzoneDemoPage;
