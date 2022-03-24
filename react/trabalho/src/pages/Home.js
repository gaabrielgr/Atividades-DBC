import React from "react";
export const Home = ({ dados }) => {
  return (
    <>
      <div>{dados && <div>{dados.login}</div>}</div>
    </>
  );
};
