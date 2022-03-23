import imagemCogumelo from "../images/cogumelo2.png";
import styleCard from "./Card.module.css";
const Card = () => {
  return (
    <div className={styleCard.card}>
      <img src={imagemCogumelo} alt="Card" width="120px" height="120px" />
      <p className={styleCard.texto}>Cogumelo</p>
    </div>
  );
};

export default Card;
