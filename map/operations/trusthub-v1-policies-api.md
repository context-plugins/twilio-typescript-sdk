<!-- Generated file — do not edit; regenerated with the SDK. -->

# TrusthubV1PoliciesApi — operations

Accessor: `client.trusthubV1PoliciesApi` · Source: `src/resources/trusthub-v1-policies-api.ts` · 2 operations · Request types: namespace `TrusthubV1PoliciesApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchPolicies

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchPolicies(request: TrusthubV1PoliciesApi.FetchPoliciesRequest, options?: RequestOptions): ApiPromise<TrusthubV1Policies, ResponseError>`
- **Wire**: `GET /v1/Policies/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TrusthubV1Policies`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1PoliciesApi.FetchPoliciesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TrusthubV1Policies` | `trusthubV1PoliciesSchema` | `src/models/trusthub-v1-policies.ts` |

### listPolicies

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listPolicies(request: TrusthubV1PoliciesApi.ListPoliciesRequest, options?: RequestOptions): ApiPromise<ListPoliciesResponse, ResponseError>`
- **Wire**: `GET /v1/Policies`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListPoliciesResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1PoliciesApi.ListPoliciesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListPoliciesResponse` | `listPoliciesResponseSchema` | `src/models/list-policies-response.ts` |

