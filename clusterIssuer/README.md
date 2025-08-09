# Mint System clusterIssuer

This chart deploys cluster issuers for prod and staging and for dns and http.

## Parameters

### Acme parameters

| Name          | Description                 | Value               |
| ------------- | --------------------------- | ------------------- |
| `acme.email`  | Registration e-mail adresss | `login@example.com` |
| `acme.solver` | Setup dns solver            | `infomaniak`        |
