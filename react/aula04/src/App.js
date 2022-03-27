import "./App.css";
import { Counter } from "./componentes/Counter";
import { Mirror } from "./componentes/Mirror";
import Name from "./componentes/Name";
import CountProvider from "./context/CountContext";
import NameProvider from "./context/NameContext";
function App() {
  return (
    <div className="App">
      <NameProvider>
        <CountProvider>
          <Name />
          <Counter />
          <hr></hr>
          <Mirror />
        </CountProvider>
      </NameProvider>
    </div>
  );
}

export default App;
