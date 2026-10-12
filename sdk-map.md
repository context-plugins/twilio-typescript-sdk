<!-- Generated file — do not edit; regenerated with the SDK. -->

# SDK map — Twilio SDK (TypeScript)

> A generated table of contents for this SDK. Consult this map and its sub-pages to learn signatures, request-field placement, error types and server wiring **by lookup**. Model shapes and enum values are *not* duplicated here — the map names the file declaring each type and the schema value exported beside it; read the shape there. The compiler is the backstop: a wrong name fails to build.

|  |  |
| --- | --- |
| SDK display name | Twilio SDK |
| Package | `twilio-sdk` |
| Package version | `1.0.0` |
| API spec version | `1.0.0` |
| Import specifier | `twilio-sdk` — the package root is the **only** entry. Deep imports (`twilio-sdk/models/...`) do not resolve; the `exports` map exposes `.` and `./package.json` and nothing else |
| Module format | dual ESM + CommonJS, as folder dialects (`dist/esm`, `dist/commonjs`), each with its own `package.json` marker. No `.mjs`, `.cjs`, `.d.mts` or `.d.cts` files exist |
| Node floor | `>=20.3` (`engines.node`) |
| TypeScript floor | a resolver that reads `exports` (4.7+), plus whatever the pinned `zod` requires — `zod@4` needs 5.5 or later. The public `.d.ts` chain reaches `zod/v4-mini`, so this is a real constraint rather than a build-tool version |
| Runtime dependency | `zod` (`^4.1.0`), imported as `zod/v4-mini`. The only runtime dependency |
| Generator | APIMatic |

Staleness check: the API spec version above changes when the SDK is regenerated from a new spec. If a lookup here fails to compile, trust the compiler and re-read the source file named in the row.

All `Source` paths on this map and its sub-pages are relative to the **SDK root** — the directory holding this file and `package.json` — never to the page that carries them: a page two directories deep writes exactly what a page at the root would. The package ships its `src/` tree, so the same paths resolve inside `node_modules/twilio-sdk/` too. An import specifier ending `.js` inside that source is the NodeNext spelling of the sibling `.ts` file.

---

## Getting a client

```ts
import { TwilioSdkClient } from "twilio-sdk";

const client = new TwilioSdkClient({
  accountSidAuthToken: { username: "YOUR_USERNAME", password: "YOUR_PASSWORD" },
});
```

The only constructor is `new TwilioSdkClient(options: ClientOptions = {})`, so `new TwilioSdkClient()` is the minimum. Resources are memoized lazy getters on the client — `client.api20100401Account`, `client.api20100401AddOnResult`, `client.api20100401Address`, `client.api20100401AllTime`, `client.api20100401Application`, `client.api20100401AssignedAddOn`, `client.api20100401AssignedAddOnExtension`, `client.api20100401AuthCallsCredentialListMapping`, `client.api20100401AuthCallsIpAccessControlListMapping`, `client.api20100401AuthRegistrationsCredentialListMapping`, `client.api20100401AuthorizedConnectApp`, `client.api20100401AvailablePhoneNumberCountry`, `client.api20100401Balance`, `client.api20100401Call`, `client.api20100401CallNotification`, `client.api20100401CallRecording`, `client.api20100401CallTranscription`, `client.api20100401Conference`, `client.api20100401ConferenceRecording`, `client.api20100401ConnectApp`, `client.api20100401Credential`, `client.api20100401CredentialList`, `client.api20100401CredentialListMapping`, `client.api20100401Daily`, `client.api20100401Data`, `client.api20100401DependentPhoneNumber`, `client.api20100401Domain`, `client.api20100401Event`, `client.api20100401Feedback`, `client.api20100401IncomingPhoneNumber`, `client.api20100401IncomingPhoneNumberLocal`, `client.api20100401IncomingPhoneNumberMobile`, `client.api20100401IncomingPhoneNumberTollFree`, `client.api20100401IpAccessControlList`, `client.api20100401IpAccessControlListMapping`, `client.api20100401Key`, `client.api20100401LastMonth`, `client.api20100401Local`, `client.api20100401MachineToMachine`, `client.api20100401Media`, `client.api20100401MediaInstance`, `client.api20100401Member`, `client.api20100401Message`, `client.api20100401Mobile`, `client.api20100401Monthly`, `client.api20100401National`, `client.api20100401NewKey`, `client.api20100401NewSigningKey`, `client.api20100401Notification`, `client.api20100401OutgoingCallerId`, `client.api20100401Participant`, `client.api20100401Payload`, `client.api20100401Payment`, `client.api20100401Queue`, `client.api20100401Record`, `client.api20100401Recording`, `client.api20100401RecordingTranscription`, `client.api20100401SharedCost`, `client.api20100401ShortCode`, `client.api20100401SigningKey`, `client.api20100401SipIpAddress`, `client.api20100401Siprec`, `client.api20100401Stream`, `client.api20100401ThisMonth`, `client.api20100401Today`, `client.api20100401Token`, `client.api20100401TollFree`, `client.api20100401Transcription`, `client.api20100401Trigger`, `client.api20100401UserDefinedMessage`, `client.api20100401UserDefinedMessageSubscription`, `client.api20100401ValidationRequest`, `client.api20100401Voip`, `client.api20100401Yearly`, `client.api20100401Yesterday`, `client.messagingV1AlphaSender`, `client.messagingV1BrandRegistration`, `client.messagingV1BrandRegistrationOtp`, `client.messagingV1BrandVetting`, `client.messagingV1ChannelSender`, `client.messagingV1Deactivations`, `client.messagingV1DestinationAlphaSender`, `client.messagingV1DomainCerts`, `client.messagingV1DomainConfigApi`, `client.messagingV1DomainConfigMessagingServiceApi`, `client.messagingV1ExternalCampaignApi`, `client.messagingV1LinkshorteningMessagingServiceApi`, `client.messagingV1LinkshorteningMessagingServiceDomainAssociationApi`, `client.messagingV1PhoneNumber`, `client.messagingV1RequestManagedCertApi`, `client.messagingV1ServiceApi`, `client.messagingV1ShortCode`, `client.messagingV1TollfreeVerificationApi`, `client.messagingV1UsAppToPerson`, `client.messagingV1UsAppToPersonUsecase`, `client.messagingV1UsecaseApi`, `client.messagingV1DomainValidateDns`, `client.messagingV2ChannelsSender`, `client.messagingV2TypingIndicator`, `client.messagingV2DomainCerts`, `client.messagingV3TypingIndicator`, `client.contentv1ApprovalCreate`, `client.contentv1ApprovalFetch`, `client.contentv1ContentApi`, `client.contentv1ContentAndApprovalsApi`, `client.contentv1LegacyContentApi`, `client.contentV2Content`, `client.contentV2ContentAndApprovals`, `client.verifyV2AccessToken`, `client.verifyV2Bucket`, `client.verifyV2Challenge`, `client.verifyV2Entity`, `client.verifyV2Factor`, `client.verifyV2FormApi`, `client.verifyV2MessagingConfiguration`, `client.verifyV2NewFactor`, `client.verifyV2Notification`, `client.verifyV2RateLimit`, `client.verifyV2SafelistApi`, `client.verifyV2ServiceApi`, `client.verifyV2Template`, `client.verifyV2Verification`, `client.verifyV2VerificationAttemptApi`, `client.verifyV2VerificationAttemptsSummaryApi`, `client.verifyV2VerificationCheck`, `client.verifyV2Webhook`, `client.verifyV2NewChallenge`, `client.lookupsV1PhoneNumberApi`, `client.lookupsV2PhoneNumber`, `client.numbersV1BulkEligibilityApi`, `client.numbersV1EligibilityApi`, `client.numbersV1PortingPortInApi`, `client.numbersV1PortingPortInPhoneNumberApi`, `client.numbersV1PortingPortabilityApi`, `client.numbersV1PortingWebhookConfigurationApi`, `client.numbersV1PortingWebhookConfigurationDeleteApi`, `client.numbersV1PortingWebhookConfigurationFetchApi`, `client.numbersV1SigningRequestConfigurationApi`, `client.numbersV1SenderIdRegistration`, `client.numbersV1SenderIdRegistrationEmbeddedSession`, `client.numbersV2AuthorizationDocumentApi`, `client.numbersV2BulkHostedNumberOrderApi`, `client.numbersV2Bundle`, `client.numbersV2BundleCloneApi`, `client.numbersV2BundleCopy`, `client.numbersV2DependentHostedNumberOrder`, `client.numbersV2EndUser`, `client.numbersV2EndUserType`, `client.numbersV2Evaluation`, `client.numbersV2HostedNumberOrderApi`, `client.numbersV2ItemAssignment`, `client.numbersV2Regulation`, `client.numbersV2ReplaceItems`, `client.numbersV2SupportingDocument`, `client.numbersV2SupportingDocumentType`, `client.v2ShortCodeApplications`, `client.numbersV3HostedNumbersHostedNumberOrderApi`, `client.videoV1Anonymize`, `client.videoV1CompositionApi`, `client.videoV1CompositionHookApi`, `client.videoV1CompositionSettingsApi`, `client.videoV1Participant`, `client.videoV1PublishedTrack`, `client.videoV1RecordingApi`, `client.videoV1RecordingRules`, `client.videoV1RecordingSettingsApi`, `client.videoV1RoomApi`, `client.videoV1RoomRecording`, `client.videoV1SubscribeRules`, `client.videoV1SubscribedTrack`, `client.videoV1Transcriptions`, `client.conversationsV1AddressConfiguration`, `client.conversationsV1Binding`, `client.conversationsV1ConfigurationApi`, `client.conversationsV1ConversationApi`, `client.conversationsV1ConversationWithParticipantsApi`, `client.conversationsV1CredentialApi`, `client.conversationsV1DeliveryReceipt`, `client.conversationsV1Message`, `client.conversationsV1Notification`, `client.conversationsV1Participant`, `client.conversationsV1ParticipantConversationApi`, `client.conversationsV1RoleApi`, `client.conversationsV1ServiceApi`, `client.conversationsV1UserApi`, `client.conversationsV1UserConversation`, `client.conversationsV1Webhook`, `client.conversationsV2ConfigurationApi`, `client.conversationsV2ConversationApi`, `client.conversationsV2ParticipantApi`, `client.conversationsV2CommunicationApi`, `client.conversationsV2ActionApi`, `client.conversationsV2Operation`, `client.taskrouterV1Activity`, `client.taskrouterV1Event`, `client.taskrouterV1Task`, `client.taskrouterV1TaskChannel`, `client.taskrouterV1TaskQueue`, `client.taskrouterV1TaskQueueBulkRealTimeStatistics`, `client.taskrouterV1TaskQueueCumulativeStatistics`, `client.taskrouterV1TaskQueueRealTimeStatistics`, `client.taskrouterV1TaskQueueStatistics`, `client.taskrouterV1TaskQueuesStatistics`, `client.taskrouterV1TaskReservation`, `client.taskrouterV1Worker`, `client.taskrouterV1WorkerChannel`, `client.taskrouterV1WorkerReservation`, `client.taskrouterV1WorkerStatistics`, `client.taskrouterV1WorkersCumulativeStatistics`, `client.taskrouterV1WorkersRealTimeStatistics`, `client.taskrouterV1WorkersStatistics`, `client.taskrouterV1Workflow`, `client.taskrouterV1WorkflowCumulativeStatistics`, `client.taskrouterV1WorkflowRealTimeStatistics`, `client.taskrouterV1WorkflowStatistics`, `client.taskrouterV1WorkspaceApi`, `client.taskrouterV1WorkspaceCumulativeStatistics`, `client.taskrouterV1WorkspaceRealTimeStatistics`, `client.taskrouterV1WorkspaceStatistics`, `client.trusthubV1ComplianceInquiries`, `client.trusthubV1ComplianceRegistrationInquiries`, `client.trusthubV1ComplianceTollfreeInquiries`, `client.trusthubV1CustomerProfiles`, `client.trusthubV1CustomerProfilesChannelEndpointAssignment`, `client.trusthubV1CustomerProfilesEntityAssignments`, `client.trusthubV1CustomerProfilesEvaluations`, `client.trusthubV1EndUserApi`, `client.trusthubV1EndUserType`, `client.trusthubV1PoliciesApi`, `client.trusthubV1SupportingDocumentApi`, `client.trusthubV1SupportingDocumentType`, `client.trusthubV1TrustProducts`, `client.trusthubV1TrustProductsChannelEndpointAssignment`, `client.trusthubV1TrustProductsEntityAssignments`, `client.trusthubV1TrustProductsEvaluations`, `client.proxyV1Interaction`, `client.proxyV1MessageInteraction`, `client.proxyV1Participant`, `client.proxyV1PhoneNumber`, `client.proxyV1ServiceApi`, `client.proxyV1Session`, `client.studioV1Engagement`, `client.studioV1EngagementContext`, `client.studioV1Execution`, `client.studioV1ExecutionContext`, `client.studioV1ExecutionStep`, `client.studioV1ExecutionStepContext`, `client.studioV1FlowApi`, `client.studioV1Step`, `client.studioV1StepContext`, `client.studioV2Execution`, `client.studioV2ExecutionContext`, `client.studioV2ExecutionStep`, `client.studioV2ExecutionStepContext`, `client.studioV2FlowApi`, `client.studioV2FlowRevision`, `client.studioV2FlowTestUserApi`, `client.studioV2FlowValidateApi`, `client.syncV1Document`, `client.syncV1DocumentPermission`, `client.syncV1ServiceApi`, `client.syncV1StreamMessage`, `client.syncV1SyncList`, `client.syncV1SyncListItem`, `client.syncV1SyncListPermission`, `client.syncV1SyncMap`, `client.syncV1SyncMapItem`, `client.syncV1SyncMapPermission`, `client.syncV1SyncStream`, `client.flexV1Assessments`, `client.flexV1ChannelApi`, `client.flexV1ConfigurationApi`, `client.flexV1ConfiguredPlugin`, `client.flexV1FlexFlowApi`, `client.flexV1InsightsAssessmentsCommentApi`, `client.flexV1InsightsConversationsApi`, `client.flexV1InsightsQuestionnairesApi`, `client.flexV1InsightsQuestionnairesCategoryApi`, `client.flexV1InsightsQuestionnairesQuestionApi`, `client.flexV1InsightsSegmentsApi`, `client.flexV1InsightsSessionApi`, `client.flexV1InsightsSettingsAnswerSetsApi`, `client.flexV1InsightsSettingsCommentApi`, `client.flexV1InsightsUserRolesApi`, `client.flexV1InteractionApi`, `client.flexV1InteractionChannel`, `client.flexV1InteractionChannelInvite`, `client.flexV1InteractionChannelParticipant`, `client.flexV1InteractionTransfer`, `client.flexV1PluginApi`, `client.flexV1PluginArchiveApi`, `client.flexV1PluginConfigurationApi`, `client.flexV1PluginConfigurationArchiveApi`, `client.flexV1PluginReleaseApi`, `client.flexV1PluginVersionArchiveApi`, `client.flexV1PluginVersions`, `client.flexV1ProvisioningStatusApi`, `client.flexV1WebChannelApi`, `client.flexV2FlexUserApi`, `client.flexV2WebChannels`, `client.insightsV1Annotation`, `client.insightsV1CallApi`, `client.insightsV1CallSummariesApi`, `client.insightsV1CallSummaryApi`, `client.insightsV1ConferenceApi`, `client.insightsV1ConferenceParticipant`, `client.insightsV1Event`, `client.insightsV1Metric`, `client.insightsV1Participant`, `client.insightsV1Room`, `client.insightsV1Setting`, `client.insightsV1CreateAccountReport`, `client.insightsV1GetAccountReport`, `client.insightsV1CreateInboundPhoneNumbersReport`, `client.insightsV1GetInboundPhoneNumbersReport`, `client.insightsV1CreateOutboundPhoneNumbersReport`, `client.insightsV1GetOutboundPhoneNumbersReport`, `client.twilioInsights` — and their classes are exported only for their merged namespaces and for `instanceof`; their constructors take engine internals that are not exported, so reach a resource only through its getter. 11 operations are methods on the client itself.

