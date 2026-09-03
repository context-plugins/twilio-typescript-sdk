<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401ConnectApp — operations

Accessor: `client.api20100401ConnectApp` · Source: `src/resources/api20100401-connect-app.ts` · 4 operations · Request types: namespace `Api20100401ConnectApp`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deleteConnectApp

- **Signature**: `deleteConnectApp(request: Api20100401ConnectApp.DeleteConnectAppRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /2010-04-01/Accounts/{AccountSid}/ConnectApps/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401ConnectApp.DeleteConnectAppRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchConnectApp

- **Signature**: `fetchConnectApp(request: Api20100401ConnectApp.FetchConnectAppRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountConnectApp, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/ConnectApps/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2010AccountConnectApp`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401ConnectApp.FetchConnectAppRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountConnectApp` | `apiV2010AccountConnectAppSchema` | `src/models/api-v2010-account-connect-app.ts` |

### listConnectApp

- **Signature**: `listConnectApp(request: Api20100401ConnectApp.ListConnectAppRequest, options?: RequestOptions): ApiPromise<ListConnectAppResponse, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/ConnectApps.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListConnectAppResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401ConnectApp.ListConnectAppRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListConnectAppResponse` | `listConnectAppResponseSchema` | `src/models/list-connect-app-response.ts` |

### updateConnectApp

- **Signature**: `updateConnectApp(request: Api20100401ConnectApp.UpdateConnectAppRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountConnectApp, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/ConnectApps/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountConnectApp`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401ConnectApp.UpdateConnectAppRequest` (10):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `authorizeRedirectUrl` | `form` | `AuthorizeRedirectUrl` | `string` | no |
| `companyName` | `form` | `CompanyName` | `string` | no |
| `deauthorizeCallbackMethod` | `form` | `DeauthorizeCallbackMethod` | `DeauthorizeCallbackMethod1` | no |
| `deauthorizeCallbackUrl` | `form` | `DeauthorizeCallbackUrl` | `string` | no |
| `description` | `form` | `Description` | `string` | no |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `homepageUrl` | `form` | `HomepageUrl` | `string` | no |
| `permissions` | `form` | `Permissions` | `ConnectAppEnumPermission[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeauthorizeCallbackMethod1` | `deauthorizeCallbackMethod1Schema` | `src/models/deauthorize-callback-method1.ts` |
| `ConnectAppEnumPermission` | `connectAppEnumPermissionSchema` | `src/models/connect-app-enum-permission.ts` |
| `ApiV2010AccountConnectApp` | `apiV2010AccountConnectAppSchema` | `src/models/api-v2010-account-connect-app.ts` |

