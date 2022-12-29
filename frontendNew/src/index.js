import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import LandingPage from "./components/landingPage/LandingPage";
import "./index.css";
import theme from "./themes/GlobalTheme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ThemeProvider>
  </React.StrictMode>
);
