import styleTexto from "./TextoPrincipal.module.css";
const TextoPrincipal = ({ texto }) => {
  return (
    <div>
      <p className={styleTexto.texto}>{texto}</p>
    </div>
  );
};
export default TextoPrincipal;
