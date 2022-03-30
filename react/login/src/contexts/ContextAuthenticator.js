import { createContext, useState, useEffect } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
export const ContextAuthenticator = createContext();

function AuthenticatorProvider({ children }) {
  const [key, setKey] = useState("");
  const navigatePage = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getToken = localStorage.getItem("key");
    if (getToken) {
      api.defaults.headers.common["Authorization"] = getToken;
    }
    setLoading(false);
  }, []);

  async function handleLogin(values) {
    try {
      const { data } = await api.post("/auth", values);
      setKey(data);
      localStorage.setItem("key", data);
      api.defaults.headers.common["Authorization"] = data;
      navigatePage("/users");
    } catch (error) {
      console.log(error);
    }
  }
  const deslogar = () => {
    localStorage.removeItem("key");
    navigatePage("/");
  };
  function logged() {
    const token = localStorage.getItem("key");
    if (!token) {
      navigatePage("/login");
    }
  }
  if (loading) {
    return <h1>carregando</h1>;
  }
  return (
    <ContextAuthenticator.Provider
      value={{ handleLogin, key, deslogar, logged }}
    >
      {children}
    </ContextAuthenticator.Provider>
  );
}

export default AuthenticatorProvider;
