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

- `http://localhost:4000/api`

## Documentation

- Swagger UI: `http://localhost:4000/docs`

## Endpoint Groups

- `POST /auth/login`
- `POST /auth/register-admin`
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

## Notes

- All protected routes require `Authorization: Bearer <token>`.
- Admin routes are reserved for the `admin` role unless noted otherwise.
- CRUD behavior is implemented through reusable controller, service, and repository layers.
