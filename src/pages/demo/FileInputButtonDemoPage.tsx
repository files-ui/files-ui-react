import Alert from "@mui/material/Alert/Alert";
import AlertTitle from "@mui/material/AlertTitle/AlertTitle";
import Paper from "@mui/material/Paper";
import * as React from "react";
import CodeHighlight from "../../components/codeHighlight/CodeHighlight";
import DescParagraph from "../../components/demo-components/desc-paragraph/DescParagraph";
import SubTitle from "../../components/demo-components/sub-title/SubTitle";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import MainTitle from "../../components/main-title/MainTitle";
import MainParagraph from "../../components/paragraph-main/MainParagraph";
import TypeHighlight from "../../components/typeHighlight/TypeHighlight";
import AnchorToTab from "../../components/util-components/AnchorToTab";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import RightMenu from "../../components/RightMenu/RightMenu";

import BasicDropzoneCodeJS from "../../components/demo-components/dropzone-demo/BasicDropzoneCodeJS";

import DemoDropzoneStyling from "../../components/demo-components/dropzone-demo/DemoDropzoneStyling";
import DemoDropzoneBehaviour from "../../components/demo-components/dropzone-demo/DemoDropzoneBehaviour";
import DemoDropzoneLabel from "../../components/demo-components/dropzone-demo/DemoDropzoneLabel";
import DemoDropzoneDisabled from "../../components/demo-components/dropzone-demo/DemoDropzoneDisabled";
import DemoDropzoneRipple from "../../components/demo-components/dropzone-demo/DemoDropzoneRipple";
import CodeDemoDropzoneStyling from "../../components/demo-components/dropzone-demo/CodeDropzoneDemoStyling";
import CodeDemoDropzoneRipple from "../../components/demo-components/dropzone-demo/CodeDemoDropzoneRipple";
import CodeDemoDropzoneDisabled from "../../components/demo-components/dropzone-demo/CodeDemoDropzoneDisabled";
import CodeDemoDropzoneBehaviour from "../../components/demo-components/dropzone-demo/CodeDemoDropzoneBehaviour";
import CodeDemoDropzoneLabel from "../../components/demo-components/dropzone-demo/CodeDropzoneDemoLabel";
import BasicDemoDropzone from "../../components/demo-components/dropzone-demo/BasicDropzoneDemo";
import DemoDropzoneValidation from "../../components/demo-components/dropzone-demo/DemoDropzoneValidation";
import CodeDemoDropzoneValidation from "../../components/demo-components/dropzone-demo/CodeDemoDropzoneValidation";
import DemoDropzoneCustomValidation from "../../components/demo-components/dropzone-demo/DemoDropzoneCustomValidation";
import CodeDemoDropzoneCustomValidation from "../../components/demo-components/dropzone-demo/CodeDemoDropzoneCustomValidation";
import DemoDropzoneUploading from "../../components/demo-components/dropzone-demo/DemoDropzoneUploading";
import CodeDemoDropzoneUploading from "../../components/demo-components/dropzone-demo/CodeDemoDropzoneUploading";
import DemoDropzoneActionButtons from "../../components/demo-components/dropzone-demo/DemoDropzoneActionButtons";
import CodeDemoDropzoneActionButtons from "../../components/demo-components/dropzone-demo/CodeDemoDropzoneActionButtons";

