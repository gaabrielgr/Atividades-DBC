import React from "react";
import Inputs from "./Inputs";
import BotaoEnviar from "./BotaoEnviar";
import Style from "./Formulario.module.css";
import Titulo from "../Titulo";
import { GlobalContext } from "../GlobalContext";

export const Formulario = () => {
  const {
    nome,
    setNome,
    profissao,
    setProfissao,
    email,
    setEmail,
    CadastrarUsuario,
  } = React.useContext(GlobalContext);
  const limparFormulario = () => {
    setNome("");
    setEmail("");
    setProfissao("");
  };
  const validarNome = /^[a-z ,.'-]+$/i;
  const validarEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+?$/i;
  const validarProfissao = /^[a-z ,.'-]+$/i;
  const validar = (event) => {
    event.preventDefault();

    validarNome.test(nome) &&
    validarEmail.test(email) &&
    validarProfissao.test(profissao)
      ? CadastrarUsuario(event)
      : alert(
          "Verifique se os campos foram preenchidos corretamente",
          limparFormulario()
        );
  };

  return (
    <form id="formulario" onSubmit={validar} className={Style.formulario}>
      <Titulo titulo={"Faça o seu cadastro"} />

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
        tipo={"text"}
        placeholderLogin={"Exemplo: gabriel"}
        value={email}
        setValue={setEmail}
      />

      <Inputs
        htmlFor={"profissao"}
        textoLabel={"Insira sua profissão"}
        forIdLogin={"profissao"}
        tipo={"text"}
        placeholderLogin={"Exemplo: gabriel"}
        value={profissao}
        setValue={setProfissao}
      />

      <BotaoEnviar id={"botaoEnviar"} valor={"Cadastrar"} />
    </form>
  );
};
