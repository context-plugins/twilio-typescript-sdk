<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV2FlexUserApi — operations

Accessor: `client.flexV2FlexUserApi` · Source: `src/resources/flex-v2-flex-user-api.ts` · 2 operations · Request types: namespace `FlexV2FlexUserApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchFlexUser

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchFlexUser(request: FlexV2FlexUserApi.FetchFlexUserRequest, options?: RequestOptions): ApiPromise<FlexV2FlexUser, ApiError>`
- **Wire**: `GET /v2/Instances/{InstanceSid}/Users/{FlexUserSid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FlexV2FlexUser`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV2FlexUserApi.FetchFlexUserRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `instanceSid` | `path` | `InstanceSid` | `string` | yes |
| `flexUserSid` | `path` | `FlexUserSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV2FlexUser` | `flexV2FlexUserSchema` | `src/models/flex-v2-flex-user.ts` |

### updateFlexUser

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateFlexUser(request: FlexV2FlexUserApi.UpdateFlexUserRequest, options?: RequestOptions): ApiPromise<FlexV2FlexUser, ApiError>`
- **Wire**: `POST /v2/Instances/{InstanceSid}/Users/{FlexUserSid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FlexV2FlexUser`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV2FlexUserApi.UpdateFlexUserRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `instanceSid` | `path` | `InstanceSid` | `string` | yes |
| `flexUserSid` | `path` | `FlexUserSid` | `string` | yes |
| `email` | `form` | `Email` | `string` | no |
| `userSid` | `form` | `UserSid` | `string` | no |
| `locale` | `form` | `Locale` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV2FlexUser` | `flexV2FlexUserSchema` | `src/models/flex-v2-flex-user.ts` |

