# odoo

![Docker Image Version (tag)](https://img.shields.io/docker/v/mintsystem/odoo/18.0)

Mint System Odoo

## Values

Domain: `ingress`

| Key       | Type   | Default            |
| --------- | ------ | ------------------ |
| className | string | `haproxy`          |
| host      | string | `odoo.cloud.local` |

Domain: `vshnpostgresql`

| Key     | Type    | Default |
| ------- | ------- | ------- |
| enabled | boolean | `false` |

Domain: `postgres`

| Key      | Type    | Default    |
| -------- | ------- | ---------- |
| enabled  | boolean | `true`     |
| host     | string  | `postgres` |
| db       | string  | `odoo`     |
| user     | string  | `odoo`     |
| password | string  | `odoo`     |

Domain: `odoo`

| Key                       | Type   | Default                                                                                                       |
| ------------------------- | ------ | ------------------------------------------------------------------------------------------------------------- |
| image                     | string | `mintsystem/odoo:18.0.20250401`                                                                               |
| proxyMode                 | bool   | `True`                                                                                                        |
| githubUserame             | string | ``                                                                                                            |
| githubPersonalAccessToken | string | ``                                                                                                            |
| downloadOdooEnterprise    | bool   | `False`                                                                                                       |
| addonsGitRepos            | string | `https://github.com/Mint-System/Odoo-Apps-Server-Tools.git#18.0,https://github.com/OCA/Server-Tools.git#18.0` |
| database                  | string | `odoo`                                                                                                        |
| initLang                  | string | `de_CH`                                                                                                       |
| listDB                    | string | `False`                                                                                                       |
