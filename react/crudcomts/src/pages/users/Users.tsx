import { useContext, useEffect, useState } from "react";
import api from "../../api";
import { UserContext } from "../../context/UserContext";
import {
  Tabela,
  TrTabela,
  TdTabela,
  TheadTabela,
  BackGroundTabela,
  TitleUsers,
} from "./User.styles";

function Users() {
  const { getUsers, person } = useContext<any>(UserContext);
  useEffect(() => {
    const token = localStorage.getItem("key");
    if (token) {
      api.defaults.headers.common["authorization"] = token;
    }
    getUsers();
  }, []);

  return (
    <BackGroundTabela>
      <TitleUsers>Users</TitleUsers>
      <Tabela>
        <TheadTabela>
          <TrTabela>
            <th>nome</th>
            <th>email</th>
            <th>cpf</th>
            <th>Data de Nascimento</th>
          </TrTabela>
        </TheadTabela>
        <tbody>
          {person.map((user: string | any) => (
            <TrTabela key={user.idPessoa}>
              <TdTabela>{user.nome}</TdTabela>
              <TdTabela>{user.email}</TdTabela>
              <TdTabela>{user.cpf}</TdTabela>
              <TdTabela>{user.dataNascimento}</TdTabela>
            </TrTabela>
          ))}
        </tbody>
      </Tabela>
    </BackGroundTabela>
  );
}

export default Users;
