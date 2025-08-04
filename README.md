Kubernetes Build
===

![Vercel](https://vercelbadge.vercel.app/api/mint-system/kubernetes-build)

[![.github/workflows/test.yml](https://github.com/Mint-System/Kubernetes-Build/actions/workflows/test.yml/badge.svg)](https://github.com/Mint-System/Kubernetes-Build/actions/workflows/test.yml)

[![matrix-badge](https://matrix.to/img/matrix-badge.svg)](https://matrix.to/#/#odoo-build:mint-system.ch)

The Mint System collection of Helm charts.

* 🚀 **Install**: Install Helm repository and get started with Odoo.
* 🛠️ **Develop**: Deploy Odoo and Postgres to a local Kubernetes cluster.
* 🏗️ **Build**: Fork and build your own Helm charts.
* 🚀 **Deploy**: Configure and deploy Helm charts to remote clusters.

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

* [cluster-issuer](/cluster-issuer/README.md)
* [odoo](/odoo/README.md)
* [postgres](/postgres/README.md)
* [vshnPostgres](/vshnPostgres/README.md)

## Develop

Setup a local Kubernetes cluster and deploy the Helm charts.

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

### Deploy Odoo chart

Ensure you have `kubectl` installed and can access the cluster.

Add chart dependencies.

```bash
task add-repos
```

If not already done setup the local hostnames.

```bash
task setup-hosts
```

Template the .env file.

```bash
task template-dotenv
```

Install the Odoo chart:

```bash
task install-chart odoo
```

The Odoo database will be initialized automtically.

Once the pod is ready, run this command to port forward the service:

```bash
task forward odoo
```

### Setup ingress nginx

Install ingress-nginx in the current cluster.

```bash
task install-chart ingress-nginx
```

Forward the ingress-nginx port.

```bash
task forward ingress-nginx
```

### Setup haproxy ingress

Install haproxy-ingress in the current cluster.

```bash
task install-chart haproxy-ingress
```

Forward the haproxy-ingress port.

```bash
task forward haproxy-ingress
```

### Release charts

Adjust the version in the `Chart.yaml` files.

Create new packages for all charts.

```bash
task package-repo
```

Commit and push the files.

## Usage

You can use this project to deploy to these Kubernetes clusters:

* [APPUiO](#APPUiO)
* [Infomaniak](#Infomaniak)
* [K3s](#K3s)

### APPUiO

Setup and deploy the Helm charts with [APPUiO](https://portal.appuio.cloud/).

#### Login with OpenShift

Open the OpenShift console in your zone.

Click on the username on the top right and select *Copy login command*.

In the new tab click *Display token* and copy the *Login with this token* command.

Run the command in your shell.

#### Setup project

If not alrady done, create a project with the oc cli.

```bash
oc new-project odoo
```

#### Create Odoo release

Add this Helm repo to the local index.

```bash
task add-repos
```

Install the Helm release.

```bash
task install-chart odoo exo
```

#### Publish Helm charts

In your zone open *Helm > Tab Repositories > Create > Repository* and enter:

* **Name**: `kubernetes-build`
* **Display name**: `Kubernetes Build`
* **Description**: `The Mint System collection of Helm charts.`
* **URL**: <https://kubernetes.build>

#### Create release from web console

In your zone open *Helm > Tab Helm Releases > Create > Helm Release* and filter `Odoo`. Click on the Helm chart and select *Create*.

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

### Infomaniak

Deploy the Helm charts to [Infomaniak Managed Kubernetes service](https://www.infomaniak.com/en/hosting/public-cloud/kubernetes).

#### Setup project

Create new Kubernetes cluster in the Infomaniak manager. Then add an instance group.

Download the Kubeconfig file and move it.

```bash
mv ~/Downloads/pck-XXXXXXX-kubeconfig ~/.kube/config.chk
export KUBECONFIG=~/.kube/config.chk
kubectl get namespaces
```

#### Setup ingress nginx

Add all repos and install the ingress nginx.

```bash
task add-repos
task install-chart ingress-nginx
```

#### Setup cert manager

Create an api token with domain scope: <https://manager.infomaniak.com/v3/infomaniak-api>

```bash
ACME_EMAIL="sysadmin@example.com"
INFOMANIAK_API_TOKEN="YOUR_API_TOKEN"
```

Install cert manager with Infomaniak webhook.

```bash
task install-chart cert-manager
```

Install cluster issuer.

```bash
task install-chart cluster-issuer
```

#### Create Odoo release

Install the Odoo chart.

```bash
task install-chart odoo chk
```

### K3s

#### Setup project

#### Setup ingress nginx

Add all repos and install the ingress nginx.

```bash
task add-repos
task install-chart ingress-nginx
```

#### Setup cert manager

Setup `.env` config.

```bash
ACME_EMAIL="sysadmin@example.com"
```

Install cert manager with Infomaniak webhook.

```bash
task install-chart cert-manager
```

Install cluster issuer.

```bash
task install-chart cluster-issuer rpi
```

## Troubleshooting

### Reset the postgres password

The postgres data is persisted on the host. Removing the pvc will not deleted the postgres data. To update the password, enter the container and run:

```bash
psql -c "ALTER USER $PGUSER WITH PASSWORD '$PGPASSWORD';"
```
