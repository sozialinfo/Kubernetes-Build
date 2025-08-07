# Mint System clusterIssuer

This chart deploys cluster issuers for prod and staging and for dns and http.

## Parameters

### ACME parameters

| Name          | Description                | Value               |
| ------------- | -------------------------- | ------------------- |
| `acme.email`  | The email address for ACME | `login@example.com` |
| `acme.solver` | The solver for ACME        | `infomaniak`        |
