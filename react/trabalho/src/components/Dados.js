import React from "react";
import { Card } from "./Cards/Card";
export const Dados = ({ informacoes }) => {
  return (
    <div>
      {/* {informacoes.login} */}
      <Card nome={informacoes.name} />
    </div>
  );
};
