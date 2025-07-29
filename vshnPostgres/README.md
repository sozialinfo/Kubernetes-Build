# vshnPostgres Helm Chart

This chart deploys a VSHN Postgres service.

## Parameters

### vshnPostgres parameters

| Name                          | Description                               | Value            |
| ----------------------------- | ----------------------------------------- | ---------------- |
| `vshnPostgres.enabled`        | Enable or disable vshnPostgres            | `false`          |
| `vshnPostgres.secretRef`      | The secret reference for vshnPostgres     | `postgres-creds` |
| `vshnPostgres.client.enabled` | Enable or disable the vshnPostgres client | `false`          |
