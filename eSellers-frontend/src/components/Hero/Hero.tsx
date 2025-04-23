// src/components/Hero/Hero.tsx
import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>
        Controle suas <span>vendas</span> com <span>facilidade</span> e{" "}
        <span>inteligência</span>
      </h1>
      <p>
        O <span>eSellers</span> é a plataforma ideal para gerenciar seus
        pedidos, estoques e lucros em um só lugar.
      </p>
      <form>
        <input type="email" placeholder="Seu e-mail" required />
        <button type="submit">Comece grátis</button>
      </form>
      <small>Sem fidelidade. Teste grátis por 30 dias.</small>
      <div className={styles.placeholder}>Imagem de demonstração aqui</div>
    </section>
  );
};
