import * as React from "react";
import DescParagraph from "../demo-components/desc-paragraph/DescParagraph";
import SubTitle from "../demo-components/sub-title/SubTitle";
import MainParagraph from "../paragraph-main/MainParagraph";

interface OverviewProps {}
const Overview: React.FC<OverviewProps> = (props: OverviewProps) => {
  return (
    <React.Fragment>
      <SubTitle content="Overview" />
      <MainParagraph>
        Files UI is a library of UI components and utilities for making File
        Uploads with React.
      </MainParagraph>
      <MainParagraph>
        It includes a comprehensive collection of prebuilt components that are
        ready for use in production right out of the box.
      </MainParagraph>
      <SubTitle content="Key features:" />
      <DescParagraph>
        <ul>
          <li>{"✅ File validation: Validate files before uploading."}</li>
          <li>{"🎨 File Image previews: See a thumbnail preview"}</li>
          <li>
            {
              "🖼️ Full screen image previews: Add more interacion with a full screen preview of images"
            }
          </li>
          <li>
            {"🎥 Full screen video previews. Play the video before uploading."}
          </li>
          <li>
            {
              "👀 status visualization: validation and upload status is shown on a Tooltip or on Info Layer"
            }
          </li>
          <li>
            {"✈️ File upload: Upload valid files to a server using Axios lib."}
          </li>
          <li>{"🎭 Out of the box design and style."}</li>
          <li>
            {
              "🍰 Easy to use. Probably, this is the killer feature you are looking for in a package."
            }
          </li>
        </ul>
      </DescParagraph>
    </React.Fragment>
  );
};
export default Overview;
