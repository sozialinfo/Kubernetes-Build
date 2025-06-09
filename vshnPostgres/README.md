# vshnPostgres

VSHN Postgres

This chart deploys a VSHN Postgres service.

## Values

Domain: `vshnPostgres`

| Key           | Type    | Default          |
| ------------- | ------- | ---------------- |
| enabled       | boolean | `false`          |
| secretRef | string  | `postgres-creds`  |
| client.enabled | boolean  | `false`     |