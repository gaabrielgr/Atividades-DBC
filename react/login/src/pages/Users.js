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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const mensagemSucesso = (texto) => {
    toast.success(texto, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const mensagemErro = (texto) => {
    toast.error(texto, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

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
              getUsers();
              console.log(response);
              mensagemSucesso("Usuário deletado com sucesso !");
            } catch (error) {
              mensagemErro("Erro ao deletar o usuário");
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
      <div className={styleItemListaUsuario.tituloLista}>
        <Link to="/create-user">Cadastrar Novo Usuário</Link>
      </div>
      <ul className={styleItemListaUsuario.ul}>
        {listUser.map(
          ({ idPessoa, nome, dataNascimento, cpf, email, contatosList }) => (
            <li className={styleItemListaUsuario.li} key={idPessoa}>
              <div className={styleItemListaUsuario.divContainerLista}>
                <p>Nome: {nome}</p>
                <p>Data de nascimento: {dataNascimento}</p>
                <p>CPF: {cpf}</p>
                <p>Email: {email}</p>
                {/*
                <div>
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
                </div> */}
              </div>
              <div className={styleItemListaUsuario.botao}>
                <button onClick={() => handleDelete(idPessoa)}>Deletar</button>
                <button onClick={() => navigate(`/create-user/${idPessoa}`)}>
                  Atualizar
                </button>
              </div>
            </li>
          )
        )}
      </ul>
      <ToastContainer />;
    </div>
  );
};

export default Users;
