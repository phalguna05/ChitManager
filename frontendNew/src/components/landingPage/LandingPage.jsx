import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import Background from "../../resources/background.jpg";
import theme from "../../themes/GlobalTheme";
import {
  GetStarted,
  GlobalContainer,
  Image,
  InnerLeftContainer,
  InnerRightContainer,
  SubHeadingContainer,
} from "./LandingPageStyles";
import LoginComponent from "./LoginComponent";

const LandingPage = () => {
  const handleStartButtonClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalContainer>
        <InnerLeftContainer>
          <Image alt="background" src={Background} />
        </InnerLeftContainer>
        <InnerRightContainer>
          <Typography variant="h1" color="primary">
            Chit Manager
          </Typography>
          <SubHeadingContainer>
            <Typography variant="h3" color="secondary">
              Digitalize Chits and connect with customers.
            </Typography>
          </SubHeadingContainer>

          <GetStarted variant="outlined" onClick={handleStartButtonClick}>
            Get Started
          </GetStarted>
        </InnerRightContainer>
      </GlobalContainer>
      <GlobalContainer>
        <LoginComponent />
      </GlobalContainer>
    </ThemeProvider>
  );
};

export default LandingPage;
