import Titulo from "../ContainerTitulo";
import styleSobre from "./Sobre.module.css";
import TextoPrincipal from "../TextoPrincipal";

const Sobre = () => {
  return (
    <section className={styleSobre.container} id="sobre">
      <Titulo titulo="Sobre a DBC" />
      <iframe
        className={styleSobre.video}
        src="https://www.youtube.com/embed/lq5hlLaa16s"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <TextoPrincipal
        texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore libero repellendus vitae voluptatem quaerat id necessitatibus saepe ipsa ut ipsum explicabo quod iste neque nostrum enim, officia nihil. Soluta, nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sint cum, odio quisquam quidem debitis tenetur quis, aliquam expedita accusamus pariatur ex corrupti maxime totam?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore libero repellendus vitae voluptatem quaerat id necessitatibus saepe ipsa ut ipsum explicabo quod iste neque nostrum enim, officia nihil. Soluta, nam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus impedit, eligendi voluptatem distinctio blanditiis illo. Minima, veniam? Quis, hic? Tempora veniam molestiae non nobis consequuntur."
      />
    </section>
  );
};

export default Sobre;
