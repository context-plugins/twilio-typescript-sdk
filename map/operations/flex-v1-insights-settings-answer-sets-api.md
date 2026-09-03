<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1InsightsSettingsAnswerSetsApi — operations

Accessor: `client.flexV1InsightsSettingsAnswerSetsApi` · Source: `src/resources/flex-v1-insights-settings-answer-sets-api.ts` · 1 operation · Request types: namespace `FlexV1InsightsSettingsAnswerSetsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchInsightsSettingsAnswersets

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchInsightsSettingsAnswersets(request: FlexV1InsightsSettingsAnswerSetsApi.FetchInsightsSettingsAnswersetsRequest, options?: RequestOptions): ApiPromise<FlexV1InsightsSettingsAnswersets, ResponseError>`
- **Wire**: `GET /v1/Insights/QualityManagement/Settings/AnswerSets`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FlexV1InsightsSettingsAnswersets`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1InsightsSettingsAnswerSetsApi.FetchInsightsSettingsAnswersetsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1InsightsSettingsAnswersets` | `flexV1InsightsSettingsAnswersetsSchema` | `src/models/flex-v1-insights-settings-answersets.ts` |

