<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV2EndUserType — operations

Accessor: `client.numbersV2EndUserType` · Source: `src/resources/numbers-v2-end-user-type.ts` · 2 operations · Request types: namespace `NumbersV2EndUserType`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchEndUserType

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchEndUserType(request: NumbersV2EndUserType.FetchEndUserTypeRequest, options?: RequestOptions): ApiPromise<NumbersV2RegulatoryComplianceEndUserType, ApiError>`
- **Wire**: `GET /v2/RegulatoryCompliance/EndUserTypes/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NumbersV2RegulatoryComplianceEndUserType`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2EndUserType.FetchEndUserTypeRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NumbersV2RegulatoryComplianceEndUserType` | `numbersV2RegulatoryComplianceEndUserTypeSchema` | `src/models/numbers-v2-regulatory-compliance-end-user-type.ts` |

### listEndUserType

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listEndUserType(request: NumbersV2EndUserType.ListEndUserTypeRequest, options?: RequestOptions): ApiPromise<ListEndUserTypeResponse, ApiError>`
- **Wire**: `GET /v2/RegulatoryCompliance/EndUserTypes`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListEndUserTypeResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2EndUserType.ListEndUserTypeRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListEndUserTypeResponse` | `listEndUserTypeResponseSchema` | `src/models/list-end-user-type-response.ts` |

