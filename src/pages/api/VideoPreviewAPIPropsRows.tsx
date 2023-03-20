import TypeHighlight from "../../components/typeHighlight/TypeHighlight";

export const VideoPreviewAPIPropsRows = [
  {
    name: "src",
    type: (
      <>
        <TypeHighlight np>{"string"}</TypeHighlight>
        {" | "}
        <TypeHighlight np>{"File"}</TypeHighlight>
      </>
    ),
    default: <TypeHighlight np></TypeHighlight>,
    description: <>The video source in string format or File object.</>,
  },
  {
    name: "style",
    type: <TypeHighlight np>React.CSSProperties</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: <>The in-line style object.</>,
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
];
