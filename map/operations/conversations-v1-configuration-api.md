<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV1ConfigurationApi — operations

Accessor: `client.conversationsV1ConfigurationApi` · Source: `src/resources/conversations-v1-configuration-api.ts` · 4 operations · Request types: namespace `ConversationsV1ConfigurationApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchConfiguration

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchConfiguration(options?: RequestOptions): ApiPromise<ConversationsV1Configuration, ResponseError>`
- **Wire**: `GET /v1/Configuration`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsV1Configuration`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV1Configuration` | `conversationsV1ConfigurationSchema` | `src/models/conversations-v1-configuration.ts` |

### fetchServiceConfiguration

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchServiceConfiguration(request: ConversationsV1ConfigurationApi.FetchServiceConfigurationRequest, options?: RequestOptions): ApiPromise<ConversationsV1ServiceServiceConfiguration, ResponseError>`
- **Wire**: `GET /v1/Services/{ChatServiceSid}/Configuration`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsV1ServiceServiceConfiguration`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1ConfigurationApi.FetchServiceConfigurationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV1ServiceServiceConfiguration` | `conversationsV1ServiceServiceConfigurationSchema` | `src/models/conversations-v1-service-service-configuration.ts` |

### updateConfiguration

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateConfiguration(request: ConversationsV1ConfigurationApi.UpdateConfigurationRequest, options?: RequestOptions): ApiPromise<ConversationsV1Configuration, ResponseError>`
- **Wire**: `POST /v1/Configuration`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ConversationsV1Configuration`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1ConfigurationApi.UpdateConfigurationRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `defaultChatServiceSid` | `form` | `DefaultChatServiceSid` | `string` | no |
| `defaultMessagingServiceSid` | `form` | `DefaultMessagingServiceSid` | `string` | no |
| `defaultInactiveTimer` | `form` | `DefaultInactiveTimer` | `string` | no |
| `defaultClosedTimer` | `form` | `DefaultClosedTimer` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV1Configuration` | `conversationsV1ConfigurationSchema` | `src/models/conversations-v1-configuration.ts` |

### updateServiceConfiguration

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateServiceConfiguration(request: ConversationsV1ConfigurationApi.UpdateServiceConfigurationRequest, options?: RequestOptions): ApiPromise<ConversationsV1ServiceServiceConfiguration, ResponseError>`
- **Wire**: `POST /v1/Services/{ChatServiceSid}/Configuration`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ConversationsV1ServiceServiceConfiguration`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1ConfigurationApi.UpdateServiceConfigurationRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `defaultConversationCreatorRoleSid` | `form` | `DefaultConversationCreatorRoleSid` | `string` | no |
| `defaultConversationRoleSid` | `form` | `DefaultConversationRoleSid` | `string` | no |
| `defaultChatServiceRoleSid` | `form` | `DefaultChatServiceRoleSid` | `string` | no |
| `reachabilityEnabled` | `form` | `ReachabilityEnabled` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV1ServiceServiceConfiguration` | `conversationsV1ServiceServiceConfigurationSchema` | `src/models/conversations-v1-service-service-configuration.ts` |

