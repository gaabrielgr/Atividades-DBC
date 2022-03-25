import styleContato from "./Contato.module.css";
const Inputs = ({
  forIdLogin,
  tipo,
  placeholderLogin,
  textoLabel,
  setValue,
  ...props
}) => {
  return (
    <div className={styleContato.containerInput}>
      <label htmlFor={forIdLogin}>{textoLabel}</label>
      <input
        id={forIdLogin}
        type={tipo}
        placeholder={placeholderLogin}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </div>
  );
};

export default Inputs;
