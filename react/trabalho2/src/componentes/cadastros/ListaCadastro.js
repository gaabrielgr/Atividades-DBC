import React from "react";
import { GlobalContext } from "../GlobalContext";
import styleLista from "./ListaCadastro.module.css";

export const ListaCadastro = () => {
  const { listaTrab, removerTrabalhador, alterarTrabalhador } =
    React.useContext(GlobalContext);
  return (
    <div className={styleLista.containerLista}>
      <ul className={styleLista.ul}>
        {listaTrab.length > 0 ? (
          listaTrab.map(({ nome, id, profissao, email }) => (
            <li className={styleLista.li} key={id}>
              <div className={styleLista.itemListaTrabalhador}>
                <p>Nome: {nome}</p>
                <p>Profissão: {profissao}</p>
                <p>Email: {email}</p>
                <div className={styleLista.botoes}>
                  <button onClick={() => removerTrabalhador(id)}>
                    Remover
                  </button>
                  <button
                    onClick={() =>
                      alterarTrabalhador(id, nome, email, profissao)
                    }
                  >
                    Atualizar
                  </button>
                </div>
              </div>
            </li>
          ))
        ) : (
          <h1>Nenhum trabalhador cadastrado</h1>
        )}
      </ul>
    </div>
  );
};
