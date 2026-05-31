# FrameFusion Studio - Deployment Guide

## Prerequisites

- Docker & Docker Compose
- Node.js 18+
- PostgreSQL 14+
- Redis 6+
- FFmpeg 4.4+

## Quick Start

```bash
# Clone repository
git clone <repo-url>
cd FrameFusion-Studio

# Setup environment
cp .env.example .env

# Start all services
docker-compose up -d

# Initialize database
docker-compose exec backend npm run migrate

# Access application
# Frontend: http://localhost:3000
# API: http://localhost:4000
# Admin: http://localhost:3001
```

## Services

- **Frontend**: Next.js on port 3000
- **Backend**: Express.js on port 4000
- **Worker**: BullMQ processor
- **Redis**: Queue & cache on port 6379
- **PostgreSQL**: Database on port 5432
- **NGINX**: Reverse proxy on port 80/443

## Health Checks

```bash
# Check all services
curl http://localhost/health
```
