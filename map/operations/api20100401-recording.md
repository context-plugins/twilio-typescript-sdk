<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Recording — operations

Accessor: `client.api20100401Recording` · Source: `src/resources/api20100401-recording.ts` · 3 operations · Request types: namespace `Api20100401Recording`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteRecording

- **Signature**: `deleteRecording(request: Api20100401Recording.DeleteRecordingRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /2010-04-01/Accounts/{AccountSid}/Recordings/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Recording.DeleteRecordingRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchRecording

- **Signature**: `fetchRecording(request: Api20100401Recording.FetchRecordingRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountRecording, ApiError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Recordings/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2010AccountRecording`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Recording.FetchRecordingRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `includeSoftDeleted` | `query` | `IncludeSoftDeleted` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountRecording` | `apiV2010AccountRecordingSchema` | `src/models/api-v2010-account-recording.ts` |

### listRecording

- **Signature**: `listRecording(request: Api20100401Recording.ListRecordingRequest, options?: RequestOptions): ApiPromise<ListRecordingResponse, ApiError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Recordings.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListRecordingResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Recording.ListRecordingRequest` (10):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `dateCreated` | `query` | `DateCreated` | `Date` (date-time) | no |
| `dateCreatedQuery` | `query` | `DateCreated<` | `Date` (date-time) | no |
| `dateCreatedQueryQuery` | `query` | `DateCreated>` | `Date` (date-time) | no |
| `callSid` | `query` | `CallSid` | `string` | no |
| `conferenceSid` | `query` | `ConferenceSid` | `string` | no |
| `includeSoftDeleted` | `query` | `IncludeSoftDeleted` | `boolean` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListRecordingResponse` | `listRecordingResponseSchema` | `src/models/list-recording-response.ts` |

