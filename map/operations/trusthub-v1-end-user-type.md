<!-- Generated file — do not edit; regenerated with the SDK. -->

# TrusthubV1EndUserType — operations

Accessor: `client.trusthubV1EndUserType` · Source: `src/resources/trusthub-v1-end-user-type.ts` · 2 operations · Request types: namespace `TrusthubV1EndUserType`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchEndUserType2

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchEndUserType2(request: TrusthubV1EndUserType.FetchEndUserType2Request, options?: RequestOptions): ApiPromise<NumbersV2RegulatoryComplianceEndUserType, ResponseError>`
- **Wire**: `GET /v1/EndUserTypes/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NumbersV2RegulatoryComplianceEndUserType`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1EndUserType.FetchEndUserType2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NumbersV2RegulatoryComplianceEndUserType` | `numbersV2RegulatoryComplianceEndUserTypeSchema` | `src/models/numbers-v2-regulatory-compliance-end-user-type.ts` |

### listEndUserType2

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listEndUserType2(request: TrusthubV1EndUserType.ListEndUserType2Request, options?: RequestOptions): ApiPromise<ListEndUserTypeResponse, ResponseError>`
- **Wire**: `GET /v1/EndUserTypes`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListEndUserTypeResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1EndUserType.ListEndUserType2Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListEndUserTypeResponse` | `listEndUserTypeResponseSchema` | `src/models/list-end-user-type-response.ts` |

