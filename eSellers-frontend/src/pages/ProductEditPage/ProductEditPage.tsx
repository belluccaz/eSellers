import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./ProductEditPage.module.scss";

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

export const ProductEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("manualProducts") || "[]");
    const found = stored.find((p: Product) => p.id === id);
    if (found) setProduct(found);

    // 🔒 Futuro: buscar da API
    // fetch(`/api/products/${id}`, { headers: { Authorization: `Bearer ${token}` }})
    //   .then(res => res.json())
    //   .then(data => setProduct(data))
    //   .catch(console.error);
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (!product) return;
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!product) return;

    const updatedProduct = {
      ...product,
      price: parseFloat(product.price.toString()),
      quantity: parseInt(product.quantity.toString(), 10),
    };

    const stored = JSON.parse(localStorage.getItem("manualProducts") || "[]");
    const updatedList = stored.map((p: Product) =>
      p.id === product.id ? updatedProduct : p
    );

    localStorage.setItem("manualProducts", JSON.stringify(updatedList));
    alert("Produto atualizado com sucesso!");
    navigate("/products");

    // 🔒 Futuro: PUT na API
    // await fetch(`/api/products/${id}`, {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    //   body: JSON.stringify(updatedProduct)
    // });
  };

  const handleDelete = () => {
    if (!product) return;

    const confirmDelete = confirm(
      `Deseja realmente excluir o produto "${product.name}"?`
    );
    if (!confirmDelete) return;

    const stored = JSON.parse(localStorage.getItem("manualProducts") || "[]");
    const updatedList = stored.filter((p: Product) => p.id !== product.id);

    localStorage.setItem("manualProducts", JSON.stringify(updatedList));
    alert("Produto excluído com sucesso!");
    navigate("/products");

    // 🔒 Futuro: DELETE na API
    // await fetch(`/api/products/${id}`, {
    //   method: "DELETE",
    //   headers: { Authorization: `Bearer ${token}` }
    // });
  };

  if (!product) return <div className={styles.container}>Carregando...</div>;

  return (
    <div className={styles.container}>
      <h2>Editar Produto</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />

        <label>SKU:</label>
        <input
          name="sku"
          value={product.sku}
          onChange={handleChange}
          required
        />

        <label>Preço:</label>
        <input
          name="price"
          type="number"
          step="0.01"
          value={product.price}
          onChange={handleChange}
          required
        />

        <label>Quantidade:</label>
        <input
          name="quantity"
          type="number"
          value={product.quantity}
          onChange={handleChange}
          required
        />

        <label>Status:</label>
        <select name="status" value={product.status} onChange={handleChange}>
          <option value="Ativo">Ativo</option>
          <option value="Inativo">Inativo</option>
        </select>

        <button type="submit">Salvar</button>
        <button
          type="button"
          className={styles.deleteButton}
          onClick={() => handleDelete()}
        >
          Excluir Produto
        </button>
      </form>
    </div>
  );
};
