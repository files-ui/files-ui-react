import * as React from "react";
//import DescParagraph from "../../components/demo-components/desc-paragraph/DescParagraph";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import MainLayoutPage from "../../components/layout-pages/MainLayoutPage";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import MainTitle from "../../components/main-title/MainTitle";
import MainParagraph from "../../components/paragraph-main/MainParagraph";
import RightMenu from "../../components/RightMenu/RightMenu";
import { ActionButtonsAPIRows } from "../../data/ActionButtonsAPIRows";
import { ExtFileAPIRows } from "../../data/ExtFileAPIRows";
import { FooterConfigAPIRows } from "../../data/FooterConfigAPIRows";
import { HeaderConfigAPIRows } from "../../data/HeaderConfigAPIRows";
import { ServerResponseAPIRows } from "../../data/ServerResponseAPIRows";
import { UploadConfigAPIRows } from "../../data/UploadConfigAPIRows";
import { UPLOADSTATUSAPIRows } from "../../data/UploadStatusAPIRows";
import { ValidateFileResponseAPIrows } from "../../data/ValidateFileResponseAPIrows";
import PropsTableApi from "../api/PropsTableApi";

const rightMenuItems = [
  {
    id: 1,
    label: "ExtFile",
    referTo: "/types#extfile",
  },
  {
    id: 7,
    label: "ValidateFileResponse",
    referTo: "/types#validatefileresponse",
  },
  {
    id: 5,
    label: "UploadConfig",
    referTo: "/types#uploadconfig",
  },
  {
    id: 2,
    label: "ActionButtons",
    referTo: "/types#actionbuttons",
  },
  {
    id: 3,
    label: "HeaderConfig",
    referTo: "/types#headerconfig",
  },
  {
    id: 4,
    label: "FooterConfig",
    referTo: "/types#footerconfig",
  },
  {
    id: 6,
    label: "ServerResonse",
    referTo: "/types#uploadconfig",
  },

  {
    id: 8,
    label: "UPLOADSTATUS",
    referTo: "/types#uploadstatus",
  },
];

const TypesPage = (props) => {
  return (
    <React.Fragment>
      <MainLayoutPage selectedIndex={6}>
        <MainContentContainer>
          <MainTitle>Types</MainTitle>
          <MainParagraph>
            API reference docs for all the important types related to files UI
            components.
          </MainParagraph>
          <section id="extfile">
            <PropsTableApi
              title="ExtFile"
              desc={'This object "extends" the File Object'}
              omitDefault
              rows={ExtFileAPIRows}
            />
          </section>
          <section id="validatefileresponse">
            <PropsTableApi
              rows={ValidateFileResponseAPIrows}
              title="ValidateFileResponse"
              omitDefault
            />
          </section>
          <section id="uploadconfig">
            <PropsTableApi rows={UploadConfigAPIRows} title="UploadConfig" />
          </section>
          <section id="actionbuttons">
            <PropsTableApi rows={ActionButtonsAPIRows} title="ActionButtons" />
          </section>

          <section id="headerconfig">
            <PropsTableApi rows={HeaderConfigAPIRows} title="HeaderConfig" />
          </section>
          <section id="footerconfig">
            <PropsTableApi rows={FooterConfigAPIRows} title="FooterConfig" />
          </section>
          <section id="serverresponse">
            <PropsTableApi
              rows={ServerResponseAPIRows}
              title="ServerResponse"
            />
          </section>
          <section id="uploadstatus">
            <PropsTableApi rows={UPLOADSTATUSAPIRows} title="UPLOADSTATUS" />
          </section>
        </MainContentContainer>
      </MainLayoutPage>{" "}
      <RightMenuContainer>
        <RightMenu width="240px" items={rightMenuItems} />
      </RightMenuContainer>
    </React.Fragment>
  );
};
export default TypesPage;
