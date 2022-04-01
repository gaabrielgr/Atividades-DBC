import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import Loading from "../components/Loading";
import Error from "../components/Error";
export const ContextAuthenticator = createContext();

function AuthenticatorProvider({ children }) {
  const [key, setKey] = useState("");
  const navigatePage = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getToken = localStorage.getItem("key");
    setLoading(false);
    if (getToken) {
      api.defaults.headers.common["Authorization"] = getToken;
    }
  }, []);

  async function handleLogin(values) {
    try {
      const { data } = await api.post("/auth", values);
      setKey(data);
      localStorage.setItem("key", data);
      api.defaults.headers.common["Authorization"] = data;
      navigatePage("/users");
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  }
  const deslogar = () => {
    localStorage.removeItem("key");
    navigatePage("/login");
  };
  function logged() {
    const token = localStorage.getItem("key");
    if (!token) {
      navigatePage("/login");
    }
  }
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return (
      <div>
        <Error />;
      </div>
    );
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
