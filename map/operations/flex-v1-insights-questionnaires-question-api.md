<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1InsightsQuestionnairesQuestionApi — operations

Accessor: `client.flexV1InsightsQuestionnairesQuestionApi` · Source: `src/resources/flex-v1-insights-questionnaires-question-api.ts` · 4 operations · Request types: namespace `FlexV1InsightsQuestionnairesQuestionApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createInsightsQuestionnairesQuestion

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createInsightsQuestionnairesQuestion(request: FlexV1InsightsQuestionnairesQuestionApi.CreateInsightsQuestionnairesQuestionRequest, options?: RequestOptions): ApiPromise<FlexV1InsightsQuestionnairesQuestion, ResponseError>`
- **Wire**: `POST /v1/Insights/QualityManagement/Questions`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `FlexV1InsightsQuestionnairesQuestion`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1InsightsQuestionnairesQuestionApi.CreateInsightsQuestionnairesQuestionRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | no |
| `categorySid` | `form` | `CategorySid` | `string` | yes |
| `question` | `form` | `Question` | `string` | yes |
| `answerSetId` | `form` | `AnswerSetId` | `string` | yes |
| `allowNa` | `form` | `AllowNa` | `boolean` | yes |
| `description` | `form` | `Description` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1InsightsQuestionnairesQuestion` | `flexV1InsightsQuestionnairesQuestionSchema` | `src/models/flex-v1-insights-questionnaires-question.ts` |

### deleteInsightsQuestionnairesQuestion

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteInsightsQuestionnairesQuestion(request: FlexV1InsightsQuestionnairesQuestionApi.DeleteInsightsQuestionnairesQuestionRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Insights/QualityManagement/Questions/{QuestionSid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1InsightsQuestionnairesQuestionApi.DeleteInsightsQuestionnairesQuestionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `questionSid` | `path` | `QuestionSid` | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | no |

### listInsightsQuestionnairesQuestion

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listInsightsQuestionnairesQuestion(request: FlexV1InsightsQuestionnairesQuestionApi.ListInsightsQuestionnairesQuestionRequest, options?: RequestOptions): ApiPromise<ListInsightsQuestionnairesQuestionResponse, ResponseError>`
- **Wire**: `GET /v1/Insights/QualityManagement/Questions`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListInsightsQuestionnairesQuestionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1InsightsQuestionnairesQuestionApi.ListInsightsQuestionnairesQuestionRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `categorySid` | `query` | `CategorySid` | `string[]` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |
| `authorization` | `header` | `Authorization` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListInsightsQuestionnairesQuestionResponse` | `listInsightsQuestionnairesQuestionResponseSchema` | `src/models/list-insights-questionnaires-question-response.ts` |

### updateInsightsQuestionnairesQuestion

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateInsightsQuestionnairesQuestion(request: FlexV1InsightsQuestionnairesQuestionApi.UpdateInsightsQuestionnairesQuestionRequest, options?: RequestOptions): ApiPromise<FlexV1InsightsQuestionnairesQuestion, ResponseError>`
- **Wire**: `POST /v1/Insights/QualityManagement/Questions/{QuestionSid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `FlexV1InsightsQuestionnairesQuestion`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1InsightsQuestionnairesQuestionApi.UpdateInsightsQuestionnairesQuestionRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `questionSid` | `path` | `QuestionSid` | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | no |
| `allowNa` | `form` | `AllowNa` | `boolean` | yes |
| `categorySid` | `form` | `CategorySid` | `string` | no |
| `question` | `form` | `Question` | `string` | no |
| `description` | `form` | `Description` | `string` | no |
| `answerSetId` | `form` | `AnswerSetId` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1InsightsQuestionnairesQuestion` | `flexV1InsightsQuestionnairesQuestionSchema` | `src/models/flex-v1-insights-questionnaires-question.ts` |

