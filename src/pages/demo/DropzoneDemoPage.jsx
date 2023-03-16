import * as React from "react";
import { Paper, Alert, AlertTitle } from "@mui/material";
import CodeHighlight from "../../components/codeHighlight/CodeHighlight";
import DescParagraph from "../../components/demo-components/desc-paragraph/DescParagraph";
import BasicDropzoneCodeJS from "../../components/demo-components/dropzone-demo/BasicDropzoneCodeJS";
import BasicDemoDropzone from "../../components/demo-components/dropzone-demo/BasicDropzoneDemo";
import CodeDemoDropzoneActionButtons from "../../components/demo-components/dropzone-demo/CodeDemoDropzoneActionButtons";
import CodeDemoDropzoneCustomValidation from "../../components/demo-components/dropzone-demo/CodeDemoDropzoneCustomValidation";
import CodeDemoDropzoneUploading from "../../components/demo-components/dropzone-demo/CodeDemoDropzoneUploading";
import CodeDemoDropzoneValidation from "../../components/demo-components/dropzone-demo/CodeDemoDropzoneValidation";
import DemoDropzoneActionButtons from "../../components/demo-components/dropzone-demo/DemoDropzoneActionButtons";
import DemoDropzoneCustomValidation from "../../components/demo-components/dropzone-demo/DemoDropzoneCustomValidation";
import DemoDropzoneUploading from "../../components/demo-components/dropzone-demo/DemoDropzoneUploading";
import DemoDropzoneValidation from "../../components/demo-components/dropzone-demo/DemoDropzoneValidation";
import SubTitle from "../../components/demo-components/sub-title/SubTitle";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import MainTitle from "../../components/main-title/MainTitle";
import MainParagraph from "../../components/paragraph-main/MainParagraph";
import RightMenu from "../../components/RightMenu/RightMenu";
import TypeHighlight from "../../components/typeHighlight/TypeHighlight";
import AnchorToTab from "../../components/util-components/AnchorToTab";
import DemoDropzoneFooterConfig from "../../components/demo-components/dropzone-demo/DemoDropzoneFooterConfig";
import DemoDropzoneHeaderConfig from "../../components/demo-components/dropzone-demo/DemoDropzoneHeaderConfig";
import CodeDemoDropzoneHeaderConfig from "../../components/demo-components/dropzone-demo/CodeDemoDropzoneHeaderConfig";
import CodeDemoDropzoneFooterConfig from "../../components/demo-components/dropzone-demo/CodeDemoDropzoneFooterConfig";
import DemoDropzoneStyling from "../../components/demo-components/dropzone-demo/DemoDropzoneStyling";
import DemoDropzoneBehaviour from "../../components/demo-components/dropzone-demo/DemoDropzoneBehaviour";
import DemoDropzoneLabel from "../../components/demo-components/dropzone-demo/DemoDropzoneLabel";
import DemoDropzoneDropLayer from "../../components/demo-components/dropzone-demo/DemoDropzoneDropLayer";
import DemoDropzoneClickable from "../../components/demo-components/dropzone-demo/DemoDropzoneClickable";
import DemoDropzoneDisabled from "../../components/demo-components/dropzone-demo/DemoDropzoneDisabled";
import DemoDropzoneRipple from "../../components/demo-components/dropzone-demo/DemoDropzoneRipple";

