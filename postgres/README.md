# postgres

![Docker Image Version (tag)](https://img.shields.io/docker/v/_/postgres/16.0-alpine)

Mint System Postgres

This chart deploys a Postgres container and stores the credentials in a secret.

## Values

Domain: `postgres`

| Key            | Type    | Default              |
| -------------- | ------- | -------------------- |
| image          | string  | `postgres:16-alpine` |
| host           | string  | `postgres`           |
| port           | integer | `5432`               |
| db             | string  | `odoo`               |
| user           | string  | `odoo`               |
| password       | string  |                      |
| secretRef      | string  | `postgres-creds`     |
| client.enabled | boolean | `false`              |
