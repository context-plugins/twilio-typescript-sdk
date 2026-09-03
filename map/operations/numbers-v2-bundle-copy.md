<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV2BundleCopy — operations

Accessor: `client.numbersV2BundleCopy` · Source: `src/resources/numbers-v2-bundle-copy.ts` · 2 operations · Request types: namespace `NumbersV2BundleCopy`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createBundleCopy

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createBundleCopy(request: NumbersV2BundleCopy.CreateBundleCopyRequest, options?: RequestOptions): ApiPromise<NumbersV2RegulatoryComplianceBundleBundleCopy, ResponseError>`
- **Wire**: `POST /v2/RegulatoryCompliance/Bundles/{BundleSid}/Copies`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `NumbersV2RegulatoryComplianceBundleBundleCopy`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2BundleCopy.CreateBundleCopyRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `bundleSid` | `path` | `BundleSid` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `NumbersV2RegulatoryComplianceBundleBundleCopy` | `numbersV2RegulatoryComplianceBundleBundleCopySchema` | `src/models/numbers-v2-regulatory-compliance-bundle-bundle-copy.ts` |

### listBundleCopy

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listBundleCopy(request: NumbersV2BundleCopy.ListBundleCopyRequest, options?: RequestOptions): ApiPromise<ListBundleCopyResponse, ResponseError>`
- **Wire**: `GET /v2/RegulatoryCompliance/Bundles/{BundleSid}/Copies`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListBundleCopyResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2BundleCopy.ListBundleCopyRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `bundleSid` | `path` | `BundleSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListBundleCopyResponse` | `listBundleCopyResponseSchema` | `src/models/list-bundle-copy-response.ts` |

