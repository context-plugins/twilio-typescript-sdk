<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1InsightsQuestionnairesCategoryApi — operations

Accessor: `client.flexV1InsightsQuestionnairesCategoryApi` · Source: `src/resources/flex-v1-insights-questionnaires-category-api.ts` · 4 operations · Request types: namespace `FlexV1InsightsQuestionnairesCategoryApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createInsightsQuestionnairesCategory

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createInsightsQuestionnairesCategory(request: FlexV1InsightsQuestionnairesCategoryApi.CreateInsightsQuestionnairesCategoryRequest, options?: RequestOptions): ApiPromise<FlexV1InsightsQuestionnairesCategory, ResponseError>`
- **Wire**: `POST /v1/Insights/QualityManagement/Categories`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `FlexV1InsightsQuestionnairesCategory`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1InsightsQuestionnairesCategoryApi.CreateInsightsQuestionnairesCategoryRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | no |
| `name` | `form` | `Name` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1InsightsQuestionnairesCategory` | `flexV1InsightsQuestionnairesCategorySchema` | `src/models/flex-v1-insights-questionnaires-category.ts` |

### deleteInsightsQuestionnairesCategory

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteInsightsQuestionnairesCategory(request: FlexV1InsightsQuestionnairesCategoryApi.DeleteInsightsQuestionnairesCategoryRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Insights/QualityManagement/Categories/{CategorySid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1InsightsQuestionnairesCategoryApi.DeleteInsightsQuestionnairesCategoryRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `categorySid` | `path` | `CategorySid` | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | no |

### listInsightsQuestionnairesCategory

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listInsightsQuestionnairesCategory(request: FlexV1InsightsQuestionnairesCategoryApi.ListInsightsQuestionnairesCategoryRequest, options?: RequestOptions): ApiPromise<ListInsightsQuestionnairesCategoryResponse, ResponseError>`
- **Wire**: `GET /v1/Insights/QualityManagement/Categories`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListInsightsQuestionnairesCategoryResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1InsightsQuestionnairesCategoryApi.ListInsightsQuestionnairesCategoryRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |
| `authorization` | `header` | `Authorization` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListInsightsQuestionnairesCategoryResponse` | `listInsightsQuestionnairesCategoryResponseSchema` | `src/models/list-insights-questionnaires-category-response.ts` |

### updateInsightsQuestionnairesCategory

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateInsightsQuestionnairesCategory(request: FlexV1InsightsQuestionnairesCategoryApi.UpdateInsightsQuestionnairesCategoryRequest, options?: RequestOptions): ApiPromise<FlexV1InsightsQuestionnairesCategory, ResponseError>`
- **Wire**: `POST /v1/Insights/QualityManagement/Categories/{CategorySid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `FlexV1InsightsQuestionnairesCategory`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1InsightsQuestionnairesCategoryApi.UpdateInsightsQuestionnairesCategoryRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `categorySid` | `path` | `CategorySid` | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | no |
| `name` | `form` | `Name` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1InsightsQuestionnairesCategory` | `flexV1InsightsQuestionnairesCategorySchema` | `src/models/flex-v1-insights-questionnaires-category.ts` |

