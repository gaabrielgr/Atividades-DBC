import React, { useState, useEffect } from "react";
import styleAddress from "../components/Address.module.css";
import ApiCep from "./ApiCep";
import { useForm } from "react-hook-form";

function Address() {
  const { register, handleSubmit, setValue } = useForm();
  const [cepApi, setCepApi] = useState({});

  function onSubmit(e) {
    console.log(e);
  }
  const ValidarCep = async (e) => {
    const cepInformado = e.target.value.replace(/\D/g, "");
    console.log(cepInformado);
    try {
      const { data } = await ApiCep.get(`/${cepInformado}/json/`);
      setCepApi(data);
    } catch (error) {
      console.log("Falha ao fazer a requisição", error);
    }
  };
  setValue("logradouro", cepApi.logradouro);
  setValue("bairro", cepApi.bairro);
  setValue("cidade", cepApi.localidade);
  setValue("estado", cepApi.uf);
  setValue("dd", cepApi.ddd);
  setValue("cep", cepApi.cep);

  return (
    <div>
      <h1>Digite o seu CEP</h1>

      <form className={styleAddress.endereco} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="cep">CEP</label>
        <input
          {...register("cep")}
          id="cep"
          name="cep"
          placeholder="Digite seu CEP"
          onBlur={ValidarCep}
        />
        <label htmlFor="rua">Rua</label>
        <input id="rua" type="text" {...register("logradouro")} />
        <label htmlFor="bairro">Bairro</label>
        <input id="bairro" name="bairro" type="text" {...register("bairro")} />
        <label htmlFor="cidade">Cidade</label>
        <input id="cidade" name="cidade" type="text" {...register("cidade")} />
        <label htmlFor="estado">Estado</label>
        <input id="estado" name="estado" type="text" {...register("estado")} />
        <label htmlFor="dd">DD</label>
        <input id="dd" name="dd" type="text" {...register("dd")} />
        <label htmlFor="telefone">Telefone</label>
        <input id="telefone" name="telefone" type="text" />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Address;
