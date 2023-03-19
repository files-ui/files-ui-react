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
  /* {
    id: 1,
    name: "elevation",
    type: (
      <>
        <TypeHighlight np>false</TypeHighlight>
        {" | "}
        <TypeHighlight np>0</TypeHighlight>
        {" | "}
        <TypeHighlight np>1</TypeHighlight>
        {" | "}
        <TypeHighlight np>2</TypeHighlight>
        {" | "}
        <TypeHighlight np>3</TypeHighlight>
        {" | "}
        <TypeHighlight np>4</TypeHighlight>
        {" | "}
        <TypeHighlight np>5</TypeHighlight>
        {" | ..."}
        <TypeHighlight np>24</TypeHighlight>
        {" | "}
        <TypeHighlight np>{"'0'"}</TypeHighlight>
        {" | "}
        <TypeHighlight np>{"'1'"}</TypeHighlight>
        {" | "}
        <TypeHighlight np>{"'2'"}</TypeHighlight>
        {" | "}
        <TypeHighlight np>{"'3'"}</TypeHighlight>
        {" | "}
        <TypeHighlight np>{"'4'"}</TypeHighlight>
        {" | "}
        <TypeHighlight np>{"'5'"}</TypeHighlight>
        {" | "}
        {"..."}
        <TypeHighlight np>{"'24'"}</TypeHighlight>
      </>
    ),
    default: <TypeHighlight np>4</TypeHighlight>,
    description: (
      <>
        Shadow depth for the FileItem container. It accepts values between 0 and
        24 inclusive.
      </>
    ),
  }, */
  {
    id: 2,
    name: "errors",
    type: <TypeHighlight np>{"string[]"}</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>
        The list of errors according to the validation criteria or the result of
        the given custom validation function.
      </>
    ),
  },
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
    default: <TypeHighlight np></TypeHighlight>,
    description: <>The identifier of the file</>,
  },
  {
    id: 3,
    name: "file",
    type: <TypeHighlight np>{"File"}</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
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
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>
        If present, it will show a valid or rejected message ("valid",
        "denied"). By default valid is <CodeHighlight>undefined</CodeHighlight>.
      </>
    ),
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
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>
        A string representation or web url of the image that will be set to the
        "src" prop of an <CodeHighlight>{"<img/>"}</CodeHighlight> tag. If
        given, the component will use this image source instead of reading the
        image file.
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
    description: <>The language in which text labels are shown.</>,
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
        events.
      </>
    ),
  },
  {
    name: "onSee",
    type: <TypeHighlight np>func</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>
        Callback fired when the see icon is clicked. If set, the see icon will
        be shown.
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
        Callback fired when the play icon is clicked. If set, the play icon will
        be shown.
        <br />
        <strong>Signature:</strong>
        <br />
        <CodeHighlight>
          {"(videoSource: File | string | undefined) => void"}
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
        Callback fired when the delete icon is clicked. If set, the delete icon
        will be shown.
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
        Callback fired when the abort icon is clicked. If set, the abort icon
        will be shown during the upload stage.
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
        Callback fired when the cancel icon is clicked. If set, the cancel icon
        will be shown only before the upload stage has started during the
        preparing phase.
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
        Callback fired when the download icon is clicked. If set, the download
        icon will be shown.
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
        Callback fired when the component is clicked if set.
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
        Callback fired when the component is double clicked if set.
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
        Callback fired when the component is right clicked if set.
        <br />
        <strong>Signature:</strong>
        <br />
        <CodeHighlight>{" (evt: React.MouseEvent) => void"}</CodeHighlight>
      </>
    ),
  },
  {
    name: "resultOnTooltip",
    type: <TypeHighlight np>boolean</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>
        If present a tooltip that contains the upload message will be diplayed
        on hover.
      </>
    ),
  },
  {
    name: "downloadUrl",
    type: <TypeHighlight np>string</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>
        The url to be used to perform a GET request in order to download the
        file. If defined, the download icon will be shown.
      </>
    ),
  },
  {
    name: "smartImgFit",
    type: (
      <>
        <TypeHighlight np>false</TypeHighlight>
        {" | "}
        <TypeHighlight np>{'"orientation"'}</TypeHighlight>
        {" | "}
        <TypeHighlight>{'"center"'}</TypeHighlight>
      </>
    ),
    default: <TypeHighlight np>{'"orientation"'}</TypeHighlight>,
    description: (
      <>
        If false, image width will be set to 100%.
        <br />
        If present, image will be analized and displayed according to its heigh
        and width. Image with height greater than its width has a "portrait"
        orientation. Otherwise it has a "landscape" orientation. .
        <ul>
          <li>
            If value is "orientation", image will be displayed complete by
            giving 100% to width prop if the orientation is "landscape". When
            orientation is "portrait", height prop will be set to 100%. Some
            images will show an empty space.
          </li>
          <li>
            If value is "center", image will be centered and will not be
            displayed complete. This the empty space is avoided. This is achived
            by giving 100% to width prop if the orientation is "portrait". When
            orientation is "landscape", height prop will be set to 100%.
          </li>
        </ul>
      </>
    ),
  },
];