All `ClientOptions` fields (source: `src/client-options.ts`; every field is `readonly`):

| Field | Type | Default |
| --- | --- | --- |
| `serverOptions` | the server's base-URL and template-variable overrides | `{}` — the resolver merges the declared defaults in |
| `retry` | `RetryOptions` | the `RetryOptions` defaults below |
| `logging` | `LoggingOptions` | off — the `LoggingOptions` defaults below |
| `fetch` | `FetchLike \| undefined` | the global `fetch`, resolved by the transport |
| `accountSidAuthToken` | `BasicAuthCredentials \| undefined` | unset |

The 1 auth field is optional, and an unset one is not an error — the operation that wanted it simply sends no credential. What each one puts on the wire, and which operations require it, are under Servers & auth.

When no `fetch` is reachable the **constructor** throws `ConfigurationError`, not the first call.

`RetryOptions` fields (source: `src/core/retry.ts`; exported from `twilio-sdk` as a type). Every field is optional, so pass only the fields you change — each one left out takes its default:

| Field | Type | Default |
| --- | --- | --- |
| `timeout` | `number` (ms) | `60_000` |
| `statusCodesToRetry` | `readonly number[]` | `[408, 429, 500, 502, 503, 504]` |
| `httpMethodsToRetry` | `readonly HttpMethod[]` | `["GET", "HEAD", "PUT", "OPTIONS"]` |
| `maxRetries` | `number` | `3` |
| `delay` | `number` (ms) | `1000` |
| `backoffFactor` | `number` | `2` |
| `useExponentialBackoff` | `boolean` | `true` |
| `maxJitter` | `number` (a fraction, `0` to `1`) | `0.25` |
| `onRetry` | `((attempt: RetryAttempt) => void) \| undefined` | unset |

`retry: { maxRetries: 0 }` turns retries off.

A call may override three of these through `RequestOptions.retry`, typed `RequestRetryOptions`: `maxRetries`, `timeout` and `statusCodesToRetry`.

Retry types named by the fields above — public members with their **declared types**, verbatim from source; every member is `readonly`, and both are exported as types:

| Type | Public members | Source |
| --- | --- | --- |
| `RetryAttempt` — the `onRetry` callback argument | `attemptNumber: number` · `delay: number` · `reason: RetryReason` | `src/core/retry.ts` |
| `RetryReason` — narrow on `kind` | `{ kind: "status"; status: number; headers: Headers }` or `{ kind: "fault"; error: ConnectionError \| TimeoutError }`, the two retryable leaves of `TwilioSdkError` | `src/core/retry.ts` |

`LoggingOptions` fields (source: `src/core/logging.ts`; exported from `twilio-sdk` as a type). Every field is optional, so pass only the fields you change — each one left out takes its default:

| Field | Type | Default |
| --- | --- | --- |
| `logger` | `Logger` | `console` |
| `level` | `LogLevel` — `"off" \| "error" \| "warn" \| "info" \| "debug"` | `"off"`; `"debug"` when `logger` is set |
| `logRequestHeaders` | `boolean` | `false` |
| `logResponseHeaders` | `boolean` | `false` |
| `logRequestBody` | `boolean` | `false` |
| `bodySizeLimit` | `number` (bytes of UTF-8) | `32_768` |
| `loggableContentTypes` | `readonly string[]` | `["application/json", "application/x-www-form-urlencoded"]` |
| `redactedHeaders` | `readonly string[]` | `[]` |
| `unmaskHeaders` | `readonly string[]` | `[]` |
| `redactedKeys` | `readonly string[]` | `["sig", "signature", "access_token", "apikey", "api_key", "client_secret", "password", "refresh_token", "code", "assertion", "client_assertion"]` |
| `redactionPlaceholder` | `string` | `"***"` |

A call may override one of these through `RequestOptions.logging`, typed `RequestLoggingOptions`: `level`.

Logging types named by the fields above — their **declared types**, verbatim from source; both are exported as types:

| Type | Public members | Source |
| --- | --- | --- |
| `Logger` — the `logger` field | `error(message: string, details: LogDetails): void` · `warn(message: string, details: LogDetails): void` · `info(message: string, details: LogDetails): void` · `debug(message: string, details: LogDetails): void` | `src/core/logging.ts` |
| `LogDetails` — narrow on `event` | `HttpRequestDetails \| RequestHeadersDetails \| RequestBodyDetails \| HttpResponseDetails \| ResponseHeadersDetails \| HttpRetryingDetails \| HttpFailedDetails`, each exported as a type | `src/core/logging.ts` |

**`ClientOptions.fetch` is the one transport extension point** — there are no hooks, no middleware and no interceptors, so a proxy, a custom agent and extra headers all go here. The SDK calls a replacement with one argument, the `Request` of the attempt, and no `init`. A replacement **must forward that `Request`, or its `signal`,** to whatever actually performs the request. Drop the signal and both the per-call signal and `retry.timeout` go inert — the call neither aborts nor times out. To add a header, copy the `Request` with `new Request(request)` and set it on the copy's `headers`: passing `{ headers }` to the copy replaces every header the SDK set rather than adding to them. A replacement may reject with an error of its own when that signal aborts; the SDK reads the `reason` of the signal it built the `Request` with to tell the deadline's `TimeoutError` from an abort of `RequestOptions.signal`, so a timeout is still retried, and an abort still rejects with the caller's own `reason`.

**Cancellation.** The `signal` on `RequestOptions` is the per-request cancellation surface. Aborting rejects with the signal's **own `reason`** — whatever you passed to `abort()`, or the platform `DOMException` a bare `abort()` supplies — unwrapped, so it is **not** an `TwilioSdkError` and a `catch` that tests the family must rethrow it. An already-aborted signal rejects immediately. The `retry.timeout` that bounded the attempt is the SDK's own and does stay in the family, as `err.kind === "timeout"`. It starts once the credential is in hand and covers the request up to its response headers — not obtaining the credential and not reading the body, which only the signal bounds, so a body that stalls after its headers holds a call with no signal until the transport gives up.

The entire per-request surface is the optional second argument of every operation:

| Type | Members | Source |
| --- | --- | --- |
| `RequestOptions` | `signal?: AbortSignal \| undefined` · `retry?: RequestRetryOptions` · `logging?: RequestLoggingOptions` | `src/core/api-request.ts` |
| `RequestRetryOptions` — `Pick<RetryOptions, "maxRetries" \| "timeout" \| "statusCodesToRetry">` | `maxRetries?: number` · `timeout?: number` · `statusCodesToRetry?: readonly number[]` | `src/core/retry.ts` |
| `RequestLoggingOptions` — `Pick<LoggingOptions, "level">` | `level?: LogLevel` | `src/core/logging.ts` |

**A per-call `retry` is merged field by field over the client's resolved policy**, so `{ retry: { maxRetries: 0 } }` changes that one field for that one call and leaves every other call alone.

**Not on this SDK.** These are absent by design, not undocumented. This table ships with `src/core/` and is versioned with it.

| You might reach for | Reality |
| --- | --- |
| hooks, middleware, interceptors, `onRequest`/`onResponse` | none. `fetch` is the one transport extension point |
| pagination, `for await`, auto-paging helpers | no operation is paginated and nothing is async-iterable |
| SSE, `text/event-stream` | no event streams. Every decoder reads the body to completion, bar a binary success, which hands its stream over unread |
| multipart <em>responses</em>, XML bodies | none. A multipart reply is not decoded and an XML body is not sent — an operation declaring either is still emitted, with no body to supply or read |
| per-request `headers`, `baseUrl`, idempotency key | none. `RequestOptions` is `{ signal, retry, logging }`; a header, a base URL and a caller-supplied idempotency key are not on it |
| the raw `fetch` `Response` | deliberately unreachable. `status` and `headers` are on `asApiResult()` and on a thrown `ResponseError` |

---

## Error-handling model (read once — applies to every operation)

Operations are **throw-based**, and every **operational** failure belongs to **one family**: `TwilioSdkError`, a union over six leaves, so one `instanceof TwilioSdkError` sees all of them. It is not the whole escape set — four throwables sit outside it, enumerated below. Every leaf names the call it raised — `err.method` and `err.uri` — and `message` opens with that name. `instanceof` is reliable **within one dialect**: a process that loads both — `import` in one file, `require` in another — gets two independent copies of every error class, and `instanceof` across that boundary is `false`. Narrow on `err.kind` there, or on `err.name`, which is stable across copies.

