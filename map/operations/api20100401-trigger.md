<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Trigger — operations

Accessor: `client.api20100401Trigger` · Source: `src/resources/api20100401-trigger.ts` · 5 operations · Request types: namespace `Api20100401Trigger`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createUsageTrigger

- **Signature**: `createUsageTrigger(request: Api20100401Trigger.CreateUsageTriggerRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountUsageUsageTrigger, ApiError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/Usage/Triggers.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV2010AccountUsageUsageTrigger`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Trigger.CreateUsageTriggerRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `callbackUrl` | `form` | `CallbackUrl` | `string` | yes |
| `triggerValue` | `form` | `TriggerValue` | `string` | yes |
| `usageCategory` | `form` | `UsageCategory` | `string` | yes |
| `callbackMethod` | `form` | `CallbackMethod` | `CallbackMethod1` | no |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `recurring` | `form` | `Recurring` | `UsageTriggerEnumRecurring` | no |
| `triggerBy` | `form` | `TriggerBy` | `UsageTriggerEnumTriggerField` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CallbackMethod1` | `callbackMethod1Schema` | `src/models/callback-method1.ts` |
| `UsageTriggerEnumRecurring` | `usageTriggerEnumRecurringSchema` | `src/models/usage-trigger-enum-recurring.ts` |
| `UsageTriggerEnumTriggerField` | `usageTriggerEnumTriggerFieldSchema` | `src/models/usage-trigger-enum-trigger-field.ts` |
| `ApiV2010AccountUsageUsageTrigger` | `apiV2010AccountUsageUsageTriggerSchema` | `src/models/api-v2010-account-usage-usage-trigger.ts` |

### deleteUsageTrigger

- **Signature**: `deleteUsageTrigger(request: Api20100401Trigger.DeleteUsageTriggerRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /2010-04-01/Accounts/{AccountSid}/Usage/Triggers/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Trigger.DeleteUsageTriggerRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchUsageTrigger

- **Signature**: `fetchUsageTrigger(request: Api20100401Trigger.FetchUsageTriggerRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountUsageUsageTrigger, ApiError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Usage/Triggers/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2010AccountUsageUsageTrigger`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Trigger.FetchUsageTriggerRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountUsageUsageTrigger` | `apiV2010AccountUsageUsageTriggerSchema` | `src/models/api-v2010-account-usage-usage-trigger.ts` |

### listUsageTrigger

- **Signature**: `listUsageTrigger(request: Api20100401Trigger.ListUsageTriggerRequest, options?: RequestOptions): ApiPromise<ListUsageTriggerResponse, ApiError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Usage/Triggers.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListUsageTriggerResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Trigger.ListUsageTriggerRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `recurring` | `query` | `Recurring` | `UsageTriggerEnumRecurring` | no |
| `triggerBy` | `query` | `TriggerBy` | `UsageTriggerEnumTriggerField` | no |
| `usageCategory` | `query` | `UsageCategory` | `string` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsageTriggerEnumRecurring` | `usageTriggerEnumRecurringSchema` | `src/models/usage-trigger-enum-recurring.ts` |
| `UsageTriggerEnumTriggerField` | `usageTriggerEnumTriggerFieldSchema` | `src/models/usage-trigger-enum-trigger-field.ts` |
| `ListUsageTriggerResponse` | `listUsageTriggerResponseSchema` | `src/models/list-usage-trigger-response.ts` |

### updateUsageTrigger

- **Signature**: `updateUsageTrigger(request: Api20100401Trigger.UpdateUsageTriggerRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountUsageUsageTrigger, ApiError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/Usage/Triggers/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV2010AccountUsageUsageTrigger`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Trigger.UpdateUsageTriggerRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `callbackMethod` | `form` | `CallbackMethod` | `CallbackMethod1` | no |
| `callbackUrl` | `form` | `CallbackUrl` | `string` | no |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CallbackMethod1` | `callbackMethod1Schema` | `src/models/callback-method1.ts` |
| `ApiV2010AccountUsageUsageTrigger` | `apiV2010AccountUsageUsageTriggerSchema` | `src/models/api-v2010-account-usage-usage-trigger.ts` |

