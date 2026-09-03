<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV2Bundle — operations

Accessor: `client.numbersV2Bundle` · Source: `src/resources/numbers-v2-bundle.ts` · 5 operations · Request types: namespace `NumbersV2Bundle`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createBundle

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createBundle(request: NumbersV2Bundle.CreateBundleRequest, options?: RequestOptions): ApiPromise<NumbersV2RegulatoryComplianceBundle, ResponseError>`
- **Wire**: `POST /v2/RegulatoryCompliance/Bundles`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `NumbersV2RegulatoryComplianceBundle`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2Bundle.CreateBundleRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `friendlyName` | `form` | `FriendlyName` | `string` | yes |
| `email` | `form` | `Email` | `string` | yes |
| `statusCallback` | `form` | `StatusCallback` | `string` | no |
| `regulationSid` | `form` | `RegulationSid` | `string` | no |
| `isoCountry` | `form` | `IsoCountry` | `string` | no |
| `endUserType` | `form` | `EndUserType` | `BundleEnumEndUserType` | no |
| `numberType` | `form` | `NumberType` | `string` | no |
| `isTest` | `form` | `IsTest` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BundleEnumEndUserType` | `bundleEnumEndUserTypeSchema` | `src/models/bundle-enum-end-user-type.ts` |
| `NumbersV2RegulatoryComplianceBundle` | `numbersV2RegulatoryComplianceBundleSchema` | `src/models/numbers-v2-regulatory-compliance-bundle.ts` |

### deleteBundle

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteBundle(request: NumbersV2Bundle.DeleteBundleRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v2/RegulatoryCompliance/Bundles/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2Bundle.DeleteBundleRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchBundle

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchBundle(request: NumbersV2Bundle.FetchBundleRequest, options?: RequestOptions): ApiPromise<NumbersV2RegulatoryComplianceBundle, ResponseError>`
- **Wire**: `GET /v2/RegulatoryCompliance/Bundles/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NumbersV2RegulatoryComplianceBundle`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2Bundle.FetchBundleRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NumbersV2RegulatoryComplianceBundle` | `numbersV2RegulatoryComplianceBundleSchema` | `src/models/numbers-v2-regulatory-compliance-bundle.ts` |

### listBundle

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listBundle(request: NumbersV2Bundle.ListBundleRequest, options?: RequestOptions): ApiPromise<ListBundleResponse, ResponseError>`
- **Wire**: `GET /v2/RegulatoryCompliance/Bundles`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListBundleResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2Bundle.ListBundleRequest` (16):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `status` | `query` | `Status` | `BundleEnumStatus` | no |
| `bundleSids` | `query` | `BundleSids` | `string` | no |
| `friendlyName` | `query` | `FriendlyName` | `string` | no |
| `regulationSid` | `query` | `RegulationSid` | `string` | no |
| `isoCountry` | `query` | `IsoCountry` | `string` | no |
| `numberType` | `query` | `NumberType` | `string` | no |
| `endUserType` | `query` | `EndUserType` | `BundleEnumEndUserType` | no |
| `hasValidUntilDate` | `query` | `HasValidUntilDate` | `boolean` | no |
| `sortBy` | `query` | `SortBy` | `BundleEnumSortBy` | no |
| `sortDirection` | `query` | `SortDirection` | `BundleEnumSortDirection` | no |
| `validUntilDate` | `query` | `ValidUntilDate` | `Date` (date-time) | no |
| `validUntilDateQuery` | `query` | `ValidUntilDate<` | `Date` (date-time) | no |
| `validUntilDateQueryQuery` | `query` | `ValidUntilDate>` | `Date` (date-time) | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BundleEnumStatus` | `bundleEnumStatusSchema` | `src/models/bundle-enum-status.ts` |
| `BundleEnumEndUserType` | `bundleEnumEndUserTypeSchema` | `src/models/bundle-enum-end-user-type.ts` |
| `BundleEnumSortBy` | `bundleEnumSortBySchema` | `src/models/bundle-enum-sort-by.ts` |
| `BundleEnumSortDirection` | `bundleEnumSortDirectionSchema` | `src/models/bundle-enum-sort-direction.ts` |
| `ListBundleResponse` | `listBundleResponseSchema` | `src/models/list-bundle-response.ts` |

### updateBundle

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateBundle(request: NumbersV2Bundle.UpdateBundleRequest, options?: RequestOptions): ApiPromise<NumbersV2RegulatoryComplianceBundle, ResponseError>`
- **Wire**: `POST /v2/RegulatoryCompliance/Bundles/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `NumbersV2RegulatoryComplianceBundle`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2Bundle.UpdateBundleRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `status` | `form` | `Status` | `BundleEnumStatus` | no |
| `statusCallback` | `form` | `StatusCallback` | `string` | no |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `email` | `form` | `Email` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BundleEnumStatus` | `bundleEnumStatusSchema` | `src/models/bundle-enum-status.ts` |
| `NumbersV2RegulatoryComplianceBundle` | `numbersV2RegulatoryComplianceBundleSchema` | `src/models/numbers-v2-regulatory-compliance-bundle.ts` |

