import * as React from "react";
import { Paper } from "@mui/material";
import CodeHighlight from "../../components/codeHighlight/CodeHighlight";
import BasicDemoAvatar from "../../components/demo-components/avatar-demo/BasicDemoAvatar";
import CodeDemoAvatarBasic from "../../components/demo-components/avatar-demo/CodeDemoAvatarBasic";
import DescParagraph from "../../components/demo-components/desc-paragraph/DescParagraph";
import SubTitle from "../../components/demo-components/sub-title/SubTitle";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import MainTitle from "../../components/main-title/MainTitle";
import MainParagraph from "../../components/paragraph-main/MainParagraph";
import RightMenu from "../../components/RightMenu/RightMenu";
import TypeHighlight from "../../components/typeHighlight/TypeHighlight";
import DemoAvatarPickFile from "../../components/demo-components/avatar-demo/DemoAvatarPickFile";
import CodeDemoAvatarPickFile from "../../components/demo-components/avatar-demo/CodeDemoAvatarPickFile";
import DemoAvatarFallBack from "../../components/demo-components/avatar-demo/DemoAvatarFallBack";
import CodeDemoAvatarFallBack from "../../components/demo-components/avatar-demo/CodeDemoAvatarFallBack";
import AnchorToTab from "../../components/util-components/AnchorToTab";
import DemoAvatarSmartImgFit from "../../components/demo-components/avatar-demo/DmoAvatarSmartImgFit";
import CodeDemoAvatarSmartFit from "../../components/demo-components/avatar-demo/CodeDemoAvatarSmartFit";
import DemoAvatarStyling from "../../components/demo-components/avatar-demo/DemoAvatarStyling";
import CodeDemoAvatarStyling from "../../components/demo-components/avatar-demo/CodeDemoAvatarStyling";
import DemoAvatarLabels from "../../components/demo-components/avatar-demo/DemoAvatarLabels";
import DemoAvatarVariants from "../../components/demo-components/avatar-demo/DemoAvatarVarians";
import DemoAvatarLoading from "../../components/demo-components/avatar-demo/DemoAvatarLoading";
import CodeDemoAvatarLoading from "../../components/demo-components/avatar-demo/CodeDemoAvatarLoading";
import CodeDemoAvatarVariant from "../../components/demo-components/avatar-demo/CodeAvatarVariant";
import CodeDemoAvatarLabels from "../../components/demo-components/avatar-demo/CodeDemoAvatarLabels";
import { scrollHandler } from "../../utils/scrollHandler";

