import React from "react";
import { useContext } from "react";
import { Formik, Field, Form, withFormik, ErrorMessage } from "formik";
import { ContextAuthenticator } from "../contexts/ContextAuthenticator";
import styleForm from "../components/Login.module.css";

const Login = () => {
  const { handleLogin } = useContext(ContextAuthenticator);

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
            handleLogin(values);
          }}
        >
          <Form className={styleForm.formulario}>
            <label htmlFor="usuario">Usuário</label>
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
