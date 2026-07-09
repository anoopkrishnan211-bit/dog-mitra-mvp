# Dog Mitra Backend

This folder contains the production backend for Dog Mitra.

## Stack

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- JWT authentication
- Swagger UI

## Setup

1. Copy `.env.example` to `.env`.
2. Set `MONGODB_URI`, `MONGODB_DB_NAME`, and `JWT_SECRET`.
3. Install dependencies inside `backend/`.
4. Start the server with `npm run dev` or `npm start`.

## API Base

- `https://dog-mitra-backend.onrender.com/api`

## Documentation

- Swagger UI: `https://dog-mitra-backend.onrender.com/docs`

## Endpoint Groups

- `POST /auth/login`
- `POST /auth/register-admin`
- `POST /auth/logout`
- `POST /auth/refresh`
- `POST /auth/forgot-password`
- `POST /auth/reset-password`
- `POST /auth/change-password`
- `GET /auth/sessions`
- `DELETE /auth/sessions/:id`
- `GET /health`
- `GET|POST|PATCH|DELETE /staff`
- `GET|POST|PATCH|DELETE /customers`
- `GET|POST|PATCH|DELETE /pets`
- `GET|POST|PATCH|DELETE /appointments`
- `GET|POST|PATCH|DELETE /products`
- `GET|POST|PATCH|DELETE /categories`
- `GET|POST|PATCH|DELETE /inventory`
- `GET|POST|PATCH|DELETE /orders`
- `GET|POST|PATCH|DELETE /testimonials`
- `GET|POST|PATCH|DELETE /gallery`
- `GET|POST|PATCH|DELETE /services`
- `GET|POST|PATCH|DELETE /blog-posts`
- `GET|POST|PATCH|DELETE /faqs`
- `GET|POST|PATCH|DELETE /contact-information`
- `GET|POST|PATCH|DELETE /site-settings`
- `GET /public/products`
- `GET /public/services`
- `GET /public/blogs`
- `GET /public/faqs`
- `GET /public/gallery`
- `GET /public/testimonials`
- `GET /public/events`
- `GET /public/settings`

## Notes

- All protected routes require `Authorization: Bearer <token>`.
- Admin routes are reserved for the `admin` role unless noted otherwise.
- CRUD behavior is implemented through reusable controller, service, and repository layers.
- Initial super admin bootstrap can be provided via `SUPER_ADMIN_*` environment variables.
- `GET /health` returns service status, version, environment, uptime, timestamp, MongoDB connection state, database name, and Node.js version.
