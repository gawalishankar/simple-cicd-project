# 🚀 Full Stack Web App CI/CD Pipeline using AWS EKS & GitHub Actions

This repository demonstrates a complete CI/CD pipeline for deploying a simple full-stack web application using:

- ✅ **GitHub Actions** for CI/CD
- ✅ **Docker** for containerization
- ✅ **Amazon EKS (Kubernetes)** for orchestration
- ✅ **Prometheus + Grafana** for monitoring

---

## 🧱 Tech Stack

| Layer       | Technology            |
|-------------|------------------------|
| Frontend    | React.js               |
| Backend     | Django / Node.js       |
| CI/CD       | GitHub Actions         |
| Container   | Docker                 |
| Orchestration | Kubernetes (EKS)     |
| Monitoring  | Prometheus, Grafana    |
| Cloud       | AWS (EKS, ECR, EC2)    |

---

## 🎯 Objective

To build, test, deploy, and monitor a production-like web app using modern DevOps practices with cost-effective cloud infrastructure.

---

## 🚦 Pipeline Flow

GitHub Push → GitHub Actions → Docker Build → Push to ECR → Deploy to EKS → Monitor via Prometheus-Grafana

## 🔧 Setup Steps

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo

2. Docker Build & Push to ECR

docker build -t react-frontend ./frontend
docker build -t backend-api ./backend

# Tag and push to ECR
docker tag react-frontend <aws_account>.dkr.ecr.<region>.amazonaws.com/react-frontend
docker push <aws_account>.dkr.ecr.<region>.amazonaws.com/react-frontend

3. Deploy to Amazon EKS

# Apply Kubernetes manifests
kubectl apply -f k8s/
Includes deployment.yaml, service.yaml, ingress.yaml, etc.

⚙️ GitHub Actions CI/CD
Trigger on every push to main branch

Builds Docker images

Pushes to AWS ECR

Applies Kubernetes manifests using kubectl

📁 .github/workflows/deploy.yml

📊 Monitoring (Prometheus + Grafana)
Installed via Helm:

helm install prometheus prometheus-community/kube-prometheus-stack
Dashboards:

Pod/Node Health

CPU & Memory Metrics

Custom App Metrics

🧹 Cleanup

eksctl delete cluster --name my-cluster --region us-east-1
aws ec2 release-address --allocation-id <id>
Also manually delete:

ECR repositories

NAT Gateway

Unused EC2 or volumes

📈 Outcome / What I Learned
Deployed a full stack web app with CI/CD on AWS

Used GitHub Actions to automate builds & deployments

Gained hands-on with Kubernetes, EKS, and monitoring

Optimized cloud costs by tearing down unused resources
