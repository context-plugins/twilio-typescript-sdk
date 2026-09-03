<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsV1CallSummariesApi — operations

Accessor: `client.insightsV1CallSummariesApi` · Source: `src/resources/insights-v1-call-summaries-api.ts` · 1 operation · Request types: namespace `InsightsV1CallSummariesApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### listCallSummaries

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listCallSummaries(request: InsightsV1CallSummariesApi.ListCallSummariesRequest, options?: RequestOptions): ApiPromise<ListCallSummariesResponse, ResponseError>`
- **Wire**: `GET /v1/Voice/Summaries`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListCallSummariesResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `InsightsV1CallSummariesApi.ListCallSummariesRequest` (39):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `from` | `query` | `From` | `string` | no |
| `to` | `query` | `To` | `string` | no |
| `fromCarrier` | `query` | `FromCarrier` | `string` | no |
| `toCarrier` | `query` | `ToCarrier` | `string` | no |
| `fromCountryCode` | `query` | `FromCountryCode` | `string` | no |
| `toCountryCode` | `query` | `ToCountryCode` | `string` | no |
| `verifiedCaller` | `query` | `VerifiedCaller` | `boolean` | no |
| `hasTag` | `query` | `HasTag` | `boolean` | no |
| `startTime` | `query` | `StartTime` | `string` | no |
| `endTime` | `query` | `EndTime` | `string` | no |
| `callType` | `query` | `CallType` | `string` | no |
| `callState` | `query` | `CallState` | `string` | no |
| `direction` | `query` | `Direction` | `string` | no |
| `processingState` | `query` | `ProcessingState` | `CallSummariesEnumProcessingStateRequest` | no |
| `sortBy` | `query` | `SortBy` | `CallSummariesEnumSortBy` | no |
| `subaccount` | `query` | `Subaccount` | `string` | no |
| `abnormalSession` | `query` | `AbnormalSession` | `boolean` | no |
| `answeredBy` | `query` | `AnsweredBy` | `CallSummariesEnumAnsweredBy` | no |
| `answeredByAnnotation` | `query` | `AnsweredByAnnotation` | `string` | no |
| `connectivityIssueAnnotation` | `query` | `ConnectivityIssueAnnotation` | `string` | no |
| `qualityIssueAnnotation` | `query` | `QualityIssueAnnotation` | `string` | no |
| `spamAnnotation` | `query` | `SpamAnnotation` | `boolean` | no |
| `callScoreAnnotation` | `query` | `CallScoreAnnotation` | `string` | no |
| `brandedEnabled` | `query` | `BrandedEnabled` | `boolean` | no |
| `voiceIntegrityEnabled` | `query` | `VoiceIntegrityEnabled` | `boolean` | no |
| `brandedBundleSid` | `query` | `BrandedBundleSid` | `string` | no |
| `brandedLogo` | `query` | `BrandedLogo` | `boolean` | no |
| `brandedType` | `query` | `BrandedType` | `string` | no |
| `brandedUseCase` | `query` | `BrandedUseCase` | `string` | no |
| `brandedCallReason` | `query` | `BrandedCallReason` | `string` | no |
| `voiceIntegrityBundleSid` | `query` | `VoiceIntegrityBundleSid` | `string` | no |
| `voiceIntegrityUseCase` | `query` | `VoiceIntegrityUseCase` | `string` | no |
| `businessProfileIdentity` | `query` | `BusinessProfileIdentity` | `string` | no |
| `businessProfileIndustry` | `query` | `BusinessProfileIndustry` | `string` | no |
| `businessProfileBundleSid` | `query` | `BusinessProfileBundleSid` | `string` | no |
| `businessProfileType` | `query` | `BusinessProfileType` | `string` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CallSummariesEnumProcessingStateRequest` | `callSummariesEnumProcessingStateRequestSchema` | `src/models/call-summaries-enum-processing-state-request.ts` |
| `CallSummariesEnumSortBy` | `callSummariesEnumSortBySchema` | `src/models/call-summaries-enum-sort-by.ts` |
| `CallSummariesEnumAnsweredBy` | `callSummariesEnumAnsweredBySchema` | `src/models/call-summaries-enum-answered-by.ts` |
| `ListCallSummariesResponse` | `listCallSummariesResponseSchema` | `src/models/list-call-summaries-response.ts` |

