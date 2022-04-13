import React, { useEffect } from "react";
import { useFormik } from "formik";
import { connect } from "react-redux";
import { handleLogin } from "../../store/actions/AuthActions";
import { useNavigate } from "react-router-dom";
const Login = ({ auth, dispatch }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);
  const formik = useFormik({
    initialValues: {
      usuario: "",
      senha: "",
    },
    onSubmit: (values) => {
      handleLogin(values, dispatch, navigate);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="usuario">Usuário</label>
      <input
        id="usuario"
        name="usuario"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.usuario}
      />
      <label htmlFor="senha">Senha</label>
      <input
        id="senha"
        name="senha"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.senha}
      />

      <button type="submit">Submit</button>
    </form>
  );
};
const mapStateToProps = (state) => ({
  auth: state.authReducer.auth,
});
export default connect(mapStateToProps)(Login);
