import { Alert, AlertTitle } from "@mui/material";
import * as React from "react";
import DescParagraph from "../../components/demo-components/desc-paragraph/DescParagraph";
import SubTitle from "../../components/demo-components/sub-title/SubTitle";
import MainLayoutPage from "../../components/layout-pages/MainLayoutPage";
import MainTitle from "../../components/main-title/MainTitle";
import RightMenu from "../../components/RightMenu/RightMenu";
import { FileMosaicAPIPropsRows } from "../../data/FileMosaicAPIPropsRows";
import TableTemplate from "../../templates/TableTemplate";
import PropsTableApi from "./PropsTableApi";

const rightMenuItems = [
  {
    id: 0,
    label: "Demos",
    referTo: "/api/file-mosaic/#filemosaic-demo",
  },
  {
    id: 1,
    label: "Props",
    referTo: "/api/file-mosaic/#filemosaic-props",
  },
];
const FileMosaicApi = (props) => {
  return (
    <React.Fragment>
      <MainLayoutPage
        rightMenu={<RightMenu width="240px" items={rightMenuItems} />}
      >
        <MainTitle>FileMosaic API</MainTitle>
        <DescParagraph>
          API reference docs for the React Filemosaic component. Learn about the
          props and other APIs of this exported module.
        </DescParagraph>
        <section id="filemosaic-demo">
          <SubTitle content="Demo" />
          <Alert severity="info">
            
            For examples and details on the usage of this React component, visit
            the component demo pages:
            <ul>
              <li>
                <a href="/components/filemosaic">FileMosaic. </a>
              </li>
            </ul>
          </Alert>
        </section>
        <section id="filemosaic-props">
          <SubTitle content="Props" />

          <PropsTableApi rows={FileMosaicAPIPropsRows} />
        </section>
      </MainLayoutPage>
    
    </React.Fragment>
  );
};
export default FileMosaicApi;
