<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Message — operations

Accessor: `client.api20100401Message` · Source: `src/resources/api20100401-message.ts` · 5 operations · Request types: namespace `Api20100401Message`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createMessage

- **Signature**: `createMessage(request: Api20100401Message.CreateMessageRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountMessage, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/Messages.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountMessage`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Message.CreateMessageRequest` (26):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `to` | `form` | `To` | `string` | yes |
| `statusCallback` | `form` | `StatusCallback` | `string` | no |
| `applicationSid` | `form` | `ApplicationSid` | `string` | no |
| `maxPrice` | `form` | `MaxPrice` | `number` | no |
| `provideFeedback` | `form` | `ProvideFeedback` | `boolean` | no |
| `attempt` | `form` | `Attempt` | `number` | no |
| `validityPeriod` | `form` | `ValidityPeriod` | `number` | no |
| `forceDelivery` | `form` | `ForceDelivery` | `boolean` | no |
| `contentRetention` | `form` | `ContentRetention` | `MessageEnumContentRetention` | no |
| `addressRetention` | `form` | `AddressRetention` | `MessageEnumAddressRetention` | no |
| `smartEncoded` | `form` | `SmartEncoded` | `boolean` | no |
| `persistentAction` | `form` | `PersistentAction` | `string[]` | no |
| `trafficType` | `form` | `TrafficType` | `MessageEnumTrafficType` | no |
| `shortenUrls` | `form` | `ShortenUrls` | `boolean` | no |
| `scheduleType` | `form` | `ScheduleType` | `MessageEnumScheduleType` | no |
| `sendAt` | `form` | `SendAt` | `Date` (date-time) | no |
| `sendAsMms` | `form` | `SendAsMms` | `boolean` | no |
| `contentVariables` | `form` | `ContentVariables` | `string` | no |
| `riskCheck` | `form` | `RiskCheck` | `MessageEnumRiskCheck` | no |
| `from` | `form` | `From` | `string` | no |
| `fallbackFrom` | `form` | `FallbackFrom` | `string` | no |
| `messagingServiceSid` | `form` | `MessagingServiceSid` | `string` | no |
| `body2` | `form` | `Body` | `string` | no |
| `mediaUrl` | `form` | `MediaUrl` | `string[]` | no |
| `contentSid` | `form` | `ContentSid` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessageEnumContentRetention` | `messageEnumContentRetentionSchema` | `src/models/message-enum-content-retention.ts` |
| `MessageEnumAddressRetention` | `messageEnumAddressRetentionSchema` | `src/models/message-enum-address-retention.ts` |
| `MessageEnumTrafficType` | `messageEnumTrafficTypeSchema` | `src/models/message-enum-traffic-type.ts` |
| `MessageEnumScheduleType` | `messageEnumScheduleTypeSchema` | `src/models/message-enum-schedule-type.ts` |
| `MessageEnumRiskCheck` | `messageEnumRiskCheckSchema` | `src/models/message-enum-risk-check.ts` |
| `ApiV2010AccountMessage` | `apiV2010AccountMessageSchema` | `src/models/api-v2010-account-message.ts` |

### deleteMessage

- **Signature**: `deleteMessage(request: Api20100401Message.DeleteMessageRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /2010-04-01/Accounts/{AccountSid}/Messages/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Message.DeleteMessageRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchMessage

- **Signature**: `fetchMessage(request: Api20100401Message.FetchMessageRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountMessage, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Messages/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2010AccountMessage`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Message.FetchMessageRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountMessage` | `apiV2010AccountMessageSchema` | `src/models/api-v2010-account-message.ts` |

### listMessage

- **Signature**: `listMessage(request: Api20100401Message.ListMessageRequest, options?: RequestOptions): ApiPromise<ListMessageResponse, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Messages.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListMessageResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Message.ListMessageRequest` (9):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `to` | `query` | `To` | `string` | no |
| `from` | `query` | `From` | `string` | no |
| `dateSent` | `query` | `DateSent` | `Date` (date-time) | no |
| `dateSentQuery` | `query` | `DateSent<` | `Date` (date-time) | no |
| `dateSentQueryQuery` | `query` | `DateSent>` | `Date` (date-time) | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListMessageResponse` | `listMessageResponseSchema` | `src/models/list-message-response.ts` |

### updateMessage

- **Signature**: `updateMessage(request: Api20100401Message.UpdateMessageRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountMessage, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/Messages/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountMessage`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Message.UpdateMessageRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `body2` | `form` | `Body` | `string` | no |
| `status` | `form` | `Status` | `MessageEnumUpdateStatus` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessageEnumUpdateStatus` | `messageEnumUpdateStatusSchema` | `src/models/message-enum-update-status.ts` |
| `ApiV2010AccountMessage` | `apiV2010AccountMessageSchema` | `src/models/api-v2010-account-message.ts` |

