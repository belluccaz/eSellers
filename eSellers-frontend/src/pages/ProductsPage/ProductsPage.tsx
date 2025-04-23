import { useEffect, useState } from "react";
import styles from "./ProductsPage.module.scss";
import { mockProducts } from "../../mocks/products";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  quantity: number;
  status: string;
  createdAt: string;
  origem: string;
  sincronizado: boolean;
}

export const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("manualProducts") || "[]");
    // Temporário: mock
    setProducts([...mockProducts, ...stored]);

    // 🔒 Real (quando backend estiver pronto)
    // fetch("/api/products", {
    //   headers: { Authorization: `Bearer ${token}` }
    // })
    //   .then(res => res.json())
    //   .then(data => setProducts(data))
    //   .catch(err => console.error(err));
  }, []);

  return (
    <div className={styles.container}>
      <h2>Produtos</h2>
      <Link to="/products/create" className={styles.addLink}>
        + Novo Produto
      </Link>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>SKU</th>
            <th>Preço</th>
            <th>Estoque</th>
            <th>Status</th>
            <th>Origem</th>
            <th>Sincronizado</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.name}</td>
              <td>{prod.sku}</td>
              <td>
                {typeof prod.price === "number"
                  ? `R$ ${prod.price.toFixed(2)}`
                  : "Valor inválido"}
              </td>
              <td>{prod.quantity}</td>
              <td>{prod.status}</td>
              <td>{prod.origem}</td>
              <td>{prod.sincronizado ? "Sim" : "Não"}</td>
              <td>
                {prod.origem === "Manual" ? (
                  <Link
                    to={`/products/edit/${prod.id}`}
                    className={styles.editLink}
                  >
                    Editar
                  </Link>
                ) : (
                  <span className={styles.disabledAction}>Visualizar</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
