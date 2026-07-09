# Sequence Diagrams

## Purpose

Provide common runtime flows in one place for technical onboarding.

## Request Flow

```mermaid
sequenceDiagram
  participant Browser
  participant Express
  participant Middleware
  participant Controller
  participant Service
  participant MongoDB

  Browser->>Express: HTTP request
  Express->>Middleware: security, auth, parsing
  Middleware->>Controller: route handler
  Controller->>Service: business logic call
  Service->>MongoDB: read/write
  MongoDB-->>Service: data
  Service-->>Controller: result
  Controller-->>Browser: JSON response
```

## Authentication Flow

```mermaid
sequenceDiagram
  participant Admin
  participant API
  participant AuthService
  participant DB

  Admin->>API: POST /api/auth/login
  API->>AuthService: validate credentials
  AuthService->>DB: load staff record
  AuthService->>DB: store refresh session
  AuthService-->>API: tokens + user
  API-->>Admin: JSON response
```

## Related Documentation

- [User Flows](./user-flows.md)
- [Admin Flows](./admin-flows.md)
- [Backend Authentication](../backend/docs/authentication.md)

## Last Updated

2026-07-09

