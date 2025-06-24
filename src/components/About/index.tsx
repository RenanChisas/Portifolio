import styles from "./styles.module.css";

const skills = [
  "C",
  "C++",
  "JAVA",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "HTML",
  "CSS",
  "REACT",
  "NEXT",
  "NODE",
  "SQL",
];

export function About() {
  return (
    <div className={styles.about}>
      <div className={styles.title}>
        <h1>SOBRE MIM</h1>
        <p>
          Neste espaço, compartilho um pouco sobre quem sou, o que faço e as
          tecnologias com as quais venho trabalhando no mundo da programação.
        </p>
      </div>

      <div className={styles.grup}>
        <div className={styles.aboutItem}>
          <h1>Descubra quem eu sou</h1>
          <p>
            Olá! Eu sou o Renan, sou estudante de{" "}
            <strong>Ciência da Computação</strong> e desenvolvedor com
            experiência em <strong>Node.js</strong>, <strong>TypeScript</strong>
            , <strong>React</strong> e <strong>MySQL</strong>. Já trabalhei em
            projetos variados, desde páginas simples até sistemas com{" "}
            <strong>backend</strong>, <strong>APIs</strong> e{" "}
            <strong>automação</strong>. Tenho prática com{" "}
            <strong>Git/GitHub</strong>
            para controle de versão, além de experiência com métodos ágeis, como
            <strong>Scrum</strong> e <strong>Kanban</strong>.
          </p>
        </div>
        <div className={styles.aboutSkill}>
          <h1> Habilidades</h1>
          <div className={styles.cardSkill}>
            {skills.map((skill, index) => (
              <a key={index}>{skill}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
