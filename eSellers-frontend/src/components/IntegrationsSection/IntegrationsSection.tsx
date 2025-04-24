import styles from "./IntegrationsSection.module.scss";
import { useEffect, useState } from "react";

interface IntegrationStatus {
  [key: string]: boolean;
}

export const IntegrationsSection = () => {
  const [status, setStatus] = useState<IntegrationStatus>({});

  useEffect(() => {
    //Simula consulta ao backend com estados de conexão
    setTimeout(() => {
      setStatus({
        "Mercado Livre": false,
        Shopee: true,
        Amazon: false,
      });
    }, 500);

    // 🔒 Futuro: buscar status real
    // fetch("/api/integrations/status", { headers: { Authorization: `Bearer ${token}` } })
    //   .then(res => res.json())
    //   .then(data => setStatus(data));
  });

  const handleConnect = (canal: string) => {
    alert(`Conectando com ${canal}...`);

    // 🔒 Futuro:
    // fetch(`/api/integrations/${canal}/auth-url`)
    //   .then(res => res.json())
    //   .then(data => window.location.href = data.authUrl);
  };

  const handleDisconnect = (canal: string) => {
    alert(`Desconectando de ${canal}...`);

    // 🔒 Futuro:
    // fetch(`/api/integrations/${canal}/disconnect`, { method: "DELETE" })
  };

  const canais = Object.keys(status);

  return (
    <div className={styles.container}>
      <h3>Integrações com Marketplaces</h3>

      {canais.map((canal) => (
        <div className={styles.card} key={canal}>
          <h4>{canal}</h4>
          <p>Status: {status[canal] ? "Conectado" : "Não conectado"}</p>
          {status[canal] ? (
            <button onClick={() => handleDisconnect(canal)}>Desconectar</button>
          ) : (
            <button onClick={() => handleConnect(canal)}>Conectar</button>
          )}
        </div>
      ))}
    </div>
  );
};
