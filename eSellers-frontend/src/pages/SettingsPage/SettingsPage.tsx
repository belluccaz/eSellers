import styles from "./SettingsPage.module.scss";
import { IntegrationsSection } from "../../components/IntegrationsSection/IntegrationsSection";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

export const SettingsPage = () => {
  const [certFile, setCertFile] = useState<File | null>(null);
  const [certPassword, setCertPassword] = useState("");
  const { user } = useAuth();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setCertFile(file);
  };

  const handleSubmitCert = (e: React.FormEvent) => {
    e.preventDefault();

    if (!certFile) {
      alert("Selecione um arquivo .pfx");
      return;
    }

    alert(`Arquivo "${certFile.name}" enviado com senha.`);

    // 🔒 Futuro: envio real para o backend
    // const formData = new FormData();
    // formData.append("certificate", certFile);
    // formData.append("password", certPassword);

    // await fetch("/api/sefaz/certificate", {
    //   method: "POST",
    //   headers: { Authorization: `Bearer ${token}` },
    //   body: formData,
    // });
  };

  return (
    <div className={styles.container}>
      <h2>Configurações</h2>

      <div className={styles.section}>
        <h3>Perfil do Usuário</h3>
        <div className={styles.profile}>
          <p>
            <strong>Nome:</strong> {user?.fullName || "—"}
          </p>
          <p>
            <strong>E-mail:</strong> {user?.email || "—"}
          </p>
          <p>
            <strong>CPF:</strong> {user?.cpf || "123.456.789-00"}
          </p>
          <p>
            <strong>Endereço:</strong>{" "}
            {user?.address || "Rua Exemplo, 123 - SP"}
          </p>
          <button className={styles.editButton}>Editar</button>
        </div>
      </div>

      <div className={styles.section}>
        <IntegrationsSection />
      </div>
      <div className={styles.section}>
        <h3>Certificados Digitais (NF-e)</h3>
        <form onSubmit={handleSubmitCert} className={styles.certForm}>
          <label>Upload do arquivo .pfx:</label>
          <input
            type="file"
            accept=".pfx"
            onChange={handleFileChange}
            required
          />

          <label>Senha do certificado:</label>
          <input
            type="password"
            value={certPassword}
            onChange={(e) => setCertPassword(e.target.value)}
            required
          />

          <button type="submit">Enviar Certificado</button>
        </form>
      </div>
    </div>
  );
};
