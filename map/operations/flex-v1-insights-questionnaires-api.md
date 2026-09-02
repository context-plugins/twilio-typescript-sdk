<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1InsightsQuestionnairesApi — operations

Accessor: `client.flexV1InsightsQuestionnairesApi` · Source: `src/resources/flex-v1-insights-questionnaires-api.ts` · 5 operations · Request types: namespace `FlexV1InsightsQuestionnairesApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createInsightsQuestionnaires

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createInsightsQuestionnaires(request: FlexV1InsightsQuestionnairesApi.CreateInsightsQuestionnairesRequest, options?: RequestOptions): ApiPromise<FlexV1InsightsQuestionnaires, ResponseError>`
- **Wire**: `POST /v1/Insights/QualityManagement/Questionnaires`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `FlexV1InsightsQuestionnaires`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1InsightsQuestionnairesApi.CreateInsightsQuestionnairesRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | no |
| `name` | `form` | `Name` | `string` | yes |
| `description` | `form` | `Description` | `string` | no |
| `active` | `form` | `Active` | `boolean` | no |
| `questionSids` | `form` | `QuestionSids` | `string[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1InsightsQuestionnaires` | `flexV1InsightsQuestionnairesSchema` | `src/models/flex-v1-insights-questionnaires.ts` |

### deleteInsightsQuestionnaires

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteInsightsQuestionnaires(request: FlexV1InsightsQuestionnairesApi.DeleteInsightsQuestionnairesRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Insights/QualityManagement/Questionnaires/{QuestionnaireSid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1InsightsQuestionnairesApi.DeleteInsightsQuestionnairesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `questionnaireSid` | `path` | `QuestionnaireSid` | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | no |

### fetchInsightsQuestionnaires

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchInsightsQuestionnaires(request: FlexV1InsightsQuestionnairesApi.FetchInsightsQuestionnairesRequest, options?: RequestOptions): ApiPromise<FlexV1InsightsQuestionnaires, ResponseError>`
- **Wire**: `GET /v1/Insights/QualityManagement/Questionnaires/{QuestionnaireSid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FlexV1InsightsQuestionnaires`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1InsightsQuestionnairesApi.FetchInsightsQuestionnairesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `questionnaireSid` | `path` | `QuestionnaireSid` | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1InsightsQuestionnaires` | `flexV1InsightsQuestionnairesSchema` | `src/models/flex-v1-insights-questionnaires.ts` |

### listInsightsQuestionnaires

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listInsightsQuestionnaires(request: FlexV1InsightsQuestionnairesApi.ListInsightsQuestionnairesRequest, options?: RequestOptions): ApiPromise<ListInsightsQuestionnairesResponse, ResponseError>`
- **Wire**: `GET /v1/Insights/QualityManagement/Questionnaires`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListInsightsQuestionnairesResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1InsightsQuestionnairesApi.ListInsightsQuestionnairesRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `includeInactive` | `query` | `IncludeInactive` | `boolean` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |
| `authorization` | `header` | `Authorization` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListInsightsQuestionnairesResponse` | `listInsightsQuestionnairesResponseSchema` | `src/models/list-insights-questionnaires-response.ts` |

### updateInsightsQuestionnaires

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateInsightsQuestionnaires(request: FlexV1InsightsQuestionnairesApi.UpdateInsightsQuestionnairesRequest, options?: RequestOptions): ApiPromise<FlexV1InsightsQuestionnaires, ResponseError>`
- **Wire**: `POST /v1/Insights/QualityManagement/Questionnaires/{QuestionnaireSid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `FlexV1InsightsQuestionnaires`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1InsightsQuestionnairesApi.UpdateInsightsQuestionnairesRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `questionnaireSid` | `path` | `QuestionnaireSid` | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | no |
| `active` | `form` | `Active` | `boolean` | yes |
| `name` | `form` | `Name` | `string` | no |
| `description` | `form` | `Description` | `string` | no |
| `questionSids` | `form` | `QuestionSids` | `string[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1InsightsQuestionnaires` | `flexV1InsightsQuestionnairesSchema` | `src/models/flex-v1-insights-questionnaires.ts` |

