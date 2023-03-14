import { Paper, Alert, AlertTitle } from "@mui/material";
import * as React from "react";
import CodeHighlight from "../../components/codeHighlight/CodeHighlight";
import DescParagraph from "../../components/demo-components/desc-paragraph/DescParagraph";
import BasicDropzoneCodeJS from "../../components/demo-components/dropzone-demo/BasicDropzoneCodeJS";
import BasicDemoDropzone from "../../components/demo-components/dropzone-demo/BasicDropzoneDemo";
import CodeDemoDropzoneCustomValidation from "../../components/demo-components/dropzone-demo/CodeDemoDropzoneCustomValidation";
import CodeDemoDropzoneValidation from "../../components/demo-components/dropzone-demo/CodeDemoDropzoneValidation";
import DemoDropzoneCustomValidation from "../../components/demo-components/dropzone-demo/DemoDropzoneCustomValidation";
import DemoDropzoneValidation from "../../components/demo-components/dropzone-demo/DemoDropzoneValidation";
import SubTitle from "../../components/demo-components/sub-title/SubTitle";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import MainTitle from "../../components/main-title/MainTitle";
import MainParagraph from "../../components/paragraph-main/MainParagraph";
import RightMenu from "../../components/RightMenu/RightMenu";
import TypeHighlight from "../../components/typeHighlight/TypeHighlight";
import AnchorToTab from "../../components/util-components/AnchorToTab";

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
const DropzoneDemoPage = (props) => {
  return (
    <React.Fragment>
      <MainContentContainer>
        <MainTitle>Dropzone</MainTitle>

        <MainParagraph>
          The "dropzone" component is a special{" "}
          <CodeHighlight>input</CodeHighlight> enhanced by the capability of
          allowing users to either drag and drop files there or picking files
          from a file dialog.
        </MainParagraph>

        <DescParagraph>
          The widget is useful for handling one{" "}
          <TypeHighlight>File</TypeHighlight> or a list of{" "}
          <TypeHighlight>Files</TypeHighlight> in one or more of these
          scenarios:
          <ol>
            <li>
              The file(s) must be chosen from a File Dialog or must be dragged
              and dropped into the widget
            </li>
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

        <section id="basic-dropzone">
          <SubTitle content="Basic Dropzone" />
          <DescParagraph>
            In this demo we set dropzone with the minimum props that allows you
            to get your task done fast. These props are{" "}
            <CodeHighlight>onChange</CodeHighlight> and{" "}
            <CodeHighlight>value</CodeHighlight>.
          </DescParagraph>
          <Paper variant="outlined" style={{ padding: "25px" }}>
            <BasicDemoDropzone />
          </Paper>
          <BasicDropzoneCodeJS />
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

        <section id="validation">
          <SubTitle content="Validation" />
          <DescParagraph>
            In this demo you can see how{" "}
            <CodeHighlight>{"<Dropzone/>"}</CodeHighlight> component covers the
            following features when it comes to validating files.
            <ol>
              <li>Accepting specific file types.</li>
              <li>Accepting an specific number of files.</li>
              <li>Accepting an specific size (in bytes) for files.</li>
            </ol>
          </DescParagraph>

          <Paper variant="outlined" style={{ padding: "25px" }}>
            <DemoDropzoneValidation />
          </Paper>
          <CodeDemoDropzoneValidation />
          <Alert severity="info">
            <AlertTitle> Removing non valid Files </AlertTitle>
            We call "clean" the operation of removing non valid files. Apart
            from deleting them individually there are some other ways in wich
            you can delete them. You can try the following props in the{" "}
            {"<Dropzone/>"} component:
            <ul>
              <li>
                <TypeHighlight>cleanFiles</TypeHighlight> : This will make
                dropzone header to dislay the "clean" icon which can trigger the
                "clean" operation.
              </li>
              <li>
                <TypeHighlight>actionButtons</TypeHighlight> : By setting this
                prop properly, a button will be visible and will trigger the
                "clean" operation (This is the way used in this demo).
              </li>
              <li>
                <TypeHighlight>autoClean</TypeHighlight> : By setting this prop,
                non valid files will automatically discarted and will not be
                given in the <CodeHighlight>onChange</CodeHighlight> event.
              </li>
            </ul>
          </Alert>
        </section>

        <section id="custom-validation">
          <SubTitle content="Custom validation" />
          <DescParagraph>
            You can also override the Dropzone validation operation by giving a
            custom validation function that must fit the following signature:{" "}
            <CodeHighlight>
              {"validator?: (f: "}
              <AnchorToTab href="https://developer.mozilla.org/en-US/docs/Web/API/File">
                File
              </AnchorToTab>
              {") => "}
              <AnchorToTab href="/types#custom-validate-file-response">
                CustomValidateFileResponse
              </AnchorToTab>
            </CodeHighlight>
            .
          </DescParagraph>

          <Paper variant="outlined" style={{ padding: "25px" }}>
            <DemoDropzoneCustomValidation />
          </Paper>

          <CodeDemoDropzoneCustomValidation />
        </section>
        {/* 
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
      </section>*/}
        <section id="api">
          <SubTitle content="API" />
          <DescParagraph>
            See the documentation below for a complete reference to all of the
            props and classes available to the components mentioned here.
            <ul>
              <li>
                <CodeHighlight>
                  <AnchorToTab href="/api/dropzone">
                    {"<Dropzone />"}
                  </AnchorToTab>
                </CodeHighlight>
              </li>
              <li>
                <CodeHighlight>
                  <AnchorToTab href="/api/filemosaic">
                    {"<FileMosaic />"}
                  </AnchorToTab>
                </CodeHighlight>
              </li>
            </ul>
          </DescParagraph>
        </section>
      </MainContentContainer>

      <RightMenuContainer>
        <RightMenu width="240px" items={rightMenuItems} />
      </RightMenuContainer>
    </React.Fragment>
  );
};
export default DropzoneDemoPage;
