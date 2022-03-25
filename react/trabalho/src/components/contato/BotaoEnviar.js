import Style from "./Contato.module.css";
const BotaoEnviar = ({ valor }) => {
  return <input className={Style.botao} type="submit" value={valor} />;
};
export default BotaoEnviar;
