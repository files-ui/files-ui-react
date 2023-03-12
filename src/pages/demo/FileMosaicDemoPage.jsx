import { Alert, AlertTitle, Paper } from "@mui/material";
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
import DemoFileMosaicLocalization from "../../components/demo-components/filemosaic-demo/DemoFileMosaicLocalization";
import CodeJSFileMosaicLocalization from "../../components/demo-components/filemosaic-demo/CodeJSFileMosaicLocalization";
import DemoFileMosaicDarkMode from "../../components/demo-components/filemosaic-demo/DemoFileMosaicDarkMode";
import CodeJSFileMosaicDarkMode from "../../components/demo-components/filemosaic-demo/CodeJSFileMosaicDarkMode";
import DemoFileMosaicFileIcons from "../../components/demo-components/filemosaic-demo/DemoFileMosaicFileIcons";
import DemoFileCardActions from "../../components/demo-components/filemosaic-demo/DemoFileCradActions";
import CodeJSFileCardActions from "../../components/demo-components/filemosaic-demo/CodeJSFileCardActions";
import DemoFileMosaicSmartImgFit from "../../components/demo-components/filemosaic-demo/DemoFileMosaicSmartImgFit";
import CodeJSFileMosaicSmartImgFit from "../../components/demo-components/filemosaic-demo/CodeJSFileMosaicSmartImgFit";

