import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import { useLocation } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import api from "../api";

const CreateUser = () => {
  const [attUserList, setAttUserList] = useState("");
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const idUserAtt = location.pathname.split("/create-user/")[1];
  const notify = () => {
    toast.success("Usuário cadastrado com sucesso !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  async function CreateNewUser(values) {
    console.log(values);
    try {
      const { data } = await api.post("/pessoa", values);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function HandleGetUserAtt() {
    try {
      const { data } = await api.get(
        `/pessoa/{idPessoa}?idPessoa=${idUserAtt}`
      );
      setAttUserList(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (idUserAtt.length > 0) {
      HandleGetUserAtt();
      return;
    }
  }, []);
  console.log(attUserList);
  return (
    <Formik
      initialValues={{
        cpf: "",
        dataNascimento: "",
        email: "",
        nome: "",
      }}
      onSubmit={async (values) => {
        CreateNewUser(values);
      }}
    >
      <Form>
        <label htmlFor="nome">Nome</label>
        <Field id="nome" name="nome" placeholder="Digite seu nome: " />

        <label htmlFor="email">Email</label>
        <Field id="email" name="email" placeholder="email" type="email" />

        <label htmlFor="dataNascimento">Data de nascimento</label>
        <Field
          id="dataNascimento"
          name="dataNascimento"
          placeholder="00/00/0000"
        />
        <label htmlFor="cpf">CPF</label>
        <Field id="cpf" name="cpf" placeholder="Digite seu CPF: " />
        <button onClick={notify} type="submit">
          Cadastrar
        </button>
        <ToastContainer />
      </Form>
    </Formik>
  );
};

export default CreateUser;
