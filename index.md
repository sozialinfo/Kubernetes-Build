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

## APPUiO

Setup and deploy the Helm charts with [APPUiO](https://portal.appuio.cloud/).

### Setup Helm repository

In your zone open *Helm > Repositories > Create > Repository* and enter:

* **Name**: kubernetes-build
* **Display name**: Kubernetes Build
* **Description**: The Mint System collection of Helm Charts.
* **URL**: <https://kubernetes.build>

### Create Odoo release

In your zone open *Helm > Helm Releases > Create > Helm Release* and filter `Odoo`. Click on the Helm Chart and select *Create*.

Change these values:

```yaml
ingress:
	host: odoo.exo.mint-cloud.ch
	secure: true
vshnpostgresql:
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
task add-repo
```

The following command applies the Odoo chart:

```bash
task install-chart odoo
```

The Odoo database will initialized automtically.

### Forward Odoo service

Once the pod is ready, run this command to port forward the service:

```bash
task forward-odoo
```

### Setup ingress nginx controller

Add and install the ingress-nginx repo.

```bash
task setup-hosts
task add-ingress-nginx
task install-ingress-nginx
```

Forward the ingress-nginx port.

```bash
task forward-ingress-nginx
```

### Setup haproxy ingress controller

Add and install the haproxy ingress repo.

```bash
task setup-hosts
task add-haproxy-ingress
task install-haproxy-ingress
```

Forward the ingress-nginx port.

```bash
task forward-haproxy-ingress
```

### Release

Adjust the version in the `Chart.yaml` files.

Create new packages for all charts.

```bash
task package-repo
```

Update index file.

```bash
task index-repo
```
