import React, { useContext } from "react";
import styleUser from "../components/User.module.css";
import { ContextAuthenticator } from "../contexts/ContextAuthenticator";

const Users = () => {
  const { deslogar, userLogin } = useContext(ContextAuthenticator);

  return (
    <div>
      <h1>Bem vindo!</h1>
      {userLogin === true ? (
        <button className={styleUser.botaoSair} onClick={deslogar}>
          Sair
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Users;
