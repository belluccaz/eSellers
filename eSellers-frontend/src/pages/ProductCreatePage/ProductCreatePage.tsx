import { useState } from "react";
import styles from "./ProductCreatePage.module.scss";
import { useNavigate } from "react-router-dom";

export const ProductCreatePage = () => {
  const [form, setForm] = useState({
    name: "",
    sku: "",
    price: "",
    quantity: "",
    status: "Ativo",
  });

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct = {
      id: crypto.randomUUID(),
      name: form.name,
      sku: form.sku,
      price: parseFloat(form.price), // CONVERSÃO CORRETA
      quantity: parseInt(form.quantity, 10), // CONVERSÃO CORRETA
      status: form.status,
      origem: "Manual",
      sincronizado: false,
      createdAt: new Date().toISOString(),
    };

    const manualProducts = JSON.parse(
      localStorage.getItem("manualProducts") || "[]"
    );
    manualProducts.push(newProduct);
    localStorage.setItem("manualProducts", JSON.stringify(manualProducts));

    alert("Produto criado com sucesso!");
    navigate("/products");

    // 🔒 Futuro: chamada real à API
    // await fetch("/api/products", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${token}`,
    //   },
    //   body: JSON.stringify(newProduct),
    // });
  };

  return (
    <div className={styles.container}>
      <h2>Novo Produto (Manual)</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input name="name" value={form.name} onChange={handleChange} required />

        <label>SKU:</label>
        <input name="sku" value={form.sku} onChange={handleChange} required />

        <label>Preço:</label>
        <input
          name="price"
          type="number"
          step="0.01"
          value={form.price}
          onChange={handleChange}
          required
        />

        <label>Quantidade:</label>
        <input
          name="quantity"
          type="number"
          value={form.quantity}
          onChange={handleChange}
          required
        />

        <label>Status:</label>
        <select name="status" value={form.status} onChange={handleChange}>
          <option value="Ativo">Ativo</option>
          <option value="Inativo">Inativo</option>
        </select>

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};
