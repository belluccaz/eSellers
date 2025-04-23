import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import styles from "./OrderStatusChart.module.scss";

interface Order {
  status: string;
}

interface Props {
  orders: Order[];
}

const COLORS = ["#00c49f", "#ffa500", "#ff4d4d"]; // verde, laranja, vermelho

export const OrderStatusChart = ({ orders }: Props) => {
  const statusCount = orders.reduce((acc, order) => {
    acc[order.status] = (acc[order.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const data = Object.entries(statusCount).map(([status, count]) => ({
    name: status,
    value: count,
  }));

  return (
    <div className={styles.chartContainer}>
      <h3>Status dos Pedidos</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            dataKey="value"
            data={data}
            outerRadius={100}
            label
            paddingAngle={3}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
