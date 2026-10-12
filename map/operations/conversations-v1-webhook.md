<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV1Webhook — operations

Accessor: `client.conversationsV1Webhook` · Source: `src/resources/conversations-v1-webhook.ts` · 14 operations · Request types: namespace `ConversationsV1Webhook`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createConversationScopedWebhook

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createConversationScopedWebhook(request: ConversationsV1Webhook.CreateConversationScopedWebhookRequest, options?: RequestOptions): ApiPromise<ConversationsV1ConversationConversationScopedWebhook, ApiError>`
- **Wire**: `POST /v1/Conversations/{ConversationSid}/Webhooks`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsV1ConversationConversationScopedWebhook`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Webhook.CreateConversationScopedWebhookRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `target` | `form` | `Target` | `ConversationScopedWebhookEnumTarget` | yes |
| `configurationUrl` | `form` | `Configuration.Url` | `string` | no |
| `configurationMethod` | `form` | `Configuration.Method` | `ConversationScopedWebhookEnumMethod` | no |
| `configurationFilters` | `form` | `Configuration.Filters` | `string[]` | no |
| `configurationTriggers` | `form` | `Configuration.Triggers` | `string[]` | no |
| `configurationFlowSid` | `form` | `Configuration.FlowSid` | `string` | no |
| `configurationReplayAfter` | `form` | `Configuration.ReplayAfter` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationScopedWebhookEnumTarget` | `conversationScopedWebhookEnumTargetSchema` | `src/models/conversation-scoped-webhook-enum-target.ts` |
| `ConversationScopedWebhookEnumMethod` | `conversationScopedWebhookEnumMethodSchema` | `src/models/conversation-scoped-webhook-enum-method.ts` |
| `ConversationsV1ConversationConversationScopedWebhook` | `conversationsV1ConversationConversationScopedWebhookSchema` | `src/models/conversations-v1-conversation-conversation-scoped-webhook.ts` |

### createServiceConversationScopedWebhook

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createServiceConversationScopedWebhook(request: ConversationsV1Webhook.CreateServiceConversationScopedWebhookRequest, options?: RequestOptions): ApiPromise<ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook, ApiError>`
- **Wire**: `POST /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Webhook.CreateServiceConversationScopedWebhookRequest` (9):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `target` | `form` | `Target` | `ServiceConversationScopedWebhookEnumTarget` | yes |
| `configurationUrl` | `form` | `Configuration.Url` | `string` | no |
| `configurationMethod` | `form` | `Configuration.Method` | `ServiceConversationScopedWebhookEnumMethod` | no |
| `configurationFilters` | `form` | `Configuration.Filters` | `string[]` | no |
| `configurationTriggers` | `form` | `Configuration.Triggers` | `string[]` | no |
| `configurationFlowSid` | `form` | `Configuration.FlowSid` | `string` | no |
| `configurationReplayAfter` | `form` | `Configuration.ReplayAfter` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ServiceConversationScopedWebhookEnumTarget` | `serviceConversationScopedWebhookEnumTargetSchema` | `src/models/service-conversation-scoped-webhook-enum-target.ts` |
| `ServiceConversationScopedWebhookEnumMethod` | `serviceConversationScopedWebhookEnumMethodSchema` | `src/models/service-conversation-scoped-webhook-enum-method.ts` |
| `ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook` | `conversationsV1ServiceServiceConversationServiceConversationScopedWebhookSchema` | `src/models/conversations-v1-service-service-conversation-service-conversation-scoped-webhook.ts` |

### deleteConversationScopedWebhook

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteConversationScopedWebhook(request: ConversationsV1Webhook.DeleteConversationScopedWebhookRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /v1/Conversations/{ConversationSid}/Webhooks/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Webhook.DeleteConversationScopedWebhookRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### deleteServiceConversationScopedWebhook

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteServiceConversationScopedWebhook(request: ConversationsV1Webhook.DeleteServiceConversationScopedWebhookRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Webhook.DeleteServiceConversationScopedWebhookRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchConfigurationWebhook

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchConfigurationWebhook(options?: RequestOptions): ApiPromise<ConversationsV1ConfigurationConfigurationWebhook, ApiError>`
- **Wire**: `GET /v1/Configuration/Webhooks`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsV1ConfigurationConfigurationWebhook`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV1ConfigurationConfigurationWebhook` | `conversationsV1ConfigurationConfigurationWebhookSchema` | `src/models/conversations-v1-configuration-configuration-webhook.ts` |

