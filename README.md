# eSellers - ERP + Integrador de Marketplaces

**eSellers** é uma plataforma ERP moderna com foco em integração de canais de venda (marketplaces, e-commerces e PDVs), gestão de produtos e pedidos, emissão de notas fiscais e controle de integrações. Esta versão representa o frontend completo do MVP.

---

## 🚀 Tecnologias Utilizadas

- **Frontend:** React + TypeScript
- **Estilo:** CSS Modules com SCSS
- **Gráficos:** Recharts
- **Roteamento:** React Router v6
- **Mock de dados:** localStorage + arquivos `mocks/`

---

## ✅ Funcionalidades do Frontend

- Autenticação com contexto e simulação JWT (`mockUser`)
- Navbar dinâmica (com login/logout) e Sidebar protegida
- Dashboard com:
  - Cards de status de pedidos
  - Gráfico de pizza por status
  - Gráfico de barras por mês
  - Lista de últimos pedidos
- Produtos:
  - Listagem de produtos (manuais e importados)
  - Criação, edição e exclusão de produtos manuais
  - Importação de produtos simulada por canal
- Pedidos:
  - Listagem com filtros por status
  - Visualização de detalhes do pedido
- Integrações:
  - UI de conexão com canais (Mercado Livre, Shopee, Amazon)
  - Simulação de status conectado/não conectado
- Certificados:
  - Formulário de upload de certificado digital `.pfx` com senha
- Página de configurações (`SettingsPage`)
- Página de perfil (visual)
- Página 404 personalizada

---

## 📦 Estrutura de Pastas

```
eSellers-frontend/
├── src/
│   ├── pages/
│   ├── components/
│   ├── mocks/
│   ├── context/
│   ├── hooks/
│   ├── routes/
│   └── styles/
```

---

## 🧪 Como Rodar

```bash
cd eSellers-frontend
npm install
npm run dev
```

---

## 📘 Próximas Etapas (backend)

- Criar endpoints reais para autenticação, produtos, pedidos, integrações, certificados
- Implementar a estrutura modular no backend (conforme docs .NET)
- Conectar o frontend às APIs reais, substituindo mocks
- Aplicar segurança (JWT real, proteção de rotas via token)

---

## ✨ Autor

Lucas Bellucci • @lucasbellucci  
**Vai Corinthians!**
