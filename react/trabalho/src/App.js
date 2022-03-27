import React from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styleApp from "./App.module.css";
import { Home } from "./pages/Home";
import Contato from "./pages/Contato.js";
import { Trabalhos } from "./pages/Trabalhos";
import { TratamentoErro } from "./components/TratamentoErro";

function App() {
  const [dados, setDados] = React.useState({});
  const [repo, setRepo] = React.useState([]);
  const usuario = "gaabrielgr";

  const getDados = async () => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${usuario}`
      );
      setDados(data);
    } catch (error) {
      console.log("Falha ao fazer a requisição", error);
    }
  };
  const getDadosRepo = async () => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/gaabrielgr/repos`
      );
      setRepo(data);
    } catch (error) {
      console.log("Falha ao fazer a requisição", error);
    }
  };

  React.useEffect(() => {
    getDadosRepo();
    getDados();
  }, []);
  const verificarObjeto = () => {
    if (Object.keys(dados).length) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className={styleApp.main}>
      {verificarObjeto() ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home dados={dados} />} />
            <Route
              path="/trabalhos"
              element={<Trabalhos repositorio={repo} />}
            />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <TratamentoErro />
      )}
    </div>
  );
}

export default App;
