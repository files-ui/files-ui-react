import { Button, Divider } from "@mui/material";
import * as React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router";
import "./FooterPage.scss";

interface FooterPageProps {
  labelBefore?: string;
  labelAfter?: string;
  linkBefore?: string;
  linkAfter?: string;
  page: string;
}
const FooterPage: React.FC<FooterPageProps> = (props: FooterPageProps) => {
  const { labelAfter, labelBefore, linkAfter, linkBefore, page } = props;
  const redirect = useNavigate();
  return (
    <footer>
      <Divider style={{ width: "100%" }}></Divider>
      <div className="fui-page-footer-container">
        <div className="redirect-small-container">
          {labelBefore && (
            <Button
              startIcon={<KeyboardArrowLeftIcon />}
              onClick={linkBefore ? () => redirect(linkBefore) : undefined}
            >
              {labelBefore}
            </Button>
          )}
          {labelAfter && (
            <Button
              endIcon={<KeyboardArrowRightIcon />}
              onClick={labelAfter ? () => redirect(labelAfter) : undefined}
            >
              {labelAfter}
            </Button>
          )}
        </div>

        <div className="redirect-container">
          {labelBefore && (
            <Button
              startIcon={<KeyboardArrowLeftIcon />}
              onClick={linkBefore ? () => redirect(linkBefore) : undefined}
            >
              {labelBefore}
            </Button>
          )}
        </div>

        <div className="like-icon-container">like icons</div>
        <div className="redirect-container">
          {labelAfter && (
            <Button
              endIcon={<KeyboardArrowRightIcon />}
              onClick={linkAfter ? () => redirect(linkAfter) : undefined}
            >
              {labelAfter}
            </Button>
          )}
        </div>
      </div>
    </footer>
  );
};
export default FooterPage;
