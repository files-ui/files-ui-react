import TypeHighlight from "../components/typeHighlight/TypeHighlight";
import AnchorToTab from "../components/util-components/AnchorToTab";

export const ActionButtonsAPIRows = [
  {
    name: "position",
    type: (
      <>
        <TypeHighlight np>{'"before"'}</TypeHighlight>
        {" | "}
        <TypeHighlight np>{'"after"'}</TypeHighlight>
      </>
    ),
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>The position of the action buttons. Before or after the component.</>
    ),
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
    name: "uploadButton",
    type: (
      <TypeHighlight np>
        <AnchorToTab href="/types#actionbuttonitem">{"ActionButtonItem"}</AnchorToTab>
      </TypeHighlight>
    ),
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>
        If set, the upload button will be shown. Specific props applied to the upload button.
        Type definition can be found{" "}
        <AnchorToTab href="/types#actionbuttonitem">{"here"}</AnchorToTab>.
      </>
    ),
  },
  {
    name: "abortButton",
    type: (
      <TypeHighlight np>
        <AnchorToTab href="/types#actionbuttonitem">{"ActionButtonItem"}</AnchorToTab>
      </TypeHighlight>
    ),
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>
        If set, the abort button will be shown. Specific props applied to the abort button.
        Type definition can be found{" "}
        <AnchorToTab href="/types#actionbuttonitem">{"here"}</AnchorToTab>.
      </>
    ),
  },
  {
    name: "deleteButton",
    type: (
      <TypeHighlight np>
        <AnchorToTab href="/types#actionbuttonitem">{"ActionButtonItem"}</AnchorToTab>
      </TypeHighlight>
    ),
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>
        If set, the delete button will be shown. Specific props applied to the delete button.
        Type definition can be found{" "}
        <AnchorToTab href="/types#actionbuttonitem">{"here"}</AnchorToTab>.
      </>
    ),
  },
  {
    name: "cleanButton",
    type: (
      <TypeHighlight np>
        <AnchorToTab href="/types#actionbuttonitem">{"ActionButtonItem"}</AnchorToTab>
      </TypeHighlight>
    ),
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>
        If set, the clean button will be shown. Specific props applied to the clean button.
        Type definition can be found{" "}
        <AnchorToTab href="/types#actionbuttonitem">{"here"}</AnchorToTab>.
      </>
    ),
  },
];
