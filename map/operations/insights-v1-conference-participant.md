<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsV1ConferenceParticipant — operations

Accessor: `client.insightsV1ConferenceParticipant` · Source: `src/resources/insights-v1-conference-participant.ts` · 2 operations · Request types: namespace `InsightsV1ConferenceParticipant`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchConferenceParticipant

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchConferenceParticipant(request: InsightsV1ConferenceParticipant.FetchConferenceParticipantRequest, options?: RequestOptions): ApiPromise<InsightsV1ConferenceConferenceParticipant, ApiError>`
- **Wire**: `GET /v1/Conferences/{ConferenceSid}/Participants/{ParticipantSid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsightsV1ConferenceConferenceParticipant`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `InsightsV1ConferenceParticipant.FetchConferenceParticipantRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `conferenceSid` | `path` | `ConferenceSid` | `string` | yes |
| `participantSid` | `path` | `ParticipantSid` | `string` | yes |
| `events` | `query` | `Events` | `string` | no |
| `metrics` | `query` | `Metrics` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightsV1ConferenceConferenceParticipant` | `insightsV1ConferenceConferenceParticipantSchema` | `src/models/insights-v1-conference-conference-participant.ts` |

### listConferenceParticipant

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listConferenceParticipant(request: InsightsV1ConferenceParticipant.ListConferenceParticipantRequest, options?: RequestOptions): ApiPromise<ListConferenceParticipantResponse, ApiError>`
- **Wire**: `GET /v1/Conferences/{ConferenceSid}/Participants`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListConferenceParticipantResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `InsightsV1ConferenceParticipant.ListConferenceParticipantRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `conferenceSid` | `path` | `ConferenceSid` | `string` | yes |
| `participantSid` | `query` | `ParticipantSid` | `string` | no |
| `label` | `query` | `Label` | `string` | no |
| `events` | `query` | `Events` | `string` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListConferenceParticipantResponse` | `listConferenceParticipantResponseSchema` | `src/models/list-conference-participant-response.ts` |

