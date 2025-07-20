Kubernetes Build
===

![Vercel](https://vercelbadge.vercel.app/api/mint-system/kubernetes-build)

[![.github/workflows/test.yml](https://github.com/Mint-System/Kubernetes-Build/actions/workflows/test.yml/badge.svg)](https://github.com/Mint-System/Kubernetes-Build/actions/workflows/test.yml)

[![matrix-badge](https://matrix.to/img/matrix-badge.svg)](https://matrix.to/#/#odoo-build:mint-system.ch)

The Mint System collection of Helm Charts.

* 🚀 **Install**: Install Helm repository and get started with Odoo.
* 🛠️ **Develop**: Deploy Odoo and Postgres to a local Kubernetes cluster.
* 🏗️ **Build**: Fork and build your own Helm Charts.

## Usage

Add [this Helm repository](/index.yaml).

```bash
helm repo add kubernetes-build https://kubernetes.build
```

Install a chart.

```bash
helm install "$NAME" "kubernetes-build/$NAME"
```

## Charts

List of charts:

* [odoo](/odoo/README.md)
* [postgres](/postgres/README.md)
* [vshnPostgres](/vshnPostgres/README.md)

## APPUiO

Setup and deploy the Helm charts with [APPUiO](https://portal.appuio.cloud/).

### Login with OpenShift

Open the OpenShift console in your zone.

Click on the username on the top right and select *Copy login command*.

In the new tab click *Display token* and copy the *Login with this token* command.

Run the command in your shell.

### Setup project

If not alrady done, create a project with the oc cli.

```bash
oc new-project odoo
```

### Create Odoo release

Add this Helm repo to the local index.

```bash
task add-repos
```

Install the Helm release.

```bash
task install-chart-odoo-appuio
```

### Publish Helm Charts

In your zone open *Helm > Tab Repositories > Create > Repository* and enter:

* **Name**: `kubernetes-build`
* **Display name**: `Kubernetes Build`
* **Description**: `The Mint System collection of Helm Charts.`
* **URL**: <https://kubernetes.build>

### Create release from web console

In your zone open *Helm > Tab Helm Releases > Create > Helm Release* and filter `Odoo`. Click on the Helm Chart and select *Create*.

Change these values:

```yaml
ingress:
  host: odoo.exo.mintcloud.ch
  secure: true
vshnPostgres:
  enabled: true
postgres:
  enabled: false
```

Confirm with *Create*.

## Develop

Setup a local Kubernetes cluster and deploy the Helm charts locally.

### Requirements

* Install [Helm](https://helm.sh/docs/intro/install/) and [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl)
* Setup [kind](https://kind.sigs.k8s.io/) or [minikube](https://minikube.sigs.k8s.io/docs/)
* Optional: bash/zsh alias `task='./task'` with [completion](https://taskfile.build/#completion).

Clone the repository:

```bash
git clone git@github.com:Mint-System/Kubernetes-Build.git
cd Kubernetes-Build
```

### Start Kubernetes cluster

Start Kubernetes with `kind`.

```bash
task start-kind
```

Or start Kubernetes with `minikube`.

```bash
task start-minikube
```

### Deploy Odoo to Kubernetes

Ensure you have `kubectl` installed and can access the cluster.

Add this repo for Chart dependencies.

```bash
task add-repos
```

If not already done setup the hosts.

```bash
task setup-hosts
```

Template the .env file.

```bash
task template-dotenv
```

The following command applies the Odoo chart:

```bash
task install-chart-odoo
```

The Odoo database will initialized automtically.

### Forward Odoo service

Once the pod is ready, run this command to port forward the service:

```bash
task forward-odoo
```

### Setup ingress nginx controller

Install ingress-nginx in the current cluster.

```bash
task install-ingress-nginx
```

Forward the ingress-nginx port.

```bash
task forward-ingress-nginx
```

### Setup haproxy ingress controller

Install haproxy-ingress in the current cluster.

```bash
task install-haproxy-ingress
```

Forward the haproxy-ingress port.

```bash
task forward-haproxy-ingress
```

### Release

Adjust the version in the `Chart.yaml` files.

Create new packages for all charts.

```bash
task package-repo
```

Commit and push the files.

## Troubleshooting

### Debug the Postgres instance

When deploying the Postgres container with this project the client option is enabled.

```yml
postgres.client.enabled=true
vshnPostgres.client.enabled=true
```

You can enter an interactive shell on the client container.

```bash
kubectl exec -it postgres-client -- bash
```

In the shell try to connect to the cluster.

```bash
PGPASSWORD=$POSTGRES_PASSWORD psql -h $POSTGRES_HOST -d $POSTGRES_DB -U $POSTGRES_USER
```

When connection from APPUiO use this command:

```bash
psql --set=sslmode=verify-ca --set=sslrootcert=/etc/secret-volume/ca.crt -h $POSTGRESQL_HOST -d $POSTGRESQL_DB -U $POSTGRESQL_USER
```