const DropzoneDemoPage = (props) => {
  return (
    <React.Fragment>
      <MainContentContainer>
        <MainTitle>Dropzone</MainTitle>

        <MainParagraph>
          The "dropzone" component is a special{" "}
          <CodeHighlight>input</CodeHighlight> enhanced by the ability to allow
          users to drag and drop files there or choose files from a file dialog.
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
            <AnchorToTab href="/components/filemosaic">
              FileMosaic
            </AnchorToTab>{" "}
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
            <AnchorToTab href="/types#ext-file">ExtFile-API. </AnchorToTab>
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
              <li>Accepting files with an specific size (in bytes).</li>
            </ol>
          </DescParagraph>

          <Paper variant="outlined" style={{ padding: "25px" }}>
            <DemoDropzoneValidation />
          </Paper>
          <CodeDemoDropzoneValidation />
          <Alert severity="info">
            <AlertTitle> Removing non valid Files </AlertTitle>
            We call "clean" to the operation of removing non valid files. Apart
            from deleting them individually, there are some other ways in which
            you can remove all of them. You can try the following props in the{" "}
            {"<Dropzone/>"} component:
            <ul>
              <li>
                <TypeHighlight>cleanFiles</TypeHighlight> : This will make
                dropzone header to display the "clean" icon which can trigger
                the "clean" operation.
              </li>
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
            . Custom validator can work together with{" "}
            <TypeHighlight>accept</TypeHighlight>,{" "}
            <TypeHighlight>maxFileSize</TypeHighlight> and{" "}
            <TypeHighlight>maxFiles</TypeHighlight> props.
          </DescParagraph>
          <Paper variant="outlined" style={{ padding: "25px" }}>
            <DemoDropzoneCustomValidation />
          </Paper>
          <CodeDemoDropzoneCustomValidation />
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
            <DemoDropzoneUploading />
          </Paper>

          <CodeDemoDropzoneUploading />
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
            By giving this prop, the {"<Dropzone/>"} component will simulate the
            upload operation by randomly set the upload status and message in
            ech uploadable <TypeHighlight>ExtFile</TypeHighlight>. It also will
            set a fake progress.
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
                the non valid files before uploading or not By default this
                value is true.
              </li>
            </ul>
            More information about the uploadConfig type structure can be found{" "}
            <AnchorToTab href="/types#UploadConfig">here</AnchorToTab>.
          </Alert>
        </section>

        <section id="action-buttons">
          <SubTitle content="Dropzone with action buttons" />
          <DescParagraph>
            If you need to display buttons that trigger the default events in
            the <CodeHighlight>{"<Dropzone/>"}</CodeHighlight> component, you
            can do it by adding the <TypeHighlight>actionButtons</TypeHighlight>{" "}
            prop. This will add buttons to the top or to the bottom of this
            component.
            <ul>
              <li>
                Dropzone with the{" "}
                <TypeHighlight>actionButtons.cleanButton</TypeHighlight> prop
                defined will display a button which triggers the clean process.
                <br />
                This button will be visible only{" "}
                <strong>when the "upload" process is not active</strong>.
              </li>
              <li>
                Dropzone with the{" "}
                <TypeHighlight>actionButtons.deleteButton</TypeHighlight> prop
                defined will display a button which deletes all files.
                <br />
                this button will be visible only{" "}
                <strong>when the "upload" process is not active</strong>.
              </li>
              <li>
                Dropzone with the{" "}
                <TypeHighlight>actionButtons.uploadButton</TypeHighlight> prop
                defined will display a button which starts the upload process.
                This button will <strong>not</strong> be visible{" "}
                <strong>during the "upload" process</strong>.
              </li>
              <li>
                Dropzone with the{" "}
                <TypeHighlight>actionButtons.abortButton</TypeHighlight> prop
                defined will display a button which stops the upload process.
                <br />
                This button will be visible only{" "}
                <strong>during the "upload" process</strong>.
              </li>
            </ul>
          </DescParagraph>

          <Paper variant="outlined" style={{ padding: "25px" }}>
            <DemoDropzoneActionButtons />
          </Paper>

          <CodeDemoDropzoneActionButtons />
        </section>

        <section id="header-config">
          <SubTitle content="Dropzone header config" />
          <DescParagraph>
            You can use the <TypeHighlight>headerConfig</TypeHighlight> prop to
            define what will be displayed in the header.
            <ul>
              <li>
                Dropzone with the{" "}
                <TypeHighlight>headerConfig.customHeader</TypeHighlight> prop
                defined will display this prop replacing the entire default
                header.
              </li>
            </ul>
            By default all of these values are set to{" "}
            <TypeHighlight>true</TypeHighlight>.
          </DescParagraph>

          <Paper variant="outlined" style={{ padding: "25px" }}>
            <DemoDropzoneHeaderConfig />
          </Paper>

          <CodeDemoDropzoneHeaderConfig />
          <Alert severity="info">
            <AlertTitle> HeaderConfig </AlertTitle>
            There are more options that can be defined such as:
            <ul>
              <li>
                Dropzone with the{" "}
                <TypeHighlight>headerConfig.deleteFiles</TypeHighlight> prop set
                to <TypeHighlight>true</TypeHighlight> will display a delete
                button which triggers the delete process.
                <br />
                This button will be visible only{" "}
                <strong>when the "upload" process is not active</strong>.
              </li>
              <li>
                Dropzone with the{" "}
                <TypeHighlight>headerConfig.cleanFiles</TypeHighlight> prop set
                to <TypeHighlight>true</TypeHighlight> will display a "clean"
                buton. This button will be visible only during the "upload"
                process.
                <br />
                button will be visible only{" "}
                <strong>when the "upload" process is not active</strong>.
              </li>
              <li>
                Dropzone with the{" "}
                <TypeHighlight>headerConfig.uploadFiles</TypeHighlight> prop set
                to <TypeHighlight>true</TypeHighlight> will display a button
                which starts the upload process.
              </li>
              <li>
                Dropzone with the{" "}
                <TypeHighlight>headerConfig.uploading</TypeHighlight> prop set
                to <TypeHighlight>true</TypeHighlight> will display a loading
                icon <strong>during the "upload" process</strong>.
              </li>
              <li>
                Dropzone with the{" "}
                <TypeHighlight>headerConfig.maxFileSize</TypeHighlight> prop set
                to <TypeHighlight>true</TypeHighlight> will display the max file
                size label.
              </li>
              <li>
                Dropzone with the{" "}
                <TypeHighlight>headerConfig.validFilesCount</TypeHighlight> prop
                set to <TypeHighlight>true</TypeHighlight> will display the
                current count of valid files.
              </li>
            </ul>
            By default all of these values are set to
            <TypeHighlight>true</TypeHighlight>. The complete type definition
            can be found{" "}
            <AnchorToTab href="/types#header-config">here</AnchorToTab>.
          </Alert>
        </section>

        <section id="footer-config">
          <SubTitle content="Dropzone footer config" />
          <DescParagraph>
            You can use the <TypeHighlight>footerConfig</TypeHighlight> prop to
            define what will be displayed in the footer.
            <ul>
              <li>
                Dropzone with the{" "}
                <TypeHighlight>footerConfig.customMessage</TypeHighlight> prop
                defined will be considered the message to display in the footer.
              </li>
            </ul>
          </DescParagraph>

          <Paper variant="outlined" style={{ padding: "25px" }}>
            <DemoDropzoneFooterConfig />
          </Paper>

          <CodeDemoDropzoneFooterConfig />

          <Alert severity="info">
            <AlertTitle> FooterConfig </AlertTitle>
            There are more options that can be defined such as:
            <ul>
              <li>
                Dropzone with the{" "}
                <TypeHighlight>footerConfig.allowedTypesLabel</TypeHighlight>{" "}
                prop set to <TypeHighlight>false</TypeHighlight> will hide the
                label that indicates the files types allowed. This label will be
                hidden <strong>when the "upload" process is active</strong>.
              </li>
              <li>
                Dropzone with the{" "}
                <TypeHighlight>
                  footerConfig.uploadProgressMessage
                </TypeHighlight>{" "}
                prop set to <TypeHighlight>false</TypeHighlight> will not
                display the label with the upload progress. This label will be
                visible<strong> only during the "upload" process</strong>.
              </li>
              <li>
                Dropzone with the{" "}
                <TypeHighlight>footerConfig.uploadResultMessage</TypeHighlight>{" "}
                prop set to <TypeHighlight>false</TypeHighlight> will not
                display a label at the end of the upload process. This label can{" "}
                be visible for 2 seconds just{" "}
                <strong>after the "upload" process finishes</strong>.
              </li>
              <li>
                Dropzone with the{" "}
                <TypeHighlight>footerConfig.noMissingFilesLabel</TypeHighlight>{" "}
                prop set to <TypeHighlight>false</TypeHighlight> will not
                display a label when upload starts with no uploadable files.
              </li>
              <li>
                Dropzone with the{" "}
                <TypeHighlight>footerConfig.style</TypeHighlight> prop set to{" "}
                <TypeHighlight>false</TypeHighlight>defined will override the
                styles associated to the footer component.
              </li>
            </ul>
            By default all of these values are set to
            <TypeHighlight>true</TypeHighlight>.
            <br />
            The complete type definition can be found{" "}
            <AnchorToTab href="/types#footer-config">here</AnchorToTab>.
          </Alert>
        </section>

        <section id="styling">
          <SubTitle content="Styling Dropzone" />
          <DescParagraph>
            You can use change the look and feel of the{" "}
            <CodeHighlight>Dropzone</CodeHighlight> component
            <ul>
              <li>
                Dropzone with the <TypeHighlight>color</TypeHighlight> prop
                defined will use this color for border, drop layer, font color
                and ripple.
              </li>
              <li>
                Dropzone with the <TypeHighlight>backgroundColor</TypeHighlight>{" "}
                prop defined will use this color for the background.
              </li>
              <li>
                Dropzone with the <TypeHighlight>minHeight</TypeHighlight> prop
                defined will use this value to define the minimum height of the
                component.
              </li>
            </ul>
          </DescParagraph>

          <Paper variant="outlined" style={{ padding: "25px" }}>
            <DemoDropzoneStyling />
          </Paper>

          <CodeDemoDropzoneFooterConfig />
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
            is displayed after 2 user actions:
            <ul>
              <li>When user clicks or touches the component.</li>
              <li>Just after user dropped files.</li>
            </ul>
            For disabling the ripple effect you can set the{" "}
            <TypeHighlight>disableRipple</TypeHighlight> prop to false.
          </DescParagraph>

          <Paper variant="outlined" style={{ padding: "25px" }}>
            <DemoDropzoneRipple />
          </Paper>

          <CodeDemoDropzoneFooterConfig />
        </section>

        <section id="disabled">
          <SubTitle content="Disabled Dropzone" />
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
            <DemoDropzoneDisabled />
          </Paper>

          <CodeDemoDropzoneFooterConfig />
        </section>

        <section id="clickable">
          <SubTitle content="Clickable Dropzone" />
          <DescParagraph>
            Dropzone with the
            <TypeHighlight>clickable</TypeHighlight> prop set to false will not
            open the file dialog to select files when user clicks the component.
          </DescParagraph>

          <Paper variant="outlined" style={{ padding: "25px" }}>
            <DemoDropzoneClickable />
          </Paper>

          <CodeDemoDropzoneFooterConfig />
        </section>

        <section id="drop-layer">
          <SubTitle content="Drop Layer" />
          <DescParagraph>
            Dropzone with the
            <TypeHighlight>dropOnLayer</TypeHighlight> prop set to false will
            not perform the drop operation in a layer that covers the complete
            component container.
            <br />
            In this demo try to drag and drop files in both dropzones to see the
            difference.
          </DescParagraph>

          <Paper variant="outlined" style={{ padding: "25px" }}>
            <DemoDropzoneDropLayer />
          </Paper>

          <CodeDemoDropzoneFooterConfig />
        </section>

        <section id="label">
          <SubTitle content="Label" />
          <DescParagraph>
            You can specify a fixed label for{" "}
            <CodeHighlight>{"<Dropzone/>"}</CodeHighlight> component to display
            when there isn't any files.
          </DescParagraph>

          <Paper variant="outlined" style={{ padding: "25px" }}>
            <DemoDropzoneLabel />
          </Paper>

          <CodeDemoDropzoneFooterConfig />
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
            <DemoDropzoneBehaviour />
          </Paper>

          <CodeDemoDropzoneFooterConfig />
        </section>

        <section id="localization">
          <SubTitle content="Localization" />
          <DescParagraph>
            The localization demo for this component can be found in the{" "}
            <AnchorToTab href="/localization">localization page</AnchorToTab>
          </DescParagraph>

          {/*   <Paper variant="outlined" style={{ padding: "25px" }}>
            <DemoDropzoneFooterConfig />
          </Paper>

          <CodeDemoDropzoneFooterConfig /> */}
        </section>

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
    id: 2,
    label: "Custom validation",
    referTo: "/components/dropzone#custom-validation",
  },
  {
    id: 3,
    label: "Uploading",
    referTo: "/components/dropzone#uploading",
  },
  /*  {
    id: 4,
    label: "Dropzone events",
    referTo: "/components/dropzone#dropzone-events",
  }, */
  {
    id: 5,
    label: "Action buttons",
    referTo: "/components/dropzone#action-buttons",
  },
  {
    id: 9,
    label: "Header config",
    referTo: "/components/dropzone#header-config",
  },
  {
    id: 10,
    label: "Footer config",
    referTo: "/components/dropzone#footer-config",
  },
  {
    id: 6,
    label: "Styling",
    referTo: "/components/dropzone#styling",
  },
  {
    id: 8,
    label: "Ripple",
    referTo: "/components/dropzone#ripple",
  },
  {
    id: 11,
    label: "Disabled",
    referTo: "/components/dropzone#disabled",
  },
  {
    id: 12,
    label: "Clickable",
    referTo: "/components/dropzone#clickable",
  },
  {
    id: 13,
    label: "Drop Layer",
    referTo: "/components/dropzone#drop-layer",
  },
  {
    id: 14,
    label: "Label",
    referTo: "/components/dropzone#label",
  },
  {
    id: 15,
    label: "Add or replace",
    referTo: "/components/dropzone#add-or-replace",
  },
  {
    id: 7,
    label: "Localization",
    referTo: "/components/dropzone#localization",
  },
];
