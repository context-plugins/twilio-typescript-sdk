<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProxyV1Interaction — operations

Accessor: `client.proxyV1Interaction` · Source: `src/resources/proxy-v1-interaction.ts` · 3 operations · Request types: namespace `ProxyV1Interaction`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deleteInteraction

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteInteraction(request: ProxyV1Interaction.DeleteInteractionRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Services/{ServiceSid}/Sessions/{SessionSid}/Interactions/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ProxyV1Interaction.DeleteInteractionRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sessionSid` | `path` | `SessionSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchInteraction

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchInteraction(request: ProxyV1Interaction.FetchInteractionRequest, options?: RequestOptions): ApiPromise<ProxyV1ServiceSessionInteraction, ResponseError>`
- **Wire**: `GET /v1/Services/{ServiceSid}/Sessions/{SessionSid}/Interactions/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProxyV1ServiceSessionInteraction`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ProxyV1Interaction.FetchInteractionRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sessionSid` | `path` | `SessionSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProxyV1ServiceSessionInteraction` | `proxyV1ServiceSessionInteractionSchema` | `src/models/proxy-v1-service-session-interaction.ts` |

### listInteraction

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listInteraction(request: ProxyV1Interaction.ListInteractionRequest, options?: RequestOptions): ApiPromise<ListInteractionResponse, ResponseError>`
- **Wire**: `GET /v1/Services/{ServiceSid}/Sessions/{SessionSid}/Interactions`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListInteractionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ProxyV1Interaction.ListInteractionRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sessionSid` | `path` | `SessionSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListInteractionResponse` | `listInteractionResponseSchema` | `src/models/list-interaction-response.ts` |

