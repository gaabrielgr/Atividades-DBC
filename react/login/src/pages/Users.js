import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { ContextAuthenticator } from "../contexts/ContextAuthenticator";
import styleItemListaUsuario from "../components/User.module.css";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { ContextUser } from "../contexts/ContextUser";

import api from "../api";

const Users = () => {
  const navigate = useNavigate();
  const { logged } = useContext(ContextAuthenticator);
  const { getUsers, loading, error, listUser } = useContext(ContextUser);

  function setup() {
    logged();
    getUsers();
  }
  useEffect(() => {
    setup();
  }, []);

  const handleDelete = (idPessoa) => {
    confirmAlert({
      title: "Confirmar",
      message: "Realmente deseja excluir o usuário?",
      buttons: [
        {
          label: "Sim",
          onClick: async () => {
            try {
              const response = await api.delete(`/pessoa/${idPessoa}`);

              console.log(response);
              alert("Usuário deletado!");
            } catch (error) {
              alert("Não foi possível deletar o usuário!");
              console.log(error);
            }
          },
        },
        {
          label: "Não",
        },
      ],
    });
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return (
      <div>
        <h1>Algo deu errado</h1>
        <Error />
      </div>
    );
  }

  return (
    <div className={styleItemListaUsuario.divPaiUl}>
      <h1>Lista usuários</h1>
      <Link to="/create-user">Cadastrar Usuário</Link>
      <ul className={styleItemListaUsuario.ul}>
        {listUser.map(
          ({ idPessoa, nome, dataNascimento, cpf, email, contatosList }) => (
            <li className={styleItemListaUsuario.li} key={idPessoa}>
              <div className={styleItemListaUsuario.divContainerLista}>
                <p>Nome: {nome}</p>
                <p>Data de nascimento: {dataNascimento}</p>
                <p>CPF: {cpf}</p>
                <p>Email: {email}</p>
                <button onClick={() => handleDelete(idPessoa)}>Deletar</button>
                <button onClick={() => navigate(`/create-user/${idPessoa}`)}>
                  Atualizar
                </button>
                <>
                  {contatosList.map(
                    ({ idContato, numero, descricao, tipoContato }) => (
                      <div
                        className={styleItemListaUsuario.divNumeroContato}
                        key={idContato}
                      >
                        <p>Número celular: {numero} </p>
                        <p>
                          Telefone para contato: {tipoContato.toLowerCase()}
                        </p>
                        <p className={styleItemListaUsuario.p}>
                          {descricao.includes("trabalho")
                            ? "Telefone para trabalho"
                            : "Telefone possui Whatsapp"}
                        </p>
                      </div>
                    )
                  )}
                </>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Users;
