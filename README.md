# Student Info Application

Full-stack application with React frontend and Node.js backend, containerized with Docker for AWS EC2 deployment.

## Architecture

- Frontend: React 18 with Nginx
- Backend: Node.js/Express API
- Deployment: Docker Compose on AWS EC2

## Prerequisites

- AWS EC2 instance (Ubuntu/Amazon Linux recommended)
- Docker and Docker Compose installed
- Security Group with ports 80 and 5000 open

## EC2 Setup

### 1. Install Docker on EC2

```bash
# Update system
sudo yum update -y  # For Amazon Linux
# OR
sudo apt update && sudo apt upgrade -y  # For Ubuntu

# Install Docker
sudo yum install docker -y  # Amazon Linux
# OR
sudo apt install docker.io -y  # Ubuntu

# Start Docker
sudo systemctl start docker
sudo systemctl enable docker

# Add user to docker group
sudo usermod -aG docker $USER
newgrp docker
```

### 2. Install Docker Compose

```bash
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version
```

### 3. Deploy Application

```bash
# Clone or upload your code to EC2
git clone <your-repo-url>
cd <project-directory>

# Build and start containers
docker-compose up -d --build

# Check status
docker-compose ps

# View logs
docker-compose logs -f
```

## Local Development

```bash
# Start all services
docker-compose up --build

# Stop services
docker-compose down

# Rebuild specific service
docker-compose up -d --build frontend
```

## Access Application

- Frontend: http://<EC2-PUBLIC-IP>
- Backend API: http://<EC2-PUBLIC-IP>:5000/student-details

## AWS Security Group Configuration

Ensure your EC2 security group has these inbound rules:

- Port 80 (HTTP) - Source: 0.0.0.0/0
- Port 5000 (Backend API) - Source: 0.0.0.0/0 or restrict to frontend
- Port 22 (SSH) - Source: Your IP

## Useful Commands

```bash
# View running containers
docker ps

# Stop all containers
docker-compose down

# Remove all containers and volumes
docker-compose down -v

# View logs for specific service
docker-compose logs -f backend
docker-compose logs -f frontend

# Restart specific service
docker-compose restart frontend

# Execute command in container
docker-compose exec backend sh
docker-compose exec frontend sh
```

## Production Considerations

1. Use environment variables for configuration
2. Set up SSL/TLS with Let's Encrypt
3. Configure proper logging and monitoring
4. Set up automated backups
5. Use AWS Application Load Balancer for better traffic management
6. Consider using AWS ECS or EKS for production deployments
