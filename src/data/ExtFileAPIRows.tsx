import CodeHighlight from "../components/codeHighlight/CodeHighlight";
import TypeHighlight from "../components/typeHighlight/TypeHighlight";
import AnchorToTab from "../components/util-components/AnchorToTab";
export const ExtFileAPIRows = (darkMode = false) => [
  {
    name: "id",
    type: (
      <>
        {" "}
        <TypeHighlight darkMode={darkMode} np>
          {"string"}
        </TypeHighlight>{" "}
        {" | "}
        <TypeHighlight darkMode={darkMode} np>{"number"}</TypeHighlight>
      </>
    ),
    default: <TypeHighlight darkMode={darkMode} np></TypeHighlight>,
    description: <>The identifier of the file</>,
  },
  {
    name: "file",
    type: <TypeHighlight darkMode={darkMode} np>{"File"}</TypeHighlight>,
    default: <TypeHighlight darkMode={darkMode} np></TypeHighlight>,
    description: <>The file object obtained from client drop or selection</>,
  },
  {
    name: "name",
    type: <TypeHighlight darkMode={darkMode} np>{"string"}</TypeHighlight>,
    default: <TypeHighlight darkMode={darkMode} np></TypeHighlight>,
    description: <>The name of the file</>,
  },
  {
    name: "type",
    type: <TypeHighlight darkMode={darkMode} np>{"string"}</TypeHighlight>,
    default: <TypeHighlight darkMode={darkMode} np></TypeHighlight>,
    description: <>The file mime type.</>,
  },

  {
    name: "size",
    type: <TypeHighlight darkMode={darkMode} np>{"number"}</TypeHighlight>,
    default: <TypeHighlight darkMode={darkMode} np></TypeHighlight>,
    description: <>The size of the file in bytes.</>,
  },
  {
    name: "valid",
    type: <TypeHighlight darkMode={darkMode} np>{"boolean"}</TypeHighlight>,
    default: <TypeHighlight darkMode={darkMode} np></TypeHighlight>,
    description: (
      <>
        If present, it will show a valid or rejected message ("valid",
        "denied"). By default valid is <CodeHighlight darkMode={darkMode}>undefined</CodeHighlight>.
      </>
    ),
  },
  {
    name: "errors",
    type: <TypeHighlight darkMode={darkMode} np>{"string[]"}</TypeHighlight>,
    default: <TypeHighlight darkMode={darkMode} np></TypeHighlight>,
    description: (
      <>
        The list of errors according to the validation criteria or the result of
        the given custom validation function.
      </>
    ),
  },
  {
    name: "uploadStatus",
    type: (
      <TypeHighlight darkMode={darkMode} np>
        <AnchorToTab href="/types#uploadstatus">{"UPLOADSTATUS"}</AnchorToTab>
      </TypeHighlight>
    ),
    default: <TypeHighlight darkMode={darkMode} np></TypeHighlight>,
    description: <>The current upload status. (e.g. "uploading").</>,
  },
  {
    name: "uploadMessage",
    type: <TypeHighlight darkMode={darkMode} np>{"string"}</TypeHighlight>,
    default: <TypeHighlight darkMode={darkMode} np></TypeHighlight>,
    description: <>A message that shows the result of the upload process.</>,
  },
  {
    name: "imageUrl",
    type: <TypeHighlight darkMode={darkMode} np>{"string"}</TypeHighlight>,
    default: <TypeHighlight darkMode={darkMode} np></TypeHighlight>,
    description: (
      <>
        A string representation or web url of the image that will be set to the
        "src" prop of an <CodeHighlight darkMode={darkMode}>{"<img/>"}</CodeHighlight> tag. If
        given, the component will use this image source instead of reading the
        image file.
      </>
    ),
  },
  {
    name: "downloadUrl",
    type: <TypeHighlight darkMode={darkMode} np>string</TypeHighlight>,
    default: <TypeHighlight darkMode={darkMode} np></TypeHighlight>,
    description: (
      <>
        The url to be used to perform a GET request in order to download the
        file. If defined, the download icon will be shown.
      </>
    ),
  },
  {
    name: "progress",
    type: <TypeHighlight darkMode={darkMode} np>number</TypeHighlight>,
    default: <TypeHighlight darkMode={darkMode} np>undefined</TypeHighlight>,
    description: (
      <>
        The current percentage of upload progress. This value will have a higher
        priority over the upload progress value calculated inside the component.
      </>
    ),
  },
  {
    name: "extraUploadData",
    type: <TypeHighlight darkMode={darkMode} np>{"Record<string, any>"}</TypeHighlight>,
    default: <TypeHighlight darkMode={darkMode} np></TypeHighlight>,
    description: (
      <>
        The additional data that will be sent to the server when files are
        uploaded individually
      </>
    ),
  },
  {
    name: "extraData",
    type: <TypeHighlight darkMode={darkMode} np>Object</TypeHighlight>,
    default: <TypeHighlight darkMode={darkMode} np></TypeHighlight>,
    description: <>Any kind of extra data that could be needed.</>,
  },
  {
    name: "serverResponse",
    type: (
      <TypeHighlight darkMode={darkMode} np>
        <AnchorToTab href="/api/dropzone#serverresponse">
          ServerResponse
        </AnchorToTab>
      </TypeHighlight>
    ),
    default: <TypeHighlight darkMode={darkMode} np></TypeHighlight>,
    description: <>The upload response from server.</>,
  },
  {
    name: "xhr",
    type: <TypeHighlight darkMode={darkMode} np>XMLHttpRequest</TypeHighlight>,
    default: <TypeHighlight darkMode={darkMode} np></TypeHighlight>,
    description: (
      <>
        A reference to the XHR object that allows the upload, progress and abort
        events.
      </>
    ),
  },
];
