"use client";

import { ArrowRight } from "lucide-react";
import styles from "./styles.module.css";
import { describe } from "node:test";
import { useState } from "react";

const itens = [
  {
    name: "SaleHunter",
    describe:
      "Sistema de comparação de preços de jogos em lojas digitais, com funcionalidades de login e favoritos, permitindo ao usuário encontrar os melhores preços e salvar seus jogos preferidos.",
    ano: "2023",
    tech: ["FULLSTACK", "NODE.JS", "VUE"],
    image: "/content/projectsImg/SaleHunter.png",
    code: "https://github.com/ES1-saleHunter",
    deploy: null,
  },

  {
    name: "Formulario Para Notas De Carros",
    describe:
      "Um sistema simples feito apenas em HTML, CSS e JS  para gerar um prompt de nota de carros",
    ano: "2025",
    tech: ["FRONTEND", "HTML", "CSS", "JS"],
    image: "/content/projectsImg/FormularioNotaCarros.png",
    code: "https://github.com/RenanChisas/FormularioParaNotasDeCarros",
    deploy: "https://renanchisas.github.io/FormularioParaNotasDeCarros/",
  },
  {
    name: "Cadastro De Clientes",
    describe: "Um cadastro de clientes basico para testa o react-hook-form",
    ano: "2025",
    tech: ["FRONTEND", "REACT", "CSS"],
    image: "/content/projectsImg/CadastroDeClientes.png",
    code: "https://github.com/RenanChisas/Cadastro_De_Clientes",
    deploy: "https://cadastro-de-clientes-nu.vercel.app/",
  },
  {
    name: "Projects journal",
    describe: "um sistema para armazenar artigos que eu escrevo",
    ano: "2025",
    tech: ["FRONTEND", "REACT", "CSS"],
    image: "/content/projectsImg/DiarioDeProjetos.png",
    code: "https://github.com/RenanChisas/Projects_journal",
    deploy: "https://projects-journal.vercel.app/",
  },
  {
    name: "My Anime List",
    describe: "um sistema de listagem de animes com busca e informações",
    ano: "2025",
    tech: ["FRONTEND", "REACT", "CSS"],
    image: "/content/projectsImg/AnimeList.png",
    code: "https://github.com/RenanChisas/MyAnimeList",
    deploy: "https://my-anime-list-delta.vercel.app/",
  },
  {
    name: "Landing Page Naruto",
    describe: "Uma Landing page sobre o time 7 do anime Naruto ",
    ano: "2025",
    tech: ["FRONTEND", "REACT", "CSS"],
    image: "/content/projectsImg/PageNaruto.png",
    code: "https://github.com/RenanChisas/LandingPageNaruto",
    deploy: "https://landing-page-naruto-zeta.vercel.app/",
  },
];

type work = {
  name: string;
  describe: string;
  ano: string;
  tech: string[];
  image: string;
  code: string | null;
  deploy: string | null;
};
type filter = {
  ano: string;
};

export function Work() {
  const [works, setWorks] = useState<work[]>(itens);
  const [filter, setFilter] = useState<filter>({ ano: "all" });

  function orderAno(ano: string) {
    const itensAno: work[] = [];
    if (ano == "all") {
      setFilter((_prevFilter) => (_prevFilter = { ano: ano }));
      setWorks((_prevWorks) => (_prevWorks = itens));
      return;
    }
    [...itens].map((work) => {
      if (work.ano === ano) {
        itensAno.push(work);
      }
    });
    setFilter((_prevFilter) => (_prevFilter = { ano: ano }));
    setWorks((_prevWorks) => (_prevWorks = itensAno));
  }

  return (
    <div className={styles.work}>
      <div className={styles.title}>
        <h1>Projetos</h1>
        <p> Aqui você pode conferir alguns dos meus projetos.</p>
      </div>

      <div className={styles.projectItens}>
        <div className={styles.filtro}>
          <div className={styles.filtroano}>
            <button
              onClick={() => orderAno("all")}
              className={filter.ano === "all" ? styles.active : ""}
            >
              {" "}
              Todos
            </button>
            <button
              onClick={() => orderAno("2025")}
              className={filter.ano === "2025" ? styles.active : ""}
            >
              {" "}
              2025
            </button>
            <button
              onClick={() => orderAno("2023")}
              className={filter.ano === "2023" ? styles.active : ""}
            >
              {" "}
              2023
            </button>
          </div>
        </div>
        <div className={styles.projects}>
          {[...works].reverse().map((project, index) => (
            <div className={styles.cards} key={index}>
              <img src={project.image} alt="" />
              <div className={styles.cardtitle}>
                <div className={styles.cardSkill}>
                  {project.tech.map((skill, index) => (
                    <a key={index}>{skill}</a>
                  ))}
                </div>
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
