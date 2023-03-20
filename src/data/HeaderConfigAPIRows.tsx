import TypeHighlight from "../components/typeHighlight/TypeHighlight";

export const HeaderConfigAPIRows = [
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
    name: "deleteFiles",
    type: <TypeHighlight np>boolean</TypeHighlight>,
    default: <TypeHighlight np>true</TypeHighlight>,
    description: <>If true, the delete icon will be shown.</>,
  },
  {
    name: "cleanFiles",
    type: <TypeHighlight np>boolean</TypeHighlight>,
    default: <TypeHighlight np>true</TypeHighlight>,
    description: <>If true, the clean icon will be shown.</>,
  },
  {
    name: "uploadFiles",
    type: <TypeHighlight np>boolean</TypeHighlight>,
    default: <TypeHighlight np>true</TypeHighlight>,
    description: <>If true, the upload icon will be shown.</>,
  },
  {
    name: "uploadingIcon",
    type: <TypeHighlight np>boolean</TypeHighlight>,
    default: <TypeHighlight np>true</TypeHighlight>,
    description: (
      <>
        If true, the upload in progress icon will be shown during the upload
        process.
      </>
    ),
  },
  {
    name: "maxFileSize",
    type: <TypeHighlight np>boolean</TypeHighlight>,
    default: <TypeHighlight np>true</TypeHighlight>,
    description: (
      <>
        If true, the upload in progress icon will be shown during the upload
        process.
      </>
    ),
  },
  {
    name: "validFilesCount",
    type: <TypeHighlight np>boolean</TypeHighlight>,
    default: <TypeHighlight np>true</TypeHighlight>,
    description: (
      <>
        If true, the current count of alid files will be shown.
      </>
    ),
  },
  {
    name: "customHeader",
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
