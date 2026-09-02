<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401RecordingTranscription — operations

Accessor: `client.api20100401RecordingTranscription` · Source: `src/resources/api20100401-recording-transcription.ts` · 3 operations · Request types: namespace `Api20100401RecordingTranscription`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deleteRecordingTranscription

- **Signature**: `deleteRecordingTranscription(request: Api20100401RecordingTranscription.DeleteRecordingTranscriptionRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /2010-04-01/Accounts/{AccountSid}/Recordings/{RecordingSid}/Transcriptions/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401RecordingTranscription.DeleteRecordingTranscriptionRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `recordingSid` | `path` | `RecordingSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchRecordingTranscription

- **Signature**: `fetchRecordingTranscription(request: Api20100401RecordingTranscription.FetchRecordingTranscriptionRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountRecordingRecordingTranscription, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Recordings/{RecordingSid}/Transcriptions/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2010AccountRecordingRecordingTranscription`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401RecordingTranscription.FetchRecordingTranscriptionRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `recordingSid` | `path` | `RecordingSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountRecordingRecordingTranscription` | `apiV2010AccountRecordingRecordingTranscriptionSchema` | `src/models/api-v2010-account-recording-recording-transcription.ts` |

### listRecordingTranscription

- **Signature**: `listRecordingTranscription(request: Api20100401RecordingTranscription.ListRecordingTranscriptionRequest, options?: RequestOptions): ApiPromise<ListRecordingTranscriptionResponse, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Recordings/{RecordingSid}/Transcriptions.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListRecordingTranscriptionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401RecordingTranscription.ListRecordingTranscriptionRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `recordingSid` | `path` | `RecordingSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListRecordingTranscriptionResponse` | `listRecordingTranscriptionResponseSchema` | `src/models/list-recording-transcription-response.ts` |

