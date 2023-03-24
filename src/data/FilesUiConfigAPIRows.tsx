import TypeHighlight from "../components/typeHighlight/TypeHighlight";

export const FilesUiConfigAPIRows = [
  {
    name: "success",
    type: <TypeHighlight np>boolean</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: <>If true, it means that the request was successful.</>,
  },
  {
    name: "message",
    type: <TypeHighlight np>string</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: <>A message that describes the result of the request.</>,
  },
  {
    name: "payload",
    type: <TypeHighlight np>Object</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: <>The response of the server.</>,
  },
];
