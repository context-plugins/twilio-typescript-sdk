<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProxyV1Participant — operations

Accessor: `client.proxyV1Participant` · Source: `src/resources/proxy-v1-participant.ts` · 4 operations · Request types: namespace `ProxyV1Participant`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createParticipant2

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createParticipant2(request: ProxyV1Participant.CreateParticipant2Request, options?: RequestOptions): ApiPromise<ProxyV1ServiceSessionParticipant, ResponseError>`
- **Wire**: `POST /v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ProxyV1ServiceSessionParticipant`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ProxyV1Participant.CreateParticipant2Request` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sessionSid` | `path` | `SessionSid` | `string` | yes |
| `identifier` | `form` | `Identifier` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `proxyIdentifier` | `form` | `ProxyIdentifier` | `string` | no |
| `proxyIdentifierSid` | `form` | `ProxyIdentifierSid` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProxyV1ServiceSessionParticipant` | `proxyV1ServiceSessionParticipantSchema` | `src/models/proxy-v1-service-session-participant.ts` |

### deleteParticipant2

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteParticipant2(request: ProxyV1Participant.DeleteParticipant2Request, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ProxyV1Participant.DeleteParticipant2Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sessionSid` | `path` | `SessionSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchParticipant3

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchParticipant3(request: ProxyV1Participant.FetchParticipant3Request, options?: RequestOptions): ApiPromise<ProxyV1ServiceSessionParticipant, ResponseError>`
- **Wire**: `GET /v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProxyV1ServiceSessionParticipant`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ProxyV1Participant.FetchParticipant3Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sessionSid` | `path` | `SessionSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProxyV1ServiceSessionParticipant` | `proxyV1ServiceSessionParticipantSchema` | `src/models/proxy-v1-service-session-participant.ts` |

### listParticipant2

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listParticipant2(request: ProxyV1Participant.ListParticipant2Request, options?: RequestOptions): ApiPromise<ListParticipantResponse1, ResponseError>`
- **Wire**: `GET /v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListParticipantResponse1`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ProxyV1Participant.ListParticipant2Request` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sessionSid` | `path` | `SessionSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListParticipantResponse1` | `listParticipantResponse1Schema` | `src/models/list-participant-response1.ts` |

