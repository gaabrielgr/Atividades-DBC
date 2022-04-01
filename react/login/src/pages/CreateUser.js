import React, { useEffect, useState, useContext } from "react";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useLocation } from "react-router-dom";
import styleCreateFormulario from "../components/CreateUser.module.css";
import api from "../api";
import { ContextAuthenticator } from "../contexts/ContextAuthenticator";
export default function CreateUser() {
  const location = useLocation();
  const navigate = useNavigate();
  const [update, setUpdate] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const { logged } = useContext(ContextAuthenticator);
  useEffect(() => {
    logged();
  }, []);
  let idPerson = location.pathname.substring(13);

  const mensagemSucesso = (texto) => {
    toast.success(texto, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const mensagemErro = (texto) => {
    toast.error(texto, {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const getUserId = async () => {
    try {
      const { data } = await api.get(`pessoa/{idPessoa}?idPessoa=${idPerson}`);
      let formatDate = moment(data.dataNascimento).format("DD/MM/YYYY");

      setNome(data.nome);
      setEmail(data.email);
      mascaraData(formatDate);
      mascaraCpf(data.cpf);
    } catch (error) {
      console.log(error);
    }
  };

  const attUser = async (e) => {
    e.preventDefault();

    let formatDate = dataNascimento;
    formatDate = moment(formatDate, "DD/MM/YYYY").format("YYYY-MM-DD");

    let formatCpf = cpf.split(".").join("");
    let newCpf = formatCpf.replace("-", "");

    const newPerson = {
      nome: nome,
      email: email,
      dataNascimento: formatDate,
      cpf: newCpf,
    };
    try {
      const { data } = await api.put(`/pessoa/${idPerson}`, newPerson);
      setTimeout(() => {
        navigate("/users");
      }, 500);
    } catch (error) {
      alert("Falha ao atualizar o usuário!");
      console.log("error");
    }
  };

  useEffect(() => {
    if (idPerson) {
      getUserId();
      setUpdate(true);
    }
  }, []);

  const mascaraCpf = (value) => {
    return setCpf(
      value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1")
    );
  };

  const mascaraData = (value) => {
    return setDataNascimento(
      value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "$1/$2")
        .replace(/(\d{2})(\d)/, "$1/$2")
        .replace(/(\d{4})(\d)/, "$1")
    );
  };

  async function createNewUser(e) {
    e.preventDefault();
    let formatData = dataNascimento;
    formatData = moment(formatData, "DD/MM/YYYY").format("YYYY-MM-DD");

    let formatCpf = cpf.split(".").join("");
    let newCpf = formatCpf.replace("-", "");

    const newPerson = {
      nome: nome,
      dataNascimento: formatData,
      email: email,
      cpf: newCpf,
    };
    try {
      const { data } = await api.post("/pessoa", newPerson);
      console.log(data);
      mensagemSucesso("Cadastrado com sucesso!");
      setTimeout(() => {
        navigate("/users");
      }, 6000);
    } catch (error) {
      mensagemErro("Não foi possível cadastrar!");
    }
  }

  return (
    <div className={styleCreateFormulario.containerFormulario}>
      <h1>Faça o seu cadastro!</h1>
      <form
        className={styleCreateFormulario.formulario}
        onSubmit={(e) => (update ? attUser(e) : createNewUser(e))}
      >
        <label htmlFor="nome">Nome: </label>
        <input
          value={nome}
          id="nome"
          name="nome"
          placeholder="Digite seu Nome:"
          onChange={(e) => setNome(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          value={email}
          id="email"
          type="email"
          name="email"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="dataNascimento">Data de Nascimento</label>
        <input
          value={dataNascimento}
          id="dataNascimento"
          name="dataNascimento"
          placeholder="Digite sua data de nascimento"
          onChange={(e) => mascaraData(e.target.value)}
        />

        <label htmlFor="cpf">Cpf</label>
        <input
          id="cpf"
          name="cpf"
          placeholder="digite seu cpf"
          value={cpf}
          onChange={(e) => mascaraCpf(e.target.value)}
        />

        {update ? (
          <button type="submit">Atualizar</button>
        ) : (
          <div>
            <button type="submit">Cadastrar</button>
            <ToastContainer />
          </div>
        )}
      </form>
    </div>
  );
}
