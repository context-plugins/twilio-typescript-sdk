<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401MediaInstance — operations

Accessor: `client.api20100401MediaInstance` · Source: `src/resources/api20100401-media-instance.ts` · 2 operations · Request types: namespace `Api20100401MediaInstance`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteMedia

- **Signature**: `deleteMedia(request: Api20100401MediaInstance.DeleteMediaRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Media/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401MediaInstance.DeleteMediaRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `messageSid` | `path` | `MessageSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchMedia

- **Signature**: `fetchMedia(request: Api20100401MediaInstance.FetchMediaRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountMessageMedia, ApiError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Media/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2010AccountMessageMedia`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401MediaInstance.FetchMediaRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `messageSid` | `path` | `MessageSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountMessageMedia` | `apiV2010AccountMessageMediaSchema` | `src/models/api-v2010-account-message-media.ts` |

