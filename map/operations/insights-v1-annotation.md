<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsV1Annotation — operations

Accessor: `client.insightsV1Annotation` · Source: `src/resources/insights-v1-annotation.ts` · 2 operations · Request types: namespace `InsightsV1Annotation`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchAnnotation

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchAnnotation(request: InsightsV1Annotation.FetchAnnotationRequest, options?: RequestOptions): ApiPromise<InsightsV1CallAnnotation, ResponseError>`
- **Wire**: `GET /v1/Voice/{CallSid}/Annotation`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsightsV1CallAnnotation`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `InsightsV1Annotation.FetchAnnotationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `callSid` | `path` | `CallSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightsV1CallAnnotation` | `insightsV1CallAnnotationSchema` | `src/models/insights-v1-call-annotation.ts` |

### updateAnnotation

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateAnnotation(request: InsightsV1Annotation.UpdateAnnotationRequest, options?: RequestOptions): ApiPromise<InsightsV1CallAnnotation, ResponseError>`
- **Wire**: `POST /v1/Voice/{CallSid}/Annotation`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `InsightsV1CallAnnotation`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `InsightsV1Annotation.UpdateAnnotationRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `callSid` | `path` | `CallSid` | `string` | yes |
| `answeredBy` | `form` | `AnsweredBy` | `AnnotationEnumAnsweredBy` | no |
| `connectivityIssue` | `form` | `ConnectivityIssue` | `AnnotationEnumConnectivityIssue` | no |
| `qualityIssues` | `form` | `QualityIssues` | `string` | no |
| `spam` | `form` | `Spam` | `boolean` | no |
| `callScore` | `form` | `CallScore` | `number` | no |
| `comment` | `form` | `Comment` | `string` | no |
| `incident` | `form` | `Incident` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnnotationEnumAnsweredBy` | `annotationEnumAnsweredBySchema` | `src/models/annotation-enum-answered-by.ts` |
| `AnnotationEnumConnectivityIssue` | `annotationEnumConnectivityIssueSchema` | `src/models/annotation-enum-connectivity-issue.ts` |
| `InsightsV1CallAnnotation` | `insightsV1CallAnnotationSchema` | `src/models/insights-v1-call-annotation.ts` |

