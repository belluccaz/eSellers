import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./OrderDetailsPage.module.scss";
import { mockOrders } from "../../mocks/orders";

interface Order {
  id: string;
  status: string;
  total: number;
  createdAt: string;
  customerName: string;
}

export const OrderDetailsPage = () => {
  const { id } = useParams();
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    // Temporário: mock
    const found = mockOrders.find((o) => o.id === id);
    setOrder(found || null);

    // 🔒 Real (quando backend estiver pronto)
    // fetch(`/api/orders/${id}`, {
    //   headers: { Authorization: `Bearer ${token}` }
    // })
    //   .then(res => res.json())
    //   .then(data => setOrder(data))
    //   .catch(err => console.error(err));
  }, [id]);

  if (!order) {
    return (
      <div className={styles.container}>
        <p>Pedido não encontrado.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2>Detalhes do Pedido #{order.id}</h2>
      <p>
        <strong>Cliente:</strong> {order.customerName}
      </p>
      <p>
        <strong>Status:</strong> {order.status}
      </p>
      <p>
        <strong>Data:</strong> {new Date(order.createdAt).toLocaleDateString()}
      </p>
      <p>
        <strong>Total:</strong> R$ {order.total.toFixed(2)}
      </p>
    </div>
  );
};
