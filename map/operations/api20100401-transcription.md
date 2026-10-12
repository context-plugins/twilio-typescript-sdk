<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Transcription — operations

Accessor: `client.api20100401Transcription` · Source: `src/resources/api20100401-transcription.ts` · 3 operations · Request types: namespace `Api20100401Transcription`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteTranscription

- **Signature**: `deleteTranscription(request: Api20100401Transcription.DeleteTranscriptionRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /2010-04-01/Accounts/{AccountSid}/Transcriptions/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Transcription.DeleteTranscriptionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchTranscription

- **Signature**: `fetchTranscription(request: Api20100401Transcription.FetchTranscriptionRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountTranscription, ApiError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Transcriptions/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2010AccountTranscription`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Transcription.FetchTranscriptionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountTranscription` | `apiV2010AccountTranscriptionSchema` | `src/models/api-v2010-account-transcription.ts` |

### listTranscription

- **Signature**: `listTranscription(request: Api20100401Transcription.ListTranscriptionRequest, options?: RequestOptions): ApiPromise<ListTranscriptionResponse, ApiError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Transcriptions.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListTranscriptionResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Transcription.ListTranscriptionRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListTranscriptionResponse` | `listTranscriptionResponseSchema` | `src/models/list-transcription-response.ts` |

