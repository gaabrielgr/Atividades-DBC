import { useState } from "react";
import List from "./components/List";
import "./App.css";
import { PeopleDTO } from "./components/models/PeopleDTO";
function App() {
  const [people, setPeople] = useState<PeopleDTO["people"]>([
    {
      name: "Gabriel",
      age: 10,
    },
  ]);
  return (
    <div className="App">
      <h1>Melhor turma</h1>
      <List people={people} />
    </div>
  );
}

export default App;
