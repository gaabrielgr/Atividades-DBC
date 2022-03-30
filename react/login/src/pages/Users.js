import React, { useContext, useEffect, useState } from "react";
import { ContextAuthenticator } from "../contexts/ContextAuthenticator";
import api from "../api";
import styleItemListaUsuario from "../components/User.module.css";
import Loading from "../components/Loading";
import Error from "../components/Error";
const Users = () => {
  const { logged } = useContext(ContextAuthenticator);
  const [listUser, setListUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  function setup() {
    logged();
    getUsers();
  }
  async function getUsers() {
    try {
      const { data } = await api.get("/pessoa");
      setListUser(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    setup();
  }, []);

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

      <ul className={styleItemListaUsuario.ul}>
        {listUser.map(
          ({ idPessoa, nome, dataNascimento, cpf, email, contatosList }) => (
            <li className={styleItemListaUsuario.li} key={idPessoa}>
              <div className={styleItemListaUsuario.divContainerLista}>
                <p>Nome: {nome}</p>
                <p>Data de nascimento: {dataNascimento}</p>
                <p>CPF: {cpf}</p>
                <p>Email: {email}</p>
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