Core types (public members with their declared types; all are `readonly`):

| Type | Public members | Source |
| --- | --- | --- |
| `TwilioSdkError` (declared as `CoreError`) | `kind: ErrorKind` · `method: HttpMethod` · `uri: string` · `message` · `cause` — the union every failure below belongs to | `src/core/errors.ts` |
| `ResponseError` | the rung the server answered on, `ApiError \| DecodeError`; adds `status: number` · `headers: Headers` | `src/core/errors.ts` |
| `ApiError` | `kind: "api"` · `payload` — the open arm, whose `kind` is `string`. **Not generic**: a typed operation's subclass redeclares `payload` with its own literal arms | `src/core/api-error.ts` |
| `TimeoutError` | `kind: "timeout"` · `timeout: number` | `src/core/errors.ts` |
| `DecodeError`, `EncodeError`, `ConnectionError`, `AuthError` | their `kind`, and nothing beyond the two rows above | `src/core/errors.ts` |
| `Declared<K, B>` | `kind: K` · `body: B` | `src/core/api-error.ts` |
| `ErrorPayload<P>` | `P` or `{ kind: "undeclared"; rawBody: ArrayBuffer }` | `src/core/api-error.ts` |
| `Undeclared` | `kind: "undeclared"` · `rawBody: ArrayBuffer` — the always-present arm, carrying the untouched bytes of a status the spec does not describe | `src/core/api-error.ts` |
| `ApiResult<T, E>` | on success `{ ok: true; status; headers; value: T }`, on failure `{ ok: false; status; headers; message: string; method: HttpMethod; uri: string; payload: ErrorPayload<P> }` — the failure branch carries the error's own members, never the error object | `src/core/api-promise.ts` |

`TwilioSdkError` and `ResponseError` are each a **type and a value**: the type is the union, the value is the abstract class every leaf extends, so `instanceof` and `err.kind` select the same set. Neither can be constructed or extended. `uri` is the absolute URL the call dialled, with the server variables expanded and the path parameters filled. It carries no query, fragment or userinfo, so no query parameter reaches it. One failure names an unresolved URI: a path parameter rejected by its schema arrives as an `EncodeError` whose `uri` still shows the unfilled `{braces}` — an `undefined` one included, since a path parameter is always required, so its schema rejects it first.

`ErrorKind` is closed, so a `switch` over `err.kind` is exhaustive:

| `err.kind` | What happened | Adds |
| --- | --- | --- |
| `"api"` | the API answered with an error status | `status` · `headers` · `payload` |
| `"decode"` | the answer could not be turned into the declared value — the body was not JSON, failed its schema, arrived where none is declared, or died mid-read after the response line; `cause` carries the underlying failure | `status` · `headers` |
| `"encode"` | a request value did not match its declared type, so **nothing was sent**. `cause` is the `SchemaError` that rejected it | — |
| `"connection"` | `fetch` rejected before a response line arrived | — |
| `"timeout"` | `ClientOptions.retry.timeout` elapsed. `timeout` is the budget that ran out | `timeout` |
| `"auth"` | a credential could not be **obtained**, per the paragraph below | — |

**Four throwables sit outside the family**, so `instanceof TwilioSdkError` is `false` on each and a `catch` that tests it has to rethrow what is left. `ConfigurationError` comes out of the **`TwilioSdkClient` constructor**, synchronously and before any `ApiPromise` exists: no reachable `fetch`, a `accountSidAuthToken.username` containing a colon (invalid per RFC 7617 §2, because the first colon separates user-id from password), or a `ClientOptions.retry` or `ClientOptions.logging` whose reads throw. One call can reject with it too: a `RequestOptions.retry` or `RequestOptions.logging` whose reads throw. Either way the failed read is on `cause`. `SchemaError` is what a codec throws when called directly — `accountTypeSchema.decode(json)` — so it names no call; through an operation the same failure arrives one level down, on `DecodeError.cause` or `EncodeError.cause`, and a `serverOptions` override whose value is not a string raises it from the constructor too. Bugs stay outside the family and reach you raw — an unparseable `baseUrl` is a `TypeError`. And a caller abort arrives as the signal's own `reason`, unwrapped. The first two are exported from the package root; the other two are not ours to export.

**`AuthError` is about obtaining a credential, never about being refused one.** A 401 *from the API* is an `ApiError` like any other status. A 401 does have one auth consequence: it invalidates whatever that operation's scheme had cached, so the **next** call re-acquires.

```ts
try {
  const response = await client.createLookupPhoneNumberOverrides({
    field: "some example string",
    phoneNumber: "some example string",
  });
} catch (err) {
  if (err instanceof TwilioSdkError) {
    switch (err.kind) {
      case "api":
        // TODO: the API answered with an error status — read err.status and err.payload
        break;
      case "decode":
        // TODO: the answer did not fit the spec — read err.status and err.cause
        break;
      case "encode":
        // TODO: nothing was sent — err.cause is the SchemaError that rejected the value
        break;
      case "connection":
      case "timeout":
      case "auth":
        // TODO: no response was produced — err.kind says which
        break;
    }
  } else {
    throw err;
  }
}
```

**Narrowing the payload.** A typed subclass declares its arms as literals, so `switch (err.payload.kind)` narrows `payload.body` to exactly one model. The `kind` is named after the arm's **body**, *not* its status code: a body that references a model takes that model's name in lower camel, any other body `error{Status}`, and a second arm that would land on the same name takes a numeric suffix. On the base `ApiError` — what an operation with no declared error bodies rejects with — `payload.kind` is `string`, so comparing it to `"undeclared"` narrows **nothing**: use `"rawBody" in err.payload`. Which arms an operation declares, with the status each covers, is the **Error arms** bullet on its page below.

**Matcher precedence** for a subclass with several arms, in three passes: an exact numeric status is looked up across the whole table **first**, then the first covering `[lo, hi]` range, and last a `"default"` arm where the spec declared one. A body that does not fit the arm it matched is a `DecodeError` — except on `"default"`, which describes no status in particular and so **degrades to the `"undeclared"` arm** rather than throwing.

**The non-throwing form exists on every operation.** `.asApiResult()` returns `ApiResult<T, E>` and does **not** reject for an HTTP error status — every other failure still rejects, `DecodeError` included, so the `catch` stays. It must be called on the value the operation returned: `ApiPromise` overrides `Symbol.species`, so `.then()`, `.catch()` and `.finally()` hand back a plain `Promise` and the method is gone.

```ts
try {
  const result = await client.createLookupPhoneNumberOverrides({
    field: "some example string",
    phoneNumber: "some example string",
  }).asApiResult();
  // TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
  if (result.ok) {
    // TODO: Use 'result.value' — what this operation resolves to
  } else {
    // TODO: Use 'result.message', 'result.method' and 'result.uri', and narrow 'result.payload'
  }
} catch (err) {
  if (err instanceof TwilioSdkError) {
    // TODO: no error status was produced — err.kind says which failure this is
  } else {
    throw err;
  }
}
```

`result.payload` is the same `ErrorPayload<P>` a thrown `ApiError` carries on `err.payload`, and `result.message`, `result.method` and `result.uri` are that error's own members — so the **Error arms** bullet on an operation's page enumerates the payload either way, and the `catch` above it is for the rest of the family. `result.method` and `result.uri` are named on this map alone.

Of **898 operations**, **39** declare typed error bodies and **859** reject with the base `ApiError`, whose payload is always the `"undeclared"` arm.

---

## Operations — by resource (319 groups, 898 operations)

Each page below carries one block per operation, with bullets in the fixed order **Server**, **Signature**, **Wire**, **Auth**, **Request body**, **SDK-sent**, **Returns**, **Error**, **Error arms**, then a **Fields** table mapping every request field to the channel it travels on, and a **Type sources** table naming the declaring file and schema value of every type the operation mentions. With `api-reference.md` documenting operations only, that table is the route from an operation to the file declaring what it takes.

**Each block states what is specific to its operation. Everything in the table below holds for EVERY operation unless that operation says otherwise, so a block silent on one of these points is telling you the default here applies — take it and move on rather than opening the source to confirm it.**

| Applies to every operation | Stated where | A block departs from it only by |
| --- | --- | --- |
| **Call shape `op(request, options?)`** — one flat request object first, the per-call options second. There is no positional overload. What the second argument carries is a `signal`, a `retry` override and a log level; a per-call base URL, header or auth override does not exist | here, Getting a client | never — it always holds |
| **The request object is flat and channel-blind.** A field named `body` *is* the whole request body; every other field is fanned out to path, query, header or form by the SDK. Nothing in the object is nested by channel | here | never — the **Fields** table `Channel` column always resolves it |
| **Throw-based, returning `ApiPromise<T, E>`.** `await` it for `T`; call `.asApiResult()` on the returned value for the non-throwing `ApiResult<T, E>`. No operation is result-only | here, Error-handling model | never |
| **`E` is the base `ApiError`** and the payload is always the `"undeclared"` arm | Error-handling model | the spec declared error bodies — the **Error** bullet names a subclass and an **Error arms** bullet gives each arm's tag, status and body |
| **The request body and its media type are stated on every block**, by a **Request body** bullet that is never omitted. `none` means no body **and no `Content-Type` header**, and a named media type means the body is **required** — the request type's field is not optional | here | the spec declared the body optional — the bullet adds **Optional**, the field is `field?:`, and omitting it sends no body and no `Content-Type` header at all |
| **Resolves once, to one whole value** — except a binary body, which resolves to a stream the caller reads. No pagination, no SSE, no async iterables and no partial results | here, Not on this SDK | never at this SDK version |
| **Six identity headers ride every request** — `User-Agent`, `X-APIMatic-Lang`, `X-APIMatic-Package-Version`, `X-APIMatic-Gen-Version`, `X-APIMatic-OS` and `X-APIMatic-Runtime`. They identify the generated SDK, so **no option configures them** | here | the operation declared a header of the same name — the operation's layer is folded after the client's, so its value wins |
| **A fresh `Idempotency-Key` rides every non-GET call that does not declare that header itself**, minted per call in the operation's own header layer. It makes a *replayed* request safe, not a repeated one — a value that changes per call deduplicates nothing, so it is no substitute for a key the API documents. **No option sets it**, and once minted it is always sent — a runtime with no `crypto` global mints it from `Math.random` mixed with the clock and a per-process counter | here | the operation is a GET, or declared that header itself — then its own value stands and nothing is minted |
| **Server group `default`** | here, Servers & auth | the operation is on another group — its block carries a **Server** bullet |
| **Every operation states its auth requirement**, by an **Auth** bullet that is never omitted — one scheme, a composition over schemes, or `none` for a public operation | here, Servers & auth | never — the bullet is always present |
| **Every value is schema-encoded before the request is built** — a wrong type or format rejects and nothing is sent. **An omitted field that has a default is still sent, with that default**, filled by the SDK rather than by the server | here | the field has a default — it appears in the **Fields** table `Default` column |
| **Field names are TypeScript camelCase and the wire name is the same** | here | some field differs — the **Fields** table gains a `Wire` column, where an em dash means "same as the field name" |
| **Arrays repeat their key and objects bracket-expand** | the serialization block below | never — this SDK declares no per-field serialization style, so every array takes this one |

**Wire serialization, once, for every channel** (source: `src/core/param-value.ts`, `src/core/url.ts`, `src/core/headers.ts`, `src/core/params.ts`). This block ships with `src/core/` and is versioned with it:

- **`path`** takes no style. An array is comma-joined with each element percent-encoded **separately**; an object becomes one percent-encoded JSON document inside the segment. A field whose encoded value is `undefined` throws `TypeError` naming the unfilled placeholder — a guard no operation reaches, since a path parameter is always required and its schema rejects `undefined` first, as an `EncodeError`; `null` collapses the segment.
- **`header`** takes no style. An array is comma-joined un-encoded (OpenAPI `simple`). `undefined` says nothing, while `null` and an empty array are tombstones that remove the header. Later layers win by **lowercased** name, in the order body content type, then client defaults, then operation.
- **`query`** and **`form`** repeat an array's key and bracket-expand an object at any depth (`filter[status]=open`, `ranges[amount][min]=10`). An array of *objects* bracket-expands per element with **no index**, so element boundaries collapse.
- Nullish **fields** are dropped from every channel except `path`, where `null` collapses the segment. A nullish array **element** is dropped, so an all-nullish array emits no key at all.
- `form` bodies use RFC 1866 encoding (space becomes `+`); `query` uses `%20`. On the wire both key and value go through `encodeURIComponent`, plus a further escape of `!`, `'`, `(`, `)` and `*`.

