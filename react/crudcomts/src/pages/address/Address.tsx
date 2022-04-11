import { FormikHelpers, useFormik } from "formik";
import axios from "axios";
import { AddressDTO } from "../../model/AddressDTO";
import api from "../../api";
import Loading from "../../components/loading/Loading";
import ErrorMsg from "../../components/error/ErrorMsg";
import * as Yup from "yup";
import Notiflix from "notiflix";
import {
  ContainerForm,
  Error,
  DivForm,
  Botao,
  Input,
  Label,
  Select,
  Tabela,
  TrTabela,
  TdTabela,
  PesquisarCep,
  TheadTabela,
  BackGroundTabela,
  TitleUsers,
  ContainerAddress,
  AtualizarDeletar,
  MaskInput,
} from "./Address.styles";
import { IoSearchOutline } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import { AddressContext } from "../../context/AddressContext";
function Address() {
  const [idAddress, setIdAddress] = useState(0);
  const [editButton, setEditButton] = useState(false);
  const { getListAddress, address, loading, error } =
    useContext<any>(AddressContext);
  async function getAddress(values: AddressDTO, setFieldValue: any) {
    try {
      const { data } = await axios.get(
        `https://viacep.com.br/ws/${values.cep}/json/`
      );

      formikProps.setFieldValue("bairro", data.bairro);
      formikProps.setFieldValue("logradouro", data.logradouro);
      formikProps.setFieldValue("localidade", data.localidade);
      formikProps.setFieldValue("uf", data.uf);
      formikProps.setFieldValue("complemento", data.complemento);
    } catch (error) {
      console.log(error);
    }
  }

  async function newAddress(values: AddressDTO) {
    try {
      const formatCep = values.cep.replace(/\D/g, "");
      const postAddress = {
        cep: formatCep,
        cidade: formikProps.values.localidade,
        complemento: formikProps.values.complemento,
        estado: formikProps.values.uf,
        logradouro: formikProps.values.logradouro,
        numero: +formikProps.values.numero,
        pais: formikProps.values.pais,
        tipo: formikProps.values.tipo,
      };
      setEditButton(false);

      const { data } = await api.post("/endereco/573", postAddress);
      Notiflix.Notify.success("Endereço criado com sucesso!", {
        timeout: 800,
      });
      getListAddress();
      formikProps.resetForm();
    } catch (error) {
      console.log(error);
    }
  }

  const DeleteAddress = async (end: number) => {
    try {
      await api.delete(`/endereco/${end}`);
      getListAddress();
    } catch (error) {
      console.log(error);
    }
  };
  function handleAtt(user: number, formi: any) {
    AttAddress(user, formi);
    topPage();
  }
  function topPage() {
    return window.scrollTo(0, 0);
  }
  const AttAddress = async (id: number, setFieldValue: any) => {
    try {
      const { data } = await api.get(`/endereco/${id}`);
      setFieldValue("cep", data.cep);
      setFieldValue("logradouro", data.logradouro);
      setFieldValue("complemento", data.complemento);
      setFieldValue("bairro", data.bairro);
      setFieldValue("localidade", data.cidade);
      setFieldValue("uf", data.estado);
      setFieldValue("numero", data.numero);
      setFieldValue("pais", data.pais);
      setFieldValue("tipo", data.tipo);
      setIdAddress(id);
      setEditButton(true);
    } catch (error) {
      console.log(error);
    }
  };

  const updateAddress = async () => {
    try {
      const updateAddress = {
        idEndereco: idAddress,
        cep: formikProps.values.cep,
        cidade: formikProps.values.localidade,
        complemento: formikProps.values.complemento,
        estado: formikProps.values.uf,
        logradouro: formikProps.values.logradouro,
        numero: +formikProps.values.numero,
        pais: formikProps.values.pais,
        tipo: formikProps.values.tipo,
      };
      const { data } = await api.put(`/endereco/${idAddress}`, updateAddress);
      setEditButton(false);
      getListAddress();
      formikProps.resetForm();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("key");
    if (token) {
      api.defaults.headers.common["authorization"] = token;
    }
    getListAddress();
  }, [idAddress]);

  const formikProps = useFormik({
    initialValues: {
      cep: "",
      logradouro: "",
      complemento: "",
      localidade: "",
      uf: "",
      numero: "",
      pais: "",
      tipo: "COMERCIAL",
    },

    validationSchema: Yup.object().shape({
      cep: Yup.string().required("O CEP é obrigatório"),

      logradouro: Yup.string()
        .required("O logradouro é obrigatório")
        .min(2, "O CEP precisa ter 8 números")
        .max(50, "O CEP precisar ter no máximo 8 números"),

      complemento: Yup.string()
        .required("O complemento é obrigatório")
        .min(2, "O CEP precisa ter 8 números")
        .max(50, "O CEP precisar ter no máximo 8 números"),

      localidade: Yup.string()
        .required("A cidade é obrigatória")
        .min(2, "O CEP precisa ter 8 números")
        .max(50, "O CEP precisar ter no máximo 8 números"),

      uf: Yup.string()
        .required("O estado é obrigatório")
        .min(2, "O CEP precisa ter 8 números")
        .max(50, "O CEP precisar ter no máximo 8 números"),

      numero: Yup.number()
        .required("O número é obrigatório")
        .integer("Só pode números")
        .typeError("Só pode números")
        .positive("Só números positivo"),

      pais: Yup.string()
        .required("O país é obrigatório")
        .min(2, "O CEP precisa ter 8 números")
        .max(50, "O CEP precisar ter no máximo 8 números"),
    }),

    onSubmit: async (
      values: AddressDTO,
      { setSubmitting }: FormikHelpers<AddressDTO>
    ) => {
      if (idAddress) {
        await updateAddress();
      } else {
        await newAddress(values);
      }
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
    <ContainerAddress>
      <ContainerForm onSubmit={formikProps.handleSubmit}>
        <DivForm>
          <Label htmlFor="cep">CEP</Label>
          <MaskInput
            id="cep"
            type="text"
            name="cep"
            placeholder="Digite seu CEP"
            value={formikProps.values.cep}
            onChange={formikProps.handleChange}
            mask="99999-999"
          />
          {formikProps.errors.cep && formikProps.touched.cep ? (
            <Error>{formikProps.errors.cep}</Error>
          ) : null}
          <PesquisarCep
            onClick={() =>
              getAddress(formikProps.values, formikProps.setFieldValue)
            }
          >
            <IoSearchOutline />
          </PesquisarCep>
        </DivForm>

        <DivForm>
          <Label htmlFor="logradouro">Logradouro</Label>
          <Input
            type="text"
            name="logradouro"
            placeholder="Digite seu Logradouro"
            value={formikProps.values.logradouro}
            onChange={formikProps.handleChange}
          />
          {formikProps.errors.logradouro && formikProps.touched.logradouro ? (
            <Error>{formikProps.errors.logradouro}</Error>
          ) : null}
        </DivForm>
        <DivForm>
          <Label htmlFor="complemento">Complemento</Label>
          <Input
            type="text"
            name="complemento"
            placeholder="Digite seu Complemento"
            value={formikProps.values.complemento}
            onChange={formikProps.handleChange}
          />
          {formikProps.errors.complemento && formikProps.touched.complemento ? (
            <Error>{formikProps.errors.complemento}</Error>
          ) : null}
        </DivForm>

        <DivForm>
          <Label htmlFor="localidade">Cidade</Label>
          <Input
            type="text"
            name="localidade"
            placeholder="Digite sua Localidade"
            value={formikProps.values.localidade}
            onChange={formikProps.handleChange}
          />
          {formikProps.errors.localidade && formikProps.touched.localidade ? (
            <Error>{formikProps.errors.localidade}</Error>
          ) : null}
        </DivForm>
        <DivForm>
          <Label htmlFor="uf">Estado</Label>
          <Input
            type="text"
            name="uf"
            placeholder="Digite seu Estado"
            value={formikProps.values.uf}
            onChange={formikProps.handleChange}
          />
          {formikProps.errors.uf && formikProps.touched.uf ? (
            <Error>{formikProps.errors.uf}</Error>
          ) : null}
        </DivForm>
        <DivForm>
          <Label htmlFor="numero">Número</Label>
          <Input
            type="text"
            name="numero"
            placeholder="Digite seu numero"
            value={formikProps.values.numero}
            onChange={formikProps.handleChange}
          />
          {formikProps.errors.numero && formikProps.touched.numero ? (
            <Error>{formikProps.errors.numero}</Error>
          ) : null}
        </DivForm>
        <DivForm>
          <Label htmlFor="pais">País</Label>
          <Input
            type="text"
            name="pais"
            placeholder="Digite seu país"
            value={formikProps.values.pais}
            onChange={formikProps.handleChange}
          />
          {formikProps.errors.pais && formikProps.touched.pais ? (
            <Error>{formikProps.errors.pais}</Error>
          ) : null}
        </DivForm>
        <DivForm>
          <Label htmlFor="tipo">Tipo de contato</Label>
          <Select
            name="tipo"
            id="tipo"
            value={formikProps.values.tipo}
            onChange={formikProps.handleChange}
          >
            <option value="COMERCIAL">COMERCIAL</option>
            <option value="RESIDENCIAL">RESIDENCIAL</option>
          </Select>
        </DivForm>

        <Botao type="submit">{editButton ? "Atualizar" : "Cadastrar"}</Botao>
      </ContainerForm>

      <BackGroundTabela>
        <TitleUsers>Address</TitleUsers>
        <Tabela>
          <TheadTabela>
            <TrTabela>
              <th>Cep</th>
              <th>Estado</th>
              <th>Cidade</th>
              <th>Rua</th>
              <th>Complemento</th>
              <th>Numero</th>
              <th>País</th>
              <th>Tipo de Endereço</th>
              <th>Atualizações</th>
            </TrTabela>
          </TheadTabela>
          <tbody>
            {address.map((end: string | any) => (
              <TrTabela key={end.idEndereco}>
                <TdTabela>{end.cep}</TdTabela>
                <TdTabela>{end.estado}</TdTabela>
                <TdTabela>{end.cidade}</TdTabela>
                <TdTabela>{end.logradouro}</TdTabela>
                <TdTabela>{end.complemento}</TdTabela>
                <TdTabela>{end.numero}</TdTabela>
                <TdTabela>{end.pais}</TdTabela>
                <TdTabela>{end.tipo}</TdTabela>
                <TdTabela>
                  <AtualizarDeletar>
                    <Botao
                      onClick={() =>
                        handleAtt(end.idEndereco, formikProps.setFieldValue)
                      }
                    >
                      Atualizar
                    </Botao>
                    <Botao onClick={() => DeleteAddress(end.idEndereco)}>
                      Deletar
                    </Botao>
                  </AtualizarDeletar>
                </TdTabela>
              </TrTabela>
            ))}
          </tbody>
        </Tabela>
      </BackGroundTabela>
    </ContainerAddress>
  );
}

export default Address;
