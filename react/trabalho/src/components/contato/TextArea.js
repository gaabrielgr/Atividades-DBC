import StyleTextArea from "./Contato.module.css";

const TextArea = ({
  forIdLogin,
  textoLabel,
  linhas,
  colunas,
  placeholderArea,
}) => {
  return (
    <div className={StyleTextArea.containerInput}>
      <label htmlFor={forIdLogin}>{textoLabel}</label>
      <textarea
        name="mensagem"
        id={forIdLogin}
        cols={linhas}
        rows={colunas}
        placeholder={placeholderArea}
      ></textarea>
    </div>
  );
};

export default TextArea;
