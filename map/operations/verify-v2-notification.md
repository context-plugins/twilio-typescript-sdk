<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2Notification — operations

Accessor: `client.verifyV2Notification` · Source: `src/resources/verify-v2-notification.ts` · 1 operation · Request types: namespace `VerifyV2Notification`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createNotification

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createNotification(request: VerifyV2Notification.CreateNotificationRequest, options?: RequestOptions): ApiPromise<VerifyV2ServiceEntityChallengeNotification, ResponseError>`
- **Wire**: `POST /v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{ChallengeSid}/Notifications`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `VerifyV2ServiceEntityChallengeNotification`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2Notification.CreateNotificationRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `identity` | `path` | `Identity` | `string` | yes |
| `challengeSid` | `path` | `ChallengeSid` | `string` | yes |
| `ttl` | `form` | `Ttl` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerifyV2ServiceEntityChallengeNotification` | `verifyV2ServiceEntityChallengeNotificationSchema` | `src/models/verify-v2-service-entity-challenge-notification.ts` |

