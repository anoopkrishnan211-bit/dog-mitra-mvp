# Health Endpoint

## `GET /health`

Purpose:

- Provide a production-friendly status check for monitoring systems and load balancers

Response includes:

- `status`
- `service`
- `version`
- `environment`
- `uptime`
- `timestamp`
- `mongo.connected`
- `mongo.readyState`
- `mongo.database`
- `nodeVersion`

Example response:

```json
{
  "status": "healthy",
  "service": "Dog Mitra Backend",
  "version": "1.0.0",
  "environment": "production",
  "uptime": 123.45,
  "timestamp": "2026-07-09T03:34:11.718Z",
  "mongo": {
    "connected": true,
    "readyState": 1,
    "database": "dog_mitra"
  },
  "nodeVersion": "v24.13.1"
}
```

Monitoring recommendations:

- Use this endpoint for uptime checks
- Alert if `status` is not `healthy`
- Alert if `mongo.connected` becomes `false`

