import React from "react";
import Menu from "../header/Menu";
import styleFooter from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styleFooter.footer}>
      <small>copyrigth: DBC COMPANY</small>
      <Menu />
    </footer>
  );
};

export default Footer;
