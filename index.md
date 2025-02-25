---
layout: home

hero:
  name: "Kubernetes Build"
  tagline: The Mint System collection of Helm Charts.
---

* ☸️ **Kubernetes**: Deploy Odoo and Postgres to a local Kubernetes cluster.  

## Requirements

* Install [Helm](https://helm.sh/docs/intro/install/) and [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl) 
* Setup [kind](https://kind.sigs.k8s.io/) or [minikube](https://minikube.sigs.k8s.io/docs/)

## Usage

Install this Helm repository.

## Develop

Run a local Kubernets cluster with kind or minikube.

### Start Kubernetes Cluster

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
task odoo-apply
```

### Release

Create new release for this repository.
