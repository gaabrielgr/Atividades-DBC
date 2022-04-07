import Logo from "./Logo";
import Menu from "./Menu";
import { ContainerHeader, ButtonSair } from "../Header.styles";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Header = () => {
  const { isLogged, deslogar } = useContext<any>(AuthContext);
  const token = localStorage.getItem("key");

  return (
    <>
      {isLogged && (
        <ContainerHeader>
          <Logo />
          <Menu />
          <>{token && <ButtonSair onClick={deslogar}>Sair</ButtonSair>}</>
        </ContainerHeader>
      )}
    </>
  );
};

export default Header;
