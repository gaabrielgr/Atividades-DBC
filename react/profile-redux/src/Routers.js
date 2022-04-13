import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { apiAuth } from "./api";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import { isAuth } from "./store/actions/AuthActions";
import { connect } from "react-redux";

const Routers = ({ auth, dispatch }) => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      apiAuth.defaults.headers.common["Authorization"] = token;
      isAuth(dispatch);
    }
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authReducer.auth,
});
export default connect(mapStateToProps)(Routers);
