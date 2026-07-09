# Authentication

## Purpose

Explain the authentication and session model implemented in the backend.

## Scope

Based on `backend/src/modules/auth/*` and `backend/src/middlewares/auth.js`.

## Flow

1. Login accepts email, username, or phone as the identifier.
2. Passwords are checked with bcrypt.
3. JWT access tokens are issued.
4. Refresh sessions are stored in MongoDB with hashed refresh tokens.
5. Failed attempts are tracked and can lock an account.
6. Password reset tokens are stored in MongoDB with TTL cleanup.

## Related Documentation

- [API Reference](./api-reference.md)
- [Database](./database.md)

## Last Updated

2026-07-09

