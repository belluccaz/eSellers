# eSellers

**eSellers** é uma plataforma de ERP (Enterprise Resource Planning) com integração nativa a marketplaces e módulos fiscais. Desenvolvida com foco em escalabilidade, modularidade e usabilidade.

## ✨ Funcionalidades principais

- Gestão de produtos, estoque, pedidos, clientes e fornecedores
- Emissão de NF-e e NFC-e com comunicação direta à SEFAZ
- Módulo financeiro e painel de inteligência (F&I)
- Integração com marketplaces (Mercado Livre, Amazon, Shopee, etc.)
- Integração futura com canais de revenda (Avon, Natura, Polishop)

## 🛠️ Tecnologias utilizadas

### Frontend
- React + TypeScript
- CSS Modules (SCSS)
- React Router, Axios

### Backend
- ASP.NET Core
- Clean Architecture + DDD
- PostgreSQL
- JWT para autenticação
- Swagger para documentação da API

### DevOps
- Docker e Docker Compose
- GitHub Actions (CI/CD)

## 📁 Estrutura de pastas (parcial)

```
eSellers/
├── backend/
│   ├── eSellers.API
│   ├── eSellers.Application
│   ├── eSellers.Domain
│   └── eSellers.Infrastructure
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   └── styles/
└── docker-compose.yml
```

## 🚀 Como rodar localmente

### Pré-requisitos

- Node.js (v18 ou superior)
- .NET 8 SDK
- Docker e Docker Compose
- PostgreSQL

### Comandos

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/esellers.git
cd esellers

# Suba os serviços com Docker
docker-compose up --build
```

## 📄 Planejamento Ágil

O desenvolvimento é guiado por sprints. Consulte o arquivo `docs/eSellers_Planejamento_Sprints.pdf` para visualizar o cronograma completo.

## 📌 Status

> 🚧 MVP em desenvolvimento (Sprint 1)

---

Desenvolvido por [Lucas Bellucci Almendra](https://github.com/lucasbellucci) • Vai Corinthians! 🖤🤍