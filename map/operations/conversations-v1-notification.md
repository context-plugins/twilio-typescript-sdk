<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV1Notification — operations

Accessor: `client.conversationsV1Notification` · Source: `src/resources/conversations-v1-notification.ts` · 2 operations · Request types: namespace `ConversationsV1Notification`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchServiceNotification

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchServiceNotification(request: ConversationsV1Notification.FetchServiceNotificationRequest, options?: RequestOptions): ApiPromise<ConversationsV1ServiceServiceConfigurationServiceNotification, ResponseError>`
- **Wire**: `GET /v1/Services/{ChatServiceSid}/Configuration/Notifications`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsV1ServiceServiceConfigurationServiceNotification`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Notification.FetchServiceNotificationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV1ServiceServiceConfigurationServiceNotification` | `conversationsV1ServiceServiceConfigurationServiceNotificationSchema` | `src/models/conversations-v1-service-service-configuration-service-notification.ts` |

### updateServiceNotification

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateServiceNotification(request: ConversationsV1Notification.UpdateServiceNotificationRequest, options?: RequestOptions): ApiPromise<ConversationsV1ServiceServiceConfigurationServiceNotification, ResponseError>`
- **Wire**: `POST /v1/Services/{ChatServiceSid}/Configuration/Notifications`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ConversationsV1ServiceServiceConfigurationServiceNotification`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Notification.UpdateServiceNotificationRequest` (14):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `logEnabled` | `form` | `LogEnabled` | `boolean` | no |
| `newMessageEnabled` | `form` | `NewMessage.Enabled` | `boolean` | no |
| `newMessageTemplate` | `form` | `NewMessage.Template` | `string` | no |
| `newMessageSound` | `form` | `NewMessage.Sound` | `string` | no |
| `newMessageBadgeCountEnabled` | `form` | `NewMessage.BadgeCountEnabled` | `boolean` | no |
| `addedToConversationEnabled` | `form` | `AddedToConversation.Enabled` | `boolean` | no |
| `addedToConversationTemplate` | `form` | `AddedToConversation.Template` | `string` | no |
| `addedToConversationSound` | `form` | `AddedToConversation.Sound` | `string` | no |
| `removedFromConversationEnabled` | `form` | `RemovedFromConversation.Enabled` | `boolean` | no |
| `removedFromConversationTemplate` | `form` | `RemovedFromConversation.Template` | `string` | no |
| `removedFromConversationSound` | `form` | `RemovedFromConversation.Sound` | `string` | no |
| `newMessageWithMediaEnabled` | `form` | `NewMessage.WithMedia.Enabled` | `boolean` | no |
| `newMessageWithMediaTemplate` | `form` | `NewMessage.WithMedia.Template` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV1ServiceServiceConfigurationServiceNotification` | `conversationsV1ServiceServiceConfigurationServiceNotificationSchema` | `src/models/conversations-v1-service-service-configuration-service-notification.ts` |

