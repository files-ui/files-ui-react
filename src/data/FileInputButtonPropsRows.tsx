import CodeHighlight from "../components/codeHighlight/CodeHighlight";
import TypeHighlight from "../components/typeHighlight/TypeHighlight";
import AnchorToTab from "../components/util-components/AnchorToTab";

export const FileInputButtonPropsRows=[
    {
        name: "value",
        type: <TypeHighlight np>{"ExtFile"}</TypeHighlight>,
        default: <TypeHighlight np>{"[]"}</TypeHighlight>,
        description: (
          <>
            Just like any other input component. The value of the input element,
            required for a controlled component.
          </>
        ),
      },
      {
        name: "onChange",
        type: <TypeHighlight np>func</TypeHighlight>,
        default: <TypeHighlight np></TypeHighlight>,
        description: (
          <>
            Probably one of the most important methods (callbacks). Returns as first
            parameter an array of `ExtFile` objects.
            This callback is fired when the delete
            icon is clicked. If set, the delete icon will be shown.
            <br />
            <strong>Signature:</strong>
            <br />
            <CodeHighlight>{"(files: ExtFile[]) => void"}</CodeHighlight>
          </>
        ),
      },
      // Validation stage
      {
        name: "accept",
        type: <TypeHighlight np>string</TypeHighlight>,
        default: <TypeHighlight np></TypeHighlight>,
        description: (
          <>
            A comma-separated list of one or more file types, or{" "}
            <AnchorToTab href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept#unique_file_type_specifiers">
              unique file type specifiers
            </AnchorToTab>
            , describing which file types to allow. The default implementation of
            accept checks the file's mime type or extension against this list. More
            information can be found{" "}
            <AnchorToTab href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept">
              here
            </AnchorToTab>
            .
          </>
        ),
      },
      {
        name: "maxFiles",
        type: <TypeHighlight np>number</TypeHighlight>,
        default: <TypeHighlight np></TypeHighlight>,
        description: <>The max number of files to be accepted.</>,
      },
      {
        name: "maxFileSize",
        type: <TypeHighlight np>number</TypeHighlight>,
        default: <TypeHighlight np></TypeHighlight>,
        description: <>The max file size allowed in bytes.</>,
      },
      {
        name: "validator",
        type: <TypeHighlight np>func</TypeHighlight>,
        default: <TypeHighlight np></TypeHighlight>,
        description: (
          <>
            Callback fired when the delete icon is clicked. If set, the delete icon
            will be shown.
            <br />
            <strong>Signature:</strong>
            <br />
            <CodeHighlight>
              {"(f: File) => "}{" "}
              <AnchorToTab href="/api/types#validatefileresponse">
                ValidateFileResponse
              </AnchorToTab>
            </CodeHighlight>
          </>
        ),
      },
      
      {
        name: "autoClean",
        type: <TypeHighlight np>boolean</TypeHighlight>,
        default: <TypeHighlight np></TypeHighlight>,
        description: (
          <>
            If true, the component will automatically remove non valid files when
            user drops files or selects them from file dialog. This flag will only
            work if validation is active.
          </>
        ),
      },
     
      ///////////////         UPLOAD STAGE        ///////////////
      {
        name: "uploadConfig",
        type: (
          <TypeHighlight np>
            <AnchorToTab href="/api/types#uploadconfig">
              UploadConfig
            </AnchorToTab>
          </TypeHighlight>
        ),
        default: <TypeHighlight np></TypeHighlight>,
        description: (
          <>
            The configuration needed for uploading the files. If not set or or
            uploadConfig.url is undefined the upload button will not be visible and
            uploadOnDrop prop flag will not work.
          </>
        ),
      },
      {
        name: "fakeUpload",
        type: <TypeHighlight np>boolean</TypeHighlight>,
        default: <TypeHighlight np></TypeHighlight>,
        description: (
          <>
            If set, the component will simulate the upload operation by randomly
            setting the upload status and message on each uploadable{" "}
            <TypeHighlight>ExtFile</TypeHighlight>. It will also set a fake
            progress. Will also ignore the uploadConfig prop and will show the
            upload button
          </>
        ),
      },
      {
        name: "onUploadStart",
        type: <TypeHighlight np>func</TypeHighlight>,
        default: <TypeHighlight np></TypeHighlight>,
        description: (
          <>
            Callback fired when the upload process starts.
            <br />
            <strong>Signature:</strong>
            <br />
            <CodeHighlight>{"(uploadAbleFiles: ExtFile[]) => void"}</CodeHighlight>
            <ul>
              <li>uploadAbleFiles: The list of files to be uploaded.</li>
            </ul>
          </>
        ),
      },
      {
        name: "onUploadFinish",
        type: <TypeHighlight np>func</TypeHighlight>,
        default: <TypeHighlight np></TypeHighlight>,
        description: (
          <>
            Callback fired when the upload process ends.
            <br />
            <strong>Signature:</strong>
            <br />
            <CodeHighlight>{"(uploadedFiles: ExtFile[]) => void"}</CodeHighlight>
            <ul>
              <li>uploadAbleFiles: The list of uploaded files.</li>
            </ul>
          </>
        ),
      },
      ///////////////          STYLING          ///////////
    
     
      {
        name: "color",
        type: <TypeHighlight np>string</TypeHighlight>,
        default: <TypeHighlight np>{'"#646c7f"'}</TypeHighlight>,
        description: <>The main color for background, hover and borders.</>,
      },
      {
        name: "style",
        type: <TypeHighlight np>React.CSSProperties</TypeHighlight>,
        default: <TypeHighlight np></TypeHighlight>,
        description: <>The in-line style object.</>,
      },
      {
        name: "textColor",
        type: <TypeHighlight np>string</TypeHighlight>,
        default: <TypeHighlight np>{'"transparent'}</TypeHighlight>,
        description: <>The color of the text.</>,
      },
      {
        name: "className",
        type: <TypeHighlight np>string</TypeHighlight>,
        default: <TypeHighlight np></TypeHighlight>,
        description: (
          <>
            The classname to override the css styles in .css or .sass file instead
            of using in-line styles.
          </>
        ),
      },
    
      {
        name: "label",
        type: <TypeHighlight np>string</TypeHighlight>,
        default: <TypeHighlight np></TypeHighlight>,
        description: <>The text label for the button.</>,
      },
      {
        name: "localization",
        type: (
          <>
            <TypeHighlight np>{'"EN-en"'}</TypeHighlight>
            {" | "}
            <TypeHighlight np>{'"ES-es"'}</TypeHighlight>
            {" | "}
            <TypeHighlight np>{'"FR-fr"'}</TypeHighlight>
            {" | "}
            <TypeHighlight np>{'"IT-it"'}</TypeHighlight>
            {" | "}
            <TypeHighlight np>{'"PT-pt"'}</TypeHighlight>
            {" | "}
            <TypeHighlight np>{'"RU-ru"'}</TypeHighlight>
            {" | "}
            <TypeHighlight np>{'"ZH-cn"'}</TypeHighlight>
            {" | "}
            <TypeHighlight np>{'"ZH-hk"'}</TypeHighlight>
          </>
        ),
        default: <TypeHighlight np>{'"EN-en"'}</TypeHighlight>,
        description: <>The language in which text labels are shown.</>,
      },
      {
        name: "disableRipple",
        type: <TypeHighlight np>boolean</TypeHighlight>,
        default: <TypeHighlight np></TypeHighlight>,
        description: (
          <>
            If true, will not show a ripple effect everytime the user
            clicks the components for selecting files.
          </>
        ),
      },
      
      //ACTION BUTTONS
      {
        name: "actionButtons",
        type: (
          <TypeHighlight np>
            <AnchorToTab href="/api/types#actionbuttons">
              ActionButtons
            </AnchorToTab>
          </TypeHighlight>
        ),
        default: <TypeHighlight np></TypeHighlight>,
        description: (
          <>
            If set, buttons will be added before or after of the component.
            This buttons triggresthe common opertions of the component such as
            clean, upload, abort and delete all.
          </>
        ),
      },
      
      {
        name: "disabled",
        type: <TypeHighlight np>boolean</TypeHighlight>,
        default: <TypeHighlight np>false</TypeHighlight>,
        description: <>If true, the component is disabled.</>,
      },
      {
        name: "behaviour",
        type: (
          <>
            <TypeHighlight np>{'"add"'}</TypeHighlight>
            {" | "}
            <TypeHighlight np>{'"replace"'}</TypeHighlight>
          </>
        ),
        default: <TypeHighlight np>{'"add"'}</TypeHighlight>,
        description: <>The behaviour when new files are selected or dropped</>,
      },
      {
        name: "children",
        type: <TypeHighlight np>React.ReactNode</TypeHighlight>,
        default: <TypeHighlight np></TypeHighlight>,
        description: (
          <>
            The content of the component.
          </>
        ),
      },
]