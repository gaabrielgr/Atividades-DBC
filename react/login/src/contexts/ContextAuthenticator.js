import { createContext, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
export const ContextAuthenticator = createContext();

function AuthenticatorProvider({ children }) {
  const [key, setKey] = useState("");
  const [userLogin, setUserLogin] = useState(false);
  const navigatePage = useNavigate();
  async function handleLogin(values) {
    try {
      const { data } = await api.post("/auth", values);
      setKey(data);
      localStorage.setItem("key", JSON.stringify(data));
      setUserLogin(true);
      //vai levar para outra pagina após logar
      navigatePage("/users");
    } catch (error) {
      console.log(error);
    }
  }

  /*   const validar = ()=> {
    // PESQUISAR SOBRE  
    //SCHEMA
    //YUP
    //ERROS FORMIK
  } */

  const deslogar = () => {
    localStorage.removeItem("key");
    navigatePage("/");
    setUserLogin(false);
  };
  return (
    <ContextAuthenticator.Provider
      value={{ handleLogin, key, userLogin, deslogar }}
    >
      {children}
    </ContextAuthenticator.Provider>
  );
}

export default AuthenticatorProvider;
