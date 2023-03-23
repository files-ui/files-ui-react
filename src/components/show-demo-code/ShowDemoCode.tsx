import { ButtonGroup, Stack, Tooltip, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import CodeIcon from "@mui/icons-material/Code";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import * as React from "react";
import JSIcon from "../demo-components/icons/JSIcon";
import TSIcon from "../demo-components/icons/TSIcon";
import { Highlighter } from "rc-highlight";
import { UserContext } from "../../globals/contexts/UserContext";
interface ShowDemoCodeProps {
  codeSandboxJS?: string;
  codeSandboxTS?: string;
  codeSplittedJS?: string;
  codeSplittedTS?: string;
  codeCompleteJS?: string;
  codeCompleteTS?: string;
  splittedOnly?: boolean;
}
const ShowDemoCode: React.FC<ShowDemoCodeProps> = (
  props: ShowDemoCodeProps
) => {
  const {
    codeSandboxJS = "https://codesandbox.io/s/dropzone-ui-basic-3j01v",
    codeSandboxTS = "https://codesandbox.io/s/dropzone-ui-basic-3j01v",
    codeCompleteJS = "",
    codeCompleteTS = "",
    codeSplittedJS = "",
    codeSplittedTS = "",
    splittedOnly = false,
  } = props;
  const [showComplete, setShowComplete] = React.useState(false);
  const [showJS, setShowJS] = React.useState(true);

  const [usuario, ] = React.useContext(UserContext);
  const darkMode = usuario.darkMode;

  const code: string = showComplete
    ? showJS
      ? codeCompleteJS
      : codeCompleteTS
    : showJS
    ? codeSplittedJS
    : codeSplittedTS;

  return (
    <React.Fragment>
      {!splittedOnly && (
        <Stack
          direction={"row"}
          justifyContent="space-between"
          style={{ margin: "20px 0" }}
        >
          <Stack direction={"row"} justifyContent="flex-start">
            {code.length > 0 && (
              <ButtonGroup
                variant="outlined"
                aria-label="outlined button group"
              >
                <Button
                  size="small"
                  style={
                    showJS ? { backgroundColor: "rgba(4, 35, 84, 0.09)" } : {}
                  }
                  //startIcon={}
                  onClick={() => setShowJS(true)}
                >
                  <JSIcon color={darkMode?"rgb(178, 186, 194)":"rgb(45, 56, 67)"}/>
                </Button>
                <Button
                  size="small"
                  style={
                    !showJS ? { backgroundColor: "rgba(4, 35, 84, 0.09)" } : {}
                  }
                  //  endIcon={}
                  onClick={() => setShowJS(false)}
                >
                  <TSIcon color={darkMode?"rgb(178, 186, 194)":"rgb(45, 56, 67)"}/>
                </Button>
              </ButtonGroup>
            )}
          </Stack>

          <Stack direction={"row"} justifyContent="flex-end" spacing={1}>
            <Tooltip title={showComplete ? "Hide full code" : "Show full code"}>
              <IconButton
                style={{ borderRadius: "50%", border: "0.5px solid #eaeef3" }}
                onClick={() => setShowComplete((showComplete) => !showComplete)}
                //color="secondary"
                aria-label="upload picture"
                component="label"
              >
                <CodeIcon /* htmlColor="white" */ />
              </IconButton>
            </Tooltip>
            <Tooltip title={"Edit in CodeSandBox"}>
              <IconButton
                style={{ borderRadius: "50%", border: "0.5px solid #eaeef3" }}
                onClick={() => {
                  window?.open(
                    showJS ? codeSandboxJS : codeSandboxTS,
                    "_blank"
                  );
                }}
                //color="secondary"
                aria-label="upload picture"
                component="label"
              >
                <ViewInArIcon /* htmlColor="white" */ />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
      )}
      <Highlighter
        onCopyToClipboard={(code_) => {
          console.log("code copied to clipboard: ");
          console.log(code_);
        }}
        style={{
          margin: "20px 0",
          fontSize: "15px",
          lineHeight: "",
        }}
      >
        {code}
      </Highlighter>
    </React.Fragment>
  );
};
export default ShowDemoCode;
