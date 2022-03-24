import React from "react";
import axios from "axios";
import { Dados } from "./components/Dados";
import styleApp from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contato } from "./pages/Contato";
import { Trabalhos } from "./pages/Trabalhos";

function App() {
  const [dados, setDados] = React.useState(null);
  let usuario = "gaabrielgr";

  React.useEffect(() => {
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
    getDados();
  }, []);
  return (
    <div className={styleApp.main}>
      <BrowserRouter>
        {dados && <Dados informacoes={dados} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trabalhos" element={<Trabalhos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
