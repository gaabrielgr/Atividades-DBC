import styleContato from "./Formulario.module.css";
const Inputs = ({
  forIdLogin,
  tipo,
  placeholderLogin,
  textoLabel,
  setValue,
}) => {
  return (
    <div className={styleContato.containerInput}>
      <label htmlFor={forIdLogin}>{textoLabel}</label>
      <input
        id={forIdLogin}
        type={tipo}
        placeholder={placeholderLogin}
        onChange={({ target }) => setValue(target.value)}
      />
    </div>
  );
};

export default Inputs;
