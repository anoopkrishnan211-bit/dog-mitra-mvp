# Dog Mitra Backend

This folder contains the production backend for Dog Mitra.

## Quick Links

- [Documentation index](./docs/README.md)
- [Swagger UI](https://dog-mitra-backend.onrender.com/docs)
- [API base](https://dog-mitra-backend.onrender.com/api)

## Setup

1. Copy `.env.example` to `.env`.
2. Set `MONGODB_URI`, `MONGODB_DB_NAME`, and `JWT_SECRET`.
3. Install dependencies inside `backend/`.
4. Start the server with `npm run dev` or `npm start`.

## What’s Documented

The `docs/` folder covers:

- System overview
- API reference
- Database schema
- Startup and deployment
- Security and operations
- Architecture and developer guide
- Production readiness checklist

## Notes

- All protected routes require `Authorization: Bearer <token>`.
- Admin routes are reserved for the `admin` role unless noted otherwise.
- CRUD behavior is implemented through reusable controller, service, and repository layers.
- Initial super admin bootstrap can be provided via `SUPER_ADMIN_*` environment variables.
