import React from "react";
import Logo from "./logo";
import Header from "./header";
import Footer from "./footer";

const Layout = (props) => (
  <>
    <Logo />
    <Header lang={"pt"} />
    <main>{props.children}</main>
    <Footer />
  </>
);
export default Layout;
