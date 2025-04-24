import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.scss";

export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <p>Página não encontrada.</p>
      <Link to="/dashboard" className={styles.backLink}>
        Voltar ao Início
      </Link>
    </div>
  );
};
