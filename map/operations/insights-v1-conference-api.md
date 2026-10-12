<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsV1ConferenceApi — operations

Accessor: `client.insightsV1ConferenceApi` · Source: `src/resources/insights-v1-conference-api.ts` · 2 operations · Request types: namespace `InsightsV1ConferenceApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchConference2

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchConference2(request: InsightsV1ConferenceApi.FetchConference2Request, options?: RequestOptions): ApiPromise<InsightsV1Conference, ApiError>`
- **Wire**: `GET /v1/Conferences/{ConferenceSid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsightsV1Conference`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `InsightsV1ConferenceApi.FetchConference2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `conferenceSid` | `path` | `ConferenceSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightsV1Conference` | `insightsV1ConferenceSchema` | `src/models/insights-v1-conference.ts` |

### listConference2

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listConference2(request: InsightsV1ConferenceApi.ListConference2Request, options?: RequestOptions): ApiPromise<ListConferenceResponse1, ApiError>`
- **Wire**: `GET /v1/Conferences`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListConferenceResponse1`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `InsightsV1ConferenceApi.ListConference2Request` (13):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `conferenceSid` | `query` | `ConferenceSid` | `string` | no |
| `friendlyName` | `query` | `FriendlyName` | `string` | no |
| `status` | `query` | `Status` | `string` | no |
| `createdAfter` | `query` | `CreatedAfter` | `string` | no |
| `createdBefore` | `query` | `CreatedBefore` | `string` | no |
| `mixerRegion` | `query` | `MixerRegion` | `string` | no |
| `tags` | `query` | `Tags` | `string` | no |
| `subaccount` | `query` | `Subaccount` | `string` | no |
| `detectedIssues` | `query` | `DetectedIssues` | `string` | no |
| `endReason` | `query` | `EndReason` | `string` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListConferenceResponse1` | `listConferenceResponse1Schema` | `src/models/list-conference-response1.ts` |

