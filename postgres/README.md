# postgres

![Docker Image Version (tag)](https://img.shields.io/docker/v/_/postgres/16.0-alpine)

Mint System Postgres

## Values

Domain: `postgres`

| Key          | Type    | Default              |
| ------------ | ------- | -------------------- |
| image        | string  | `postgres:16-alpine` |
| host         | string  | `postgres`           |
| port         | integer | `5432`               |
| secretRef    | string  | `postgres-creds`     |
| db           | string  | `odoo`               |
| user         | string  | `odoo`               |
| appSecretRef | string  | `postges-odoo`       |
