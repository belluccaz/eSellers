import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./OrdersPage.module.scss";
import { mockOrders } from "../../mocks/orders";

interface Order {
  id: string;
  status: string;
  total: number;
  createdAt: string;
  customerName: string;
}

export const OrdersPage = () => {
  const location = useLocation();
  const filter = location.state?.filter;
  const [orders, setOrders] = useState<Order[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);

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

  useEffect(() => {
    if (filter) {
      setFilteredOrders(orders.filter((o) => o.status === filter));
    } else {
      setFilteredOrders(orders);
    }
  }, [filter, orders]);

  return (
    <div className={styles.container}>
      <h2>Pedidos</h2>
      {filter && (
        <p>
          Filtrando por: <strong>{filter}</strong>
        </p>
      )}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Data</th>
            <th>Status</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order.id}>
              <td>
                <Link to={`/orders/${order.id}`} className={styles.link}>
                  {order.id}
                </Link>
              </td>
              <td>{order.customerName}</td>
              <td>{new Date(order.createdAt).toLocaleDateString()}</td>
              <td>{order.status}</td>
              <td>R$ {order.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
