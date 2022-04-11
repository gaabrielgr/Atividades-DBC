import { useContext, useEffect } from "react";
import { AddressContext } from "../../context/AddressContext";
import { UserContext } from "../../context/UserContext";
import {
  ContainerHome,
  Card,
  CardTitle,
  ContainerCard,
  TotalCadastrados,
  ContainerCadastrados,
} from "./Home.styles";
import api from "../../api";

const Home = () => {
  const { address, getListAddress } = useContext<any>(AddressContext);
  const { getUsers, person } = useContext<any>(UserContext);

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      api.defaults.headers.common["authorization"] = token;
    }
    getUsers();
    getListAddress();
  }, []);

  return (
    <ContainerHome>
      <ContainerCard>
        <ContainerCadastrados>
          <CardTitle>Usuários</CardTitle>
          <TotalCadastrados>{`Total cadastrados ${person.length}`}</TotalCadastrados>
        </ContainerCadastrados>

        <ContainerCadastrados>
          <CardTitle>Endereço</CardTitle>
          <TotalCadastrados>{`Total cadastrados ${address.length}`}</TotalCadastrados>
        </ContainerCadastrados>
      </ContainerCard>
    </ContainerHome>
  );
};

export default Home;
