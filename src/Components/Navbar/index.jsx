import React from "react";
import logo from "../../assets/Images/Logo (2).png";

const Navbar = () => {
  return (
    <div className="d-flex p-2 justify-content-center border-bottom">
      <img src={logo} alt="Logo" />
    </div>
  );
};
export default Navbar;
