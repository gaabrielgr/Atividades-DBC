import React from "react";
import Titulo from "./ContainerTitulo";
import StyleContainer from "./Container.module.css";
import cardContainer from "./CardContainer.module.css";
import TextoPrincipal from "./TextoPrincipal";
import Card from "./Card";
import Mapa from "./Mapa";
const Container = () => {
  return (
    <>
      <section className={StyleContainer.container}>
        <Titulo titulo="Estamos aprendendo HTML e CSS com o melhor professor de todos" />
        <section className={cardContainer.cardContainer}>
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
        <TextoPrincipal
          texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, corporis
        fugit nemo ipsa deleniti consectetur! Aliquid magni deserunt molestias
        vitae aut saepe, quas perspiciatis qui! Voluptates quo voluptas
        molestias reiciendis. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Necessitatibus beatae iusto sapiente amet totam rem
        esse quasi voluptate, aperiam ipsum suscipit repellendus quae tenetur
        earum repudiandae maiores? Maxime, neque libero? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Molestiae incidunt delectus assumenda
        rerum blanditiis. Voluptate, laborum repellendus veritatis quis alias
        repudiandae ratione, error, inventore eius veniam voluptates molestias!
        Nisi, voluptates! Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Recusandae delectus provident nulla obcaecati, in dolorem minima
        cumque, molestiae quibusdam fuga totam eveniet nam rerum tenetur
        deleniti natus harum mollitia! Veniam?"
        />
      </section>
      <Mapa />
    </>
  );
};

export default Container;
