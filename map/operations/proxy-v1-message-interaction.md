<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProxyV1MessageInteraction — operations

Accessor: `client.proxyV1MessageInteraction` · Source: `src/resources/proxy-v1-message-interaction.ts` · 3 operations · Request types: namespace `ProxyV1MessageInteraction`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createMessageInteraction

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createMessageInteraction(request: ProxyV1MessageInteraction.CreateMessageInteractionRequest, options?: RequestOptions): ApiPromise<ProxyV1ServiceSessionParticipantMessageInteraction, ResponseError>`
- **Wire**: `POST /v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants/{ParticipantSid}/MessageInteractions`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ProxyV1ServiceSessionParticipantMessageInteraction`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ProxyV1MessageInteraction.CreateMessageInteractionRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sessionSid` | `path` | `SessionSid` | `string` | yes |
| `participantSid` | `path` | `ParticipantSid` | `string` | yes |
| `body2` | `form` | `Body` | `string` | no |
| `mediaUrl` | `form` | `MediaUrl` | `string[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProxyV1ServiceSessionParticipantMessageInteraction` | `proxyV1ServiceSessionParticipantMessageInteractionSchema` | `src/models/proxy-v1-service-session-participant-message-interaction.ts` |

### fetchMessageInteraction

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchMessageInteraction(request: ProxyV1MessageInteraction.FetchMessageInteractionRequest, options?: RequestOptions): ApiPromise<ProxyV1ServiceSessionParticipantMessageInteraction, ResponseError>`
- **Wire**: `GET /v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants/{ParticipantSid}/MessageInteractions/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProxyV1ServiceSessionParticipantMessageInteraction`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ProxyV1MessageInteraction.FetchMessageInteractionRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sessionSid` | `path` | `SessionSid` | `string` | yes |
| `participantSid` | `path` | `ParticipantSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProxyV1ServiceSessionParticipantMessageInteraction` | `proxyV1ServiceSessionParticipantMessageInteractionSchema` | `src/models/proxy-v1-service-session-participant-message-interaction.ts` |

### listMessageInteraction

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listMessageInteraction(request: ProxyV1MessageInteraction.ListMessageInteractionRequest, options?: RequestOptions): ApiPromise<ListMessageInteractionResponse, ResponseError>`
- **Wire**: `GET /v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants/{ParticipantSid}/MessageInteractions`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListMessageInteractionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ProxyV1MessageInteraction.ListMessageInteractionRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sessionSid` | `path` | `SessionSid` | `string` | yes |
| `participantSid` | `path` | `ParticipantSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListMessageInteractionResponse` | `listMessageInteractionResponseSchema` | `src/models/list-message-interaction-response.ts` |

