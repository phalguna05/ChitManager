import { Box, Button, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import theme from "../../themes/GlobalTheme";

const secondary = theme.palette.secondary;
const primary = theme.palette.primary;

const GlobalContainer = styled("div")({
  height: "100vh",
  width: "100vw",
  alignItems: "center",
  display: "flex",
  backgroundColor: "#fafafa",
});

const InnerLeftContainer = styled("div")({
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "60%",
  float: "left",
});

const InnerRightContainer = styled("div")({
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  width: "40%",
  float: "right",
});

const SubHeadingContainer = styled("div")({
  marginTop: "10px",
  display: "flex",
  flexDirection: "row",
});

const Image = styled("img")({
  width: "100%",
  height: "100%",
  marginTop: "20px",
});

const GetStarted = styled(Button)({
  backgroundColor: secondary,
  color: secondary,
  fontSize: "1rem",
  borderRadius: "8px",
  padding: "6px",
  width: "15vw",
  marginTop: "20px",
  position: "relative",
});

const LoginButton = styled(Button)({
  backgroundColor: primary,
  color: primary,
  fontSize: "1rem",
  borderRadius: "8px",
  padding: "8px",
  marginBottom: "10px",
});

const LoginContainer = styled(Paper)({
  width: "60vw",
  height: "70vh",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "10px",
  display: "flex",
});

const LoginImageContainer = styled("img")({
  width: "50%",
  height: "100%",
  float: "right",
});

const LoginRightContainer = styled("div")({
  width: "50%",
  height: "100%",
  float: "left",
  paddingTop: "5vh",
  paddingLeft: "2vw",
});

const FormBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export {
  GlobalContainer,
  InnerLeftContainer,
  InnerRightContainer,
  SubHeadingContainer,
  Image,
  GetStarted,
  LoginContainer,
  LoginImageContainer,
  LoginRightContainer,
  FormBox,
  LoginButton,
  TabPanel,
};
