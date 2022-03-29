import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Users from "./pages/Users";
import AuthenticatorProvider from "./contexts/ContextAuthenticator";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthenticatorProvider>
          <Routes>
            <Route path={"/"} element={<Login />} />
            <Route path={"/users"} element={<Users />} />
          </Routes>
        </AuthenticatorProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
