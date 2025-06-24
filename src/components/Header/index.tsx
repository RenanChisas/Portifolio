import styles from "./styles.module.css";

export function Header() {
  return (
    <div className={styles.headerMenu}>
      <div>
        <a href="">
          <h1>Renan</h1>
        </a>
      </div>
      <div className={styles.MenuIcons}>
        <a
          href="https://github.com/thisisrenan"
          target="_blank"
          className={styles.Bimg}
        >
          <img src="/content/github.svg" alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/jrenan-silva/"
          className={styles.Bimg}
          target="_blank"
        >
          <img src="/content/linkedin.svg" alt="" />
        </a>
        <a className={styles.button}>Contato</a>
      </div>
    </div>
  );
}
