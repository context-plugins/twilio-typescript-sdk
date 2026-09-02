<!-- Generated file — do not edit; regenerated with the SDK. -->

# TrusthubV1CustomerProfilesEntityAssignments — operations

Accessor: `client.trusthubV1CustomerProfilesEntityAssignments` · Source: `src/resources/trusthub-v1-customer-profiles-entity-assignments.ts` · 4 operations · Request types: namespace `TrusthubV1CustomerProfilesEntityAssignments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createCustomerProfileEntityAssignment

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createCustomerProfileEntityAssignment(request: TrusthubV1CustomerProfilesEntityAssignments.CreateCustomerProfileEntityAssignmentRequest, options?: RequestOptions): ApiPromise<TrusthubV1CustomerProfileCustomerProfileEntityAssignment, ResponseError>`
- **Wire**: `POST /v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `TrusthubV1CustomerProfileCustomerProfileEntityAssignment`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1CustomerProfilesEntityAssignments.CreateCustomerProfileEntityAssignmentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerProfileSid` | `path` | `CustomerProfileSid` | `string` | yes |
| `objectSid` | `form` | `ObjectSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TrusthubV1CustomerProfileCustomerProfileEntityAssignment` | `trusthubV1CustomerProfileCustomerProfileEntityAssignmentSchema` | `src/models/trusthub-v1-customer-profile-customer-profile-entity-assignment.ts` |

### deleteCustomerProfileEntityAssignment

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteCustomerProfileEntityAssignment(request: TrusthubV1CustomerProfilesEntityAssignments.DeleteCustomerProfileEntityAssignmentRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1CustomerProfilesEntityAssignments.DeleteCustomerProfileEntityAssignmentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerProfileSid` | `path` | `CustomerProfileSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchCustomerProfileEntityAssignment

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchCustomerProfileEntityAssignment(request: TrusthubV1CustomerProfilesEntityAssignments.FetchCustomerProfileEntityAssignmentRequest, options?: RequestOptions): ApiPromise<TrusthubV1CustomerProfileCustomerProfileEntityAssignment, ResponseError>`
- **Wire**: `GET /v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TrusthubV1CustomerProfileCustomerProfileEntityAssignment`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1CustomerProfilesEntityAssignments.FetchCustomerProfileEntityAssignmentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerProfileSid` | `path` | `CustomerProfileSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TrusthubV1CustomerProfileCustomerProfileEntityAssignment` | `trusthubV1CustomerProfileCustomerProfileEntityAssignmentSchema` | `src/models/trusthub-v1-customer-profile-customer-profile-entity-assignment.ts` |

### listCustomerProfileEntityAssignment

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listCustomerProfileEntityAssignment(request: TrusthubV1CustomerProfilesEntityAssignments.ListCustomerProfileEntityAssignmentRequest, options?: RequestOptions): ApiPromise<ListCustomerProfileEntityAssignmentResponse, ResponseError>`
- **Wire**: `GET /v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListCustomerProfileEntityAssignmentResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1CustomerProfilesEntityAssignments.ListCustomerProfileEntityAssignmentRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerProfileSid` | `path` | `CustomerProfileSid` | `string` | yes |
| `objectType` | `query` | `ObjectType` | `string` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListCustomerProfileEntityAssignmentResponse` | `listCustomerProfileEntityAssignmentResponseSchema` | `src/models/list-customer-profile-entity-assignment-response.ts` |

