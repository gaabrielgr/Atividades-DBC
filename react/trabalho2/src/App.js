import "./App.css";
import { ListaCadastro } from "./componentes/cadastros/ListaCadastro";
import { Formulario } from "./componentes/formulario/Formulario";
import { GlobalContext } from "./componentes/GlobalContext";
import { GlobalStorage } from "./componentes/GlobalContext";

function App() {
  return (
    <div>
      <GlobalStorage>
        <Formulario />
        <ListaCadastro />
      </GlobalStorage>
    </div>
  );
}

export default App;
