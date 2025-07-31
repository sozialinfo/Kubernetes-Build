# Mint System Postgres

This chart deploys a Postgres container and stores the credentials in a secret.

## Parameters

### Postgres parameters

| Name                       | Description                             | Value                |
| -------------------------- | --------------------------------------- | -------------------- |
| `postgres.enabled`         | Enable or disable Postgres              | `true`               |
| `postgres.image`           | The Docker image for Postgres           | `postgres:16-alpine` |
| `postgres.port`            | The port for Postgres                   | `5432`               |
| `postgres.db`              | The database name for Postgres          | `postgres`           |
| `postgres.user`            | The username for Postgres               | `postgres`           |
| `postgres.password`        | If not set a password will be generated | `nil`                |
| `postgres.secretRef`       | The secret reference for Postgres       | `postgres`           |
| `postgres.userPasswordKey` | The user password key for Postgres      | `password`           |
