import styleMapa from "./Mapa.module.css";
import Titulo from "./ContainerTitulo";
const Mapa = () => {
  return (
    <section className={styleMapa.containerMapa}>
      <Titulo titulo="- Endereço da DBC -" />
      <iframe
        className={styleMapa.mapa}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.40891204836!2d-51.20348518436592!3d-29.996412836005735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951977775fc4c071%3A0x6de693cbd6b0b5e5!2sDBC%20Company!5e0!3m2!1spt-BR!2sbr!4v1645473048501!5m2!1spt-BR!2sbr"
        loading="lazy"
      ></iframe>
    </section>
  );
};
export default Mapa;
