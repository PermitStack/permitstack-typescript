# permitstack-sdk

Official TypeScript / JavaScript SDK for the [PermitStack](https://permit-stack.com) building‑permit API — **58M+ U.S. building permits across 552 active jurisdictions (48 states)**, updated daily from official open‑data portals (Socrata, ArcGIS, Tyler EnerGov, Accela, and more).

## Install

```bash
npm install permitstack-sdk
```

## Quick start

```ts
import { Permitstack } from 'permitstack-sdk';

// Get a free API key (100 requests/day) at https://permit-stack.com/#pricing
const client = new Permitstack({ apiKey: 'pk_your_key' });

// Search permits
const results = await client.permits.searchPermits({
  city: 'Austin',
  category: 'SOLAR',
  issuedAfter: '2026-01-01',
});

console.log(`${results.total} matches`, results.results);
```

Your key is sent automatically as the `X-API-Key` header on every request.

## Resources

| Namespace | What it does |
| --- | --- |
| `client.permits` | Search & export permits, permit detail, status/transition events, address & parcel lookup |
| `client.contractors` | Contractor search & profiles |
| `client.propertyHistory` | Per‑address permit history |
| `client.webhooks` | Register filter‑scoped webhooks (available from the Developer tier) |
| `client.health` | Service health & coverage stats |

All list endpoints return a `total` (a floor — `total_capped: true` — once a result set exceeds 10,000; narrow your filters for an exact count).

## Links

- API docs & pricing: <https://permit-stack.com>
- OpenAPI spec: <https://api.permit-stack.com/public-openapi.json>
- Python SDK: [`permitstack`](https://pypi.org/project/permitstack/) · MCP server: [`permitstack-mcp`](https://www.npmjs.com/package/permitstack-mcp)

## License

Apache-2.0
