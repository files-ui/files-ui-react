import TypeHighlight from "../components/typeHighlight/TypeHighlight";

export const ActionButtonItemAPIRows = [
  {
    name: "children",
    type: <TypeHighlight np>React.ReactNode</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: <>The content of the button.</>,
  },
  {
    name: "label",
    type: <TypeHighlight np>string</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: <>The label of the button.</>,
  },

  {
    name: "style",
    type: <TypeHighlight np>React.CSSProperties</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: <>The in-line style object applied to the main container.</>,
  },
  {
    name: "className",
    type: <TypeHighlight np>string</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>
        The classname to override the css styles in .css or .sass file instead
        of using in-line styles. Classname is applied to the main container.
      </>
    ),
  },
  {
    name: "resetStyles",
    type: <TypeHighlight np>boolean</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>
        If true, the given class name and style properties will replace the
        default ones instead of overriding them.
      </>
    ),
  },
  {
    name: "onClick",
    type: <TypeHighlight np>func</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>
        Callback fired when the button is clicked. If given, will replace the
        default behaviour.{" "}
      </>
    ),
  },
  {
    name: "disabled",
    type: <TypeHighlight np>boolean</TypeHighlight>,
    default: <TypeHighlight np>false</TypeHighlight>,
    description: <>If true, the component is disabled.</>,
  },
];
