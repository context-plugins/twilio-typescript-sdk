<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401AddOnResult — operations

Accessor: `client.api20100401AddOnResult` · Source: `src/resources/api20100401-add-on-result.ts` · 3 operations · Request types: namespace `Api20100401AddOnResult`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deleteRecordingAddOnResult

- **Signature**: `deleteRecordingAddOnResult(request: Api20100401AddOnResult.DeleteRecordingAddOnResultRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401AddOnResult.DeleteRecordingAddOnResultRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `referenceSid` | `path` | `ReferenceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchRecordingAddOnResult

- **Signature**: `fetchRecordingAddOnResult(request: Api20100401AddOnResult.FetchRecordingAddOnResultRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountRecordingRecordingAddOnResult, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2010AccountRecordingRecordingAddOnResult`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401AddOnResult.FetchRecordingAddOnResultRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `referenceSid` | `path` | `ReferenceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountRecordingRecordingAddOnResult` | `apiV2010AccountRecordingRecordingAddOnResultSchema` | `src/models/api-v2010-account-recording-recording-add-on-result.ts` |

### listRecordingAddOnResult

- **Signature**: `listRecordingAddOnResult(request: Api20100401AddOnResult.ListRecordingAddOnResultRequest, options?: RequestOptions): ApiPromise<ListRecordingAddOnResultResponse, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListRecordingAddOnResultResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401AddOnResult.ListRecordingAddOnResultRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `referenceSid` | `path` | `ReferenceSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListRecordingAddOnResultResponse` | `listRecordingAddOnResultResponseSchema` | `src/models/list-recording-add-on-result-response.ts` |

