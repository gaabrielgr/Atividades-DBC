import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import styleAddress from "../components/Address.module.css";
import ApiCep from "./ApiCep";
function Address() {
  const { register, setValue } = useForm();
  const [cepApi, setCepApi] = useState({});
  const [cep, setCep] = useState("");
  const [error, setError] = useState(null);

  function handleChange({ target }) {
    if (error) validateCep(target.value);
    setCep(target.value);
  }

  function handleBlur({ target }) {
    validateCep(target.value);
  }
  async function validateCep(value) {
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError("Preencha um cep válido");
      return false;
    } else {
      try {
        const { data } = await ApiCep.get(`/${value}/json/`);
        setCepApi(data);
        console.log(data);
      } catch (error) {
        console.log("Falha ao fazer a requisição", error);
      }
      setError(null);
      return true;
    }
  }

  function onSubmit(event) {
    event.preventDefault();
    if (validateCep(cep)) {
      console.table(cepApi);
    } else {
      console.log("Não enviar");
    }
  }

  setValue("logradouro", cepApi.logradouro);
  setValue("bairro", cepApi.bairro);
  setValue("cidade", cepApi.localidade);
  setValue("estado", cepApi.uf);
  setValue("dd", cepApi.ddd);
  setValue("cep", cepApi.cep);

  return (
    <div className={styleAddress.divContainer}>
      <form className={styleAddress.endereco} onSubmit={onSubmit}>
        <h1>Digite o seu CEP</h1>
        {error && <p className={styleAddress.error}>{error}</p>}
        <div className={styleAddress.divInput}>
          <label htmlFor="cep">CEP</label>
          <input
            {...register("cep")}
            label="CEP"
            id="cep"
            type="text"
            value={cep}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <div className={styleAddress.divInput}>
          <label htmlFor="rua">Rua</label>
          <input id="rua" type="text" {...register("logradouro")} />
        </div>
        <label htmlFor="bairro">Bairro</label>
        <input id="bairro" name="bairro" type="text" {...register("bairro")} />
        <div className={styleAddress.divInput}>
          <label htmlFor="cidade">Cidade</label>
          <input
            id="cidade"
            name="cidade"
            type="text"
            {...register("cidade")}
          />
        </div>
        <div className={styleAddress.divInput}>
          <label htmlFor="estado">Estado</label>
          <input
            id="estado"
            name="estado"
            type="text"
            {...register("estado")}
          />
        </div>
        <div className={styleAddress.divInput}>
          <label htmlFor="dd">DD</label>
          <input id="dd" name="dd" type="text" {...register("dd")} />
        </div>
        <div className={styleAddress.divInput}>
          <label htmlFor="numero">N°</label>
          <input
            id="numero"
            name="numero"
            type="text"
            {...register("numero")}
          />
        </div>
        <button>Cadastrar</button>
      </form>
    </div>
  );
}

export default Address;
