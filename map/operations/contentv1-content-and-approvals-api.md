<!-- Generated file — do not edit; regenerated with the SDK. -->

# Contentv1ContentAndApprovalsApi — operations

Accessor: `client.contentv1ContentAndApprovalsApi` · Source: `src/resources/contentv1-content-and-approvals-api.ts` · 1 operation · Request types: namespace `Contentv1ContentAndApprovalsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listContentAndApprovals

- **Server**: `default2` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listContentAndApprovals(request: Contentv1ContentAndApprovalsApi.ListContentAndApprovalsRequest, options?: RequestOptions): ApiPromise<ListContentAndApprovalsResponse, ApiError>`
- **Wire**: `GET /v1/ContentAndApprovals`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListContentAndApprovalsResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Contentv1ContentAndApprovalsApi.ListContentAndApprovalsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListContentAndApprovalsResponse` | `listContentAndApprovalsResponseSchema` | `src/models/list-content-and-approvals-response.ts` |