### fetchConversationScopedWebhook

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchConversationScopedWebhook(request: ConversationsV1Webhook.FetchConversationScopedWebhookRequest, options?: RequestOptions): ApiPromise<ConversationsV1ConversationConversationScopedWebhook, ApiError>`
- **Wire**: `GET /v1/Conversations/{ConversationSid}/Webhooks/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsV1ConversationConversationScopedWebhook`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Webhook.FetchConversationScopedWebhookRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV1ConversationConversationScopedWebhook` | `conversationsV1ConversationConversationScopedWebhookSchema` | `src/models/conversations-v1-conversation-conversation-scoped-webhook.ts` |

### fetchServiceConversationScopedWebhook

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchServiceConversationScopedWebhook(request: ConversationsV1Webhook.FetchServiceConversationScopedWebhookRequest, options?: RequestOptions): ApiPromise<ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook, ApiError>`
- **Wire**: `GET /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Webhook.FetchServiceConversationScopedWebhookRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook` | `conversationsV1ServiceServiceConversationServiceConversationScopedWebhookSchema` | `src/models/conversations-v1-service-service-conversation-service-conversation-scoped-webhook.ts` |

### fetchServiceWebhookConfiguration

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchServiceWebhookConfiguration(request: ConversationsV1Webhook.FetchServiceWebhookConfigurationRequest, options?: RequestOptions): ApiPromise<ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration, ApiError>`
- **Wire**: `GET /v1/Services/{ChatServiceSid}/Configuration/Webhooks`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Webhook.FetchServiceWebhookConfigurationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration` | `conversationsV1ServiceServiceConfigurationServiceWebhookConfigurationSchema` | `src/models/conversations-v1-service-service-configuration-service-webhook-configuration.ts` |

### listConversationScopedWebhook

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listConversationScopedWebhook(request: ConversationsV1Webhook.ListConversationScopedWebhookRequest, options?: RequestOptions): ApiPromise<ListConversationScopedWebhookResponse, ApiError>`
- **Wire**: `GET /v1/Conversations/{ConversationSid}/Webhooks`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListConversationScopedWebhookResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Webhook.ListConversationScopedWebhookRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListConversationScopedWebhookResponse` | `listConversationScopedWebhookResponseSchema` | `src/models/list-conversation-scoped-webhook-response.ts` |

### listServiceConversationScopedWebhook

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listServiceConversationScopedWebhook(request: ConversationsV1Webhook.ListServiceConversationScopedWebhookRequest, options?: RequestOptions): ApiPromise<ListServiceConversationScopedWebhookResponse, ApiError>`
- **Wire**: `GET /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListServiceConversationScopedWebhookResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Webhook.ListServiceConversationScopedWebhookRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListServiceConversationScopedWebhookResponse` | `listServiceConversationScopedWebhookResponseSchema` | `src/models/list-service-conversation-scoped-webhook-response.ts` |

