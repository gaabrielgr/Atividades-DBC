import React from "react";
import { Link } from "react-router-dom";
import styleHeader from "./Header.module.css";

const Logo = () => {
  return (
    <div className={styleHeader.logo}>
      <Link to={"/"}>Logo</Link>
    </div>
  );
};

export default Logo;
