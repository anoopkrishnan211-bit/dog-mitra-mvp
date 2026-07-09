# Dog Mitra Backend Documentation

This directory contains the technical documentation for the Dog Mitra backend.

## Contents

- [System Overview](./system-overview.md)
- [Technology Stack](./technology-stack.md)
- [API Reference](./api-reference.md)
- [Database Schema](./database-schema.md)
- [Environment Variables](./environment-variables.md)
- [Startup and Deployment](./startup-deployment.md)
- [Health Endpoint](./health-endpoint.md)
- [Security and Operations](./security-operations.md)
- [Future Improvements](./future-improvements.md)
- [Architecture and Developer Guide](./architecture-developer-guide.md)
- [Production Readiness Checklist](./production-readiness-checklist.md)

## Source of Truth

These documents are based on the current backend codebase:

- Express application entrypoint: `backend/src/app.js`
- Server bootstrap: `backend/src/server.js`
- Mongo connection: `backend/config/mongoose.js`
- Models: `backend/models/*`
- Route registration: `backend/src/routes/*`
- Authentication and settings modules: `backend/src/modules/*`
- OpenAPI document: `backend/src/openapi.js`
