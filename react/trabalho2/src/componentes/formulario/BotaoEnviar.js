import Style from "./Formulario.module.css";
const BotaoEnviar = ({ valor, id }) => {
  return <input id={id} className={Style.botao} type="submit" value={valor} />;
};
export default BotaoEnviar;
