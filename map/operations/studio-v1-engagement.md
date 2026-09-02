<!-- Generated file — do not edit; regenerated with the SDK. -->

# StudioV1Engagement — operations

Accessor: `client.studioV1Engagement` · Source: `src/resources/studio-v1-engagement.ts` · 4 operations · Request types: namespace `StudioV1Engagement`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createEngagement

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createEngagement(request: StudioV1Engagement.CreateEngagementRequest, options?: RequestOptions): ApiPromise<StudioV1FlowEngagement, ResponseError>`
- **Wire**: `POST /v1/Flows/{FlowSid}/Engagements`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `StudioV1FlowEngagement`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV1Engagement.CreateEngagementRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `flowSid` | `path` | `FlowSid` | `string` | yes |
| `to` | `form` | `To` | `string` | yes |
| `from` | `form` | `From` | `string` | yes |
| `parameters` | `form` | `Parameters` | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StudioV1FlowEngagement` | `studioV1FlowEngagementSchema` | `src/models/studio-v1-flow-engagement.ts` |

### deleteEngagement

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteEngagement(request: StudioV1Engagement.DeleteEngagementRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Flows/{FlowSid}/Engagements/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV1Engagement.DeleteEngagementRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `flowSid` | `path` | `FlowSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchEngagement

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchEngagement(request: StudioV1Engagement.FetchEngagementRequest, options?: RequestOptions): ApiPromise<StudioV1FlowEngagement, ResponseError>`
- **Wire**: `GET /v1/Flows/{FlowSid}/Engagements/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StudioV1FlowEngagement`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV1Engagement.FetchEngagementRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `flowSid` | `path` | `FlowSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StudioV1FlowEngagement` | `studioV1FlowEngagementSchema` | `src/models/studio-v1-flow-engagement.ts` |

### listEngagement

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listEngagement(request: StudioV1Engagement.ListEngagementRequest, options?: RequestOptions): ApiPromise<ListEngagementResponse, ResponseError>`
- **Wire**: `GET /v1/Flows/{FlowSid}/Engagements`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListEngagementResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV1Engagement.ListEngagementRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `flowSid` | `path` | `FlowSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListEngagementResponse` | `listEngagementResponseSchema` | `src/models/list-engagement-response.ts` |

