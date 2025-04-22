# eSellers

**eSellers** é um sistema ERP + integrador de marketplaces, desenvolvido com foco em escalabilidade, modularidade e integração fiscal, comercial e logística.

---

## 🚀 Tecnologias

### Frontend
- [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- Nginx para servir a aplicação

### Backend
- [ASP.NET Core 8](https://learn.microsoft.com/aspnet/core)
- [Entity Framework Core](https://learn.microsoft.com/ef/core)
- [PostgreSQL](https://www.postgresql.org/)
- JWT para autenticação
- Swagger para documentação da API
- Clean Architecture + DDD

### DevOps
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## 📁 Estrutura de Pastas

```
eSellers/
├── docker-compose.yml
├── .env
├── eSellers-frontend/           # React com Vite + Nginx
│   ├── Dockerfile
│   └── ...
├── eSellers-backend/            # ASP.NET Core
│   ├── Dockerfile
│   ├── eSellers.API/
│   ├── eSellers.Application/
│   ├── eSellers.Domain/
│   └── eSellers.Infrastructure/
```

---

## 📦 Como rodar o projeto

> Requisitos: Docker + Docker Compose

```bash
docker compose up --build
```

Acessos:
- Frontend: http://localhost:3000
- Backend (Swagger): http://localhost:5000/swagger
- Banco de dados PostgreSQL: localhost:5432

---

## 🔐 Funcionalidades já implementadas

- Autenticação via JWT
- Registro e login de usuários
- Comunicação entre frontend e backend via containers
- Persistência com PostgreSQL

---

## 🔧 Em desenvolvimento

- CRUDs completos (produtos, pedidos, clientes)
- Emissão de NF-e/NFC-e e comunicação com SEFAZ
- Integração com marketplaces (Mercado Livre, Amazon, Shopee)
- Módulo F&I (financeiro e inteligência)
- Painel para canais de revenda (Avon, Natura, Polishop)

---

## 📘 Licença

MIT © Lucas Bellucci Almendra