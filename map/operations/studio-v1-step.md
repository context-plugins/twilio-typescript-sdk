<!-- Generated file — do not edit; regenerated with the SDK. -->

# StudioV1Step — operations

Accessor: `client.studioV1Step` · Source: `src/resources/studio-v1-step.ts` · 2 operations · Request types: namespace `StudioV1Step`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchStep

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchStep(request: StudioV1Step.FetchStepRequest, options?: RequestOptions): ApiPromise<StudioV1FlowEngagementStep, ApiError>`
- **Wire**: `GET /v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Steps/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StudioV1FlowEngagementStep`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV1Step.FetchStepRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `flowSid` | `path` | `FlowSid` | `string` | yes |
| `engagementSid` | `path` | `EngagementSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StudioV1FlowEngagementStep` | `studioV1FlowEngagementStepSchema` | `src/models/studio-v1-flow-engagement-step.ts` |

### listStep

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listStep(request: StudioV1Step.ListStepRequest, options?: RequestOptions): ApiPromise<ListStepResponse, ApiError>`
- **Wire**: `GET /v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Steps`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListStepResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV1Step.ListStepRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `flowSid` | `path` | `FlowSid` | `string` | yes |
| `engagementSid` | `path` | `EngagementSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListStepResponse` | `listStepResponseSchema` | `src/models/list-step-response.ts` |