interface AvatarDemoPageProps {}
const AvatarDemoPage: React.FC<AvatarDemoPageProps> = (
  props: AvatarDemoPageProps
) => {
  const [selectedItem, setSelectedItem] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener("scroll", () =>
      scrollHandler(rightMenuItems, setSelectedItem)
    );
    return () => {
      window.removeEventListener("scroll", () =>
        scrollHandler(rightMenuItems, setSelectedItem)
      );
    };
  }, []);
  return (
    <React.Fragment>
      <MainContentContainer>
        <MainTitle>Avatar</MainTitle>

        <MainParagraph>
          This "avatar" component can be used to just display an image or even
          can be a special file <CodeHighlight>input</CodeHighlight> designed
          for setting an image
          {/* by either dragging and dropping files there or  */}
          by picking file from a file dialog.
        </MainParagraph>

        <section id="basic-avatar">
          <SubTitle content="Basic Avatar (read only)" />
          <DescParagraph>
            The most basic use is to set a fixed image from Url.
          </DescParagraph>
          <Paper
            variant="outlined"
            style={{
              padding: "25px",
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <BasicDemoAvatar />
          </Paper>
          <CodeDemoAvatarBasic />
        </section>

        <section id="picking-image-file">
          <SubTitle content="Picking an image File" />
          <DescParagraph>
            The <CodeHighlight>{"<Avatar/>"}</CodeHighlight> component supports
            both a <TypeHighlight>string</TypeHighlight> url and a{" "}
            <TypeHighlight>File</TypeHighlight> object as the source.
          </DescParagraph>
          <Paper
            variant="outlined"
            style={{
              padding: "25px",
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <DemoAvatarPickFile />
          </Paper>
          <CodeDemoAvatarPickFile />
        </section>

        <section id="fallback">
          <SubTitle content="Fallback (error on load the image)" />
          <DescParagraph>
            If there is an error loading the avatar image, the{" "}
            <CodeHighlight>{"<Avatar/>"}</CodeHighlight> component provides a
            way to fall back by defining the{" "}
            <TypeHighlight>onError</TypeHighlight> prop. This could happen if:
            <ul>
              <li>The image url is broken, or</li>
              <li>The image file selected is not an image</li>
            </ul>
          </DescParagraph>
          <Paper
            variant="outlined"
            style={{
              padding: "25px",
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              gap: "5px",
            }}
          >
            <DemoAvatarFallBack />
          </Paper>
          <CodeDemoAvatarFallBack />
        </section>

        <section id="smart-image-fit">
          <SubTitle content="Smart image fit" />
          <DescParagraph>
            <CodeHighlight>Avatar</CodeHighlight> with
            <TypeHighlight>smartImgFit</TypeHighlight> prop will display image
            according to its heigh and width.
            <br />
            Image with height greater than its width has a "portrait"
            orientation. Otherwise it has a "landscape" orientation.
            <br />
            In Avatar component the default value is "center".
          </DescParagraph>

          <Paper
            variant="outlined"
            style={{
              padding: "25px",
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              gap: "50px",
            }}
          >
            <DemoAvatarSmartImgFit />
          </Paper>

          <CodeDemoAvatarSmartFit />
        </section>

        <section id="loading">
          <SubTitle content="Loading" />
          <DescParagraph>
            You can use the prop <TypeHighlight>isLoading</TypeHighlight> when
            you want to communicate that something is loading.
          </DescParagraph>
          <Paper
            variant="outlined"
            style={{
              padding: "25px",
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <DemoAvatarLoading />
          </Paper>
          <CodeDemoAvatarLoading />
        </section>

        <section id="variants">
          <SubTitle content="Variants" />
          <DescParagraph>
            Avatar component comes in 2 variants: "circle" and "square".
          </DescParagraph>
          <Paper
            variant="outlined"
            style={{
              padding: "25px",
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              gap: "50px",
            }}
          >
            <DemoAvatarVariants />
          </Paper>
          <CodeDemoAvatarVariant />
        </section>

        <section id="styling">
          <SubTitle content="Styling" />
          <DescParagraph>
            You can define the <TypeHighlight>style</TypeHighlight> prop for
            changing the styles applied to the main container such us the{" "}
            <TypeHighlight>width</TypeHighlight> o the{" "}
            <TypeHighlight>height</TypeHighlight>.
            <br />
            Also you can use directly the prop{" "}
            <TypeHighlight>borderRadius</TypeHighlight> to specify how rounde
            you preffer the borders.
          </DescParagraph>
          <Paper
            variant="outlined"
            style={{
              padding: "25px",
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              gap: "50px",
            }}
          >
            <DemoAvatarStyling />
          </Paper>
          <CodeDemoAvatarStyling />
        </section>

        <section id="labels">
          <SubTitle content="Labels" />
          <DescParagraph>
            You can specify the content of the texts:
            <ul>
              <li>
                <CodeHighlight>emptyLabel</CodeHighlight>: when the source is
                not set.
              </li>
              <li>
                <CodeHighlight>changeLabel</CodeHighlight>: when there is a
                valid source set.
              </li>
              <li>
                <CodeHighlight>loadingLabel</CodeHighlight>: when you want to
                communicate that something is loading.
              </li>
            </ul>
          </DescParagraph>
          <Paper
            variant="outlined"
            style={{
              padding: "25px",
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              gap: "50px",
            }}
          >
            <DemoAvatarLabels />
          </Paper>
          <CodeDemoAvatarLabels />
        </section>

        <section id="api">
          <SubTitle content="API" />
          <DescParagraph>
            See the documentation below for a complete reference to all of the
            props available to the components mentioned here.
          </DescParagraph>
          <ul>
            <li>
              <AnchorToTab href="/api/avatar">{"<Avatar/>"}</AnchorToTab>
            </li>
          </ul>
        </section>
      </MainContentContainer>

      <RightMenuContainer>
        <RightMenu
          width="240px"
          items={rightMenuItems}
          selectedItemProp={selectedItem}
          setSelected={setSelectedItem}
        />
      </RightMenuContainer>
    </React.Fragment>
  );
};
export default AvatarDemoPage;

const rightMenuItems = [
  {
    id: 0,
    label: "Basic avatar",
    referTo: "/components/avatar#basic-avatar",
  },
  {
    id: 1,
    label: "Picking image file",
    referTo: "/components/avatar#picking-image-file",
  },
  {
    id: 3,
    label: "FallBack",
    referTo: "/components/avatar#fallback",
  },
  {
    id: 4,
    label: "Smart image fit",
    referTo: "/components/avatar#smart-image-fit",
  },
  {
    id: 5,
    label: "Loading",
    referTo: "/components/avatar#loading",
  },
  {
    id: 6,
    label: "Variants",
    referTo: "/components/avatar#variants",
  },
  {
    id: 7,
    label: "Styling",
    referTo: "/components/avatar#styling",
  },
  {
    id: 8,
    label: "Labels",
    referTo: "/components/avatar#labels",
  },
  {
    id: 9,
    label: "API",
    referTo: "/components/avatar#api",
  },
];
