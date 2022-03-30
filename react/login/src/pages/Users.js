import React, { useContext, useEffect, useState } from "react";
import { ContextAuthenticator } from "../contexts/ContextAuthenticator";
import api from "../api";
import styleItemListaUsuario from "../components/User.module.css";
const Users = () => {
  const { logged } = useContext(ContextAuthenticator);
  const [listUser, setListUser] = useState([]);
  function setup() {
    logged();
    getUsers();
  }
  async function getUsers() {
    try {
      const { data } = await api.get("/pessoa");
      setListUser(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    setup();
  }, []);
  return (
    <ul className={styleItemListaUsuario.ul}>
      {listUser.map(
        ({ idPessoa, nome, dataNascimento, cpf, email, contatosList }) => (
          <li className={styleItemListaUsuario.li} key={idPessoa}>
            <div>
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
                      <p>Telefone para contato: {tipoContato.toLowerCase()}</p>
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
  );
};

export default Users;
