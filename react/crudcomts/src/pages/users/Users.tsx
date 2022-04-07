import { useContext, useEffect, useState } from "react";
import api from "../../api";
import { UserContext } from "../../context/UserContext";
import moment from "moment";
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
  const [cpf, setCpf] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("key");
    if (token) {
      api.defaults.headers.common["authorization"] = token;
    }
    getUsers();
  }, []);

  const mascaraCpf = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };
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
              <TdTabela>{mascaraCpf(user.cpf)}</TdTabela>
              <TdTabela>
                {moment(user.dataNascimento).format("DD/MM/YYYY")}
              </TdTabela>
            </TrTabela>
          ))}
        </tbody>
      </Tabela>
    </BackGroundTabela>
  );
}

export default Users;
