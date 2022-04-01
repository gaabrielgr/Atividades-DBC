import React, { useState } from "react";
import { useContext } from "react";
import { Formik, Field, Form, withFormik, ErrorMessage } from "formik";
import { ContextAuthenticator } from "../contexts/ContextAuthenticator";
import styleForm from "../components/Login.module.css";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const { handleLogin } = useContext(ContextAuthenticator);
  const [error, setError] = useState("");
  return (
    <div className={styleForm.formularioContainer}>
      <div className={styleForm.div}>
        <h1>Faça login</h1>
        <Formik
          initialValues={{
            usuario: "",
            senha: "",
          }}
          onSubmit={async (values) => {
            if (values.usuario === "admin" && values.senha !== "123") {
              setError("");
              setError("senha invalida");
            } else if (values.usuario !== "admin" && values.senha === "123") {
              setError("");
              setError("Usuário não cadastrado em nosso sistema");
            } else if (values.usuario === "" || values.senha === "") {
              setError("");
              setError("Por favor, preencha os campos corretamente!");
            } else if (values.usuario === "admin" && values.senha === "123") {
              handleLogin(values);
              setError("");
            } else {
            }
          }}
        >
          <Form className={styleForm.formulario}>
            <label htmlFor="usuario">Usuário</label>
            {error && <p className={styleForm.error}>{error}</p>}
            <Field
              id="usuario"
              name="usuario"
              placeholder="Digite seu usuário"
            />

            <label htmlFor="senha">Senha</label>
            <Field
              placeholder="Digite sua senha"
              id="senha"
              name="senha"
              type="password"
            />

            <button type="submit">Logar</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
