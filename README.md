# eSellers - ERP + Integrador de Marketplaces

O **eSellers** é um sistema ERP moderno com foco em integração de canais de venda (e-commerce, PDV, marketplaces). Ele possibilita a gestão completa de pedidos, produtos, clientes e integrações, com emissão de NF-e e comunicação com SEFAZ.

---

## 🔧 Tecnologias

- **Frontend:** React + TypeScript + CSS Modules (SCSS)
- **Backend:** ASP.NET Core 8 (em desenvolvimento)
- **Banco de Dados:** PostgreSQL via Docker
- **Outros:** JWT, Swagger, Docker Compose

---

## 🖥️ Funcionalidades já implementadas

### ✅ Frontend

- Autenticação com JWT (mock ativo)
- Navbar dinâmica com rotas protegidas
- Sidebar exibida somente para usuários autenticados
- Dashboard com:
  - Cards de status de pedidos
  - Gráfico de pizza por status (`recharts`)
  - Gráfico de barras por mês (`recharts`)
  - Lista de últimos pedidos
- Produtos:
  - Listagem de produtos (manuais e integrados)
  - Criação de produto manual
  - Edição de produto manual
  - Exclusão de produto manual
  - Importação de produtos de canais (mockados: Mercado Livre e Shopee)
- Pedidos:
  - Listagem com filtro por status
  - Visualização de detalhes

---

## 🚧 Próximas etapas

- Página `SettingsPage` com:
  - Preferências
  - Gerenciamento de Integrações
- Integração real com backend (produtos/pedidos)
- Edição de perfil
- Dashboard modularizada por perfil

---

## 💬 Modo desenvolvimento

- Rodar frontend:
  ```bash
  cd eSellers-frontend
  npm install
  npm run dev
  ```

- Backend em breve...

---

## 📁 Organização

```
eSellers/
├── eSellers-frontend/
│   ├── pages/
│   ├── components/
│   ├── mocks/
│   └── styles/
├── eSellers-backend/  (em desenvolvimento)
└── docs/
```

---

## ✨ Autor

Lucas Bellucci • @lucasbellucci  
**Vai Corinthians!**