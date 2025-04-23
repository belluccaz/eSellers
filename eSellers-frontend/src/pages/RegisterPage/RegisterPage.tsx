import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../services/api";
import styles from "./RegisterPage.module.scss";

export const RegisterPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirm) {
      setError("As senhas não coincidem.");
      return;
    }

    try {
      await axios.post("/api/Auth/register", {
        fullName,
        email,
        password,
      });
      navigate("/login");
    } catch {
      setError("Erro ao cadastrar. Verifique os dados.");
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>Cadastro</h2>
          <input
            type="text"
            placeholder="Nome completo"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirmar senha"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};
