---
layout: home

hero:
  name: "Kubernetes Build"
  tagline: The Mint System collection of Helm Charts.
---

[![.github/workflows/test.yml](https://github.com/Mint-System/Kubernetes-Build/actions/workflows/test.yml/badge.svg)](https://github.com/Mint-System/Kubernetes-Build/actions/workflows/test.yml)

[![matrix-badge](https://matrix.to/img/matrix-badge.svg)](https://matrix.to/#/#odoo-build:mint-system.ch)

* 🚀 **Install**: Install Helm repository and get started with Odoo.
* 🛠️ **Develop**: Deploy Odoo and Postgres to a local Kubernetes cluster.
* 🏗️ **Build**: Fork and build your own Helm Charts.

## Requirements

* Install [Helm](https://helm.sh/docs/intro/install/) and [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl) 
* Setup [kind](https://kind.sigs.k8s.io/) or [minikube](https://minikube.sigs.k8s.io/docs/)

## Usage

Install [this Helm repository](/index.yaml).

```bash
helm repo add kubernetes-build https://kubernetes.build
```

## Develop

Run a local Kubernets cluster with kind or minikube.

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

The following command applies the Odoo and Postgres manifests and initializes the Odoo database.

```bash
task apply-odoo
```

### Forward Odoo service

Once the pod is ready and initialized, run this command to access the service:

```bash
task forward-odoo
```

### Release

Adjust the version in `Chart.yaml`.

Create new package for this repository.

```bash
task package
```

Update index file.

```bash
task index-repo
```

### Show log files

```bash
kubectl logs odoo init-db
```
