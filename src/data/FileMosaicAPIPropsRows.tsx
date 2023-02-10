import CodeHighlight from "../components/codeHighlight/CodeHighlight";
import TypeHighlight from "../components/typeHighlight/TypeHighlight";
export const FileMosaicAPIPropsRows = [
  {
    id: 0,
    name: "alwaysActive",
    type: <TypeHighlight np>boolean</TypeHighlight>,
    default: <TypeHighlight np>false</TypeHighlight>,
    description: (
      <>
        Flag that makes all buttons visible. If{" "}
        <TypeHighlight np>false</TypeHighlight>, the buttons and info will be
        visible only when user triggers the hover event.
      </>
    ),
  },
  /*  {
    id: 1,
    name: "elevation",
    type: (
      <TypeHighlight np>
        <span>"1" | "2" | "3" | "4" | 1 | 2 | 3 | 4 | false</span>
      </TypeHighlight>
    ),
    default: <TypeHighlight np>undefined</TypeHighlight>,
    description: <>Shadow depth for the FileItem container.</>,
  }, */
  {
    id: 2,
    name: "errors",
    type: <TypeHighlight np>{"string[]"}</TypeHighlight>,
    default: <TypeHighlight np>undefined</TypeHighlight>,
    description: (
      <>
        The list of errors according to the validation criteria or the result of
        the given custom validation function.
      </>
    ),
  },
  {
    id: 3,
    name: "file",
    type: <TypeHighlight np>{"File"}</TypeHighlight>,
    default: <TypeHighlight np>undefined</TypeHighlight>,
    description: <>The file object obtained from client drop or selection</>,
  },
  {
    name: "name",
    type: <TypeHighlight np>{"string"}</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: <>The name of the file</>,
  },
  {
    name: "type",
    type: <TypeHighlight np>{"string"}</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: <>The file mime type.</>,
  },
  {
    name: "size",
    type: <TypeHighlight np>{"number"}</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: <>The size of the file in bytes.</>,
  },
  {
    name: "valid",
    type: <TypeHighlight np>{"boolean"}</TypeHighlight>,
    default: <TypeHighlight np>undefined</TypeHighlight>,
    description: (
      <>
        If present, it will show a valid or rejected message ("valid",
        "denied"). By default valid is <CodeHighlight>undefined</CodeHighlight>.
      </>
    ),
  },
  /*   {
    id: 4,
    name: "hd",
    type: <TypeHighlight np>{"boolean"}</TypeHighlight>,
    default: <TypeHighlight np>undefined</TypeHighlight>,
    description: <>The actual File object instance</>,
  }, */
  {
    id: 5,
    name: "id",
    type: (
      <>
        {" "}
        <TypeHighlight np>{"string"}</TypeHighlight> {" | "}
        <TypeHighlight np>{"number"}</TypeHighlight>
      </>
    ),
    default: <TypeHighlight np>undefined</TypeHighlight>,
    description: <>The identifier of the file</>,
  },
  {
    id: 6,
    name: "info",
    type: <TypeHighlight np>{"boolean"}</TypeHighlight>,
    default: <TypeHighlight np>false</TypeHighlight>,
    description: <>If true, the info button will be visible</>,
  },
  {
    id: 7,
    name: "imageUrl",
    type: <TypeHighlight np>{"string"}</TypeHighlight>,
    default: <TypeHighlight np>undefined</TypeHighlight>,
    description: (
      <>
        A string representation or web url of the image that will be set to the
        "src" prop of an <CodeHighlight>{"<img/>"}</CodeHighlight> tag. If
        given, FileMosaic component will use this image source instead of
        reading the image file.
      </>
    ),
  },
  {
    id: 7,
    name: "backgroundBlurImage",
    type: <TypeHighlight np>{"boolean"}</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: <>If true, a background blur image will be shown</>,
  },
  {
    id: 7,
    name: "darkMode",
    type: <TypeHighlight np>{"boolean"}</TypeHighlight>,
    default: <TypeHighlight np>false</TypeHighlight>,
    description: <>If true, dark mode colors are used in the component.</>,
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
    description: <>If true, dark mode colors are used in the component.</>,
  },
  {
    name: "progress",
    type: <TypeHighlight np>number</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>
        The current percentage of upload progress. This value will have a higher
        priority over the upload progress value calculated inside the component.
      </>
    ),
  },
  {
    name: "xhr",
    type: <TypeHighlight np>XMLHttpRequest</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>
        A reference to the XHR object that allows the upload, progress and abort
        events
      </>
    ),
  },
  {
    name: "onSee",
    type: <TypeHighlight np>func</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>
        A function that return a file object when "see" button is pressed or
        clicked.
        <br />
        <strong>Signature:</strong>
        <br />
        <CodeHighlight>
          {" (imageSource: string | undefined) => void"}
        </CodeHighlight>
      </>
    ),
  },
  {
    name: "onWatch",
    type: <TypeHighlight np>func</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>
        Event that is triggered when `delete` button is clicked or pressed. If
        present, `delete` button will be visible.
        <br />
        <strong>Signature:</strong>
        <br />
        <CodeHighlight>
          {"(videoSource: File | undefined) => void"}
        </CodeHighlight>
      </>
    ),
  },
  {
    name: "onDelete",
    type: <TypeHighlight np>func</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>
        Event that is triggered when `delete` button is clicked or pressed. If
        present, `delete` button will be visible.
        <br />
        <strong>Signature:</strong>
        <br />
        <CodeHighlight>
          {"(fileId: number | string | undefined) => void"}
        </CodeHighlight>
      </>
    ),
  },
  {
    name: "onAbort",
    type: <TypeHighlight np>func</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>
        Event that is triggered when `abort` button is clicked or pressed during
        `uploading` event. If present, `abort` button in `uploading` phase will
        be visible.
        <br />
        <strong>Signature:</strong>
        <br />
        <CodeHighlight>
          {"(fileId: number | string | undefined) => void"}
        </CodeHighlight>
      </>
    ),
  },
  {
    name: "onCancel",
    type: <TypeHighlight np>func</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>
        Event that is triggered when `cancel` button is clicked or pressed
        during `preparing` event. If present, `cancel` button in `preparing`
        phase will be visible.
        <br />
        <strong>Signature:</strong>
        <br />
        <CodeHighlight>
          {"(fileId: number | string | undefined) => void"}
        </CodeHighlight>
      </>
    ),
  },
  {
    name: "onDownload",
    type: <TypeHighlight np>func</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>
        Event that is triggered when `download` button is clicked or pressed. If
        present, `download` button will be visible.
        <br />
        <strong>Signature:</strong>
        <br />
        <CodeHighlight>
          {
            "(fileId: number | string | undefined, downloadUrl?: string) => void"
          }
        </CodeHighlight>
      </>
    ),
  },
  {
    name: "onClick",
    type: <TypeHighlight np>func</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>
        Event that is triggered when user clicks the component
        <br />
        <strong>Signature:</strong>
        <br />
        <CodeHighlight>{"(evt: React.MouseEvent) => void"}</CodeHighlight>
      </>
    ),
  },
  {
    name: "onDoubleClick",
    type: <TypeHighlight np>func</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>
        Event that is triggered when user double clicks the component
        <br />
        <strong>Signature:</strong>
        <br />
        <CodeHighlight>{"(evt: React.MouseEvent) => void"}</CodeHighlight>
      </>
    ),
  },
  {
    name: "onRightClick",
    type: <TypeHighlight np>func</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>
        Event that is triggered when user right clicks the component
        <br />
        <strong>Signature:</strong>
        <br />
        <CodeHighlight>{" (evt: React.MouseEvent) => void"}</CodeHighlight>
      </>
    ),
  },
];
