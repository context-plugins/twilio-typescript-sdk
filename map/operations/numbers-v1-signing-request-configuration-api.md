<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV1SigningRequestConfigurationApi — operations

Accessor: `client.numbersV1SigningRequestConfigurationApi` · Source: `src/resources/numbers-v1-signing-request-configuration-api.ts` · 2 operations · Request types: namespace `NumbersV1SigningRequestConfigurationApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSigningRequestConfiguration

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createSigningRequestConfiguration(request: NumbersV1SigningRequestConfigurationApi.CreateSigningRequestConfigurationRequest, options?: RequestOptions): ApiPromise<NumbersV1SigningRequestConfiguration, ApiError>`
- **Wire**: `POST /v1/SigningRequest/Configuration`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NumbersV1SigningRequestConfiguration`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV1SigningRequestConfigurationApi.CreateSigningRequestConfigurationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `NumbersV1SigningRequestConfiguration` | `numbersV1SigningRequestConfigurationSchema` | `src/models/numbers-v1-signing-request-configuration.ts` |

### listSigningRequestConfiguration

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listSigningRequestConfiguration(request: NumbersV1SigningRequestConfigurationApi.ListSigningRequestConfigurationRequest, options?: RequestOptions): ApiPromise<ListSigningRequestConfigurationResponse, ApiError>`
- **Wire**: `GET /v1/SigningRequest/Configuration`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListSigningRequestConfigurationResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV1SigningRequestConfigurationApi.ListSigningRequestConfigurationRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `country` | `query` | `Country` | `string` | no |
| `product` | `query` | `Product` | `string` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListSigningRequestConfigurationResponse` | `listSigningRequestConfigurationResponseSchema` | `src/models/list-signing-request-configuration-response.ts` |

