# Admin Flows

## Purpose

Describe how administrative users manage content and operations.

## Scope

Admin login, editing, content management, and operational record maintenance.

## Key Flows

### Authenticate

1. Admin opens the login modal.
2. Admin enters email or phone and password.
3. Backend returns access and refresh tokens.

### Manage Content

1. Admin selects a section such as products, services, blogs, events, FAQs, testimonials, gallery, or settings.
2. Admin edits the record using the form-based editor.
3. Admin saves the change.
4. Backend persists the update in MongoDB.

### Operational Records

1. Admin manages customers, pets, appointments, staff, inventory, categories, and orders.
2. Changes are stored through the authenticated backend APIs.

## Related Documentation

- [Backend API Reference](../backend/docs/api-reference.md)
- [Backend Authentication](../backend/docs/authentication.md)
- [Backend Developer Guide](../backend/docs/developer-guide.md)

## Last Updated

2026-07-09

