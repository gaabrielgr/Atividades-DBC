import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import { matchPath, useLocation } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import api from "../api";

const CreateUser = () => {
  const [attUserList, setAttUserList] = useState({});
  const [changeButton, setChangeButton] = useState(true);
  const location = useLocation();
  const idUserAtt = location.pathname.split("/create-user/")[1];

  const notify = () => {
    toast.success("Usuário cadastrado com sucesso !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const notifyAtt = () => {
    toast.info("Usuário atualizado com sucesso !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  async function CreateNewUser(values) {
    try {
      const { data } = await api.post("/pessoa", values);
      console.log(data);
      setChangeButton(true);
    } catch (error) {
      console.log(error);
    }
  }
  async function attUser(values) {
    /*  const user = {
      cpf: values.cpf,
      dataNascimento: values.dataNascimento,
      email: values.email,
      nome: values.nome,
    }; */

    try {
      const { data } = await api.put(`/pessoa/${idUserAtt}`, values);
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
      setChangeButton(false);
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

  return (
    <Formik
      initialValues={{
        cpf: "",
        dataNascimento: "",
        email: "",
        nome: "",
      }}
      onSubmit={async (values) => {
        if (changeButton) {
          CreateNewUser(values);
        } else {
          attUser(values);
        }
      }}
    >
      <Form>
        <label htmlFor="nome">Nome</label>
        <Field
          id="nome"
          name="nome"
          placeholder="Digite seu nome: "
          value={attUserList.nome}
        />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="email"
          type="email"
          value={attUserList.email}
        />

        <label htmlFor="dataNascimento">Data de nascimento</label>
        <Field
          id="dataNascimento"
          name="dataNascimento"
          placeholder="00/00/0000"
          value={attUserList.dataNascimento}
        />
        <label htmlFor="cpf">CPF</label>
        <Field
          id="cpf"
          name="cpf"
          value={attUserList.cpf}
          placeholder="Digite seu CPF: "
        />
        {changeButton ? (
          <button onClick={notify} type="submit">
            Cadastrar
          </button>
        ) : (
          <button onClick={notifyAtt} type="submit">
            Atualizar
          </button>
        )}

        <ToastContainer />
      </Form>
    </Formik>
  );
};

export default CreateUser;