**The verb and route are on the pages below**, where a map for a language whose method names are derived from the route can leave them to the source. A TypeScript method name carries none of it, and a `path` field row is unreadable without the route template it fills.

**Endpoint prose is not on this map.** Where the *semantics* of an operation decide what you must pass — a field whose value changes server-side behaviour, an ordering or exclusivity rule between fields — read `api-reference.md`, whose entries are keyed by the same signature these pages print. Blocks here give you the contract: names, channels, types, defaults, errors.

| Resource (`client.X`) | Ops | Page |
| --- | --- | --- |
| `client` (ungrouped) | 11 | [map/operations/client.md](map/operations/client.md) |
| `api20100401Account` | 4 | [map/operations/api20100401-account.md](map/operations/api20100401-account.md) |
| `api20100401AddOnResult` | 3 | [map/operations/api20100401-add-on-result.md](map/operations/api20100401-add-on-result.md) |
| `api20100401Address` | 5 | [map/operations/api20100401-address.md](map/operations/api20100401-address.md) |
| `api20100401AllTime` | 1 | [map/operations/api20100401-all-time.md](map/operations/api20100401-all-time.md) |
| `api20100401Application` | 5 | [map/operations/api20100401-application.md](map/operations/api20100401-application.md) |
| `api20100401AssignedAddOn` | 4 | [map/operations/api20100401-assigned-add-on.md](map/operations/api20100401-assigned-add-on.md) |
| `api20100401AssignedAddOnExtension` | 2 | [map/operations/api20100401-assigned-add-on-extension.md](map/operations/api20100401-assigned-add-on-extension.md) |
| `api20100401AuthCallsCredentialListMapping` | 4 | [map/operations/api20100401-auth-calls-credential-list-mapping.md](map/operations/api20100401-auth-calls-credential-list-mapping.md) |
| `api20100401AuthCallsIpAccessControlListMapping` | 4 | [map/operations/api20100401-auth-calls-ip-access-control-list-mapping.md](map/operations/api20100401-auth-calls-ip-access-control-list-mapping.md) |
| `api20100401AuthRegistrationsCredentialListMapping` | 4 | [map/operations/api20100401-auth-registrations-credential-list-mapping.md](map/operations/api20100401-auth-registrations-credential-list-mapping.md) |
| `api20100401AuthorizedConnectApp` | 2 | [map/operations/api20100401-authorized-connect-app.md](map/operations/api20100401-authorized-connect-app.md) |
| `api20100401AvailablePhoneNumberCountry` | 2 | [map/operations/api20100401-available-phone-number-country.md](map/operations/api20100401-available-phone-number-country.md) |
| `api20100401Balance` | 1 | [map/operations/api20100401-balance.md](map/operations/api20100401-balance.md) |
| `api20100401Call` | 5 | [map/operations/api20100401-call.md](map/operations/api20100401-call.md) |
| `api20100401CallNotification` | 2 | [map/operations/api20100401-call-notification.md](map/operations/api20100401-call-notification.md) |
| `api20100401CallRecording` | 5 | [map/operations/api20100401-call-recording.md](map/operations/api20100401-call-recording.md) |
| `api20100401CallTranscription` | 2 | [map/operations/api20100401-call-transcription.md](map/operations/api20100401-call-transcription.md) |
| `api20100401Conference` | 3 | [map/operations/api20100401-conference.md](map/operations/api20100401-conference.md) |
| `api20100401ConferenceRecording` | 4 | [map/operations/api20100401-conference-recording.md](map/operations/api20100401-conference-recording.md) |
| `api20100401ConnectApp` | 4 | [map/operations/api20100401-connect-app.md](map/operations/api20100401-connect-app.md) |
| `api20100401Credential` | 5 | [map/operations/api20100401-credential.md](map/operations/api20100401-credential.md) |
| `api20100401CredentialList` | 5 | [map/operations/api20100401-credential-list.md](map/operations/api20100401-credential-list.md) |
| `api20100401CredentialListMapping` | 4 | [map/operations/api20100401-credential-list-mapping.md](map/operations/api20100401-credential-list-mapping.md) |
| `api20100401Daily` | 1 | [map/operations/api20100401-daily.md](map/operations/api20100401-daily.md) |
| `api20100401Data` | 1 | [map/operations/api20100401-data.md](map/operations/api20100401-data.md) |
| `api20100401DependentPhoneNumber` | 1 | [map/operations/api20100401-dependent-phone-number.md](map/operations/api20100401-dependent-phone-number.md) |
| `api20100401Domain` | 5 | [map/operations/api20100401-domain.md](map/operations/api20100401-domain.md) |
| `api20100401Event` | 1 | [map/operations/api20100401-event.md](map/operations/api20100401-event.md) |
| `api20100401Feedback` | 1 | [map/operations/api20100401-feedback.md](map/operations/api20100401-feedback.md) |
| `api20100401IncomingPhoneNumber` | 5 | [map/operations/api20100401-incoming-phone-number.md](map/operations/api20100401-incoming-phone-number.md) |
| `api20100401IncomingPhoneNumberLocal` | 2 | [map/operations/api20100401-incoming-phone-number-local.md](map/operations/api20100401-incoming-phone-number-local.md) |
| `api20100401IncomingPhoneNumberMobile` | 2 | [map/operations/api20100401-incoming-phone-number-mobile.md](map/operations/api20100401-incoming-phone-number-mobile.md) |
| `api20100401IncomingPhoneNumberTollFree` | 2 | [map/operations/api20100401-incoming-phone-number-toll-free.md](map/operations/api20100401-incoming-phone-number-toll-free.md) |
| `api20100401IpAccessControlList` | 5 | [map/operations/api20100401-ip-access-control-list.md](map/operations/api20100401-ip-access-control-list.md) |
| `api20100401IpAccessControlListMapping` | 4 | [map/operations/api20100401-ip-access-control-list-mapping.md](map/operations/api20100401-ip-access-control-list-mapping.md) |
| `api20100401Key` | 4 | [map/operations/api20100401-key.md](map/operations/api20100401-key.md) |
| `api20100401LastMonth` | 1 | [map/operations/api20100401-last-month.md](map/operations/api20100401-last-month.md) |
| `api20100401Local` | 1 | [map/operations/api20100401-local.md](map/operations/api20100401-local.md) |
| `api20100401MachineToMachine` | 1 | [map/operations/api20100401-machine-to-machine.md](map/operations/api20100401-machine-to-machine.md) |
| `api20100401Media` | 1 | [map/operations/api20100401-media.md](map/operations/api20100401-media.md) |
| `api20100401MediaInstance` | 2 | [map/operations/api20100401-media-instance.md](map/operations/api20100401-media-instance.md) |
| `api20100401Member` | 3 | [map/operations/api20100401-member.md](map/operations/api20100401-member.md) |
| `api20100401Message` | 5 | [map/operations/api20100401-message.md](map/operations/api20100401-message.md) |
| `api20100401Mobile` | 1 | [map/operations/api20100401-mobile.md](map/operations/api20100401-mobile.md) |
| `api20100401Monthly` | 1 | [map/operations/api20100401-monthly.md](map/operations/api20100401-monthly.md) |
| `api20100401National` | 1 | [map/operations/api20100401-national.md](map/operations/api20100401-national.md) |
| `api20100401NewKey` | 1 | [map/operations/api20100401-new-key.md](map/operations/api20100401-new-key.md) |
| `api20100401NewSigningKey` | 1 | [map/operations/api20100401-new-signing-key.md](map/operations/api20100401-new-signing-key.md) |
| `api20100401Notification` | 2 | [map/operations/api20100401-notification.md](map/operations/api20100401-notification.md) |
| `api20100401OutgoingCallerId` | 4 | [map/operations/api20100401-outgoing-caller-id.md](map/operations/api20100401-outgoing-caller-id.md) |
| `api20100401Participant` | 5 | [map/operations/api20100401-participant.md](map/operations/api20100401-participant.md) |
| `api20100401Payload` | 3 | [map/operations/api20100401-payload.md](map/operations/api20100401-payload.md) |
| `api20100401Payment` | 2 | [map/operations/api20100401-payment.md](map/operations/api20100401-payment.md) |
| `api20100401Queue` | 5 | [map/operations/api20100401-queue.md](map/operations/api20100401-queue.md) |
| `api20100401Record` | 1 | [map/operations/api20100401-record.md](map/operations/api20100401-record.md) |
| `api20100401Recording` | 3 | [map/operations/api20100401-recording.md](map/operations/api20100401-recording.md) |
| `api20100401RecordingTranscription` | 3 | [map/operations/api20100401-recording-transcription.md](map/operations/api20100401-recording-transcription.md) |
| `api20100401SharedCost` | 1 | [map/operations/api20100401-shared-cost.md](map/operations/api20100401-shared-cost.md) |
| `api20100401ShortCode` | 3 | [map/operations/api20100401-short-code.md](map/operations/api20100401-short-code.md) |
| `api20100401SigningKey` | 4 | [map/operations/api20100401-signing-key.md](map/operations/api20100401-signing-key.md) |
| `api20100401SipIpAddress` | 5 | [map/operations/api20100401-sip-ip-address.md](map/operations/api20100401-sip-ip-address.md) |
| `api20100401Siprec` | 2 | [map/operations/api20100401-siprec.md](map/operations/api20100401-siprec.md) |
| `api20100401Stream` | 2 | [map/operations/api20100401-stream.md](map/operations/api20100401-stream.md) |
| `api20100401ThisMonth` | 1 | [map/operations/api20100401-this-month.md](map/operations/api20100401-this-month.md) |
| `api20100401Today` | 1 | [map/operations/api20100401-today.md](map/operations/api20100401-today.md) |
| `api20100401Token` | 1 | [map/operations/api20100401-token.md](map/operations/api20100401-token.md) |
| `api20100401TollFree` | 1 | [map/operations/api20100401-toll-free.md](map/operations/api20100401-toll-free.md) |
| `api20100401Transcription` | 3 | [map/operations/api20100401-transcription.md](map/operations/api20100401-transcription.md) |
| `api20100401Trigger` | 5 | [map/operations/api20100401-trigger.md](map/operations/api20100401-trigger.md) |
| `api20100401UserDefinedMessage` | 1 | [map/operations/api20100401-user-defined-message.md](map/operations/api20100401-user-defined-message.md) |
| `api20100401UserDefinedMessageSubscription` | 2 | [map/operations/api20100401-user-defined-message-subscription.md](map/operations/api20100401-user-defined-message-subscription.md) |
| `api20100401ValidationRequest` | 1 | [map/operations/api20100401-validation-request.md](map/operations/api20100401-validation-request.md) |
| `api20100401Voip` | 1 | [map/operations/api20100401-voip.md](map/operations/api20100401-voip.md) |
| `api20100401Yearly` | 1 | [map/operations/api20100401-yearly.md](map/operations/api20100401-yearly.md) |
| `api20100401Yesterday` | 1 | [map/operations/api20100401-yesterday.md](map/operations/api20100401-yesterday.md) |
| `messagingV1AlphaSender` | 4 | [map/operations/messaging-v1-alpha-sender.md](map/operations/messaging-v1-alpha-sender.md) |
| `messagingV1BrandRegistration` | 4 | [map/operations/messaging-v1-brand-registration.md](map/operations/messaging-v1-brand-registration.md) |
| `messagingV1BrandRegistrationOtp` | 1 | [map/operations/messaging-v1-brand-registration-otp.md](map/operations/messaging-v1-brand-registration-otp.md) |
| `messagingV1BrandVetting` | 3 | [map/operations/messaging-v1-brand-vetting.md](map/operations/messaging-v1-brand-vetting.md) |
| `messagingV1ChannelSender` | 4 | [map/operations/messaging-v1-channel-sender.md](map/operations/messaging-v1-channel-sender.md) |
| `messagingV1Deactivations` | 1 | [map/operations/messaging-v1-deactivations.md](map/operations/messaging-v1-deactivations.md) |
| `messagingV1DestinationAlphaSender` | 4 | [map/operations/messaging-v1-destination-alpha-sender.md](map/operations/messaging-v1-destination-alpha-sender.md) |
| `messagingV1DomainCerts` | 3 | [map/operations/messaging-v1-domain-certs.md](map/operations/messaging-v1-domain-certs.md) |
| `messagingV1DomainConfigApi` | 2 | [map/operations/messaging-v1-domain-config-api.md](map/operations/messaging-v1-domain-config-api.md) |
| `messagingV1DomainConfigMessagingServiceApi` | 1 | [map/operations/messaging-v1-domain-config-messaging-service-api.md](map/operations/messaging-v1-domain-config-messaging-service-api.md) |
| `messagingV1ExternalCampaignApi` | 1 | [map/operations/messaging-v1-external-campaign-api.md](map/operations/messaging-v1-external-campaign-api.md) |
| `messagingV1LinkshorteningMessagingServiceApi` | 2 | [map/operations/messaging-v1-linkshortening-messaging-service-api.md](map/operations/messaging-v1-linkshortening-messaging-service-api.md) |
| `messagingV1LinkshorteningMessagingServiceDomainAssociationApi` | 1 | [map/operations/messaging-v1-linkshortening-messaging-service-domain-association-api.md](map/operations/messaging-v1-linkshortening-messaging-service-domain-association-api.md) |
| `messagingV1PhoneNumber` | 4 | [map/operations/messaging-v1-phone-number.md](map/operations/messaging-v1-phone-number.md) |
| `messagingV1RequestManagedCertApi` | 1 | [map/operations/messaging-v1-request-managed-cert-api.md](map/operations/messaging-v1-request-managed-cert-api.md) |
| `messagingV1ServiceApi` | 5 | [map/operations/messaging-v1-service-api.md](map/operations/messaging-v1-service-api.md) |
| `messagingV1ShortCode` | 4 | [map/operations/messaging-v1-short-code.md](map/operations/messaging-v1-short-code.md) |
| `messagingV1TollfreeVerificationApi` | 5 | [map/operations/messaging-v1-tollfree-verification-api.md](map/operations/messaging-v1-tollfree-verification-api.md) |
| `messagingV1UsAppToPerson` | 5 | [map/operations/messaging-v1-us-app-to-person.md](map/operations/messaging-v1-us-app-to-person.md) |
| `messagingV1UsAppToPersonUsecase` | 1 | [map/operations/messaging-v1-us-app-to-person-usecase.md](map/operations/messaging-v1-us-app-to-person-usecase.md) |
| `messagingV1UsecaseApi` | 1 | [map/operations/messaging-v1-usecase-api.md](map/operations/messaging-v1-usecase-api.md) |
| `messagingV1DomainValidateDns` | 1 | [map/operations/messaging-v1-domain-validate-dns.md](map/operations/messaging-v1-domain-validate-dns.md) |
| `messagingV2ChannelsSender` | 5 | [map/operations/messaging-v2-channels-sender.md](map/operations/messaging-v2-channels-sender.md) |
| `messagingV2TypingIndicator` | 1 | [map/operations/messaging-v2-typing-indicator.md](map/operations/messaging-v2-typing-indicator.md) |
| `messagingV2DomainCerts` | 1 | [map/operations/messaging-v2-domain-certs.md](map/operations/messaging-v2-domain-certs.md) |
| `messagingV3TypingIndicator` | 1 | [map/operations/messaging-v3-typing-indicator.md](map/operations/messaging-v3-typing-indicator.md) |
| `contentv1ApprovalCreate` | 1 | [map/operations/contentv1-approval-create.md](map/operations/contentv1-approval-create.md) |
| `contentv1ApprovalFetch` | 1 | [map/operations/contentv1-approval-fetch.md](map/operations/contentv1-approval-fetch.md) |
| `contentv1ContentApi` | 5 | [map/operations/contentv1-content-api.md](map/operations/contentv1-content-api.md) |
| `contentv1ContentAndApprovalsApi` | 1 | [map/operations/contentv1-content-and-approvals-api.md](map/operations/contentv1-content-and-approvals-api.md) |
| `contentv1LegacyContentApi` | 1 | [map/operations/contentv1-legacy-content-api.md](map/operations/contentv1-legacy-content-api.md) |
| `contentV2Content` | 1 | [map/operations/content-v2-content.md](map/operations/content-v2-content.md) |
| `contentV2ContentAndApprovals` | 1 | [map/operations/content-v2-content-and-approvals.md](map/operations/content-v2-content-and-approvals.md) |
| `verifyV2AccessToken` | 2 | [map/operations/verify-v2-access-token.md](map/operations/verify-v2-access-token.md) |
| `verifyV2Bucket` | 5 | [map/operations/verify-v2-bucket.md](map/operations/verify-v2-bucket.md) |
| `verifyV2Challenge` | 4 | [map/operations/verify-v2-challenge.md](map/operations/verify-v2-challenge.md) |
| `verifyV2Entity` | 4 | [map/operations/verify-v2-entity.md](map/operations/verify-v2-entity.md) |
| `verifyV2Factor` | 4 | [map/operations/verify-v2-factor.md](map/operations/verify-v2-factor.md) |
| `verifyV2FormApi` | 1 | [map/operations/verify-v2-form-api.md](map/operations/verify-v2-form-api.md) |
| `verifyV2MessagingConfiguration` | 5 | [map/operations/verify-v2-messaging-configuration.md](map/operations/verify-v2-messaging-configuration.md) |
| `verifyV2NewFactor` | 2 | [map/operations/verify-v2-new-factor.md](map/operations/verify-v2-new-factor.md) |
| `verifyV2Notification` | 1 | [map/operations/verify-v2-notification.md](map/operations/verify-v2-notification.md) |
| `verifyV2RateLimit` | 5 | [map/operations/verify-v2-rate-limit.md](map/operations/verify-v2-rate-limit.md) |
| `verifyV2SafelistApi` | 3 | [map/operations/verify-v2-safelist-api.md](map/operations/verify-v2-safelist-api.md) |
| `verifyV2ServiceApi` | 5 | [map/operations/verify-v2-service-api.md](map/operations/verify-v2-service-api.md) |
| `verifyV2Template` | 1 | [map/operations/verify-v2-template.md](map/operations/verify-v2-template.md) |
| `verifyV2Verification` | 3 | [map/operations/verify-v2-verification.md](map/operations/verify-v2-verification.md) |
| `verifyV2VerificationAttemptApi` | 2 | [map/operations/verify-v2-verification-attempt-api.md](map/operations/verify-v2-verification-attempt-api.md) |
| `verifyV2VerificationAttemptsSummaryApi` | 1 | [map/operations/verify-v2-verification-attempts-summary-api.md](map/operations/verify-v2-verification-attempts-summary-api.md) |
| `verifyV2VerificationCheck` | 1 | [map/operations/verify-v2-verification-check.md](map/operations/verify-v2-verification-check.md) |
| `verifyV2Webhook` | 5 | [map/operations/verify-v2-webhook.md](map/operations/verify-v2-webhook.md) |
| `verifyV2NewChallenge` | 1 | [map/operations/verify-v2-new-challenge.md](map/operations/verify-v2-new-challenge.md) |
| `lookupsV1PhoneNumberApi` | 1 | [map/operations/lookups-v1-phone-number-api.md](map/operations/lookups-v1-phone-number-api.md) |
| `lookupsV2PhoneNumber` | 1 | [map/operations/lookups-v2-phone-number.md](map/operations/lookups-v2-phone-number.md) |
| `numbersV1BulkEligibilityApi` | 2 | [map/operations/numbers-v1-bulk-eligibility-api.md](map/operations/numbers-v1-bulk-eligibility-api.md) |
| `numbersV1EligibilityApi` | 1 | [map/operations/numbers-v1-eligibility-api.md](map/operations/numbers-v1-eligibility-api.md) |
| `numbersV1PortingPortInApi` | 4 | [map/operations/numbers-v1-porting-port-in-api.md](map/operations/numbers-v1-porting-port-in-api.md) |
| `numbersV1PortingPortInPhoneNumberApi` | 2 | [map/operations/numbers-v1-porting-port-in-phone-number-api.md](map/operations/numbers-v1-porting-port-in-phone-number-api.md) |
| `numbersV1PortingPortabilityApi` | 1 | [map/operations/numbers-v1-porting-portability-api.md](map/operations/numbers-v1-porting-portability-api.md) |
| `numbersV1PortingWebhookConfigurationApi` | 1 | [map/operations/numbers-v1-porting-webhook-configuration-api.md](map/operations/numbers-v1-porting-webhook-configuration-api.md) |
| `numbersV1PortingWebhookConfigurationDeleteApi` | 1 | [map/operations/numbers-v1-porting-webhook-configuration-delete-api.md](map/operations/numbers-v1-porting-webhook-configuration-delete-api.md) |
| `numbersV1PortingWebhookConfigurationFetchApi` | 1 | [map/operations/numbers-v1-porting-webhook-configuration-fetch-api.md](map/operations/numbers-v1-porting-webhook-configuration-fetch-api.md) |
| `numbersV1SigningRequestConfigurationApi` | 2 | [map/operations/numbers-v1-signing-request-configuration-api.md](map/operations/numbers-v1-signing-request-configuration-api.md) |
| `numbersV1SenderIdRegistration` | 1 | [map/operations/numbers-v1-sender-id-registration.md](map/operations/numbers-v1-sender-id-registration.md) |
| `numbersV1SenderIdRegistrationEmbeddedSession` | 1 | [map/operations/numbers-v1-sender-id-registration-embedded-session.md](map/operations/numbers-v1-sender-id-registration-embedded-session.md) |
| `numbersV2AuthorizationDocumentApi` | 4 | [map/operations/numbers-v2-authorization-document-api.md](map/operations/numbers-v2-authorization-document-api.md) |
| `numbersV2BulkHostedNumberOrderApi` | 2 | [map/operations/numbers-v2-bulk-hosted-number-order-api.md](map/operations/numbers-v2-bulk-hosted-number-order-api.md) |
| `numbersV2Bundle` | 5 | [map/operations/numbers-v2-bundle.md](map/operations/numbers-v2-bundle.md) |
| `numbersV2BundleCloneApi` | 1 | [map/operations/numbers-v2-bundle-clone-api.md](map/operations/numbers-v2-bundle-clone-api.md) |
| `numbersV2BundleCopy` | 2 | [map/operations/numbers-v2-bundle-copy.md](map/operations/numbers-v2-bundle-copy.md) |
| `numbersV2DependentHostedNumberOrder` | 1 | [map/operations/numbers-v2-dependent-hosted-number-order.md](map/operations/numbers-v2-dependent-hosted-number-order.md) |
| `numbersV2EndUser` | 5 | [map/operations/numbers-v2-end-user.md](map/operations/numbers-v2-end-user.md) |
| `numbersV2EndUserType` | 2 | [map/operations/numbers-v2-end-user-type.md](map/operations/numbers-v2-end-user-type.md) |
| `numbersV2Evaluation` | 3 | [map/operations/numbers-v2-evaluation.md](map/operations/numbers-v2-evaluation.md) |
| `numbersV2HostedNumberOrderApi` | 5 | [map/operations/numbers-v2-hosted-number-order-api.md](map/operations/numbers-v2-hosted-number-order-api.md) |
| `numbersV2ItemAssignment` | 4 | [map/operations/numbers-v2-item-assignment.md](map/operations/numbers-v2-item-assignment.md) |
| `numbersV2Regulation` | 2 | [map/operations/numbers-v2-regulation.md](map/operations/numbers-v2-regulation.md) |
| `numbersV2ReplaceItems` | 1 | [map/operations/numbers-v2-replace-items.md](map/operations/numbers-v2-replace-items.md) |
| `numbersV2SupportingDocument` | 5 | [map/operations/numbers-v2-supporting-document.md](map/operations/numbers-v2-supporting-document.md) |
| `numbersV2SupportingDocumentType` | 2 | [map/operations/numbers-v2-supporting-document-type.md](map/operations/numbers-v2-supporting-document-type.md) |
| `v2ShortCodeApplications` | 3 | [map/operations/v2-short-code-applications.md](map/operations/v2-short-code-applications.md) |
| `numbersV3HostedNumbersHostedNumberOrderApi` | 1 | [map/operations/numbers-v3-hosted-numbers-hosted-number-order-api.md](map/operations/numbers-v3-hosted-numbers-hosted-number-order-api.md) |
| `videoV1Anonymize` | 1 | [map/operations/video-v1-anonymize.md](map/operations/video-v1-anonymize.md) |
| `videoV1CompositionApi` | 4 | [map/operations/video-v1-composition-api.md](map/operations/video-v1-composition-api.md) |
| `videoV1CompositionHookApi` | 5 | [map/operations/video-v1-composition-hook-api.md](map/operations/video-v1-composition-hook-api.md) |
| `videoV1CompositionSettingsApi` | 2 | [map/operations/video-v1-composition-settings-api.md](map/operations/video-v1-composition-settings-api.md) |
| `videoV1Participant` | 3 | [map/operations/video-v1-participant.md](map/operations/video-v1-participant.md) |
| `videoV1PublishedTrack` | 2 | [map/operations/video-v1-published-track.md](map/operations/video-v1-published-track.md) |
| `videoV1RecordingApi` | 3 | [map/operations/video-v1-recording-api.md](map/operations/video-v1-recording-api.md) |
| `videoV1RecordingRules` | 2 | [map/operations/video-v1-recording-rules.md](map/operations/video-v1-recording-rules.md) |
| `videoV1RecordingSettingsApi` | 2 | [map/operations/video-v1-recording-settings-api.md](map/operations/video-v1-recording-settings-api.md) |
| `videoV1RoomApi` | 4 | [map/operations/video-v1-room-api.md](map/operations/video-v1-room-api.md) |
| `videoV1RoomRecording` | 3 | [map/operations/video-v1-room-recording.md](map/operations/video-v1-room-recording.md) |
| `videoV1SubscribeRules` | 2 | [map/operations/video-v1-subscribe-rules.md](map/operations/video-v1-subscribe-rules.md) |
| `videoV1SubscribedTrack` | 2 | [map/operations/video-v1-subscribed-track.md](map/operations/video-v1-subscribed-track.md) |
| `videoV1Transcriptions` | 4 | [map/operations/video-v1-transcriptions.md](map/operations/video-v1-transcriptions.md) |
| `conversationsV1AddressConfiguration` | 5 | [map/operations/conversations-v1-address-configuration.md](map/operations/conversations-v1-address-configuration.md) |
| `conversationsV1Binding` | 3 | [map/operations/conversations-v1-binding.md](map/operations/conversations-v1-binding.md) |
| `conversationsV1ConfigurationApi` | 4 | [map/operations/conversations-v1-configuration-api.md](map/operations/conversations-v1-configuration-api.md) |
| `conversationsV1ConversationApi` | 10 | [map/operations/conversations-v1-conversation-api.md](map/operations/conversations-v1-conversation-api.md) |
| `conversationsV1ConversationWithParticipantsApi` | 2 | [map/operations/conversations-v1-conversation-with-participants-api.md](map/operations/conversations-v1-conversation-with-participants-api.md) |
| `conversationsV1CredentialApi` | 5 | [map/operations/conversations-v1-credential-api.md](map/operations/conversations-v1-credential-api.md) |
| `conversationsV1DeliveryReceipt` | 4 | [map/operations/conversations-v1-delivery-receipt.md](map/operations/conversations-v1-delivery-receipt.md) |
| `conversationsV1Message` | 10 | [map/operations/conversations-v1-message.md](map/operations/conversations-v1-message.md) |
| `conversationsV1Notification` | 2 | [map/operations/conversations-v1-notification.md](map/operations/conversations-v1-notification.md) |
| `conversationsV1Participant` | 10 | [map/operations/conversations-v1-participant.md](map/operations/conversations-v1-participant.md) |
| `conversationsV1ParticipantConversationApi` | 2 | [map/operations/conversations-v1-participant-conversation-api.md](map/operations/conversations-v1-participant-conversation-api.md) |
| `conversationsV1RoleApi` | 10 | [map/operations/conversations-v1-role-api.md](map/operations/conversations-v1-role-api.md) |
| `conversationsV1ServiceApi` | 4 | [map/operations/conversations-v1-service-api.md](map/operations/conversations-v1-service-api.md) |
| `conversationsV1UserApi` | 10 | [map/operations/conversations-v1-user-api.md](map/operations/conversations-v1-user-api.md) |
| `conversationsV1UserConversation` | 8 | [map/operations/conversations-v1-user-conversation.md](map/operations/conversations-v1-user-conversation.md) |
| `conversationsV1Webhook` | 14 | [map/operations/conversations-v1-webhook.md](map/operations/conversations-v1-webhook.md) |
| `conversationsV2ConfigurationApi` | 5 | [map/operations/conversations-v2-configuration-api.md](map/operations/conversations-v2-configuration-api.md) |
| `conversationsV2ConversationApi` | 6 | [map/operations/conversations-v2-conversation-api.md](map/operations/conversations-v2-conversation-api.md) |
| `conversationsV2ParticipantApi` | 4 | [map/operations/conversations-v2-participant-api.md](map/operations/conversations-v2-participant-api.md) |
| `conversationsV2CommunicationApi` | 3 | [map/operations/conversations-v2-communication-api.md](map/operations/conversations-v2-communication-api.md) |
| `conversationsV2ActionApi` | 2 | [map/operations/conversations-v2-action-api.md](map/operations/conversations-v2-action-api.md) |
| `conversationsV2Operation` | 1 | [map/operations/conversations-v2-operation.md](map/operations/conversations-v2-operation.md) |
| `taskrouterV1Activity` | 5 | [map/operations/taskrouter-v1-activity.md](map/operations/taskrouter-v1-activity.md) |
| `taskrouterV1Event` | 2 | [map/operations/taskrouter-v1-event.md](map/operations/taskrouter-v1-event.md) |
| `taskrouterV1Task` | 5 | [map/operations/taskrouter-v1-task.md](map/operations/taskrouter-v1-task.md) |
| `taskrouterV1TaskChannel` | 5 | [map/operations/taskrouter-v1-task-channel.md](map/operations/taskrouter-v1-task-channel.md) |
| `taskrouterV1TaskQueue` | 5 | [map/operations/taskrouter-v1-task-queue.md](map/operations/taskrouter-v1-task-queue.md) |
| `taskrouterV1TaskQueueBulkRealTimeStatistics` | 1 | [map/operations/taskrouter-v1-task-queue-bulk-real-time-statistics.md](map/operations/taskrouter-v1-task-queue-bulk-real-time-statistics.md) |
| `taskrouterV1TaskQueueCumulativeStatistics` | 1 | [map/operations/taskrouter-v1-task-queue-cumulative-statistics.md](map/operations/taskrouter-v1-task-queue-cumulative-statistics.md) |
| `taskrouterV1TaskQueueRealTimeStatistics` | 1 | [map/operations/taskrouter-v1-task-queue-real-time-statistics.md](map/operations/taskrouter-v1-task-queue-real-time-statistics.md) |
| `taskrouterV1TaskQueueStatistics` | 1 | [map/operations/taskrouter-v1-task-queue-statistics.md](map/operations/taskrouter-v1-task-queue-statistics.md) |
| `taskrouterV1TaskQueuesStatistics` | 1 | [map/operations/taskrouter-v1-task-queues-statistics.md](map/operations/taskrouter-v1-task-queues-statistics.md) |
| `taskrouterV1TaskReservation` | 3 | [map/operations/taskrouter-v1-task-reservation.md](map/operations/taskrouter-v1-task-reservation.md) |
| `taskrouterV1Worker` | 5 | [map/operations/taskrouter-v1-worker.md](map/operations/taskrouter-v1-worker.md) |
| `taskrouterV1WorkerChannel` | 3 | [map/operations/taskrouter-v1-worker-channel.md](map/operations/taskrouter-v1-worker-channel.md) |
| `taskrouterV1WorkerReservation` | 3 | [map/operations/taskrouter-v1-worker-reservation.md](map/operations/taskrouter-v1-worker-reservation.md) |
| `taskrouterV1WorkerStatistics` | 1 | [map/operations/taskrouter-v1-worker-statistics.md](map/operations/taskrouter-v1-worker-statistics.md) |
| `taskrouterV1WorkersCumulativeStatistics` | 1 | [map/operations/taskrouter-v1-workers-cumulative-statistics.md](map/operations/taskrouter-v1-workers-cumulative-statistics.md) |
| `taskrouterV1WorkersRealTimeStatistics` | 1 | [map/operations/taskrouter-v1-workers-real-time-statistics.md](map/operations/taskrouter-v1-workers-real-time-statistics.md) |
| `taskrouterV1WorkersStatistics` | 1 | [map/operations/taskrouter-v1-workers-statistics.md](map/operations/taskrouter-v1-workers-statistics.md) |
| `taskrouterV1Workflow` | 5 | [map/operations/taskrouter-v1-workflow.md](map/operations/taskrouter-v1-workflow.md) |
| `taskrouterV1WorkflowCumulativeStatistics` | 1 | [map/operations/taskrouter-v1-workflow-cumulative-statistics.md](map/operations/taskrouter-v1-workflow-cumulative-statistics.md) |
| `taskrouterV1WorkflowRealTimeStatistics` | 1 | [map/operations/taskrouter-v1-workflow-real-time-statistics.md](map/operations/taskrouter-v1-workflow-real-time-statistics.md) |
| `taskrouterV1WorkflowStatistics` | 1 | [map/operations/taskrouter-v1-workflow-statistics.md](map/operations/taskrouter-v1-workflow-statistics.md) |
| `taskrouterV1WorkspaceApi` | 5 | [map/operations/taskrouter-v1-workspace-api.md](map/operations/taskrouter-v1-workspace-api.md) |
| `taskrouterV1WorkspaceCumulativeStatistics` | 1 | [map/operations/taskrouter-v1-workspace-cumulative-statistics.md](map/operations/taskrouter-v1-workspace-cumulative-statistics.md) |
| `taskrouterV1WorkspaceRealTimeStatistics` | 1 | [map/operations/taskrouter-v1-workspace-real-time-statistics.md](map/operations/taskrouter-v1-workspace-real-time-statistics.md) |
| `taskrouterV1WorkspaceStatistics` | 1 | [map/operations/taskrouter-v1-workspace-statistics.md](map/operations/taskrouter-v1-workspace-statistics.md) |
| `trusthubV1ComplianceInquiries` | 2 | [map/operations/trusthub-v1-compliance-inquiries.md](map/operations/trusthub-v1-compliance-inquiries.md) |
| `trusthubV1ComplianceRegistrationInquiries` | 2 | [map/operations/trusthub-v1-compliance-registration-inquiries.md](map/operations/trusthub-v1-compliance-registration-inquiries.md) |
| `trusthubV1ComplianceTollfreeInquiries` | 1 | [map/operations/trusthub-v1-compliance-tollfree-inquiries.md](map/operations/trusthub-v1-compliance-tollfree-inquiries.md) |
| `trusthubV1CustomerProfiles` | 5 | [map/operations/trusthub-v1-customer-profiles.md](map/operations/trusthub-v1-customer-profiles.md) |
| `trusthubV1CustomerProfilesChannelEndpointAssignment` | 4 | [map/operations/trusthub-v1-customer-profiles-channel-endpoint-assignment.md](map/operations/trusthub-v1-customer-profiles-channel-endpoint-assignment.md) |
| `trusthubV1CustomerProfilesEntityAssignments` | 4 | [map/operations/trusthub-v1-customer-profiles-entity-assignments.md](map/operations/trusthub-v1-customer-profiles-entity-assignments.md) |
| `trusthubV1CustomerProfilesEvaluations` | 3 | [map/operations/trusthub-v1-customer-profiles-evaluations.md](map/operations/trusthub-v1-customer-profiles-evaluations.md) |
| `trusthubV1EndUserApi` | 5 | [map/operations/trusthub-v1-end-user-api.md](map/operations/trusthub-v1-end-user-api.md) |
| `trusthubV1EndUserType` | 2 | [map/operations/trusthub-v1-end-user-type.md](map/operations/trusthub-v1-end-user-type.md) |
| `trusthubV1PoliciesApi` | 2 | [map/operations/trusthub-v1-policies-api.md](map/operations/trusthub-v1-policies-api.md) |
| `trusthubV1SupportingDocumentApi` | 5 | [map/operations/trusthub-v1-supporting-document-api.md](map/operations/trusthub-v1-supporting-document-api.md) |
| `trusthubV1SupportingDocumentType` | 2 | [map/operations/trusthub-v1-supporting-document-type.md](map/operations/trusthub-v1-supporting-document-type.md) |
| `trusthubV1TrustProducts` | 5 | [map/operations/trusthub-v1-trust-products.md](map/operations/trusthub-v1-trust-products.md) |
| `trusthubV1TrustProductsChannelEndpointAssignment` | 4 | [map/operations/trusthub-v1-trust-products-channel-endpoint-assignment.md](map/operations/trusthub-v1-trust-products-channel-endpoint-assignment.md) |
| `trusthubV1TrustProductsEntityAssignments` | 4 | [map/operations/trusthub-v1-trust-products-entity-assignments.md](map/operations/trusthub-v1-trust-products-entity-assignments.md) |
| `trusthubV1TrustProductsEvaluations` | 3 | [map/operations/trusthub-v1-trust-products-evaluations.md](map/operations/trusthub-v1-trust-products-evaluations.md) |
| `proxyV1Interaction` | 3 | [map/operations/proxy-v1-interaction.md](map/operations/proxy-v1-interaction.md) |
| `proxyV1MessageInteraction` | 3 | [map/operations/proxy-v1-message-interaction.md](map/operations/proxy-v1-message-interaction.md) |
| `proxyV1Participant` | 4 | [map/operations/proxy-v1-participant.md](map/operations/proxy-v1-participant.md) |
| `proxyV1PhoneNumber` | 5 | [map/operations/proxy-v1-phone-number.md](map/operations/proxy-v1-phone-number.md) |
| `proxyV1ServiceApi` | 5 | [map/operations/proxy-v1-service-api.md](map/operations/proxy-v1-service-api.md) |
| `proxyV1Session` | 5 | [map/operations/proxy-v1-session.md](map/operations/proxy-v1-session.md) |
| `studioV1Engagement` | 4 | [map/operations/studio-v1-engagement.md](map/operations/studio-v1-engagement.md) |
| `studioV1EngagementContext` | 1 | [map/operations/studio-v1-engagement-context.md](map/operations/studio-v1-engagement-context.md) |
| `studioV1Execution` | 5 | [map/operations/studio-v1-execution.md](map/operations/studio-v1-execution.md) |
| `studioV1ExecutionContext` | 1 | [map/operations/studio-v1-execution-context.md](map/operations/studio-v1-execution-context.md) |
| `studioV1ExecutionStep` | 2 | [map/operations/studio-v1-execution-step.md](map/operations/studio-v1-execution-step.md) |
| `studioV1ExecutionStepContext` | 1 | [map/operations/studio-v1-execution-step-context.md](map/operations/studio-v1-execution-step-context.md) |
| `studioV1FlowApi` | 3 | [map/operations/studio-v1-flow-api.md](map/operations/studio-v1-flow-api.md) |
| `studioV1Step` | 2 | [map/operations/studio-v1-step.md](map/operations/studio-v1-step.md) |
| `studioV1StepContext` | 1 | [map/operations/studio-v1-step-context.md](map/operations/studio-v1-step-context.md) |
| `studioV2Execution` | 5 | [map/operations/studio-v2-execution.md](map/operations/studio-v2-execution.md) |
| `studioV2ExecutionContext` | 1 | [map/operations/studio-v2-execution-context.md](map/operations/studio-v2-execution-context.md) |
| `studioV2ExecutionStep` | 2 | [map/operations/studio-v2-execution-step.md](map/operations/studio-v2-execution-step.md) |
| `studioV2ExecutionStepContext` | 1 | [map/operations/studio-v2-execution-step-context.md](map/operations/studio-v2-execution-step-context.md) |
| `studioV2FlowApi` | 5 | [map/operations/studio-v2-flow-api.md](map/operations/studio-v2-flow-api.md) |
| `studioV2FlowRevision` | 2 | [map/operations/studio-v2-flow-revision.md](map/operations/studio-v2-flow-revision.md) |
| `studioV2FlowTestUserApi` | 2 | [map/operations/studio-v2-flow-test-user-api.md](map/operations/studio-v2-flow-test-user-api.md) |
| `studioV2FlowValidateApi` | 1 | [map/operations/studio-v2-flow-validate-api.md](map/operations/studio-v2-flow-validate-api.md) |
| `syncV1Document` | 5 | [map/operations/sync-v1-document.md](map/operations/sync-v1-document.md) |
| `syncV1DocumentPermission` | 4 | [map/operations/sync-v1-document-permission.md](map/operations/sync-v1-document-permission.md) |
| `syncV1ServiceApi` | 5 | [map/operations/sync-v1-service-api.md](map/operations/sync-v1-service-api.md) |
| `syncV1StreamMessage` | 1 | [map/operations/sync-v1-stream-message.md](map/operations/sync-v1-stream-message.md) |
| `syncV1SyncList` | 5 | [map/operations/sync-v1-sync-list.md](map/operations/sync-v1-sync-list.md) |
| `syncV1SyncListItem` | 5 | [map/operations/sync-v1-sync-list-item.md](map/operations/sync-v1-sync-list-item.md) |
| `syncV1SyncListPermission` | 4 | [map/operations/sync-v1-sync-list-permission.md](map/operations/sync-v1-sync-list-permission.md) |
| `syncV1SyncMap` | 5 | [map/operations/sync-v1-sync-map.md](map/operations/sync-v1-sync-map.md) |
| `syncV1SyncMapItem` | 5 | [map/operations/sync-v1-sync-map-item.md](map/operations/sync-v1-sync-map-item.md) |
| `syncV1SyncMapPermission` | 4 | [map/operations/sync-v1-sync-map-permission.md](map/operations/sync-v1-sync-map-permission.md) |
| `syncV1SyncStream` | 5 | [map/operations/sync-v1-sync-stream.md](map/operations/sync-v1-sync-stream.md) |
| `flexV1Assessments` | 3 | [map/operations/flex-v1-assessments.md](map/operations/flex-v1-assessments.md) |
| `flexV1ChannelApi` | 4 | [map/operations/flex-v1-channel-api.md](map/operations/flex-v1-channel-api.md) |
| `flexV1ConfigurationApi` | 2 | [map/operations/flex-v1-configuration-api.md](map/operations/flex-v1-configuration-api.md) |
| `flexV1ConfiguredPlugin` | 2 | [map/operations/flex-v1-configured-plugin.md](map/operations/flex-v1-configured-plugin.md) |
| `flexV1FlexFlowApi` | 5 | [map/operations/flex-v1-flex-flow-api.md](map/operations/flex-v1-flex-flow-api.md) |
| `flexV1InsightsAssessmentsCommentApi` | 2 | [map/operations/flex-v1-insights-assessments-comment-api.md](map/operations/flex-v1-insights-assessments-comment-api.md) |
| `flexV1InsightsConversationsApi` | 1 | [map/operations/flex-v1-insights-conversations-api.md](map/operations/flex-v1-insights-conversations-api.md) |
| `flexV1InsightsQuestionnairesApi` | 5 | [map/operations/flex-v1-insights-questionnaires-api.md](map/operations/flex-v1-insights-questionnaires-api.md) |
| `flexV1InsightsQuestionnairesCategoryApi` | 4 | [map/operations/flex-v1-insights-questionnaires-category-api.md](map/operations/flex-v1-insights-questionnaires-category-api.md) |
| `flexV1InsightsQuestionnairesQuestionApi` | 4 | [map/operations/flex-v1-insights-questionnaires-question-api.md](map/operations/flex-v1-insights-questionnaires-question-api.md) |
| `flexV1InsightsSegmentsApi` | 1 | [map/operations/flex-v1-insights-segments-api.md](map/operations/flex-v1-insights-segments-api.md) |
| `flexV1InsightsSessionApi` | 1 | [map/operations/flex-v1-insights-session-api.md](map/operations/flex-v1-insights-session-api.md) |
| `flexV1InsightsSettingsAnswerSetsApi` | 1 | [map/operations/flex-v1-insights-settings-answer-sets-api.md](map/operations/flex-v1-insights-settings-answer-sets-api.md) |
| `flexV1InsightsSettingsCommentApi` | 1 | [map/operations/flex-v1-insights-settings-comment-api.md](map/operations/flex-v1-insights-settings-comment-api.md) |
| `flexV1InsightsUserRolesApi` | 1 | [map/operations/flex-v1-insights-user-roles-api.md](map/operations/flex-v1-insights-user-roles-api.md) |
| `flexV1InteractionApi` | 3 | [map/operations/flex-v1-interaction-api.md](map/operations/flex-v1-interaction-api.md) |
| `flexV1InteractionChannel` | 3 | [map/operations/flex-v1-interaction-channel.md](map/operations/flex-v1-interaction-channel.md) |
| `flexV1InteractionChannelInvite` | 2 | [map/operations/flex-v1-interaction-channel-invite.md](map/operations/flex-v1-interaction-channel-invite.md) |
| `flexV1InteractionChannelParticipant` | 3 | [map/operations/flex-v1-interaction-channel-participant.md](map/operations/flex-v1-interaction-channel-participant.md) |
| `flexV1InteractionTransfer` | 3 | [map/operations/flex-v1-interaction-transfer.md](map/operations/flex-v1-interaction-transfer.md) |
| `flexV1PluginApi` | 4 | [map/operations/flex-v1-plugin-api.md](map/operations/flex-v1-plugin-api.md) |
| `flexV1PluginArchiveApi` | 1 | [map/operations/flex-v1-plugin-archive-api.md](map/operations/flex-v1-plugin-archive-api.md) |
| `flexV1PluginConfigurationApi` | 3 | [map/operations/flex-v1-plugin-configuration-api.md](map/operations/flex-v1-plugin-configuration-api.md) |
| `flexV1PluginConfigurationArchiveApi` | 1 | [map/operations/flex-v1-plugin-configuration-archive-api.md](map/operations/flex-v1-plugin-configuration-archive-api.md) |
| `flexV1PluginReleaseApi` | 3 | [map/operations/flex-v1-plugin-release-api.md](map/operations/flex-v1-plugin-release-api.md) |
| `flexV1PluginVersionArchiveApi` | 1 | [map/operations/flex-v1-plugin-version-archive-api.md](map/operations/flex-v1-plugin-version-archive-api.md) |
| `flexV1PluginVersions` | 3 | [map/operations/flex-v1-plugin-versions.md](map/operations/flex-v1-plugin-versions.md) |
| `flexV1ProvisioningStatusApi` | 1 | [map/operations/flex-v1-provisioning-status-api.md](map/operations/flex-v1-provisioning-status-api.md) |
| `flexV1WebChannelApi` | 5 | [map/operations/flex-v1-web-channel-api.md](map/operations/flex-v1-web-channel-api.md) |
| `flexV2FlexUserApi` | 2 | [map/operations/flex-v2-flex-user-api.md](map/operations/flex-v2-flex-user-api.md) |
| `flexV2WebChannels` | 1 | [map/operations/flex-v2-web-channels.md](map/operations/flex-v2-web-channels.md) |
| `insightsV1Annotation` | 2 | [map/operations/insights-v1-annotation.md](map/operations/insights-v1-annotation.md) |
| `insightsV1CallApi` | 1 | [map/operations/insights-v1-call-api.md](map/operations/insights-v1-call-api.md) |
| `insightsV1CallSummariesApi` | 1 | [map/operations/insights-v1-call-summaries-api.md](map/operations/insights-v1-call-summaries-api.md) |
| `insightsV1CallSummaryApi` | 1 | [map/operations/insights-v1-call-summary-api.md](map/operations/insights-v1-call-summary-api.md) |
| `insightsV1ConferenceApi` | 2 | [map/operations/insights-v1-conference-api.md](map/operations/insights-v1-conference-api.md) |
| `insightsV1ConferenceParticipant` | 2 | [map/operations/insights-v1-conference-participant.md](map/operations/insights-v1-conference-participant.md) |
| `insightsV1Event` | 1 | [map/operations/insights-v1-event.md](map/operations/insights-v1-event.md) |
| `insightsV1Metric` | 1 | [map/operations/insights-v1-metric.md](map/operations/insights-v1-metric.md) |
| `insightsV1Participant` | 2 | [map/operations/insights-v1-participant.md](map/operations/insights-v1-participant.md) |
| `insightsV1Room` | 2 | [map/operations/insights-v1-room.md](map/operations/insights-v1-room.md) |
| `insightsV1Setting` | 2 | [map/operations/insights-v1-setting.md](map/operations/insights-v1-setting.md) |
| `insightsV1CreateAccountReport` | 1 | [map/operations/insights-v1-create-account-report.md](map/operations/insights-v1-create-account-report.md) |
| `insightsV1GetAccountReport` | 1 | [map/operations/insights-v1-get-account-report.md](map/operations/insights-v1-get-account-report.md) |
| `insightsV1CreateInboundPhoneNumbersReport` | 1 | [map/operations/insights-v1-create-inbound-phone-numbers-report.md](map/operations/insights-v1-create-inbound-phone-numbers-report.md) |
| `insightsV1GetInboundPhoneNumbersReport` | 1 | [map/operations/insights-v1-get-inbound-phone-numbers-report.md](map/operations/insights-v1-get-inbound-phone-numbers-report.md) |
| `insightsV1CreateOutboundPhoneNumbersReport` | 1 | [map/operations/insights-v1-create-outbound-phone-numbers-report.md](map/operations/insights-v1-create-outbound-phone-numbers-report.md) |
| `insightsV1GetOutboundPhoneNumbersReport` | 1 | [map/operations/insights-v1-get-outbound-phone-numbers-report.md](map/operations/insights-v1-get-outbound-phone-numbers-report.md) |
| `twilioInsights` | 3 | [map/operations/twilio-insights.md](map/operations/twilio-insights.md) |

