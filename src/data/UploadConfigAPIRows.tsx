import TypeHighlight from "../components/typeHighlight/TypeHighlight";

export const UploadConfigAPIRows = [
  {
    name: "url",
    type: <TypeHighlight np>{"string"}</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>
        The url endpoint to upload the file. e.g.
        "https://www.myasomwbackend/uploads/file".
      </>
    ),
  },
  {
    name: "method",
    type: (
      <>
        <TypeHighlight np>{'"POST"'}</TypeHighlight>
        {" | "}
        <TypeHighlight np>{'"PUT"'}</TypeHighlight>
        {" | "}
        <TypeHighlight np>{'"PATCH"'}</TypeHighlight>
      </>
    ),
    default: <TypeHighlight np>{'"POST"'}</TypeHighlight>,
    description: <>Request headers for http request.</>,
  },
  {
    name: "uploadLabel",
    type: <TypeHighlight np>{"string"}</TypeHighlight>,
    default: <TypeHighlight np>{'"file"'}</TypeHighlight>,
    description: (
      <>
        The label to use in the request. On the server this must be the label to
        get the file.
      </>
    ),
  },
  {
    name: "cleanOnUpload",
    type: <TypeHighlight np>{"boolean"}</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>
        Flag for indicating whther to remove the non-valid files before starting
        the upload process. This flag is valid only if validation is enable.
      </>
    ),
  },
  {
    name: "autoUpload",
    type: <TypeHighlight np>{"boolean"}</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>
        If true, onDrop event or file selection not only will make Dropzone to
        return the list of files, but also it will start the upload stage for
        the files if at least url was set By default is false
      </>
    ),
  },
  {
    name: "preparingTime",
    type: <TypeHighlight np>{"number"}</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>
        The time that will last the "preparing" stage By default is 1500
        miliseconds = 1.5 seconds.
      </>
    ),
  },
  {
    name: "uploadingMessage",
    type: <TypeHighlight np>{"string"}</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>
        A message to show in the footer when the uploading process takes place.
      </>
    ),
  },
];
