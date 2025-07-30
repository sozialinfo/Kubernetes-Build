# Mint System Odoo

This Helm chart deploys Odoo with PostgreSQL.

## Parameters

### Ingress parameters

| Name                       | Description                                  | Value              |
| -------------------------- | -------------------------------------------- | ------------------ |
| `ingress.enabled`          | Enable or disable the ingress                | `true`             |
| `ingress.className`        | The class name for the ingress               | `nginx`            |
| `ingress.clusterIssuerRef` | The cluster issuer reference for the ingress | `nil`              |
| `ingress.host`             | The host for the ingress                     | `odoo.cloud.local` |
| `ingress.customDomain`     | The custom domain for the ingress            | `""`               |

### vshnPostgres parameters

| Name                          | Description                               | Value            |
| ----------------------------- | ----------------------------------------- | ---------------- |
| `vshnPostgres.enabled`        | Enable or disable vshnPostgres            | `false`          |
| `vshnPostgres.secretRef`      | The secret reference for vshnPostgres     | `postgres-creds` |
| `vshnPostgres.client.enabled` | Enable or disable the vshnPostgres client | `false`          |

### Postgres parameters

| Name                      | Description                           | Value            |
| ------------------------- | ------------------------------------- | ---------------- |
| `postgres.enabled`        | Enable or disable postgres            | `false`          |
| `postgres.secretRef`      | The secret reference for postgres     | `postgres-creds` |
| `postgres.client.enabled` | Enable or disable the postgres client | `false`          |

### PostgreSQL parameters

| Name                                          | Description                                     | Value               |
| --------------------------------------------- | ----------------------------------------------- | ------------------- |
| `postgresql.enabled`                          | Enable or disable PostgreSQL                    | `true`              |
| `postgresql.auth.username`                    | The username for PostgreSQL authentication      | `odoo`              |
| `postgresql.auth.database`                    | The database name for PostgreSQL authentication | `odoo`              |
| `postgresql.auth.existingSecret`              | Name of the secret key.                         | `odoo-postgresql`   |
| `postgresql.auth.secretKeys.adminPasswordKey` | The admin password key for PostgreSQL           | `postgres-password` |
| `postgresql.auth.secretKeys.userPasswordKey`  | The user password key for PostgreSQL            | `password`          |

### Odoo parameters

| Name                             | Description                                   | Value                                                                                                         |
| -------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `odoo.enabled`                   | Enable or disable odoo                        | `true`                                                                                                        |
| `odoo.image`                     | The image for odoo                            | `mintsystem/odoo:18.0.20250725`                                                                               |
| `odoo.proxyMode`                 | Enable or disable proxy mode for odoo         | `true`                                                                                                        |
| `odoo.githubUsername`            | The GitHub username for odoo                  | `""`                                                                                                          |
| `odoo.githubPersonalAccessToken` | The GitHub personal access token for odoo     | `""`                                                                                                          |
| `odoo.downloadOdooEnterprise`    | Enable or disable downloading Odoo Enterprise | `false`                                                                                                       |
| `odoo.addonsGitRepos`            | The addons Git repositories for odoo          | `https://github.com/Mint-System/Odoo-Apps-Server-Tools.git#18.0,https://github.com/OCA/Server-Tools.git#18.0` |
| `odoo.database`                  | The database for odoo                         | `odoo`                                                                                                        |
| `odoo.initLang`                  | The initial language for odoo                 | `de_CH`                                                                                                       |
| `odoo.listDB`                    | Enable or disable listing databases for odoo  | `false`                                                                                                       |
| `odoo.configMapRef`              | The config map reference for odoo             | `odoo-config`                                                                                                 |
| `odoo.secretRef`                 | The secret reference for odoo                 | `odoo-creds`                                                                                                  |
