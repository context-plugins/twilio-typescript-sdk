<!-- Generated file — do not edit; regenerated with the SDK. -->

# Contentv1ContentApi — operations

Accessor: `client.contentv1ContentApi` · Source: `src/resources/contentv1-content-api.ts` · 5 operations · Request types: namespace `Contentv1ContentApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createContent

- **Server**: `default2` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createContent(request: Contentv1ContentApi.CreateContentRequest, options?: RequestOptions): ApiPromise<ContentV1Content, ResponseError>`
- **Wire**: `POST /v1/Content`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field
- **Returns**: `ContentV1Content`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Contentv1ContentApi.CreateContentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ContentCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentCreateRequest` | `contentCreateRequestSchema` | `src/models/content-create-request.ts` |
| `ContentV1Content` | `contentV1ContentSchema` | `src/models/content-v1-content.ts` |

### deleteContent

- **Server**: `default2` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteContent(request: Contentv1ContentApi.DeleteContentRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Content/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Contentv1ContentApi.DeleteContentRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchContent

- **Server**: `default2` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchContent(request: Contentv1ContentApi.FetchContentRequest, options?: RequestOptions): ApiPromise<ContentV1Content, ResponseError>`
- **Wire**: `GET /v1/Content/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ContentV1Content`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Contentv1ContentApi.FetchContentRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentV1Content` | `contentV1ContentSchema` | `src/models/content-v1-content.ts` |

### listContent

- **Server**: `default2` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listContent(request: Contentv1ContentApi.ListContentRequest, options?: RequestOptions): ApiPromise<ListContentResponse, ResponseError>`
- **Wire**: `GET /v1/Content`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListContentResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Contentv1ContentApi.ListContentRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListContentResponse` | `listContentResponseSchema` | `src/models/list-content-response.ts` |

### updateContent

- **Server**: `default2` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateContent(request: Contentv1ContentApi.UpdateContentRequest, options?: RequestOptions): ApiPromise<ContentV1Content, ResponseError>`
- **Wire**: `PUT /v1/Content/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field
- **Returns**: `ContentV1Content`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Contentv1ContentApi.UpdateContentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `body` | `body` | — | `ContentUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentUpdateRequest` | `contentUpdateRequestSchema` | `src/models/content-update-request.ts` |
| `ContentV1Content` | `contentV1ContentSchema` | `src/models/content-v1-content.ts` |

