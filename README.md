# **Flow List** ✨

> **Log three positive moments every day.**

## 📌 **Application Description**

Flow List is a web application that allows you to log and manage three positive moments each day. The application includes:
✅ **Filtering and searching records** (even years back).  
✅ **Tagging experiences** (e.g., friends, work).  
✅ **Saving location to entries** (optional).  
✅ **Reminders for logging** (notifications, monthly summaries).  
✅ **Authentication (custom + Google OAuth)**.  
✅ **Fast record loading**.

---

## 🛠 **Technology Stack**

### **Frontend (Next.js 15+ App Router)**

- **Next.js (React + TypeScript)** – Server Components, Server Actions.
- **Tailwind CSS** – Fast and elegant styling.
- **React Query** – Optimized data fetching.
- **NextAuth.js** – Authentication via Google, GitHub, and email.

### **Backend (NestJS 11+ with Fastify)**

- **NestJS (TypeScript, Fastify)** – API with REST/GraphQL.
- **PostgreSQL + Prisma ORM** – Relational database with robust search capabilities.
- **Redis** – Caching for better performance.
- **BullMQ** – Scheduled notifications.

### **Deployment & DevOps**

- **pnpm + monorepo** – Efficient management of frontend and backend in one repository.
- **Docker** – For easy development and deployment.
- **Vercel / Railway / Render** – Hosting.

---

## 🚀 **How to Run the Project (Locally)**

First, **clone the repository**:

```sh
git clone https://github.com/Ondraa96/flow-list.git
cd flow-list
```

### 1️⃣ **Install dependencies**

```sh
pnpm install
```

### 2️⃣ **Start the database (Docker)**

```sh
docker-compose up -d
```

### 3️⃣ **Apply database migrations**

```sh
pnpm --filter backend prisma migrate dev --name init
```

### 4️⃣ **Start the application**

```sh
pnpm dev
```

🚀 **The application will run at `http://localhost:3000` (Next.js) and `http://localhost:8000` (NestJS API).**

---

## 📂 **Project Structure**

```
📦 flow-list/
┣ 📂 apps/
┃ ┣ 📂 frontend/  # Next.js 15+ (App Router)
┃ ┣ 📂 backend/   # NestJS 11+ (Fastify, Prisma, PostgreSQL)
┣ 📂 packages/     # Shared libraries
┃ ┣ 📂 utils/      # Shared utilities (e.g., data formatting functions)
┃ ┣ 📂 types/      # Shared types (e.g., API interfaces)
┣ 📜 pnpm-workspace.yaml  # Monorepo configuration
┣ 📜 docker-compose.yml  # PostgreSQL instance
┣ 📜 README.md  # This file ✨
```

---

## 🛠 **Developer Tools**

- **Lint & Format:**
  ```sh
  pnpm lint && pnpm format
  ```
- **Activate Husky pre-commit hooks:**
  ```sh
  pnpm prepare
  ```

---

## 📬 **Contributing**

If you want to contribute, **open an issue or a pull request** in the [GitHub repository](https://github.com/Ondraa96/flow-list). 🎉

---

## 📜 **License**

MIT License. 🚀
