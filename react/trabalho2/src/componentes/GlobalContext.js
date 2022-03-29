import React from "react";
export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [nome, setNome] = React.useState("");
  const [id, setId] = React.useState(1);
  const [email, setEmail] = React.useState("");
  const [profissao, setProfissao] = React.useState("");
  const [listaTrab, setListaTrab] = React.useState([]);

  const limparFormulario = () => {
    setNome("");
    setEmail("");
    setProfissao("");
  };

  const CadastrarUsuario = (event) => {
    event.preventDefault();

    const trabalhador = {
      id: id,
      nome: nome,
      profissao: profissao,
      email: email,
    };
    setId(id + 1);
    setListaTrab([...listaTrab, trabalhador]);
    document.querySelector("#login").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#profissao").value = "";
    limparFormulario();
  };

  const removerTrabalhador = (id) => {
    const listaAtualizadaTrabalhador = listaTrab.filter(
      (trabalhador) => trabalhador.id !== id
    );
    setListaTrab(listaAtualizadaTrabalhador);
  };

  const alterarTrabalhador = (id, nome, email, profissao) => {
    const novoNome = (document.querySelector("#login").value = nome);
    const novoEmail = (document.querySelector("#email").value = email);
    const novaProfissao = (document.querySelector("#profissao").value =
      profissao);

    setNome(novoNome);
    setEmail(novoEmail);
    setProfissao(novaProfissao);
    setId(id);

    const listaAtualizadaTrabalhador = listaTrab.filter(
      (trabalhador) => trabalhador.id !== id
    );
    setListaTrab(listaAtualizadaTrabalhador);
  };
  return (
    <GlobalContext.Provider
      value={{
        nome,
        setNome,
        profissao,
        setProfissao,
        id,
        setId,
        email,
        setEmail,
        listaTrab,
        setListaTrab,
        CadastrarUsuario,
        removerTrabalhador,
        alterarTrabalhador,
        limparFormulario,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
