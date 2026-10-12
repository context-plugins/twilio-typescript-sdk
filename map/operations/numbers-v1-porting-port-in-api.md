<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV1PortingPortInApi — operations

Accessor: `client.numbersV1PortingPortInApi` · Source: `src/resources/numbers-v1-porting-port-in-api.ts` · 4 operations · Request types: namespace `NumbersV1PortingPortInApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createPortingPortIn

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createPortingPortIn(request: NumbersV1PortingPortInApi.CreatePortingPortInRequest, options?: RequestOptions): ApiPromise<NumbersV1PortingPortIn, ApiError>`
- **Wire**: `POST /v1/Porting/PortIn`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NumbersV1PortingPortIn`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV1PortingPortInApi.CreatePortingPortInRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PortInRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PortInRequest` | `portInRequestSchema` | `src/models/port-in-request.ts` |
| `NumbersV1PortingPortIn` | `numbersV1PortingPortInSchema` | `src/models/numbers-v1-porting-port-in.ts` |

### deletePortingPortIn

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deletePortingPortIn(request: NumbersV1PortingPortInApi.DeletePortingPortInRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /v1/Porting/PortIn/{PortInRequestSid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV1PortingPortInApi.DeletePortingPortInRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `portInRequestSid` | `path` | `PortInRequestSid` | `string` | yes |

### fetchPortingPortIn

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchPortingPortIn(request: NumbersV1PortingPortInApi.FetchPortingPortInRequest, options?: RequestOptions): ApiPromise<NumbersV1PortingPortIn, ApiError>`
- **Wire**: `GET /v1/Porting/PortIn/{PortInRequestSid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NumbersV1PortingPortIn`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV1PortingPortInApi.FetchPortingPortInRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `portInRequestSid` | `path` | `PortInRequestSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NumbersV1PortingPortIn` | `numbersV1PortingPortInSchema` | `src/models/numbers-v1-porting-port-in.ts` |

### listPortInRequests

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listPortInRequests(request: NumbersV1PortingPortInApi.ListPortInRequestsRequest, options?: RequestOptions): ApiPromise<ListPortInRequestsResponse, ApiError>`
- **Wire**: `GET /v1/Porting/PortIn/PortInRequests`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListPortInRequestsResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV1PortingPortInApi.ListPortInRequestsRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `token` | `query` | `Token` | `string` | no | — |
| `size` | `query` | `Size` | `number` | no | `20` |
| `portInRequestSid` | `query` | `PortInRequestSid` | `string` | no | — |
| `portInRequestStatus` | `query` | `PortInRequestStatus` | `string` | no | — |
| `createdBefore` | `query` | `CreatedBefore` | `string` | no | — |
| `createdAfter` | `query` | `CreatedAfter` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListPortInRequestsResponse` | `listPortInRequestsResponseSchema` | `src/models/list-port-in-requests-response.ts` |

