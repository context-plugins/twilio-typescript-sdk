<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV2ReplaceItems — operations

Accessor: `client.numbersV2ReplaceItems` · Source: `src/resources/numbers-v2-replace-items.ts` · 1 operation · Request types: namespace `NumbersV2ReplaceItems`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createReplaceItems

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createReplaceItems(request: NumbersV2ReplaceItems.CreateReplaceItemsRequest, options?: RequestOptions): ApiPromise<NumbersV2RegulatoryComplianceBundleReplaceItems, ApiError>`
- **Wire**: `POST /v2/RegulatoryCompliance/Bundles/{BundleSid}/ReplaceItems`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NumbersV2RegulatoryComplianceBundleReplaceItems`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2ReplaceItems.CreateReplaceItemsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `bundleSid` | `path` | `BundleSid` | `string` | yes |
| `fromBundleSid` | `form` | `FromBundleSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NumbersV2RegulatoryComplianceBundleReplaceItems` | `numbersV2RegulatoryComplianceBundleReplaceItemsSchema` | `src/models/numbers-v2-regulatory-compliance-bundle-replace-items.ts` |

