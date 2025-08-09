# Mint System Postgres

This chart deploys a Postgres container and stores the credentials in a secret.

## Parameters

### Postgres parameters

| Name               | Description                             | Value                |
| ------------------ | --------------------------------------- | -------------------- |
| `enabled`          | Enable or disable Postgres              | `true`               |
| `image`            | The Docker image for Postgres           | `postgres:16-alpine` |
| `port`             | The port for Postgres                   | `5432`               |
| `db`               | The database name for Postgres          | `postgres`           |
| `user`             | The username for Postgres               | `postgres`           |
| `password`         | If not set a password will be generated | `nil`                |
| `secretRef`        | The secret reference for Postgres       | `postgres`           |
| `userPasswordKey`  | The user password key for Postgres      | `password`           |
| `storageClassName` | Set the storage class                   | `nil`                |
