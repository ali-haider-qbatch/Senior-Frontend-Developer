import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "./config/theme/themeVariables";
import GlobalStyles from "./config/theme/global.styled";

import Header from "./component/Header";
import HeaderBanner from "./component/HeaderBanner";
import TrustedCompanies from "./components/TrustedCompanies";
import CloudSoftware from "./components/CloudSoftware";
import Testimonials from "./components/Testimonials";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <HeaderBanner />
      <TrustedCompanies />
      <CloudSoftware />
      <Testimonials />
    </ThemeProvider>
  );
}
export default App;