---

## Models — where they live, how to build them

**Shapes live only in the source.** Every module under `src/models/` declares exactly one model type and the schema value beside it, and both are re-exported from the package root. Take the pair from an operation's **Type sources** table, or build the directory from the kind below. **Do not derive the path from the type name** — the transform is not reversible in general, and the table is the authority. Never grep for a type.

| Group | Count | Directory |
| --- | --- | --- |
| Objects (plain `type`, no class) | 838 | `src/models/` |
| Enums (open; const companion plus schema) | 399 | `src/models/` |
| Unions | 4 | `src/models/unions/` |
| Typed error classes (`ApiError` subclass, one per typed operation) | 39 | `src/`, in the declaring module's namespace |

Conventions: every model is a plain `type`, not a class — build one with an object literal; there is no constructor and no builder. `f: T` is required, `f?: T` is optional (omit the key), and `f: T | null` is a **required, nullable** field where `null` is a value distinct from an omitted key. Optional properties are declared `f?: T`, not `f?: T | undefined`, so under `exactOptionalPropertyTypes` you must **omit or spread** an absent field rather than assign `undefined` to it. A schema value is directly usable both ways: `Schema<T, W = Encoded<T>>` is `{ decode(v: unknown): T; encode(v: unknown): W }`, and `Encoded<T>` is the wire projection — a `Date` becomes `string | number`, a `Uint8Array` becomes a base64 `string`, recursing through arrays and objects. `EnumSchema<T>` adds `readonly values: readonly T[]`, so an enum's known set is testable at run time. Enums are **not** TypeScript `enum`s and are open: a `const` companion plus a union that includes `(string & {})` or `(number & {})`, so **any** value of the base type is assignable and the schema validates the base type only, never membership — read the member names and the values they send off the companion, and use `.values` to test membership yourself. A discriminated union is narrowed with an exhaustive `switch` on its tag, with no fallback arm and no type guard to import; one without a discriminant is narrowed on the shape of its arms, which its declaration spells out. A property default is filled by the SDK on **encode as well as decode**, so omitting one still sends it — read it off the `defaulted(…)` entry in the schema, or off the property's `@default`. A numeric property is a `number` whatever its format, and its schema follows the type. `type: integer` with no format, `int32` or `int64` rejects a fraction and any value outside the safe-integer range; `type: number` with no format, `float`, `double` or `bigdecimal` rejects a non-finite value. A property's wire name is its `_keysMap` entry in the schema and may differ from the TypeScript name — read it there rather than deriving it. A named spec schema whose resolved form is a bare container, or which is used only as a form-encoded body, gets no model file and no exported name: the first is written inline at each use site, the second is flattened onto the operation's request type, one field per property, so read that field list from the request type.

