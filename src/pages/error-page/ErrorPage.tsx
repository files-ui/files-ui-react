import * as React from "react";
import { ErrorPageProps } from "./ErrorPageProps";
import "./ErrorPage.scss";
import { Box, Button, Stack } from "@mui/material";
//import { useNavigateToTop } from "../../hooks/useNavigateToTop";
import MainTitle from "../../components/main-title/MainTitle";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import MainParagraph from "../../components/paragraph-main/MainParagraph";
import DescParagraph from "../../components/demo-components/desc-paragraph/DescParagraph";
import { useNavigateGoBack } from "../../hooks/useNavigateGoBack";
import { useNavigate } from "react-router-dom";

const ErrorPage: React.FC<ErrorPageProps> = (props: ErrorPageProps) => {
  //const goBack = useNavigateGoBack();
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "flex-start",
          height:{sm: "400px", xs:"300px", lg:"600px"},
          //objectFit: "cover",
          backgroundSize:"cover",
          backgroundPosition:"center",
          backgroundRepeat: "no-repeat",
          backgroundImage:
            "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
        }}
      >
        <MainTitle style={{ fontSize: "5rem", marginBottom: 0, marginTop:"10px" }}>404</MainTitle>

        {/*  <img
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="error_image"
        width={"100%"}
        style={{backgroundPosition:"center"}}
      /> */}
      </Box>
      <MainParagraph>Looks like you're lost</MainParagraph>
      <DescParagraph>
        the page you are looking for is not avaible!
      </DescParagraph>
      <Button onClick={handleReturn} variant="outlined">
        Go back
      </Button>
    </div>
  );
};
export default ErrorPage;
