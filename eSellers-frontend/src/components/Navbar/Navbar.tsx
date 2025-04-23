import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { useAuth } from "../../hooks/useAuth";

export const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">eSellers</Link>
      </div>

      <div className={styles.userSection}>
        {user && <span className={styles.username}>Olá, {user.fullName}</span>}

        {user ? (
          <>
            <nav className={styles.navLinks}>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/orders">Pedidos</Link>
              <Link to="/products">Produtos</Link>
              <Link to="/settings">Configurações</Link>
            </nav>
            <button className={styles.logoutButton} onClick={handleLogout}>
              Sair
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className={styles.authLink}>
              Entrar
            </Link>
            <Link to="/register" className={styles.authLink}>
              Cadastrar
            </Link>
          </>
        )}
      </div>
    </header>
  );
};
