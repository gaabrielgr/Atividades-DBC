import React from "react";
import styleTitulo from "./Titulo.module.css";

const Titulo = ({ titulo }) => {
  return <h1 className={styleTitulo.titulo}>{titulo}</h1>;
};

export default Titulo;