Every name comes from the package root — there is no default export, and no deep imports:

```ts
import { type AccountType, accountTypeSchema } from "twilio-sdk";
```

---

## Servers & auth

**Authentication is per operation.** Every operation declares the requirement it enforces and the SDK sends exactly that: **898 of the 898 operations** require a credential and **0** are public. Each block on a page above carries an **Auth** bullet naming its requirement, `none` included. There is no client-global switch and no per-call override.

| Scheme (as an **Auth** bullet names it) | Configured with | What the SDK sends |
| --- | --- | --- |
| `accountSidAuthToken` | `accountSidAuthToken: { username, password }` | `Authorization: Basic <base64 of username:password>`, UTF-8 |

A scheme **contributes** headers, query parameters and cookies rather than mutating the request, so a credential is encoded by exactly the code that encodes an operation's own parameters. The auth layer goes on **last**, which means a scheme's `Authorization` wins over one the operation declared.

**Composition is emitted, not configured.** Where the spec puts two schemes in one requirement the SDK sends **both**; where it lists alternatives the SDK sends the **first configured** one, in the order the **Auth** bullet prints them. The combinators that express this (`allAuth`, `anyAuth`, `noneAuth`) live in the generated resource modules and are **not exported**.

**A credential may be a function.** Every field typed `TokenProvider` is re-read on **every** request with no caching, so a key can rotate without rebuilding the client. An empty string counts as absent, and a function is treated as present without being invoked. The function is handed the call's `signal`, or one that never aborts when the call was given none, and the SDK waits for it to settle — so a function that fetches its credential should pass that signal on, or a cancelled call waits for the fetch to finish.

