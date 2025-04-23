import { useEffect, useState } from "react";
import styles from "./ImportProductsPage.module.scss";
import { mockIntegratedProducts } from "../../mocks/integratedProducts";

interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  quantity: number;
}

export const ImportProductsPage = () => {
  const [channel, setChannel] = useState("Mercado Livre");
  const [products, setProducts] = useState<Product[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    setProducts(mockIntegratedProducts[channel]);

    // 🔒 Real (quando backend estiver pronto)
    // fetch(`/api/integrations/${channel}/products`)
    //   .then(res => res.json())
    //   .then(data => setProducts(data));
  }, [channel]);

  const handleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleImport = () => {
    alert(`Importando: ${selected.length} produtos...`);

    // 🔒 Real:
    // fetch("/api/products/import", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ ids: selected, channel }),
    // });
  };

  return (
    <div className={styles.container}>
      <h2>Importar Produtos</h2>

      <label htmlFor="channel">Selecionar canal:</label>
      <select
        id="channel"
        value={channel}
        onChange={(e) => setChannel(e.target.value)}
      >
        {Object.keys(mockIntegratedProducts).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>Nome</th>
            <th>SKU</th>
            <th>Preço</th>
            <th>Estoque</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selected.includes(p.id)}
                  onChange={() => handleSelect(p.id)}
                />
              </td>
              <td>{p.name}</td>
              <td>{p.sku}</td>
              <td>R$ {p.price.toFixed(2)}</td>
              <td>{p.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        className={styles.importButton}
        disabled={selected.length === 0}
        onClick={handleImport}
      >
        Importar Selecionados
      </button>
    </div>
  );
};
