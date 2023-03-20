import TypeHighlight from "../components/typeHighlight/TypeHighlight";

export const ActionButtonsAPIRows =[
    {
        name: "position",
        type: <>
        <TypeHighlight np>{'"before"'}</TypeHighlight>{" | "}
        <TypeHighlight np>{'"after"'}</TypeHighlight>
        </>,
        default: <TypeHighlight np></TypeHighlight>,
        description: (
          <>
            The position of the action buttons. Before or after the component.
          </>
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
        name: "uploadingMessage",
        type: <TypeHighlight np>{"string"}</TypeHighlight>,
        default: <TypeHighlight np></TypeHighlight>,
        description: (
          <>
            A message to show in the footer when the uploading process takes place.
          </>
        ),
      },
]