<!-- Generated file — do not edit; regenerated with the SDK. -->

# TrusthubV1CustomerProfilesChannelEndpointAssignment — operations

Accessor: `client.trusthubV1CustomerProfilesChannelEndpointAssignment` · Source: `src/resources/trusthub-v1-customer-profiles-channel-endpoint-assignment.ts` · 4 operations · Request types: namespace `TrusthubV1CustomerProfilesChannelEndpointAssignment`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createCustomerProfileChannelEndpointAssignment

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createCustomerProfileChannelEndpointAssignment(request: TrusthubV1CustomerProfilesChannelEndpointAssignment.CreateCustomerProfileChannelEndpointAssignmentRequest, options?: RequestOptions): ApiPromise<TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment, ResponseError>`
- **Wire**: `POST /v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1CustomerProfilesChannelEndpointAssignment.CreateCustomerProfileChannelEndpointAssignmentRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerProfileSid` | `path` | `CustomerProfileSid` | `string` | yes |
| `channelEndpointType` | `form` | `ChannelEndpointType` | `string` | yes |
| `channelEndpointSid` | `form` | `ChannelEndpointSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment` | `trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignmentSchema` | `src/models/trusthub-v1-customer-profile-customer-profile-channel-endpoint-assignment.ts` |

### deleteCustomerProfileChannelEndpointAssignment

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteCustomerProfileChannelEndpointAssignment(request: TrusthubV1CustomerProfilesChannelEndpointAssignment.DeleteCustomerProfileChannelEndpointAssignmentRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1CustomerProfilesChannelEndpointAssignment.DeleteCustomerProfileChannelEndpointAssignmentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerProfileSid` | `path` | `CustomerProfileSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchCustomerProfileChannelEndpointAssignment

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchCustomerProfileChannelEndpointAssignment(request: TrusthubV1CustomerProfilesChannelEndpointAssignment.FetchCustomerProfileChannelEndpointAssignmentRequest, options?: RequestOptions): ApiPromise<TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment, ResponseError>`
- **Wire**: `GET /v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1CustomerProfilesChannelEndpointAssignment.FetchCustomerProfileChannelEndpointAssignmentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerProfileSid` | `path` | `CustomerProfileSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment` | `trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignmentSchema` | `src/models/trusthub-v1-customer-profile-customer-profile-channel-endpoint-assignment.ts` |

### listCustomerProfileChannelEndpointAssignment

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listCustomerProfileChannelEndpointAssignment(request: TrusthubV1CustomerProfilesChannelEndpointAssignment.ListCustomerProfileChannelEndpointAssignmentRequest, options?: RequestOptions): ApiPromise<ListCustomerProfileChannelEndpointAssignmentResponse, ResponseError>`
- **Wire**: `GET /v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListCustomerProfileChannelEndpointAssignmentResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1CustomerProfilesChannelEndpointAssignment.ListCustomerProfileChannelEndpointAssignmentRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerProfileSid` | `path` | `CustomerProfileSid` | `string` | yes |
| `channelEndpointSid` | `query` | `ChannelEndpointSid` | `string` | no |
| `channelEndpointSids` | `query` | `ChannelEndpointSids` | `string` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListCustomerProfileChannelEndpointAssignmentResponse` | `listCustomerProfileChannelEndpointAssignmentResponseSchema` | `src/models/list-customer-profile-channel-endpoint-assignment-response.ts` |

