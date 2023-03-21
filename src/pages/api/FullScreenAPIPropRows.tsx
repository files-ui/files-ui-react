import CodeHighlight from "../../components/codeHighlight/CodeHighlight";
import TypeHighlight from "../../components/typeHighlight/TypeHighlight";

export const FullScreenAPIPropRows = [
  {
    name: "open",
    type: <TypeHighlight np>boolean</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: <>If true, the component is shown.</>,
  },
  {
    name: "onClose",
    type: <TypeHighlight np>func</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: <>Callback fired when the component requests to be closed.</>,
  },
  {
    name: "children",
    type: <TypeHighlight np>React.ReactNode</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>
        The content of the component. Tipically it is the
        <CodeHighlight>{"<ImagePreview/>"}</CodeHighlight> or the{" "}
        <CodeHighlight>{"<VideoPreview/>"}</CodeHighlight> components.
      </>
    ),
  },
];
