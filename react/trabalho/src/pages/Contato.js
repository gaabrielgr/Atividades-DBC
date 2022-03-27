import Inputs from "../components/contato/Inputs";
import TextArea from "../components/contato/TextArea";
import BotaoEnviar from "../components/contato/BotaoEnviar";
import Titulo from "../components/Titulo";
import { Link } from "react-router-dom";
import { Buttons } from "../components/Cards/Buttons";

import Style from "../components/contato/Contato.module.css";
import { useState } from "react";

const Contato = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const CadastrarUsuario = (e) => {
    alert(
      `Obrigado pelo contato ${nome}\nEm seguida irei te enviar um email para  "${email}"\nobrigado!`
    );
    e.preventDefault();
  };

  return (
    <section className={Style.containerFormulario}>
      <Titulo titulo="Envie-me um email" />
      <form
        id="formulario"
        onSubmit={CadastrarUsuario}
        className={Style.formulario}
      >
        <Inputs
          htmlFor={"login"}
          textoLabel={"Insira seu nome"}
          forIdLogin={"login"}
          tipo={"text"}
          placeholderLogin={"Exemplo: gabriel"}
          value={nome}
          setValue={setNome}
        />
        <Inputs
          htmlFor={"email"}
          textoLabel={"Insira seu email"}
          forIdLogin={"email"}
          tipo={"email"}
          placeholderLogin={"Exemplo: gabriel@gmail.com"}
          value={email}
          setValue={setEmail}
        />

        <TextArea
          forIdLogin={"textArea"}
          textoLabel={"Sua mensagem"}
          linhas={30}
          colunas={10}
          placeholderArea={"Digite sua mensagem..."}
        />
        <BotaoEnviar valor={"Enviar"} />
      </form>
      <Link to={"/"}>
        <Buttons valor={"Voltar"} />
      </Link>
    </section>
  );
};

export default Contato;
