# Deployment

## Purpose

Document how the backend is started and deployed.

## Scope

Local startup and Render deployment.

## Local Development

```bash
cd backend
npm install
npm start
```

## Render

- Build command: `npm install`
- Start command: `npm start`
- Required environment variables: `MONGODB_URI`, `MONGODB_DB_NAME`, `JWT_SECRET`

## Health Check

- `GET /health`

## Related Documentation

- [Environment](./environment.md)
- [Troubleshooting](./troubleshooting.md)

## Last Updated

2026-07-09

