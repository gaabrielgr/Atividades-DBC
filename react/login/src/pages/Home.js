import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ContextAuthenticator } from "../contexts/ContextAuthenticator";
import gifVazio from "../images/empty.gif";
import styleHome from "../components/Home.module.css";
const Home = () => {
  const { logged } = useContext(ContextAuthenticator);
  useEffect(() => {
    logged();
  }, []);
  return (
    <div className={styleHome.div}>
      <h1>Pagina Inicial, sem nenhum conteúdo</h1>
      <img src={gifVazio} alt="" width={"80%"} />
    </div>
  );
};

export default Home;
