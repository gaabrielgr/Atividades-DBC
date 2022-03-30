import React from "react";
import ItemMenu from "./ItemMenu";
import styleMenu from "./Menu.module.css";
const Menu = () => {
  return (
    <nav>
      <ul className={styleMenu.menu}>
        <ItemMenu />
      </ul>
    </nav>
  );
};

export default Menu;
