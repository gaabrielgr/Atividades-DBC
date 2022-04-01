import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Users from "./pages/Users";
import AuthenticatorProvider from "./contexts/ContextAuthenticator";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Address from "./pages/Address";
import CreateUser from "./pages/CreateUser";
import UserProvider from "./contexts/ContextUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthenticatorProvider>
          <UserProvider>
            <Header />
            <Routes>
              <Route exact path={"/"} element={<Home />} />
              <Route path={"/login"} element={<Login />} />
              <Route path={"/users"} element={<Users />} />
              <Route path={"/address"} element={<Address />} />
              {/* <Route path={"/create-user"} element={<CreateUser />} /> */}
              <Route path="/create-user" element={<CreateUser />}>
                <Route path=":id" element={<CreateUser />} />
              </Route>
            </Routes>
            <Footer />
          </UserProvider>
        </AuthenticatorProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
