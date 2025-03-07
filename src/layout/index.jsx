import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/footer";

const Layout = (props) => {
  return (
    <div className={props.class}>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
