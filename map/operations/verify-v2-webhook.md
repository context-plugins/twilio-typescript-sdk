<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2Webhook — operations

Accessor: `client.verifyV2Webhook` · Source: `src/resources/verify-v2-webhook.ts` · 5 operations · Request types: namespace `VerifyV2Webhook`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createWebhook

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createWebhook(request: VerifyV2Webhook.CreateWebhookRequest, options?: RequestOptions): ApiPromise<VerifyV2ServiceWebhook, ApiError>`
- **Wire**: `POST /v2/Services/{ServiceSid}/Webhooks`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VerifyV2ServiceWebhook`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2Webhook.CreateWebhookRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | yes |
| `eventTypes` | `form` | `EventTypes` | `string[]` | yes |
| `webhookUrl` | `form` | `WebhookUrl` | `string` | yes |
| `status` | `form` | `Status` | `WebhookEnumStatus` | no |
| `version` | `form` | `Version` | `WebhookEnumVersion` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhookEnumStatus` | `webhookEnumStatusSchema` | `src/models/webhook-enum-status.ts` |
| `WebhookEnumVersion` | `webhookEnumVersionSchema` | `src/models/webhook-enum-version.ts` |
| `VerifyV2ServiceWebhook` | `verifyV2ServiceWebhookSchema` | `src/models/verify-v2-service-webhook.ts` |

### deleteWebhook

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteWebhook(request: VerifyV2Webhook.DeleteWebhookRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /v2/Services/{ServiceSid}/Webhooks/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2Webhook.DeleteWebhookRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchWebhook

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchWebhook(request: VerifyV2Webhook.FetchWebhookRequest, options?: RequestOptions): ApiPromise<VerifyV2ServiceWebhook, ApiError>`
- **Wire**: `GET /v2/Services/{ServiceSid}/Webhooks/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VerifyV2ServiceWebhook`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2Webhook.FetchWebhookRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerifyV2ServiceWebhook` | `verifyV2ServiceWebhookSchema` | `src/models/verify-v2-service-webhook.ts` |

### listWebhook

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listWebhook(request: VerifyV2Webhook.ListWebhookRequest, options?: RequestOptions): ApiPromise<ListWebhookResponse, ApiError>`
- **Wire**: `GET /v2/Services/{ServiceSid}/Webhooks`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListWebhookResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2Webhook.ListWebhookRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListWebhookResponse` | `listWebhookResponseSchema` | `src/models/list-webhook-response.ts` |

### updateWebhook

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateWebhook(request: VerifyV2Webhook.UpdateWebhookRequest, options?: RequestOptions): ApiPromise<VerifyV2ServiceWebhook, ApiError>`
- **Wire**: `POST /v2/Services/{ServiceSid}/Webhooks/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VerifyV2ServiceWebhook`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2Webhook.UpdateWebhookRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `eventTypes` | `form` | `EventTypes` | `string[]` | no |
| `webhookUrl` | `form` | `WebhookUrl` | `string` | no |
| `status` | `form` | `Status` | `WebhookEnumStatus` | no |
| `version` | `form` | `Version` | `WebhookEnumVersion` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhookEnumStatus` | `webhookEnumStatusSchema` | `src/models/webhook-enum-status.ts` |
| `WebhookEnumVersion` | `webhookEnumVersionSchema` | `src/models/webhook-enum-version.ts` |
| `VerifyV2ServiceWebhook` | `verifyV2ServiceWebhookSchema` | `src/models/verify-v2-service-webhook.ts` |

