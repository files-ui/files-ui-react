import CodeHighlight from "../components/codeHighlight/CodeHighlight";
import TypeHighlight from "../components/typeHighlight/TypeHighlight";
import AnchorToTab from "../components/util-components/AnchorToTab";

export const AvatarAPIPropsRows = [
  {
    name: "readOnly",
    type: <TypeHighlight np>boolean</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>
        If true and if a src is given, then avatar will show the image and will
        not allow the user to change the picture. Also, layer on hover will not
        be shown
      </>
    ),
  },
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
    name: "alt",
    type: <TypeHighlight np>string</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>Alternative label when an error occurs on loading the image</>
    ),
  },
  {
    name: "onChange",
    type: <TypeHighlight np>func</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>
        Callback fired when an image file is selected.
        <br />
        <strong>Signature:</strong>
        <br />
        <CodeHighlight>{"(selectedFile: File) => void"}</CodeHighlight>
      </>
    ),
  },
  {
    name: "accept",
    type: <TypeHighlight np>string</TypeHighlight>,
    default: <TypeHighlight np>{"image/*"}</TypeHighlight>,
    description: (
      <>
        A comma-separated list of one or more file types, or{" "}
        <AnchorToTab href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept#unique_file_type_specifiers">
          unique file type specifiers
        </AnchorToTab>
        , describing which file types to allow. The default implementation of
        accept checks the file's mime type or extension against this list. More
        information can be found{" "}
        <AnchorToTab href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept">
          here
        </AnchorToTab>
        .
      </>
    ),
  },

  {
    name: "emptyLabel",
    type: <TypeHighlight np>React.ReactNode</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: <>Label to be displayed when image source is not set.</>,
  },
  {
    name: "changeLabel",
    type: <TypeHighlight np>React.ReactNode</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: <>Label to be displayed when there is a valid source set.</>,
  },
  {
    name: "loadingLabel",
    type: <TypeHighlight np>React.ReactNode</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: (
      <>
        Label to be displayed when "isLoading" prop is set set. This will cover
        the current image.
      </>
    ),
  },
  {
    name: "isLoading",
    type: <TypeHighlight np>boolean</TypeHighlight>,
    default: <TypeHighlight np>false</TypeHighlight>,
    description: <>If true, loadingLabel will be shown.</>,
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
    default: <TypeHighlight np>{'"center"'}</TypeHighlight>,
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
];
