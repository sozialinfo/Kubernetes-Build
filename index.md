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

If not already done setup the hosts.

```bash
task setup-hosts
```

Install ingress-nginx in the current cluster.

```bash
task install-ingress-nginx
```

Forward the ingress-nginx port.

```bash
task forward-ingress-nginx
```

### Setup haproxy ingress controller

If not already done setup the hosts.

```bash
task setup-hosts
```

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

### Run interactive postgres container

Run this command to delete the postgres test container and open an interactive shell.

```bash
kubectl delete pod postgres-client
echo "
apiVersion: v1
kind: Pod
metadata:
  name: postgres-client
spec:
  containers:
  - name: postgres
    image: postgres:16
    command:
      - tail
      - -f
      - /dev/null
    envFrom:
      - secretRef:
          name: postgres-odoo
    volumeMounts:
    - name: secret-volume
      readOnly: true
      mountPath: /etc/secret-volume
  volumes:
  - name: secret-volume
    secret:
      defaultMode: 0600
      secretName: postgres-odoo
  restartPolicy: Never
" | kubectl apply -f -
kubectl exec -it postgres-client -- /bin/bash
```

In the shell try to connect to the cluster.

```bash
psql --set=sslmode=verify-ca --set=sslrootcert=/etc/secret-volume/ca.crt -h $POSTGRES_HOST -d odoo -U odoo
```