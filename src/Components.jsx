import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout/Layout";
import { ThemeContext } from "./contexts/ThemeContext";
import Router from "./Router";
import GlobalStyles from "./styles/GlobalStyles";

const Components = () => {
  const { themeStyles } = useContext(ThemeContext);
  return (
    <>
      <ThemeProvider theme={themeStyles}>
        <GlobalStyles />
        <Layout>
          <Router />
        </Layout>
      </ThemeProvider>
    </>
  );
};
export default Components;
