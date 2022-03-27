import { useContext } from "react";
import { CountContext } from "../context/CountContext";
import React from "react";

export const Mirror = () => {
  const { count } = useContext(CountContext);
  return (
    <div>
      <h1>Espelho: {count}</h1>
    </div>
  );
};
