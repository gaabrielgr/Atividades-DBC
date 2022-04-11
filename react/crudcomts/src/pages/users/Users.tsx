import { useContext, useEffect, useState } from "react";
import moment from "moment";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";
import { confirmAlert } from "react-confirm-alert";
import Notiflix from "notiflix";
import api from "../../api";
import { UserContext } from "../../context/UserContext";
import { CreatePessoaDTO } from "../../model/CreatePessoaDTO";
import { cpf } from "../../masks/Masks";
import "react-confirm-alert/src/react-confirm-alert.css";
import Loading from "../../components/loading/Loading";
import ErrorMsg from "../../components/error/ErrorMsg";

import {
  Tabela,
  TrTabela,
  ContainerForm,
  TdTabela,
  TheadTabela,
  BackGroundTabela,
  Input,
  TitleUsers,
  DivForm,
  Botao,
  ContainerUsers,
  AtualizarDeletar,
  MaskInput,
  Error,
  Label,
} from "./User.styles";
function Users() {
  const [createUsers, setCreateUsers] = useState<CreatePessoaDTO>();
  const { getUsers, person, loading, error } = useContext<any>(UserContext);
  const [idUser, setIdUser] = useState(0);
  const [editButton, setEditButton] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("key");
    if (token) {
      api.defaults.headers.common["authorization"] = token;
    }
    getUsers();
  }, []);

  async function CreateUsers(values: CreatePessoaDTO) {
    try {
      const cpf = values.cpf.replace(/\D/g, "");
      const date = moment(values.dataNascimento, "DD/MM/YYYY").format(
        "YYYY-MM-DD"
      );
      const userFormat = {
        nome: values.nome,
        cpf: cpf,
        dataNascimento: date,
        email: values.email,
      };
      const { data } = await api.post("/pessoa", userFormat);
      Notiflix.Notify.success("Contato criado com sucesso!", {
        timeout: 800,
      });
      getUsers();
      formikProps.resetForm();
    } catch (error) {
      console.log(error);
    }
  }

  const DeleteUsers = (idPessoa: number) => {
    try {
      confirmAlert({
        title: "Confirmar?",
        message: "Realmente deseja excluir o usuário?",
        buttons: [
          {
            label: "Yes",
            onClick: async () => {
              const { data } = await api.delete(`pessoa/${idPessoa}`);
              console.log(data);
              getUsers();
            },
          },
          {
            label: "Não",
            onClick: () => console.log("Não"),
          },
        ],
      });
    } catch (error) {}
  };
  const attUsers = async (id: number, setFieldValue: any) => {
    try {
      const { data } = await api.get(`/pessoa/{idPessoa}?idPessoa=${id}`);
      setFieldValue("nome", data.nome);
      setFieldValue(
        "dataNascimento",
        moment(data.dataNascimento).format("DD/MM/YYYY")
      );
      setFieldValue("email", data.email);
      setFieldValue("cpf", data.cpf);
      setIdUser(id);
      setEditButton(true);
    } catch (error) {
      console.log(error);
    }
  };

  const updateUsers = async (values: CreatePessoaDTO) => {
    const cpf = values.cpf.replace(/\D/g, "");
    const date = moment(values.dataNascimento, "DD/MM/YYYY").format(
      "YYYY-MM-DD"
    );

    try {
      const updateUser = {
        idPessoa: idUser,
        cpf: cpf,
        dataNascimento: date,
        email: formikProps.values.email,
        nome: formikProps.values.nome,
      };
      const { data } = await api.put(`/pessoa/${idUser}`, updateUser);
      setEditButton(false);
      getUsers();
      formikProps.resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [idUser]);
  function handleAtt(user: number, formi: any) {
    attUsers(user, formi);
    topPage();
  }
  function topPage() {
    return window.scrollTo(0, 0);
  }
  const formikProps = useFormik({
    initialValues: {
      nome: "",
      dataNascimento: "",
      email: "",
      cpf: "",
    },
    validationSchema: Yup.object().shape({
      nome: Yup.string()
        .required("O nome é obrigatório")
        .min(2, "Nome muito pequeno, insira no mínimo 4 caracteres")
        .max(100, "Nome muito grande, insira no máximo 100 caracteres"),

      dataNascimento: Yup.string().required(
        "A data de nascimento é obrigatória"
      ),

      email: Yup.string()
        .email("Coloque um e-mail válido!")
        .required("O email é obrigatório")
        .min(2, "O CEP precisa ter 8 números")
        .max(50, "O CEP precisar ter no máximo 8 números"),

      cpf: Yup.string().required("O cpf é obrigatório"),
    }),
    onSubmit: async (
      values: CreatePessoaDTO,
      { setSubmitting }: FormikHelpers<CreatePessoaDTO>
    ) => {
      if (idUser) {
        await updateUsers(values);
      } else {
        await CreateUsers(values);
      }
      console.log(values);
      setSubmitting(false);
    },
  });
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorMsg />;
  }
  return (
    <ContainerUsers>
      <ContainerForm onSubmit={formikProps.handleSubmit}>
        <DivForm>
          <Label htmlFor="nome">Nome</Label>
          <Input
            type="text"
            name="nome"
            placeholder="Digite seu nome"
            value={formikProps.values.nome}
            onChange={formikProps.handleChange}
          />
          {formikProps.errors.nome && formikProps.touched.nome ? (
            <Error>{formikProps.errors.nome}</Error>
          ) : null}
        </DivForm>

        <DivForm>
          <Label htmlFor="dataNascimento">Data de Nascimento</Label>
          <MaskInput
            mask="99/99/9999"
            type="text"
            name="dataNascimento"
            placeholder="Digite sua data de nascimento"
            value={formikProps.values.dataNascimento}
            onChange={formikProps.handleChange}
          />
        </DivForm>
        <DivForm>
          <Label htmlFor="bairro">Email</Label>
          <Input
            type="text"
            name="email"
            placeholder="Digite seu email"
            value={formikProps.values.email}
            onChange={formikProps.handleChange}
          />
          {formikProps.errors.email && formikProps.touched.email ? (
            <Error>{formikProps.errors.email}</Error>
          ) : null}
        </DivForm>
        <DivForm>
          <Label htmlFor="cpf">CPF</Label>
          <MaskInput
            mask="999.999.999-99  "
            type="text"
            name="cpf"
            placeholder="Digite seu cpf"
            value={formikProps.values.cpf}
            onChange={formikProps.handleChange}
          />
        </DivForm>

        <Botao type="submit">{editButton ? "Atualizar" : "Cadastrar"}</Botao>
      </ContainerForm>

      <BackGroundTabela>
        <TitleUsers>Users</TitleUsers>
        <Tabela>
          <TheadTabela>
            <TrTabela>
              <th>nome</th>
              <th>email</th>
              <th>cpf</th>
              <th>Data de Nascimento</th>
              <th>Atualizações</th>
            </TrTabela>
          </TheadTabela>
          <tbody>
            {person.map((user: string | any) => (
              <TrTabela key={user.idPessoa}>
                <TdTabela>{user.nome}</TdTabela>
                <TdTabela>{user.email}</TdTabela>
                <TdTabela>{cpf(user.cpf)}</TdTabela>

                <TdTabela>{user.dataNascimento}</TdTabela>
                <TdTabela>
                  <AtualizarDeletar>
                    <Botao
                      onClick={() =>
                        handleAtt(user.idPessoa, formikProps.setFieldValue)
                      }
                    >
                      Atualizar
                    </Botao>
                    <Botao onClick={() => DeleteUsers(user.idPessoa)}>
                      Deletar
                    </Botao>
                  </AtualizarDeletar>
                </TdTabela>
              </TrTabela>
            ))}
          </tbody>
        </Tabela>
      </BackGroundTabela>
    </ContainerUsers>
  );
}

export default Users;
