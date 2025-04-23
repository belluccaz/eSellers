import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";
import styles from "./OrdersByMonthChart.module.scss";

interface Order {
  createdAt: string;
}

interface Props {
  orders: Order[];
}

export const OrdersByMonthChart = ({ orders }: Props) => {
  const monthMap: Record<string, number> = {};

  orders.forEach((order) => {
    const month = new Date(order.createdAt).toLocaleString("pt-BR", {
      month: "short",
    });
    monthMap[month] = (monthMap[month] || 0) + 1;
  });

  const data = Object.entries(monthMap).map(([month, count]) => ({
    name: month,
    pedidos: count,
  }));

  return (
    <div className={styles.chartContainer}>
      <h3>Pedidos por Mês</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="pedidos" fill="#ffaa00" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
