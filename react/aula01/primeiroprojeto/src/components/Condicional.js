import styles from "./Condicional.module.css";
import React from "react";

const Condicional = () => {
  const isBolean = true;
  return (
    <div className={styles.condicional}>
      {isBolean ? (
        <h1>A condicional é verdadeira</h1>
      ) : (
        <h1>A condicional é falsa</h1>
      )}
    </div>
  );
};

export default Condicional;
