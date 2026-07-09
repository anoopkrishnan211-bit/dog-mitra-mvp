# Environment Variables

| Variable | Purpose | Required | Example Format |
| --- | --- | --- | --- |
| `MONGODB_URI` | MongoDB Atlas connection string | Yes | `mongodb+srv://user:pass@cluster/db?retryWrites=true&w=majority` |
| `MONGODB_DB_NAME` | Database name used by Mongoose | Yes | `dog_mitra` |
| `JWT_SECRET` | Signing key for JWT access tokens | Yes | `a-long-random-secret` |
| `JWT_EXPIRES_IN` | Access token expiration | No | `7d` |
| `PORT` | HTTP port used by the server | No | `4000` |
| `NODE_ENV` | Runtime environment label | No | `development` |
| `CORS_ORIGIN` | Allowed browser origin | No | `*` or `https://example.com` |
| `SUPER_ADMIN_NAME` | Initial admin seed name | No | `Anoop Krishnan` |
| `SUPER_ADMIN_USERNAME` | Initial admin seed username | No | `anoopkrishnan` |
| `SUPER_ADMIN_EMAIL` | Initial admin seed email | No | `admin@example.com` |
| `SUPER_ADMIN_MOBILE` | Initial admin seed mobile number | No | `+91XXXXXXXXXX` |
| `SUPER_ADMIN_PASSWORD` | Initial admin seed password | No | `strong-password` |

