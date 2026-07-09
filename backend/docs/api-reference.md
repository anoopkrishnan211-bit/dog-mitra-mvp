# API Reference

## Base URLs

- API base: `/api`
- Public content base: `/api/public`

## Authentication

### `POST /api/auth/login`

- Authentication: No
- Purpose: Sign in a staff member
- Body:
  - `identifier` string
  - `password` string
  - `rememberMe` boolean optional
- Success: `200`
- Errors: `400`, `401`, `403`, `423`

### `POST /api/auth/register-admin`

- Authentication: No
- Purpose: Create an admin staff account
- Body:
  - `name` string
  - `username` string
  - `email` string
  - `phone` string
  - `password` string
- Success: `201`
- Errors: `400`, `409`

### `POST /api/auth/logout`

- Authentication: No
- Purpose: Revoke a refresh token
- Body:
  - `refreshToken` string optional
- Success: `200`

### `POST /api/auth/refresh`

- Authentication: No
- Purpose: Rotate refresh token and issue a new access token
- Body:
  - `refreshToken` string
- Success: `200`
- Errors: `401`, `403`

### `POST /api/auth/forgot-password`

- Authentication: No
- Purpose: Create a password reset token
- Body:
  - `identifier` string
- Success: `200`

### `POST /api/auth/reset-password`

- Authentication: No
- Purpose: Reset password using token
- Body:
  - `token` string
  - `password` string
- Success: `200`
- Errors: `400`

### `POST /api/auth/change-password`

- Authentication: Bearer token
- Purpose: Change the current user password
- Body:
  - `currentPassword` string
  - `newPassword` string
- Success: `200`

### `GET /api/auth/sessions`

- Authentication: Bearer token
- Purpose: List active sessions for the current user

### `DELETE /api/auth/sessions/:id`

- Authentication: Bearer token
- Purpose: Revoke a session

## Health

### `GET /health`

- Authentication: No
- Purpose: Return health and runtime metadata
- Success: `200`

### `GET /api/health`

- Authentication: No
- Purpose: Lightweight API health check
- Success: `200`

### `GET /api/health/db`

- Authentication: No
- Purpose: Report MongoDB connection state, collections, and counts
- Success: `200`
- Errors: `503` when disconnected

## Settings

### `GET /api/settings`

- Authentication: No
- Purpose: Fetch public site settings

### `PUT /api/settings`

- Authentication: Bearer token, admin
- Purpose: Update site settings and contact data
- Body:
  - `contact` object optional
  - `site` object optional

## Public APIs

### `GET /api/public/products`
### `GET /api/public/services`
### `GET /api/public/blogs`
### `GET /api/public/blog-posts`
### `GET /api/public/faqs`
### `GET /api/public/testimonials`
### `GET /api/public/gallery`
### `GET /api/public/events`
### `GET /api/public/settings`

- Authentication: No
- Response shape: `{ items: [...] }` for list endpoints, `{ contact, site }` for settings

## Authenticated Resource APIs

All of the following are mounted under `/api` and require the roles enforced by the route layer:

- `/api/staff`
- `/api/customers`
- `/api/pets`
- `/api/appointments`
- `/api/products`
- `/api/categories`
- `/api/inventory`
- `/api/orders`
- `/api/testimonials`
- `/api/gallery`
- `/api/services`
- `/api/blog-posts`
- `/api/events`
- `/api/faqs`
- `/api/contact-information`
- `/api/site-settings`

Each resource exposes:

- `GET /`
- `GET /:id`
- `POST /`
- `PATCH /:id`
- `DELETE /:id`

