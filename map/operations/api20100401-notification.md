<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Notification — operations

Accessor: `client.api20100401Notification` · Source: `src/resources/api20100401-notification.ts` · 2 operations · Request types: namespace `Api20100401Notification`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchNotification

- **Signature**: `fetchNotification(request: Api20100401Notification.FetchNotificationRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountNotificationInstance, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Notifications/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2010AccountNotificationInstance`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Notification.FetchNotificationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountNotificationInstance` | `apiV2010AccountNotificationInstanceSchema` | `src/models/api-v2010-account-notification-instance.ts` |

### listNotification

- **Signature**: `listNotification(request: Api20100401Notification.ListNotificationRequest, options?: RequestOptions): ApiPromise<ListNotificationResponse, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Notifications.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListNotificationResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Notification.ListNotificationRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `log` | `query` | `Log` | `number` | no |
| `messageDate` | `query` | `MessageDate` | `string` (date) | no |
| `messageDateQuery` | `query` | `MessageDate<` | `string` (date) | no |
| `messageDateQueryQuery` | `query` | `MessageDate>` | `string` (date) | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListNotificationResponse` | `listNotificationResponseSchema` | `src/models/list-notification-response.ts` |

