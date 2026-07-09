# API Reference

## Purpose

Document the backend endpoints exposed by the current source code.

## Scope

Only endpoints present in the backend source are documented here.

## Public APIs

- `GET /health`
- `GET /api/health`
- `GET /api/health/db`
- `GET /api/settings`
- `PUT /api/settings`
- `GET /api/public/products`
- `GET /api/public/services`
- `GET /api/public/blogs`
- `GET /api/public/blog-posts`
- `GET /api/public/faqs`
- `GET /api/public/testimonials`
- `GET /api/public/gallery`
- `GET /api/public/events`
- `GET /api/public/settings`

## Authentication APIs

- `POST /api/auth/login`
- `POST /api/auth/register-admin`
- `POST /api/auth/logout`
- `POST /api/auth/refresh`
- `POST /api/auth/forgot-password`
- `POST /api/auth/reset-password`
- `POST /api/auth/change-password`
- `GET /api/auth/sessions`
- `DELETE /api/auth/sessions/:id`

## Admin APIs

Authenticated resource routers are mounted under `/api` for:

- staff
- customers
- pets
- appointments
- products
- categories
- inventory
- orders
- testimonials
- gallery
- services
- blog-posts
- events
- faqs
- contact-information
- site-settings

## Related Documentation

- [Authentication](./authentication.md)
- [Database](./database.md)
- [Deployment](./deployment.md)

## Last Updated

2026-07-09

