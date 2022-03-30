import React from "react";
import gifError from "../images/error.gif";
import styleLoading from "../components/Loading.module.css";

const Error = () => {
  return (
    <div className={styleLoading.gifError}>
      <h1>Algo deu errado</h1>

      <img src={gifError}></img>
    </div>
  );
};

export default Error;
