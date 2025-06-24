"use client";
import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; {2025} RenanChisas. Todos os direitos reservados.</p>
        <div className={styles.socials}>
          <a
            href="https://github.com/thisisrenan"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jrenan-silva/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
