import styleMenu from "../components/Menu.module.css";
import ItemMenu from "./MenuItem";

const Menu = () => {
  return (
    <nav className={styleMenu.containerMenu}>
      <ul className={styleMenu.containerMenu}>
        <ItemMenu name="Home" ancora={"#home"} />
        <ItemMenu name="Sobre" ancora={"#sobre"} />
        <ItemMenu name="Contato" ancora={"#formulario"} />
      </ul>
    </nav>
  );
};

export default Menu;
