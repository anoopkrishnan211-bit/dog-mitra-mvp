# Security and Operations

## Authentication Security

- JWT access tokens are signed with `JWT_SECRET`
- Refresh tokens are stored hashed in MongoDB
- Passwords are hashed with bcrypt
- Protected routes require `Authorization: Bearer <token>`

## Input Validation

- Controllers validate request bodies with Zod
- Mongoose schemas enforce field-level constraints and indexes

## Operational Safeguards

- MongoDB connection uses a pool and reconnect handling
- Shutdown hooks close the MongoDB connection cleanly
- Health endpoints provide readiness visibility

## Recommended Production Improvements

- Add rate limiting
- Add centralized structured logging
- Add alerting for DB and API failures
- Add backup verification and restore testing
- Add request tracing and metrics

