import React from "react";
import styleCard from "./Perfil.module.css";
import { GoBriefcase } from "react-icons/go";
import { GoDeviceDesktop } from "react-icons/go";
import { Buttons } from "./Buttons";
import { Link } from "react-router-dom";

const Perfil = ({ dados }) => {
  return (
    <section className={styleCard.containerCard}>
      <img className={styleCard.imagemLogin} src={dados.avatar_url} alt="" />
      <div className={styleCard.infoPessoal}>
        <div className={styleCard.nome}>
          <h3>{dados.name}</h3>
        </div>
        <div className={styleCard.company}>
          <span>
            <GoBriefcase />
          </span>
          <span>{dados.company}</span>
        </div>
        <div className={styleCard.biografia}>
          <span>
            <GoDeviceDesktop />
          </span>
          <span>{dados.bio}</span>
        </div>
        <div className={styleCard.containerBotoes}>
          <Link to={"/trabalhos"}>
            <Buttons valor={"Work"} />
          </Link>

          <Link to={"/contato"}>
            <Buttons valor={"Contact"} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Perfil;