const FileMosaicDemoPage = (props) => {
  return (
    <React.Fragment>
      <MainContentContainer>
        <MainTitle>FileMosaic</MainTitle>
        <MainParagraph>
          File mosaics are compact elements that represent a file in the UI.
          They can be used for just showing general info of the file, or either
          to allow the user to interact with them.
        </MainParagraph>
        <DescParagraph>
          This widget allow users to see information of{" "}
          <TypeHighlight> Files</TypeHighlight> and / or trigger actions.
        </DescParagraph>
        <Alert severity="info">
          While included here as a standalone component, the most common use
          will be to display the result of the "onChange" event of{" "}
          <CodeHighlight>{"<Dropzone/>"}</CodeHighlight> or{" "}
          <CodeHighlight>{"<InputButton/>"}</CodeHighlight> components, so some
          of the behavior demonstrated here is not totally shown in context.{" "}
        </Alert>
        <section id="basic-filemosaic">
          <SubTitle content="Basic FileMosaic" />
          <DescParagraph>
            The <CodeHighlight>FileMosaic</CodeHighlight> component supports
            displaying information from a{" "}
            <TypeHighlight>
              <AnchorToTab href="https://developer.mozilla.org/en-US/docs/Web/API/File">
                File
              </AnchorToTab>
            </TypeHighlight>{" "}
            object or from given props.
            <br />
            Also, the <TypeHighlight>onDelete</TypeHighlight> prop is used to
            remove the file selection.
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
            image preview will be shown in order to save memory.
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
          <Alert severity="info">
            Typically, <CodeHighlight>{"<Dropzone/>"}</CodeHighlight> or{" "}
            <CodeHighlight>{"<FileInputButton/>"}</CodeHighlight> components set
            this prop when validating the input from a given criteria. You can
            see the behaviour mentioned in the following demos:
            <ul>
              <li>
                <AnchorToTab href="/components/dropzone#validation">
                  Dropzone validation
                </AnchorToTab>
              </li>
              <li>
                <AnchorToTab href="/components/fileinputbutton#validation">
                  FileInputButton validation
                </AnchorToTab>
              </li>
            </ul>
          </Alert>
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
            displaying the error or success message. Finally, the{" "}
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

          <Alert severity="info">
            As you can see, you have full control of the FileMosaic upload
            props. You can take advantage of them to ake your own upload
            function and show the user the progress.
            <br /> On the other hand, you can also leverage the capability of{" "}
            <CodeHighlight>{"<Dropzone/>"}</CodeHighlight> and{" "}
            <CodeHighlight>{"<FileInputButton/>"}</CodeHighlight> components
            since they also manage the{" "}
            <TypeHighlight>{"uploadStatus"}</TypeHighlight>
            prop for you when upload is enabled. You can see the behaviour
            mentioned in the following demos:
            <ul>
              <li>
                <AnchorToTab href="/components/dropzone#uploading">
                  Dropzone upload
                </AnchorToTab>
              </li>
              <li>
                <AnchorToTab href="/components/fileinputbutton#uploading">
                  FileInputButton upload
                </AnchorToTab>
              </li>
            </ul>
          </Alert>
        </section>
        <section id="actions">
          <SubTitle content="Actions: info, delete, see, watch, download" />
          <DescParagraph>
            You can use the following actions.
            <ul>
              <li>
                FileMosaic with the <CodeHighlight>onDelete</CodeHighlight> prop
                will display a delete icon.
              </li>
              <li>
                FileMosaic with the <CodeHighlight>info</CodeHighlight> prop
                will display an "info" icon that will display an info layer.
              </li>
              <li>
                FileMosaic with the <CodeHighlight>onSee</CodeHighlight> prop
                will display the "see" button that can be used to retrieve an
                image <TypeHighlight>URI</TypeHighlight> obtained by reading a{" "}
                <TypeHighlight>File</TypeHighlight> object if given or just the{" "}
                <TypeHighlight>imageUrl</TypeHighlight> prop if given. In the
                first case, the file must be an image.
              </li>
              <li>
                FileMosaic with the <CodeHighlight>onWatch</CodeHighlight> prop
                will display the "play" icon that can be used to retrieve the
                video as a <TypeHighlight>File</TypeHighlight> object if given
                or just the <TypeHighlight>videoUrl</TypeHighlight> prop if
                given. The file must be an video.
              </li>
              <li>
                FileMosaic with the <CodeHighlight>downloadUrl</CodeHighlight>{" "}
                prop will display the "download" icon that can be used to start
                the download. If the <CodeHighlight>onDownload</CodeHighlight>{" "}
                prop is given, the "download" icon will also be visible, but it
                will be taken as the user will perform their own download.
              </li>
            </ul>
          </DescParagraph>

          <Paper
            variant="outlined"
            style={{
              padding: "25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "7px",
              flexWrap: "wrap",
              width: "100%",
              //padding: "25px 0",
              flexDirection: "row",
            }}
          >
            <DemoFileCardActions />
          </Paper>
          <CodeJSFileCardActions />
          <Alert severity="info">
            <AlertTitle>
              {" "}
              <strong>downloadUrl</strong> and <strong>onDownload</strong> props
            </AlertTitle>
            {/*  This is an info alert — <strong>check it out!</strong>
             */}
            When only <CodeHighlight>downloadUrl</CodeHighlight> is specifyed,
            FileMosaic will perform the download only for{" "}
            <AnchorToTab href="https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy">
              same-origin URLs
            </AnchorToTab>{" "}
            since it uses the{" "}
            <AnchorToTab href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a">
              anchor
            </AnchorToTab>{" "}
            tag under the hood.
            <br />
            If the resource is located in any other host, it will open a new tab
            and display the content.
            <br />
            For avoiding that behaviour you can do you own download
            implementation by overriding the download function by setting the{" "}
            <CodeHighlight>onDownload</CodeHighlight> prop.
            <br />
            You can check an example here:
            <ul>
              <li>
                <AnchorToTab href="/utilities-methods/file-downloader">
                  {"Download a File"}
                </AnchorToTab>
              </li>
            </ul>
          </Alert>
        </section>
        <section id="dark-mode">
          <SubTitle content="Dark mode" />
          <DescParagraph>
            The <CodeHighlight>FileMosaic</CodeHighlight> component supports
            dark mode by setting the prop{" "}
            <TypeHighlight>darkMode</TypeHighlight> to{" "}
            <TypeHighlight>true</TypeHighlight>.
          </DescParagraph>

          <Paper
            variant="outlined"
            style={{
              //padding: "25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <DemoFileMosaicDarkMode />
          </Paper>

          <CodeJSFileMosaicDarkMode />
        </section>

        <section id="smart-image-fit">
          <SubTitle content="Smart image fit" />
          <DescParagraph>
            <CodeHighlight>FileMosaic</CodeHighlight> with
            <TypeHighlight>smartImgFit</TypeHighlight> prop will display image
            according to its heigh and width. Image width height greater than
            its width has a "portrait" orientation. Otherwise it has a
            "landscape" orientation.
          </DescParagraph>

          <DemoContainerFileMosaic>
            <DemoFileMosaicSmartImgFit />
          </DemoContainerFileMosaic>

          <CodeJSFileMosaicSmartImgFit />
        </section>

        <section id="api">
          <SubTitle content="API" />
          <DescParagraph>
            See the documentation below for a complete reference to all of the
            props available to the components mentioned here.
          </DescParagraph>
          <ul>
            <li>
              <AnchorToTab href="/api/filemosaic">
                {"<FileMosaic/>"}
              </AnchorToTab>
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
    label: "Actions",
    referTo: "/components/filemosaic#actions",
  },
  {
    id: 5,
    label: "Dark mode",
    referTo: "/components/filemosaic#dark-mode",
  },
  {
    id: 6,
    label: "API",
    referTo: "/components/filemosaic#api",
  },
];
