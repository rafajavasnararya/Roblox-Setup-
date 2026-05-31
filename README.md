# FrameFusion Studio

A professional full-stack application for video to sprite sheet conversion with Unity asset tools integration.

## Project Structure

```
├── frontend/          # Next.js 15 frontend
├── backend/           # Node.js/Express API
├── worker/            # Background job processing
├── mobile/            # Android APK (CapacitorJS)
├── nginx/             # NGINX configuration
├── docker/            # Docker setup
└── docs/              # Documentation
```

## Tech Stack

### Frontend
- Next.js 15
- TypeScript
- TailwindCSS
- Framer Motion
- ShadCN UI
- Zustand
- Axios

### Backend
- Node.js
- Express.js
- BullMQ Queue
- Redis
- FFmpeg
- Sharp
- PostgreSQL

### Deployment
- Docker Compose
- PM2
- NGINX Reverse Proxy

## Getting Started

See [DEPLOYMENT.md](./docs/DEPLOYMENT.md) for setup instructions.
