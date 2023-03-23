import * as React from "react";
import SubTitle from "../../components/demo-components/sub-title/SubTitle";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import MainTitle from "../../components/main-title/MainTitle";
import RightMenu from "../../components/RightMenu/RightMenu";
import AnchorToTab from "../../components/util-components/AnchorToTab";
import Alert from "@mui/material/Alert";
import PropsTableApi from "./PropsTableApi";
import { VideoPreviewAPIPropsRows } from "./VideoPreviewAPIPropsRows";
import MainParagraph from "../../components/paragraph-main/MainParagraph";
import DescParagraph from "../../components/demo-components/desc-paragraph/DescParagraph";
import CodeHighlight from "../../components/codeHighlight/CodeHighlight";
import { scrollHandler } from "../../utils/scrollHandler";

const rightMenuItems = [
  {
    id: 0,
    label: "Demos",
    referTo: "/api/fileinputbutton#demo",
  },
  {
    id: 1,
    label: "Props",
    referTo: "/api/fileinputbutton#props",
  },
];

const VideoPreviewApi = () => {
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
        <MainTitle>VideoPreview API</MainTitle>
        <MainParagraph>
          API reference docs for the React VideoPreview component. Learn about
          the props and other APIs of this exported module.
        </MainParagraph>
        <DescParagraph>
          Apart from the props described bellow, the{" "}
          <CodeHighlight>VideoPreview</CodeHighlight> component accepts all the
          HTML <CodeHighlight>{"<video/>"}</CodeHighlight> default props. You
          can check them out{" "}
          <AnchorToTab href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#attributes">
            here
          </AnchorToTab>
          .
        </DescParagraph>
        <section id="demo">
          <SubTitle content="Demo" />
          <Alert severity="info">
            For examples and details on the usage of this React component, visit
            the component demo pages:
            <ul>
              <li>
                <AnchorToTab href="/components/filemosaic">
                  FileMosaic
                </AnchorToTab>
              </li>
              <li>
                <AnchorToTab href="/components/filecard">FileCard</AnchorToTab>
              </li>
            </ul>
          </Alert>
        </section>
        <section id="props">
          <PropsTableApi rows={VideoPreviewAPIPropsRows} />
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
export default VideoPreviewApi;
