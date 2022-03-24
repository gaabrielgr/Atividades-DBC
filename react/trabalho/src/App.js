import React from "react";
import axios from "axios";
import { Dados } from "./components/Dados";
import styleApp from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contato } from "./pages/Contato";
import { Trabalhos } from "./pages/Trabalhos";
import { TratamentoErro } from "./components/TratamentoErro";

function App() {
  const [dados, setDados] = React.useState({});
  const usuario = "gaabrielgr";

  const getDados = async () => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${usuario}`
      );
      setDados(data);
    } catch (error) {
      console.log("Falha ao puxar as informações", error);
    }
  };
  React.useEffect(() => {
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
            <Route path="/trabalhos" element={<Trabalhos />} />
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