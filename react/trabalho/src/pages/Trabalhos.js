import styleRepositorio from "../components/Trabalhos.module.css";
import { Link } from "react-router-dom";
import { Buttons } from "../components/Cards/Buttons";
export const Trabalhos = ({ repositorio }) => {
  const infoRepo = repositorio;

  console.log(infoRepo);
  return (
    <section className={styleRepositorio.repositorio}>
      <h1 className={styleRepositorio.tituloProjeto}>PROJETOS</h1>
      <ul className={styleRepositorio.containerRepositorio}>
        {infoRepo.map(({ name, description, language, clone_url, id }) => (
          <li className={styleRepositorio.item} key={id}>
            <div className={styleRepositorio.itemRepositorio}>
              <span>Nome: {name}</span>
              {description !== null ? (
                <span>Descriçao: {description}</span>
              ) : (
                ""
              )}
              {language !== null ? <span>Linguagens: {language}</span> : ""}
              <span>
                <a
                  className={styleRepositorio.linkProjeto}
                  href={clone_url}
                  target="_blank"
                >
                  Link do projeto
                </a>
              </span>
            </div>
          </li>
        ))}
      </ul>
      <Link to={"/"}>
        <Buttons valor={"Voltar"} />
      </Link>
    </section>
  );
};
