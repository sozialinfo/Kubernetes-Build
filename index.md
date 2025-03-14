Kubernetes Build
===

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

## APPUiO

Setup and deploy the Helm charts with [APPUiO](https://portal.appuio.cloud/).

### Setup Helm repository

In your zone open *Helm > Repositories > Create > Repository* and enter:

* **Name**: kubernetes-build
* **Display name**: Kubernetes Build
* **Description**: The Mint System collection of Helm Charts.
* **URL**: <https://kubernetes.build>

## Create Helm release

In your zone open *Helm > Helm Releases > Create > Helm Release* and filter `Postgres`. Click on the Hem Chart and select *Create* and confirm with *Create*.

Do the same for `Odoo`.
## Charts

List of charts:

* [odoo](/odoo/README.md)
* [postgres](/postgres/README.md)

## Develop

Run a local Kubernets cluster with kind or minikube.

### Requirements

* Install [Helm](https://helm.sh/docs/intro/install/) and [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl) 
* Setup [kind](https://kind.sigs.k8s.io/) or [minikube](https://minikube.sigs.k8s.io/docs/)

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

The followpostgresng command applies the Postgres and Odoo charts:

```bash
task install-chart postgres
task install-chart odoo
```

The Odoo database will be automtically initialized.

### Forward Odoo service

Once the pod is ready, run this command to access the service:

```bash
task forward-odoo
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