**An unconfigured scheme does not throw.** The request goes out without that credential and the server decides. So a 401 on a call you believed was authenticated is usually an unset credential field rather than an SDK failure — check the operation's **Auth** bullet against what the client was given.

**A 401 invalidates the cached credential.** On a **401** — 401 only, not 403 — the SDK clears whatever that operation's scheme had cached, so the *next* call re-acquires. The current request still rejects with the operation's `ApiError`. The credential fields are on `ClientOptions`.

**serverOptions.** 15 logical servers; each operation is bound to one at generation time, and a block carries a **Server** bullet only when its group is not `default`. Override `serverOptions.default`, `serverOptions.default1`, `serverOptions.default2`, `serverOptions.default3`, `serverOptions.default4`, `serverOptions.default5`, `serverOptions.default6`, `serverOptions.default7`, `serverOptions.default8`, `serverOptions.default9`, `serverOptions.default10`, `serverOptions.default11`, `serverOptions.default12`, `serverOptions.default13` and `serverOptions.default14`.

**Base URLs and overrides.** One row per group, and every cell is overridden at `serverOptions.<group>.<name>`, where `<name>` is `baseUrl` for the whole template or the variable name for one substitution. An override merges with the built-in defaults **key by key**.

| Group | Base URL template | Template variables (default) |
| --- | --- | --- |
| `default` | `https://api.twilio.com` | — |
| `default1` | `https://messaging.twilio.com` | — |
| `default2` | `https://content.twilio.com` | — |
| `default3` | `https://verify.twilio.com` | — |
| `default4` | `https://lookups.twilio.com` | — |
| `default5` | `https://numbers.twilio.com` | — |
| `default6` | `https://video.twilio.com` | — |
| `default7` | `https://conversations.twilio.com` | — |
| `default8` | `https://taskrouter.twilio.com` | — |
| `default9` | `https://trusthub.twilio.com` | — |
| `default10` | `https://proxy.twilio.com` | — |
| `default11` | `https://studio.twilio.com` | — |
| `default12` | `https://sync.twilio.com` | — |
| `default13` | `https://flex-api.twilio.com` | — |
| `default14` | `https://insights.twilio.com` | — |

