import TypeHighlight from "../../components/typeHighlight/TypeHighlight";

export const ImagePreviewAPIPropsRows = [
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
    description: (
      <>
        Image source in string format (URL) or File Object (Will be read as
        URL).
      </>
    ),
  },
  {
    name: "width",
    type: <TypeHighlight np>string</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: <>The width of the image.</>,
  },
  {
    name: "height",
    type: <TypeHighlight np>string</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: <>The height of the image.</>,
  },
  {
    name: "alt",
    type: <TypeHighlight np>string</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>Alternative label when an error occurs on loading the image</>
    ),
  },
  {
    name: "onError",
    type: <TypeHighlight np>func</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>Callback fired when an error occured on loading the image.</>
    ),
  },
  {
    name: "smartImgFit",
    type: (
      <>
        <TypeHighlight np>false</TypeHighlight>
        {" | "}
        <TypeHighlight np>{'"orientation"'}</TypeHighlight>
        {" | "}
        <TypeHighlight>{'"center"'}</TypeHighlight>
      </>
    ),
    default: <TypeHighlight np>{'"orientation"'}</TypeHighlight>,
    description: (
      <>
        If false, image width will be set to 100%.
        <br />
        If present, image will be analized and displayed according to its heigh
        and width. Image with height greater than its width has a "portrait"
        orientation. Otherwise it has a "landscape" orientation. .
        <ul>
          <li>
            If value is "center", image will be centered and will not be
            displayed complete. This the empty space is avoided. This is achived
            by giving 100% to width prop if the orientation is "portrait". When
            orientation is "landscape", height prop will be set to 100%.
          </li>
          <li>
            If value is "orientation", image will be displayed complete by
            giving 100% to width prop if the orientation is "landscape". When
            orientation is "portrait", height prop will be set to 100%. Some
            images will show an empty space.
          </li>
        </ul>
      </>
    ),
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
