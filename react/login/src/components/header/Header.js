import React from "react";
import { useContext } from "react";
import { ContextAuthenticator } from "../../contexts/ContextAuthenticator";
import Logo from "./Logo";
import styleHeader from "./Header.module.css";
import Menu from "./Menu";
const Header = () => {
  const token = localStorage.getItem("key");
  const { deslogar } = useContext(ContextAuthenticator);

  return (
    <header className={styleHeader.cabecalho}>
      <div className={styleHeader.menuLeft}>
        <Logo />
        <Menu />
      </div>
      {token && (
        <button className={styleHeader.botaoSair} onClick={deslogar}>
          Sair
        </button>
      )}
    </header>
  );
};

export default Header;
