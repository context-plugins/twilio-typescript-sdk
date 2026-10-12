<!-- Generated file — do not edit; regenerated with the SDK. -->

# V2ShortCodeApplications — operations

Accessor: `client.v2ShortCodeApplications` · Source: `src/resources/v2-short-code-applications.ts` · 3 operations · Request types: namespace `V2ShortCodeApplications`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createShortCodeApplication

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createShortCodeApplication(request: V2ShortCodeApplications.CreateShortCodeApplicationRequestParams, options?: RequestOptions): ApiPromise<CreateShortCodeApplicationResponse, ApiError>`
- **Wire**: `POST /v2/ShortCodes/Applications`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateShortCodeApplicationResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `V2ShortCodeApplications.CreateShortCodeApplicationRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateShortCodeApplicationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateShortCodeApplicationRequest` | `createShortCodeApplicationRequestSchema` | `src/models/create-short-code-application-request.ts` |
| `CreateShortCodeApplicationResponse` | `createShortCodeApplicationResponseSchema` | `src/models/create-short-code-application-response.ts` |

### fetchShortCodeApplication

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchShortCodeApplication(request: V2ShortCodeApplications.FetchShortCodeApplicationRequest, options?: RequestOptions): ApiPromise<ShortCodeApplication, ApiError>`
- **Wire**: `GET /v2/ShortCodes/Applications/{sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ShortCodeApplication`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `V2ShortCodeApplications.FetchShortCodeApplicationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sid` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ShortCodeApplication` | `shortCodeApplicationSchema` | `src/models/short-code-application.ts` |

### listShortCodeApplications

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listShortCodeApplications(request: V2ShortCodeApplications.ListShortCodeApplicationsRequest, options?: RequestOptions): ApiPromise<ShortCodeApplicationResponsePage, ApiError>`
- **Wire**: `GET /v2/ShortCodes/Applications`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ShortCodeApplicationResponsePage`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `V2ShortCodeApplications.ListShortCodeApplicationsRequest` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `accountSid` | `query` | `AccountSid` | `string` | no | — |
| `isoCountry` | `query` | `IsoCountry` | `string` | no | — |
| `status` | `query` | `Status` | `string` | no | — |
| `friendlyName` | `query` | `FriendlyName` | `string` | no | — |
| `sid` | `query` | `Sid` | `string` | no | — |
| `pageSize` | `query` | `PageSize` | `number` | no | — |
| `page` | `query` | `Page` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ShortCodeApplicationResponsePage` | `shortCodeApplicationResponsePageSchema` | `src/models/short-code-application-response-page.ts` |

