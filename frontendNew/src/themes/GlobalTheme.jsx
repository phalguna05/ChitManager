import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#004e8c",
    },
    secondary: {
      main: "#0064b4",
    },
    error: {
      main: "#CC0000",
    },
    success: {
      main: "#198754",
    },
  },
  breakpoints: {
    values: {
      mobile: 480,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: "10px",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

theme.typography.h1 = {
  fontSize: "3rem",
  fontWeight: "bolder",
};

theme.typography.h2 = {
  fontSize: "2rem",
  fontWeight: "bold",
};
theme.typography.h3 = {
  fontSize: "1.5rem",
  fontWeight: "bold",
};

theme.typography.body1 = {
  fontSize: "1rem",
  fontWeight: "normal",
};

export default theme;
