<!-- Generated file — do not edit; regenerated with the SDK. -->

# Contentv1ApprovalFetch — operations

Accessor: `client.contentv1ApprovalFetch` · Source: `src/resources/contentv1-approval-fetch.ts` · 1 operation · Request types: namespace `Contentv1ApprovalFetch`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchApprovalFetch

- **Server**: `default2` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchApprovalFetch(request: Contentv1ApprovalFetch.FetchApprovalFetchRequest, options?: RequestOptions): ApiPromise<ContentV1ContentApprovalFetch, ResponseError>`
- **Wire**: `GET /v1/Content/{Sid}/ApprovalRequests`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ContentV1ContentApprovalFetch`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Contentv1ApprovalFetch.FetchApprovalFetchRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentV1ContentApprovalFetch` | `contentV1ContentApprovalFetchSchema` | `src/models/content-v1-content-approval-fetch.ts` |

