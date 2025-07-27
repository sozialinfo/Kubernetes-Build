# cluster-issuer

Mint System Cluster Issuer

This chart deploys a cluster issuer.

## Values

Domain: `acme`

| Key                | Type   | Default             |
| ------------------ | ------ | ------------------- |
| email              | string | `login@example.com` |
| solver             | string | `infomaniak`        |
| InfomaniakApiToken | string |                     |

### Infomaniak

The `infomaniak` solver uses <https://github.com/Infomaniak/cert-manager-webhook-infomaniak>.
