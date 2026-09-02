<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401ConferenceRecording — operations

Accessor: `client.api20100401ConferenceRecording` · Source: `src/resources/api20100401-conference-recording.ts` · 4 operations · Request types: namespace `Api20100401ConferenceRecording`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deleteConferenceRecording

- **Signature**: `deleteConferenceRecording(request: Api20100401ConferenceRecording.DeleteConferenceRecordingRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401ConferenceRecording.DeleteConferenceRecordingRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `conferenceSid` | `path` | `ConferenceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchConferenceRecording

- **Signature**: `fetchConferenceRecording(request: Api20100401ConferenceRecording.FetchConferenceRecordingRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountConferenceConferenceRecording, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2010AccountConferenceConferenceRecording`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401ConferenceRecording.FetchConferenceRecordingRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `conferenceSid` | `path` | `ConferenceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountConferenceConferenceRecording` | `apiV2010AccountConferenceConferenceRecordingSchema` | `src/models/api-v2010-account-conference-conference-recording.ts` |

### listConferenceRecording

- **Signature**: `listConferenceRecording(request: Api20100401ConferenceRecording.ListConferenceRecordingRequest, options?: RequestOptions): ApiPromise<ListConferenceRecordingResponse, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListConferenceRecordingResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401ConferenceRecording.ListConferenceRecordingRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `conferenceSid` | `path` | `ConferenceSid` | `string` | yes |
| `dateCreated` | `query` | `DateCreated` | `string` (date) | no |
| `dateCreatedQuery` | `query` | `DateCreated<` | `string` (date) | no |
| `dateCreatedQueryQuery` | `query` | `DateCreated>` | `string` (date) | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListConferenceRecordingResponse` | `listConferenceRecordingResponseSchema` | `src/models/list-conference-recording-response.ts` |

### updateConferenceRecording

- **Signature**: `updateConferenceRecording(request: Api20100401ConferenceRecording.UpdateConferenceRecordingRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountConferenceConferenceRecording, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountConferenceConferenceRecording`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401ConferenceRecording.UpdateConferenceRecordingRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `conferenceSid` | `path` | `ConferenceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `status` | `form` | `Status` | `ConferenceRecordingEnumStatus` | yes |
| `pauseBehavior` | `form` | `PauseBehavior` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConferenceRecordingEnumStatus` | `conferenceRecordingEnumStatusSchema` | `src/models/conference-recording-enum-status.ts` |
| `ApiV2010AccountConferenceConferenceRecording` | `apiV2010AccountConferenceConferenceRecordingSchema` | `src/models/api-v2010-account-conference-conference-recording.ts` |

