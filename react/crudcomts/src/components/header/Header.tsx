import Logo from "./Logo";
import Menu from "./Menu";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Header = () => {
  const { isLogged, deslogar } = useContext<any>(AuthContext);
  const token = localStorage.getItem("key");

  return (
    <>
      {isLogged && (
        <header>
          <Logo />
          <Menu />
          <div>{token && <button onClick={deslogar}>Sair</button>}</div>
        </header>
      )}
    </>
  );
};

export default Header;
