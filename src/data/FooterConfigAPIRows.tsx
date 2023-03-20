import TypeHighlight from "../components/typeHighlight/TypeHighlight";

export const FooterConfigAPIRows = [
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
    name: "allowedTypesLabel",
    type: <TypeHighlight np>boolean</TypeHighlight>,
    default: <TypeHighlight np>true</TypeHighlight>,
    description: (
      <>
        If false, the label that indicates the allowed files types will not be
        shown.
      </>
    ),
  },
  {
    name: "uploadProgressMessage",
    type: <TypeHighlight np>boolean</TypeHighlight>,
    default: <TypeHighlight np>true</TypeHighlight>,
    description: (
      <>
        If false, the label that indicates the current upload progress will not
        be shown.
      </>
    ),
  },
  {
    name: "uploadResultMessage",
    type: <TypeHighlight np>boolean</TypeHighlight>,
    default: <TypeHighlight np>true</TypeHighlight>,
    description: (
      <>
        If false, the label that indicates the final result of the upload
        progress will not be shown.
      </>
    ),
  },
  {
    name: "noMissingFilesLabel",
    type: <TypeHighlight np>boolean</TypeHighlight>,
    default: <TypeHighlight np>true</TypeHighlight>,
    description: (
      <>
        If false, the label that indicates that there are not files missing to
        upload will not be shown.
      </>
    ),
  },
  {
    name: "customMessage",
    type: <TypeHighlight np>JSX.Element</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: <>A custom message to display in the footer.</>,
  },
  {
    name: "customFooter",
    type: <TypeHighlight np>JSX.Element</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>
        A custom header to replace the default one. If given, the rest of the
        props are ignored
      </>
    ),
  },
];
