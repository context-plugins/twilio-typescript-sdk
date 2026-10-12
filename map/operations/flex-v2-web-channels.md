<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV2WebChannels — operations

Accessor: `client.flexV2WebChannels` · Source: `src/resources/flex-v2-web-channels.ts` · 1 operation · Request types: namespace `FlexV2WebChannels`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createWebChannel2

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createWebChannel2(request: FlexV2WebChannels.CreateWebChannel2Request, options?: RequestOptions): ApiPromise<FlexV2WebChannel, ApiError>`
- **Wire**: `POST /v2/WebChats`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FlexV2WebChannel`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV2WebChannels.CreateWebChannel2Request` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `uiVersion` | `header` | `Ui-Version` | `string` | no |
| `addressSid` | `form` | `AddressSid` | `string` | yes |
| `chatFriendlyName` | `form` | `ChatFriendlyName` | `string` | no |
| `customerFriendlyName` | `form` | `CustomerFriendlyName` | `string` | no |
| `preEngagementData` | `form` | `PreEngagementData` | `string` | no |
| `identity` | `form` | `Identity` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV2WebChannel` | `flexV2WebChannelSchema` | `src/models/flex-v2-web-channel.ts` |

