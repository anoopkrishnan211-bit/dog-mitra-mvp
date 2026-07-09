# Startup and Deployment

## Startup Sequence

1. `backend/src/config/env.js` loads environment variables from `.env` files.
2. `backend/config/mongoose.js` connects to MongoDB Atlas with pooling and retry-friendly settings.
3. The active database name is logged.
4. The initial super admin is seeded if all required `SUPER_ADMIN_*` variables are present.
5. Singleton settings records are seeded.
6. `buildApp()` registers middleware, routes, docs, and health endpoints.
7. The server starts listening on `PORT`.

## Local Development

```bash
cd backend
npm install
npm start
```

## Render Deployment

### Build Command

- `npm install`

### Start Command

- `npm start`

### Required Environment Variables

- `MONGODB_URI`
- `MONGODB_DB_NAME`
- `JWT_SECRET`
- `PORT`
- `NODE_ENV`

Optional variables:

- `JWT_EXPIRES_IN`
- `CORS_ORIGIN`
- `SUPER_ADMIN_NAME`
- `SUPER_ADMIN_USERNAME`
- `SUPER_ADMIN_EMAIL`
- `SUPER_ADMIN_MOBILE`
- `SUPER_ADMIN_PASSWORD`

## Health Endpoint

- `GET /health`
- Returns runtime and MongoDB status for load balancers and uptime monitors

## Deployment Notes

- The frontend and backend are deployed separately.
- Frontend API calls should target the backend origin or a configurable API base URL.
- The backend serves Swagger UI at `/docs`.

## Troubleshooting

### MongoDB connection failures

- Confirm `MONGODB_URI` and `MONGODB_DB_NAME`
- Verify Atlas network access
- Check startup logs for connection failure details

### JWT errors

- Confirm `JWT_SECRET`
- Ensure tokens are signed and sent as `Bearer <token>`

### Missing environment variables

- Startup fails fast if required variables are absent

### Render deployment failures

- Confirm build and start commands
- Confirm the deployed commit matches the GitHub branch

### Module import errors

- Verify relative imports after folder changes
- Ensure `backend/models/index.js` exports all required models

### Route not found

- Confirm route registration in `backend/src/routes/index.js`
- Confirm public routes are mounted through `backend/src/app.js`

### Validation failures

- Review Zod schemas in controllers and Mongoose schema rules

### Duplicate index warnings

- Remove duplicate index declarations when a field is already indexed through schema options

### Bootstrap issues

- Ensure `SUPER_ADMIN_*` values are either fully populated or omitted

