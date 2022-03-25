import Style from "./Contato.module.css";
const Select = ({ forIdPergunta, pergunta, texto }) => {
  return (
    <div className={Style.containerInput}>
      <label htmlFor={forIdPergunta}>{texto}</label>
      <select name="perguntas" id={forIdPergunta}>
        <option value="pergunta01">{pergunta}</option>
      </select>
    </div>
  );
};

export default Select;
