import React from "react";
import Perfil from "../components/Cards/Perfil";

export const Home = ({ dados }) => {
  return (
    <>
      <Perfil dados={dados} />
    </>
  );
};
