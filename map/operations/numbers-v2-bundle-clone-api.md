<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV2BundleCloneApi — operations

Accessor: `client.numbersV2BundleCloneApi` · Source: `src/resources/numbers-v2-bundle-clone-api.ts` · 1 operation · Request types: namespace `NumbersV2BundleCloneApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createBundleClone

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createBundleClone(request: NumbersV2BundleCloneApi.CreateBundleCloneRequest, options?: RequestOptions): ApiPromise<NumbersV2BundleClone, ApiError>`
- **Wire**: `POST /v2/RegulatoryCompliance/Bundles/{BundleSid}/Clones`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NumbersV2BundleClone`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2BundleCloneApi.CreateBundleCloneRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `bundleSid` | `path` | `BundleSid` | `string` | yes |
| `targetAccountSid` | `form` | `TargetAccountSid` | `string` | yes |
| `moveToDraft` | `form` | `MoveToDraft` | `boolean` | no |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `NumbersV2BundleClone` | `numbersV2BundleCloneSchema` | `src/models/numbers-v2-bundle-clone.ts` |

