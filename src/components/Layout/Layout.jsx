import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "./../Footer/Footer";
import { LayoutMain } from "./Layout.styles";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <LayoutMain>{children}</LayoutMain>
      <Footer />
    </>
  );
};

export default Layout;
