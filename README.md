### ✅ `README.md`


# 🐞 BugMesh

**BugMesh** is an s production-grade **Distributed Bug Tracker and Observability Platform**. It enables teams to track bugs, monitor service health, and debug distributed systems in real-time — all in one unified UI.

---

## 🌐 Live Demo

Coming soon...

---

## 🧠 Architecture Goals

- ✅ Microservices-first architecture (modular, testable, isolated)
- ✅ Real-time observability (logs, metrics, service health)
- ✅ Rich RBAC and authentication using Clerk.dev
- ✅ ConnectRPC-based interservice communication
- ✅ Built with developer-first DX and production-readiness in mind

---

## 🧱 Tech Stack

| Layer           | Tech                                                                 |
|----------------|----------------------------------------------------------------------|
| **Frontend**    | Next.js (App Router), Tailwind CSS v4, Clerk.dev                    |
| **Backend**     | Go + ConnectRPC, Protobuf, Temporal, PostgreSQL, Redis              |
| **Infra**       | Docker Compose, Promtail, Loki, Tempo, OpenTelemetry                |
| **Design**      | Monorepo via TurboRepo, PNPM workspaces                             |
| **Auth**        | Clerk.dev (multitenancy/orgs, session management)                   |
| **DB Schema**   | Atlas (for migration), Prisma or GORM (planned)                     |
| **Testing**     | Jest (frontend), Playwright (e2e), Go test suite (backend)          |

---

## 📁 Monorepo Layout

```

BugMesh/
├── apps/
│   ├── web/             # Frontend app (Next.js)
│   ├── api/             # (Planned) Gateway or BFF
│
├── services/            # Go microservices (project-service, issue-service, etc.)
│
├── proto/               # Shared Protobuf schemas
├── infra/               # Docker, Promtail, Tempo, Loki, etc.
├── packages/            # Shared UI libs, hooks, utils

````

---

## 🚀 Getting Started (Local Dev)

### Prerequisites

- Node.js 20+ (via NVM recommended)
- Go 1.22+
- Docker & Docker Compose
- PNPM (`npm i -g pnpm`)

---

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/BugMesh.git
cd BugMesh
````

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Setup Clerk Environment

Create `.env.local` in `apps/web`:

```env
CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
```

---

### 4. Run the Web App

```bash
cd apps/web
pnpm dev
```

---

## 🗺️ Planned Features

* [x] Auth + Dashboard Shell
* [x] Project + Issue List UI
* [ ] Dynamic issue routing
* [ ] Service health polling
* [ ] Real-time log streaming
* [ ] gRPC-based backend services
* [ ] OpenTelemetry tracing + visualization
* [ ] Notification system via Redis + Pub/Sub

---

## 🧑‍💻 Contributing

All contributions are welcome. Please open issues or feature requests!

---

## 📄 License

MIT © Gaurav Tupe

---

## 👀 Inspiration

This project draws ideas from:

* Temporal’s observability stack
* GitHub Issues / Linear.app
* CNCF's open observability patterns

---

