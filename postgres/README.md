# Postgres Helm Chart

This chart deploys a Postgres container and stores the credentials in a secret.

## Parameters

### Postgres parameters

| Name                      | Description                           | Value                |
| ------------------------- | ------------------------------------- | -------------------- |
| `postgres.image`          | The Docker image for Postgres         | `postgres:16-alpine` |
| `postgres.host`           | The host for Postgres                 | `postgres`           |
| `postgres.port`           | The port for Postgres                 | `5432`               |
| `postgres.db`             | The database name for Postgres        | `odoo`               |
| `postgres.user`           | The username for Postgres             | `odoo`               |
| `postgres.secretRef`      | The secret reference for Postgres     | `postgres-creds`     |
| `postgres.client.enabled` | Enable or disable the Postgres client | `false`              |
