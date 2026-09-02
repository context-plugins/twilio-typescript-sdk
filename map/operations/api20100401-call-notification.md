<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401CallNotification — operations

Accessor: `client.api20100401CallNotification` · Source: `src/resources/api20100401-call-notification.ts` · 2 operations · Request types: namespace `Api20100401CallNotification`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchCallNotification

- **Signature**: `fetchCallNotification(request: Api20100401CallNotification.FetchCallNotificationRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountCallCallNotificationInstance, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Notifications/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2010AccountCallCallNotificationInstance`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401CallNotification.FetchCallNotificationRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `callSid` | `path` | `CallSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountCallCallNotificationInstance` | `apiV2010AccountCallCallNotificationInstanceSchema` | `src/models/api-v2010-account-call-call-notification-instance.ts` |

### listCallNotification

- **Signature**: `listCallNotification(request: Api20100401CallNotification.ListCallNotificationRequest, options?: RequestOptions): ApiPromise<ListCallNotificationResponse, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Notifications.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListCallNotificationResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401CallNotification.ListCallNotificationRequest` (9):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `callSid` | `path` | `CallSid` | `string` | yes |
| `log` | `query` | `Log` | `number` | no |
| `messageDate` | `query` | `MessageDate` | `string` (date) | no |
| `messageDateQuery` | `query` | `MessageDate<` | `string` (date) | no |
| `messageDateQueryQuery` | `query` | `MessageDate>` | `string` (date) | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListCallNotificationResponse` | `listCallNotificationResponseSchema` | `src/models/list-call-notification-response.ts` |