### updateConfigurationWebhook

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateConfigurationWebhook(request: ConversationsV1Webhook.UpdateConfigurationWebhookRequest, options?: RequestOptions): ApiPromise<ConversationsV1ConfigurationConfigurationWebhook, ApiError>`
- **Wire**: `POST /v1/Configuration/Webhooks`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsV1ConfigurationConfigurationWebhook`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Webhook.UpdateConfigurationWebhookRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `method` | `form` | `Method` | `string` | no |
| `filters` | `form` | `Filters` | `string[]` | no |
| `preWebhookUrl` | `form` | `PreWebhookUrl` | `string` | no |
| `postWebhookUrl` | `form` | `PostWebhookUrl` | `string` | no |
| `target` | `form` | `Target` | `ConfigurationWebhookEnumTarget` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConfigurationWebhookEnumTarget` | `configurationWebhookEnumTargetSchema` | `src/models/configuration-webhook-enum-target.ts` |
| `ConversationsV1ConfigurationConfigurationWebhook` | `conversationsV1ConfigurationConfigurationWebhookSchema` | `src/models/conversations-v1-configuration-configuration-webhook.ts` |

### updateConversationScopedWebhook

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateConversationScopedWebhook(request: ConversationsV1Webhook.UpdateConversationScopedWebhookRequest, options?: RequestOptions): ApiPromise<ConversationsV1ConversationConversationScopedWebhook, ApiError>`
- **Wire**: `POST /v1/Conversations/{ConversationSid}/Webhooks/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsV1ConversationConversationScopedWebhook`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Webhook.UpdateConversationScopedWebhookRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `configurationUrl` | `form` | `Configuration.Url` | `string` | no |
| `configurationMethod` | `form` | `Configuration.Method` | `ConversationScopedWebhookEnumMethod` | no |
| `configurationFilters` | `form` | `Configuration.Filters` | `string[]` | no |
| `configurationTriggers` | `form` | `Configuration.Triggers` | `string[]` | no |
| `configurationFlowSid` | `form` | `Configuration.FlowSid` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationScopedWebhookEnumMethod` | `conversationScopedWebhookEnumMethodSchema` | `src/models/conversation-scoped-webhook-enum-method.ts` |
| `ConversationsV1ConversationConversationScopedWebhook` | `conversationsV1ConversationConversationScopedWebhookSchema` | `src/models/conversations-v1-conversation-conversation-scoped-webhook.ts` |

### updateServiceConversationScopedWebhook

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateServiceConversationScopedWebhook(request: ConversationsV1Webhook.UpdateServiceConversationScopedWebhookRequest, options?: RequestOptions): ApiPromise<ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook, ApiError>`
- **Wire**: `POST /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Webhook.UpdateServiceConversationScopedWebhookRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `configurationUrl` | `form` | `Configuration.Url` | `string` | no |
| `configurationMethod` | `form` | `Configuration.Method` | `ServiceConversationScopedWebhookEnumMethod` | no |
| `configurationFilters` | `form` | `Configuration.Filters` | `string[]` | no |
| `configurationTriggers` | `form` | `Configuration.Triggers` | `string[]` | no |
| `configurationFlowSid` | `form` | `Configuration.FlowSid` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ServiceConversationScopedWebhookEnumMethod` | `serviceConversationScopedWebhookEnumMethodSchema` | `src/models/service-conversation-scoped-webhook-enum-method.ts` |
| `ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook` | `conversationsV1ServiceServiceConversationServiceConversationScopedWebhookSchema` | `src/models/conversations-v1-service-service-conversation-service-conversation-scoped-webhook.ts` |

### updateServiceWebhookConfiguration

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateServiceWebhookConfiguration(request: ConversationsV1Webhook.UpdateServiceWebhookConfigurationRequest, options?: RequestOptions): ApiPromise<ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration, ApiError>`
- **Wire**: `POST /v1/Services/{ChatServiceSid}/Configuration/Webhooks`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Webhook.UpdateServiceWebhookConfigurationRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `preWebhookUrl` | `form` | `PreWebhookUrl` | `string` | no |
| `postWebhookUrl` | `form` | `PostWebhookUrl` | `string` | no |
| `filters` | `form` | `Filters` | `string[]` | no |
| `method` | `form` | `Method` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration` | `conversationsV1ServiceServiceConfigurationServiceWebhookConfigurationSchema` | `src/models/conversations-v1-service-service-configuration-service-webhook-configuration.ts` |

