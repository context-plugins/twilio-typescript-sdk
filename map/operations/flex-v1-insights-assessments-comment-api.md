<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1InsightsAssessmentsCommentApi — operations

Accessor: `client.flexV1InsightsAssessmentsCommentApi` · Source: `src/resources/flex-v1-insights-assessments-comment-api.ts` · 2 operations · Request types: namespace `FlexV1InsightsAssessmentsCommentApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createInsightsAssessmentsComment

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createInsightsAssessmentsComment(request: FlexV1InsightsAssessmentsCommentApi.CreateInsightsAssessmentsCommentRequest, options?: RequestOptions): ApiPromise<FlexV1InsightsAssessmentsComment, ApiError>`
- **Wire**: `POST /v1/Insights/QualityManagement/Assessments/Comments`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FlexV1InsightsAssessmentsComment`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1InsightsAssessmentsCommentApi.CreateInsightsAssessmentsCommentRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | no |
| `categoryId` | `form` | `CategoryId` | `string` | yes |
| `categoryName` | `form` | `CategoryName` | `string` | yes |
| `comment` | `form` | `Comment` | `string` | yes |
| `segmentId` | `form` | `SegmentId` | `string` | yes |
| `agentId` | `form` | `AgentId` | `string` | yes |
| `offset` | `form` | `Offset` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1InsightsAssessmentsComment` | `flexV1InsightsAssessmentsCommentSchema` | `src/models/flex-v1-insights-assessments-comment.ts` |

### listInsightsAssessmentsComment

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listInsightsAssessmentsComment(request: FlexV1InsightsAssessmentsCommentApi.ListInsightsAssessmentsCommentRequest, options?: RequestOptions): ApiPromise<ListInsightsAssessmentsCommentResponse, ApiError>`
- **Wire**: `GET /v1/Insights/QualityManagement/Assessments/Comments`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListInsightsAssessmentsCommentResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1InsightsAssessmentsCommentApi.ListInsightsAssessmentsCommentRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `segmentId` | `query` | `SegmentId` | `string` | no |
| `agentId` | `query` | `AgentId` | `string` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |
| `authorization` | `header` | `Authorization` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListInsightsAssessmentsCommentResponse` | `listInsightsAssessmentsCommentResponseSchema` | `src/models/list-insights-assessments-comment-response.ts` |