interface FileInputButtonDemoPageProps {}
const FileInputButtonDemoPage: React.FC<FileInputButtonDemoPageProps> = (
  props: FileInputButtonDemoPageProps
) => {
  return (
    <React.Fragment>
      <MainContentContainer>
        <MainTitle>FileInputButton</MainTitle>

        <MainParagraph>
          The default <CodeHighlight>{'<input type="file"/>'}</CodeHighlight> is
          just a quite boring button. That's why we present the
          <CodeHighlight>{"<FileInputButton/>"}</CodeHighlight> component which
          is an special <CodeHighlight>input</CodeHighlight> enhanced by the
          ability to allow users to choose files from a file dialog and also to
          validate an upload them.
        </MainParagraph>

        <DescParagraph>
          The widget is useful for handling one{" "}
          <TypeHighlight>File</TypeHighlight> or a list of{" "}
          <TypeHighlight>Files</TypeHighlight> in one or more of these
          scenarios:
          <ol>
            <li>The file(s) must be chosen from a File Dialog</li>
            <li>
              The file(s) must be validated or not. If validation is required,
              it can be done by taking into account a predefined set of allowed{" "}
              <AnchorToTab href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept">
                Common MIME Types
              </AnchorToTab>
              ; specifiying the max file size (in bytes) and/or the max amount
              of files.
            </li>
            <li>The file(s) must be uploaded somewhere in the internet.</li>
          </ol>
        </DescParagraph>

        <DescParagraph>
          This component works perfectly with{" "}
          <CodeHighlight>{"<FileMosaic/>"}</CodeHighlight> and
          <CodeHighlight>{"<FileCard/>"}</CodeHighlight> components for
          displaying the files.
        </DescParagraph>

        <section id="basic-fileinputbutton">
          <SubTitle content="Basic FileInputButton" />
          <DescParagraph>
            In this demo we set the{" "}
            <CodeHighlight>{"<FileInputButton/>"}</CodeHighlight> with the
            minimum props that allows you to get your task done fast. These
            props are <CodeHighlight>onChange</CodeHighlight> and{" "}
            <CodeHighlight>value</CodeHighlight>.
          </DescParagraph>
          <Paper variant="outlined" style={{ padding: "25px" }}>
            <BasicDemoDropzone button />
          </Paper>
          <BasicDropzoneCodeJS button />
          <Alert severity="info">
            <AlertTitle> FileCard </AlertTitle>
            For completeness, these examples include{" "}
            <CodeHighlight>{`<FileCard/>`} </CodeHighlight>
            component for showing the files selected by the user with minimun
            props too. For further information of this component check out the{" "}
            <AnchorToTab href="/components/filecard">FileCard</AnchorToTab>{" "}
            page.
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
            <AnchorToTab href="/types#extfile">ExtFile-API. </AnchorToTab>
          </Alert>
        </section>

        <section id="validation">
          <SubTitle content="Validation" />
          <DescParagraph>
            In this demo you can see how{" "}
            <CodeHighlight>{"<FileInputButton/>"}</CodeHighlight> component
            covers the following features when it comes to validating files.
            <ol>
              <li>Accepting specific file types.</li>
              <li>Accepting an specific number of files.</li>
              <li>Accepting files with an specific size (in bytes).</li>
            </ol>
          </DescParagraph>

          <Paper variant="outlined" style={{ padding: "25px" }}>
            <DemoDropzoneValidation button />
          </Paper>
          <CodeDemoDropzoneValidation button />
          <Alert severity="info">
            <AlertTitle> Removing non valid Files </AlertTitle>
            We call "clean" to the operation of removing non valid files. Apart
            from deleting them individually, there are some other ways in which
            you can remove all of them. You can try the following props in the{" "}
            {"<FileInputButton/>"} component:
            <ul>
              <li>
                <TypeHighlight>actionButtons</TypeHighlight> : By setting this
                prop properly, a button will be visible and will trigger the
                "clean" operation (This is the way used in this demo).
              </li>
              <li>
                <TypeHighlight>autoClean</TypeHighlight> : By setting this prop,
                non valid files will be automatically discarted and will not be
                given in the <CodeHighlight>onChange</CodeHighlight> event.
              </li>
            </ul>
          </Alert>
        </section>

        <section id="custom-validation">
          <SubTitle content="Custom validation" />
          <DescParagraph>
            You can also override the FileInputButton validation operation by
            giving a custom validation function that must fit the following
            signature:{" "}
            <CodeHighlight>
              {"validator?: (f: "}
              <AnchorToTab href="https://developer.mozilla.org/en-US/docs/Web/API/File">
                File
              </AnchorToTab>
              {") => "}
              <AnchorToTab href="/types#custom-validate-file-response">
                ValidateFileResponse
              </AnchorToTab>
            </CodeHighlight>
            . Custom validator can work together with{" "}
            <TypeHighlight>accept</TypeHighlight>,{" "}
            <TypeHighlight>maxFileSize</TypeHighlight> and{" "}
            <TypeHighlight>maxFiles</TypeHighlight> props.
          </DescParagraph>
          <Paper variant="outlined" style={{ padding: "25px" }}>
            <DemoDropzoneCustomValidation button />
          </Paper>
          <CodeDemoDropzoneCustomValidation button />
        </section>

        <section id="uploading">
          <SubTitle content="Uploading" />
          <DescParagraph>
            For uploading , the prop <TypeHighlight>uploadConfig</TypeHighlight>{" "}
            must be given. This prop recieves an object in which you can specify
            the HTTP method, the url, the headers and also extra data to be
            uploaded. The type definition for the prop mentioned can be found{" "}
            <AnchorToTab href="/types#UploadConfig">here</AnchorToTab>.
          </DescParagraph>

          <Paper variant="outlined" style={{ padding: "25px" }}>
            <DemoDropzoneUploading button />
          </Paper>

          <CodeDemoDropzoneUploading button />
          <Alert severity="info">
            <AlertTitle> Server response </AlertTitle>
            For uploading files through files-ui, server must return the
            response with the structure of the{" "}
            <TypeHighlight>
              {" "}
              <AnchorToTab href="/types#ServerResponse">
                ServerResponse
              </AnchorToTab>
            </TypeHighlight>{" "}
            type.
          </Alert>
          <br />
          <Alert severity="info">
            <AlertTitle> "fakeUpload" </AlertTitle>
            By giving this prop, the {"<FileInputButton/>"} component will
            simulate the upload operation by randomly setting the upload status and
            message on each uploadable <TypeHighlight>ExtFile</TypeHighlight>.
            It will also set a fake progress.
          </Alert>
          <br />
          <Alert severity="info">
            <AlertTitle> Upload config properties </AlertTitle>
            Apart from the properties you can see in the example above, there
            are more of them that can make the upload process to behave
            differently.
            <ul>
              <li>
                <TypeHighlight>autoUpload</TypeHighlight> : By setting this prop
                to true, the upload process will start automatically just after
                the user drops or selects files.
              </li>
              <li>
                <TypeHighlight>cleanOnUpload</TypeHighlight> : By setting this
                prop, you can control whether the upload process should "clean"
                the non valid files before uploading or not. By default this
                value is true.
              </li>
            </ul>
            More information about the uploadConfig type structure can be found{" "}
            <AnchorToTab href="/types#UploadConfig">here</AnchorToTab>.
          </Alert>
        </section>

        <section id="action-buttons">
          <SubTitle content="FileInputButton with action buttons" />
          <DescParagraph>
            If you need to display buttons that trigger the default events in
            the <CodeHighlight>{"<FileInputButton/>"}</CodeHighlight> component,
            you can do it by adding the{" "}
            <TypeHighlight>actionButtons</TypeHighlight> prop. This will add
            buttons to the top or to the bottom of this component.
            <ul>
              <li>
                FileInputButton with the{" "}
                <TypeHighlight>actionButtons.cleanButton</TypeHighlight> prop
                defined will display a button which triggers the clean process.
                <br />
                This button will be visible only{" "}
                <strong>when the "upload" process is not active</strong>.
              </li>
              <li>
                FileInputButton with the{" "}
                <TypeHighlight>actionButtons.deleteButton</TypeHighlight> prop
                defined will display a button which deletes all files.
                <br />
                this button will be visible only{" "}
                <strong>when the "upload" process is not active</strong>.
              </li>
              <li>
                FileInputButton with the{" "}
                <TypeHighlight>actionButtons.uploadButton</TypeHighlight> prop
                defined will display a button which starts the upload process.
                This button will <strong>not</strong> be visible{" "}
                <strong>during the "upload" process</strong>.
              </li>
              <li>
                FileInputButton with the{" "}
                <TypeHighlight>actionButtons.abortButton</TypeHighlight> prop
                defined will display a button which stops the upload process.
                <br />
                This button will be visible only{" "}
                <strong>during the "upload" process</strong>.
              </li>
            </ul>
          </DescParagraph>

          <Paper variant="outlined" style={{ padding: "25px" }}>
            <DemoDropzoneActionButtons button />
          </Paper>

          <CodeDemoDropzoneActionButtons button />
        </section>

        <section id="styling">
          <SubTitle content="Styling FileInputButton" />
          <DescParagraph>
            You can use change the look and feel of the{" "}
            <CodeHighlight>FileInputButton</CodeHighlight> component
            <ul>
              <li>
                FileInputButton with the <TypeHighlight>color</TypeHighlight>{" "}
                prop defined will use this color as the theme color.
              </li>
              <li>
                FileInputButton with the{" "}
                <TypeHighlight>textColor</TypeHighlight> prop defined will use
                this value to define the color of the text to be displayed.
              </li>
              <li>
                FileInputButton with the <TypeHighlight>variant</TypeHighlight>{" "}
                prop defined can display the button in 3 different variants:
                contained(default), outlined and text.
              </li>
              <li>
                FileInputButton with the{" "}
                <TypeHighlight>textTransform</TypeHighlight> prop defined can
                display the text with a text transform style (e.g. "uppercase").
              </li>
            </ul>
          </DescParagraph>

          <Paper variant="outlined" style={{ padding: "25px" }}>
            <DemoDropzoneStyling button />
          </Paper>

          <CodeDemoDropzoneStyling button />
        </section>

        <section id="label">
          <SubTitle content="Label" />
          <DescParagraph>
            You can specify a fixed label for{" "}
            <CodeHighlight>{"<FileInputButton/>"}</CodeHighlight> component.
            <br />
            If not given, the default label is "Browse...".
          </DescParagraph>

          <Paper variant="outlined" style={{ padding: "25px" }}>
            <DemoDropzoneLabel button />
          </Paper>

          <CodeDemoDropzoneLabel button />
        </section>

        <section id="ripple">
          <SubTitle content="Ripple" />
          <DescParagraph>
            According to{" "}
            <AnchorToTab href="https://m2.material.io/develop/ios/supporting/ripple">
              Material Design
            </AnchorToTab>
            , the Ripple component provides a radial action in the form of a
            visual ripple expanding outward from the user's touch. Ripple is a
            visual form of feedback for touch events providing users a clear
            signal that an element is being touched. In this component, a ripple
            is displayed When user clicks or touches the component.
            <br />
            For disabling the ripple effect you can set the{" "}
            <TypeHighlight>disableRipple</TypeHighlight> prop to true.
          </DescParagraph>

          <Paper variant="outlined" style={{ padding: "25px" }}>
            <DemoDropzoneRipple button />
          </Paper>

          <CodeDemoDropzoneRipple button />
        </section>

        <section id="disabled">
          <SubTitle content="Disabled FileInputButton" />
          <DescParagraph>
            According to{" "}
            <AnchorToTab href="https://m2.material.io/develop/ios/supporting/ripple">
              Material Design
            </AnchorToTab>{" "}
            a disabled state communicates when a component or element isn’t
            interactive, and should be deemphasized in a UI.
            <TypeHighlight>disabled</TypeHighlight> prop to true.
          </DescParagraph>

          <Paper variant="outlined" style={{ padding: "25px" }}>
            <DemoDropzoneDisabled button />
          </Paper>

          <CodeDemoDropzoneDisabled button />
        </section>

        <section id="add-or-replace">
          <SubTitle content="Add or replace files" />
          <DescParagraph>
            There are 2 different behaviours when user selects or drops new
            files:
            <ul>
              <li>
                Dropzone with the <CodeHighlight>behaviour</CodeHighlight> set
                to <TypeHighlight>"add"</TypeHighlight> will add the new files
                to the current array of ExtFiles.
              </li>
              <li>
                Dropzone with the <CodeHighlight>behaviour</CodeHighlight> set
                to <TypeHighlight>"replace"</TypeHighlight> will replace the
                current array of ExtFiles with the new ones.
              </li>
            </ul>
            In this demo try to select or drop files more than once on each
            dropzone to see the difference.
          </DescParagraph>

          <Paper variant="outlined" style={{ padding: "25px" }}>
            <DemoDropzoneBehaviour button />
          </Paper>

          <CodeDemoDropzoneBehaviour button />
        </section>

        <section id="localization">
          <SubTitle content="Localization" />
          <DescParagraph>
            Although the <CodeHighlight>{"<FileInputButton/>"}</CodeHighlight>{" "}
            allows full control of label, this component uses the{" "}
            <TypeHighlight>localization</TypeHighlight> prop in the validation
            and the upload process for setting status and messages according to
            the language that this prop refers to.
            <br />
            The localization demo for this component can be found in the{" "}
            <AnchorToTab href="/localization">localization page</AnchorToTab>.
          </DescParagraph>
        </section>

        <section id="api">
          <SubTitle content="API" />
          <DescParagraph>
            See the documentation below for a complete reference to all of the
            props and classes available to the components mentioned here.
            <ul>
              <li>
                <CodeHighlight>
                  <AnchorToTab href="/api/fileinputbutton">
                    {"<FileInputButton />"}
                  </AnchorToTab>
                </CodeHighlight>
              </li>
              <li>
                <CodeHighlight>
                  <AnchorToTab href="/api/filecard">
                    {"<FileCard />"}
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
export default FileInputButtonDemoPage;

const rightMenuItems = [
  {
    id: 0,
    label: "Basic file input",
    referTo: "/components/fileinputbutton#basic-fileinputbutton",
  },
  {
    id: 1,
    label: "Validation",
    referTo: "/components/fileinputbutton#validation",
  },
  {
    id: 2,
    label: "Custom validation",
    referTo: "/components/fileinputbutton#custom-validation",
  },
  {
    id: 3,
    label: "Uploading",
    referTo: "/components/fileinputbutton#uploading",
  },
  {
    id: 5,
    label: "Action buttons",
    referTo: "/components/fileinputbutton#action-buttons",
  },

  {
    id: 6,
    label: "Styling",
    referTo: "/components/fileinputbutton#styling",
  },
  {
    id: 14,
    label: "Label",
    referTo: "/components/fileinputbutton#label",
  },
  {
    id: 8,
    label: "Ripple",
    referTo: "/components/fileinputbutton#ripple",
  },
  {
    id: 11,
    label: "Disabled",
    referTo: "/components/fileinputbutton#disabled",
  },

  {
    id: 15,
    label: "Add or replace",
    referTo: "/components/fileinputbutton#add-or-replace",
  },
  {
    id: 7,
    label: "Localization",
    referTo: "/components/fileinputbutton#localization",
  },
];
