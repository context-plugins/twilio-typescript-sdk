<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401AuthorizedConnectApp — operations

Accessor: `client.api20100401AuthorizedConnectApp` · Source: `src/resources/api20100401-authorized-connect-app.ts` · 2 operations · Request types: namespace `Api20100401AuthorizedConnectApp`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchAuthorizedConnectApp

- **Signature**: `fetchAuthorizedConnectApp(request: Api20100401AuthorizedConnectApp.FetchAuthorizedConnectAppRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountAuthorizedConnectApp, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/AuthorizedConnectApps/{ConnectAppSid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2010AccountAuthorizedConnectApp`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401AuthorizedConnectApp.FetchAuthorizedConnectAppRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `connectAppSid` | `path` | `ConnectAppSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountAuthorizedConnectApp` | `apiV2010AccountAuthorizedConnectAppSchema` | `src/models/api-v2010-account-authorized-connect-app.ts` |

### listAuthorizedConnectApp

- **Signature**: `listAuthorizedConnectApp(request: Api20100401AuthorizedConnectApp.ListAuthorizedConnectAppRequest, options?: RequestOptions): ApiPromise<ListAuthorizedConnectAppResponse, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/AuthorizedConnectApps.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListAuthorizedConnectAppResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401AuthorizedConnectApp.ListAuthorizedConnectAppRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListAuthorizedConnectAppResponse` | `listAuthorizedConnectAppResponseSchema` | `src/models/list-authorized-connect-app-response.ts` |

