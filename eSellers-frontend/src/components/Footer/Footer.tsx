import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} eSellers. Todos os direitos reservados.
    </footer>
  );
};
