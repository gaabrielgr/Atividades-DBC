import React from "react";
import axios from "axios";
import { Dados } from "./components/Dados";

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
  return <div>{dados && <Dados informacoes={dados} />} </div>;
}

export default App;
