# Mint System Odoo

This Helm chart deploys Odoo with PostgreSQL.

## Parameters

### Ingress parameters

| Name                       | Description                                  | Value            |
| -------------------------- | -------------------------------------------- | ---------------- |
| `ingress.enabled`          | Enable or disable the ingress                | `true`           |
| `ingress.className`        | The class name for the ingress               | `nginx`          |
| `ingress.clusterIssuerRef` | The cluster issuer reference for the ingress | `nil`            |
| `ingress.host`             | The host for the ingress                     | `odoo.knd.local` |
| `ingress.customDomain`     | The custom domain for the ingress            | `""`             |

### vshnPostgres parameters

| Name                          | Description                               | Value             |
| ----------------------------- | ----------------------------------------- | ----------------- |
| `vshnPostgres.enabled`        | Enable or disable vshnPostgres            | `false`           |
| `vshnPostgres.secretRef`      | The secret reference for vshnPostgres     | `odoo-postgresql` |
| `vshnPostgres.client.enabled` | Enable or disable the vshnPostgres client | `false`           |

### Postgres parameters

| Name                        | Description                       | Value           |
| --------------------------- | --------------------------------- | --------------- |
| `postgres.enabled`          | Enable or disable Postgres        | `false`         |
| `postgres.db`               | The database name for Postgres    | `odoo`          |
| `postgres.user`             | The username for Postgres         | `odoo`          |
| `postgres.secretRef`        | The secret reference for Postgres | `odoo-postgres` |
| `postgres.storageClassName` | Set the storage class             | `standard`      |

### PostgreSQL parameters

| Name                                          | Description                                     | Value               |
| --------------------------------------------- | ----------------------------------------------- | ------------------- |
| `postgresql.enabled`                          | Enable or disable PostgreSQL                    | `false`             |
| `postgresql.auth.username`                    | The username for PostgreSQL authentication      | `odoo`              |
| `postgresql.auth.database`                    | The database name for PostgreSQL authentication | `odoo`              |
| `postgresql.auth.existingSecret`              | Name of the secret key.                         | `odoo-postgresql`   |
| `postgresql.auth.secretKeys.adminPasswordKey` | The admin password key for PostgreSQL           | `postgres-password` |
| `postgresql.auth.secretKeys.userPasswordKey`  | The user password key for PostgreSQL            | `password`          |

### CloudNativePG parameters

| Name           | Description                     | Value  |
| -------------- | ------------------------------- | ------ |
| `cnpg.enabled` | Enable or disable CloudNativePG | `true` |

### Odoo parameters

| Name                        | Description                                   | Value                                                                                                                                                         |
| --------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enabled`                   | Enable or disable odoo                        | `true`                                                                                                                                                        |
| `image`                     | The image for odoo                            | `mintsystem/odoo:18.0.20250725`                                                                                                                               |
| `imagePullPolicy`           | Pull policy for odoo image                    | `Always`                                                                                                                                                      |
| `proxyMode`                 | Enable or disable proxy mode for odoo         | `true`                                                                                                                                                        |
| `githubUsername`            | The GitHub username for odoo                  | `""`                                                                                                                                                          |
| `githubPersonalAccessToken` | The GitHub personal access token for odoo     | `""`                                                                                                                                                          |
| `downloadOdooEnterprise`    | Enable or disable downloading Odoo Enterprise | `false`                                                                                                                                                       |
| `addonsGitRepos`            | List of addon Git repositories for odoo       | `["https://github.com/Mint-System/Odoo-Apps-Server-Tools.git#18.0","https://github.com/OCA/Server-Tools.git#18.0","https://github.com/OCA/Project.git#18.0"]` |
| `database`                  | The database for odoo                         | `odoo`                                                                                                                                                        |
| `initLang`                  | The initial language for odoo                 | `de_CH`                                                                                                                                                       |
| `listDB`                    | Enable or disable listing databases for odoo  | `false`                                                                                                                                                       |
| `secretRef`                 | The secret reference for odoo                 | `odoo-creds`                                                                                                                                                  |

### K8up parameters

| Name           | Description            | Value   |
| -------------- | ---------------------- | ------- |
| `k8up.enabled` | Enable or disable K8up | `false` |
