---
sidebar_position: 2
---

# Getting Started

This guide walks you through running the full application stack locally using Docker Compose.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) with the Compose plugin
- Git

## 1. Clone the repository

```bash
git clone <repo-url>
cd app
```

## 2. Configure environment variables

All configuration lives in `deployment/.env`. Copy the example and fill in your values:

```bash
cp deployment/.env.example deployment/.env
```

The key variables to set:

```env
# App database
POSTGRES_USER=myuser
POSTGRES_PASSWORD=mypassword
POSTGRES_DB=mydatabase

# Keycloak database
KC_DB_NAME=keycloak
KC_DB_USER=keycloak
KC_DB_PASSWORD=keycloak

# Keycloak admin credentials
KEYCLOAK_ADMIN=admin
KEYCLOAK_ADMIN_PASSWORD=admin

# Keycloak client secret (get this from the Keycloak admin console after first boot)
KEYCLOAK_CLIENT_SECRET=<your-secret>

# Exposed ports
API_PORT=8000
KEYCLOAK_PORT=8080
WEB_PORT=80
SSL_PORT=443
```

:::info
`KEYCLOAK_CLIENT_SECRET` can be left blank on first boot. After Keycloak starts, retrieve the secret from the admin console (`api-backend` client → Credentials tab) and restart the API.
:::

## 3. Start the stack

```bash
cd deployment
sudo docker compose -f docker-compose.dev.yml up --build
```

This starts all services: PostgreSQL, Keycloak, the API (with DB migrations), and the frontend.

Once running:

| Service | URL |
|---------|-----|
| Frontend | http://localhost |
| API docs (Swagger) | http://localhost:8000/docs |
| Keycloak admin | http://localhost:8080 |

## 4. Log in to Keycloak

Go to [http://localhost:8080](http://localhost:8080) and log in with the admin credentials you set in `.env`.

The `edupro` realm is imported automatically from `deployment/keycloak-config/realm.json`. It includes:
- Realm: `edupro`
- Client: `api-backend` (confidential) and `frontend` (public)
- Roles: `manager`, `professor`

To get the API client secret:
1. Open the `edupro` realm
2. Go to **Clients → api-backend → Credentials**
3. Copy the secret into `deployment/.env` as `KEYCLOAK_CLIENT_SECRET`
4. Restart the API: `sudo docker compose -f docker-compose.dev.yml restart api`

## 5. Create your first user

In the Keycloak admin console:
1. Go to **Users → Add user**
2. Set a username and email, then **Save**
3. Go to the **Credentials** tab and set a password
4. Go to the **Role mappings** tab and assign a realm role (`manager` or `professor`)

Alternatively, use the API endpoint once you have a manager token:

```bash
POST /api/users/create
Authorization: Bearer <manager-token>

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "secret",
  "first_name": "John",
  "last_name": "Doe",
  "realm_role": "professor"
```

## Running specific components

You can start only the parts you need:

```bash
# Database only
sudo docker compose -f docker-compose.db.yml up

# Database + API (useful when running the frontend locally with npm)
sudo docker compose -f docker-compose.db.yml -f docker-compose.api.yml up

# Database + Keycloak (no API/frontend)
sudo docker compose -f docker-compose.db.yml -f docker-compose.keycloak.yml up
```

To stop everything:
```bash
sudo docker compose down
```

## Running the API without Docker

If you prefer to run the API directly:

```bash
cd api
uv sync
uv run fastapi dev src/main.py
```

Requires Python 3.12+ and [uv](https://docs.astral.sh/uv/). The API expects a running PostgreSQL instance and Keycloak — configure them in `api/.env`.

## Running the frontend without Docker

```bash
cd web
npm install
npm run dev
```

The frontend reads its config from `web/.env`:

```env
VITE_API_URL=http://localhost:8000/api
VITE_KEYCLOAK_URL=http://localhost:8080
VITE_KEYCLOAK_REALM=edupro
VITE_KEYCLOAK_CLIENT_ID=frontend
```

## Troubleshooting

**API fails to start with a Keycloak connection error**  
Keycloak may still be initialising. Wait ~30 seconds and restart the API container.

**`KEYCLOAK_CLIENT_SECRET` is wrong**  
Retrieve the correct secret from the Keycloak admin console (see step 4) and restart the API.

**Port already in use**  
Change the port in `deployment/.env` (e.g. `API_PORT=8001`) and restart the stack.

**Database migration fails**  
Check that the `db` service is healthy before `migrate` runs. Inspect logs with:
```bash
sudo docker compose -f docker-compose.dev.yml logs migrate
```
