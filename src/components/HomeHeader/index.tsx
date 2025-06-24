import styles from "./styles.module.css";

export function HomeHeader() {
  return (
    <div className={styles.home}>
      <div className={styles.hometext}>
        <h1>Engenheiro de software</h1>
        <p>
          Aspirante a Desenvolvedor Web Fullstack sempre em busca de evolução
          contínua
        </p>
      </div>
      <div className={styles.homeimg}>
        <img src="/content/einar.jpg" alt="" />
      </div>
      <div className={styles.bgimg}>
        <img src="/content/bg.png" alt="" />
      </div>
    </div>
  );
}
