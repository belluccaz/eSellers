import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { Sidebar } from "../Sidebar/Sidebar";
import { Footer } from "../Footer/Footer";
import styles from "./Layout.module.scss";
import { useAuth } from "../../hooks/useAuth";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { user } = useAuth();
  const location = useLocation();
  const isDashboardPage =
    location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/orders") ||
    location.pathname.startsWith("/products") ||
    location.pathname.startsWith("/settings");

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.main}>
        {user && isDashboardPage && <Sidebar />}
        <div className={styles.content}>{children}</div>
      </div>
      <Footer />
    </div>
  );
};
