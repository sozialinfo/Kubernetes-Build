# odoo

![Docker Image Version (tag)](https://img.shields.io/docker/v/mintsystem/odoo/18.0)

Mint System Odoo

Sets up Odoo with a Postgres container. The connection credentials are mapped from the Postgres secret.

## Values

Chart: `ingress`

| Key          | Type    | Default            |
| ------------ | ------- | ------------------ |
| className    | string  | `nginx`            |
| host         | string  | `odoo.cloud.local` |
| customDomain | string  | `odoo.local`       |
| secure       | booelan | `false`            |

Chart: `vshnPostgres`

| Key           | Type    | Default          |
| ------------- | ------- | ---------------- |
| enabled       | boolean | `false`          |
| secretRef | string  | `postgres-creds`  |
| client.enabled | boolean  | `false`     |

Chart: `postgres`

| Key          | Type    | Default          |
| ------------ | ------- | ---------------- |
| enabled      | boolean | `true`           |
| secretRef | string  | `postgres-creds`  |
| client.enabled | boolean  | `false`     |

Chart: `odoo`

| Key                       | Type    | Default                                                                                                       |
| ------------------------- | ------- | ------------------------------------------------------------------------------------------------------------- |
| enabled                   | boolean | `true`                                                                                                        |
| image                     | string  | `mintsystem/odoo:18.0.20250520`                                                                               |
| proxyMode                 | bool    | `True`                                                                                                        |
| githubUserame             | string  | `""`                                                                                                          |
| githubPersonalAccessToken | string  | `""`                                                                                                          |
| downloadOdooEnterprise    | bool    | `False`                                                                                                       |
| addonsGitRepos            | string  | `https://github.com/Mint-System/Odoo-Apps-Server-Tools.git#18.0,https://github.com/OCA/Server-Tools.git#18.0` |
| database                  | string  | `odoo`                                                                                                        |
| initLang                  | string  | `de_CH`                                                                                                       |
| listDB                    | string  | `False`                                                                                                       |
| configMapRef              | string  | `odoo-config`                                                                                                 |
| secretRef                 | string  | `odoo-creds`                                                                                                  |
