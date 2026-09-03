<!-- Generated file — do not edit; regenerated with the SDK. -->

# Contentv1ApprovalCreate — operations

Accessor: `client.contentv1ApprovalCreate` · Source: `src/resources/contentv1-approval-create.ts` · 1 operation · Request types: namespace `Contentv1ApprovalCreate`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createApprovalCreate

- **Server**: `default2` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createApprovalCreate(request: Contentv1ApprovalCreate.CreateApprovalCreateRequest, options?: RequestOptions): ApiPromise<ContentV1ContentApprovalCreate, ResponseError>`
- **Wire**: `POST /v1/Content/{ContentSid}/ApprovalRequests/whatsapp`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field
- **Returns**: `ContentV1ContentApprovalCreate`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Contentv1ApprovalCreate.CreateApprovalCreateRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentSid` | `path` | `ContentSid` | `string` | yes |
| `body` | `body` | — | `ContentApprovalRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentApprovalRequest` | `contentApprovalRequestSchema` | `src/models/content-approval-request.ts` |
| `ContentV1ContentApprovalCreate` | `contentV1ContentApprovalCreateSchema` | `src/models/content-v1-content-approval-create.ts` |

