# ER Diagram

## Purpose

Show the major persisted entities and relationships at a project level.

## Scope

Based on the current backend data model.

```mermaid
erDiagram
  Staff ||--o{ AuthSession : has
  Staff ||--o{ PasswordResetToken : requests
  Customer ||--o{ Pet : owns
  Customer ||--o{ Appointment : books
  Pet ||--o{ Appointment : receives
  Category ||--o{ Product : groups
  Product ||--|| Inventory : stocks
  Customer ||--o{ Order : places
  Staff ||--o{ BlogPost : authors
  Service ||--o{ FAQ : relates_to
  Service ||--o{ BlogPost : referenced_by
```

## Related Documentation

- [Backend Database](../backend/docs/database.md)
- [Backend API Reference](../backend/docs/api-reference.md)

## Last Updated

2026-07-09

