import React from "react";
import styleCard from "./Perfil.module.css";
import { GoBriefcase } from "react-icons/go";
import { GoDeviceDesktop } from "react-icons/go";
import { Buttons } from "./Buttons";
import { Link } from "react-router-dom";

const Perfil = ({ nome }) => {
  return (
    <section className={styleCard.containerCard}>
      <img className={styleCard.imagemLogin} src={nome.avatar_url} alt="" />
      <div className={styleCard.infoPessoal}>
        <div className={styleCard.nome}>
          <h3>{nome.name}</h3>
        </div>
        <div className={styleCard.company}>
          <span>
            <GoBriefcase />
          </span>
          <span>{nome.company}</span>
        </div>
        <div className={styleCard.biografia}>
          <span>
            <GoDeviceDesktop />
          </span>
          <span>{nome.bio}</span>
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
