# postgres

![Docker Image Version (tag)](https://img.shields.io/docker/v/_/postgres/16.0-alpine)

Mint System Postgres

## Values

Domain: `postgres`

| Key          | Type   | Default              |
| ------------ | ------ | -------------------- |
| configMapRef | string | `postgres-config`    |
| secretRef    | string | `postgres-creds`     |
| image        | string | `postgres:16-alpine` |
| host         | string | `postgres`           |
| db           | string | `odoo`               |
| user         | string | `odoo`               |
| password     | string | `odoo`               |
