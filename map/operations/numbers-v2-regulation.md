<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV2Regulation — operations

Accessor: `client.numbersV2Regulation` · Source: `src/resources/numbers-v2-regulation.ts` · 2 operations · Request types: namespace `NumbersV2Regulation`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchRegulation

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchRegulation(request: NumbersV2Regulation.FetchRegulationRequest, options?: RequestOptions): ApiPromise<NumbersV2RegulatoryComplianceRegulation, ResponseError>`
- **Wire**: `GET /v2/RegulatoryCompliance/Regulations/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NumbersV2RegulatoryComplianceRegulation`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2Regulation.FetchRegulationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `includeConstraints` | `query` | `IncludeConstraints` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `NumbersV2RegulatoryComplianceRegulation` | `numbersV2RegulatoryComplianceRegulationSchema` | `src/models/numbers-v2-regulatory-compliance-regulation.ts` |

### listRegulation

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listRegulation(request: NumbersV2Regulation.ListRegulationRequest, options?: RequestOptions): ApiPromise<ListRegulationResponse, ResponseError>`
- **Wire**: `GET /v2/RegulatoryCompliance/Regulations`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListRegulationResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2Regulation.ListRegulationRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `endUserType` | `query` | `EndUserType` | `RegulationEnumEndUserType` | no |
| `isoCountry` | `query` | `IsoCountry` | `string` | no |
| `numberType` | `query` | `NumberType` | `string` | no |
| `includeConstraints` | `query` | `IncludeConstraints` | `boolean` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RegulationEnumEndUserType` | `regulationEnumEndUserTypeSchema` | `src/models/regulation-enum-end-user-type.ts` |
| `ListRegulationResponse` | `listRegulationResponseSchema` | `src/models/list-regulation-response.ts` |

