import { apiAuth } from "../../api";

export const handleLogin = async (values, dispatch, navigate) => {
  try {
    const { data } = await apiAuth.post("/auth", values);
    const logado = {
      type: "SET_LOGIN",
      token: data,
      auth: true,
    };
    apiAuth.defaults.headers.common["Authorization"] = data;
    localStorage.setItem("token", data);
    dispatch(logado);
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const handleLogout = (dispatch, navigate) => {
  const deslogar = {
    type: "SET_LOGOUT",
    token: "",
    auth: false,
  };
  localStorage.removeItem("token");
  dispatch(deslogar);
  navigate("/login");
};

export const isAuth = (dispatch) => {
  const auth = {
    type: "SET_AUTH",
    auth: true,
  };
  dispatch(auth);
};
