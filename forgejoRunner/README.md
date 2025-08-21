# Mint System forgejoRunner

Setup a Forgejo runner to run actions.

## Parameters

### Forgejo Runner parameters

| Name                   | Description                                 | Value                               |
| ---------------------- | ------------------------------------------- | ----------------------------------- |
| `image`                | The image for the Forgejo Runner            | `code.forgejo.org/forgejo/runner:9` |
| `forgejoInstanceUrl`   | Forgejo instance url.                       | `https://codeberg.org`              |
| `secretRef`            | The secret reference for the Forgejo Runner | `forgejo-runner`                    |
| `forgejoInstanceToken` | Forgejo instance access token.              | `""`                                |

