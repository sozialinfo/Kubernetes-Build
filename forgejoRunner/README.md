# Mint System forgejoRunner

Setup a Forgejo runner to run actions.

## Secrets

To register the runner set up a `forgejo-runner` secret with the token.

```bash
kubectl create secret generic forgejo-runner \
    --from-literal=forgejoInstanceToken="$FORGEJO_INSTANCE_TOKEN" \
    -n <namespace>
```

## Parameters

### Forgejo Runner parameters

| Name                 | Description                                 | Value                               |
| -------------------- | ------------------------------------------- | ----------------------------------- |
| `image`              | The image for the Forgejo Runner            | `code.forgejo.org/forgejo/runner:9` |
| `forgejoInstanceUrl` | Forgejo instance url.                       | `https://codeberg.org`              |
| `secretRef`          | The secret reference for the Forgejo Runner | `forgejo-runner`                    |
