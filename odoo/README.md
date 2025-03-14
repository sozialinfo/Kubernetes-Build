# odoo

![Docker Image Version (tag)](https://img.shields.io/docker/v/mintsystem/odoo/18.0)

Mint System Odoo

## Values

Prefix: `postgres`

| Key      | Type   | Default              |
| -------- | ------ | -------------------- |
| image    | string | `postgres:16-alpine` |

Prefix: `odoo`

| Key            | Type   | Default                                                                                                       |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------- |
| image          | string | `mintsystem/odoo:18.0.20250207`                                                                               |
| pgHost         | string | `postgres`                                                                                                    |
| user           | string | `odoo`                                                                                                        |
| password       | string | `odoo`                                                                                                        |
| proxyMode      | string | `True`                                                                                                        |
| addonsGitRepos | string | `https://github.com/Mint-System/Odoo-Apps-Server-Tools.git#18.0,https://github.com/OCA/Server-Tools.git#18.0` |
| database       | string | `odoo`                                                                                                        |
| initLang       | string | `de_CH`                                                                                                       |

