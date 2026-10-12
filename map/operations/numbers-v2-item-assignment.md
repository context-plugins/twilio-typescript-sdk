<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV2ItemAssignment — operations

Accessor: `client.numbersV2ItemAssignment` · Source: `src/resources/numbers-v2-item-assignment.ts` · 4 operations · Request types: namespace `NumbersV2ItemAssignment`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createItemAssignment

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createItemAssignment(request: NumbersV2ItemAssignment.CreateItemAssignmentRequest, options?: RequestOptions): ApiPromise<NumbersV2RegulatoryComplianceBundleItemAssignment, ApiError>`
- **Wire**: `POST /v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NumbersV2RegulatoryComplianceBundleItemAssignment`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2ItemAssignment.CreateItemAssignmentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `bundleSid` | `path` | `BundleSid` | `string` | yes |
| `objectSid` | `form` | `ObjectSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NumbersV2RegulatoryComplianceBundleItemAssignment` | `numbersV2RegulatoryComplianceBundleItemAssignmentSchema` | `src/models/numbers-v2-regulatory-compliance-bundle-item-assignment.ts` |

### deleteItemAssignment

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteItemAssignment(request: NumbersV2ItemAssignment.DeleteItemAssignmentRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2ItemAssignment.DeleteItemAssignmentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `bundleSid` | `path` | `BundleSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchItemAssignment

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchItemAssignment(request: NumbersV2ItemAssignment.FetchItemAssignmentRequest, options?: RequestOptions): ApiPromise<NumbersV2RegulatoryComplianceBundleItemAssignment, ApiError>`
- **Wire**: `GET /v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NumbersV2RegulatoryComplianceBundleItemAssignment`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2ItemAssignment.FetchItemAssignmentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `bundleSid` | `path` | `BundleSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NumbersV2RegulatoryComplianceBundleItemAssignment` | `numbersV2RegulatoryComplianceBundleItemAssignmentSchema` | `src/models/numbers-v2-regulatory-compliance-bundle-item-assignment.ts` |

### listItemAssignment

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listItemAssignment(request: NumbersV2ItemAssignment.ListItemAssignmentRequest, options?: RequestOptions): ApiPromise<ListItemAssignmentResponse, ApiError>`
- **Wire**: `GET /v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListItemAssignmentResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2ItemAssignment.ListItemAssignmentRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `bundleSid` | `path` | `BundleSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListItemAssignmentResponse` | `listItemAssignmentResponseSchema` | `src/models/list-item-assignment-response.ts` |

