import React from "react";
import styleItem from "../components/ItemMenu.module.css";

const ItemMenu = ({ name, ancora }) => {
  return (
    <li>
      <a className={styleItem.link} href={ancora}>
        {name}
      </a>
    </li>
  );
};

export default ItemMenu;
