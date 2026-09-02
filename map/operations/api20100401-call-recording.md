<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401CallRecording — operations

Accessor: `client.api20100401CallRecording` · Source: `src/resources/api20100401-call-recording.ts` · 5 operations · Request and error types: namespace `Api20100401CallRecording`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createCallRecording

- **Signature**: `createCallRecording(request: Api20100401CallRecording.CreateCallRecordingRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountCallCallRecording, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountCallCallRecording`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401CallRecording.CreateCallRecordingRequest` (9):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `callSid` | `path` | `CallSid` | `string` | yes |
| `recordingStatusCallbackEvent` | `form` | `RecordingStatusCallbackEvent` | `string[]` | no |
| `recordingStatusCallback` | `form` | `RecordingStatusCallback` | `string` | no |
| `recordingStatusCallbackMethod` | `form` | `RecordingStatusCallbackMethod` | `RecordingStatusCallbackMethod1` | no |
| `trim` | `form` | `Trim` | `string` | no |
| `recordingChannels` | `form` | `RecordingChannels` | `string` | no |
| `recordingTrack` | `form` | `RecordingTrack` | `string` | no |
| `recordingConfigurationId` | `form` | `RecordingConfigurationId` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecordingStatusCallbackMethod1` | `recordingStatusCallbackMethod1Schema` | `src/models/recording-status-callback-method1.ts` |
| `ApiV2010AccountCallCallRecording` | `apiV2010AccountCallCallRecordingSchema` | `src/models/api-v2010-account-call-call-recording.ts` |

### deleteCallRecording

- **Signature**: `deleteCallRecording(request: Api20100401CallRecording.DeleteCallRecordingRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401CallRecording.DeleteCallRecordingRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `callSid` | `path` | `CallSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchCallRecording

- **Signature**: `fetchCallRecording(request: Api20100401CallRecording.FetchCallRecordingRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountCallCallRecording, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2010AccountCallCallRecording`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401CallRecording.FetchCallRecordingRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `callSid` | `path` | `CallSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountCallCallRecording` | `apiV2010AccountCallCallRecordingSchema` | `src/models/api-v2010-account-call-call-recording.ts` |

### listCallRecording

- **Signature**: `listCallRecording(request: Api20100401CallRecording.ListCallRecordingRequest, options?: RequestOptions): ApiPromise<ListCallRecordingResponse, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListCallRecordingResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401CallRecording.ListCallRecordingRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `callSid` | `path` | `CallSid` | `string` | yes |
| `dateCreated` | `query` | `DateCreated` | `string` (date) | no |
| `dateCreatedQuery` | `query` | `DateCreated<` | `string` (date) | no |
| `dateCreatedQueryQuery` | `query` | `DateCreated>` | `string` (date) | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListCallRecordingResponse` | `listCallRecordingResponseSchema` | `src/models/list-call-recording-response.ts` |

### updateCallRecording

- **Signature**: `updateCallRecording(request: Api20100401CallRecording.UpdateCallRecordingRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountCallCallRecording, Api20100401CallRecording.UpdateCallRecordingError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountCallCallRecording`
- **Error**: `Api20100401CallRecording.UpdateCallRecordingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accountsCallsRecordingsSidJson201041408Error1"` [408] `AccountsCallsRecordingsSidJson201041408Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Api20100401CallRecording.UpdateCallRecordingRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `callSid` | `path` | `CallSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `status` | `form` | `Status` | `CallRecordingEnumStatus` | yes |
| `pauseBehavior` | `form` | `PauseBehavior` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CallRecordingEnumStatus` | `callRecordingEnumStatusSchema` | `src/models/call-recording-enum-status.ts` |
| `ApiV2010AccountCallCallRecording` | `apiV2010AccountCallCallRecordingSchema` | `src/models/api-v2010-account-call-call-recording.ts` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `accountsCallsRecordingsSidJson201041408Error1Schema` | `src/models/accounts-calls-recordings-sid-json201041408-error1.ts` |

