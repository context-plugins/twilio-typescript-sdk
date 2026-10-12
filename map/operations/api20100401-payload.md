<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Payload — operations

Accessor: `client.api20100401Payload` · Source: `src/resources/api20100401-payload.ts` · 3 operations · Request types: namespace `Api20100401Payload`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteRecordingAddOnResultPayload

- **Signature**: `deleteRecordingAddOnResultPayload(request: Api20100401Payload.DeleteRecordingAddOnResultPayloadRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{AddOnResultSid}/Payloads/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Payload.DeleteRecordingAddOnResultPayloadRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `referenceSid` | `path` | `ReferenceSid` | `string` | yes |
| `addOnResultSid` | `path` | `AddOnResultSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchRecordingAddOnResultPayload

- **Signature**: `fetchRecordingAddOnResultPayload(request: Api20100401Payload.FetchRecordingAddOnResultPayloadRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload, ApiError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{AddOnResultSid}/Payloads/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Payload.FetchRecordingAddOnResultPayloadRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `referenceSid` | `path` | `ReferenceSid` | `string` | yes |
| `addOnResultSid` | `path` | `AddOnResultSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload` | `apiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayloadSchema` | `src/models/api-v2010-account-recording-recording-add-on-result-recording-add-on-result-payload.ts` |

### listRecordingAddOnResultPayload

- **Signature**: `listRecordingAddOnResultPayload(request: Api20100401Payload.ListRecordingAddOnResultPayloadRequest, options?: RequestOptions): ApiPromise<ListRecordingAddOnResultPayloadResponse, ApiError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{AddOnResultSid}/Payloads.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListRecordingAddOnResultPayloadResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Payload.ListRecordingAddOnResultPayloadRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `referenceSid` | `path` | `ReferenceSid` | `string` | yes |
| `addOnResultSid` | `path` | `AddOnResultSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListRecordingAddOnResultPayloadResponse` | `listRecordingAddOnResultPayloadResponseSchema` | `src/models/list-recording-add-on-result-payload-response.ts` |

