import React from "react";
import styleButton from "./Buttons.module.css";

export const Buttons = ({ valor }) => {
  return <button className={styleButton.botao}>{valor}</button>;
};
