import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.scss";
import { useAuth } from "../../hooks/useAuth";

export const Sidebar = () => {
  const { user } = useAuth();
  if (!user) return null;

  return (
    <aside className={styles.sidebar}>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/orders">Pedidos</NavLink>
      <NavLink to="/products">Produtos</NavLink>
      <NavLink to="/settings">Configurações</NavLink>
    </aside>
  );
};
