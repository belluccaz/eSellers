import { useEffect, useState } from "react";
import styles from "./DashboardPage.module.scss";
import { useAuth } from "../../hooks/useAuth";
import { mockOrders } from "../../mocks/orders";
import { OrderStatusChart } from "../../components/OrderStatusChart/OrderStatusChart";
import { OrdersByMonthChart } from "../../components/OrdersByMonthChart/OrdersByMonthChart";
import { RecentOrders } from "../../components/RecentOrders/RecentOrders";
import { useNavigate } from "react-router-dom";

interface Order {
  id: string;
  status: string;
  total: number;
  createdAt: string;
  customerName: string;
}

export const DashboardPage = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const navigate = useNavigate();

  const handleFilter = (status?: string) => {
    navigate("/orders", { state: { filter: status } });
  };

  useEffect(() => {
    // Temporário: mock
    setOrders(mockOrders);

    // 🔒 Real (quando backend estiver pronto)
    // fetch("/api/orders", {
    //   headers: { Authorization: `Bearer ${token}` }
    // })
    //   .then(res => res.json())
    //   .then(data => setOrders(data))
    //   .catch(err => console.error(err));
  }, []);

  const total = orders.length;
  const entregues = orders.filter((o) => o.status === "Entregue").length;
  const cancelados = orders.filter((o) => o.status === "Cancelado").length;
  const processando = orders.filter((o) => o.status === "Processando").length;

  return (
    <div className={styles.container}>
      <h2>Dashboard</h2>
      <p>Bem-vindo, {user?.fullName}</p>

      <div className={styles.cardGrid}>
        <div className={styles.card} onClick={() => handleFilter()}>
          <h3>Total de Pedidos</h3>
          <p>{total}</p>
        </div>
        <div className={styles.card} onClick={() => handleFilter("Entregue")}>
          <h3>Entregues</h3>
          <p>{entregues}</p>
        </div>
        <div
          className={styles.card}
          onClick={() => handleFilter("Processando")}
        >
          <h3>Processando</h3>
          <p>{processando}</p>
        </div>
        <div className={styles.card} onClick={() => handleFilter("Cancelado")}>
          <h3>Cancelados</h3>
          <p>{cancelados}</p>
        </div>
      </div>

      <OrderStatusChart orders={orders} />
      <OrdersByMonthChart orders={orders} />
      <RecentOrders orders={orders} />
    </div>
  );
};
