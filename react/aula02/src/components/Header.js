import Logo from "./Logo";
import Menu from "./Menu";
import styleCabecalho from "../components/Header.module.css";

const Header = () => {
  return (
    <header id="home" className={styleCabecalho.cabecalho}>
      <Logo />
      <Menu />
    </header>
  );
};

export default Header;
