import * as React from "react";
import SubTitle from "../../components/demo-components/sub-title/SubTitle";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import MainTitle from "../../components/main-title/MainTitle";
import RightMenu from "../../components/RightMenu/RightMenu";
import AnchorToTab from "../../components/util-components/AnchorToTab";
import Alert from "@mui/material/Alert";
import PropsTableApi from "./PropsTableApi";
import { FullScreenAPIPropRows } from "./FullScreenAPIPropRows";
import MainParagraph from "../../components/paragraph-main/MainParagraph";

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

const FullScreenApi = () => {
  return (
    <React.Fragment>
      <MainContentContainer>
        <MainTitle>FullScreen API</MainTitle>
        <MainParagraph>
          API reference docs for the React FullScreen component. Learn about the
          props and other APIs of this exported module.
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
                <AnchorToTab href="/components/filecard">FileCard</AnchorToTab>
              </li>
            </ul>
          </Alert>
        </section>
        <section id="props">
          <PropsTableApi rows={FullScreenAPIPropRows} />
        </section>
      </MainContentContainer>
      <RightMenuContainer>
        <RightMenu width="240px" items={rightMenuItems} />
      </RightMenuContainer>
    </React.Fragment>
  );
};
export default FullScreenApi;
