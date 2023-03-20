import CodeHighlight from "../components/codeHighlight/CodeHighlight";
import TypeHighlight from "../components/typeHighlight/TypeHighlight";
import AnchorToTab from "../components/util-components/AnchorToTab";
export const ExtFileAPIRows = [
  {
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
    name: "uploadStatus",
    type: (
      <TypeHighlight np>
        <AnchorToTab href="/types#uploadstatus">
          {"UPLOADSTATUS"}
        </AnchorToTab>
      </TypeHighlight>
    ),
    default: <TypeHighlight np></TypeHighlight>,
    description: <>The current upload status. (e.g. "uploading").</>,
  },
  {
    name: "uploadMessage",
    type: <TypeHighlight np>{"string"}</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: <>A message that shows the result of the upload process.</>,
  },
  {
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
    name: "progress",
    type: <TypeHighlight np>number</TypeHighlight>,
    default: <TypeHighlight np>undefined</TypeHighlight>,
    description: (
      <>
        The current percentage of upload progress. This value will have a higher
        priority over the upload progress value calculated inside the component.
      </>
    ),
  },
  {
    name: "extraUploadData",
    type: <TypeHighlight np>{"Record<string, any>"}</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>
        The additional data that will be sent to the server when files are
        uploaded individually
      </>
    ),
  },
  {
    name: "extraData",
    type: <TypeHighlight np>Object</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: <>Any kind of extra data that could be needed.</>,
  },
  {
    name: "serverResponse",
    type: (
      <TypeHighlight np>
        <AnchorToTab href="/api/dropzone#serverresponse">
          ServerResponse
        </AnchorToTab>
      </TypeHighlight>
    ),
    default: <TypeHighlight np></TypeHighlight>,
    description: <>The upload response from server.</>,
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
];
