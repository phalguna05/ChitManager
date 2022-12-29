import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React from "react";
import LoginImage from "../../resources/login.svg";
import {
  LoginContainer,
  LoginImageContainer,
  LoginRightContainer,
  TabPanel,
} from "./LandingPageStyles";
import OrganizerLogin from "./OrganizerLogin";

const LoginComponent = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <LoginContainer>
      <LoginRightContainer>
        <Tabs
          onChange={handleChange}
          value={value}
          aria-label="Tabs where each tab needs to be selected manually"
          variant="fullWidth"
        >
          <Tab label="Organizer"></Tab>
          <Tab label="Customer" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <OrganizerLogin />
        </TabPanel>
      </LoginRightContainer>
      <LoginImageContainer src={LoginImage} alt="Loginimage" />
    </LoginContainer>
  );
};

export default LoginComponent;