A `baseUrl` override replaces the template verbatim; variable values are percent-encoded into it. Server variables are filled in once, as the client is built; only the path parameters are expanded per request.

Retries are configurable via `ClientOptions.retry` (`RetryOptions`, source `src/core/retry.ts`) — the field table is under Getting a client.

---

## Runtime & packaging

The facts that change what you type, and the floors that decide whether the package loads at all. This section is the home for all of them.

|  |  |
| --- | --- |
| One entry, two dialects | `import` resolves `dist/esm`, `require` resolves `dist/commonjs`, both through the single `.` export. In a TypeScript CommonJS file the typed spelling is `import sdk = require("twilio-sdk")`; a plain `require` destructure works at run time but yields no types. `instanceof` is reliable **within** one dialect — if your app loads both, the two copies declare separate error classes |
| Consumer compiler settings | Under `exactOptionalPropertyTypes`, **omit or spread** an absent optional rather than assigning `undefined` to it. Under `verbatimModuleSyntax`, names that carry no runtime value (the options types, every model type) must be imported with `import type` |
| Required globals, and only these | Always: `fetch` (or a replacement passed as the `fetch` option), `AbortController`, `AbortSignal.any`, `Headers`, `Request`, `URL`, `setTimeout` and `clearTimeout`, `JSON`, `BigInt`, and `console`, which is read as the package loads. Auth adds more, each reached only once the credential needing it is configured. `TextEncoder` and `btoa` build every `Authorization: Basic` value, sent on every request that authenticates with basic. `crypto.randomUUID` or `crypto.getRandomValues` mints the `Idempotency-Key` a non-GET call carries — **read and never required**, since a runtime offering neither fills the bytes from `Math.random` mixed with the clock and a per-process counter, so the header is always sent. Three more are **read and never required** — `process`, `navigator` and `EdgeRuntime`, which name the host in `X-APIMatic-OS` and `X-APIMatic-Runtime`. A runtime offering none of them sends neither header and works unchanged. `process.env.TWILIO_SDK_CLIENT_LOG` is read at most once, when the client is built and code sets neither a `logger` nor a valid `level`. Logging writes to `console` only as the default logger, and for the warning on a `TWILIO_SDK_CLIENT_LOG` value that is not a level. |
| Values that cross the boundary | `Date` for `date-time`, `string` for `date`, `ArrayBuffer` for an undeclared error body, `Headers` on a result and on a thrown `ResponseError`. The engine also carries a `bigint` int64 path and a base64 `bytes()` codec, reached only where a model uses them |
| Browser distribution | The package ships `dist/esm` and `dist/commonjs` and nothing else — **no bundle, no UMD file, no CDN artifact**. Use it through a bundler, which resolves `zod/v4-mini`, deduplicates it against your own copy and tree-shakes the rest |
| Other runtimes | Deno, Bun, Cloudflare Workers and Vercel Edge are all likely to work — the SDK needs only the globals above and imports no Node built-in — but **none of them is tested for this package**, so nothing here claims support for them |

The browser floor is set by `AbortSignal.any`, which every call uses to combine `RequestOptions.signal`, or a signal that never aborts when there is none, with the attempt's timer. The emitted output needs less: `tshy` builds at `target: ES2022`, so native `#private` fields and methods survive into `dist/`, and those load from Chrome 85, Firefox 90 and Safari 15.

| Browser | Minimum |
| --- | --- |
| Chrome / Edge | **116** |
| Firefox | **124** |
| Safari / iOS Safari | **17.4** |

Below that table the module still loads, down to the emitted-output floor, but every call rejects with a `TypeError`.

