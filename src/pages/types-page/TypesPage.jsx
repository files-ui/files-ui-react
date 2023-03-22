import { Highlighter } from "rc-highlight";
import * as React from "react";
import SubTitle from "../../components/demo-components/sub-title/SubTitle";
//import DescParagraph from "../../components/demo-components/desc-paragraph/DescParagraph";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import MainLayoutPage from "../../components/layout-pages/MainLayoutPage";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import MainTitle from "../../components/main-title/MainTitle";
import MainParagraph from "../../components/paragraph-main/MainParagraph";
import RightMenu from "../../components/RightMenu/RightMenu";
import AnchorToTab from "../../components/util-components/AnchorToTab";
import { ActionButtonItemAPIRows } from "../../data/ActionButtonItemAPIRows";
import { ActionButtonsAPIRows } from "../../data/ActionButtonsAPIRows";
import { ExtFileAPIRows } from "../../data/ExtFileAPIRows";
import { FooterConfigAPIRows } from "../../data/FooterConfigAPIRows";
import { HeaderConfigAPIRows } from "../../data/HeaderConfigAPIRows";
import { ServerResponseAPIRows } from "../../data/ServerResponseAPIRows";
import { UploadConfigAPIRows } from "../../data/UploadConfigAPIRows";
import { ValidateFileResponseAPIrows } from "../../data/ValidateFileResponseAPIrows";
import { scrollHandler } from "../../utils/scrollHandler";
import PropsTableApi from "../api/PropsTableApi";

const rightMenuItems = [
  {
    id: 0,
    label: "ExtFile",
    referTo: "/types#extfile",
  },
  {
    id: 1,
    label: "ValidateFileResponse",
    referTo: "/types#validatefileresponse",
  },
  {
    id: 2,
    label: "UploadConfig",
    referTo: "/types#uploadconfig",
  },
  {
    id: 3,
    label: "ActionButtons",
    referTo: "/types#actionbuttons",
  },
  {
    id: 4,
    label: "ActionButtonItem",
    referTo: "/types#actionbuttonitem",
  },
  {
    id: 5,
    label: "HeaderConfig",
    referTo: "/types#headerconfig",
  },
  {
    id: 6,
    label: "FooterConfig",
    referTo: "/types#footerconfig",
  },
  {
    id: 7,
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
      <MainLayoutPage selectedIndex={7}>
        <MainContentContainer>
          <MainTitle>Types</MainTitle>
          <MainParagraph>
            API reference docs for all the important types related to files UI
            components.
          </MainParagraph>
          <section id="extfile">
            <PropsTableApi
              title="ExtFile"
              desc={
                <>
                  Data estructure that "extends" the{" "}
                  <AnchorToTab href="https://developer.mozilla.org/es/docs/Web/API/File">
                    File
                  </AnchorToTab>{" "}
                  Object. This object is designed to allow the information
                  exchange between components.
                </>
              }
              omitDefault
              rows={ExtFileAPIRows}
            />
          </section>
          <section id="validatefileresponse">
            <PropsTableApi
              rows={ValidateFileResponseAPIrows}
              title="ValidateFileResponse"
              omitDefault
              desc="Response convention for file validation"
            />
          </section>
          <section id="uploadconfig">
            <PropsTableApi
              rows={UploadConfigAPIRows}
              title="UploadConfig"
              desc="Configuration needed for performing the upload process"
            />
          </section>
          <section id="actionbuttons">
            <PropsTableApi
              rows={ActionButtonsAPIRows}
              title="ActionButtons"
              omitDefault
              desc="Advanced configuration for buttons after or before the component. (Dropzone and FileInputButton)"
            />
          </section>
          <section id="actionbuttonitem">
            <PropsTableApi
              rows={ActionButtonItemAPIRows}
              title="ActionButtonItem"
              desc="Advanced configuration for each action button"
            />
          </section>
          <section id="headerconfig">
            <PropsTableApi
              rows={HeaderConfigAPIRows}
              title="HeaderConfig"
              desc="Advanced configuration for dropzone header"
            />
          </section>
          <section id="footerconfig">
            <PropsTableApi
              rows={FooterConfigAPIRows}
              title="FooterConfig"
              desc="Advanced configuration for dropzone footer"
            />
          </section>
          <section id="serverresponse">
            <PropsTableApi
              rows={ServerResponseAPIRows}
              title="ServerResponse"
              omitDefault
              desc="Convention for server response"
            />
          </section>
          <section id="uploadstatus">
            <SubTitle content={"UPLOADSTATUS"} />{" "}
            <Highlighter
              style={{
                margin: "20px 0",
                fontSize: "15px",
                lineHeight: "",
              }}
              onCopyToClipboard={(code_) => {
                console.log("code copied to clipboard: ");
                console.log(code_);
              }}
            >
              {UPLOADSTATUSCODE}
            </Highlighter>
          </section>
        </MainContentContainer>
      </MainLayoutPage>{" "}
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
export default TypesPage;
const UPLOADSTATUSCODE = `export type UPLOADSTATUS = "preparing" | "aborted" | "uploading" | "success" | "error";`;
