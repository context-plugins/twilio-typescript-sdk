<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1Assessments — operations

Accessor: `client.flexV1Assessments` · Source: `src/resources/flex-v1-assessments.ts` · 3 operations · Request types: namespace `FlexV1Assessments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createInsightsAssessments

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createInsightsAssessments(request: FlexV1Assessments.CreateInsightsAssessmentsRequest, options?: RequestOptions): ApiPromise<FlexV1InsightsAssessments, ResponseError>`
- **Wire**: `POST /v1/Insights/QualityManagement/Assessments`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `FlexV1InsightsAssessments`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1Assessments.CreateInsightsAssessmentsRequest` (11):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | no |
| `categorySid` | `form` | `CategorySid` | `string` | yes |
| `categoryName` | `form` | `CategoryName` | `string` | yes |
| `segmentId` | `form` | `SegmentId` | `string` | yes |
| `agentId` | `form` | `AgentId` | `string` | yes |
| `offset` | `form` | `Offset` | `number` | yes |
| `metricId` | `form` | `MetricId` | `string` | yes |
| `metricName` | `form` | `MetricName` | `string` | yes |
| `answerText` | `form` | `AnswerText` | `string` | yes |
| `answerId` | `form` | `AnswerId` | `string` | yes |
| `questionnaireSid` | `form` | `QuestionnaireSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1InsightsAssessments` | `flexV1InsightsAssessmentsSchema` | `src/models/flex-v1-insights-assessments.ts` |

### listInsightsAssessments

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listInsightsAssessments(request: FlexV1Assessments.ListInsightsAssessmentsRequest, options?: RequestOptions): ApiPromise<ListInsightsAssessmentsResponse, ResponseError>`
- **Wire**: `GET /v1/Insights/QualityManagement/Assessments`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListInsightsAssessmentsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1Assessments.ListInsightsAssessmentsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `segmentId` | `query` | `SegmentId` | `string` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |
| `authorization` | `header` | `Authorization` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListInsightsAssessmentsResponse` | `listInsightsAssessmentsResponseSchema` | `src/models/list-insights-assessments-response.ts` |

### updateInsightsAssessments

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateInsightsAssessments(request: FlexV1Assessments.UpdateInsightsAssessmentsRequest, options?: RequestOptions): ApiPromise<FlexV1InsightsAssessments, ResponseError>`
- **Wire**: `POST /v1/Insights/QualityManagement/Assessments/{AssessmentSid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `FlexV1InsightsAssessments`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1Assessments.UpdateInsightsAssessmentsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `assessmentSid` | `path` | `AssessmentSid` | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | no |
| `offset` | `form` | `Offset` | `number` | yes |
| `answerText` | `form` | `AnswerText` | `string` | yes |
| `answerId` | `form` | `AnswerId` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1InsightsAssessments` | `flexV1InsightsAssessmentsSchema` | `src/models/flex-v1-insights-assessments.ts` |

