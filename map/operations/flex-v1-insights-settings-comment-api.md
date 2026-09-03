<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1InsightsSettingsCommentApi — operations

Accessor: `client.flexV1InsightsSettingsCommentApi` · Source: `src/resources/flex-v1-insights-settings-comment-api.ts` · 1 operation · Request types: namespace `FlexV1InsightsSettingsCommentApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchInsightsSettingsComment

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchInsightsSettingsComment(request: FlexV1InsightsSettingsCommentApi.FetchInsightsSettingsCommentRequest, options?: RequestOptions): ApiPromise<FlexV1InsightsSettingsComment, ResponseError>`
- **Wire**: `GET /v1/Insights/QualityManagement/Settings/CommentTags`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FlexV1InsightsSettingsComment`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1InsightsSettingsCommentApi.FetchInsightsSettingsCommentRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1InsightsSettingsComment` | `flexV1InsightsSettingsCommentSchema` | `src/models/flex-v1-insights-settings-comment.ts` |

