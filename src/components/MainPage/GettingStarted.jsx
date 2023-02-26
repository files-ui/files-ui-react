import * as React from "react";
import { Button, styled } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import "../../styles/GettingStarted.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
//import { useNavigate } from "react-router";
import { useNavigateToTop } from "../../hooks/useNavigateToTop";
const CodeButton = styled(Button)({
  display: "flex",
  justifyContent: "space-between",
  textTransform: "lowercase",
  padding: "10px 20px",
  borderRadius: "16px",
  fontSize: "1rem",
  //fontWeight: "700",
  // fontFamily: '"Poppins", sans-serif',
});

const GettingStarted = ({ darkModeOn }) => {
  const navigator = useNavigateToTop();

  const [copiedNpm, setCopiedNpm] = React.useState(false);
  const [copiedYarn, setCopiedYarn] = React.useState(false);

  const handleCopyInstallationNPM = () => {
    setCopiedNpm(true);

    setTimeout(() => {
      setCopiedNpm(false);
    }, 2000);
  };
  const handleCopyInstallationYarn = () => {
    setCopiedYarn(true);

    setTimeout(() => {
      setCopiedYarn(false);
    }, 2000);
  };

  const goToGettingStarted = () => {
    navigator("/getting-started");
  };
  return (
    <div className="getting-started-container">
      {/*  <h2>Getting started:</h2>
      <p>
        Install Files-ui using{" "}
        <a href="https://www.npmjs.com/package/@files-ui/react" target="_blank">
          npm{" "}
        </a>
        or either using{" "}
        <a href="https://yarnpkg.com/package/@files-ui/react" target="_blank">
          yarn
        </a>
        :
      </p> */}
      <div className="button-container">
        <Button
          onClick={goToGettingStarted}
          style={{
            padding: "10px 20px",
            //fontFamily: '"Poppins", sans-serif',
            flexGrow: 1,
            //fontWeight: "700",
            textTransform: "capitalize",
            fontSize:"16px"
          }}
          variant="contained"
          color={darkModeOn ? "secondary" : "primary"}
          //fullWidth
          endIcon={
            <ArrowForwardIosIcon
              style={{ fontSize: "0.9rem", fontWeight: "800" }}
            />
          }
        >
          {"Get Started"}
        </Button>

        <div className="code-button-flex">
          <CodeButton
            disableRipple
            variant="outlined"
            endIcon={
              !copiedNpm ? <ContentCopyIcon /> : <CheckIcon color="success" />
            }
            //style={buttonCodeStyle}
            fullWidth
            onClick={handleCopyInstallationNPM}
            color={copiedNpm ? "success" : darkModeOn ? "secondary" : "primary"}
          >
            {"npm install @files-ui/react"}
          </CodeButton>
          <CodeButton
            disableRipple
            variant="outlined"
            endIcon={
              !copiedYarn ? <ContentCopyIcon /> : <CheckIcon color="success" />
            }
            //style={buttonCodeStyle}
            fullWidth
            onClick={handleCopyInstallationYarn}
            color={
              copiedYarn ? "success" : darkModeOn ? "secondary" : "primary"
            }
          >
            {"yarn add @files-ui/react"}
          </CodeButton>
        </div>
      </div>
    </div>
  );
};
export default GettingStarted;
