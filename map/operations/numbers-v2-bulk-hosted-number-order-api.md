<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV2BulkHostedNumberOrderApi — operations

Accessor: `client.numbersV2BulkHostedNumberOrderApi` · Source: `src/resources/numbers-v2-bulk-hosted-number-order-api.ts` · 2 operations · Request types: namespace `NumbersV2BulkHostedNumberOrderApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createBulkHostedNumberOrder

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createBulkHostedNumberOrder(request: NumbersV2BulkHostedNumberOrderApi.CreateBulkHostedNumberOrderRequest, options?: RequestOptions): ApiPromise<NumbersV2BulkHostedNumberOrder, ResponseError>`
- **Wire**: `POST /v2/HostedNumber/Orders/Bulk`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **Returns**: `NumbersV2BulkHostedNumberOrder`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2BulkHostedNumberOrderApi.CreateBulkHostedNumberOrderRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `NumbersV2BulkHostedNumberOrder` | `numbersV2BulkHostedNumberOrderSchema` | `src/models/numbers-v2-bulk-hosted-number-order.ts` |

### fetchBulkHostedNumberOrder

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchBulkHostedNumberOrder(request: NumbersV2BulkHostedNumberOrderApi.FetchBulkHostedNumberOrderRequest, options?: RequestOptions): ApiPromise<NumbersV2BulkHostedNumberOrder, ResponseError>`
- **Wire**: `GET /v2/HostedNumber/Orders/Bulk/{BulkHostingSid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NumbersV2BulkHostedNumberOrder`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2BulkHostedNumberOrderApi.FetchBulkHostedNumberOrderRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `bulkHostingSid` | `path` | `BulkHostingSid` | `string` | yes |
| `orderStatus` | `query` | `OrderStatus` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `NumbersV2BulkHostedNumberOrder` | `numbersV2BulkHostedNumberOrderSchema` | `src/models/numbers-v2-bulk-hosted-number-order.ts` |

