import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Users from "./pages/Users";
import AuthenticatorProvider from "./contexts/ContextAuthenticator";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthenticatorProvider>
          <Header />
          <Routes>
            <Route exact path={"/"} element={<Home />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/users"} element={<Users />} />
          </Routes>
          <Footer />
        </AuthenticatorProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
