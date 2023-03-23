import * as React from "react";
import SubTitle from "../../components/demo-components/sub-title/SubTitle";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import MainTitle from "../../components/main-title/MainTitle";
import RightMenu from "../../components/RightMenu/RightMenu";
import AnchorToTab from "../../components/util-components/AnchorToTab";
import Alert from "@mui/material/Alert";
import PropsTableApi from "./PropsTableApi";
import { FileInputButtonPropsRows } from "../../data/FileInputButtonPropsRows";
import MainParagraph from "../../components/paragraph-main/MainParagraph";
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
const FileInputButtonApi = (props) => {
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
        <MainTitle>FileInputButton API</MainTitle>
        <MainParagraph>
          API reference docs for the React FileInputButton component. Learn
          about the props and other APIs of this exported module.
        </MainParagraph>
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
                <AnchorToTab href="/components/fileinputbutton">
                  FileInputButton
                </AnchorToTab>
              </li>
            </ul>
          </Alert>
        </section>
        <section id="props">
          <PropsTableApi rows={FileInputButtonPropsRows} />
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
export default FileInputButtonApi;
