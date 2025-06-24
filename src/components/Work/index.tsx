import { ArrowRight } from "lucide-react";
import styles from "./styles.module.css";
import { describe } from "node:test";

const itens = [
  {
    id: 1,
    name: "Formulario Para Notas De Carros",
    describe:
      "Um sistema simples feito apenas em HTML, CSS e JS  para gerar um prompt de nota de carros",
    ano: "2025",
    image: "/content/projectsImg/FormularioNotaCarros.png",
    code: "https://github.com/RenanChisas/FormularioParaNotasDeCarros",
    deploy: "https://renanchisas.github.io/FormularioParaNotasDeCarros/",
  },
  {
    id: 2,
    name: "Cadastro De Clientes",
    describe: "Um cadastro de clientes basico para testa o react-hook-form",
    ano: "2025",
    image: "/content/projectsImg/CadastroDeClientes.png",
    code: "https://github.com/RenanChisas/Cadastro_De_Clientes",
    deploy: "https://cadastro-de-clientes-nu.vercel.app/",
  },
  {
    id: 3,
    name: "Projects journal",
    describe: "um sistema para armazenar artigos que eu escrevo",
    ano: "2025",
    image: "/content/projectsImg/DiarioDeProjetos.png",
    code: "https://github.com/RenanChisas/Projects_journal",
    deploy: "https://projects-journal.vercel.app/",
  },
  {
    id: 4,
    name: "My Anime List",
    describe: "um sistema de listagem de animes com busca e informações",
    ano: "2025",
    image: "/content/projectsImg/AnimeList.png",
    code: "https://github.com/RenanChisas/MyAnimeList",
    deploy: "https://my-anime-list-delta.vercel.app/",
  },
  {
    id: 5,
    name: "Landing Page Naruto",
    describe: "Uma Landing page sobre o time 7 do anime Naruto ",
    ano: "2025",
    image: "/content/projectsImg/PageNaruto.png",
    code: "https://github.com/RenanChisas/LandingPageNaruto",
    deploy: "https://landing-page-naruto-zeta.vercel.app/",
  },
];

export function Work() {
  return (
    <div className={styles.work}>
      <div className={styles.title}>
        <h1>Projetos</h1>
        <p> Aqui você pode conferir alguns dos meus projetos.</p>
      </div>
      <div className={styles.projectItens}>
        <div className={styles.projects}>
          {[...itens].reverse().map((project) => (
            <div className={styles.cards} key={project.id}>
              <img src={project.image} alt="" />
              <div className={styles.cardtitle}>
                <div className={styles.cardMenu}>
                  <h2>{project.name}</h2>
                  <p>{project.describe}</p>
                </div>
                <div>
                  <div className={styles.cardBottom}>
                    <p>{project.ano}</p>
                    <div>
                      <a
                        target="_blank"
                        href={project.code || ""}
                        className={
                          project.code === null ? styles.desactive : ""
                        }
                      >
                        CODE
                        <ArrowRight />
                      </a>
                      <a
                        target="_blank"
                        href={project.deploy || ""}
                        className={
                          project.deploy === null ? styles.desactive : ""
                        }
                      >
                        DEPLOY <ArrowRight />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
