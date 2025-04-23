import styles from "./RecentOrders.module.scss";

interface Order {
  id: string;
  customerName: string;
  createdAt: string;
  total: number;
  status: string;
}

interface Props {
  orders: Order[];
}

export const RecentOrders = ({ orders }: Props) => {
  const recent = [...orders]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 5);

  return (
    <div className={styles.container}>
      <h3>Últimos Pedidos</h3>
      <table>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Data</th>
            <th>Status</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {recent.map((order) => (
            <tr key={order.id}>
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
