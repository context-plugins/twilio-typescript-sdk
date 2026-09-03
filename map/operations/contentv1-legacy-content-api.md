<!-- Generated file — do not edit; regenerated with the SDK. -->

# Contentv1LegacyContentApi — operations

Accessor: `client.contentv1LegacyContentApi` · Source: `src/resources/contentv1-legacy-content-api.ts` · 1 operation · Request types: namespace `Contentv1LegacyContentApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### listLegacyContent

- **Server**: `default2` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listLegacyContent(request: Contentv1LegacyContentApi.ListLegacyContentRequest, options?: RequestOptions): ApiPromise<ListLegacyContentResponse, ResponseError>`
- **Wire**: `GET /v1/LegacyContent`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListLegacyContentResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Contentv1LegacyContentApi.ListLegacyContentRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListLegacyContentResponse` | `listLegacyContentResponseSchema` | `src/models/list-legacy-content-response.ts` |

