# Developer Guide

## Purpose

Help new developers extend the backend safely.

## Scope

Architecture and coding patterns visible in the source code.

## How to Add a New Module

1. Add a Mongoose model in `backend/models`.
2. Export it from `backend/models/index.js`.
3. Add controller/service logic under `backend/src/modules` if custom behavior is needed.
4. Register the route in `backend/src/routes/index.js`.
5. Document the endpoint in `api-reference.md`.

## Conventions

- Use CommonJS
- Keep controllers thin
- Keep business logic in services
- Keep data access in repositories

## Related Documentation

- [Architecture](./architecture.md)
- [Database](./database.md)

## Last Updated

2026-07-09

