import Inputs from "./Inputs";
import Selects from "./Selects";
import TextArea from "./TextArea";
import Titulo from "../ContainerTitulo";
import BotaoEnviar from "./BotaoEnviar";
import Style from "./Contato.module.css";
import { useState } from "react";

const Contato = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const CadastrarUsuario = (e) => {
    alert(
      `Seu nome informado é "${nome}"\nE seu email é "${email}"\nSua mensagem logo sera respondida, obrigado.`
    );
    e.preventDefault();
  };

  return (
    <section className={Style.containerFormulario}>
      <Titulo titulo="Fale Conosco!" />
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
        <Selects
          forIdPergunta={"pergunta"}
          texto={"Qual o motivo da pergunta?"}
          pergunta="HTML é easy demais"
        />
        <TextArea
          forIdLogin={"textArea"}
          textoLabel={"Sua mensagem"}
          linhas={30}
          colunas={10}
        />
        <BotaoEnviar valor={"Enviar"} />
      </form>
    </section>
  );
};

export default Contato;

/* 
 return (
    <>
      <h1>Meu Cadastro</h1>
      <form onSubmit={CadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" placeholder="Digite o seu nome" onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input type="password" placeholder="Digite a sua senha" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </>
  )
}



*/
