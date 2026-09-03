<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401AssignedAddOnExtension — operations

Accessor: `client.api20100401AssignedAddOnExtension` · Source: `src/resources/api20100401-assigned-add-on-extension.ts` · 2 operations · Request types: namespace `Api20100401AssignedAddOnExtension`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchIncomingPhoneNumberAssignedAddOnExtension

- **Signature**: `fetchIncomingPhoneNumberAssignedAddOnExtension(request: Api20100401AssignedAddOnExtension.FetchIncomingPhoneNumberAssignedAddOnExtensionRequest, options?: RequestOptions): ApiPromise<IncomingPhoneNumberAssignedAddOnExtension, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{AssignedAddOnSid}/Extensions/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IncomingPhoneNumberAssignedAddOnExtension`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401AssignedAddOnExtension.FetchIncomingPhoneNumberAssignedAddOnExtensionRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `resourceSid` | `path` | `ResourceSid` | `string` | yes |
| `assignedAddOnSid` | `path` | `AssignedAddOnSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IncomingPhoneNumberAssignedAddOnExtension` | `incomingPhoneNumberAssignedAddOnExtensionSchema` | `src/models/incoming-phone-number-assigned-add-on-extension.ts` |

### listIncomingPhoneNumberAssignedAddOnExtension

- **Signature**: `listIncomingPhoneNumberAssignedAddOnExtension(request: Api20100401AssignedAddOnExtension.ListIncomingPhoneNumberAssignedAddOnExtensionRequest, options?: RequestOptions): ApiPromise<ListIncomingPhoneNumberAssignedAddOnExtensionResponse, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{AssignedAddOnSid}/Extensions.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListIncomingPhoneNumberAssignedAddOnExtensionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401AssignedAddOnExtension.ListIncomingPhoneNumberAssignedAddOnExtensionRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `resourceSid` | `path` | `ResourceSid` | `string` | yes |
| `assignedAddOnSid` | `path` | `AssignedAddOnSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListIncomingPhoneNumberAssignedAddOnExtensionResponse` | `listIncomingPhoneNumberAssignedAddOnExtensionResponseSchema` | `src/models/list-incoming-phone-number-assigned-add-on-extension-response.ts` |

