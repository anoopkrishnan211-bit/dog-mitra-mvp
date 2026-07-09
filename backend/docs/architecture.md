# Backend Architecture

## Purpose

Describe the backend as implemented in the current repository.

## Scope

This document is based only on the backend source code that exists today.

## Folder Structure

```text
backend/
├── config/
├── docs/
├── models/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── modules/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   └── utils/
├── .env.example
├── package.json
└── README.md
```

## Express Lifecycle

1. Environment variables are loaded.
2. MongoDB connection is established.
3. Initial admin and singleton settings are seeded.
4. Express app is built.
5. Middleware and routes are attached.
6. Server starts listening.
7. Shutdown hooks close MongoDB gracefully.

## Related Documentation

- [API Reference](./api-reference.md)
- [Authentication](./authentication.md)
- [Database](./database.md)
- [Deployment](./deployment.md)
- [Developer Guide](./developer-guide.md)
- [Troubleshooting](./troubleshooting.md)
- [Environment](./environment.md)

## Last Updated

2026-07-09

