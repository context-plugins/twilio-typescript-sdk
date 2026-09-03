<!-- Generated file — do not edit; regenerated with the SDK. -->

# SDK map — Twilio SDK (TypeScript)

> A generated table of contents for this SDK. Consult this map and its sub-pages to learn signatures, request-field placement, error types and server wiring **by lookup**. Model shapes are *not* duplicated here — the map names the file declaring each type and the schema value exported beside it; read the shape there. The compiler is the backstop: a wrong name fails to build.

|  |  |
| --- | --- |
| SDK display name | Twilio SDK |
| Package | `twilio-sdk` |
| Package version | `1.0.0` |
| API spec version | `1.0.0` |
| Import specifier | `twilio-sdk` — the package root is the **only** entry. Deep imports (`twilio-sdk/models/...`) do not resolve; the `exports` map exposes `.` and `./package.json` and nothing else |
| Module format | dual ESM + CommonJS, as folder dialects (`dist/esm`, `dist/commonjs`), each with its own `package.json` marker. No `.mjs`, `.cjs`, `.d.mts` or `.d.cts` files exist |
| Node floor | `>=20` (`engines.node`) |
| TypeScript floor | a resolver that reads `exports` (4.7+), plus whatever the pinned `zod` requires — `zod@4` needs 5.5 or later. The public `.d.ts` chain reaches `zod/v4-mini`, so this is a real constraint rather than a build-tool version |
| Runtime dependency | `zod` (`^3.25.0 \|\| ^4.0.0`), imported as `zod/v4-mini`. The only runtime dependency |
| Generator | APIMatic |

Staleness check: the API spec version above changes when the SDK is regenerated from a new spec. If a lookup here fails to compile, trust the compiler and re-read the source file named in the row.

All `Source` paths on this map and its sub-pages are relative to the **SDK root** — the directory holding this file and `package.json` — never to the page that carries them: a page two directories deep writes exactly what a page at the root would. The package ships its `src/` tree, so the same paths resolve inside `node_modules/twilio-sdk/` too. An import specifier ending `.js` inside that source is the NodeNext spelling of the sibling `.ts` file.

---

## Getting a client

```ts
import { ServerEnvironment, TwilioSdkClient } from "twilio-sdk";

const client = new TwilioSdkClient({
  serverEnvironment: ServerEnvironment.Production,
  accountSidAuthToken: { username: "YOUR_USERNAME", password: "YOUR_PASSWORD" },
});
```

The only constructor is `new TwilioSdkClient(clientOptions: Partial<ClientOptions> = {})`, so `new TwilioSdkClient()` is valid. Resources are memoized lazy getters on the client — `client.api20100401Account`, `client.api20100401AddOnResult`, `client.api20100401Address`, `client.api20100401AllTime`, `client.api20100401Application`, `client.api20100401AssignedAddOn`, `client.api20100401AssignedAddOnExtension`, `client.api20100401AuthCallsCredentialListMapping`, `client.api20100401AuthCallsIpAccessControlListMapping`, `client.api20100401AuthRegistrationsCredentialListMapping`, `client.api20100401AuthorizedConnectApp`, `client.api20100401AvailablePhoneNumberCountry`, `client.api20100401Balance`, `client.api20100401Call`, `client.api20100401CallNotification`, `client.api20100401CallRecording`, `client.api20100401CallTranscription`, `client.api20100401Conference`, `client.api20100401ConferenceRecording`, `client.api20100401ConnectApp`, `client.api20100401Credential`, `client.api20100401CredentialList`, `client.api20100401CredentialListMapping`, `client.api20100401Daily`, `client.api20100401Data`, `client.api20100401DependentPhoneNumber`, `client.api20100401Domain`, `client.api20100401Event`, `client.api20100401Feedback`, `client.api20100401IncomingPhoneNumber`, `client.api20100401IncomingPhoneNumberLocal`, `client.api20100401IncomingPhoneNumberMobile`, `client.api20100401IncomingPhoneNumberTollFree`, `client.api20100401IpAccessControlList`, `client.api20100401IpAccessControlListMapping`, `client.api20100401Key`, `client.api20100401LastMonth`, `client.api20100401Local`, `client.api20100401MachineToMachine`, `client.api20100401Media`, `client.api20100401MediaInstance`, `client.api20100401Member`, `client.api20100401Message`, `client.api20100401Mobile`, `client.api20100401Monthly`, `client.api20100401National`, `client.api20100401NewKey`, `client.api20100401NewSigningKey`, `client.api20100401Notification`, `client.api20100401OutgoingCallerId`, `client.api20100401Participant`, `client.api20100401Payload`, `client.api20100401Payment`, `client.api20100401Queue`, `client.api20100401Record`, `client.api20100401Recording`, `client.api20100401RecordingTranscription`, `client.api20100401SharedCost`, `client.api20100401ShortCode`, `client.api20100401SigningKey`, `client.api20100401SipIpAddress`, `client.api20100401Siprec`, `client.api20100401Stream`, `client.api20100401ThisMonth`, `client.api20100401Today`, `client.api20100401Token`, `client.api20100401TollFree`, `client.api20100401Transcription`, `client.api20100401Trigger`, `client.api20100401UserDefinedMessage`, `client.api20100401UserDefinedMessageSubscription`, `client.api20100401ValidationRequest`, `client.api20100401Voip`, `client.api20100401Yearly`, `client.api20100401Yesterday`, `client.messagingV1AlphaSender`, `client.messagingV1BrandRegistration`, `client.messagingV1BrandRegistrationOtp`, `client.messagingV1BrandVetting`, `client.messagingV1ChannelSender`, `client.messagingV1Deactivations`, `client.messagingV1DestinationAlphaSender`, `client.messagingV1DomainCerts`, `client.messagingV1DomainConfigApi`, `client.messagingV1DomainConfigMessagingServiceApi`, `client.messagingV1ExternalCampaignApi`, `client.messagingV1LinkshorteningMessagingServiceApi`, `client.messagingV1LinkshorteningMessagingServiceDomainAssociationApi`, `client.messagingV1PhoneNumber`, `client.messagingV1RequestManagedCertApi`, `client.messagingV1ServiceApi`, `client.messagingV1ShortCode`, `client.messagingV1TollfreeVerificationApi`, `client.messagingV1UsAppToPerson`, `client.messagingV1UsAppToPersonUsecase`, `client.messagingV1UsecaseApi`, `client.messagingV1DomainValidateDns`, `client.messagingV2ChannelsSender`, `client.messagingV2TypingIndicator`, `client.messagingV2DomainCerts`, `client.messagingV3TypingIndicator`, `client.contentv1ApprovalCreate`, `client.contentv1ApprovalFetch`, `client.contentv1ContentApi`, `client.contentv1ContentAndApprovalsApi`, `client.contentv1LegacyContentApi`, `client.contentV2Content`, `client.contentV2ContentAndApprovals`, `client.verifyV2AccessToken`, `client.verifyV2Bucket`, `client.verifyV2Challenge`, `client.verifyV2Entity`, `client.verifyV2Factor`, `client.verifyV2FormApi`, `client.verifyV2MessagingConfiguration`, `client.verifyV2NewFactor`, `client.verifyV2Notification`, `client.verifyV2RateLimit`, `client.verifyV2SafelistApi`, `client.verifyV2ServiceApi`, `client.verifyV2Template`, `client.verifyV2Verification`, `client.verifyV2VerificationAttemptApi`, `client.verifyV2VerificationAttemptsSummaryApi`, `client.verifyV2VerificationCheck`, `client.verifyV2Webhook`, `client.verifyV2NewChallenge`, `client.lookupsV1PhoneNumberApi`, `client.lookupsV2PhoneNumber`, `client.numbersV1BulkEligibilityApi`, `client.numbersV1EligibilityApi`, `client.numbersV1PortingPortInApi`, `client.numbersV1PortingPortInPhoneNumberApi`, `client.numbersV1PortingPortabilityApi`, `client.numbersV1PortingWebhookConfigurationApi`, `client.numbersV1PortingWebhookConfigurationDeleteApi`, `client.numbersV1PortingWebhookConfigurationFetchApi`, `client.numbersV1SigningRequestConfigurationApi`, `client.numbersV1SenderIdRegistration`, `client.numbersV1SenderIdRegistrationEmbeddedSession`, `client.numbersV2AuthorizationDocumentApi`, `client.numbersV2BulkHostedNumberOrderApi`, `client.numbersV2Bundle`, `client.numbersV2BundleCloneApi`, `client.numbersV2BundleCopy`, `client.numbersV2DependentHostedNumberOrder`, `client.numbersV2EndUser`, `client.numbersV2EndUserType`, `client.numbersV2Evaluation`, `client.numbersV2HostedNumberOrderApi`, `client.numbersV2ItemAssignment`, `client.numbersV2Regulation`, `client.numbersV2ReplaceItems`, `client.numbersV2SupportingDocument`, `client.numbersV2SupportingDocumentType`, `client.v2ShortCodeApplications`, `client.numbersV3HostedNumbersHostedNumberOrderApi`, `client.videoV1Anonymize`, `client.videoV1CompositionApi`, `client.videoV1CompositionHookApi`, `client.videoV1CompositionSettingsApi`, `client.videoV1Participant`, `client.videoV1PublishedTrack`, `client.videoV1RecordingApi`, `client.videoV1RecordingRules`, `client.videoV1RecordingSettingsApi`, `client.videoV1RoomApi`, `client.videoV1RoomRecording`, `client.videoV1SubscribeRules`, `client.videoV1SubscribedTrack`, `client.videoV1Transcriptions`, `client.conversationsV1AddressConfiguration`, `client.conversationsV1Binding`, `client.conversationsV1ConfigurationApi`, `client.conversationsV1ConversationApi`, `client.conversationsV1ConversationWithParticipantsApi`, `client.conversationsV1CredentialApi`, `client.conversationsV1DeliveryReceipt`, `client.conversationsV1Message`, `client.conversationsV1Notification`, `client.conversationsV1Participant`, `client.conversationsV1ParticipantConversationApi`, `client.conversationsV1RoleApi`, `client.conversationsV1ServiceApi`, `client.conversationsV1UserApi`, `client.conversationsV1UserConversation`, `client.conversationsV1Webhook`, `client.conversationsV2ConfigurationApi`, `client.conversationsV2ConversationApi`, `client.conversationsV2ParticipantApi`, `client.conversationsV2CommunicationApi`, `client.conversationsV2ActionApi`, `client.conversationsV2Operation`, `client.taskrouterV1Activity`, `client.taskrouterV1Event`, `client.taskrouterV1Task`, `client.taskrouterV1TaskChannel`, `client.taskrouterV1TaskQueue`, `client.taskrouterV1TaskQueueBulkRealTimeStatistics`, `client.taskrouterV1TaskQueueCumulativeStatistics`, `client.taskrouterV1TaskQueueRealTimeStatistics`, `client.taskrouterV1TaskQueueStatistics`, `client.taskrouterV1TaskQueuesStatistics`, `client.taskrouterV1TaskReservation`, `client.taskrouterV1Worker`, `client.taskrouterV1WorkerChannel`, `client.taskrouterV1WorkerReservation`, `client.taskrouterV1WorkerStatistics`, `client.taskrouterV1WorkersCumulativeStatistics`, `client.taskrouterV1WorkersRealTimeStatistics`, `client.taskrouterV1WorkersStatistics`, `client.taskrouterV1Workflow`, `client.taskrouterV1WorkflowCumulativeStatistics`, `client.taskrouterV1WorkflowRealTimeStatistics`, `client.taskrouterV1WorkflowStatistics`, `client.taskrouterV1WorkspaceApi`, `client.taskrouterV1WorkspaceCumulativeStatistics`, `client.taskrouterV1WorkspaceRealTimeStatistics`, `client.taskrouterV1WorkspaceStatistics`, `client.trusthubV1ComplianceInquiries`, `client.trusthubV1ComplianceRegistrationInquiries`, `client.trusthubV1ComplianceTollfreeInquiries`, `client.trusthubV1CustomerProfiles`, `client.trusthubV1CustomerProfilesChannelEndpointAssignment`, `client.trusthubV1CustomerProfilesEntityAssignments`, `client.trusthubV1CustomerProfilesEvaluations`, `client.trusthubV1EndUserApi`, `client.trusthubV1EndUserType`, `client.trusthubV1PoliciesApi`, `client.trusthubV1SupportingDocumentApi`, `client.trusthubV1SupportingDocumentType`, `client.trusthubV1TrustProducts`, `client.trusthubV1TrustProductsChannelEndpointAssignment`, `client.trusthubV1TrustProductsEntityAssignments`, `client.trusthubV1TrustProductsEvaluations`, `client.proxyV1Interaction`, `client.proxyV1MessageInteraction`, `client.proxyV1Participant`, `client.proxyV1PhoneNumber`, `client.proxyV1ServiceApi`, `client.proxyV1Session`, `client.studioV1Engagement`, `client.studioV1EngagementContext`, `client.studioV1Execution`, `client.studioV1ExecutionContext`, `client.studioV1ExecutionStep`, `client.studioV1ExecutionStepContext`, `client.studioV1FlowApi`, `client.studioV1Step`, `client.studioV1StepContext`, `client.studioV2Execution`, `client.studioV2ExecutionContext`, `client.studioV2ExecutionStep`, `client.studioV2ExecutionStepContext`, `client.studioV2FlowApi`, `client.studioV2FlowRevision`, `client.studioV2FlowTestUserApi`, `client.studioV2FlowValidateApi`, `client.syncV1Document`, `client.syncV1DocumentPermission`, `client.syncV1ServiceApi`, `client.syncV1StreamMessage`, `client.syncV1SyncList`, `client.syncV1SyncListItem`, `client.syncV1SyncListPermission`, `client.syncV1SyncMap`, `client.syncV1SyncMapItem`, `client.syncV1SyncMapPermission`, `client.syncV1SyncStream`, `client.flexV1Assessments`, `client.flexV1ChannelApi`, `client.flexV1ConfigurationApi`, `client.flexV1ConfiguredPlugin`, `client.flexV1FlexFlowApi`, `client.flexV1InsightsAssessmentsCommentApi`, `client.flexV1InsightsConversationsApi`, `client.flexV1InsightsQuestionnairesApi`, `client.flexV1InsightsQuestionnairesCategoryApi`, `client.flexV1InsightsQuestionnairesQuestionApi`, `client.flexV1InsightsSegmentsApi`, `client.flexV1InsightsSessionApi`, `client.flexV1InsightsSettingsAnswerSetsApi`, `client.flexV1InsightsSettingsCommentApi`, `client.flexV1InsightsUserRolesApi`, `client.flexV1InteractionApi`, `client.flexV1InteractionChannel`, `client.flexV1InteractionChannelInvite`, `client.flexV1InteractionChannelParticipant`, `client.flexV1InteractionTransfer`, `client.flexV1PluginApi`, `client.flexV1PluginArchiveApi`, `client.flexV1PluginConfigurationApi`, `client.flexV1PluginConfigurationArchiveApi`, `client.flexV1PluginReleaseApi`, `client.flexV1PluginVersionArchiveApi`, `client.flexV1PluginVersions`, `client.flexV1ProvisioningStatusApi`, `client.flexV1WebChannelApi`, `client.flexV2FlexUserApi`, `client.flexV2WebChannels`, `client.insightsV1Annotation`, `client.insightsV1CallApi`, `client.insightsV1CallSummariesApi`, `client.insightsV1CallSummaryApi`, `client.insightsV1ConferenceApi`, `client.insightsV1ConferenceParticipant`, `client.insightsV1Event`, `client.insightsV1Metric`, `client.insightsV1Participant`, `client.insightsV1Room`, `client.insightsV1Setting`, `client.insightsV1CreateAccountReport`, `client.insightsV1GetAccountReport`, `client.insightsV1CreateInboundPhoneNumbersReport`, `client.insightsV1GetInboundPhoneNumbersReport`, `client.insightsV1CreateOutboundPhoneNumbersReport`, `client.insightsV1GetOutboundPhoneNumbersReport`, `client.twilioInsights` — and their classes are exported only for their merged namespaces and for `instanceof`; their constructors take engine internals that are not exported, so reach a resource only through its getter. 11 operations are methods on the client itself.

All `ClientOptions` fields (source: `src/client-options.ts`; every field is `readonly`):

| Field | Type | Default |
| --- | --- | --- |
| `serverEnvironment` | `ServerEnvironment` | `ServerEnvironment.Production` |
| `serverOptions` | `ServerOptions` | `{}` — each resolver merges its own per-environment defaults in |
| `timeout` | `number` (ms) | `60_000` |
| `fetch` | `FetchLike \| undefined` | the global `fetch`, resolved by the transport |
| `accountSidAuthToken` | `BasicAuthCredentials \| undefined` | unset |

The 1 auth field is optional, and an unset one is not an error — the operation that wanted it simply sends no credential. What each one puts on the wire, and which operations require it, are under Servers & auth.

Two engine behaviours the table cannot show. A non-finite or non-positive `timeout` is **not** "no timeout" — the transport (`src/core/raw-client.ts`) falls back to its own ceiling and clamps anything above it. And when no `fetch` is reachable the **constructor** throws `SdkError`, not the first call.

**`ClientOptions.fetch` is the one extension point** — there are no hooks, no middleware and no interceptors, so a proxy, a custom agent, extra headers, retries or request logging all go here. A replacement **must forward `init.signal`** to whatever actually performs the request; spreading `...init` does it. Drop it and both the per-call signal and `timeout` go inert — the call neither aborts nor times out.

**Cancellation.** The `signal` on `RequestOptions` is the whole per-request surface. An already-aborted signal rejects immediately, `err.cause` is whatever was passed to `abort()`, and the client-level `timeout` surfaces through the same branch with `err.kind === "timeout"`. There is no per-request timeout.

The entire per-request surface is the optional second argument of every operation:

| Type | Members | Source |
| --- | --- | --- |
| `RequestOptions` | `signal?: AbortSignal` | `src/core/api-request.ts` |

**Not on this SDK.** These are absent by design, not undocumented. This table ships with `src/core/` and is versioned with it.

| You might reach for | Reality |
| --- | --- |
| `maxRetries`, backoff, `Retry-After` handling | no retries. A failed call rejects once |
| a logger, `logLevel`, request/response logging | none. `src/core/` contains no `console` call |
| hooks, middleware, interceptors, `onRequest`/`onResponse` | none. `fetch` is the one extension point |
| pagination, `for await`, auto-paging helpers | no operation is paginated and nothing is async-iterable |
| SSE, `text/event-stream`, `ReadableStream` | no streaming. Every decoder reads the body to completion |
| `FormData`, `Blob`, `File`, multipart, binary bodies | none. The only body kinds are empty, JSON, form-urlencoded and text |
| per-request `headers`, `timeout`, `baseUrl`, idempotency key | none. `RequestOptions` is `{ signal }` |
| the raw `fetch` `Response` | deliberately unreachable. `status` and `headers` are on `asApiResult()` and on a thrown `ResponseError` |

---

## Error-handling model (read once — applies to every operation)

Operations are **throw-based**, and failures fall into **two disjoint families**. Neither is `instanceof` the other, so the two branches can never overlap and a complete `catch` needs both. `instanceof` is reliable **within one dialect**: a process that loads both — `import` in one file, `require` in another — gets two independent copies of every error class, and `instanceof` across that boundary is `false`. Narrow on `err.kind` or on `err.payload.kind` there, or on `err.name`, which is stable across copies.

- **Family A — the API answered with an error status.** The call rejects with `ResponseError`, or with a subclass of it where the spec declared error bodies for that operation. `err.payload` is a discriminated union whose `kind` names the **response schema the spec declared**, *not* the status code — so two statuses sharing one schema share one arm, and `"undeclared"` is an always-present arm carrying the raw bytes.
- **Family B — no usable response was produced.** The call rejects with a member of the `TwilioSdkError` set. `TwilioSdkError` is **abstract**: use it for `instanceof`, never construct it.

Core types (public members with their declared types; all are `readonly`):

| Type | Public members | Source |
| --- | --- | --- |
| `ResponseError<P>` | `status: number` · `headers: Headers` · `payload: ErrorPayload<P>`, and a `message` of the form `<status> <statusText>` | `src/core/response-error.ts` |
| `Declared<K, B>` | `kind: K` · `body: B` | `src/core/response-error.ts` |
| `ErrorPayload<P>` | `P` or `{ kind: "undeclared"; rawBody: ArrayBuffer }` | `src/core/response-error.ts` |
| `TwilioSdkError` (abstract; declared as `CoreError`) | `kind: ErrorKind` · `message` · `cause` | `src/core/errors.ts` |
| `SchemaError` | `kind: "schema"` · `rawBody: unknown` | `src/core/validation/schema-error.ts` |
| `AuthError` | `kind: "auth"` · `failures: readonly unknown[]` | `src/core/errors.ts` |
| `ApiResult<T, E>` | on success `{ ok: true; status; headers; value: T }`, on failure `{ ok: false; status; headers; errorMessage: string; error }` — `error` carries the **payload**, not the error object | `src/core/api-promise.ts` |

`ErrorKind` is one value per Family B class: `connection` (the `fetch` call rejected, or the body read failed mid-stream), `timeout` (the client-level timeout elapsed), `abort` (the per-call signal aborted, including one that was already aborted), `sdk` (a defect on the SDK side), `schema` (a value failed its schema in **either** direction — inbound the response body was malformed, outbound nothing was sent at all), and `auth` (a credential could not be **obtained**).

**`AuthError` is about obtaining a credential, never about being refused one.** A 401 *from the API* is a Family A `ResponseError` like any other status, so the two are disjoint and one `catch` arm cannot absorb the other. A 401 does have one auth consequence: it invalidates whatever that operation's scheme had cached, so the **next** call re-acquires. The current request is not retried — see Servers & auth.

```ts
try {
  const response = await client.createLookupPhoneNumberOverrides({ field, phoneNumber });
} catch (err) {
  if (err instanceof ResponseError) {
    // TODO: the API answered with an error status — read err.status and err.payload
  }
  if (err instanceof TwilioSdkError) {
    // TODO: no usable response was produced — err.kind says which
  }
}
```

A typed subclass narrows further, on `err.payload.kind`. Which arms an operation declares, with the status each covers, is the **Error arms** bullet on its page below.

**Matcher precedence** for a subclass with several arms: an exact numeric status is looked up across the whole table **first**; only then does the first covering wildcard or range win.

**The non-throwing form exists on every operation.** `.asApiResult()` returns `ApiResult<T, E>` and does **not** reject for an HTTP error status — it still rejects for Family B. It must be called on the value the operation returned: `ApiPromise` overrides `Symbol.species`, so `.then()`, `.catch()` and `.finally()` hand back a plain `Promise` and the method is gone.

Of **898 operations**, **39** declare typed error bodies and **859** reject with the base `ResponseError`, whose payload is always the `"undeclared"` arm.

---

## Operations — by resource (319 groups, 898 operations)

Each page below carries one block per operation, with bullets in the fixed order **Server**, **Signature**, **Wire**, **Auth**, **Request body**, **SDK-sent**, **Returns**, **Error**, **Error arms**, then a **Fields** table mapping every request field to the channel it travels on, and a **Type sources** table naming the declaring file and schema value of every type the operation mentions. With `api-reference.md` documenting operations only, that table is the route from an operation to the file declaring what it takes.

**Each block states what is specific to its operation. Everything in the table below holds for EVERY operation unless that operation says otherwise, so a block silent on one of these points is telling you the default here applies — take it and move on rather than opening the source to confirm it.**

| Applies to every operation | Stated where | A block departs from it only by |
| --- | --- | --- |
| **Call shape `op(request, options?)`** — one flat request object first, the per-call options second. There is no positional overload, and no per-call base URL, header, timeout, retry or auth override | here, Getting a client | never — it always holds |
| **The request object is flat and channel-blind.** A field named `body` *is* the whole request body; every other field is fanned out to path, query, header or form by the SDK. Nothing in the object is nested by channel | here | never — the **Fields** table `Channel` column always resolves it |
| **Throw-based, returning `ApiPromise<T, E>`.** `await` it for `T`; call `.asApiResult()` on the returned value for the non-throwing `ApiResult<T, E>`. No operation is result-only | here, Error-handling model | never |
| **`E` is the base `ResponseError`** and the payload is always the `"undeclared"` arm | Error-handling model | the spec declared error bodies — the **Error** bullet names a subclass and an **Error arms** bullet gives each arm's tag, status and body |
| **The request body and its media type are stated on every block**, by a **Request body** bullet that is never omitted. `none` means no body **and no `Content-Type` header** | here | never — the bullet is always present |
| **Resolves once, to one whole value.** No pagination, no streaming, no SSE, no async iterables, no partial results, no multipart and no binary anywhere | here, Not on this SDK | never at this SDK version |
| **Server group `default`** | here, Servers & auth | the operation is on another group — its block carries a **Server** bullet |
| **Every operation states its auth requirement**, by an **Auth** bullet that is never omitted — one scheme, a composition over schemes, or `none` for a public operation | here, Servers & auth | never — the bullet is always present |
| **Every value is schema-encoded before the request is built** — a wrong type or format rejects and nothing is sent. **An omitted field that has a default is still sent, with that default**, filled by the SDK rather than by the server | here, Models | the field has a default — it appears in the **Fields** table `Default` column |
| **Field names are TypeScript camelCase and the wire name is the same** | here | some field differs — the **Fields** table gains a `Wire` column, where an em dash means "same as the field name" |
| **Arrays repeat their key and objects bracket-expand** | the serialization block below | never — this SDK declares no per-field serialization style, so every array takes this one |

**Wire serialization, once, for every channel** (source: `src/core/param-value.ts`, `src/core/url.ts`, `src/core/headers.ts`, `src/core/params.ts`). This block ships with `src/core/` and is versioned with it:

- **`path`** takes no style. An array is comma-joined with each element percent-encoded **separately**; an object becomes one percent-encoded JSON document inside the segment. A field whose encoded value is `undefined` throws `SdkError` naming the unfilled placeholder; `null` collapses the segment.
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

**Shapes live only in the source.** Every module under `src/models/` declares exactly one model type and the schema value beside it, and both are re-exported from the package root. So there are two facts per type, and the map gives both: the **names you import** and the **file you read**.

```ts
import { type AccountType, accountTypeSchema } from "twilio-sdk";
```

Take the pair from an operation's **Type sources** table. **Do not derive the path from the type name** — the transform is not reversible in general, and the table is the authority. There is no default export.

| Group | Count | Directory |
| --- | --- | --- |
| Objects | 838 | `src/models/` |
| Enums (open; const companion plus schema) | 399 | `src/models/` |
| Discriminated unions | 1 | `src/models/unions/` |
| Unions without a discriminant | 3 | `src/models/unions/` |

**Conventions.** Every model is a plain `type`, not a class — build one with an object literal; there is no constructor and no builder. `f: T` is required, `f?: T` is optional (omit the key), and `f: T | null` is a **required, nullable** field where `null` is a value distinct from an omitted key. Optional properties are declared `f?: T`, not `f?: T | undefined`, so under `exactOptionalPropertyTypes` you must **omit or spread** an absent field rather than assign `undefined` to it.

**Schema companions.** `Schema<T, W = Encoded<T>>` is `{ decode(v: unknown): T; encode(v: unknown): W }`, so a schema value is directly usable both ways. `Encoded<T>` is the wire projection — a `Date` becomes `string | number`, a `Uint8Array` becomes a base64 `string`, recursing through arrays and objects. `EnumSchema<T>` adds `readonly values: readonly T[]`, so an enum's known set is testable at run time.

**Enums are open, and are not TypeScript `enum`s.** Each is a `const` companion object plus a union that includes `(string & {})` or `(number & {})`, so **any** value of the right base type is assignable and the schema validates the base type only, never membership. That is deliberate: an unrecognized server value round-trips instead of throwing. Use `.values` to test membership yourself.

| Enum | Members (member to wire value) | Schema value |
| --- | --- | --- |
| `AccountType` | `Isv` to `"ISV"` · `IsvSubAccount` to `"ISVSubAccount"` | `accountTypeSchema` |
| `AmdStatusCallbackMethod` | `Get` to `"GET"` · `Post` to `"POST"` | `amdStatusCallbackMethodSchema` |
| `AnnounceMethod` | `Get` to `"GET"` · `Post` to `"POST"` | `announceMethodSchema` |
| `AnnounceMethod1` | `Get` to `"GET"` · `Post` to `"POST"` | `announceMethod1Schema` |
| `AsyncAmdStatusCallbackMethod` | `Get` to `"GET"` · `Post` to `"POST"` | `asyncAmdStatusCallbackMethodSchema` |
| `AuthenticatorAttachment` | `Platform` to `"platform"` · `CrossPlatform` to `"cross-platform"` | `authenticatorAttachmentSchema` |
| `AuthenticatorAttachment1` | `Platform` to `"platform"` · `CrossPlatform` to `"cross-platform"` · `Any` to `"any"` | `authenticatorAttachment1Schema` |
| `AuthenticatorAttachment2` | `Platform` to `"platform"` · `CrossPlatform` to `"cross-platform"` | `authenticatorAttachment2Schema` |
| `BusinessIdentity` | `Direct` to `"DIRECT"` · `Isv` to `"ISV"` | `businessIdentitySchema` |
| `CallbackMethod` | `Get` to `"GET"` · `Post` to `"POST"` | `callbackMethodSchema` |
| `CallbackMethod1` | `Get` to `"GET"` · `Post` to `"POST"` | `callbackMethod1Schema` |
| `CallbackMethod2` | `Post` to `"POST"` · `Put` to `"PUT"` | `callbackMethod2Schema` |
| `CampaignFrequency` | `OneMessagePerSignup` to `"ONE_MESSAGE_PER_SIGNUP"` · `LimitedNumberOfMessagesPerSignup` to `"LIMITED_NUMBER_OF_MESSAGES_PER_SIGNUP"` · `LimitedNumberOfMessagesAtRecurringIntervals` to `"LIMITED_NUMBER_OF_MESSAGES_AT_RECURRING_INTERVALS"` · `VariableNumberOfMessagesAtUnpredictableIntervals` to `"VARIABLE_NUMBER_OF_MESSAGES_AT_UNPREDICTABLE_INTERVALS"` · `LimitedNumberOfMessagesInResponseToKeywords` to `"LIMITED_NUMBER_OF_MESSAGES_IN_RESPONSE_TO_KEYWORDS"` | `campaignFrequencySchema` |
| `Channel1` | `Voice` to `"VOICE"` · `Sms` to `"SMS"` · `Rcs` to `"RCS"` · `Whatsapp` to `"WHATSAPP"` · `Chat` to `"CHAT"` | `channel1Schema` |
| `Channel11` | `Voice` to `"VOICE"` · `Sms` to `"SMS"` · `Rcs` to `"RCS"` · `Whatsapp` to `"WHATSAPP"` · `Chat` to `"CHAT"` | `channel11Schema` |
| `Channel2` | `Sms` to `"SMS"` · `Rcs` to `"RCS"` · `Whatsapp` to `"WHATSAPP"` · `Chat` to `"CHAT"` | `channel2Schema` |
| `Channel3` | `Voice` to `"VOICE"` · `Sms` to `"SMS"` · `Rcs` to `"RCS"` · `Whatsapp` to `"WHATSAPP"` · `Chat` to `"CHAT"` | `channel3Schema` |
| `Channel4` | `Sms` to `"SMS"` · `Rcs` to `"RCS"` · `Whatsapp` to `"WHATSAPP"` · `Chat` to `"CHAT"` | `channel4Schema` |
| `Channel5` | `Voice` to `"VOICE"` · `Sms` to `"SMS"` · `Rcs` to `"RCS"` · `Email` to `"EMAIL"` · `Whatsapp` to `"WHATSAPP"` · `Chat` to `"CHAT"` · `Api` to `"API"` · `System` to `"SYSTEM"` | `channel5Schema` |
| `Channel6` | `Voice` to `"VOICE"` · `Sms` to `"SMS"` · `Rcs` to `"RCS"` · `Whatsapp` to `"WHATSAPP"` · `Chat` to `"CHAT"` | `channel6Schema` |
| `ConferenceRecordingStatusCallbackMethod` | `Get` to `"GET"` · `Post` to `"POST"` | `conferenceRecordingStatusCallbackMethodSchema` |
| `ConferenceStatusCallbackMethod` | `Get` to `"GET"` · `Post` to `"POST"` | `conferenceStatusCallbackMethodSchema` |
| `Confirmation` | `True` to `"true"` · `False` to `"false"` | `confirmationSchema` |
| `ConversationGroupingType` | `GroupByProfile` to `"GROUP_BY_PROFILE"` · `GroupByParticipantAddresses` to `"GROUP_BY_PARTICIPANT_ADDRESSES"` · `GroupByParticipantAddressesAndChannelType` to `"GROUP_BY_PARTICIPANT_ADDRESSES_AND_CHANNEL_TYPE"` | `conversationGroupingTypeSchema` |
| `ConversationGroupingType3` | `GroupByProfile` to `"GROUP_BY_PROFILE"` · `GroupByParticipantAddresses` to `"GROUP_BY_PARTICIPANT_ADDRESSES"` · `GroupByParticipantAddressesAndChannelType` to `"GROUP_BY_PARTICIPANT_ADDRESSES_AND_CHANNEL_TYPE"` | `conversationGroupingType3Schema` |
| `CustomerCareChannel` | `TollFreeNumber` to `"TOLL_FREE_NUMBER"` · `Email` to `"EMAIL"` | `customerCareChannelSchema` |
| `CustomerType` | `Business` to `"Business"` · `Individual` to `"Individual"` | `customerTypeSchema` |
| `DeauthorizeCallbackMethod` | `Get` to `"GET"` · `Post` to `"POST"` | `deauthorizeCallbackMethodSchema` |
| `DeauthorizeCallbackMethod1` | `Get` to `"GET"` · `Post` to `"POST"` | `deauthorizeCallbackMethod1Schema` |
| `DeliveryStatus` | `Initiated` to `"INITIATED"` · `InProgress` to `"IN_PROGRESS"` · `Delivered` to `"DELIVERED"` · `Completed` to `"COMPLETED"` · `Failed` to `"FAILED"` | `deliveryStatusSchema` |
| `DiscoverableCredentials` | `Required` to `"required"` · `Preferred` to `"preferred"` · `Discouraged` to `"discouraged"` | `discoverableCredentialsSchema` |
| `DocumentType` | `ScLetterOfAuthorization` to `"SC_LETTER_OF_AUTHORIZATION"` · `CallToActionOrOptInMockup` to `"CALL_TO_ACTION_OR_OPT_IN_MOCKUP"` · `SmsCampaignTermsOfService` to `"SMS_CAMPAIGN_TERMS_OF_SERVICE"` · `SmsPrivacyPolicy` to `"SMS_PRIVACY_POLICY"` · `MigrationRequestLetter` to `"MIGRATION_REQUEST_LETTER"` · `ShortCodeLeaseReceipt` to `"SHORT_CODE_LEASE_RECEIPT"` · `AdditionalSupportingDocuments1` to `"ADDITIONAL_SUPPORTING_DOCUMENTS_1"` · `AdditionalSupportingDocuments2` to `"ADDITIONAL_SUPPORTING_DOCUMENTS_2"` · `AdditionalSupportingDocuments3` to `"ADDITIONAL_SUPPORTING_DOCUMENTS_3"` · `AdditionalSupportingDocuments4` to `"ADDITIONAL_SUPPORTING_DOCUMENTS_4"` · `AdditionalSupportingDocuments5` to `"ADDITIONAL_SUPPORTING_DOCUMENTS_5"` · `AdditionalSupportingDocuments6` to `"ADDITIONAL_SUPPORTING_DOCUMENTS_6"` · `AdditionalSupportingDocuments7` to `"ADDITIONAL_SUPPORTING_DOCUMENTS_7"` · `AdditionalSupportingDocuments8` to `"ADDITIONAL_SUPPORTING_DOCUMENTS_8"` · `AdditionalSupportingDocuments9` to `"ADDITIONAL_SUPPORTING_DOCUMENTS_9"` · `AdditionalSupportingDocuments10` to `"ADDITIONAL_SUPPORTING_DOCUMENTS_10"` | `documentTypeSchema` |
| `EndStatus` | `Unknown` to `"unknown"` · `Failure` to `"failure"` · `Ended` to `"ended"` · `HungUp` to `"hung_up"` | `endStatusSchema` |
| `Event` | `Start` to `"START"` · `End` to `"END"` | `eventSchema` |
| `FallbackMethod` | `Get` to `"GET"` · `Post` to `"POST"` | `fallbackMethodSchema` |
| `FallbackMethod1` | `Post` to `"POST"` · `Put` to `"PUT"` | `fallbackMethod1Schema` |
| `Field` | `CallerName` to `"caller_name"` · `SimSwap` to `"sim_swap"` · `CallForwarding` to `"call_forwarding"` · `LineTypeIntelligence` to `"line_type_intelligence"` · `LineStatus` to `"line_status"` · `IdentityMatch` to `"identity_match"` · `ReassignedNumber` to `"reassigned_number"` · `SmsPumpingRisk` to `"sms_pumping_risk"` | `fieldSchema` |
| `HoldMethod` | `Get` to `"GET"` · `Post` to `"POST"` | `holdMethodSchema` |
| `JobStatus` | `Created` to `"CREATED"` · `FileReceived` to `"FILE_RECEIVED"` · `Queued` to `"QUEUED"` · `InProgress` to `"IN_PROGRESS"` · `Completed` to `"COMPLETED"` · `Failed` to `"FAILED"` · `Stopped` to `"STOPPED"` · `StopRequested` to `"STOP_REQUESTED"` | `jobStatusSchema` |
| `Key` | `All` to `"ALL"` · `Afrikaans` to `"AFRIKAANS"` · `Arabic` to `"ARABIC"` · `Bengali` to `"BENGALI"` · `Chinese` to `"CHINESE"` · `Croatian` to `"CROATIAN"` · `Czech` to `"CZECH"` · `Danish` to `"DANISH"` · `Dutch` to `"DUTCH"` · `English` to `"ENGLISH"` · `Estonian` to `"ESTONIAN"` · `Finnish` to `"FINNISH"` · `French` to `"FRENCH"` · `German` to `"GERMAN"` · `Greek` to `"GREEK"` · `Hebrew` to `"HEBREW"` · `Hindi` to `"HINDI"` · `Hungarian` to `"HUNGARIAN"` · `Italian` to `"ITALIAN"` · `Japanese` to `"JAPANESE"` · `Korean` to `"KOREAN"` · `Latvian` to `"LATVIAN"` · `Lithuanian` to `"LITHUANIAN"` · `Malay` to `"MALAY"` · `Malaysian` to `"MALAYSIAN"` · `Norwegian` to `"NORWEGIAN"` · `Polish` to `"POLISH"` · `Portuguese` to `"PORTUGUESE"` · `Russian` to `"RUSSIAN"` · `Slovak` to `"SLOVAK"` · `Slovene` to `"SLOVENE"` · `Spanish` to `"SPANISH"` · `SouthernNdebele` to `"SOUTHERN_NDEBELE"` · `SouthernSotho` to `"SOUTHERN_SOTHO"` · `Swati` to `"SWATI"` · `Swedish` to `"SWEDISH"` · `Tamil` to `"TAMIL"` · `Tswana` to `"TSWANA"` · `Tsonga` to `"TSONGA"` · `Venda` to `"VENDA"` · `Xhosa` to `"XHOSA"` · `Zulu` to `"ZULU"` | `keySchema` |
| `LeaseType` | `Random` to `"RANDOM"` · `Vanity` to `"VANITY"` · `SelfLeased` to `"SELF_LEASED"` | `leaseTypeSchema` |
| `LineType` | `Mobile` to `"mobile"` · `Landline` to `"landline"` · `TollFree` to `"tollFree"` · `FixedVoip` to `"fixedVoip"` · `NonFixedVoip` to `"nonFixedVoip"` · `Personal` to `"personal"` · `Premium` to `"premium"` · `Voicemail` to `"voicemail"` · `SharedCost` to `"sharedCost"` · `Uan` to `"uan"` · `Pager` to `"pager"` · `Unknown` to `"unknown"` | `lineTypeSchema` |
| `MessagePurpose` | `Transactional` to `"TRANSACTIONAL"` · `Promotional` to `"PROMOTIONAL"` | `messagePurposeSchema` |
| `Method` | `Get` to `"GET"` · `Post` to `"POST"` | `methodSchema` |
| `Method1` | `Get` to `"GET"` · `Post` to `"POST"` | `method1Schema` |
| `Method11` | `Post` to `"POST"` · `Get` to `"GET"` · `Put` to `"PUT"` · `Delete` to `"DELETE"` · `Patch` to `"PATCH"` | `method11Schema` |
| `Method2` | `Get` to `"GET"` · `Post` to `"POST"` | `method2Schema` |
| `Method21` | `Post` to `"POST"` · `Get` to `"GET"` · `Put` to `"PUT"` · `Delete` to `"DELETE"` · `Patch` to `"PATCH"` | `method21Schema` |
| `Method3` | `Get` to `"GET"` · `Post` to `"POST"` | `method3Schema` |
| `NewStatus` | `InReview` to `"in_review"` · `WaitingForSignature` to `"waiting_for_signature"` · `PortSubmitted` to `"port_submitted"` · `PortRejected` to `"port_rejected"` · `PortPending` to `"port_pending"` · `Canceled` to `"canceled"` · `Completed` to `"completed"` · `Canceling` to `"canceling"` | `newStatusSchema` |
| `Op` | `And` to `"AND"` · `Or` to `"OR"` · `Eq` to `"EQ"` · `Ne` to `"NE"` · `Gt` to `"GT"` · `Lt` to `"LT"` · `In` to `"IN"` | `opSchema` |
| `OriginalLineType` | `Mobile` to `"mobile"` · `Landline` to `"landline"` · `TollFree` to `"tollFree"` · `FixedVoip` to `"fixedVoip"` · `NonFixedVoip` to `"nonFixedVoip"` · `Personal` to `"personal"` · `Premium` to `"premium"` · `Voicemail` to `"voicemail"` · `SharedCost` to `"sharedCost"` · `Uan` to `"uan"` · `Pager` to `"pager"` · `Unknown` to `"unknown"` | `originalLineTypeSchema` |
| `OverriddenLineType` | `Mobile` to `"mobile"` · `Landline` to `"landline"` · `TollFree` to `"tollFree"` · `FixedVoip` to `"fixedVoip"` · `NonFixedVoip` to `"nonFixedVoip"` · `Personal` to `"personal"` · `Premium` to `"premium"` · `Voicemail` to `"voicemail"` · `SharedCost` to `"sharedCost"` · `Uan` to `"uan"` · `Pager` to `"pager"` · `Unknown` to `"unknown"` | `overriddenLineTypeSchema` |
| `PaymentFrequency` | `Quarterly` to `"QUARTERLY"` · `Yearly` to `"YEARLY"` | `paymentFrequencySchema` |
| `RecordingStatusCallbackMethod` | `Get` to `"GET"` · `Post` to `"POST"` | `recordingStatusCallbackMethodSchema` |
| `RecordingStatusCallbackMethod1` | `Get` to `"GET"` · `Post` to `"POST"` | `recordingStatusCallbackMethod1Schema` |
| `RecordingStatusCallbackMethod2` | `Get` to `"GET"` · `Post` to `"POST"` | `recordingStatusCallbackMethod2Schema` |
| `RejectionReason` | `ContactSupportRequired` to `"CONTACT_SUPPORT_REQUIRED"` · `PhoneNumberWithCarrierRestriction` to `"PHONE_NUMBER_WITH_CARRIER_RESTRICTION"` · `PhoneNumberInactiveOrDisconnected` to `"PHONE_NUMBER_INACTIVE_OR_DISCONNECTED"` · `InvalidEndUserName` to `"INVALID_END_USER_NAME"` · `InvalidAddress` to `"INVALID_ADDRESS"` · `InvalidPin` to `"INVALID_PIN"` · `InvalidAccountNumber` to `"INVALID_ACCOUNT_NUMBER"` | `rejectionReasonSchema` |
| `RequestMethod` | `Get` to `"GET"` · `Post` to `"POST"` | `requestMethodSchema` |
| `RequestType` | `New` to `"NEW"` · `Migration` to `"MIGRATION"` · `Lease` to `"LEASE"` | `requestTypeSchema` |
| `SenderIdPurpose` | `Transactional` to `"TRANSACTIONAL"` · `Promotional` to `"PROMOTIONAL"` | `senderIdPurposeSchema` |
| `SignUpOption` | `OnlineWebForm` to `"ONLINE_WEB_FORM"` · `Ivr` to `"IVR"` · `Verbally` to `"VERBALLY"` · `MobileAppOrDigitalKiosk` to `"MOBILE_APP_OR_DIGITAL_KIOSK"` · `PaperForm` to `"PAPER_FORM"` · `ShortcodeKeyword` to `"SHORTCODE_KEYWORD"` · `OtherForm` to `"OTHER_FORM"` | `signUpOptionSchema` |
| `SmsFallbackMethod` | `Get` to `"GET"` · `Post` to `"POST"` | `smsFallbackMethodSchema` |
| `SmsFallbackMethod14` | `Get` to `"GET"` · `Post` to `"POST"` | `smsFallbackMethod14Schema` |
| `SmsFallbackMethod6` | `Get` to `"GET"` · `Post` to `"POST"` | `smsFallbackMethod6Schema` |
| `SmsFallbackMethod7` | `Get` to `"GET"` · `Post` to `"POST"` | `smsFallbackMethod7Schema` |
| `SmsFallbackMethod9` | `Get` to `"GET"` · `Post` to `"POST"` | `smsFallbackMethod9Schema` |
| `SmsMethod` | `Get` to `"GET"` · `Post` to `"POST"` | `smsMethodSchema` |
| `SmsMethod14` | `Get` to `"GET"` · `Post` to `"POST"` | `smsMethod14Schema` |
| `SmsMethod6` | `Get` to `"GET"` · `Post` to `"POST"` | `smsMethod6Schema` |
| `SmsMethod7` | `Get` to `"GET"` · `Post` to `"POST"` | `smsMethod7Schema` |
| `SmsMethod9` | `Get` to `"GET"` · `Post` to `"POST"` | `smsMethod9Schema` |
| `State` | `Draft` to `"DRAFT"` · `TwilioReview` to `"TWILIO_REVIEW"` · `PendingPayment` to `"PENDING_PAYMENT"` · `PaymentFailed` to `"PAYMENT_FAILED"` · `InProvisioning` to `"IN_PROVISIONING"` · `PendingCarrier` to `"PENDING_CARRIER"` · `Approved` to `"APPROVED"` · `CorrectionsNeeded` to `"CORRECTIONS_NEEDED"` · `Canceled` to `"CANCELED"` · `Archived` to `"ARCHIVED"` | `stateSchema` |
| `Status` | `Live` to `"LIVE"` · `NotLive` to `"NOT_LIVE"` | `statusSchema` |
| `Status1` | `Live` to `"LIVE"` · `NotLive` to `"NOT_LIVE"` | `status1Schema` |
| `Status11` | `Pending` to `"PENDING"` · `Completed` to `"COMPLETED"` · `Failed` to `"FAILED"` | `status11Schema` |
| `Status2` | `Draft` to `"DRAFT"` · `PendingReview` to `"PENDING_REVIEW"` · `InReview` to `"IN_REVIEW"` · `TwilioApproved` to `"TWILIO_APPROVED"` · `TwilioRejected` to `"TWILIO_REJECTED"` | `status2Schema` |
| `Status21` | `Pending` to `"PENDING"` · `Running` to `"RUNNING"` · `Cancelled` to `"CANCELLED"` · `Completed` to `"COMPLETED"` · `Failed` to `"FAILED"` | `status21Schema` |
| `Status3` | `Active` to `"ACTIVE"` · `Inactive` to `"INACTIVE"` · `Closed` to `"CLOSED"` | `status3Schema` |
| `Status4` | `Unknown` to `"unknown"` · `CreationInProgress` to `"creation-in-progress"` · `Ready` to `"ready"` · `CreationFailed` to `"creation-failed"` · `DeletionInProgress` to `"deletion-in-progress"` · `Deleted` to `"deleted"` · `DeletionFailed` to `"deletion-failed"` | `status4Schema` |
| `Status7` | `Active` to `"ACTIVE"` · `Inactive` to `"INACTIVE"` · `Closed` to `"CLOSED"` | `status7Schema` |
| `StatusCallbackMethod` | `Get` to `"GET"` · `Post` to `"POST"` | `statusCallbackMethodSchema` |
| `StatusCallbackMethod10` | `Get` to `"GET"` · `Post` to `"POST"` | `statusCallbackMethod10Schema` |
| `StatusCallbackMethod15` | `Get` to `"GET"` · `Post` to `"POST"` | `statusCallbackMethod15Schema` |
| `StatusCallbackMethod16` | `Get` to `"GET"` · `Post` to `"POST"` | `statusCallbackMethod16Schema` |
| `StatusCallbackMethod17` | `Get` to `"GET"` · `Post` to `"POST"` | `statusCallbackMethod17Schema` |
| `StatusCallbackMethod19` | `Get` to `"GET"` · `Post` to `"POST"` | `statusCallbackMethod19Schema` |
| `StatusCallbackMethod6` | `Get` to `"GET"` · `Post` to `"POST"` | `statusCallbackMethod6Schema` |
| `StatusCallbackMethod8` | `Get` to `"GET"` · `Post` to `"POST"` | `statusCallbackMethod8Schema` |
| `StatusCallbackMethod9` | `Get` to `"GET"` · `Post` to `"POST"` | `statusCallbackMethod9Schema` |
| `TrafficType` | `Transactional` to `"TRANSACTIONAL"` · `Promotional` to `"PROMOTIONAL"` · `Both` to `"BOTH"` | `trafficTypeSchema` |
| `Transport` | `Usb` to `"usb"` · `Nfc` to `"nfc"` · `Ble` to `"ble"` · `SmartCard` to `"smart-card"` · `Internal` to `"internal"` · `Hybrid` to `"hybrid"` | `transportSchema` |
| `Type` | `PublicKey` to `"public-key"` | `typeSchema` |
| `Type1` | `PublicKey` to `"public-key"` | `type1Schema` |
| `Type11` | `HumanAgent` to `"HUMAN_AGENT"` · `Customer` to `"CUSTOMER"` · `AiAgent` to `"AI_AGENT"` | `type11Schema` |
| `Type2` | `HumanAgent` to `"HUMAN_AGENT"` · `Customer` to `"CUSTOMER"` · `AiAgent` to `"AI_AGENT"` · `Agent` to `"AGENT"` · `Unknown` to `"UNKNOWN"` | `type2Schema` |
| `Type3` | `HumanAgent` to `"HUMAN_AGENT"` · `Customer` to `"CUSTOMER"` · `AiAgent` to `"AI_AGENT"` · `Agent` to `"AGENT"` · `Unknown` to `"UNKNOWN"` | `type3Schema` |
| `Type4` | `Dtmf` to `"DTMF"` · `Speech` to `"SPEECH"` | `type4Schema` |
| `UseCase` | `Promotional` to `"PROMOTIONAL"` · `Transactional` to `"TRANSACTIONAL"` · `Otp` to `"OTP"` · `MultiUse` to `"MULTI_USE"` | `useCaseSchema` |
| `UserVerification` | `Required` to `"required"` · `Preferred` to `"preferred"` · `Discouraged` to `"discouraged"` | `userVerificationSchema` |
| `ValidationError` | `TooShort` to `"TOO_SHORT"` · `TooLong` to `"TOO_LONG"` · `InvalidButPossible` to `"INVALID_BUT_POSSIBLE"` · `InvalidCountryCode` to `"INVALID_COUNTRY_CODE"` · `InvalidLength` to `"INVALID_LENGTH"` · `NotANumber` to `"NOT_A_NUMBER"` | `validationErrorSchema` |
| `VerificationMethod` | `Sms` to `"sms"` · `Voice` to `"voice"` | `verificationMethodSchema` |
| `VoiceFallbackMethod` | `Get` to `"GET"` · `Post` to `"POST"` | `voiceFallbackMethodSchema` |
| `VoiceFallbackMethod7` | `Get` to `"GET"` · `Post` to `"POST"` | `voiceFallbackMethod7Schema` |
| `VoiceFallbackMethod9` | `Get` to `"GET"` · `Post` to `"POST"` | `voiceFallbackMethod9Schema` |
| `VoiceMethod` | `Get` to `"GET"` · `Post` to `"POST"` | `voiceMethodSchema` |
| `VoiceMethod15` | `Get` to `"GET"` · `Post` to `"POST"` | `voiceMethod15Schema` |
| `VoiceMethod7` | `Get` to `"GET"` · `Post` to `"POST"` | `voiceMethod7Schema` |
| `VoiceMethod9` | `Get` to `"GET"` · `Post` to `"POST"` | `voiceMethod9Schema` |
| `VoiceStatusCallbackMethod` | `Get` to `"GET"` · `Post` to `"POST"` | `voiceStatusCallbackMethodSchema` |
| `VoiceStatusCallbackMethod1` | `Get` to `"GET"` · `Post` to `"POST"` | `voiceStatusCallbackMethod1Schema` |
| `WaitMethod` | `Get` to `"GET"` · `Post` to `"POST"` | `waitMethodSchema` |
| `AccessTokenEnumFactorTypes` | `Push` to `"push"` | `accessTokenEnumFactorTypesSchema` |
| `AccountEnumStatus` | `Active` to `"active"` · `Suspended` to `"suspended"` · `Closed` to `"closed"` | `accountEnumStatusSchema` |
| `AccountEnumType` | `Trial` to `"Trial"` · `Full` to `"Full"` | `accountEnumTypeSchema` |
| `AiInsightsEnumTagGroup` | `Topics` to `"topics"` | `aiInsightsEnumTagGroupSchema` |
| `AnnotationEnumAnsweredBy` | `UnknownAnsweredBy` to `"unknown_answered_by"` · `Human` to `"human"` · `Machine` to `"machine"` | `annotationEnumAnsweredBySchema` |
| `AnnotationEnumConnectivityIssue` | `UnknownConnectivityIssue` to `"unknown_connectivity_issue"` · `NoConnectivityIssue` to `"no_connectivity_issue"` · `InvalidNumber` to `"invalid_number"` · `CallerId` to `"caller_id"` · `DroppedCall` to `"dropped_call"` · `NumberReachability` to `"number_reachability"` | `annotationEnumConnectivityIssueSchema` |
| `AnnotationEnumQualityIssues` | `UnknownQualityIssue` to `"unknown_quality_issue"` · `NoQualityIssue` to `"no_quality_issue"` · `LowVolume` to `"low_volume"` · `ChoppyRobotic` to `"choppy_robotic"` · `Echo` to `"echo"` · `Dtmf` to `"dtmf"` · `Latency` to `"latency"` · `Owa` to `"owa"` · `StaticNoise` to `"static_noise"` | `annotationEnumQualityIssuesSchema` |
| `AuthenticationActionType` | `CopyCode` to `"COPY_CODE"` | `authenticationActionTypeSchema` |
| `AuthorizationDocumentEnumStatus` | `Opened` to `"opened"` · `Signing` to `"signing"` · `Signed` to `"signed"` · `Canceled` to `"canceled"` · `Failed` to `"failed"` | `authorizationDocumentEnumStatusSchema` |
| `AuthorizedConnectAppEnumPermission` | `GetAll` to `"get-all"` · `PostAll` to `"post-all"` | `authorizedConnectAppEnumPermissionSchema` |
| `BrandRegistrationsEnumBrandFeedback` | `TaxId` to `"TAX_ID"` · `StockSymbol` to `"STOCK_SYMBOL"` · `Nonprofit` to `"NONPROFIT"` · `GovernmentEntity` to `"GOVERNMENT_ENTITY"` · `Others` to `"OTHERS"` | `brandRegistrationsEnumBrandFeedbackSchema` |
| `BrandRegistrationsEnumIdentityStatus` | `SelfDeclared` to `"SELF_DECLARED"` · `Unverified` to `"UNVERIFIED"` · `Verified` to `"VERIFIED"` · `VettedVerified` to `"VETTED_VERIFIED"` | `brandRegistrationsEnumIdentityStatusSchema` |
| `BrandRegistrationsEnumStatus` | `Pending` to `"PENDING"` · `Approved` to `"APPROVED"` · `Failed` to `"FAILED"` · `InReview` to `"IN_REVIEW"` · `DeletionPending` to `"DELETION_PENDING"` · `DeletionFailed` to `"DELETION_FAILED"` · `Suspended` to `"SUSPENDED"` | `brandRegistrationsEnumStatusSchema` |
| `BrandVettingEnumVettingProvider` | `CampaignVerify` to `"campaign-verify"` · `Aegis` to `"aegis"` | `brandVettingEnumVettingProviderSchema` |
| `BulkEligibilityEnumEligibilityStatus` | `Ineligible` to `"ineligible"` · `Eligible` to `"eligible"` | `bulkEligibilityEnumEligibilityStatusSchema` |
| `BulkEligibilityEnumEligibilitySubStatus` | `CountryIneligible` to `"country-ineligible"` · `NumberFormatIneligible` to `"number-format-ineligible"` · `NumberTypeIneligible` to `"number-type-ineligible"` · `CarrierIneligible` to `"carrier-ineligible"` · `AlreadyInTwilio` to `"already-in-twilio"` · `InternalProcessingError` to `"internal-processing-error"` · `InvalidPhoneNumber` to `"invalid-phone-number"` · `InvalidHostingAccountSid` to `"invalid-hosting-account-sid"` · `Eligible` to `"eligible"` · `EligibleByManualProcess` to `"eligible-by-manual-process"` | `bulkEligibilityEnumEligibilitySubStatusSchema` |
| `BulkHostedNumberOrderEnumRequestStatus` | `Queued` to `"QUEUED"` · `InProgress` to `"IN_PROGRESS"` · `Processed` to `"PROCESSED"` | `bulkHostedNumberOrderEnumRequestStatusSchema` |
| `BundleCloneEnumStatus` | `Draft` to `"draft"` · `PendingReview` to `"pending-review"` · `InReview` to `"in-review"` · `TwilioRejected` to `"twilio-rejected"` · `TwilioApproved` to `"twilio-approved"` · `ProvisionallyApproved` to `"provisionally-approved"` | `bundleCloneEnumStatusSchema` |
| `BundleCopyEnumEndUserType` | `Individual` to `"individual"` · `Business` to `"business"` | `bundleCopyEnumEndUserTypeSchema` |
| `BundleCopyEnumStatus` | `Draft` to `"draft"` · `PendingReview` to `"pending-review"` · `InReview` to `"in-review"` · `TwilioRejected` to `"twilio-rejected"` · `TwilioApproved` to `"twilio-approved"` · `ProvisionallyApproved` to `"provisionally-approved"` | `bundleCopyEnumStatusSchema` |
| `BundleEnumEndUserType` | `Individual` to `"individual"` · `Business` to `"business"` | `bundleEnumEndUserTypeSchema` |
| `BundleEnumSortBy` | `ValidUntil` to `"valid-until"` · `DateUpdated` to `"date-updated"` | `bundleEnumSortBySchema` |
| `BundleEnumSortDirection` | `Asc` to `"ASC"` · `Desc` to `"DESC"` | `bundleEnumSortDirectionSchema` |
| `BundleEnumStatus` | `Draft` to `"draft"` · `PendingReview` to `"pending-review"` · `InReview` to `"in-review"` · `TwilioRejected` to `"twilio-rejected"` · `TwilioApproved` to `"twilio-approved"` · `ProvisionallyApproved` to `"provisionally-approved"` | `bundleEnumStatusSchema` |
| `CallToActionActionType` | `Url` to `"URL"` · `PhoneNumber` to `"PHONE_NUMBER"` · `CopyCode` to `"COPY_CODE"` · `VoiceCall` to `"VOICE_CALL"` · `VoiceCallRequest` to `"VOICE_CALL_REQUEST"` | `callToActionActionTypeSchema` |
| `CallEnumEvent` | `Initiated` to `"initiated"` · `Ringing` to `"ringing"` · `Answered` to `"answered"` · `Completed` to `"completed"` | `callEnumEventSchema` |
| `CallEnumStatus` | `Queued` to `"queued"` · `Ringing` to `"ringing"` · `InProgress` to `"in-progress"` · `Completed` to `"completed"` · `Busy` to `"busy"` · `Failed` to `"failed"` · `NoAnswer` to `"no-answer"` · `Canceled` to `"canceled"` | `callEnumStatusSchema` |
| `CallEnumUpdateStatus` | `Canceled` to `"canceled"` · `Completed` to `"completed"` | `callEnumUpdateStatusSchema` |
| `CallRecordingEnumSource` | `DialVerb` to `"DialVerb"` · `Conference` to `"Conference"` · `OutboundApi` to `"OutboundAPI"` · `Trunking` to `"Trunking"` · `RecordVerb` to `"RecordVerb"` · `StartCallRecordingApi` to `"StartCallRecordingAPI"` · `StartConferenceRecordingApi` to `"StartConferenceRecordingAPI"` | `callRecordingEnumSourceSchema` |
| `CallRecordingEnumStatus` | `InProgress` to `"in-progress"` · `Paused` to `"paused"` · `Stopped` to `"stopped"` · `Processing` to `"processing"` · `Completed` to `"completed"` · `Absent` to `"absent"` | `callRecordingEnumStatusSchema` |
| `CallSummariesEnumAnsweredBy` | `Unknown` to `"unknown"` · `MachineStart` to `"machine_start"` · `MachineEndBeep` to `"machine_end_beep"` · `MachineEndSilence` to `"machine_end_silence"` · `MachineEndOther` to `"machine_end_other"` · `Human` to `"human"` · `Fax` to `"fax"` | `callSummariesEnumAnsweredBySchema` |
| `CallSummariesEnumCallDirection` | `OutboundApi` to `"outbound_api"` · `OutboundDial` to `"outbound_dial"` · `Inbound` to `"inbound"` · `TrunkingOriginating` to `"trunking_originating"` · `TrunkingTerminating` to `"trunking_terminating"` | `callSummariesEnumCallDirectionSchema` |
| `CallSummariesEnumCallState` | `Ringing` to `"ringing"` · `Completed` to `"completed"` · `Busy` to `"busy"` · `Fail` to `"fail"` · `Noanswer` to `"noanswer"` · `Canceled` to `"canceled"` · `Answered` to `"answered"` · `Undialed` to `"undialed"` | `callSummariesEnumCallStateSchema` |
| `CallSummariesEnumCallType` | `Carrier` to `"carrier"` · `Sip` to `"sip"` · `Trunking` to `"trunking"` · `Client` to `"client"` · `Whatsapp` to `"whatsapp"` | `callSummariesEnumCallTypeSchema` |
| `CallSummariesEnumProcessingState` | `Complete` to `"complete"` · `Partial` to `"partial"` | `callSummariesEnumProcessingStateSchema` |
| `CallSummariesEnumProcessingStateRequest` | `Completed` to `"completed"` · `Started` to `"started"` · `Partial` to `"partial"` · `All` to `"all"` | `callSummariesEnumProcessingStateRequestSchema` |
| `CallSummariesEnumSortBy` | `StartTime` to `"start_time"` · `EndTime` to `"end_time"` | `callSummariesEnumSortBySchema` |
| `CallSummaryCrelaySessionState` | `Unknown` to `"unknown"` · `Failure` to `"failure"` · `Ended` to `"ended"` · `HungUp` to `"hung_up"` | `callSummaryCrelaySessionStateSchema` |
| `CardActionType` | `Url` to `"URL"` · `PhoneNumber` to `"PHONE_NUMBER"` · `QuickReply` to `"QUICK_REPLY"` · `CopyCode` to `"COPY_CODE"` · `VoiceCall` to `"VOICE_CALL"` | `cardActionTypeSchema` |
| `CarouselActionType` | `Url` to `"URL"` · `PhoneNumber` to `"PHONE_NUMBER"` · `QuickReply` to `"QUICK_REPLY"` | `carouselActionTypeSchema` |
| `ChallengeEnumChallengeReasons` | `None` to `"none"` · `NotNeeded` to `"not_needed"` · `NotRequested` to `"not_requested"` | `challengeEnumChallengeReasonsSchema` |
| `ChallengeEnumChallengeStatuses` | `Pending` to `"pending"` · `Expired` to `"expired"` · `Approved` to `"approved"` · `Denied` to `"denied"` | `challengeEnumChallengeStatusesSchema` |
| `ChallengeEnumFactorTypes` | `Push` to `"push"` · `Totp` to `"totp"` · `Passkeys` to `"passkeys"` | `challengeEnumFactorTypesSchema` |
| `ChallengeEnumListOrders` | `Asc` to `"asc"` · `Desc` to `"desc"` | `challengeEnumListOrdersSchema` |
| `Channel` | `Whatsapp` to `"whatsapp"` | `channelSchema` |
| `ChannelsSenderEnumStatus` | `Creating` to `"CREATING"` · `Online` to `"ONLINE"` · `Offline` to `"OFFLINE"` · `PendingVerification` to `"PENDING_VERIFICATION"` · `Verifying` to `"VERIFYING"` · `OnlineUpdating` to `"ONLINE:UPDATING"` · `TwilioReview` to `"TWILIO_REVIEW"` · `Draft` to `"DRAFT"` · `Stubbed` to `"STUBBED"` | `channelsSenderEnumStatusSchema` |
| `ComplianceRegistrationEnumBusinessIdentityType` | `DirectCustomer` to `"direct_customer"` · `IsvResellerOrPartner` to `"isv_reseller_or_partner"` · `Unknown` to `"unknown"` | `complianceRegistrationEnumBusinessIdentityTypeSchema` |
| `ComplianceRegistrationEnumBusinessRegistrationAuthority` | `UkCrn` to `"UK:CRN"` · `UsEin` to `"US:EIN"` · `CaCbn` to `"CA:CBN"` · `AuAcn` to `"AU:ACN"` · `Other` to `"Other"` | `complianceRegistrationEnumBusinessRegistrationAuthoritySchema` |
| `ComplianceRegistrationEnumPhoneNumberType` | `Local` to `"local"` · `National` to `"national"` · `Mobile` to `"mobile"` · `TollFree` to `"toll-free"` | `complianceRegistrationEnumPhoneNumberTypeSchema` |
| `ComplianceTollfreeInquiryEnumOptInType` | `Verbal` to `"VERBAL"` · `WebForm` to `"WEB_FORM"` · `PaperForm` to `"PAPER_FORM"` · `ViaText` to `"VIA_TEXT"` · `MobileQrCode` to `"MOBILE_QR_CODE"` | `complianceTollfreeInquiryEnumOptInTypeSchema` |
| `CompositionEnumFormat` | `Mp4` to `"mp4"` · `Webm` to `"webm"` | `compositionEnumFormatSchema` |
| `CompositionEnumStatus` | `Enqueued` to `"enqueued"` · `Processing` to `"processing"` · `Completed` to `"completed"` · `Deleted` to `"deleted"` · `Failed` to `"failed"` | `compositionEnumStatusSchema` |
| `CompositionHookEnumFormat` | `Mp4` to `"mp4"` · `Webm` to `"webm"` | `compositionHookEnumFormatSchema` |
| `ConferenceEnumConferenceEndReason` | `LastParticipantLeft` to `"last_participant_left"` · `ConferenceEndedViaApi` to `"conference_ended_via_api"` · `ParticipantWithEndConferenceOnExitLeft` to `"participant_with_end_conference_on_exit_left"` · `LastParticipantKicked` to `"last_participant_kicked"` · `ParticipantWithEndConferenceOnExitKicked` to `"participant_with_end_conference_on_exit_kicked"` | `conferenceEnumConferenceEndReasonSchema` |
| `ConferenceEnumConferenceStatus` | `InProgress` to `"in_progress"` · `NotStarted` to `"not_started"` · `Completed` to `"completed"` · `SummaryTimeout` to `"summary_timeout"` | `conferenceEnumConferenceStatusSchema` |
| `ConferenceEnumProcessingState` | `Complete` to `"complete"` · `InProgress` to `"in_progress"` · `Timeout` to `"timeout"` | `conferenceEnumProcessingStateSchema` |
| `ConferenceEnumReasonConferenceEnded` | `ConferenceEndedViaApi` to `"conference-ended-via-api"` · `ParticipantWithEndConferenceOnExitLeft` to `"participant-with-end-conference-on-exit-left"` · `ParticipantWithEndConferenceOnExitKicked` to `"participant-with-end-conference-on-exit-kicked"` · `LastParticipantKicked` to `"last-participant-kicked"` · `LastParticipantLeft` to `"last-participant-left"` | `conferenceEnumReasonConferenceEndedSchema` |
| `ConferenceEnumRegion` | `Us1` to `"us1"` · `Us2` to `"us2"` · `Au1` to `"au1"` · `Br1` to `"br1"` · `Ie1` to `"ie1"` · `Jp1` to `"jp1"` · `Sg1` to `"sg1"` · `De1` to `"de1"` · `In1` to `"in1"` | `conferenceEnumRegionSchema` |
| `ConferenceEnumStatus` | `Init` to `"init"` · `InProgress` to `"in-progress"` · `Completed` to `"completed"` | `conferenceEnumStatusSchema` |
| `ConferenceEnumTag` | `InvalidRequestedRegion` to `"invalid_requested_region"` · `DuplicateIdentity` to `"duplicate_identity"` · `StartFailure` to `"start_failure"` · `RegionConfigurationIssues` to `"region_configuration_issues"` · `QualityWarnings` to `"quality_warnings"` · `ParticipantBehaviorIssues` to `"participant_behavior_issues"` · `HighPacketLoss` to `"high_packet_loss"` · `HighJitter` to `"high_jitter"` · `HighLatency` to `"high_latency"` · `LowMos` to `"low_mos"` · `DetectedSilence` to `"detected_silence"` · `NoConcurrentParticipants` to `"no_concurrent_participants"` | `conferenceEnumTagSchema` |
| `ConferenceEnumUpdateStatus` | `Completed` to `"completed"` | `conferenceEnumUpdateStatusSchema` |
| `ConferenceParticipantEnumCallDirection` | `Inbound` to `"inbound"` · `Outbound` to `"outbound"` | `conferenceParticipantEnumCallDirectionSchema` |
| `ConferenceParticipantEnumCallStatus` | `Answered` to `"answered"` · `Completed` to `"completed"` · `Busy` to `"busy"` · `Fail` to `"fail"` · `Noanswer` to `"noanswer"` · `Ringing` to `"ringing"` · `Canceled` to `"canceled"` | `conferenceParticipantEnumCallStatusSchema` |
| `ConferenceParticipantEnumCallType` | `Carrier` to `"carrier"` · `Client` to `"client"` · `Sip` to `"sip"` | `conferenceParticipantEnumCallTypeSchema` |
| `ConferenceParticipantEnumJitterBufferSize` | `Large` to `"large"` · `Small` to `"small"` · `Medium` to `"medium"` · `Off` to `"off"` | `conferenceParticipantEnumJitterBufferSizeSchema` |
| `ConferenceParticipantEnumProcessingState` | `Complete` to `"complete"` · `InProgress` to `"in_progress"` · `Timeout` to `"timeout"` | `conferenceParticipantEnumProcessingStateSchema` |
| `ConferenceParticipantEnumRegion` | `Us1` to `"us1"` · `Us2` to `"us2"` · `Au1` to `"au1"` · `Br1` to `"br1"` · `Ie1` to `"ie1"` · `Jp1` to `"jp1"` · `Sg1` to `"sg1"` · `De1` to `"de1"` · `In1` to `"in1"` | `conferenceParticipantEnumRegionSchema` |
| `ConferenceRecordingEnumSource` | `DialVerb` to `"DialVerb"` · `Conference` to `"Conference"` · `OutboundApi` to `"OutboundAPI"` · `Trunking` to `"Trunking"` · `RecordVerb` to `"RecordVerb"` · `StartCallRecordingApi` to `"StartCallRecordingAPI"` · `StartConferenceRecordingApi` to `"StartConferenceRecordingAPI"` | `conferenceRecordingEnumSourceSchema` |
| `ConferenceRecordingEnumStatus` | `InProgress` to `"in-progress"` · `Paused` to `"paused"` · `Stopped` to `"stopped"` · `Processing` to `"processing"` · `Completed` to `"completed"` · `Absent` to `"absent"` | `conferenceRecordingEnumStatusSchema` |
| `ConfigurationAddressEnumAutoCreationType` | `Webhook` to `"webhook"` · `Studio` to `"studio"` · `Default` to `"default"` | `configurationAddressEnumAutoCreationTypeSchema` |
| `ConfigurationAddressEnumMethod` | `Get` to `"get"` · `Post` to `"post"` | `configurationAddressEnumMethodSchema` |
| `ConfigurationAddressEnumType` | `Sms` to `"sms"` · `Whatsapp` to `"whatsapp"` · `Messenger` to `"messenger"` · `Gbm` to `"gbm"` · `Email` to `"email"` · `Rcs` to `"rcs"` · `Apple` to `"apple"` · `Chat` to `"chat"` | `configurationAddressEnumTypeSchema` |
| `ConfigurationEnumStatus` | `Ok` to `"ok"` · `Inprogress` to `"inprogress"` · `Notstarted` to `"notstarted"` | `configurationEnumStatusSchema` |
| `ConfigurationWebhookEnumTarget` | `Webhook` to `"webhook"` · `Flex` to `"flex"` | `configurationWebhookEnumTargetSchema` |
| `ConnectAppEnumPermission` | `GetAll` to `"get-all"` · `PostAll` to `"post-all"` | `connectAppEnumPermissionSchema` |
| `ConversationEnumState` | `Initializing` to `"initializing"` · `Inactive` to `"inactive"` · `Active` to `"active"` · `Closed` to `"closed"` | `conversationEnumStateSchema` |
| `ConversationMessageReceiptEnumDeliveryStatus` | `Read` to `"read"` · `Failed` to `"failed"` · `Delivered` to `"delivered"` · `Undelivered` to `"undelivered"` · `Sent` to `"sent"` | `conversationMessageReceiptEnumDeliveryStatusSchema` |
| `ConversationScopedWebhookEnumMethod` | `Get` to `"get"` · `Post` to `"post"` | `conversationScopedWebhookEnumMethodSchema` |
| `ConversationScopedWebhookEnumTarget` | `Webhook` to `"webhook"` · `Trigger` to `"trigger"` · `Studio` to `"studio"` | `conversationScopedWebhookEnumTargetSchema` |
| `ConversationWebhookEnumTarget` | `Webhook` to `"webhook"` · `Flex` to `"flex"` | `conversationWebhookEnumTargetSchema` |
| `ConversationWithParticipantsEnumState` | `Initializing` to `"initializing"` · `Inactive` to `"inactive"` · `Active` to `"active"` · `Closed` to `"closed"` | `conversationWithParticipantsEnumStateSchema` |
| `CredentialEnumPushType` | `Apn` to `"apn"` · `Gcm` to `"gcm"` · `Fcm` to `"fcm"` | `credentialEnumPushTypeSchema` |
| `CustomerProfileEnumStatus` | `Draft` to `"draft"` · `PendingReview` to `"pending-review"` · `InReview` to `"in-review"` · `TwilioRejected` to `"twilio-rejected"` · `TwilioApproved` to `"twilio-approved"` | `customerProfileEnumStatusSchema` |
| `DependentHostedNumberOrderEnumStatus` | `Received` to `"received"` · `Verified` to `"verified"` · `PendingLoa` to `"pending-loa"` · `CarrierProcessing` to `"carrier-processing"` · `Completed` to `"completed"` · `Failed` to `"failed"` · `ActionRequired` to `"action-required"` | `dependentHostedNumberOrderEnumStatusSchema` |
| `DependentOrderEnumStatus` | `TwilioProcessing` to `"twilio-processing"` · `Received` to `"received"` · `PendingVerification` to `"pending-verification"` · `Verified` to `"verified"` · `PendingLoa` to `"pending-loa"` · `CarrierProcessing` to `"carrier-processing"` · `Testing` to `"testing"` · `Completed` to `"completed"` · `Failed` to `"failed"` · `ActionRequired` to `"action-required"` | `dependentOrderEnumStatusSchema` |
| `DependentOrderEnumVerificationType` | `PhoneCall` to `"phone-call"` · `PhoneBill` to `"phone-bill"` | `dependentOrderEnumVerificationTypeSchema` |
| `DependentPhoneNumberEnumAddressRequirement` | `None` to `"none"` · `Any` to `"any"` · `Local` to `"local"` · `Foreign` to `"foreign"` | `dependentPhoneNumberEnumAddressRequirementSchema` |
| `DependentPhoneNumberEnumEmergencyStatus` | `Active` to `"Active"` · `Inactive` to `"Inactive"` | `dependentPhoneNumberEnumEmergencyStatusSchema` |
| `EligibilityEnumEligibilityStatus` | `Ineligible` to `"ineligible"` · `Eligible` to `"eligible"` | `eligibilityEnumEligibilityStatusSchema` |
| `EligibilityEnumEligibilitySubStatus` | `CountryIneligible` to `"country-ineligible"` · `NumberFormatIneligible` to `"number-format-ineligible"` · `NumberTypeIneligible` to `"number-type-ineligible"` · `CarrierIneligible` to `"carrier-ineligible"` · `AlreadyInTwilio` to `"already-in-twilio"` · `InternalProcessingError` to `"internal-processing-error"` · `InvalidPhoneNumber` to `"invalid-phone-number"` · `InvalidHostingAccountSid` to `"invalid-hosting-account-sid"` · `Eligible` to `"eligible"` | `eligibilityEnumEligibilitySubStatusSchema` |
| `EndUserEnumType` | `Individual` to `"individual"` · `Business` to `"business"` | `endUserEnumTypeSchema` |
| `EngagementEnumStatus` | `Active` to `"active"` · `Ended` to `"ended"` | `engagementEnumStatusSchema` |
| `EvaluationEnumStatus` | `Compliant` to `"compliant"` · `Noncompliant` to `"noncompliant"` | `evaluationEnumStatusSchema` |
| `EventEnumLevel` | `Unknown` to `"UNKNOWN"` · `Debug` to `"DEBUG"` · `Info` to `"INFO"` · `Warning` to `"WARNING"` · `Error` to `"ERROR"` | `eventEnumLevelSchema` |
| `EventEnumTwilioEdge` | `UnknownEdge` to `"unknown_edge"` · `CarrierEdge` to `"carrier_edge"` · `SipEdge` to `"sip_edge"` · `SdkEdge` to `"sdk_edge"` · `ClientEdge` to `"client_edge"` | `eventEnumTwilioEdgeSchema` |
| `ExecutionEnumStatus` | `Active` to `"active"` · `Ended` to `"ended"` | `executionEnumStatusSchema` |
| `FactorEnumFactorStatuses` | `Unverified` to `"unverified"` · `Verified` to `"verified"` | `factorEnumFactorStatusesSchema` |
| `FactorEnumFactorTypes` | `Push` to `"push"` · `Totp` to `"totp"` · `Passkeys` to `"passkeys"` | `factorEnumFactorTypesSchema` |
| `FactorEnumNotificationPlatforms` | `Apn` to `"apn"` · `Fcm` to `"fcm"` · `None` to `"none"` | `factorEnumNotificationPlatformsSchema` |
| `FactorEnumTotpAlgorithms` | `Sha1` to `"sha1"` · `Sha256` to `"sha256"` · `Sha512` to `"sha512"` | `factorEnumTotpAlgorithmsSchema` |
| `FlexFlowEnumChannelType` | `Web` to `"web"` · `Sms` to `"sms"` · `Facebook` to `"facebook"` · `Whatsapp` to `"whatsapp"` · `Line` to `"line"` · `Custom` to `"custom"` | `flexFlowEnumChannelTypeSchema` |
| `FlexFlowEnumIntegrationType` | `Studio` to `"studio"` · `External` to `"external"` · `Task` to `"task"` | `flexFlowEnumIntegrationTypeSchema` |
| `FlexInsightsRulesEnumMetricId` | `ActiveNow` to `"Active (Now)"` · `WaitingNow` to `"Waiting (Now)"` · `AvailableAgentsNow` to `"Available Agents (Now)"` · `OfflineAgentsNow` to `"Offline Agents (Now)"` · `UnavailableAgentsNow` to `"Unavailable Agents (Now)"` · `Abandoned30Min` to `"Abandoned (30 min)"` · `AbandonedToday` to `"Abandoned (Today)"` · `Accepted30Min` to `"Accepted (30 min)"` · `AcceptedToday` to `"Accepted (Today)"` · `AvgSpeedOfAnswerToday` to `"Avg. Speed of Answer (Today)"` · `AvgHandleTimeToday` to `"Avg. Handle Time (Today)"` · `MissedInvitations30Min` to `"Missed Invitations (30 min)"` · `MissedInvitationsToday` to `"Missed Invitations (Today)"` · `Sla30Min` to `"SLA (30 min)"` · `SlaToday` to `"SLA (Today)"` · `LongestAvailableAgentNow` to `"Longest Available Agent (Now)"` · `LongestNow` to `"Longest (Now)"` | `flexInsightsRulesEnumMetricIdSchema` |
| `FlexInsightsRulesEnumNotifySeverity` | `Critical` to `"Critical"` · `Warning` to `"Warning"` | `flexInsightsRulesEnumNotifySeveritySchema` |
| `FlexMeetingCallbackEventsEnumWebhookType` | `Global` to `"global"` · `Interaction` to `"interaction"` | `flexMeetingCallbackEventsEnumWebhookTypeSchema` |
| `FlowEnumStatus` | `Draft` to `"draft"` · `Published` to `"published"` | `flowEnumStatusSchema` |
| `FormEnumFormTypes` | `FormPush` to `"form-push"` | `formEnumFormTypesSchema` |
| `HostedNumberOrderEnumStatus` | `TwilioProcessing` to `"twilio-processing"` · `Received` to `"received"` · `PendingVerification` to `"pending-verification"` · `Verified` to `"verified"` · `PendingLoa` to `"pending-loa"` · `CarrierProcessing` to `"carrier-processing"` · `Testing` to `"testing"` · `Completed` to `"completed"` · `Failed` to `"failed"` · `ActionRequired` to `"action-required"` | `hostedNumberOrderEnumStatusSchema` |
| `HostedNumberOrderEnumVerificationType` | `PhoneCall` to `"phone-call"` · `PhoneBill` to `"phone-bill"` | `hostedNumberOrderEnumVerificationTypeSchema` |
| `HostedNumberOrderEnumVerificationType1` | `PhoneCall` to `"phone-call"` | `hostedNumberOrderEnumVerificationType1Schema` |
| `IncomingPhoneNumberEnumAddressRequirement` | `None` to `"none"` · `Any` to `"any"` · `Local` to `"local"` · `Foreign` to `"foreign"` | `incomingPhoneNumberEnumAddressRequirementSchema` |
| `IncomingPhoneNumberEnumEmergencyAddressStatus` | `Registered` to `"registered"` · `Unregistered` to `"unregistered"` · `PendingRegistration` to `"pending-registration"` · `RegistrationFailure` to `"registration-failure"` · `PendingUnregistration` to `"pending-unregistration"` · `UnregistrationFailure` to `"unregistration-failure"` | `incomingPhoneNumberEnumEmergencyAddressStatusSchema` |
| `IncomingPhoneNumberEnumEmergencyStatus` | `Active` to `"Active"` · `Inactive` to `"Inactive"` | `incomingPhoneNumberEnumEmergencyStatusSchema` |
| `IncomingPhoneNumberEnumVoiceReceiveMode` | `Voice` to `"voice"` · `Fax` to `"fax"` | `incomingPhoneNumberEnumVoiceReceiveModeSchema` |
| `IncomingPhoneNumberLocalEnumAddressRequirement` | `None` to `"none"` · `Any` to `"any"` · `Local` to `"local"` · `Foreign` to `"foreign"` | `incomingPhoneNumberLocalEnumAddressRequirementSchema` |
| `IncomingPhoneNumberLocalEnumEmergencyAddressStatus` | `Registered` to `"registered"` · `Unregistered` to `"unregistered"` · `PendingRegistration` to `"pending-registration"` · `RegistrationFailure` to `"registration-failure"` · `PendingUnregistration` to `"pending-unregistration"` · `UnregistrationFailure` to `"unregistration-failure"` | `incomingPhoneNumberLocalEnumEmergencyAddressStatusSchema` |
| `IncomingPhoneNumberLocalEnumEmergencyStatus` | `Active` to `"Active"` · `Inactive` to `"Inactive"` | `incomingPhoneNumberLocalEnumEmergencyStatusSchema` |
| `IncomingPhoneNumberLocalEnumVoiceReceiveMode` | `Voice` to `"voice"` · `Fax` to `"fax"` | `incomingPhoneNumberLocalEnumVoiceReceiveModeSchema` |
| `IncomingPhoneNumberMobileEnumAddressRequirement` | `None` to `"none"` · `Any` to `"any"` · `Local` to `"local"` · `Foreign` to `"foreign"` | `incomingPhoneNumberMobileEnumAddressRequirementSchema` |
| `IncomingPhoneNumberMobileEnumEmergencyAddressStatus` | `Registered` to `"registered"` · `Unregistered` to `"unregistered"` · `PendingRegistration` to `"pending-registration"` · `RegistrationFailure` to `"registration-failure"` · `PendingUnregistration` to `"pending-unregistration"` · `UnregistrationFailure` to `"unregistration-failure"` | `incomingPhoneNumberMobileEnumEmergencyAddressStatusSchema` |
| `IncomingPhoneNumberMobileEnumEmergencyStatus` | `Active` to `"Active"` · `Inactive` to `"Inactive"` | `incomingPhoneNumberMobileEnumEmergencyStatusSchema` |
| `IncomingPhoneNumberMobileEnumVoiceReceiveMode` | `Voice` to `"voice"` · `Fax` to `"fax"` | `incomingPhoneNumberMobileEnumVoiceReceiveModeSchema` |
| `IncomingPhoneNumberTollFreeEnumAddressRequirement` | `None` to `"none"` · `Any` to `"any"` · `Local` to `"local"` · `Foreign` to `"foreign"` | `incomingPhoneNumberTollFreeEnumAddressRequirementSchema` |
| `IncomingPhoneNumberTollFreeEnumEmergencyAddressStatus` | `Registered` to `"registered"` · `Unregistered` to `"unregistered"` · `PendingRegistration` to `"pending-registration"` · `RegistrationFailure` to `"registration-failure"` · `PendingUnregistration` to `"pending-unregistration"` · `UnregistrationFailure` to `"unregistration-failure"` | `incomingPhoneNumberTollFreeEnumEmergencyAddressStatusSchema` |
| `IncomingPhoneNumberTollFreeEnumEmergencyStatus` | `Active` to `"Active"` · `Inactive` to `"Inactive"` | `incomingPhoneNumberTollFreeEnumEmergencyStatusSchema` |
| `IncomingPhoneNumberTollFreeEnumVoiceReceiveMode` | `Voice` to `"voice"` · `Fax` to `"fax"` | `incomingPhoneNumberTollFreeEnumVoiceReceiveModeSchema` |
| `InsightsConversationalAiEnumGranularity` | `Days` to `"days"` · `Weeks` to `"weeks"` · `Months` to `"months"` · `Quarters` to `"quarters"` · `Years` to `"years"` | `insightsConversationalAiEnumGranularitySchema` |
| `InsightsConversationalAiEnumName` | `PredictiveScores` to `"predictive_scores"` · `ChannelMetrics` to `"channel_metrics"` · `AgentMetrics` to `"agent_metrics"` · `QueueMetrics` to `"queue_metrics"` · `AgentsCsatSummary` to `"agents_csat_summary"` · `TopicMetrics` to `"topic_metrics"` · `ConversationMetrics` to `"conversation_metrics"` · `TrendMetrics` to `"trend_metrics"` | `insightsConversationalAiEnumNameSchema` |
| `InsightsConversationalAiEnumScoreId` | `PredictedCsat` to `"~predicted-csat"` · `AgentExperience` to `"~agent-experience"` · `CustomerEffort` to `"~customer-effort"` · `MultitouchRisk` to `"~multitouch-risk"` | `insightsConversationalAiEnumScoreIdSchema` |
| `InsightsConversationalAiEnumSortBy` | `RecordCount` to `"record_count"` · `ScoredCount` to `"scored_count"` · `Total` to `"total"` · `Mean` to `"mean"` · `ScoredMean` to `"scored_mean"` · `Score` to `"score"` | `insightsConversationalAiEnumSortBySchema` |
| `InsightsConversationalAiEnumTier` | `Low` to `"Low"` · `High` to `"High"` · `Neutral` to `"Neutral"` | `insightsConversationalAiEnumTierSchema` |
| `InsightsConversationalAiEnumType` | `Metrics` to `"metrics"` · `Summary` to `"summary"` · `Trend` to `"trend"` | `insightsConversationalAiEnumTypeSchema` |
| `InteractionChannelAppEnumStatus` | `Adding` to `"adding"` · `Active` to `"active"` · `Pausing` to `"pausing"` · `Paused` to `"paused"` · `Resuming` to `"resuming"` · `Removing` to `"removing"` · `Removed` to `"removed"` · `Errored` to `"errored"` | `interactionChannelAppEnumStatusSchema` |
| `InteractionChannelAppEnumType` | `Transcription` to `"transcription"` · `Studio` to `"studio"` · `Copilot` to `"copilot"` | `interactionChannelAppEnumTypeSchema` |
| `InteractionChannelEnumChannelStatus` | `Setup` to `"setup"` · `Active` to `"active"` · `Failed` to `"failed"` · `Closed` to `"closed"` · `Inactive` to `"inactive"` · `Pause` to `"pause"` · `Transfer` to `"transfer"` | `interactionChannelEnumChannelStatusSchema` |
| `InteractionChannelEnumStatus` | `Closed` to `"closed"` · `Wrapup` to `"wrapup"` | `interactionChannelEnumStatusSchema` |
| `InteractionChannelEnumType` | `Voice` to `"voice"` · `Sms` to `"sms"` · `Email` to `"email"` · `Web` to `"web"` · `Whatsapp` to `"whatsapp"` · `Chat` to `"chat"` · `Messenger` to `"messenger"` · `Gbm` to `"gbm"` | `interactionChannelEnumTypeSchema` |
| `InteractionChannelEnumUpdateChannelStatus` | `Closed` to `"closed"` · `Inactive` to `"inactive"` | `interactionChannelEnumUpdateChannelStatusSchema` |
| `InteractionChannelInviteEnumAction` | `Accept` to `"accept"` · `Decline` to `"decline"` | `interactionChannelInviteEnumActionSchema` |
| `InteractionChannelInviteEnumType` | `Taskrouter` to `"taskrouter"` | `interactionChannelInviteEnumTypeSchema` |
| `InteractionChannelParticipantEnumStatus` | `Closed` to `"closed"` · `Wrapup` to `"wrapup"` | `interactionChannelParticipantEnumStatusSchema` |
| `InteractionChannelParticipantEnumType` | `Supervisor` to `"supervisor"` · `Customer` to `"customer"` · `External` to `"external"` · `Agent` to `"agent"` · `Unknown` to `"unknown"` | `interactionChannelParticipantEnumTypeSchema` |
| `InteractionEnumResourceStatus` | `Accepted` to `"accepted"` · `Answered` to `"answered"` · `Busy` to `"busy"` · `Canceled` to `"canceled"` · `Completed` to `"completed"` · `Deleted` to `"deleted"` · `Delivered` to `"delivered"` · `DeliveryUnknown` to `"delivery-unknown"` · `Failed` to `"failed"` · `InProgress` to `"in-progress"` · `Initiated` to `"initiated"` · `NoAnswer` to `"no-answer"` · `Queued` to `"queued"` · `Received` to `"received"` · `Receiving` to `"receiving"` · `Ringing` to `"ringing"` · `Scheduled` to `"scheduled"` · `Sending` to `"sending"` · `Sent` to `"sent"` · `Undelivered` to `"undelivered"` · `Unknown` to `"unknown"` | `interactionEnumResourceStatusSchema` |
| `InteractionEnumType` | `Message` to `"message"` · `Voice` to `"voice"` · `Unknown` to `"unknown"` | `interactionEnumTypeSchema` |
| `InteractionTransferEnumTransferStatus` | `Active` to `"active"` · `Failed` to `"failed"` · `Completed` to `"completed"` | `interactionTransferEnumTransferStatusSchema` |
| `InteractionTransferEnumTransferType` | `Warm` to `"warm"` · `Cold` to `"cold"` · `External` to `"external"` | `interactionTransferEnumTransferTypeSchema` |
| `MessageEnumAddressRetention` | `Retain` to `"retain"` · `Obfuscate` to `"obfuscate"` | `messageEnumAddressRetentionSchema` |
| `MessageEnumContentRetention` | `Retain` to `"retain"` · `Discard` to `"discard"` | `messageEnumContentRetentionSchema` |
| `MessageEnumDirection` | `Inbound` to `"inbound"` · `OutboundApi` to `"outbound-api"` · `OutboundCall` to `"outbound-call"` · `OutboundReply` to `"outbound-reply"` | `messageEnumDirectionSchema` |
| `MessageEnumRiskCheck` | `Enable` to `"enable"` · `Disable` to `"disable"` | `messageEnumRiskCheckSchema` |
| `MessageEnumScheduleType` | `Fixed` to `"fixed"` | `messageEnumScheduleTypeSchema` |
| `MessageEnumStatus` | `Queued` to `"queued"` · `Sending` to `"sending"` · `Sent` to `"sent"` · `Failed` to `"failed"` · `Delivered` to `"delivered"` · `Undelivered` to `"undelivered"` · `Receiving` to `"receiving"` · `Received` to `"received"` · `Accepted` to `"accepted"` · `Scheduled` to `"scheduled"` · `Read` to `"read"` · `PartiallyDelivered` to `"partially_delivered"` · `Canceled` to `"canceled"` | `messageEnumStatusSchema` |
| `MessageEnumTrafficType` | `Free` to `"free"` | `messageEnumTrafficTypeSchema` |
| `MessageEnumUpdateStatus` | `Canceled` to `"canceled"` | `messageEnumUpdateStatusSchema` |
| `MessageFeedbackEnumOutcome` | `Confirmed` to `"confirmed"` · `Unconfirmed` to `"unconfirmed"` | `messageFeedbackEnumOutcomeSchema` |
| `MessageInteractionEnumResourceStatus` | `Accepted` to `"accepted"` · `Answered` to `"answered"` · `Busy` to `"busy"` · `Canceled` to `"canceled"` · `Completed` to `"completed"` · `Deleted` to `"deleted"` · `Delivered` to `"delivered"` · `DeliveryUnknown` to `"delivery-unknown"` · `Failed` to `"failed"` · `InProgress` to `"in-progress"` · `Initiated` to `"initiated"` · `NoAnswer` to `"no-answer"` · `Queued` to `"queued"` · `Received` to `"received"` · `Receiving` to `"receiving"` · `Ringing` to `"ringing"` · `Scheduled` to `"scheduled"` · `Sending` to `"sending"` · `Sent` to `"sent"` · `Undelivered` to `"undelivered"` · `Unknown` to `"unknown"` | `messageInteractionEnumResourceStatusSchema` |
| `MessageInteractionEnumType` | `Message` to `"message"` · `Voice` to `"voice"` · `Unknown` to `"unknown"` | `messageInteractionEnumTypeSchema` |
| `MessagingV2RcsCarrierStatus` | `Unknown` to `"UNKNOWN"` · `Unlaunched` to `"UNLAUNCHED"` · `CarrierReview` to `"CARRIER_REVIEW"` · `Approved` to `"APPROVED"` · `Rejected` to `"REJECTED"` · `Suspended` to `"SUSPENDED"` | `messagingV2RcsCarrierStatusSchema` |
| `MessagingV2RcsCountryStatus` | `Online` to `"ONLINE"` · `Offline` to `"OFFLINE"` · `TwilioReview` to `"TWILIO_REVIEW"` · `PendingVerification` to `"PENDING_VERIFICATION"` | `messagingV2RcsCountryStatusSchema` |
| `MetricEnumStreamDirection` | `Unknown` to `"unknown"` · `Inbound` to `"inbound"` · `Outbound` to `"outbound"` · `Both` to `"both"` | `metricEnumStreamDirectionSchema` |
| `MetricEnumTwilioEdge` | `UnknownEdge` to `"unknown_edge"` · `CarrierEdge` to `"carrier_edge"` · `SipEdge` to `"sip_edge"` · `SdkEdge` to `"sdk_edge"` · `ClientEdge` to `"client_edge"` | `metricEnumTwilioEdgeSchema` |
| `NewFactorEnumFactorStatuses` | `Unverified` to `"unverified"` · `Verified` to `"verified"` | `newFactorEnumFactorStatusesSchema` |
| `NewFactorEnumFactorTypes` | `Push` to `"push"` · `Totp` to `"totp"` · `Passkeys` to `"passkeys"` | `newFactorEnumFactorTypesSchema` |
| `NewFactorEnumNotificationPlatforms` | `Apn` to `"apn"` · `Fcm` to `"fcm"` · `None` to `"none"` | `newFactorEnumNotificationPlatformsSchema` |
| `NewFactorEnumTotpAlgorithms` | `Sha1` to `"sha1"` · `Sha256` to `"sha256"` · `Sha512` to `"sha512"` | `newFactorEnumTotpAlgorithmsSchema` |
| `ParticipantConversationEnumState` | `Inactive` to `"inactive"` · `Active` to `"active"` · `Closed` to `"closed"` | `participantConversationEnumStateSchema` |
| `ParticipantEnumStatus` | `Queued` to `"queued"` · `Connecting` to `"connecting"` · `Ringing` to `"ringing"` · `Connected` to `"connected"` · `Complete` to `"complete"` · `Failed` to `"failed"` | `participantEnumStatusSchema` |
| `PaymentsEnumBankAccountType` | `ConsumerChecking` to `"consumer-checking"` · `ConsumerSavings` to `"consumer-savings"` · `CommercialChecking` to `"commercial-checking"` | `paymentsEnumBankAccountTypeSchema` |
| `PaymentsEnumCapture` | `PaymentCardNumber` to `"payment-card-number"` · `ExpirationDate` to `"expiration-date"` · `SecurityCode` to `"security-code"` · `PostalCode` to `"postal-code"` · `BankRoutingNumber` to `"bank-routing-number"` · `BankAccountNumber` to `"bank-account-number"` · `PaymentCardNumberMatcher` to `"payment-card-number-matcher"` · `ExpirationDateMatcher` to `"expiration-date-matcher"` · `SecurityCodeMatcher` to `"security-code-matcher"` · `PostalCodeMatcher` to `"postal-code-matcher"` | `paymentsEnumCaptureSchema` |
| `PaymentsEnumPaymentMethod` | `CreditCard` to `"credit-card"` · `AchDebit` to `"ach-debit"` | `paymentsEnumPaymentMethodSchema` |
| `PaymentsEnumStatus` | `Complete` to `"complete"` · `Cancel` to `"cancel"` | `paymentsEnumStatusSchema` |
| `PaymentsEnumTokenType` | `OneTime` to `"one-time"` · `Reusable` to `"reusable"` · `PaymentMethod` to `"payment-method"` | `paymentsEnumTokenTypeSchema` |
| `PhoneNumberEnumType` | `Landline` to `"landline"` · `Mobile` to `"mobile"` · `Voip` to `"voip"` | `phoneNumberEnumTypeSchema` |
| `PortingPortabilityEnumNumberType` | `Local` to `"LOCAL"` · `Unknown` to `"UNKNOWN"` · `Mobile` to `"MOBILE"` · `TollFree` to `"TOLL-FREE"` | `portingPortabilityEnumNumberTypeSchema` |
| `PortingWebhookConfigurationDeleteEnumWebhookType` | `PortIn` to `"PORT_IN"` · `PortOut` to `"PORT_OUT"` | `portingWebhookConfigurationDeleteEnumWebhookTypeSchema` |
| `ProvisioningStatusEnumStatus` | `Active` to `"active"` · `InProgress` to `"in-progress"` · `NotConfigured` to `"not-configured"` · `Failed` to `"failed"` | `provisioningStatusEnumStatusSchema` |
| `QuickReplyActionType` | `QuickReply` to `"QUICK_REPLY"` | `quickReplyActionTypeSchema` |
| `RealtimeTranscriptionEnumStatus` | `InProgress` to `"in-progress"` · `Stopped` to `"stopped"` | `realtimeTranscriptionEnumStatusSchema` |
| `RealtimeTranscriptionEnumTrack` | `InboundTrack` to `"inbound_track"` · `OutboundTrack` to `"outbound_track"` · `BothTracks` to `"both_tracks"` | `realtimeTranscriptionEnumTrackSchema` |
| `RealtimeTranscriptionEnumUpdateStatus` | `Stopped` to `"stopped"` | `realtimeTranscriptionEnumUpdateStatusSchema` |
| `RecordingAddOnResultEnumStatus` | `Canceled` to `"canceled"` · `Completed` to `"completed"` · `Deleted` to `"deleted"` · `Failed` to `"failed"` · `InProgress` to `"in-progress"` · `Init` to `"init"` · `Processing` to `"processing"` · `Queued` to `"queued"` | `recordingAddOnResultEnumStatusSchema` |
| `RecordingEnumCodec` | `Vp8` to `"VP8"` · `H264` to `"H264"` · `Opus` to `"OPUS"` · `Pcmu` to `"PCMU"` | `recordingEnumCodecSchema` |
| `RecordingEnumFormat` | `Mka` to `"mka"` · `Mkv` to `"mkv"` | `recordingEnumFormatSchema` |
| `RecordingEnumSource` | `DialVerb` to `"DialVerb"` · `Conference` to `"Conference"` · `OutboundApi` to `"OutboundAPI"` · `Trunking` to `"Trunking"` · `RecordVerb` to `"RecordVerb"` · `StartCallRecordingApi` to `"StartCallRecordingAPI"` · `StartConferenceRecordingApi` to `"StartConferenceRecordingAPI"` | `recordingEnumSourceSchema` |
| `RecordingEnumStatus` | `InProgress` to `"in-progress"` · `Paused` to `"paused"` · `Stopped` to `"stopped"` · `Processing` to `"processing"` · `Completed` to `"completed"` · `Absent` to `"absent"` · `Deleted` to `"deleted"` | `recordingEnumStatusSchema` |
| `RecordingEnumStatus1` | `Processing` to `"processing"` · `Completed` to `"completed"` · `Deleted` to `"deleted"` · `Failed` to `"failed"` | `recordingEnumStatus1Schema` |
| `RecordingEnumType` | `Audio` to `"audio"` · `Video` to `"video"` · `Data` to `"data"` | `recordingEnumTypeSchema` |
| `RecordingTranscriptionEnumStatus` | `InProgress` to `"in-progress"` · `Completed` to `"completed"` · `Failed` to `"failed"` | `recordingTranscriptionEnumStatusSchema` |
| `RegulationEnumEndUserType` | `Individual` to `"individual"` · `Business` to `"business"` | `regulationEnumEndUserTypeSchema` |
| `ReplaceItemsEnumEndUserType` | `Individual` to `"individual"` · `Business` to `"business"` | `replaceItemsEnumEndUserTypeSchema` |
| `ReplaceItemsEnumStatus` | `Draft` to `"draft"` · `PendingReview` to `"pending-review"` · `InReview` to `"in-review"` · `TwilioRejected` to `"twilio-rejected"` · `TwilioApproved` to `"twilio-approved"` · `ProvisionallyApproved` to `"provisionally-approved"` | `replaceItemsEnumStatusSchema` |
| `ReportStatus` | `Created` to `"created"` · `Running` to `"running"` · `Completed` to `"completed"` | `reportStatusSchema` |
| `RoleEnumRoleType` | `Conversation` to `"conversation"` · `Service` to `"service"` | `roleEnumRoleTypeSchema` |
| `RoomEnumRoomType` | `Group` to `"group"` · `Go` to `"go"` · `PeerToPeer` to `"peer-to-peer"` · `GroupSmall` to `"group-small"` | `roomEnumRoomTypeSchema` |
| `RoomEnumVideoCodec` | `Vp8` to `"VP8"` · `H264` to `"H264"` | `roomEnumVideoCodecSchema` |
| `RoomParticipantAnonymizeEnumStatus` | `Connected` to `"connected"` · `Disconnected` to `"disconnected"` | `roomParticipantAnonymizeEnumStatusSchema` |
| `RoomParticipantEnumStatus` | `Connected` to `"connected"` · `Disconnected` to `"disconnected"` · `Reconnecting` to `"reconnecting"` | `roomParticipantEnumStatusSchema` |
| `RoomParticipantPublishedTrackEnumKind` | `Audio` to `"audio"` · `Video` to `"video"` · `Data` to `"data"` | `roomParticipantPublishedTrackEnumKindSchema` |
| `RoomParticipantSubscribedTrackEnumKind` | `Audio` to `"audio"` · `Video` to `"video"` · `Data` to `"data"` | `roomParticipantSubscribedTrackEnumKindSchema` |
| `RoomRecordingEnumCodec` | `Vp8` to `"VP8"` · `H264` to `"H264"` · `Opus` to `"OPUS"` · `Pcmu` to `"PCMU"` | `roomRecordingEnumCodecSchema` |
| `RoomRecordingEnumFormat` | `Mka` to `"mka"` · `Mkv` to `"mkv"` | `roomRecordingEnumFormatSchema` |
| `RoomRecordingEnumStatus` | `Processing` to `"processing"` · `Completed` to `"completed"` · `Deleted` to `"deleted"` · `Failed` to `"failed"` | `roomRecordingEnumStatusSchema` |
| `RoomRecordingEnumType` | `Audio` to `"audio"` · `Video` to `"video"` · `Data` to `"data"` | `roomRecordingEnumTypeSchema` |
| `RoomTranscriptionsEnumStatus` | `Started` to `"started"` · `Stopped` to `"stopped"` · `Failed` to `"failed"` | `roomTranscriptionsEnumStatusSchema` |
| `ServiceBindingEnumBindingType` | `Apn` to `"apn"` · `Gcm` to `"gcm"` · `Fcm` to `"fcm"` · `Twilsock` to `"twilsock"` | `serviceBindingEnumBindingTypeSchema` |
| `ServiceConversationEnumState` | `Inactive` to `"inactive"` · `Active` to `"active"` · `Closed` to `"closed"` · `Initializing` to `"initializing"` | `serviceConversationEnumStateSchema` |
| `ServiceConversationMessageReceiptEnumDeliveryStatus` | `Read` to `"read"` · `Failed` to `"failed"` · `Delivered` to `"delivered"` · `Undelivered` to `"undelivered"` · `Sent` to `"sent"` | `serviceConversationMessageReceiptEnumDeliveryStatusSchema` |
| `ServiceConversationScopedWebhookEnumMethod` | `Get` to `"get"` · `Post` to `"post"` | `serviceConversationScopedWebhookEnumMethodSchema` |
| `ServiceConversationScopedWebhookEnumTarget` | `Webhook` to `"webhook"` · `Trigger` to `"trigger"` · `Studio` to `"studio"` | `serviceConversationScopedWebhookEnumTargetSchema` |
| `ServiceConversationWithParticipantsEnumState` | `Initializing` to `"initializing"` · `Inactive` to `"inactive"` · `Active` to `"active"` · `Closed` to `"closed"` | `serviceConversationWithParticipantsEnumStateSchema` |
| `ServiceEnumGeoMatchLevel` | `AreaCode` to `"area-code"` · `Overlay` to `"overlay"` · `Radius` to `"radius"` · `Country` to `"country"` | `serviceEnumGeoMatchLevelSchema` |
| `ServiceEnumNumberSelectionBehavior` | `AvoidSticky` to `"avoid-sticky"` · `PreferSticky` to `"prefer-sticky"` | `serviceEnumNumberSelectionBehaviorSchema` |
| `ServiceEnumScanMessageContent` | `Inherit` to `"inherit"` · `Enable` to `"enable"` · `Disable` to `"disable"` | `serviceEnumScanMessageContentSchema` |
| `ServiceParticipantConversationEnumState` | `Inactive` to `"inactive"` · `Active` to `"active"` · `Closed` to `"closed"` | `serviceParticipantConversationEnumStateSchema` |
| `ServiceRoleEnumRoleType` | `Conversation` to `"conversation"` · `Service` to `"service"` | `serviceRoleEnumRoleTypeSchema` |
| `ServiceStatsConversationsRatelimitingerrorsEnumSource` | `Sdk` to `"SDK"` · `Api` to `"API"` | `serviceStatsConversationsRatelimitingerrorsEnumSourceSchema` |
| `ServiceUserConversationEnumNotificationLevel` | `Default` to `"default"` · `Muted` to `"muted"` | `serviceUserConversationEnumNotificationLevelSchema` |
| `ServiceUserConversationEnumState` | `Inactive` to `"inactive"` · `Active` to `"active"` · `Closed` to `"closed"` | `serviceUserConversationEnumStateSchema` |
| `SessionEnumMode` | `MessageOnly` to `"message-only"` · `VoiceOnly` to `"voice-only"` · `VoiceAndMessage` to `"voice-and-message"` | `sessionEnumModeSchema` |
| `SessionEnumStatus` | `Open` to `"open"` · `InProgress` to `"in-progress"` · `Closed` to `"closed"` · `Failed` to `"failed"` · `Unknown` to `"unknown"` | `sessionEnumStatusSchema` |
| `SiprecEnumStatus` | `InProgress` to `"in-progress"` · `Stopped` to `"stopped"` | `siprecEnumStatusSchema` |
| `SiprecEnumTrack` | `InboundTrack` to `"inbound_track"` · `OutboundTrack` to `"outbound_track"` · `BothTracks` to `"both_tracks"` | `siprecEnumTrackSchema` |
| `SiprecEnumUpdateStatus` | `Stopped` to `"stopped"` | `siprecEnumUpdateStatusSchema` |
| `SmsFeedbackEnumOutcome` | `Confirmed` to `"confirmed"` · `Unconfirmed` to `"unconfirmed"` · `Received` to `"received"` · `NotReceived` to `"not-received"` · `Delayed` to `"delayed"` | `smsFeedbackEnumOutcomeSchema` |
| `SmsMessageEnumDirection` | `Inbound` to `"inbound"` · `OutboundApi` to `"outbound-api"` · `OutboundCall` to `"outbound-call"` · `OutboundReply` to `"outbound-reply"` | `smsMessageEnumDirectionSchema` |
| `SmsMessageEnumStatus` | `Queued` to `"queued"` · `Sending` to `"sending"` · `Sent` to `"sent"` · `Failed` to `"failed"` · `Delivered` to `"delivered"` · `Undelivered` to `"undelivered"` · `Receiving` to `"receiving"` · `Received` to `"received"` · `Accepted` to `"accepted"` · `Scheduled` to `"scheduled"` · `Read` to `"read"` · `PartiallyDelivered` to `"partially_delivered"` · `Canceled` to `"canceled"` | `smsMessageEnumStatusSchema` |
| `SmsMessageEnumUpdateStatus` | `Canceled` to `"canceled"` | `smsMessageEnumUpdateStatusSchema` |
| `StatsTwilsockRatelimitingerrorsEnumSource` | `Twilsock` to `"TWILSOCK"` | `statsTwilsockRatelimitingerrorsEnumSourceSchema` |
| `Status31` | `Active` to `"ACTIVE"` · `Inactive` to `"INACTIVE"` · `Closed` to `"CLOSED"` | `status31Schema` |
| `StreamEnumStatus` | `InProgress` to `"in-progress"` · `Stopped` to `"stopped"` | `streamEnumStatusSchema` |
| `StreamEnumTrack` | `InboundTrack` to `"inbound_track"` · `OutboundTrack` to `"outbound_track"` · `BothTracks` to `"both_tracks"` | `streamEnumTrackSchema` |
| `StreamEnumUpdateStatus` | `Stopped` to `"stopped"` | `streamEnumUpdateStatusSchema` |
| `SummaryEnumAnsweredBy` | `Unknown` to `"unknown"` · `MachineStart` to `"machine_start"` · `MachineEndBeep` to `"machine_end_beep"` · `MachineEndSilence` to `"machine_end_silence"` · `MachineEndOther` to `"machine_end_other"` · `Human` to `"human"` · `Fax` to `"fax"` | `summaryEnumAnsweredBySchema` |
| `SummaryEnumCallState` | `Ringing` to `"ringing"` · `Completed` to `"completed"` · `Busy` to `"busy"` · `Fail` to `"fail"` · `Noanswer` to `"noanswer"` · `Canceled` to `"canceled"` · `Answered` to `"answered"` · `Undialed` to `"undialed"` | `summaryEnumCallStateSchema` |
| `SummaryEnumCallType` | `Carrier` to `"carrier"` · `Sip` to `"sip"` · `Trunking` to `"trunking"` · `Client` to `"client"` · `Whatsapp` to `"whatsapp"` | `summaryEnumCallTypeSchema` |
| `SummaryEnumProcessingState` | `Complete` to `"complete"` · `Partial` to `"partial"` | `summaryEnumProcessingStateSchema` |
| `SupportingDocumentEnumStatus` | `Draft` to `"draft"` · `PendingReview` to `"pending-review"` · `Rejected` to `"rejected"` · `Approved` to `"approved"` · `Expired` to `"expired"` · `ProvisionallyApproved` to `"provisionally-approved"` | `supportingDocumentEnumStatusSchema` |
| `SupportingDocumentEnumStatus1` | `Draft` to `"DRAFT"` · `PendingReview` to `"PENDING_REVIEW"` · `Rejected` to `"REJECTED"` · `Approved` to `"APPROVED"` · `Expired` to `"EXPIRED"` · `ProvisionallyApproved` to `"PROVISIONALLY_APPROVED"` | `supportingDocumentEnumStatus1Schema` |
| `SyncListItemEnumQueryFromBoundType` | `Inclusive` to `"inclusive"` · `Exclusive` to `"exclusive"` | `syncListItemEnumQueryFromBoundTypeSchema` |
| `SyncMapItemEnumQueryFromBoundType` | `Inclusive` to `"inclusive"` · `Exclusive` to `"exclusive"` | `syncMapItemEnumQueryFromBoundTypeSchema` |
| `TaskEnumStatus` | `Pending` to `"pending"` · `Reserved` to `"reserved"` · `Assigned` to `"assigned"` · `Canceled` to `"canceled"` · `Completed` to `"completed"` · `Wrapping` to `"wrapping"` | `taskEnumStatusSchema` |
| `TaskQueueEnumTaskOrder` | `Fifo` to `"FIFO"` · `Lifo` to `"LIFO"` | `taskQueueEnumTaskOrderSchema` |
| `TaskReservationEnumConferenceEvent` | `Start` to `"start"` · `End` to `"end"` · `Join` to `"join"` · `Leave` to `"leave"` · `Mute` to `"mute"` · `Hold` to `"hold"` · `Speaker` to `"speaker"` | `taskReservationEnumConferenceEventSchema` |
| `TaskReservationEnumStatus` | `Pending` to `"pending"` · `Accepted` to `"accepted"` · `Rejected` to `"rejected"` · `Timeout` to `"timeout"` · `Canceled` to `"canceled"` · `Rescinded` to `"rescinded"` · `Wrapping` to `"wrapping"` · `Completed` to `"completed"` | `taskReservationEnumStatusSchema` |
| `TaskReservationEnumSupervisorMode` | `Monitor` to `"monitor"` · `Whisper` to `"whisper"` · `Barge` to `"barge"` | `taskReservationEnumSupervisorModeSchema` |
| `TollfreeVerificationEnumBusinessRegistrationAuthority` | `Ein` to `"EIN"` · `Cbn` to `"CBN"` · `Crn` to `"CRN"` · `ProvincialNumber` to `"PROVINCIAL_NUMBER"` · `Vat` to `"VAT"` · `Acn` to `"ACN"` · `Abn` to `"ABN"` · `Brn` to `"BRN"` · `Siren` to `"SIREN"` · `Siret` to `"SIRET"` · `Nzbn` to `"NZBN"` · `UStIdNr` to `"USt-IdNr"` · `Cif` to `"CIF"` · `Nif` to `"NIF"` · `Cnpj` to `"CNPJ"` · `Uid` to `"UID"` · `Neq` to `"NEQ"` · `Other` to `"OTHER"` | `tollfreeVerificationEnumBusinessRegistrationAuthoritySchema` |
| `TollfreeVerificationEnumBusinessType` | `PrivateProfit` to `"PRIVATE_PROFIT"` · `PublicProfit` to `"PUBLIC_PROFIT"` · `SoleProprietor` to `"SOLE_PROPRIETOR"` · `NonProfit` to `"NON_PROFIT"` · `Government` to `"GOVERNMENT"` | `tollfreeVerificationEnumBusinessTypeSchema` |
| `TollfreeVerificationEnumOptInType` | `Verbal` to `"VERBAL"` · `WebForm` to `"WEB_FORM"` · `PaperForm` to `"PAPER_FORM"` · `ViaText` to `"VIA_TEXT"` · `MobileQrCode` to `"MOBILE_QR_CODE"` · `Import` to `"IMPORT"` · `ImportPleaseReplace` to `"IMPORT_PLEASE_REPLACE"` | `tollfreeVerificationEnumOptInTypeSchema` |
| `TollfreeVerificationEnumStatus` | `PendingReview` to `"PENDING_REVIEW"` · `InReview` to `"IN_REVIEW"` · `TwilioApproved` to `"TWILIO_APPROVED"` · `TwilioRejected` to `"TWILIO_REJECTED"` | `tollfreeVerificationEnumStatusSchema` |
| `TollfreeVerificationEnumUseCaseCategory` | `TwoFactorAuthentication` to `"TWO_FACTOR_AUTHENTICATION"` · `AccountNotifications` to `"ACCOUNT_NOTIFICATIONS"` · `CustomerCare` to `"CUSTOMER_CARE"` · `CharityNonprofit` to `"CHARITY_NONPROFIT"` · `DeliveryNotifications` to `"DELIVERY_NOTIFICATIONS"` · `FraudAlertMessaging` to `"FRAUD_ALERT_MESSAGING"` · `Events` to `"EVENTS"` · `HigherEducation` to `"HIGHER_EDUCATION"` · `K12` to `"K12"` · `Marketing` to `"MARKETING"` · `PollingAndVotingNonPolitical` to `"POLLING_AND_VOTING_NON_POLITICAL"` · `PoliticalElectionCampaigns` to `"POLITICAL_ELECTION_CAMPAIGNS"` · `PublicServiceAnnouncement` to `"PUBLIC_SERVICE_ANNOUNCEMENT"` · `SecurityAlert` to `"SECURITY_ALERT"` | `tollfreeVerificationEnumUseCaseCategorySchema` |
| `TollfreeVerificationEnumVettingProvider` | `CampaignVerify` to `"CAMPAIGN_VERIFY"` | `tollfreeVerificationEnumVettingProviderSchema` |
| `TranscriptionEnumStatus` | `InProgress` to `"in-progress"` · `Completed` to `"completed"` · `Failed` to `"failed"` | `transcriptionEnumStatusSchema` |
| `TransferEnumTransferStatus` | `Active` to `"active"` · `Failed` to `"failed"` · `Completed` to `"completed"` | `transferEnumTransferStatusSchema` |
| `TransferEnumTransferType` | `Warm` to `"warm"` · `Cold` to `"cold"` · `External` to `"external"` | `transferEnumTransferTypeSchema` |
| `TrustProductEnumStatus` | `Draft` to `"draft"` · `PendingReview` to `"pending-review"` · `InReview` to `"in-review"` · `TwilioRejected` to `"twilio-rejected"` · `TwilioApproved` to `"twilio-approved"` | `trustProductEnumStatusSchema` |
| `UsageTriggerEnumRecurring` | `Daily` to `"daily"` · `Monthly` to `"monthly"` · `Yearly` to `"yearly"` · `Alltime` to `"alltime"` | `usageTriggerEnumRecurringSchema` |
| `UsageTriggerEnumTriggerField` | `Count` to `"count"` · `Usage` to `"usage"` · `Price` to `"price"` | `usageTriggerEnumTriggerFieldSchema` |
| `UserConversationEnumNotificationLevel` | `Default` to `"default"` · `Muted` to `"muted"` | `userConversationEnumNotificationLevelSchema` |
| `UserConversationEnumState` | `Inactive` to `"inactive"` · `Active` to `"active"` · `Closed` to `"closed"` | `userConversationEnumStateSchema` |
| `VerificationAttemptEnumAttemptStatus` | `Confirmed` to `"confirmed"` · `Unconfirmed` to `"unconfirmed"` · `Expired` to `"expired"` | `verificationAttemptEnumAttemptStatusSchema` |
| `VerificationAttemptEnumChannels` | `Sms` to `"sms"` · `Call` to `"call"` · `Email` to `"email"` · `Whatsapp` to `"whatsapp"` · `Rbm` to `"rbm"` | `verificationAttemptEnumChannelsSchema` |
| `VerificationAttemptEnumConversionStatus` | `Converted` to `"converted"` · `Unconverted` to `"unconverted"` | `verificationAttemptEnumConversionStatusSchema` |
| `VerificationAttemptsSummaryEnumChannels` | `Sms` to `"sms"` · `Call` to `"call"` · `Email` to `"email"` · `Whatsapp` to `"whatsapp"` · `Rbm` to `"rbm"` | `verificationAttemptsSummaryEnumChannelsSchema` |
| `VerificationCheckEnumChannel` | `Sms` to `"sms"` · `Call` to `"call"` · `Email` to `"email"` · `Whatsapp` to `"whatsapp"` · `Sna` to `"sna"` | `verificationCheckEnumChannelSchema` |
| `VerificationEnumChannel` | `Sms` to `"sms"` · `Call` to `"call"` · `Email` to `"email"` · `Whatsapp` to `"whatsapp"` · `Sna` to `"sna"` | `verificationEnumChannelSchema` |
| `VerificationEnumStatus` | `Canceled` to `"canceled"` · `Approved` to `"approved"` | `verificationEnumStatusSchema` |
| `VideoParticipantSummaryEnumCodec` | `Vp8` to `"VP8"` · `H264` to `"H264"` · `Vp9` to `"VP9"` · `Opus` to `"opus"` | `videoParticipantSummaryEnumCodecSchema` |
| `VideoParticipantSummaryEnumEdgeLocation` | `Ashburn` to `"ashburn"` · `Dublin` to `"dublin"` · `Frankfurt` to `"frankfurt"` · `Singapore` to `"singapore"` · `Sydney` to `"sydney"` · `SaoPaulo` to `"sao_paulo"` · `Roaming` to `"roaming"` · `Umatilla` to `"umatilla"` · `Tokyo` to `"tokyo"` | `videoParticipantSummaryEnumEdgeLocationSchema` |
| `VideoParticipantSummaryEnumRoomStatus` | `InProgress` to `"in_progress"` · `Connected` to `"connected"` · `Completed` to `"completed"` · `Disconnected` to `"disconnected"` | `videoParticipantSummaryEnumRoomStatusSchema` |
| `VideoParticipantSummaryEnumTwilioRealm` | `Us1` to `"us1"` · `Us2` to `"us2"` · `Au1` to `"au1"` · `Br1` to `"br1"` · `Ie1` to `"ie1"` · `Jp1` to `"jp1"` · `Sg1` to `"sg1"` · `In1` to `"in1"` · `De1` to `"de1"` · `Gll` to `"gll"` | `videoParticipantSummaryEnumTwilioRealmSchema` |
| `VideoRoomSummaryEnumCodec` | `Vp8` to `"VP8"` · `H264` to `"H264"` · `Vp9` to `"VP9"` · `Opus` to `"opus"` | `videoRoomSummaryEnumCodecSchema` |
| `VideoRoomSummaryEnumCreatedMethod` | `Sdk` to `"sdk"` · `AdHoc` to `"ad_hoc"` · `Api` to `"api"` | `videoRoomSummaryEnumCreatedMethodSchema` |
| `VideoRoomSummaryEnumEdgeLocation` | `Ashburn` to `"ashburn"` · `Dublin` to `"dublin"` · `Frankfurt` to `"frankfurt"` · `Singapore` to `"singapore"` · `Sydney` to `"sydney"` · `SaoPaulo` to `"sao_paulo"` · `Roaming` to `"roaming"` · `Umatilla` to `"umatilla"` · `Tokyo` to `"tokyo"` | `videoRoomSummaryEnumEdgeLocationSchema` |
| `VideoRoomSummaryEnumEndReason` | `RoomEndedViaApi` to `"room_ended_via_api"` · `Timeout` to `"timeout"` | `videoRoomSummaryEnumEndReasonSchema` |
| `VideoRoomSummaryEnumProcessingState` | `Complete` to `"complete"` · `InProgress` to `"in_progress"` · `Timeout` to `"timeout"` · `NotStarted` to `"not_started"` | `videoRoomSummaryEnumProcessingStateSchema` |
| `VideoRoomSummaryEnumRoomStatus` | `InProgress` to `"in_progress"` · `Completed` to `"completed"` | `videoRoomSummaryEnumRoomStatusSchema` |
| `VideoRoomSummaryEnumRoomType` | `Go` to `"go"` · `PeerToPeer` to `"peer_to_peer"` · `Group` to `"group"` · `GroupSmall` to `"group_small"` | `videoRoomSummaryEnumRoomTypeSchema` |
| `VideoRoomSummaryEnumTwilioRealm` | `Us1` to `"us1"` · `Us2` to `"us2"` · `Au1` to `"au1"` · `Br1` to `"br1"` · `Ie1` to `"ie1"` · `Jp1` to `"jp1"` · `Sg1` to `"sg1"` · `In1` to `"in1"` · `De1` to `"de1"` · `Gll` to `"gll"` | `videoRoomSummaryEnumTwilioRealmSchema` |
| `WebChannelEnumChatStatus` | `Inactive` to `"inactive"` | `webChannelEnumChatStatusSchema` |
| `WebhookEnumStatus` | `Enabled` to `"enabled"` · `Disabled` to `"disabled"` | `webhookEnumStatusSchema` |
| `WebhookEnumVersion` | `V1` to `"v1"` · `V2` to `"v2"` | `webhookEnumVersionSchema` |
| `WebviewSizeType` | `Tall` to `"TALL"` · `Full` to `"FULL"` · `Half` to `"HALF"` · `None` to `"NONE"` | `webviewSizeTypeSchema` |
| `WhatsappSenderEnumStatus` | `Configuring` to `"Configuring"` · `PendingVerification` to `"PendingVerification"` · `Configured` to `"Configured"` · `ConfigurationError` to `"ConfigurationError"` · `VerificationError` to `"VerificationError"` | `whatsappSenderEnumStatusSchema` |
| `WhatsappTemplateEnumCategory` | `AccountUpdate` to `"ACCOUNT_UPDATE"` · `AlertUpdate` to `"ALERT_UPDATE"` · `AutoReply` to `"AUTO_REPLY"` · `AppointmentUpdate` to `"APPOINTMENT_UPDATE"` · `IssueResolution` to `"ISSUE_RESOLUTION"` · `PaymentUpdate` to `"PAYMENT_UPDATE"` · `PersonalFinanceUpdate` to `"PERSONAL_FINANCE_UPDATE"` · `ReservationUpdate` to `"RESERVATION_UPDATE"` · `ShippingUpdate` to `"SHIPPING_UPDATE"` · `TicketUpdate` to `"TICKET_UPDATE"` · `TransportationUpdate` to `"TRANSPORTATION_UPDATE"` · `Marketing` to `"MARKETING"` · `Otp` to `"OTP"` · `Transactional` to `"TRANSACTIONAL"` · `Authentication` to `"AUTHENTICATION"` · `Utility` to `"UTILITY"` | `whatsappTemplateEnumCategorySchema` |
| `WorkerReservationEnumConferenceEvent` | `Start` to `"start"` · `End` to `"end"` · `Join` to `"join"` · `Leave` to `"leave"` · `Mute` to `"mute"` · `Hold` to `"hold"` · `Speaker` to `"speaker"` | `workerReservationEnumConferenceEventSchema` |
| `WorkerReservationEnumStatus` | `Pending` to `"pending"` · `Accepted` to `"accepted"` · `Rejected` to `"rejected"` · `Timeout` to `"timeout"` · `Canceled` to `"canceled"` · `Rescinded` to `"rescinded"` · `Wrapping` to `"wrapping"` · `Completed` to `"completed"` | `workerReservationEnumStatusSchema` |
| `WorkspaceEnumQueueOrder` | `Fifo` to `"FIFO"` · `Lifo` to `"LIFO"` | `workspaceEnumQueueOrderSchema` |

**Unions.** A discriminated union is narrowed with an exhaustive `switch` on its tag, with no fallback arm and no type guard to import. One without a discriminant is narrowed on the shape of its arms.

| Union | Variants | Narrow with | Source |
| --- | --- | --- | --- |
| `Content` | no discriminant | `typeof`, or an `in` check | `src/models/unions/content.ts` |
| `Content2` | no discriminant | `typeof`, or an `in` check | `src/models/unions/content2.ts` |
| `TypingIndicatorRequest` | `channel: "WHATSAPP"` · `channel: "APPLE"` | `switch (x.channel)` | `src/models/unions/typing-indicator-request.ts` |
| `MessagingV1ServiceUsAppToPersonResponse` | no discriminant | `typeof`, or an `in` check | `src/models/unions/messaging-v1-service-us-app-to-person-response.ts` |

**Wire-name divergences.** Only these model properties are sent and received under a different name; every other property uses its TypeScript name verbatim.

| Type | Property | Wire key |
| --- | --- | --- |
| `AccountsCallsRecordingsSidJson201041408Error` | `moreInfo` | `more_info` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `moreInfo` | `more_info` |
| `Address` | `street2` | `street_2` |
| `AnswerRate` | `stshA` | `stsh_a` |
| `AnswerRate` | `stshB` | `stsh_b` |
| `AnswerRate` | `stshC` | `stsh_c` |
| `AnsweringMachineDetection` | `totalCalls` | `total_calls` |
| `AnsweringMachineDetection` | `answeredByHumanPercentage` | `answered_by_human_percentage` |
| `AnsweringMachineDetection` | `answeredByMachinePercentage` | `answered_by_machine_percentage` |
| `AnsweringMachineDetection1` | `totalCalls` | `total_calls` |
| `AnsweringMachineDetection1` | `answeredByHumanPercentage` | `answered_by_human_percentage` |
| `AnsweringMachineDetection1` | `answeredByMachinePercentage` | `answered_by_machine_percentage` |
| `Billing` | `recurringBillableItemSid` | `RecurringBillableItemSid` |
| `Billing` | `setupBillableItemSid` | `SetupBillableItemSid` |
| `BusinessInformation` | `customerFacingProfile` | `customer_facing_profile` |
| `BusinessInformation1` | `managingCompanyProfile` | `managing_company_profile` |
| `BusinessInformation1` | `customerFacingProfile` | `customer_facing_profile` |
| `BusinessInformation1` | `businessWebsite` | `business_website` |
| `BusinessInformation1` | `einManagingCompanyProfile` | `ein_managing_company_profile` |
| `BusinessInformation1` | `einCustomerFacingProfile` | `ein_customer_facing_profile` |
| `CallCount` | `stshA` | `stsh_a` |
| `CallCount` | `stshB` | `stsh_b` |
| `CallCount` | `stshC` | `stsh_c` |
| `CallForwardingInfo` | `callForwardingEnabled` | `call_forwarding_enabled` |
| `CallForwardingInfo` | `errorCode` | `error_code` |
| `CallerNameInfo` | `callerName` | `caller_name` |
| `CallerNameInfo` | `callerType` | `caller_type` |
| `CallerNameInfo` | `errorCode` | `error_code` |
| `Capabilities1` | `voice` | `Voice` |
| `Capabilities1` | `restrictedVoice` | `RestrictedVoice` |
| `Capabilities1` | `sms` | `Sms` |
| `Capabilities1` | `restrictedSms` | `RestrictedSms` |
| `Capabilities1` | `mms` | `Mms` |
| `Capabilities1` | `restrictedMms` | `RestrictedMms` |
| `Capabilities1` | `fax` | `Fax` |
| `Capabilities1` | `restrictedFax` | `RestrictedFax` |
| `Capabilities1` | `sip` | `Sip` |
| `Carrier` | `totalCalls` | `total_calls` |
| `Carrier` | `blockedCalls` | `blocked_calls` |
| `Carrier` | `blockedCallsPercentage` | `blocked_calls_percentage` |
| `Certifications` | `resident` | `Resident` |
| `Certifications` | `nonResident` | `Non-Resident` |
| `ComplianceKeywords` | `optOutFiltering` | `opt_out_filtering` |
| `Config` | `relyingParty` | `relying_party` |
| `Config` | `authenticatorAttachment` | `authenticator_attachment` |
| `Config` | `discoverableCredentials` | `discoverable_credentials` |
| `Config` | `userVerification` | `user_verification` |
| `ContentCreateRequest` | `friendlyName` | `friendly_name` |
| `ContentUpdateRequest` | `friendlyName` | `friendly_name` |
| `CountryRequirement` | `isoCountry` | `iso_country` |
| `CountryRequirement` | `registrationRequired` | `registration_required` |
| `CountryRequirement` | `slaInDays` | `sla_in_days` |
| `CountryRequirement` | `promotionalSupported` | `promotional_supported` |
| `CountryRequirement` | `promotionalSenderIdPrefix` | `promotional_sender_id_prefix` |
| `CountryRequirement` | `promotionalSenderIdSuffix` | `promotional_sender_id_suffix` |
| `CountryRequirement` | `pricingScheme` | `pricing_scheme` |
| `CountryRequirement` | `documentationUrl` | `documentation_url` |
| `CountryRequirement` | `documentationTemplateUrl` | `documentation_template_url` |
| `CountryRequirement` | `documentTypeMachineNames` | `document_type_machine_names` |
| `CountryRequirement` | `domesticDocumentTypeMachineNames` | `domestic_document_type_machine_names` |
| `CountryRequirement` | `internationalDocumentTypeMachineNames` | `international_document_type_machine_names` |
| `CountryRequirement` | `senderIdRegistrationRules` | `sender_id_registration_rules` |
| `CountryRequirement` | `usoEnabled` | `uso_enabled` |
| `CreateNewPasskeysFactorRequest` | `friendlyName` | `friendly_name` |
| `CreatePasskeysChallengeRequest` | `factorSid` | `factor_sid` |
| `CreateRegistrationRequest` | `globalHqCountry` | `global_hq_country` |
| `CreateRegistrationRequest` | `targetCountry` | `target_country` |
| `CreateRegistrationRequest` | `messagePurpose` | `message_purpose` |
| `CreateRegistrationRequest` | `senderId` | `sender_id` |
| `CreateRegistrationRequest` | `businessIdentity` | `business_identity` |
| `CreateRegistrationRequest` | `isSubassigned` | `is_subassigned` |
| `CreateRegistrationRequest` | `friendlyName` | `friendly_name` |
| `CreateRegistrationRequest` | `customerProfileBundleSid` | `customer_profile_bundle_sid` |
| `CreateRegistrationRequest` | `isvOptInConsent` | `isv_opt_in_consent` |
| `CreateRegistrationResponse` | `bundleSid` | `bundle_sid` |
| `CreateRegistrationResponse` | `inquiryId` | `inquiry_id` |
| `CreateRegistrationResponse` | `inquirySessionToken` | `inquiry_session_token` |
| `CreateSenderIdRegistration` | `isoCountries` | `iso_countries` |
| `CreateSenderIdRegistration` | `companySubsidiary` | `company_subsidiary` |
| `CreateSenderIdRegistration` | `businessProfileSid` | `business_profile_sid` |
| `CreateSenderIdRegistration` | `identitySid` | `identity_sid` |
| `CreateSenderIdRegistration` | `addressSid` | `address_sid` |
| `CreateSenderIdRegistrationBundleInquiryResponse` | `inquiryId` | `inquiry_id` |
| `CreateSenderIdRegistrationBundleInquiryResponse` | `inquirySessionToken` | `inquiry_session_token` |
| `CreateSenderIdRegistrationBundleInquiryResponse` | `applicationSid` | `application_sid` |
| `CreateSenderIdRegistrationBundleInquiryResponse` | `bundleSid` | `bundle_sid` |
| `CreateShortCodeApplicationBundleInquiryRequest` | `applicationSid` | `application_sid` |
| `CreateShortCodeApplicationBundleInquiryResponse` | `inquiryId` | `inquiry_id` |
| `CreateShortCodeApplicationBundleInquiryResponse` | `inquirySessionToken` | `inquiry_session_token` |
| `CreateShortCodeApplicationBundleInquiryResponse` | `applicationSid` | `application_sid` |
| `CreateShortCodeApplicationBundleInquiryResponse` | `bundleSid` | `bundle_sid` |
| `CreateShortCodeApplicationRequest` | `friendlyName` | `friendly_name` |
| `CreateShortCodeApplicationRequest` | `isoCountry` | `iso_country` |
| `CreateShortCodeApplicationRequest` | `businessInformation` | `business_information` |
| `CreateShortCodeApplicationResponse` | `applicationRequirementsSid` | `application_requirements_sid` |
| `CreateShortCodeApplicationResponse` | `applicationRequirementsVersion` | `application_requirements_version` |
| `CreateShortCodeApplicationResponse` | `accountSid` | `account_sid` |
| `CreateShortCodeApplicationResponse` | `bundleSid` | `bundle_sid` |
| `CreateShortCodeApplicationResponse` | `zendeskTicketId` | `zendesk_ticket_id` |
| `CreateShortCodeApplicationResponse` | `friendlyName` | `friendly_name` |
| `CreateShortCodeApplicationResponse` | `notificationEmails` | `notification_emails` |
| `CreateShortCodeApplicationResponse` | `isoCountry` | `iso_country` |
| `CreateShortCodeApplicationResponse` | `businessInformation` | `business_information` |
| `CreateShortCodeApplicationResponse` | `userSignUp` | `user_sign_up` |
| `CreateShortCodeApplicationResponse` | `complianceKeywords` | `compliance_keywords` |
| `CreateShortCodeApplicationResponse` | `contentExamples` | `content_examples` |
| `CreateShortCodeApplicationResponse` | `smsCampaignDetails` | `sms_campaign_details` |
| `CreateShortCodeApplicationResponse` | `dateCreated` | `date_created` |
| `CreateShortCodeApplicationResponse` | `dateUpdated` | `date_updated` |
| `CreateShortCodeApplicationResponse` | `createdBy` | `created_by` |
| `CreateShortCodeApplicationResponse` | `updatedBy` | `updated_by` |
| `Flags` | `national` | `National` |
| `Flags` | `international` | `International` |
| `Geography` | `isoCountry` | `IsoCountry` |
| `Geography` | `region` | `Region` |
| `Geography` | `locality` | `Locality` |
| `Geography` | `postalCode` | `PostalCode` |
| `Geography` | `latitude` | `Latitude` |
| `Geography` | `longitude` | `Longitude` |
| `Geography` | `lata` | `Lata` |
| `Geography` | `rateCenter` | `RateCenter` |
| `IdentityMatchInfo` | `firstNameMatch` | `first_name_match` |
| `IdentityMatchInfo` | `lastNameMatch` | `last_name_match` |
| `IdentityMatchInfo` | `addressLinesMatch` | `address_lines_match` |
| `IdentityMatchInfo` | `cityMatch` | `city_match` |
| `IdentityMatchInfo` | `stateMatch` | `state_match` |
| `IdentityMatchInfo` | `postalCodeMatch` | `postal_code_match` |
| `IdentityMatchInfo` | `addressCountryMatch` | `address_country_match` |
| `IdentityMatchInfo` | `nationalIdMatch` | `national_id_match` |
| `IdentityMatchInfo` | `dateOfBirthMatch` | `date_of_birth_match` |
| `IdentityMatchInfo` | `summaryScore` | `summary_score` |
| `IdentityMatchInfo` | `errorCode` | `error_code` |
| `IdentityMatchInfo` | `errorMessage` | `error_message` |
| `IdentityMatchParameters` | `firstName` | `first_name` |
| `IdentityMatchParameters` | `lastName` | `last_name` |
| `IdentityMatchParameters` | `addressLine1` | `address_line1` |
| `IdentityMatchParameters` | `addressLine2` | `address_line2` |
| `IdentityMatchParameters` | `postalCode` | `postal_code` |
| `IdentityMatchParameters` | `addressCountryCode` | `address_country_code` |
| `IdentityMatchParameters` | `nationalId` | `national_id` |
| `IdentityMatchParameters` | `dateOfBirth` | `date_of_birth` |
| `JobResult` | `fileUrl` | `file_url` |
| `JobResult` | `totalCount` | `total_count` |
| `JobResult` | `processedCount` | `processed_count` |
| `JobResult` | `successCount` | `success_count` |
| `JobResult` | `errorCount` | `error_count` |
| `Kyt` | `outboundCarrierCalling` | `outbound_carrier_calling` |
| `KeywordConfiguration` | `keywordType` | `keyword_type` |
| `KeywordConfiguration` | `messageType` | `message_type` |
| `KeywordsResponse` | `accountSid` | `account_sid` |
| `KeywordsResponse` | `optOutSid` | `opt_out_sid` |
| `LanguageProperties` | `friendlyName` | `friendly_name` |
| `Languages` | `ttsProvider` | `tts_provider` |
| `Languages` | `transcriptionProvider` | `transcription_provider` |
| `Languages` | `speechModel` | `speech_model` |
| `LastSimSwapInfo` | `lastSimSwapDate` | `last_sim_swap_date` |
| `LastSimSwapInfo` | `swappedPeriod` | `swapped_period` |
| `LastSimSwapInfo` | `swappedInPeriod` | `swapped_in_period` |
| `LineStatusInfo` | `errorCode` | `error_code` |
| `LineTypeIntelligenceInfo` | `mobileCountryCode` | `mobile_country_code` |
| `LineTypeIntelligenceInfo` | `mobileNetworkCode` | `mobile_network_code` |
| `LineTypeIntelligenceInfo` | `carrierName` | `carrier_name` |
| `LineTypeIntelligenceInfo` | `errorCode` | `error_code` |
| `ListAccountResponse` | `firstPageUri` | `first_page_uri` |
| `ListAccountResponse` | `nextPageUri` | `next_page_uri` |
| `ListAccountResponse` | `pageSize` | `page_size` |
| `ListAccountResponse` | `previousPageUri` | `previous_page_uri` |
| `ListAddressResponse` | `firstPageUri` | `first_page_uri` |
| `ListAddressResponse` | `nextPageUri` | `next_page_uri` |
| `ListAddressResponse` | `pageSize` | `page_size` |
| `ListAddressResponse` | `previousPageUri` | `previous_page_uri` |
| `ListAlphaSenderResponse` | `alphaSenders` | `alpha_senders` |
| `ListApplicationResponse` | `firstPageUri` | `first_page_uri` |
| `ListApplicationResponse` | `nextPageUri` | `next_page_uri` |
| `ListApplicationResponse` | `pageSize` | `page_size` |
| `ListApplicationResponse` | `previousPageUri` | `previous_page_uri` |
| `ListAuthorizedConnectAppResponse` | `firstPageUri` | `first_page_uri` |
| `ListAuthorizedConnectAppResponse` | `nextPageUri` | `next_page_uri` |
| `ListAuthorizedConnectAppResponse` | `pageSize` | `page_size` |
| `ListAuthorizedConnectAppResponse` | `previousPageUri` | `previous_page_uri` |
| `ListAuthorizedConnectAppResponse` | `authorizedConnectApps` | `authorized_connect_apps` |
| `ListAvailablePhoneNumberLocalResponse` | `firstPageUri` | `first_page_uri` |
| `ListAvailablePhoneNumberLocalResponse` | `nextPageUri` | `next_page_uri` |
| `ListAvailablePhoneNumberLocalResponse` | `pageSize` | `page_size` |
| `ListAvailablePhoneNumberLocalResponse` | `previousPageUri` | `previous_page_uri` |
| `ListAvailablePhoneNumberLocalResponse` | `availablePhoneNumbers` | `available_phone_numbers` |
| `ListAvailablePhoneNumberMachineToMachineResponse` | `firstPageUri` | `first_page_uri` |
| `ListAvailablePhoneNumberMachineToMachineResponse` | `nextPageUri` | `next_page_uri` |
| `ListAvailablePhoneNumberMachineToMachineResponse` | `pageSize` | `page_size` |
| `ListAvailablePhoneNumberMachineToMachineResponse` | `previousPageUri` | `previous_page_uri` |
| `ListAvailablePhoneNumberMachineToMachineResponse` | `availablePhoneNumbers` | `available_phone_numbers` |
| `ListAvailablePhoneNumberMobileResponse` | `firstPageUri` | `first_page_uri` |
| `ListAvailablePhoneNumberMobileResponse` | `nextPageUri` | `next_page_uri` |
| `ListAvailablePhoneNumberMobileResponse` | `pageSize` | `page_size` |
| `ListAvailablePhoneNumberMobileResponse` | `previousPageUri` | `previous_page_uri` |
| `ListAvailablePhoneNumberMobileResponse` | `availablePhoneNumbers` | `available_phone_numbers` |
| `ListAvailablePhoneNumberNationalResponse` | `firstPageUri` | `first_page_uri` |
| `ListAvailablePhoneNumberNationalResponse` | `nextPageUri` | `next_page_uri` |
| `ListAvailablePhoneNumberNationalResponse` | `pageSize` | `page_size` |
| `ListAvailablePhoneNumberNationalResponse` | `previousPageUri` | `previous_page_uri` |
| `ListAvailablePhoneNumberNationalResponse` | `availablePhoneNumbers` | `available_phone_numbers` |
| `ListAvailablePhoneNumberSharedCostResponse` | `firstPageUri` | `first_page_uri` |
| `ListAvailablePhoneNumberSharedCostResponse` | `nextPageUri` | `next_page_uri` |
| `ListAvailablePhoneNumberSharedCostResponse` | `pageSize` | `page_size` |
| `ListAvailablePhoneNumberSharedCostResponse` | `previousPageUri` | `previous_page_uri` |
| `ListAvailablePhoneNumberSharedCostResponse` | `availablePhoneNumbers` | `available_phone_numbers` |
| `ListAvailablePhoneNumberTollFreeResponse` | `firstPageUri` | `first_page_uri` |
| `ListAvailablePhoneNumberTollFreeResponse` | `nextPageUri` | `next_page_uri` |
| `ListAvailablePhoneNumberTollFreeResponse` | `pageSize` | `page_size` |
| `ListAvailablePhoneNumberTollFreeResponse` | `previousPageUri` | `previous_page_uri` |
| `ListAvailablePhoneNumberTollFreeResponse` | `availablePhoneNumbers` | `available_phone_numbers` |
| `ListAvailablePhoneNumberVoipResponse` | `firstPageUri` | `first_page_uri` |
| `ListAvailablePhoneNumberVoipResponse` | `nextPageUri` | `next_page_uri` |
| `ListAvailablePhoneNumberVoipResponse` | `pageSize` | `page_size` |
| `ListAvailablePhoneNumberVoipResponse` | `previousPageUri` | `previous_page_uri` |
| `ListAvailablePhoneNumberVoipResponse` | `availablePhoneNumbers` | `available_phone_numbers` |
| `ListCallEventResponse` | `firstPageUri` | `first_page_uri` |
| `ListCallEventResponse` | `nextPageUri` | `next_page_uri` |
| `ListCallEventResponse` | `pageSize` | `page_size` |
| `ListCallEventResponse` | `previousPageUri` | `previous_page_uri` |
| `ListCallNotificationResponse` | `firstPageUri` | `first_page_uri` |
| `ListCallNotificationResponse` | `nextPageUri` | `next_page_uri` |
| `ListCallNotificationResponse` | `pageSize` | `page_size` |
| `ListCallNotificationResponse` | `previousPageUri` | `previous_page_uri` |
| `ListCallRecordingResponse` | `firstPageUri` | `first_page_uri` |
| `ListCallRecordingResponse` | `nextPageUri` | `next_page_uri` |
| `ListCallRecordingResponse` | `pageSize` | `page_size` |
| `ListCallRecordingResponse` | `previousPageUri` | `previous_page_uri` |
| `ListCallResponse` | `firstPageUri` | `first_page_uri` |
| `ListCallResponse` | `nextPageUri` | `next_page_uri` |
| `ListCallResponse` | `pageSize` | `page_size` |
| `ListCallResponse` | `previousPageUri` | `previous_page_uri` |
| `ListCallSummariesResponse` | `callSummaries` | `call_summaries` |
| `ListChannelResponse` | `flexChatChannels` | `flex_chat_channels` |
| `ListCompositionHookResponse` | `compositionHooks` | `composition_hooks` |
| `ListConferenceRecordingResponse` | `firstPageUri` | `first_page_uri` |
| `ListConferenceRecordingResponse` | `nextPageUri` | `next_page_uri` |
| `ListConferenceRecordingResponse` | `pageSize` | `page_size` |
| `ListConferenceRecordingResponse` | `previousPageUri` | `previous_page_uri` |
| `ListConferenceResponse` | `firstPageUri` | `first_page_uri` |
| `ListConferenceResponse` | `nextPageUri` | `next_page_uri` |
| `ListConferenceResponse` | `pageSize` | `page_size` |
| `ListConferenceResponse` | `previousPageUri` | `previous_page_uri` |
| `ListConfigurationAddressResponse` | `addressConfigurations` | `address_configurations` |
| `ListConnectAppResponse` | `firstPageUri` | `first_page_uri` |
| `ListConnectAppResponse` | `nextPageUri` | `next_page_uri` |
| `ListConnectAppResponse` | `pageSize` | `page_size` |
| `ListConnectAppResponse` | `previousPageUri` | `previous_page_uri` |
| `ListConnectAppResponse` | `connectApps` | `connect_apps` |
| `ListConversationMessageReceiptResponse` | `deliveryReceipts` | `delivery_receipts` |
| `ListDependentPhoneNumberResponse` | `firstPageUri` | `first_page_uri` |
| `ListDependentPhoneNumberResponse` | `nextPageUri` | `next_page_uri` |
| `ListDependentPhoneNumberResponse` | `pageSize` | `page_size` |
| `ListDependentPhoneNumberResponse` | `previousPageUri` | `previous_page_uri` |
| `ListDependentPhoneNumberResponse` | `dependentPhoneNumbers` | `dependent_phone_numbers` |
| `ListDestinationAlphaSenderResponse` | `alphaSenders` | `alpha_senders` |
| `ListEndUserTypeResponse` | `endUserTypes` | `end_user_types` |
| `ListFlexFlowResponse` | `flexFlows` | `flex_flows` |
| `ListIncomingPhoneNumberAssignedAddOnExtensionResponse` | `firstPageUri` | `first_page_uri` |
| `ListIncomingPhoneNumberAssignedAddOnExtensionResponse` | `nextPageUri` | `next_page_uri` |
| `ListIncomingPhoneNumberAssignedAddOnExtensionResponse` | `pageSize` | `page_size` |
| `ListIncomingPhoneNumberAssignedAddOnExtensionResponse` | `previousPageUri` | `previous_page_uri` |
| `ListIncomingPhoneNumberAssignedAddOnResponse` | `firstPageUri` | `first_page_uri` |
| `ListIncomingPhoneNumberAssignedAddOnResponse` | `nextPageUri` | `next_page_uri` |
| `ListIncomingPhoneNumberAssignedAddOnResponse` | `pageSize` | `page_size` |
| `ListIncomingPhoneNumberAssignedAddOnResponse` | `previousPageUri` | `previous_page_uri` |
| `ListIncomingPhoneNumberAssignedAddOnResponse` | `assignedAddOns` | `assigned_add_ons` |
| `ListIncomingPhoneNumberLocalResponse` | `firstPageUri` | `first_page_uri` |
| `ListIncomingPhoneNumberLocalResponse` | `nextPageUri` | `next_page_uri` |
| `ListIncomingPhoneNumberLocalResponse` | `pageSize` | `page_size` |
| `ListIncomingPhoneNumberLocalResponse` | `previousPageUri` | `previous_page_uri` |
| `ListIncomingPhoneNumberLocalResponse` | `incomingPhoneNumbers` | `incoming_phone_numbers` |
| `ListIncomingPhoneNumberMobileResponse` | `firstPageUri` | `first_page_uri` |
| `ListIncomingPhoneNumberMobileResponse` | `nextPageUri` | `next_page_uri` |
| `ListIncomingPhoneNumberMobileResponse` | `pageSize` | `page_size` |
| `ListIncomingPhoneNumberMobileResponse` | `previousPageUri` | `previous_page_uri` |
| `ListIncomingPhoneNumberMobileResponse` | `incomingPhoneNumbers` | `incoming_phone_numbers` |
| `ListIncomingPhoneNumberResponse` | `firstPageUri` | `first_page_uri` |
| `ListIncomingPhoneNumberResponse` | `nextPageUri` | `next_page_uri` |
| `ListIncomingPhoneNumberResponse` | `pageSize` | `page_size` |
| `ListIncomingPhoneNumberResponse` | `previousPageUri` | `previous_page_uri` |
| `ListIncomingPhoneNumberResponse` | `incomingPhoneNumbers` | `incoming_phone_numbers` |
| `ListIncomingPhoneNumberTollFreeResponse` | `firstPageUri` | `first_page_uri` |
| `ListIncomingPhoneNumberTollFreeResponse` | `nextPageUri` | `next_page_uri` |
| `ListIncomingPhoneNumberTollFreeResponse` | `pageSize` | `page_size` |
| `ListIncomingPhoneNumberTollFreeResponse` | `previousPageUri` | `previous_page_uri` |
| `ListIncomingPhoneNumberTollFreeResponse` | `incomingPhoneNumbers` | `incoming_phone_numbers` |
| `ListKeyResponse` | `firstPageUri` | `first_page_uri` |
| `ListKeyResponse` | `nextPageUri` | `next_page_uri` |
| `ListKeyResponse` | `pageSize` | `page_size` |
| `ListKeyResponse` | `previousPageUri` | `previous_page_uri` |
| `ListMediaResponse` | `firstPageUri` | `first_page_uri` |
| `ListMediaResponse` | `nextPageUri` | `next_page_uri` |
| `ListMediaResponse` | `pageSize` | `page_size` |
| `ListMediaResponse` | `previousPageUri` | `previous_page_uri` |
| `ListMediaResponse` | `mediaList` | `media_list` |
| `ListMemberResponse` | `firstPageUri` | `first_page_uri` |
| `ListMemberResponse` | `nextPageUri` | `next_page_uri` |
| `ListMemberResponse` | `pageSize` | `page_size` |
| `ListMemberResponse` | `previousPageUri` | `previous_page_uri` |
| `ListMemberResponse` | `queueMembers` | `queue_members` |
| `ListMessageResponse` | `firstPageUri` | `first_page_uri` |
| `ListMessageResponse` | `nextPageUri` | `next_page_uri` |
| `ListMessageResponse` | `pageSize` | `page_size` |
| `ListMessageResponse` | `previousPageUri` | `previous_page_uri` |
| `ListMessagingConfigurationResponse` | `messagingConfigurations` | `messaging_configurations` |
| `ListNotificationResponse` | `firstPageUri` | `first_page_uri` |
| `ListNotificationResponse` | `nextPageUri` | `next_page_uri` |
| `ListNotificationResponse` | `pageSize` | `page_size` |
| `ListNotificationResponse` | `previousPageUri` | `previous_page_uri` |
| `ListOutgoingCallerIdResponse` | `firstPageUri` | `first_page_uri` |
| `ListOutgoingCallerIdResponse` | `nextPageUri` | `next_page_uri` |
| `ListOutgoingCallerIdResponse` | `pageSize` | `page_size` |
| `ListOutgoingCallerIdResponse` | `previousPageUri` | `previous_page_uri` |
| `ListOutgoingCallerIdResponse` | `outgoingCallerIds` | `outgoing_caller_ids` |
| `ListParticipantResponse` | `firstPageUri` | `first_page_uri` |
| `ListParticipantResponse` | `nextPageUri` | `next_page_uri` |
| `ListParticipantResponse` | `pageSize` | `page_size` |
| `ListParticipantResponse` | `previousPageUri` | `previous_page_uri` |
| `ListPhoneNumberResponse` | `phoneNumbers` | `phone_numbers` |
| `ListPhoneNumberResponse1` | `phoneNumbers` | `phone_numbers` |
| `ListPluginVersionResponse` | `pluginVersions` | `plugin_versions` |
| `ListPortInRequestsResponse` | `portInRequests` | `port_in_requests` |
| `ListQueueResponse` | `firstPageUri` | `first_page_uri` |
| `ListQueueResponse` | `nextPageUri` | `next_page_uri` |
| `ListQueueResponse` | `pageSize` | `page_size` |
| `ListQueueResponse` | `previousPageUri` | `previous_page_uri` |
| `ListRateLimitResponse` | `rateLimits` | `rate_limits` |
| `ListRecordingAddOnResultPayloadResponse` | `firstPageUri` | `first_page_uri` |
| `ListRecordingAddOnResultPayloadResponse` | `nextPageUri` | `next_page_uri` |
| `ListRecordingAddOnResultPayloadResponse` | `pageSize` | `page_size` |
| `ListRecordingAddOnResultPayloadResponse` | `previousPageUri` | `previous_page_uri` |
| `ListRecordingAddOnResultResponse` | `firstPageUri` | `first_page_uri` |
| `ListRecordingAddOnResultResponse` | `nextPageUri` | `next_page_uri` |
| `ListRecordingAddOnResultResponse` | `pageSize` | `page_size` |
| `ListRecordingAddOnResultResponse` | `previousPageUri` | `previous_page_uri` |
| `ListRecordingAddOnResultResponse` | `addOnResults` | `add_on_results` |
| `ListRecordingResponse` | `firstPageUri` | `first_page_uri` |
| `ListRecordingResponse` | `nextPageUri` | `next_page_uri` |
| `ListRecordingResponse` | `pageSize` | `page_size` |
| `ListRecordingResponse` | `previousPageUri` | `previous_page_uri` |
| `ListRecordingTranscriptionResponse` | `firstPageUri` | `first_page_uri` |
| `ListRecordingTranscriptionResponse` | `nextPageUri` | `next_page_uri` |
| `ListRecordingTranscriptionResponse` | `pageSize` | `page_size` |
| `ListRecordingTranscriptionResponse` | `previousPageUri` | `previous_page_uri` |
| `ListRoomParticipantPublishedTrackResponse` | `publishedTracks` | `published_tracks` |
| `ListRoomParticipantSubscribedTrackResponse` | `subscribedTracks` | `subscribed_tracks` |
| `ListServiceConversationMessageReceiptResponse` | `deliveryReceipts` | `delivery_receipts` |
| `ListShortCodeResponse` | `firstPageUri` | `first_page_uri` |
| `ListShortCodeResponse` | `nextPageUri` | `next_page_uri` |
| `ListShortCodeResponse` | `pageSize` | `page_size` |
| `ListShortCodeResponse` | `previousPageUri` | `previous_page_uri` |
| `ListShortCodeResponse` | `shortCodes` | `short_codes` |
| `ListShortCodeResponse1` | `shortCodes` | `short_codes` |
| `ListSigningKeyResponse` | `firstPageUri` | `first_page_uri` |
| `ListSigningKeyResponse` | `nextPageUri` | `next_page_uri` |
| `ListSigningKeyResponse` | `pageSize` | `page_size` |
| `ListSigningKeyResponse` | `previousPageUri` | `previous_page_uri` |
| `ListSigningKeyResponse` | `signingKeys` | `signing_keys` |
| `ListSipAuthCallsCredentialListMappingResponse` | `firstPageUri` | `first_page_uri` |
| `ListSipAuthCallsCredentialListMappingResponse` | `nextPageUri` | `next_page_uri` |
| `ListSipAuthCallsCredentialListMappingResponse` | `pageSize` | `page_size` |
| `ListSipAuthCallsCredentialListMappingResponse` | `previousPageUri` | `previous_page_uri` |
| `ListSipAuthCallsIpAccessControlListMappingResponse` | `firstPageUri` | `first_page_uri` |
| `ListSipAuthCallsIpAccessControlListMappingResponse` | `nextPageUri` | `next_page_uri` |
| `ListSipAuthCallsIpAccessControlListMappingResponse` | `pageSize` | `page_size` |
| `ListSipAuthCallsIpAccessControlListMappingResponse` | `previousPageUri` | `previous_page_uri` |
| `ListSipAuthRegistrationsCredentialListMappingResponse` | `firstPageUri` | `first_page_uri` |
| `ListSipAuthRegistrationsCredentialListMappingResponse` | `nextPageUri` | `next_page_uri` |
| `ListSipAuthRegistrationsCredentialListMappingResponse` | `pageSize` | `page_size` |
| `ListSipAuthRegistrationsCredentialListMappingResponse` | `previousPageUri` | `previous_page_uri` |
| `ListSipCredentialListMappingResponse` | `firstPageUri` | `first_page_uri` |
| `ListSipCredentialListMappingResponse` | `nextPageUri` | `next_page_uri` |
| `ListSipCredentialListMappingResponse` | `pageSize` | `page_size` |
| `ListSipCredentialListMappingResponse` | `previousPageUri` | `previous_page_uri` |
| `ListSipCredentialListMappingResponse` | `credentialListMappings` | `credential_list_mappings` |
| `ListSipCredentialListResponse` | `firstPageUri` | `first_page_uri` |
| `ListSipCredentialListResponse` | `nextPageUri` | `next_page_uri` |
| `ListSipCredentialListResponse` | `pageSize` | `page_size` |
| `ListSipCredentialListResponse` | `previousPageUri` | `previous_page_uri` |
| `ListSipCredentialListResponse` | `credentialLists` | `credential_lists` |
| `ListSipCredentialResponse` | `firstPageUri` | `first_page_uri` |
| `ListSipCredentialResponse` | `nextPageUri` | `next_page_uri` |
| `ListSipCredentialResponse` | `pageSize` | `page_size` |
| `ListSipCredentialResponse` | `previousPageUri` | `previous_page_uri` |
| `ListSipDomainResponse` | `firstPageUri` | `first_page_uri` |
| `ListSipDomainResponse` | `nextPageUri` | `next_page_uri` |
| `ListSipDomainResponse` | `pageSize` | `page_size` |
| `ListSipDomainResponse` | `previousPageUri` | `previous_page_uri` |
| `ListSipIpAccessControlListMappingResponse` | `firstPageUri` | `first_page_uri` |
| `ListSipIpAccessControlListMappingResponse` | `nextPageUri` | `next_page_uri` |
| `ListSipIpAccessControlListMappingResponse` | `pageSize` | `page_size` |
| `ListSipIpAccessControlListMappingResponse` | `previousPageUri` | `previous_page_uri` |
| `ListSipIpAccessControlListMappingResponse` | `ipAccessControlListMappings` | `ip_access_control_list_mappings` |
| `ListSipIpAccessControlListResponse` | `firstPageUri` | `first_page_uri` |
| `ListSipIpAccessControlListResponse` | `nextPageUri` | `next_page_uri` |
| `ListSipIpAccessControlListResponse` | `pageSize` | `page_size` |
| `ListSipIpAccessControlListResponse` | `previousPageUri` | `previous_page_uri` |
| `ListSipIpAccessControlListResponse` | `ipAccessControlLists` | `ip_access_control_lists` |
| `ListSipIpAddressResponse` | `firstPageUri` | `first_page_uri` |
| `ListSipIpAddressResponse` | `nextPageUri` | `next_page_uri` |
| `ListSipIpAddressResponse` | `pageSize` | `page_size` |
| `ListSipIpAddressResponse` | `previousPageUri` | `previous_page_uri` |
| `ListSipIpAddressResponse` | `ipAddresses` | `ip_addresses` |
| `ListSupportingDocumentTypeResponse` | `supportingDocumentTypes` | `supporting_document_types` |
| `ListSupportingDocumentTypeResponse1` | `supportingDocumentTypes` | `supporting_document_types` |
| `ListTaskQueueResponse` | `taskQueues` | `task_queues` |
| `ListTaskQueuesStatisticsResponse` | `taskQueuesStatistics` | `task_queues_statistics` |
| `ListTranscriptionResponse` | `firstPageUri` | `first_page_uri` |
| `ListTranscriptionResponse` | `nextPageUri` | `next_page_uri` |
| `ListTranscriptionResponse` | `pageSize` | `page_size` |
| `ListTranscriptionResponse` | `previousPageUri` | `previous_page_uri` |
| `ListUsageRecordAllTimeResponse` | `firstPageUri` | `first_page_uri` |
| `ListUsageRecordAllTimeResponse` | `nextPageUri` | `next_page_uri` |
| `ListUsageRecordAllTimeResponse` | `pageSize` | `page_size` |
| `ListUsageRecordAllTimeResponse` | `previousPageUri` | `previous_page_uri` |
| `ListUsageRecordAllTimeResponse` | `usageRecords` | `usage_records` |
| `ListUsageRecordDailyResponse` | `firstPageUri` | `first_page_uri` |
| `ListUsageRecordDailyResponse` | `nextPageUri` | `next_page_uri` |
| `ListUsageRecordDailyResponse` | `pageSize` | `page_size` |
| `ListUsageRecordDailyResponse` | `previousPageUri` | `previous_page_uri` |
| `ListUsageRecordDailyResponse` | `usageRecords` | `usage_records` |
| `ListUsageRecordLastMonthResponse` | `firstPageUri` | `first_page_uri` |
| `ListUsageRecordLastMonthResponse` | `nextPageUri` | `next_page_uri` |
| `ListUsageRecordLastMonthResponse` | `pageSize` | `page_size` |
| `ListUsageRecordLastMonthResponse` | `previousPageUri` | `previous_page_uri` |
| `ListUsageRecordLastMonthResponse` | `usageRecords` | `usage_records` |
| `ListUsageRecordMonthlyResponse` | `firstPageUri` | `first_page_uri` |
| `ListUsageRecordMonthlyResponse` | `nextPageUri` | `next_page_uri` |
| `ListUsageRecordMonthlyResponse` | `pageSize` | `page_size` |
| `ListUsageRecordMonthlyResponse` | `previousPageUri` | `previous_page_uri` |
| `ListUsageRecordMonthlyResponse` | `usageRecords` | `usage_records` |
| `ListUsageRecordResponse` | `firstPageUri` | `first_page_uri` |
| `ListUsageRecordResponse` | `nextPageUri` | `next_page_uri` |
| `ListUsageRecordResponse` | `pageSize` | `page_size` |
| `ListUsageRecordResponse` | `previousPageUri` | `previous_page_uri` |
| `ListUsageRecordResponse` | `usageRecords` | `usage_records` |
| `ListUsageRecordThisMonthResponse` | `firstPageUri` | `first_page_uri` |
| `ListUsageRecordThisMonthResponse` | `nextPageUri` | `next_page_uri` |
| `ListUsageRecordThisMonthResponse` | `pageSize` | `page_size` |
| `ListUsageRecordThisMonthResponse` | `previousPageUri` | `previous_page_uri` |
| `ListUsageRecordThisMonthResponse` | `usageRecords` | `usage_records` |
| `ListUsageRecordTodayResponse` | `firstPageUri` | `first_page_uri` |
| `ListUsageRecordTodayResponse` | `nextPageUri` | `next_page_uri` |
| `ListUsageRecordTodayResponse` | `pageSize` | `page_size` |
| `ListUsageRecordTodayResponse` | `previousPageUri` | `previous_page_uri` |
| `ListUsageRecordTodayResponse` | `usageRecords` | `usage_records` |
| `ListUsageRecordYearlyResponse` | `firstPageUri` | `first_page_uri` |
| `ListUsageRecordYearlyResponse` | `nextPageUri` | `next_page_uri` |
| `ListUsageRecordYearlyResponse` | `pageSize` | `page_size` |
| `ListUsageRecordYearlyResponse` | `previousPageUri` | `previous_page_uri` |
| `ListUsageRecordYearlyResponse` | `usageRecords` | `usage_records` |
| `ListUsageRecordYesterdayResponse` | `firstPageUri` | `first_page_uri` |
| `ListUsageRecordYesterdayResponse` | `nextPageUri` | `next_page_uri` |
| `ListUsageRecordYesterdayResponse` | `pageSize` | `page_size` |
| `ListUsageRecordYesterdayResponse` | `previousPageUri` | `previous_page_uri` |
| `ListUsageRecordYesterdayResponse` | `usageRecords` | `usage_records` |
| `ListUsageTriggerResponse` | `firstPageUri` | `first_page_uri` |
| `ListUsageTriggerResponse` | `nextPageUri` | `next_page_uri` |
| `ListUsageTriggerResponse` | `pageSize` | `page_size` |
| `ListUsageTriggerResponse` | `previousPageUri` | `previous_page_uri` |
| `ListUsageTriggerResponse` | `usageTriggers` | `usage_triggers` |
| `ListWebChannelResponse` | `flexChatChannels` | `flex_chat_channels` |
| `LookupBatchResponse` | `correlationId` | `correlation_id` |
| `LookupBatchResponse` | `twilioErrorCode` | `twilio_error_code` |
| `LookupBatchResponse` | `callingCountryCode` | `calling_country_code` |
| `LookupBatchResponse` | `countryCode` | `country_code` |
| `LookupBatchResponse` | `phoneNumber` | `phone_number` |
| `LookupBatchResponse` | `nationalFormat` | `national_format` |
| `LookupBatchResponse` | `validationErrors` | `validation_errors` |
| `LookupBatchResponse` | `callerName` | `caller_name` |
| `LookupBatchResponse` | `simSwap` | `sim_swap` |
| `LookupBatchResponse` | `callForwarding` | `call_forwarding` |
| `LookupBatchResponse` | `lineTypeIntelligence` | `line_type_intelligence` |
| `LookupBatchResponse` | `lineStatus` | `line_status` |
| `LookupBatchResponse` | `identityMatch` | `identity_match` |
| `LookupBatchResponse` | `reassignedNumber` | `reassigned_number` |
| `LookupBatchResponse` | `smsPumpingRisk` | `sms_pumping_risk` |
| `LookupBatchResponse` | `phoneNumberQualityScore` | `phone_number_quality_score` |
| `LookupBatchResponse` | `preFill` | `pre_fill` |
| `LookupJobRequest` | `friendlyName` | `friendly_name` |
| `LookupJobResponse` | `jobSid` | `job_sid` |
| `LookupJobResponse` | `friendlyName` | `friendly_name` |
| `LookupJobResponse` | `createdAt` | `created_at` |
| `LookupJobResponse` | `completedAt` | `completed_at` |
| `LookupJobResponse` | `twilioErrorCode` | `twilio_error_code` |
| `LookupRequest` | `phoneNumbers` | `phone_numbers` |
| `LookupRequestWithCorId` | `correlationId` | `correlation_id` |
| `LookupRequestWithCorId` | `phoneNumber` | `phone_number` |
| `LookupRequestWithCorId` | `countryCode` | `country_code` |
| `LookupRequestWithCorId` | `identityMatch` | `identity_match` |
| `LookupRequestWithCorId` | `reassignedNumber` | `reassigned_number` |
| `LookupRequestWithCorId` | `smsPumpingRisk` | `sms_pumping_risk` |
| `LookupResponse` | `callingCountryCode` | `calling_country_code` |
| `LookupResponse` | `countryCode` | `country_code` |
| `LookupResponse` | `phoneNumber` | `phone_number` |
| `LookupResponse` | `nationalFormat` | `national_format` |
| `LookupResponse` | `validationErrors` | `validation_errors` |
| `LookupResponse` | `callerName` | `caller_name` |
| `LookupResponse` | `simSwap` | `sim_swap` |
| `LookupResponse` | `callForwarding` | `call_forwarding` |
| `LookupResponse` | `lineTypeIntelligence` | `line_type_intelligence` |
| `LookupResponse` | `lineStatus` | `line_status` |
| `LookupResponse` | `identityMatch` | `identity_match` |
| `LookupResponse` | `reassignedNumber` | `reassigned_number` |
| `LookupResponse` | `smsPumpingRisk` | `sms_pumping_risk` |
| `LookupResponse` | `phoneNumberQualityScore` | `phone_number_quality_score` |
| `LookupResponse` | `preFill` | `pre_fill` |
| `LookupResponse1` | `phoneNumbers` | `phone_numbers` |
| `LosingCarrierInformation` | `customerName` | `customer_name` |
| `LosingCarrierInformation` | `accountNumber` | `account_number` |
| `LosingCarrierInformation` | `accountTelephoneNumber` | `account_telephone_number` |
| `LosingCarrierInformation` | `addressSid` | `address_sid` |
| `LosingCarrierInformation` | `authorizedRepresentative` | `authorized_representative` |
| `LosingCarrierInformation` | `authorizedRepresentativeEmail` | `authorized_representative_email` |
| `LosingCarrierInformation` | `customerType` | `customer_type` |
| `LosingCarrierInformation` | `authorizedRepresentativeKatakana` | `authorized_representative_katakana` |
| `LosingCarrierInformation` | `subMunicipality` | `sub_municipality` |
| `LosingCarrierInformation` | `katakanaName` | `katakana_name` |
| `MessageProperties` | `keywordType` | `keyword_type` |
| `MessageProperties` | `messageType` | `message_type` |
| `MessageTypeConfig` | `friendlyName` | `friendly_name` |
| `MessageTypesResponse` | `accountSid` | `account_sid` |
| `MessageTypesResponse` | `optOutSid` | `opt_out_sid` |
| `MessageTypesResponse` | `messageTypes` | `message_types` |
| `MessagesResponse` | `accountSid` | `account_sid` |
| `MessagesResponse` | `optOutSid` | `opt_out_sid` |
| `Meta` | `firstPageUrl` | `first_page_url` |
| `Meta` | `nextPageUrl` | `next_page_url` |
| `Meta` | `pageSize` | `page_size` |
| `Meta` | `previousPageUrl` | `previous_page_url` |
| `NetworkIssues` | `twilioGateway` | `twilio_gateway` |
| `OptOutConfig` | `optOutSid` | `opt_out_sid` |
| `OptOutConfig` | `accountSid` | `account_sid` |
| `OptOutConfig` | `friendlyName` | `friendly_name` |
| `OptOutConfig` | `dateCreated` | `date_created` |
| `OptOutConfig` | `dateUpdated` | `date_updated` |
| `OutboundCarrierCalling` | `uniqueCallingNumbers` | `unique_calling_numbers` |
| `OutboundCarrierCalling` | `uniqueCalledNumbers` | `unique_called_numbers` |
| `OutboundCarrierCalling` | `blockedCallsByCarrier` | `blocked_calls_by_carrier` |
| `OutboundCarrierCalling` | `shortDurationCallsPercentage` | `short_duration_calls_percentage` |
| `OutboundCarrierCalling` | `longDurationCallsPercentage` | `long_duration_calls_percentage` |
| `OutboundCarrierCalling` | `potentialRobocallsPercentage` | `potential_robocalls_percentage` |
| `OutboundCarrierCalling` | `brandedCalling` | `branded_calling` |
| `OutboundCarrierCalling` | `voiceIntegrity` | `voice_integrity` |
| `OutboundCarrierCalling` | `stirShaken` | `stir_shaken` |
| `OverridesRequest` | `lineType` | `line_type` |
| `OverridesResponse` | `phoneNumber` | `phone_number` |
| `OverridesResponse` | `originalLineType` | `original_line_type` |
| `OverridesResponse` | `overriddenLineType` | `overridden_line_type` |
| `OverridesResponse` | `overrideReason` | `override_reason` |
| `OverridesResponse` | `overrideTimestamp` | `override_timestamp` |
| `OverridesResponse` | `overriddenByAccountSid` | `overridden_by_account_sid` |
| `PaginationMeta` | `previousToken` | `previous_token` |
| `PaginationMeta` | `nextToken` | `next_token` |
| `Paging` | `nextPageUri` | `next_page_uri` |
| `Paging` | `previousPageUri` | `previous_page_uri` |
| `Paging` | `pageSize` | `page_size` |
| `Paging` | `numPages` | `num_pages` |
| `Paging` | `beforeSid` | `before_sid` |
| `Paging` | `afterSid` | `after_sid` |
| `Percentage` | `stshA` | `stsh_a` |
| `Percentage` | `stshB` | `stsh_b` |
| `Percentage` | `stshC` | `stsh_c` |
| `PhoneNumberResult` | `notPortabilityReason` | `not_portability_reason` |
| `PhoneNumberResult` | `notPortabilityReasonCode` | `not_portability_reason_code` |
| `PhoneNumberResult` | `numberType` | `number_type` |
| `PhoneNumberResult` | `phoneNumber` | `phone_number` |
| `PhoneNumberResult` | `portDate` | `port_date` |
| `PhoneNumberResult` | `portInPhoneNumberSid` | `port_in_phone_number_sid` |
| `PhoneNumberResult` | `portInPhoneNumberStatus` | `port_in_phone_number_status` |
| `PhoneNumberResult` | `rejectionReason` | `rejection_reason` |
| `PhoneNumberResult` | `rejectionReasonCode` | `rejection_reason_code` |
| `PhoneNumberResult` | `statusLastTimeUpdatedTimestamp` | `status_last_time_updated_timestamp` |
| `PhoneNumberResult` | `externalPortingVendorPhoneNumberId` | `external_porting_vendor_phone_number_id` |
| `PhoneNumber` | `phoneNumber` | `phone_number` |
| `PhoneNumber1` | `phoneNumber` | `phone_number` |
| `PortInRequest` | `accountSid` | `account_sid` |
| `PortInRequest` | `phoneNumbers` | `phone_numbers` |
| `PortInRequest` | `losingCarrierInformation` | `losing_carrier_information` |
| `PortInRequest` | `notificationEmails` | `notification_emails` |
| `PortInRequest` | `targetPortInDate` | `target_port_in_date` |
| `PortInRequest` | `targetPortInTimeRangeStart` | `target_port_in_time_range_start` |
| `PortInRequest` | `targetPortInTimeRangeEnd` | `target_port_in_time_range_end` |
| `PortInRequest` | `bundleSid` | `bundle_sid` |
| `PortInRequest` | `portabilityAdvanceCarrier` | `portability_advance_carrier` |
| `PortInRequest` | `autoCancelApprovalNumbers` | `auto_cancel_approval_numbers` |
| `PortInPhoneNumberRequest` | `portInPhoneNumberSid` | `port_in_phone_number_sid` |
| `PortInPhoneNumberRequest` | `portDate` | `port_date` |
| `PortInPhoneNumberRequest` | `rejectionReason` | `rejection_reason` |
| `RateLimitListResponse` | `rateLimits` | `rate_limits` |
| `ReassignedNumberInfo` | `lastVerifiedDate` | `last_verified_date` |
| `ReassignedNumberInfo` | `isNumberReassigned` | `is_number_reassigned` |
| `ReassignedNumberInfo` | `errorCode` | `error_code` |
| `ReassignedNumberParameters` | `lastVerifiedDate` | `last_verified_date` |
| `Response` | `clientDataJson` | `clientDataJSON` |
| `Response1` | `clientDataJson` | `clientDataJSON` |
| `ResumeInquiryResponse` | `inquiryId` | `inquiry_id` |
| `ResumeInquiryResponse` | `inquirySessionToken` | `inquiry_session_token` |
| `ResumeInquiryResponse` | `bundleSid` | `bundle_sid` |
| `RiskParameters` | `partnerSubId` | `partner_sub_id` |
| `Sdk` | `iceFailuresPercentage` | `ice_failures_percentage` |
| `Sdk` | `highLatencyPercentage` | `high_latency_percentage` |
| `Sdk` | `highPacketLossPercentage` | `high_packet_loss_percentage` |
| `Sdk` | `highJitterPercentage` | `high_jitter_percentage` |
| `SenderId` | `accountSid` | `account_sid` |
| `SenderId` | `dateCreated` | `date_created` |
| `SenderId` | `dateUpdated` | `date_updated` |
| `SenderId` | `senderId` | `sender_id` |
| `SenderIdCountry` | `routingTableSid` | `routing_table_sid` |
| `SenderIdCountry` | `isoCountry` | `iso_country` |
| `SenderIdCountry` | `dateCreated` | `date_created` |
| `SenderIdCountry` | `dateUpdated` | `date_updated` |
| `SenderIdCountry` | `statusOverrideInfo` | `status_override_info` |
| `SenderIdRegistration` | `applicationSid` | `application_sid` |
| `SenderIdRegistration` | `accountSid` | `account_sid` |
| `SenderIdRegistration` | `registrationInfo` | `registration_info` |
| `SenderIdRegistration` | `companySubsidiary` | `company_subsidiary` |
| `SenderIdRegistration` | `emailsForNotification` | `emails_for_notification` |
| `SenderIdValidationFailure` | `errorCode` | `error_code` |
| `SenderIdValidationResult` | `isoCountry` | `iso_country` |
| `SenderIdValidationResult` | `senderId` | `sender_id` |
| `Setup` | `chargesApply` | `charges_apply` |
| `Setup1` | `requestType` | `request_type` |
| `Setup1` | `trafficType` | `traffic_type` |
| `Setup1` | `leaseType` | `lease_type` |
| `Setup1` | `paymentFrequency` | `payment_frequency` |
| `Setup1` | `shortCodePreference` | `short_code_preference` |
| `Setup1` | `mmsEnabled` | `mms_enabled` |
| `Setup1` | `freeToEndUser` | `free_to_end_user` |
| `Setup1` | `chargesApply` | `charges_apply` |
| `Setup1` | `currentProvider` | `current_provider` |
| `Setup1` | `migratedMmsEnabled` | `migrated_mms_enabled` |
| `Setup1` | `migratedLiveTraffic` | `migrated_live_traffic` |
| `ShortCodeApplication` | `applicationRequirementsSid` | `application_requirements_sid` |
| `ShortCodeApplication` | `applicationRequirementsVersion` | `application_requirements_version` |
| `ShortCodeApplication` | `accountSid` | `account_sid` |
| `ShortCodeApplication` | `bundleSid` | `bundle_sid` |
| `ShortCodeApplication` | `zendeskTicketId` | `zendesk_ticket_id` |
| `ShortCodeApplication` | `friendlyName` | `friendly_name` |
| `ShortCodeApplication` | `notificationEmails` | `notification_emails` |
| `ShortCodeApplication` | `isoCountry` | `iso_country` |
| `ShortCodeApplication` | `businessInformation` | `business_information` |
| `ShortCodeApplication` | `userSignUp` | `user_sign_up` |
| `ShortCodeApplication` | `complianceKeywords` | `compliance_keywords` |
| `ShortCodeApplication` | `contentExamples` | `content_examples` |
| `ShortCodeApplication` | `smsCampaignDetails` | `sms_campaign_details` |
| `ShortCodeApplication` | `dateCreated` | `date_created` |
| `ShortCodeApplication` | `dateUpdated` | `date_updated` |
| `ShortCodeApplication` | `createdBy` | `created_by` |
| `ShortCodeApplication` | `updatedBy` | `updated_by` |
| `ShortCodeApplicationDocument` | `documentType` | `document_type` |
| `ShortCodeApplicationDocument` | `friendlyName` | `friendly_name` |
| `ShortCodeApplicationResponsePage` | `totalElements` | `total_elements` |
| `ShortCodeApplicationResponsePage` | `totalPages` | `total_pages` |
| `ShortCodeApplicationResponsePage` | `currentPage` | `current_page` |
| `ShortCodeApplicationResponsePage` | `perPage` | `per_page` |
| `ShortCodeApplicationResponsePage` | `hasNext` | `has_next` |
| `ShortCodeApplicationResponsePage` | `hasPrev` | `has_prev` |
| `SimSwapInfo` | `lastSimSwap` | `last_sim_swap` |
| `SimSwapInfo` | `carrierName` | `carrier_name` |
| `SimSwapInfo` | `mobileCountryCode` | `mobile_country_code` |
| `SimSwapInfo` | `mobileNetworkCode` | `mobile_network_code` |
| `SimSwapInfo` | `errorCode` | `error_code` |
| `SmsCampaignDetails` | `campaignName` | `campaign_name` |
| `SmsCampaignDetails` | `campaignBrandWebsite` | `campaign_brand_website` |
| `SmsCampaignDetails` | `customerCareChannel` | `customer_care_channel` |
| `SmsCampaignDetails` | `customerCareValue` | `customer_care_value` |
| `SmsCampaignDetails` | `campaignFrequency` | `campaign_frequency` |
| `SmsCampaignDetails` | `scUseCaseCategories` | `sc_use_case_categories` |
| `SmsCampaignDetails` | `smsTermsOfServiceUrl` | `sms_terms_of_service_url` |
| `SmsCampaignDetails` | `smsPrivacyPolicyUrl` | `sms_privacy_policy_url` |
| `SmsCampaignDetails` | `monthlyOutboundVolumeExpected` | `monthly_outbound_volume_expected` |
| `SmsCampaignDetails` | `monthlyInboundVolumeExpected` | `monthly_inbound_volume_expected` |
| `SmsCampaignDetails` | `avgMonthlyMessagesSentToEachSubscriber` | `avg_monthly_messages_sent_to_each_subscriber` |
| `SmsCampaignDetails` | `avgMonthlyMessagesReceivedFromSubscribers` | `avg_monthly_messages_received_from_subscribers` |
| `SmsCampaignDetails` | `estimatedTotalSubscribers` | `estimated_total_subscribers` |
| `SmsCampaignDetails` | `durationOfTheCampaign` | `duration_of_the_campaign` |
| `SmsCampaignDetails` | `plannedTrafficSpikes` | `planned_traffic_spikes` |
| `SmsCampaignDetails` | `spikeDetails` | `spike_details` |
| `SmsCampaignDetails` | `expectedTrafficStartDate` | `expected_traffic_start_date` |
| `SmsPumpingRiskInfo` | `carrierRiskCategory` | `carrier_risk_category` |
| `SmsPumpingRiskInfo` | `numberBlocked` | `number_blocked` |
| `SmsPumpingRiskInfo` | `numberBlockedDate` | `number_blocked_date` |
| `SmsPumpingRiskInfo` | `numberBlockedLast3Months` | `number_blocked_last_3_months` |
| `SmsPumpingRiskInfo` | `smsPumpingRiskScore` | `sms_pumping_risk_score` |
| `SmsPumpingRiskInfo` | `errorCode` | `error_code` |
| `SupportedMessageTypes` | `messageTypes` | `message_types` |
| `TimeRange` | `startDatetime` | `start_datetime` |
| `TimeRange` | `endDatetime` | `end_datetime` |
| `TimeRange1` | `startDatetime` | `start_datetime` |
| `TimeRange1` | `endDatetime` | `end_datetime` |
| `TwilioGateway` | `highLatencyPercentage` | `high_latency_percentage` |
| `TwilioGateway` | `highPacketLossPercentage` | `high_packet_loss_percentage` |
| `TwilioGateway` | `highJitterPercentage` | `high_jitter_percentage` |
| `UserSignUp` | `signUpOptions` | `sign_up_options` |
| `UserSignUp` | `doubleOptInProcess` | `double_opt_in_process` |
| `UserSignUp` | `doubleOptInMessage` | `double_opt_in_message` |
| `UserSignUp` | `signUpConfirmationMessage` | `sign_up_confirmation_message` |
| `UserSignUp` | `doubleOptInResponseMessage` | `double_opt_in_response_message` |
| `UserSignUp` | `onlineWebFormMessage` | `online_web_form_message` |
| `UserSignUp` | `keywordMessage` | `keyword_message` |
| `UserSignUp` | `ivrMessage` | `ivr_message` |
| `UserSignUp` | `otherFormMessage` | `other_form_message` |
| `V2ServicesPasskeysApproveChallengeResponse` | `accountSid` | `account_sid` |
| `V2ServicesPasskeysApproveChallengeResponse` | `serviceSid` | `service_sid` |
| `V2ServicesPasskeysApproveChallengeResponse` | `entitySid` | `entity_sid` |
| `V2ServicesPasskeysApproveChallengeResponse` | `factorSid` | `factor_sid` |
| `V2ServicesPasskeysApproveChallengeResponse` | `dateCreated` | `date_created` |
| `V2ServicesPasskeysApproveChallengeResponse` | `dateUpdated` | `date_updated` |
| `V2ServicesPasskeysApproveChallengeResponse` | `dateResponded` | `date_responded` |
| `V2ServicesPasskeysApproveChallengeResponse` | `expirationDate` | `expiration_date` |
| `V2ServicesPasskeysApproveChallengeResponse` | `respondedReason` | `responded_reason` |
| `V2ServicesPasskeysApproveChallengeResponse` | `hiddenDetails` | `hidden_details` |
| `V2ServicesPasskeysApproveChallengeResponse` | `factorType` | `factor_type` |
| `V2ServicesPasskeysChallengesResponse` | `accountSid` | `account_sid` |
| `V2ServicesPasskeysChallengesResponse` | `serviceSid` | `service_sid` |
| `V2ServicesPasskeysChallengesResponse` | `entitySid` | `entity_sid` |
| `V2ServicesPasskeysChallengesResponse` | `factorSid` | `factor_sid` |
| `V2ServicesPasskeysChallengesResponse` | `dateCreated` | `date_created` |
| `V2ServicesPasskeysChallengesResponse` | `dateUpdated` | `date_updated` |
| `V2ServicesPasskeysChallengesResponse` | `dateResponded` | `date_responded` |
| `V2ServicesPasskeysChallengesResponse` | `expirationDate` | `expiration_date` |
| `V2ServicesPasskeysChallengesResponse` | `respondedReason` | `responded_reason` |
| `V2ServicesPasskeysChallengesResponse` | `hiddenDetails` | `hidden_details` |
| `V2ServicesPasskeysChallengesResponse` | `factorType` | `factor_type` |
| `V2ServicesPasskeysFactorsResponse` | `accountSid` | `account_sid` |
| `V2ServicesPasskeysFactorsResponse` | `serviceSid` | `service_sid` |
| `V2ServicesPasskeysFactorsResponse` | `entitySid` | `entity_sid` |
| `V2ServicesPasskeysFactorsResponse` | `dateCreated` | `date_created` |
| `V2ServicesPasskeysFactorsResponse` | `dateUpdated` | `date_updated` |
| `V2ServicesPasskeysFactorsResponse` | `friendlyName` | `friendly_name` |
| `V2ServicesPasskeysFactorsResponse` | `factorType` | `factor_type` |
| `V2ServicesPasskeysVerifyFactorResponse` | `accountSid` | `account_sid` |
| `V2ServicesPasskeysVerifyFactorResponse` | `serviceSid` | `service_sid` |
| `V2ServicesPasskeysVerifyFactorResponse` | `entitySid` | `entity_sid` |
| `V2ServicesPasskeysVerifyFactorResponse` | `dateCreated` | `date_created` |
| `V2ServicesPasskeysVerifyFactorResponse` | `dateUpdated` | `date_updated` |
| `V2ServicesPasskeysVerifyFactorResponse` | `friendlyName` | `friendly_name` |
| `V2ServicesPasskeysVerifyFactorResponse` | `factorType` | `factor_type` |
| `ValidateSenderId` | `isoCountry` | `iso_country` |
| `ValidateSenderId` | `senderId` | `sender_id` |
| `AccountReport` | `callDeliverabilityScore` | `call_deliverability_score` |
| `AccountReport` | `callAnswerScore` | `call_answer_score` |
| `AccountReport` | `totalCalls` | `total_calls` |
| `AccountReport` | `callDirection` | `call_direction` |
| `AccountReport` | `callState` | `call_state` |
| `AccountReport` | `callType` | `call_type` |
| `AccountReport` | `twilioEdgeLocation` | `twilio_edge_location` |
| `AccountReport` | `callerCountryCode` | `caller_country_code` |
| `AccountReport` | `calleeCountryCode` | `callee_country_code` |
| `AccountReport` | `averageQueueTimeMs` | `average_queue_time_ms` |
| `AccountReport` | `silentCallsPercentage` | `silent_calls_percentage` |
| `AccountReport` | `networkIssues` | `network_issues` |
| `AccountReport` | `kyt` | `KYT` |
| `AccountReport` | `answeringMachineDetection` | `answering_machine_detection` |
| `ApiV2010Account` | `authToken` | `auth_token` |
| `ApiV2010Account` | `dateCreated` | `date_created` |
| `ApiV2010Account` | `dateUpdated` | `date_updated` |
| `ApiV2010Account` | `friendlyName` | `friendly_name` |
| `ApiV2010Account` | `ownerAccountSid` | `owner_account_sid` |
| `ApiV2010Account` | `subresourceUris` | `subresource_uris` |
| `ApiV2010AccountAddress` | `accountSid` | `account_sid` |
| `ApiV2010AccountAddress` | `customerName` | `customer_name` |
| `ApiV2010AccountAddress` | `dateCreated` | `date_created` |
| `ApiV2010AccountAddress` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountAddress` | `friendlyName` | `friendly_name` |
| `ApiV2010AccountAddress` | `isoCountry` | `iso_country` |
| `ApiV2010AccountAddress` | `postalCode` | `postal_code` |
| `ApiV2010AccountAddress` | `emergencyEnabled` | `emergency_enabled` |
| `ApiV2010AccountAddress` | `streetSecondary` | `street_secondary` |
| `ApiV2010AccountAddressDependentPhoneNumber` | `accountSid` | `account_sid` |
| `ApiV2010AccountAddressDependentPhoneNumber` | `friendlyName` | `friendly_name` |
| `ApiV2010AccountAddressDependentPhoneNumber` | `phoneNumber` | `phone_number` |
| `ApiV2010AccountAddressDependentPhoneNumber` | `voiceUrl` | `voice_url` |
| `ApiV2010AccountAddressDependentPhoneNumber` | `voiceMethod` | `voice_method` |
| `ApiV2010AccountAddressDependentPhoneNumber` | `voiceFallbackMethod` | `voice_fallback_method` |
| `ApiV2010AccountAddressDependentPhoneNumber` | `voiceFallbackUrl` | `voice_fallback_url` |
| `ApiV2010AccountAddressDependentPhoneNumber` | `voiceCallerIdLookup` | `voice_caller_id_lookup` |
| `ApiV2010AccountAddressDependentPhoneNumber` | `dateCreated` | `date_created` |
| `ApiV2010AccountAddressDependentPhoneNumber` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountAddressDependentPhoneNumber` | `smsFallbackMethod` | `sms_fallback_method` |
| `ApiV2010AccountAddressDependentPhoneNumber` | `smsFallbackUrl` | `sms_fallback_url` |
| `ApiV2010AccountAddressDependentPhoneNumber` | `smsMethod` | `sms_method` |
| `ApiV2010AccountAddressDependentPhoneNumber` | `smsUrl` | `sms_url` |
| `ApiV2010AccountAddressDependentPhoneNumber` | `addressRequirements` | `address_requirements` |
| `ApiV2010AccountAddressDependentPhoneNumber` | `statusCallback` | `status_callback` |
| `ApiV2010AccountAddressDependentPhoneNumber` | `statusCallbackMethod` | `status_callback_method` |
| `ApiV2010AccountAddressDependentPhoneNumber` | `apiVersion` | `api_version` |
| `ApiV2010AccountAddressDependentPhoneNumber` | `smsApplicationSid` | `sms_application_sid` |
| `ApiV2010AccountAddressDependentPhoneNumber` | `voiceApplicationSid` | `voice_application_sid` |
| `ApiV2010AccountAddressDependentPhoneNumber` | `trunkSid` | `trunk_sid` |
| `ApiV2010AccountAddressDependentPhoneNumber` | `emergencyStatus` | `emergency_status` |
| `ApiV2010AccountAddressDependentPhoneNumber` | `emergencyAddressSid` | `emergency_address_sid` |
| `ApiV2010AccountApplication` | `accountSid` | `account_sid` |
| `ApiV2010AccountApplication` | `apiVersion` | `api_version` |
| `ApiV2010AccountApplication` | `dateCreated` | `date_created` |
| `ApiV2010AccountApplication` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountApplication` | `friendlyName` | `friendly_name` |
| `ApiV2010AccountApplication` | `messageStatusCallback` | `message_status_callback` |
| `ApiV2010AccountApplication` | `smsFallbackMethod` | `sms_fallback_method` |
| `ApiV2010AccountApplication` | `smsFallbackUrl` | `sms_fallback_url` |
| `ApiV2010AccountApplication` | `smsMethod` | `sms_method` |
| `ApiV2010AccountApplication` | `smsStatusCallback` | `sms_status_callback` |
| `ApiV2010AccountApplication` | `smsUrl` | `sms_url` |
| `ApiV2010AccountApplication` | `statusCallback` | `status_callback` |
| `ApiV2010AccountApplication` | `statusCallbackMethod` | `status_callback_method` |
| `ApiV2010AccountApplication` | `voiceCallerIdLookup` | `voice_caller_id_lookup` |
| `ApiV2010AccountApplication` | `voiceFallbackMethod` | `voice_fallback_method` |
| `ApiV2010AccountApplication` | `voiceFallbackUrl` | `voice_fallback_url` |
| `ApiV2010AccountApplication` | `voiceMethod` | `voice_method` |
| `ApiV2010AccountApplication` | `voiceUrl` | `voice_url` |
| `ApiV2010AccountApplication` | `publicApplicationConnectEnabled` | `public_application_connect_enabled` |
| `ApiV2010AccountAuthorizedConnectApp` | `accountSid` | `account_sid` |
| `ApiV2010AccountAuthorizedConnectApp` | `connectAppCompanyName` | `connect_app_company_name` |
| `ApiV2010AccountAuthorizedConnectApp` | `connectAppDescription` | `connect_app_description` |
| `ApiV2010AccountAuthorizedConnectApp` | `connectAppFriendlyName` | `connect_app_friendly_name` |
| `ApiV2010AccountAuthorizedConnectApp` | `connectAppHomepageUrl` | `connect_app_homepage_url` |
| `ApiV2010AccountAuthorizedConnectApp` | `connectAppSid` | `connect_app_sid` |
| `ApiV2010AccountAvailablePhoneNumberCountry` | `countryCode` | `country_code` |
| `ApiV2010AccountAvailablePhoneNumberCountry` | `subresourceUris` | `subresource_uris` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberLocal` | `friendlyName` | `friendly_name` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberLocal` | `phoneNumber` | `phone_number` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberLocal` | `rateCenter` | `rate_center` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberLocal` | `postalCode` | `postal_code` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberLocal` | `isoCountry` | `iso_country` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberLocal` | `addressRequirements` | `address_requirements` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMachineToMachine` | `friendlyName` | `friendly_name` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMachineToMachine` | `phoneNumber` | `phone_number` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMachineToMachine` | `rateCenter` | `rate_center` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMachineToMachine` | `postalCode` | `postal_code` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMachineToMachine` | `isoCountry` | `iso_country` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMachineToMachine` | `addressRequirements` | `address_requirements` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMobile` | `friendlyName` | `friendly_name` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMobile` | `phoneNumber` | `phone_number` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMobile` | `rateCenter` | `rate_center` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMobile` | `postalCode` | `postal_code` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMobile` | `isoCountry` | `iso_country` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMobile` | `addressRequirements` | `address_requirements` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational` | `friendlyName` | `friendly_name` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational` | `phoneNumber` | `phone_number` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational` | `rateCenter` | `rate_center` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational` | `postalCode` | `postal_code` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational` | `isoCountry` | `iso_country` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational` | `addressRequirements` | `address_requirements` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberSharedCost` | `friendlyName` | `friendly_name` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberSharedCost` | `phoneNumber` | `phone_number` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberSharedCost` | `rateCenter` | `rate_center` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberSharedCost` | `postalCode` | `postal_code` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberSharedCost` | `isoCountry` | `iso_country` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberSharedCost` | `addressRequirements` | `address_requirements` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFree` | `friendlyName` | `friendly_name` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFree` | `phoneNumber` | `phone_number` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFree` | `rateCenter` | `rate_center` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFree` | `postalCode` | `postal_code` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFree` | `isoCountry` | `iso_country` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFree` | `addressRequirements` | `address_requirements` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberVoip` | `friendlyName` | `friendly_name` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberVoip` | `phoneNumber` | `phone_number` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberVoip` | `rateCenter` | `rate_center` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberVoip` | `postalCode` | `postal_code` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberVoip` | `isoCountry` | `iso_country` |
| `ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberVoip` | `addressRequirements` | `address_requirements` |
| `ApiV2010AccountBalance` | `accountSid` | `account_sid` |
| `ApiV2010AccountCall` | `dateCreated` | `date_created` |
| `ApiV2010AccountCall` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountCall` | `parentCallSid` | `parent_call_sid` |
| `ApiV2010AccountCall` | `accountSid` | `account_sid` |
| `ApiV2010AccountCall` | `toFormatted` | `to_formatted` |
| `ApiV2010AccountCall` | `fromFormatted` | `from_formatted` |
| `ApiV2010AccountCall` | `phoneNumberSid` | `phone_number_sid` |
| `ApiV2010AccountCall` | `startTime` | `start_time` |
| `ApiV2010AccountCall` | `endTime` | `end_time` |
| `ApiV2010AccountCall` | `priceUnit` | `price_unit` |
| `ApiV2010AccountCall` | `answeredBy` | `answered_by` |
| `ApiV2010AccountCall` | `apiVersion` | `api_version` |
| `ApiV2010AccountCall` | `forwardedFrom` | `forwarded_from` |
| `ApiV2010AccountCall` | `groupSid` | `group_sid` |
| `ApiV2010AccountCall` | `callerName` | `caller_name` |
| `ApiV2010AccountCall` | `queueTime` | `queue_time` |
| `ApiV2010AccountCall` | `trunkSid` | `trunk_sid` |
| `ApiV2010AccountCall` | `subresourceUris` | `subresource_uris` |
| `ApiV2010AccountCallCallNotification` | `accountSid` | `account_sid` |
| `ApiV2010AccountCallCallNotification` | `apiVersion` | `api_version` |
| `ApiV2010AccountCallCallNotification` | `callSid` | `call_sid` |
| `ApiV2010AccountCallCallNotification` | `dateCreated` | `date_created` |
| `ApiV2010AccountCallCallNotification` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountCallCallNotification` | `errorCode` | `error_code` |
| `ApiV2010AccountCallCallNotification` | `messageDate` | `message_date` |
| `ApiV2010AccountCallCallNotification` | `messageText` | `message_text` |
| `ApiV2010AccountCallCallNotification` | `moreInfo` | `more_info` |
| `ApiV2010AccountCallCallNotification` | `requestMethod` | `request_method` |
| `ApiV2010AccountCallCallNotification` | `requestUrl` | `request_url` |
| `ApiV2010AccountCallCallNotificationInstance` | `accountSid` | `account_sid` |
| `ApiV2010AccountCallCallNotificationInstance` | `apiVersion` | `api_version` |
| `ApiV2010AccountCallCallNotificationInstance` | `callSid` | `call_sid` |
| `ApiV2010AccountCallCallNotificationInstance` | `dateCreated` | `date_created` |
| `ApiV2010AccountCallCallNotificationInstance` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountCallCallNotificationInstance` | `errorCode` | `error_code` |
| `ApiV2010AccountCallCallNotificationInstance` | `messageDate` | `message_date` |
| `ApiV2010AccountCallCallNotificationInstance` | `messageText` | `message_text` |
| `ApiV2010AccountCallCallNotificationInstance` | `moreInfo` | `more_info` |
| `ApiV2010AccountCallCallNotificationInstance` | `requestMethod` | `request_method` |
| `ApiV2010AccountCallCallNotificationInstance` | `requestUrl` | `request_url` |
| `ApiV2010AccountCallCallNotificationInstance` | `requestVariables` | `request_variables` |
| `ApiV2010AccountCallCallNotificationInstance` | `responseBody` | `response_body` |
| `ApiV2010AccountCallCallNotificationInstance` | `responseHeaders` | `response_headers` |
| `ApiV2010AccountCallCallRecording` | `accountSid` | `account_sid` |
| `ApiV2010AccountCallCallRecording` | `apiVersion` | `api_version` |
| `ApiV2010AccountCallCallRecording` | `callSid` | `call_sid` |
| `ApiV2010AccountCallCallRecording` | `conferenceSid` | `conference_sid` |
| `ApiV2010AccountCallCallRecording` | `dateCreated` | `date_created` |
| `ApiV2010AccountCallCallRecording` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountCallCallRecording` | `startTime` | `start_time` |
| `ApiV2010AccountCallCallRecording` | `encryptionDetails` | `encryption_details` |
| `ApiV2010AccountCallCallRecording` | `priceUnit` | `price_unit` |
| `ApiV2010AccountCallCallRecording` | `errorCode` | `error_code` |
| `ApiV2010AccountCallPayments` | `accountSid` | `account_sid` |
| `ApiV2010AccountCallPayments` | `callSid` | `call_sid` |
| `ApiV2010AccountCallPayments` | `dateCreated` | `date_created` |
| `ApiV2010AccountCallPayments` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountCallRealtimeTranscription` | `accountSid` | `account_sid` |
| `ApiV2010AccountCallRealtimeTranscription` | `callSid` | `call_sid` |
| `ApiV2010AccountCallRealtimeTranscription` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountCallSiprec` | `accountSid` | `account_sid` |
| `ApiV2010AccountCallSiprec` | `callSid` | `call_sid` |
| `ApiV2010AccountCallSiprec` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountCallStream` | `accountSid` | `account_sid` |
| `ApiV2010AccountCallStream` | `callSid` | `call_sid` |
| `ApiV2010AccountCallStream` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountCallUserDefinedMessage` | `accountSid` | `account_sid` |
| `ApiV2010AccountCallUserDefinedMessage` | `callSid` | `call_sid` |
| `ApiV2010AccountCallUserDefinedMessage` | `dateCreated` | `date_created` |
| `ApiV2010AccountCallUserDefinedMessageSubscription` | `accountSid` | `account_sid` |
| `ApiV2010AccountCallUserDefinedMessageSubscription` | `callSid` | `call_sid` |
| `ApiV2010AccountCallUserDefinedMessageSubscription` | `dateCreated` | `date_created` |
| `ApiV2010AccountConference` | `accountSid` | `account_sid` |
| `ApiV2010AccountConference` | `dateCreated` | `date_created` |
| `ApiV2010AccountConference` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountConference` | `apiVersion` | `api_version` |
| `ApiV2010AccountConference` | `friendlyName` | `friendly_name` |
| `ApiV2010AccountConference` | `subresourceUris` | `subresource_uris` |
| `ApiV2010AccountConference` | `reasonConferenceEnded` | `reason_conference_ended` |
| `ApiV2010AccountConference` | `callSidEndingConference` | `call_sid_ending_conference` |
| `ApiV2010AccountConferenceConferenceRecording` | `accountSid` | `account_sid` |
| `ApiV2010AccountConferenceConferenceRecording` | `apiVersion` | `api_version` |
| `ApiV2010AccountConferenceConferenceRecording` | `callSid` | `call_sid` |
| `ApiV2010AccountConferenceConferenceRecording` | `conferenceSid` | `conference_sid` |
| `ApiV2010AccountConferenceConferenceRecording` | `dateCreated` | `date_created` |
| `ApiV2010AccountConferenceConferenceRecording` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountConferenceConferenceRecording` | `startTime` | `start_time` |
| `ApiV2010AccountConferenceConferenceRecording` | `priceUnit` | `price_unit` |
| `ApiV2010AccountConferenceConferenceRecording` | `errorCode` | `error_code` |
| `ApiV2010AccountConferenceConferenceRecording` | `encryptionDetails` | `encryption_details` |
| `ApiV2010AccountConferenceParticipant` | `accountSid` | `account_sid` |
| `ApiV2010AccountConferenceParticipant` | `callSid` | `call_sid` |
| `ApiV2010AccountConferenceParticipant` | `callSidToCoach` | `call_sid_to_coach` |
| `ApiV2010AccountConferenceParticipant` | `conferenceSid` | `conference_sid` |
| `ApiV2010AccountConferenceParticipant` | `dateCreated` | `date_created` |
| `ApiV2010AccountConferenceParticipant` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountConferenceParticipant` | `endConferenceOnExit` | `end_conference_on_exit` |
| `ApiV2010AccountConferenceParticipant` | `startConferenceOnEnter` | `start_conference_on_enter` |
| `ApiV2010AccountConferenceParticipant` | `queueTime` | `queue_time` |
| `ApiV2010AccountConnectApp` | `accountSid` | `account_sid` |
| `ApiV2010AccountConnectApp` | `authorizeRedirectUrl` | `authorize_redirect_url` |
| `ApiV2010AccountConnectApp` | `companyName` | `company_name` |
| `ApiV2010AccountConnectApp` | `deauthorizeCallbackMethod` | `deauthorize_callback_method` |
| `ApiV2010AccountConnectApp` | `deauthorizeCallbackUrl` | `deauthorize_callback_url` |
| `ApiV2010AccountConnectApp` | `friendlyName` | `friendly_name` |
| `ApiV2010AccountConnectApp` | `homepageUrl` | `homepage_url` |
| `ApiV2010AccountIncomingPhoneNumber` | `accountSid` | `account_sid` |
| `ApiV2010AccountIncomingPhoneNumber` | `addressSid` | `address_sid` |
| `ApiV2010AccountIncomingPhoneNumber` | `addressRequirements` | `address_requirements` |
| `ApiV2010AccountIncomingPhoneNumber` | `apiVersion` | `api_version` |
| `ApiV2010AccountIncomingPhoneNumber` | `dateCreated` | `date_created` |
| `ApiV2010AccountIncomingPhoneNumber` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountIncomingPhoneNumber` | `friendlyName` | `friendly_name` |
| `ApiV2010AccountIncomingPhoneNumber` | `identitySid` | `identity_sid` |
| `ApiV2010AccountIncomingPhoneNumber` | `phoneNumber` | `phone_number` |
| `ApiV2010AccountIncomingPhoneNumber` | `smsApplicationSid` | `sms_application_sid` |
| `ApiV2010AccountIncomingPhoneNumber` | `smsFallbackMethod` | `sms_fallback_method` |
| `ApiV2010AccountIncomingPhoneNumber` | `smsFallbackUrl` | `sms_fallback_url` |
| `ApiV2010AccountIncomingPhoneNumber` | `smsMethod` | `sms_method` |
| `ApiV2010AccountIncomingPhoneNumber` | `smsUrl` | `sms_url` |
| `ApiV2010AccountIncomingPhoneNumber` | `statusCallback` | `status_callback` |
| `ApiV2010AccountIncomingPhoneNumber` | `statusCallbackMethod` | `status_callback_method` |
| `ApiV2010AccountIncomingPhoneNumber` | `trunkSid` | `trunk_sid` |
| `ApiV2010AccountIncomingPhoneNumber` | `voiceReceiveMode` | `voice_receive_mode` |
| `ApiV2010AccountIncomingPhoneNumber` | `voiceApplicationSid` | `voice_application_sid` |
| `ApiV2010AccountIncomingPhoneNumber` | `voiceCallerIdLookup` | `voice_caller_id_lookup` |
| `ApiV2010AccountIncomingPhoneNumber` | `voiceFallbackMethod` | `voice_fallback_method` |
| `ApiV2010AccountIncomingPhoneNumber` | `voiceFallbackUrl` | `voice_fallback_url` |
| `ApiV2010AccountIncomingPhoneNumber` | `voiceMethod` | `voice_method` |
| `ApiV2010AccountIncomingPhoneNumber` | `voiceUrl` | `voice_url` |
| `ApiV2010AccountIncomingPhoneNumber` | `emergencyStatus` | `emergency_status` |
| `ApiV2010AccountIncomingPhoneNumber` | `emergencyAddressSid` | `emergency_address_sid` |
| `ApiV2010AccountIncomingPhoneNumber` | `emergencyAddressStatus` | `emergency_address_status` |
| `ApiV2010AccountIncomingPhoneNumber` | `bundleSid` | `bundle_sid` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn` | `accountSid` | `account_sid` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn` | `resourceSid` | `resource_sid` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn` | `friendlyName` | `friendly_name` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn` | `uniqueName` | `unique_name` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn` | `dateCreated` | `date_created` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn` | `subresourceUris` | `subresource_uris` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal` | `accountSid` | `account_sid` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal` | `addressSid` | `address_sid` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal` | `addressRequirements` | `address_requirements` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal` | `apiVersion` | `api_version` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal` | `dateCreated` | `date_created` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal` | `friendlyName` | `friendly_name` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal` | `identitySid` | `identity_sid` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal` | `phoneNumber` | `phone_number` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal` | `smsApplicationSid` | `sms_application_sid` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal` | `smsFallbackMethod` | `sms_fallback_method` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal` | `smsFallbackUrl` | `sms_fallback_url` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal` | `smsMethod` | `sms_method` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal` | `smsUrl` | `sms_url` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal` | `statusCallback` | `status_callback` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal` | `statusCallbackMethod` | `status_callback_method` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal` | `trunkSid` | `trunk_sid` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal` | `voiceReceiveMode` | `voice_receive_mode` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal` | `voiceApplicationSid` | `voice_application_sid` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal` | `voiceCallerIdLookup` | `voice_caller_id_lookup` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal` | `voiceFallbackMethod` | `voice_fallback_method` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal` | `voiceFallbackUrl` | `voice_fallback_url` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal` | `voiceMethod` | `voice_method` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal` | `voiceUrl` | `voice_url` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal` | `emergencyStatus` | `emergency_status` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal` | `emergencyAddressSid` | `emergency_address_sid` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal` | `emergencyAddressStatus` | `emergency_address_status` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal` | `bundleSid` | `bundle_sid` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile` | `accountSid` | `account_sid` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile` | `addressSid` | `address_sid` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile` | `addressRequirements` | `address_requirements` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile` | `apiVersion` | `api_version` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile` | `dateCreated` | `date_created` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile` | `friendlyName` | `friendly_name` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile` | `identitySid` | `identity_sid` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile` | `phoneNumber` | `phone_number` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile` | `smsApplicationSid` | `sms_application_sid` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile` | `smsFallbackMethod` | `sms_fallback_method` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile` | `smsFallbackUrl` | `sms_fallback_url` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile` | `smsMethod` | `sms_method` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile` | `smsUrl` | `sms_url` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile` | `statusCallback` | `status_callback` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile` | `statusCallbackMethod` | `status_callback_method` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile` | `trunkSid` | `trunk_sid` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile` | `voiceReceiveMode` | `voice_receive_mode` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile` | `voiceApplicationSid` | `voice_application_sid` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile` | `voiceCallerIdLookup` | `voice_caller_id_lookup` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile` | `voiceFallbackMethod` | `voice_fallback_method` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile` | `voiceFallbackUrl` | `voice_fallback_url` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile` | `voiceMethod` | `voice_method` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile` | `voiceUrl` | `voice_url` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile` | `emergencyStatus` | `emergency_status` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile` | `emergencyAddressSid` | `emergency_address_sid` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile` | `emergencyAddressStatus` | `emergency_address_status` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile` | `bundleSid` | `bundle_sid` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree` | `accountSid` | `account_sid` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree` | `addressSid` | `address_sid` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree` | `addressRequirements` | `address_requirements` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree` | `apiVersion` | `api_version` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree` | `dateCreated` | `date_created` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree` | `friendlyName` | `friendly_name` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree` | `identitySid` | `identity_sid` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree` | `phoneNumber` | `phone_number` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree` | `smsApplicationSid` | `sms_application_sid` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree` | `smsFallbackMethod` | `sms_fallback_method` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree` | `smsFallbackUrl` | `sms_fallback_url` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree` | `smsMethod` | `sms_method` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree` | `smsUrl` | `sms_url` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree` | `statusCallback` | `status_callback` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree` | `statusCallbackMethod` | `status_callback_method` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree` | `trunkSid` | `trunk_sid` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree` | `voiceReceiveMode` | `voice_receive_mode` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree` | `voiceApplicationSid` | `voice_application_sid` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree` | `voiceCallerIdLookup` | `voice_caller_id_lookup` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree` | `voiceFallbackMethod` | `voice_fallback_method` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree` | `voiceFallbackUrl` | `voice_fallback_url` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree` | `voiceMethod` | `voice_method` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree` | `voiceUrl` | `voice_url` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree` | `emergencyStatus` | `emergency_status` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree` | `emergencyAddressSid` | `emergency_address_sid` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree` | `emergencyAddressStatus` | `emergency_address_status` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree` | `bundleSid` | `bundle_sid` |
| `ApiV2010AccountKey` | `friendlyName` | `friendly_name` |
| `ApiV2010AccountKey` | `dateCreated` | `date_created` |
| `ApiV2010AccountKey` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountMessage` | `numSegments` | `num_segments` |
| `ApiV2010AccountMessage` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountMessage` | `errorMessage` | `error_message` |
| `ApiV2010AccountMessage` | `accountSid` | `account_sid` |
| `ApiV2010AccountMessage` | `numMedia` | `num_media` |
| `ApiV2010AccountMessage` | `messagingServiceSid` | `messaging_service_sid` |
| `ApiV2010AccountMessage` | `dateSent` | `date_sent` |
| `ApiV2010AccountMessage` | `dateCreated` | `date_created` |
| `ApiV2010AccountMessage` | `errorCode` | `error_code` |
| `ApiV2010AccountMessage` | `priceUnit` | `price_unit` |
| `ApiV2010AccountMessage` | `apiVersion` | `api_version` |
| `ApiV2010AccountMessage` | `subresourceUris` | `subresource_uris` |
| `ApiV2010AccountMessageMedia` | `accountSid` | `account_sid` |
| `ApiV2010AccountMessageMedia` | `contentType` | `content_type` |
| `ApiV2010AccountMessageMedia` | `dateCreated` | `date_created` |
| `ApiV2010AccountMessageMedia` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountMessageMedia` | `parentSid` | `parent_sid` |
| `ApiV2010AccountMessageMessageFeedback` | `accountSid` | `account_sid` |
| `ApiV2010AccountMessageMessageFeedback` | `messageSid` | `message_sid` |
| `ApiV2010AccountMessageMessageFeedback` | `dateCreated` | `date_created` |
| `ApiV2010AccountMessageMessageFeedback` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountNewKey` | `friendlyName` | `friendly_name` |
| `ApiV2010AccountNewKey` | `dateCreated` | `date_created` |
| `ApiV2010AccountNewKey` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountNewSigningKey` | `friendlyName` | `friendly_name` |
| `ApiV2010AccountNewSigningKey` | `dateCreated` | `date_created` |
| `ApiV2010AccountNewSigningKey` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountNotification` | `accountSid` | `account_sid` |
| `ApiV2010AccountNotification` | `apiVersion` | `api_version` |
| `ApiV2010AccountNotification` | `callSid` | `call_sid` |
| `ApiV2010AccountNotification` | `dateCreated` | `date_created` |
| `ApiV2010AccountNotification` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountNotification` | `errorCode` | `error_code` |
| `ApiV2010AccountNotification` | `messageDate` | `message_date` |
| `ApiV2010AccountNotification` | `messageText` | `message_text` |
| `ApiV2010AccountNotification` | `moreInfo` | `more_info` |
| `ApiV2010AccountNotification` | `requestMethod` | `request_method` |
| `ApiV2010AccountNotification` | `requestUrl` | `request_url` |
| `ApiV2010AccountNotificationInstance` | `accountSid` | `account_sid` |
| `ApiV2010AccountNotificationInstance` | `apiVersion` | `api_version` |
| `ApiV2010AccountNotificationInstance` | `callSid` | `call_sid` |
| `ApiV2010AccountNotificationInstance` | `dateCreated` | `date_created` |
| `ApiV2010AccountNotificationInstance` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountNotificationInstance` | `errorCode` | `error_code` |
| `ApiV2010AccountNotificationInstance` | `messageDate` | `message_date` |
| `ApiV2010AccountNotificationInstance` | `messageText` | `message_text` |
| `ApiV2010AccountNotificationInstance` | `moreInfo` | `more_info` |
| `ApiV2010AccountNotificationInstance` | `requestMethod` | `request_method` |
| `ApiV2010AccountNotificationInstance` | `requestUrl` | `request_url` |
| `ApiV2010AccountNotificationInstance` | `requestVariables` | `request_variables` |
| `ApiV2010AccountNotificationInstance` | `responseBody` | `response_body` |
| `ApiV2010AccountNotificationInstance` | `responseHeaders` | `response_headers` |
| `ApiV2010AccountOutgoingCallerId` | `dateCreated` | `date_created` |
| `ApiV2010AccountOutgoingCallerId` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountOutgoingCallerId` | `friendlyName` | `friendly_name` |
| `ApiV2010AccountOutgoingCallerId` | `accountSid` | `account_sid` |
| `ApiV2010AccountOutgoingCallerId` | `phoneNumber` | `phone_number` |
| `ApiV2010AccountQueue` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountQueue` | `currentSize` | `current_size` |
| `ApiV2010AccountQueue` | `friendlyName` | `friendly_name` |
| `ApiV2010AccountQueue` | `accountSid` | `account_sid` |
| `ApiV2010AccountQueue` | `averageWaitTime` | `average_wait_time` |
| `ApiV2010AccountQueue` | `dateCreated` | `date_created` |
| `ApiV2010AccountQueue` | `maxSize` | `max_size` |
| `ApiV2010AccountQueueMember` | `callSid` | `call_sid` |
| `ApiV2010AccountQueueMember` | `dateEnqueued` | `date_enqueued` |
| `ApiV2010AccountQueueMember` | `waitTime` | `wait_time` |
| `ApiV2010AccountQueueMember` | `queueSid` | `queue_sid` |
| `ApiV2010AccountRecording` | `accountSid` | `account_sid` |
| `ApiV2010AccountRecording` | `apiVersion` | `api_version` |
| `ApiV2010AccountRecording` | `callSid` | `call_sid` |
| `ApiV2010AccountRecording` | `conferenceSid` | `conference_sid` |
| `ApiV2010AccountRecording` | `dateCreated` | `date_created` |
| `ApiV2010AccountRecording` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountRecording` | `startTime` | `start_time` |
| `ApiV2010AccountRecording` | `priceUnit` | `price_unit` |
| `ApiV2010AccountRecording` | `errorCode` | `error_code` |
| `ApiV2010AccountRecording` | `encryptionDetails` | `encryption_details` |
| `ApiV2010AccountRecording` | `subresourceUris` | `subresource_uris` |
| `ApiV2010AccountRecording` | `mediaUrl` | `media_url` |
| `ApiV2010AccountRecordingRecordingAddOnResult` | `accountSid` | `account_sid` |
| `ApiV2010AccountRecordingRecordingAddOnResult` | `addOnSid` | `add_on_sid` |
| `ApiV2010AccountRecordingRecordingAddOnResult` | `addOnConfigurationSid` | `add_on_configuration_sid` |
| `ApiV2010AccountRecordingRecordingAddOnResult` | `dateCreated` | `date_created` |
| `ApiV2010AccountRecordingRecordingAddOnResult` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountRecordingRecordingAddOnResult` | `dateCompleted` | `date_completed` |
| `ApiV2010AccountRecordingRecordingAddOnResult` | `referenceSid` | `reference_sid` |
| `ApiV2010AccountRecordingRecordingAddOnResult` | `subresourceUris` | `subresource_uris` |
| `ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload` | `addOnResultSid` | `add_on_result_sid` |
| `ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload` | `accountSid` | `account_sid` |
| `ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload` | `addOnSid` | `add_on_sid` |
| `ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload` | `addOnConfigurationSid` | `add_on_configuration_sid` |
| `ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload` | `contentType` | `content_type` |
| `ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload` | `dateCreated` | `date_created` |
| `ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload` | `referenceSid` | `reference_sid` |
| `ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload` | `subresourceUris` | `subresource_uris` |
| `ApiV2010AccountRecordingRecordingTranscription` | `accountSid` | `account_sid` |
| `ApiV2010AccountRecordingRecordingTranscription` | `apiVersion` | `api_version` |
| `ApiV2010AccountRecordingRecordingTranscription` | `dateCreated` | `date_created` |
| `ApiV2010AccountRecordingRecordingTranscription` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountRecordingRecordingTranscription` | `priceUnit` | `price_unit` |
| `ApiV2010AccountRecordingRecordingTranscription` | `recordingSid` | `recording_sid` |
| `ApiV2010AccountRecordingRecordingTranscription` | `transcriptionText` | `transcription_text` |
| `ApiV2010AccountShortCode` | `accountSid` | `account_sid` |
| `ApiV2010AccountShortCode` | `apiVersion` | `api_version` |
| `ApiV2010AccountShortCode` | `dateCreated` | `date_created` |
| `ApiV2010AccountShortCode` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountShortCode` | `friendlyName` | `friendly_name` |
| `ApiV2010AccountShortCode` | `shortCode` | `short_code` |
| `ApiV2010AccountShortCode` | `smsFallbackMethod` | `sms_fallback_method` |
| `ApiV2010AccountShortCode` | `smsFallbackUrl` | `sms_fallback_url` |
| `ApiV2010AccountShortCode` | `smsMethod` | `sms_method` |
| `ApiV2010AccountShortCode` | `smsUrl` | `sms_url` |
| `ApiV2010AccountSigningKey` | `friendlyName` | `friendly_name` |
| `ApiV2010AccountSigningKey` | `dateCreated` | `date_created` |
| `ApiV2010AccountSigningKey` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountSipSipCredentialList` | `accountSid` | `account_sid` |
| `ApiV2010AccountSipSipCredentialList` | `dateCreated` | `date_created` |
| `ApiV2010AccountSipSipCredentialList` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountSipSipCredentialList` | `friendlyName` | `friendly_name` |
| `ApiV2010AccountSipSipCredentialList` | `subresourceUris` | `subresource_uris` |
| `ApiV2010AccountSipSipCredentialListSipCredential` | `accountSid` | `account_sid` |
| `ApiV2010AccountSipSipCredentialListSipCredential` | `credentialListSid` | `credential_list_sid` |
| `ApiV2010AccountSipSipCredentialListSipCredential` | `dateCreated` | `date_created` |
| `ApiV2010AccountSipSipCredentialListSipCredential` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountSipSipDomain` | `accountSid` | `account_sid` |
| `ApiV2010AccountSipSipDomain` | `apiVersion` | `api_version` |
| `ApiV2010AccountSipSipDomain` | `authType` | `auth_type` |
| `ApiV2010AccountSipSipDomain` | `dateCreated` | `date_created` |
| `ApiV2010AccountSipSipDomain` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountSipSipDomain` | `domainName` | `domain_name` |
| `ApiV2010AccountSipSipDomain` | `friendlyName` | `friendly_name` |
| `ApiV2010AccountSipSipDomain` | `voiceFallbackMethod` | `voice_fallback_method` |
| `ApiV2010AccountSipSipDomain` | `voiceFallbackUrl` | `voice_fallback_url` |
| `ApiV2010AccountSipSipDomain` | `voiceMethod` | `voice_method` |
| `ApiV2010AccountSipSipDomain` | `voiceStatusCallbackMethod` | `voice_status_callback_method` |
| `ApiV2010AccountSipSipDomain` | `voiceStatusCallbackUrl` | `voice_status_callback_url` |
| `ApiV2010AccountSipSipDomain` | `voiceUrl` | `voice_url` |
| `ApiV2010AccountSipSipDomain` | `subresourceUris` | `subresource_uris` |
| `ApiV2010AccountSipSipDomain` | `sipRegistration` | `sip_registration` |
| `ApiV2010AccountSipSipDomain` | `emergencyCallingEnabled` | `emergency_calling_enabled` |
| `ApiV2010AccountSipSipDomain` | `byocTrunkSid` | `byoc_trunk_sid` |
| `ApiV2010AccountSipSipDomain` | `emergencyCallerSid` | `emergency_caller_sid` |
| `ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping` | `accountSid` | `account_sid` |
| `ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping` | `dateCreated` | `date_created` |
| `ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping` | `friendlyName` | `friendly_name` |
| `ApiV2010AccountSipSipDomainSipCredentialListMapping` | `accountSid` | `account_sid` |
| `ApiV2010AccountSipSipDomainSipCredentialListMapping` | `dateCreated` | `date_created` |
| `ApiV2010AccountSipSipDomainSipCredentialListMapping` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountSipSipDomainSipCredentialListMapping` | `domainSid` | `domain_sid` |
| `ApiV2010AccountSipSipDomainSipCredentialListMapping` | `friendlyName` | `friendly_name` |
| `ApiV2010AccountSipSipDomainSipIpAccessControlListMapping` | `accountSid` | `account_sid` |
| `ApiV2010AccountSipSipDomainSipIpAccessControlListMapping` | `dateCreated` | `date_created` |
| `ApiV2010AccountSipSipDomainSipIpAccessControlListMapping` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountSipSipDomainSipIpAccessControlListMapping` | `domainSid` | `domain_sid` |
| `ApiV2010AccountSipSipDomainSipIpAccessControlListMapping` | `friendlyName` | `friendly_name` |
| `ApiV2010AccountSipSipIpAccessControlList` | `accountSid` | `account_sid` |
| `ApiV2010AccountSipSipIpAccessControlList` | `friendlyName` | `friendly_name` |
| `ApiV2010AccountSipSipIpAccessControlList` | `dateCreated` | `date_created` |
| `ApiV2010AccountSipSipIpAccessControlList` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountSipSipIpAccessControlList` | `subresourceUris` | `subresource_uris` |
| `ApiV2010AccountSipSipIpAccessControlListSipIpAddress` | `accountSid` | `account_sid` |
| `ApiV2010AccountSipSipIpAccessControlListSipIpAddress` | `friendlyName` | `friendly_name` |
| `ApiV2010AccountSipSipIpAccessControlListSipIpAddress` | `ipAddress` | `ip_address` |
| `ApiV2010AccountSipSipIpAccessControlListSipIpAddress` | `cidrPrefixLength` | `cidr_prefix_length` |
| `ApiV2010AccountSipSipIpAccessControlListSipIpAddress` | `ipAccessControlListSid` | `ip_access_control_list_sid` |
| `ApiV2010AccountSipSipIpAccessControlListSipIpAddress` | `dateCreated` | `date_created` |
| `ApiV2010AccountSipSipIpAccessControlListSipIpAddress` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountToken` | `accountSid` | `account_sid` |
| `ApiV2010AccountToken` | `dateCreated` | `date_created` |
| `ApiV2010AccountToken` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountToken` | `iceServers` | `ice_servers` |
| `ApiV2010AccountTranscription` | `accountSid` | `account_sid` |
| `ApiV2010AccountTranscription` | `apiVersion` | `api_version` |
| `ApiV2010AccountTranscription` | `dateCreated` | `date_created` |
| `ApiV2010AccountTranscription` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountTranscription` | `priceUnit` | `price_unit` |
| `ApiV2010AccountTranscription` | `recordingSid` | `recording_sid` |
| `ApiV2010AccountTranscription` | `transcriptionText` | `transcription_text` |
| `ApiV2010AccountUsageUsageRecord` | `accountSid` | `account_sid` |
| `ApiV2010AccountUsageUsageRecord` | `apiVersion` | `api_version` |
| `ApiV2010AccountUsageUsageRecord` | `asOf` | `as_of` |
| `ApiV2010AccountUsageUsageRecord` | `countUnit` | `count_unit` |
| `ApiV2010AccountUsageUsageRecord` | `endDate` | `end_date` |
| `ApiV2010AccountUsageUsageRecord` | `priceUnit` | `price_unit` |
| `ApiV2010AccountUsageUsageRecord` | `startDate` | `start_date` |
| `ApiV2010AccountUsageUsageRecord` | `subresourceUris` | `subresource_uris` |
| `ApiV2010AccountUsageUsageRecord` | `usageUnit` | `usage_unit` |
| `ApiV2010AccountUsageUsageRecordUsageRecordAllTime` | `accountSid` | `account_sid` |
| `ApiV2010AccountUsageUsageRecordUsageRecordAllTime` | `apiVersion` | `api_version` |
| `ApiV2010AccountUsageUsageRecordUsageRecordAllTime` | `asOf` | `as_of` |
| `ApiV2010AccountUsageUsageRecordUsageRecordAllTime` | `countUnit` | `count_unit` |
| `ApiV2010AccountUsageUsageRecordUsageRecordAllTime` | `endDate` | `end_date` |
| `ApiV2010AccountUsageUsageRecordUsageRecordAllTime` | `priceUnit` | `price_unit` |
| `ApiV2010AccountUsageUsageRecordUsageRecordAllTime` | `startDate` | `start_date` |
| `ApiV2010AccountUsageUsageRecordUsageRecordAllTime` | `subresourceUris` | `subresource_uris` |
| `ApiV2010AccountUsageUsageRecordUsageRecordAllTime` | `usageUnit` | `usage_unit` |
| `ApiV2010AccountUsageUsageRecordUsageRecordDaily` | `accountSid` | `account_sid` |
| `ApiV2010AccountUsageUsageRecordUsageRecordDaily` | `apiVersion` | `api_version` |
| `ApiV2010AccountUsageUsageRecordUsageRecordDaily` | `asOf` | `as_of` |
| `ApiV2010AccountUsageUsageRecordUsageRecordDaily` | `countUnit` | `count_unit` |
| `ApiV2010AccountUsageUsageRecordUsageRecordDaily` | `endDate` | `end_date` |
| `ApiV2010AccountUsageUsageRecordUsageRecordDaily` | `priceUnit` | `price_unit` |
| `ApiV2010AccountUsageUsageRecordUsageRecordDaily` | `startDate` | `start_date` |
| `ApiV2010AccountUsageUsageRecordUsageRecordDaily` | `subresourceUris` | `subresource_uris` |
| `ApiV2010AccountUsageUsageRecordUsageRecordDaily` | `usageUnit` | `usage_unit` |
| `ApiV2010AccountUsageUsageRecordUsageRecordLastMonth` | `accountSid` | `account_sid` |
| `ApiV2010AccountUsageUsageRecordUsageRecordLastMonth` | `apiVersion` | `api_version` |
| `ApiV2010AccountUsageUsageRecordUsageRecordLastMonth` | `asOf` | `as_of` |
| `ApiV2010AccountUsageUsageRecordUsageRecordLastMonth` | `countUnit` | `count_unit` |
| `ApiV2010AccountUsageUsageRecordUsageRecordLastMonth` | `endDate` | `end_date` |
| `ApiV2010AccountUsageUsageRecordUsageRecordLastMonth` | `priceUnit` | `price_unit` |
| `ApiV2010AccountUsageUsageRecordUsageRecordLastMonth` | `startDate` | `start_date` |
| `ApiV2010AccountUsageUsageRecordUsageRecordLastMonth` | `subresourceUris` | `subresource_uris` |
| `ApiV2010AccountUsageUsageRecordUsageRecordLastMonth` | `usageUnit` | `usage_unit` |
| `ApiV2010AccountUsageUsageRecordUsageRecordMonthly` | `accountSid` | `account_sid` |
| `ApiV2010AccountUsageUsageRecordUsageRecordMonthly` | `apiVersion` | `api_version` |
| `ApiV2010AccountUsageUsageRecordUsageRecordMonthly` | `asOf` | `as_of` |
| `ApiV2010AccountUsageUsageRecordUsageRecordMonthly` | `countUnit` | `count_unit` |
| `ApiV2010AccountUsageUsageRecordUsageRecordMonthly` | `endDate` | `end_date` |
| `ApiV2010AccountUsageUsageRecordUsageRecordMonthly` | `priceUnit` | `price_unit` |
| `ApiV2010AccountUsageUsageRecordUsageRecordMonthly` | `startDate` | `start_date` |
| `ApiV2010AccountUsageUsageRecordUsageRecordMonthly` | `subresourceUris` | `subresource_uris` |
| `ApiV2010AccountUsageUsageRecordUsageRecordMonthly` | `usageUnit` | `usage_unit` |
| `ApiV2010AccountUsageUsageRecordUsageRecordThisMonth` | `accountSid` | `account_sid` |
| `ApiV2010AccountUsageUsageRecordUsageRecordThisMonth` | `apiVersion` | `api_version` |
| `ApiV2010AccountUsageUsageRecordUsageRecordThisMonth` | `asOf` | `as_of` |
| `ApiV2010AccountUsageUsageRecordUsageRecordThisMonth` | `countUnit` | `count_unit` |
| `ApiV2010AccountUsageUsageRecordUsageRecordThisMonth` | `endDate` | `end_date` |
| `ApiV2010AccountUsageUsageRecordUsageRecordThisMonth` | `priceUnit` | `price_unit` |
| `ApiV2010AccountUsageUsageRecordUsageRecordThisMonth` | `startDate` | `start_date` |
| `ApiV2010AccountUsageUsageRecordUsageRecordThisMonth` | `subresourceUris` | `subresource_uris` |
| `ApiV2010AccountUsageUsageRecordUsageRecordThisMonth` | `usageUnit` | `usage_unit` |
| `ApiV2010AccountUsageUsageRecordUsageRecordToday` | `accountSid` | `account_sid` |
| `ApiV2010AccountUsageUsageRecordUsageRecordToday` | `apiVersion` | `api_version` |
| `ApiV2010AccountUsageUsageRecordUsageRecordToday` | `asOf` | `as_of` |
| `ApiV2010AccountUsageUsageRecordUsageRecordToday` | `countUnit` | `count_unit` |
| `ApiV2010AccountUsageUsageRecordUsageRecordToday` | `endDate` | `end_date` |
| `ApiV2010AccountUsageUsageRecordUsageRecordToday` | `priceUnit` | `price_unit` |
| `ApiV2010AccountUsageUsageRecordUsageRecordToday` | `startDate` | `start_date` |
| `ApiV2010AccountUsageUsageRecordUsageRecordToday` | `subresourceUris` | `subresource_uris` |
| `ApiV2010AccountUsageUsageRecordUsageRecordToday` | `usageUnit` | `usage_unit` |
| `ApiV2010AccountUsageUsageRecordUsageRecordYearly` | `accountSid` | `account_sid` |
| `ApiV2010AccountUsageUsageRecordUsageRecordYearly` | `apiVersion` | `api_version` |
| `ApiV2010AccountUsageUsageRecordUsageRecordYearly` | `asOf` | `as_of` |
| `ApiV2010AccountUsageUsageRecordUsageRecordYearly` | `countUnit` | `count_unit` |
| `ApiV2010AccountUsageUsageRecordUsageRecordYearly` | `endDate` | `end_date` |
| `ApiV2010AccountUsageUsageRecordUsageRecordYearly` | `priceUnit` | `price_unit` |
| `ApiV2010AccountUsageUsageRecordUsageRecordYearly` | `startDate` | `start_date` |
| `ApiV2010AccountUsageUsageRecordUsageRecordYearly` | `subresourceUris` | `subresource_uris` |
| `ApiV2010AccountUsageUsageRecordUsageRecordYearly` | `usageUnit` | `usage_unit` |
| `ApiV2010AccountUsageUsageRecordUsageRecordYesterday` | `accountSid` | `account_sid` |
| `ApiV2010AccountUsageUsageRecordUsageRecordYesterday` | `apiVersion` | `api_version` |
| `ApiV2010AccountUsageUsageRecordUsageRecordYesterday` | `asOf` | `as_of` |
| `ApiV2010AccountUsageUsageRecordUsageRecordYesterday` | `countUnit` | `count_unit` |
| `ApiV2010AccountUsageUsageRecordUsageRecordYesterday` | `endDate` | `end_date` |
| `ApiV2010AccountUsageUsageRecordUsageRecordYesterday` | `priceUnit` | `price_unit` |
| `ApiV2010AccountUsageUsageRecordUsageRecordYesterday` | `startDate` | `start_date` |
| `ApiV2010AccountUsageUsageRecordUsageRecordYesterday` | `subresourceUris` | `subresource_uris` |
| `ApiV2010AccountUsageUsageRecordUsageRecordYesterday` | `usageUnit` | `usage_unit` |
| `ApiV2010AccountUsageUsageTrigger` | `accountSid` | `account_sid` |
| `ApiV2010AccountUsageUsageTrigger` | `apiVersion` | `api_version` |
| `ApiV2010AccountUsageUsageTrigger` | `callbackMethod` | `callback_method` |
| `ApiV2010AccountUsageUsageTrigger` | `callbackUrl` | `callback_url` |
| `ApiV2010AccountUsageUsageTrigger` | `currentValue` | `current_value` |
| `ApiV2010AccountUsageUsageTrigger` | `dateCreated` | `date_created` |
| `ApiV2010AccountUsageUsageTrigger` | `dateFired` | `date_fired` |
| `ApiV2010AccountUsageUsageTrigger` | `dateUpdated` | `date_updated` |
| `ApiV2010AccountUsageUsageTrigger` | `friendlyName` | `friendly_name` |
| `ApiV2010AccountUsageUsageTrigger` | `triggerBy` | `trigger_by` |
| `ApiV2010AccountUsageUsageTrigger` | `triggerValue` | `trigger_value` |
| `ApiV2010AccountUsageUsageTrigger` | `usageCategory` | `usage_category` |
| `ApiV2010AccountUsageUsageTrigger` | `usageRecordUri` | `usage_record_uri` |
| `ApiV2010AccountValidationRequest` | `accountSid` | `account_sid` |
| `ApiV2010AccountValidationRequest` | `callSid` | `call_sid` |
| `ApiV2010AccountValidationRequest` | `friendlyName` | `friendly_name` |
| `ApiV2010AccountValidationRequest` | `phoneNumber` | `phone_number` |
| `ApiV2010AccountValidationRequest` | `validationCode` | `validation_code` |
| `AuthenticationAction` | `copyCodeText` | `copy_code_text` |
| `BaseRelayData` | `sessionId` | `session_id` |
| `BaseRelayData` | `sequenceNumber` | `sequence_number` |
| `BrandedCalling` | `totalBrandedCalls` | `total_branded_calls` |
| `BrandedCalling` | `percentBrandedCalls` | `percent_branded_calls` |
| `BrandedCalling` | `answerRate` | `answer_rate` |
| `BrandedCalling` | `humanAnswerRate` | `human_answer_rate` |
| `BrandedCalling` | `engagementRate` | `engagement_rate` |
| `BrandedCalling` | `byUseCase` | `by_use_case` |
| `BrandedUseCaseDetail` | `useCase` | `use_case` |
| `BrandedUseCaseDetail` | `enabledPhonenumbers` | `enabled_phonenumbers` |
| `BrandedUseCaseDetail` | `totalCalls` | `total_calls` |
| `BrandedUseCaseDetail` | `answerRate` | `answer_rate` |
| `BrandedUseCaseDetail` | `humanAnswerRate` | `human_answer_rate` |
| `BrandedUseCaseDetail` | `engagementRate` | `engagement_rate` |
| `CallSummaryAgentSessionSummary` | `sessionId` | `session_id` |
| `CallSummaryAgentSessionSummary` | `ttsLatencyMs` | `tts_latency_ms` |
| `CallSummaryAgentSessionSummary` | `sttLatencyMs` | `stt_latency_ms` |
| `CallSummaryAgentSessionSummary` | `networkLatencyMs` | `network_latency_ms` |
| `CallSummaryAgentSessionSummary` | `timeToFirstAudioMs` | `time_to_first_audio_ms` |
| `CallSummaryAgentSessionSummary` | `applicationLatencyMs` | `application_latency_ms` |
| `CallSummaryAgentSessionSummary` | `sessionState` | `session_state` |
| `CallSummaryCrelayInterruptions` | `customerToAgent` | `customer_to_agent` |
| `CallSummaryCrelayInterruptions` | `agentToCustomer` | `agent_to_customer` |
| `CallSummaryCrelayTokenStats` | `tokensPerSecond` | `tokens_per_second` |
| `CallSummaryCrelayWordStats` | `wordsPerMinute` | `words_per_minute` |
| `CallWrapUpEvent` | `durationInSeconds` | `duration_in_seconds` |
| `CallWrapUpEvent` | `endStatus` | `end_status` |
| `CallWrapUpRelayData` | `sessionId` | `session_id` |
| `CallWrapUpRelayData` | `sequenceNumber` | `sequence_number` |
| `CallWrapUpRelayData` | `callWrapUp` | `call_wrap_up` |
| `CardAction` | `webviewSize` | `webview_size` |
| `CatalogItem` | `sectionTitle` | `section_title` |
| `CatalogItem` | `mediaUrl` | `media_url` |
| `ConfigurationsRelayData` | `sessionId` | `session_id` |
| `ConfigurationsRelayData` | `sequenceNumber` | `sequence_number` |
| `ContentV1Content` | `dateCreated` | `date_created` |
| `ContentV1Content` | `dateUpdated` | `date_updated` |
| `ContentV1Content` | `accountSid` | `account_sid` |
| `ContentV1Content` | `friendlyName` | `friendly_name` |
| `ContentV1ContentApprovalCreate` | `contentType` | `content_type` |
| `ContentV1ContentApprovalCreate` | `rejectionReason` | `rejection_reason` |
| `ContentV1ContentApprovalCreate` | `allowCategoryChange` | `allow_category_change` |
| `ContentV1ContentApprovalFetch` | `accountSid` | `account_sid` |
| `ContentV1ContentApprovalFetch1` | `accountSid` | `account_sid` |
| `ContentV1ContentAndApprovals` | `dateCreated` | `date_created` |
| `ContentV1ContentAndApprovals` | `dateUpdated` | `date_updated` |
| `ContentV1ContentAndApprovals` | `accountSid` | `account_sid` |
| `ContentV1ContentAndApprovals` | `friendlyName` | `friendly_name` |
| `ContentV1ContentAndApprovals` | `approvalRequests` | `approval_requests` |
| `ContentV1LegacyContent` | `dateCreated` | `date_created` |
| `ContentV1LegacyContent` | `dateUpdated` | `date_updated` |
| `ContentV1LegacyContent` | `accountSid` | `account_sid` |
| `ContentV1LegacyContent` | `friendlyName` | `friendly_name` |
| `ContentV1LegacyContent` | `legacyTemplateName` | `legacy_template_name` |
| `ContentV1LegacyContent` | `legacyBody` | `legacy_body` |
| `ContentV1LegacyContent1` | `dateCreated` | `date_created` |
| `ContentV1LegacyContent1` | `dateUpdated` | `date_updated` |
| `ContentV1LegacyContent1` | `accountSid` | `account_sid` |
| `ContentV1LegacyContent1` | `friendlyName` | `friendly_name` |
| `ContentV1LegacyContent1` | `legacyTemplateName` | `legacy_template_name` |
| `ContentV1LegacyContent1` | `legacyBody` | `legacy_body` |
| `ConversationsV1Configuration` | `accountSid` | `account_sid` |
| `ConversationsV1Configuration` | `defaultChatServiceSid` | `default_chat_service_sid` |
| `ConversationsV1Configuration` | `defaultMessagingServiceSid` | `default_messaging_service_sid` |
| `ConversationsV1Configuration` | `defaultInactiveTimer` | `default_inactive_timer` |
| `ConversationsV1Configuration` | `defaultClosedTimer` | `default_closed_timer` |
| `ConversationsV1ConfigurationConfigurationWebhook` | `accountSid` | `account_sid` |
| `ConversationsV1ConfigurationConfigurationWebhook` | `preWebhookUrl` | `pre_webhook_url` |
| `ConversationsV1ConfigurationConfigurationWebhook` | `postWebhookUrl` | `post_webhook_url` |
| `ConversationsV1ConfigurationAddress` | `accountSid` | `account_sid` |
| `ConversationsV1ConfigurationAddress` | `friendlyName` | `friendly_name` |
| `ConversationsV1ConfigurationAddress` | `autoCreation` | `auto_creation` |
| `ConversationsV1ConfigurationAddress` | `dateCreated` | `date_created` |
| `ConversationsV1ConfigurationAddress` | `dateUpdated` | `date_updated` |
| `ConversationsV1ConfigurationAddress` | `addressCountry` | `address_country` |
| `ConversationsV1Conversation` | `accountSid` | `account_sid` |
| `ConversationsV1Conversation` | `chatServiceSid` | `chat_service_sid` |
| `ConversationsV1Conversation` | `messagingServiceSid` | `messaging_service_sid` |
| `ConversationsV1Conversation` | `friendlyName` | `friendly_name` |
| `ConversationsV1Conversation` | `uniqueName` | `unique_name` |
| `ConversationsV1Conversation` | `dateCreated` | `date_created` |
| `ConversationsV1Conversation` | `dateUpdated` | `date_updated` |
| `ConversationsV1ConversationConversationMessage` | `accountSid` | `account_sid` |
| `ConversationsV1ConversationConversationMessage` | `conversationSid` | `conversation_sid` |
| `ConversationsV1ConversationConversationMessage` | `participantSid` | `participant_sid` |
| `ConversationsV1ConversationConversationMessage` | `dateCreated` | `date_created` |
| `ConversationsV1ConversationConversationMessage` | `dateUpdated` | `date_updated` |
| `ConversationsV1ConversationConversationMessage` | `contentSid` | `content_sid` |
| `ConversationsV1ConversationConversationMessageConversationMessageReceipt` | `accountSid` | `account_sid` |
| `ConversationsV1ConversationConversationMessageConversationMessageReceipt` | `conversationSid` | `conversation_sid` |
| `ConversationsV1ConversationConversationMessageConversationMessageReceipt` | `messageSid` | `message_sid` |
| `ConversationsV1ConversationConversationMessageConversationMessageReceipt` | `channelMessageSid` | `channel_message_sid` |
| `ConversationsV1ConversationConversationMessageConversationMessageReceipt` | `participantSid` | `participant_sid` |
| `ConversationsV1ConversationConversationMessageConversationMessageReceipt` | `errorCode` | `error_code` |
| `ConversationsV1ConversationConversationMessageConversationMessageReceipt` | `dateCreated` | `date_created` |
| `ConversationsV1ConversationConversationMessageConversationMessageReceipt` | `dateUpdated` | `date_updated` |
| `ConversationsV1ConversationConversationParticipant` | `accountSid` | `account_sid` |
| `ConversationsV1ConversationConversationParticipant` | `conversationSid` | `conversation_sid` |
| `ConversationsV1ConversationConversationParticipant` | `messagingBinding` | `messaging_binding` |
| `ConversationsV1ConversationConversationParticipant` | `roleSid` | `role_sid` |
| `ConversationsV1ConversationConversationParticipant` | `dateCreated` | `date_created` |
| `ConversationsV1ConversationConversationParticipant` | `dateUpdated` | `date_updated` |
| `ConversationsV1ConversationConversationParticipant` | `lastReadMessageIndex` | `last_read_message_index` |
| `ConversationsV1ConversationConversationParticipant` | `lastReadTimestamp` | `last_read_timestamp` |
| `ConversationsV1ConversationConversationScopedWebhook` | `accountSid` | `account_sid` |
| `ConversationsV1ConversationConversationScopedWebhook` | `conversationSid` | `conversation_sid` |
| `ConversationsV1ConversationConversationScopedWebhook` | `dateCreated` | `date_created` |
| `ConversationsV1ConversationConversationScopedWebhook` | `dateUpdated` | `date_updated` |
| `ConversationsV1ConversationWithParticipants` | `accountSid` | `account_sid` |
| `ConversationsV1ConversationWithParticipants` | `chatServiceSid` | `chat_service_sid` |
| `ConversationsV1ConversationWithParticipants` | `messagingServiceSid` | `messaging_service_sid` |
| `ConversationsV1ConversationWithParticipants` | `friendlyName` | `friendly_name` |
| `ConversationsV1ConversationWithParticipants` | `uniqueName` | `unique_name` |
| `ConversationsV1ConversationWithParticipants` | `dateCreated` | `date_created` |
| `ConversationsV1ConversationWithParticipants` | `dateUpdated` | `date_updated` |
| `ConversationsV1Credential` | `accountSid` | `account_sid` |
| `ConversationsV1Credential` | `friendlyName` | `friendly_name` |
| `ConversationsV1Credential` | `dateCreated` | `date_created` |
| `ConversationsV1Credential` | `dateUpdated` | `date_updated` |
| `ConversationsV1ParticipantConversation` | `accountSid` | `account_sid` |
| `ConversationsV1ParticipantConversation` | `chatServiceSid` | `chat_service_sid` |
| `ConversationsV1ParticipantConversation` | `participantSid` | `participant_sid` |
| `ConversationsV1ParticipantConversation` | `participantUserSid` | `participant_user_sid` |
| `ConversationsV1ParticipantConversation` | `participantIdentity` | `participant_identity` |
| `ConversationsV1ParticipantConversation` | `participantMessagingBinding` | `participant_messaging_binding` |
| `ConversationsV1ParticipantConversation` | `conversationSid` | `conversation_sid` |
| `ConversationsV1ParticipantConversation` | `conversationUniqueName` | `conversation_unique_name` |
| `ConversationsV1ParticipantConversation` | `conversationFriendlyName` | `conversation_friendly_name` |
| `ConversationsV1ParticipantConversation` | `conversationAttributes` | `conversation_attributes` |
| `ConversationsV1ParticipantConversation` | `conversationDateCreated` | `conversation_date_created` |
| `ConversationsV1ParticipantConversation` | `conversationDateUpdated` | `conversation_date_updated` |
| `ConversationsV1ParticipantConversation` | `conversationCreatedBy` | `conversation_created_by` |
| `ConversationsV1ParticipantConversation` | `conversationState` | `conversation_state` |
| `ConversationsV1ParticipantConversation` | `conversationTimers` | `conversation_timers` |
| `ConversationsV1Role` | `accountSid` | `account_sid` |
| `ConversationsV1Role` | `chatServiceSid` | `chat_service_sid` |
| `ConversationsV1Role` | `friendlyName` | `friendly_name` |
| `ConversationsV1Role` | `dateCreated` | `date_created` |
| `ConversationsV1Role` | `dateUpdated` | `date_updated` |
| `ConversationsV1Service` | `accountSid` | `account_sid` |
| `ConversationsV1Service` | `friendlyName` | `friendly_name` |
| `ConversationsV1Service` | `dateCreated` | `date_created` |
| `ConversationsV1Service` | `dateUpdated` | `date_updated` |
| `ConversationsV1ServiceServiceBinding` | `accountSid` | `account_sid` |
| `ConversationsV1ServiceServiceBinding` | `chatServiceSid` | `chat_service_sid` |
| `ConversationsV1ServiceServiceBinding` | `credentialSid` | `credential_sid` |
| `ConversationsV1ServiceServiceBinding` | `dateCreated` | `date_created` |
| `ConversationsV1ServiceServiceBinding` | `dateUpdated` | `date_updated` |
| `ConversationsV1ServiceServiceBinding` | `bindingType` | `binding_type` |
| `ConversationsV1ServiceServiceBinding` | `messageTypes` | `message_types` |
| `ConversationsV1ServiceServiceConfiguration` | `chatServiceSid` | `chat_service_sid` |
| `ConversationsV1ServiceServiceConfiguration` | `defaultConversationCreatorRoleSid` | `default_conversation_creator_role_sid` |
| `ConversationsV1ServiceServiceConfiguration` | `defaultConversationRoleSid` | `default_conversation_role_sid` |
| `ConversationsV1ServiceServiceConfiguration` | `defaultChatServiceRoleSid` | `default_chat_service_role_sid` |
| `ConversationsV1ServiceServiceConfiguration` | `reachabilityEnabled` | `reachability_enabled` |
| `ConversationsV1ServiceServiceConfigurationServiceNotification` | `accountSid` | `account_sid` |
| `ConversationsV1ServiceServiceConfigurationServiceNotification` | `chatServiceSid` | `chat_service_sid` |
| `ConversationsV1ServiceServiceConfigurationServiceNotification` | `newMessage` | `new_message` |
| `ConversationsV1ServiceServiceConfigurationServiceNotification` | `addedToConversation` | `added_to_conversation` |
| `ConversationsV1ServiceServiceConfigurationServiceNotification` | `removedFromConversation` | `removed_from_conversation` |
| `ConversationsV1ServiceServiceConfigurationServiceNotification` | `logEnabled` | `log_enabled` |
| `ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration` | `accountSid` | `account_sid` |
| `ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration` | `chatServiceSid` | `chat_service_sid` |
| `ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration` | `preWebhookUrl` | `pre_webhook_url` |
| `ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration` | `postWebhookUrl` | `post_webhook_url` |
| `ConversationsV1ServiceServiceConversation` | `accountSid` | `account_sid` |
| `ConversationsV1ServiceServiceConversation` | `chatServiceSid` | `chat_service_sid` |
| `ConversationsV1ServiceServiceConversation` | `messagingServiceSid` | `messaging_service_sid` |
| `ConversationsV1ServiceServiceConversation` | `friendlyName` | `friendly_name` |
| `ConversationsV1ServiceServiceConversation` | `uniqueName` | `unique_name` |
| `ConversationsV1ServiceServiceConversation` | `dateCreated` | `date_created` |
| `ConversationsV1ServiceServiceConversation` | `dateUpdated` | `date_updated` |
| `ConversationsV1ServiceServiceConversationServiceConversationMessage` | `accountSid` | `account_sid` |
| `ConversationsV1ServiceServiceConversationServiceConversationMessage` | `chatServiceSid` | `chat_service_sid` |
| `ConversationsV1ServiceServiceConversationServiceConversationMessage` | `conversationSid` | `conversation_sid` |
| `ConversationsV1ServiceServiceConversationServiceConversationMessage` | `participantSid` | `participant_sid` |
| `ConversationsV1ServiceServiceConversationServiceConversationMessage` | `dateCreated` | `date_created` |
| `ConversationsV1ServiceServiceConversationServiceConversationMessage` | `dateUpdated` | `date_updated` |
| `ConversationsV1ServiceServiceConversationServiceConversationMessage` | `contentSid` | `content_sid` |
| `ConversationsV1ServiceServiceConversationServiceConversationParticipant` | `accountSid` | `account_sid` |
| `ConversationsV1ServiceServiceConversationServiceConversationParticipant` | `chatServiceSid` | `chat_service_sid` |
| `ConversationsV1ServiceServiceConversationServiceConversationParticipant` | `conversationSid` | `conversation_sid` |
| `ConversationsV1ServiceServiceConversationServiceConversationParticipant` | `messagingBinding` | `messaging_binding` |
| `ConversationsV1ServiceServiceConversationServiceConversationParticipant` | `roleSid` | `role_sid` |
| `ConversationsV1ServiceServiceConversationServiceConversationParticipant` | `dateCreated` | `date_created` |
| `ConversationsV1ServiceServiceConversationServiceConversationParticipant` | `dateUpdated` | `date_updated` |
| `ConversationsV1ServiceServiceConversationServiceConversationParticipant` | `lastReadMessageIndex` | `last_read_message_index` |
| `ConversationsV1ServiceServiceConversationServiceConversationParticipant` | `lastReadTimestamp` | `last_read_timestamp` |
| `ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook` | `accountSid` | `account_sid` |
| `ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook` | `chatServiceSid` | `chat_service_sid` |
| `ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook` | `conversationSid` | `conversation_sid` |
| `ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook` | `dateCreated` | `date_created` |
| `ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook` | `dateUpdated` | `date_updated` |
| `ConversationsV1ServiceServiceConversationWithParticipants` | `accountSid` | `account_sid` |
| `ConversationsV1ServiceServiceConversationWithParticipants` | `chatServiceSid` | `chat_service_sid` |
| `ConversationsV1ServiceServiceConversationWithParticipants` | `messagingServiceSid` | `messaging_service_sid` |
| `ConversationsV1ServiceServiceConversationWithParticipants` | `friendlyName` | `friendly_name` |
| `ConversationsV1ServiceServiceConversationWithParticipants` | `uniqueName` | `unique_name` |
| `ConversationsV1ServiceServiceConversationWithParticipants` | `dateCreated` | `date_created` |
| `ConversationsV1ServiceServiceConversationWithParticipants` | `dateUpdated` | `date_updated` |
| `ConversationsV1ServiceServiceParticipantConversation` | `accountSid` | `account_sid` |
| `ConversationsV1ServiceServiceParticipantConversation` | `chatServiceSid` | `chat_service_sid` |
| `ConversationsV1ServiceServiceParticipantConversation` | `participantSid` | `participant_sid` |
| `ConversationsV1ServiceServiceParticipantConversation` | `participantUserSid` | `participant_user_sid` |
| `ConversationsV1ServiceServiceParticipantConversation` | `participantIdentity` | `participant_identity` |
| `ConversationsV1ServiceServiceParticipantConversation` | `participantMessagingBinding` | `participant_messaging_binding` |
| `ConversationsV1ServiceServiceParticipantConversation` | `conversationSid` | `conversation_sid` |
| `ConversationsV1ServiceServiceParticipantConversation` | `conversationUniqueName` | `conversation_unique_name` |
| `ConversationsV1ServiceServiceParticipantConversation` | `conversationFriendlyName` | `conversation_friendly_name` |
| `ConversationsV1ServiceServiceParticipantConversation` | `conversationAttributes` | `conversation_attributes` |
| `ConversationsV1ServiceServiceParticipantConversation` | `conversationDateCreated` | `conversation_date_created` |
| `ConversationsV1ServiceServiceParticipantConversation` | `conversationDateUpdated` | `conversation_date_updated` |
| `ConversationsV1ServiceServiceParticipantConversation` | `conversationCreatedBy` | `conversation_created_by` |
| `ConversationsV1ServiceServiceParticipantConversation` | `conversationState` | `conversation_state` |
| `ConversationsV1ServiceServiceParticipantConversation` | `conversationTimers` | `conversation_timers` |
| `ConversationsV1ServiceServiceRole` | `accountSid` | `account_sid` |
| `ConversationsV1ServiceServiceRole` | `chatServiceSid` | `chat_service_sid` |
| `ConversationsV1ServiceServiceRole` | `friendlyName` | `friendly_name` |
| `ConversationsV1ServiceServiceRole` | `dateCreated` | `date_created` |
| `ConversationsV1ServiceServiceRole` | `dateUpdated` | `date_updated` |
| `ConversationsV1ServiceServiceUser` | `accountSid` | `account_sid` |
| `ConversationsV1ServiceServiceUser` | `chatServiceSid` | `chat_service_sid` |
| `ConversationsV1ServiceServiceUser` | `roleSid` | `role_sid` |
| `ConversationsV1ServiceServiceUser` | `friendlyName` | `friendly_name` |
| `ConversationsV1ServiceServiceUser` | `isOnline` | `is_online` |
| `ConversationsV1ServiceServiceUser` | `isNotifiable` | `is_notifiable` |
| `ConversationsV1ServiceServiceUser` | `dateCreated` | `date_created` |
| `ConversationsV1ServiceServiceUser` | `dateUpdated` | `date_updated` |
| `ConversationsV1ServiceServiceUserServiceUserConversation` | `accountSid` | `account_sid` |
| `ConversationsV1ServiceServiceUserServiceUserConversation` | `chatServiceSid` | `chat_service_sid` |
| `ConversationsV1ServiceServiceUserServiceUserConversation` | `conversationSid` | `conversation_sid` |
| `ConversationsV1ServiceServiceUserServiceUserConversation` | `unreadMessagesCount` | `unread_messages_count` |
| `ConversationsV1ServiceServiceUserServiceUserConversation` | `lastReadMessageIndex` | `last_read_message_index` |
| `ConversationsV1ServiceServiceUserServiceUserConversation` | `participantSid` | `participant_sid` |
| `ConversationsV1ServiceServiceUserServiceUserConversation` | `userSid` | `user_sid` |
| `ConversationsV1ServiceServiceUserServiceUserConversation` | `friendlyName` | `friendly_name` |
| `ConversationsV1ServiceServiceUserServiceUserConversation` | `conversationState` | `conversation_state` |
| `ConversationsV1ServiceServiceUserServiceUserConversation` | `dateCreated` | `date_created` |
| `ConversationsV1ServiceServiceUserServiceUserConversation` | `dateUpdated` | `date_updated` |
| `ConversationsV1ServiceServiceUserServiceUserConversation` | `createdBy` | `created_by` |
| `ConversationsV1ServiceServiceUserServiceUserConversation` | `notificationLevel` | `notification_level` |
| `ConversationsV1ServiceServiceUserServiceUserConversation` | `uniqueName` | `unique_name` |
| `ConversationsV1User` | `accountSid` | `account_sid` |
| `ConversationsV1User` | `chatServiceSid` | `chat_service_sid` |
| `ConversationsV1User` | `roleSid` | `role_sid` |
| `ConversationsV1User` | `friendlyName` | `friendly_name` |
| `ConversationsV1User` | `isOnline` | `is_online` |
| `ConversationsV1User` | `isNotifiable` | `is_notifiable` |
| `ConversationsV1User` | `dateCreated` | `date_created` |
| `ConversationsV1User` | `dateUpdated` | `date_updated` |
| `ConversationsV1UserUserConversation` | `accountSid` | `account_sid` |
| `ConversationsV1UserUserConversation` | `chatServiceSid` | `chat_service_sid` |
| `ConversationsV1UserUserConversation` | `conversationSid` | `conversation_sid` |
| `ConversationsV1UserUserConversation` | `unreadMessagesCount` | `unread_messages_count` |
| `ConversationsV1UserUserConversation` | `lastReadMessageIndex` | `last_read_message_index` |
| `ConversationsV1UserUserConversation` | `participantSid` | `participant_sid` |
| `ConversationsV1UserUserConversation` | `userSid` | `user_sid` |
| `ConversationsV1UserUserConversation` | `friendlyName` | `friendly_name` |
| `ConversationsV1UserUserConversation` | `conversationState` | `conversation_state` |
| `ConversationsV1UserUserConversation` | `dateCreated` | `date_created` |
| `ConversationsV1UserUserConversation` | `dateUpdated` | `date_updated` |
| `ConversationsV1UserUserConversation` | `createdBy` | `created_by` |
| `ConversationsV1UserUserConversation` | `notificationLevel` | `notification_level` |
| `ConversationsV1UserUserConversation` | `uniqueName` | `unique_name` |
| `ErrorEvent` | `errorCode` | `error_code` |
| `ErrorRelayData` | `sessionId` | `session_id` |
| `ErrorRelayData` | `sequenceNumber` | `sequence_number` |
| `FlexV1Channel` | `accountSid` | `account_sid` |
| `FlexV1Channel` | `flexFlowSid` | `flex_flow_sid` |
| `FlexV1Channel` | `userSid` | `user_sid` |
| `FlexV1Channel` | `taskSid` | `task_sid` |
| `FlexV1Channel` | `dateCreated` | `date_created` |
| `FlexV1Channel` | `dateUpdated` | `date_updated` |
| `FlexV1Configuration` | `accountSid` | `account_sid` |
| `FlexV1Configuration` | `dateCreated` | `date_created` |
| `FlexV1Configuration` | `dateUpdated` | `date_updated` |
| `FlexV1Configuration` | `taskrouterWorkspaceSid` | `taskrouter_workspace_sid` |
| `FlexV1Configuration` | `taskrouterTargetWorkflowSid` | `taskrouter_target_workflow_sid` |
| `FlexV1Configuration` | `taskrouterTargetTaskqueueSid` | `taskrouter_target_taskqueue_sid` |
| `FlexV1Configuration` | `taskrouterTaskqueues` | `taskrouter_taskqueues` |
| `FlexV1Configuration` | `taskrouterSkills` | `taskrouter_skills` |
| `FlexV1Configuration` | `taskrouterWorkerChannels` | `taskrouter_worker_channels` |
| `FlexV1Configuration` | `taskrouterWorkerAttributes` | `taskrouter_worker_attributes` |
| `FlexV1Configuration` | `taskrouterOfflineActivitySid` | `taskrouter_offline_activity_sid` |
| `FlexV1Configuration` | `runtimeDomain` | `runtime_domain` |
| `FlexV1Configuration` | `messagingServiceInstanceSid` | `messaging_service_instance_sid` |
| `FlexV1Configuration` | `chatServiceInstanceSid` | `chat_service_instance_sid` |
| `FlexV1Configuration` | `flexServiceInstanceSid` | `flex_service_instance_sid` |
| `FlexV1Configuration` | `flexInstanceSid` | `flex_instance_sid` |
| `FlexV1Configuration` | `uiLanguage` | `ui_language` |
| `FlexV1Configuration` | `uiAttributes` | `ui_attributes` |
| `FlexV1Configuration` | `uiDependencies` | `ui_dependencies` |
| `FlexV1Configuration` | `uiVersion` | `ui_version` |
| `FlexV1Configuration` | `serviceVersion` | `service_version` |
| `FlexV1Configuration` | `callRecordingEnabled` | `call_recording_enabled` |
| `FlexV1Configuration` | `callRecordingWebhookUrl` | `call_recording_webhook_url` |
| `FlexV1Configuration` | `crmEnabled` | `crm_enabled` |
| `FlexV1Configuration` | `crmType` | `crm_type` |
| `FlexV1Configuration` | `crmCallbackUrl` | `crm_callback_url` |
| `FlexV1Configuration` | `crmFallbackUrl` | `crm_fallback_url` |
| `FlexV1Configuration` | `crmAttributes` | `crm_attributes` |
| `FlexV1Configuration` | `publicAttributes` | `public_attributes` |
| `FlexV1Configuration` | `pluginServiceEnabled` | `plugin_service_enabled` |
| `FlexV1Configuration` | `pluginServiceAttributes` | `plugin_service_attributes` |
| `FlexV1Configuration` | `outboundCallFlows` | `outbound_call_flows` |
| `FlexV1Configuration` | `serverlessServiceSids` | `serverless_service_sids` |
| `FlexV1Configuration` | `queueStatsConfiguration` | `queue_stats_configuration` |
| `FlexV1Configuration` | `flexInsightsHr` | `flex_insights_hr` |
| `FlexV1Configuration` | `flexInsightsDrilldown` | `flex_insights_drilldown` |
| `FlexV1Configuration` | `flexUrl` | `flex_url` |
| `FlexV1Configuration` | `channelConfigs` | `channel_configs` |
| `FlexV1Configuration` | `debuggerIntegration` | `debugger_integration` |
| `FlexV1Configuration` | `flexUiStatusReport` | `flex_ui_status_report` |
| `FlexV1Configuration` | `agentConvEndMethods` | `agent_conv_end_methods` |
| `FlexV1Configuration` | `citrixVoiceVdi` | `citrix_voice_vdi` |
| `FlexV1Configuration` | `offlineConfig` | `offline_config` |
| `FlexV1FlexFlow` | `accountSid` | `account_sid` |
| `FlexV1FlexFlow` | `dateCreated` | `date_created` |
| `FlexV1FlexFlow` | `dateUpdated` | `date_updated` |
| `FlexV1FlexFlow` | `friendlyName` | `friendly_name` |
| `FlexV1FlexFlow` | `chatServiceSid` | `chat_service_sid` |
| `FlexV1FlexFlow` | `channelType` | `channel_type` |
| `FlexV1FlexFlow` | `contactIdentity` | `contact_identity` |
| `FlexV1FlexFlow` | `integrationType` | `integration_type` |
| `FlexV1FlexFlow` | `longLived` | `long_lived` |
| `FlexV1FlexFlow` | `janitorEnabled` | `janitor_enabled` |
| `FlexV1FlexTeam` | `teamSid` | `team_sid` |
| `FlexV1FlexTeam` | `friendlyName` | `friendly_name` |
| `FlexV1FlexTeam` | `memberCount` | `member_count` |
| `FlexV1FlexTeam` | `parentTeamSid` | `parent_team_sid` |
| `FlexV1FlexTeam` | `dateCreated` | `date_created` |
| `FlexV1FlexTeam` | `dateUpdated` | `date_updated` |
| `FlexV1FlexTeam` | `accountSid` | `account_sid` |
| `FlexV1FlexTeam` | `instanceSid` | `instance_sid` |
| `FlexV1FlexTeamContext` | `teamSetupComplete` | `team_setup_complete` |
| `FlexV1FlexTeamContext` | `conversationalInsightsEnabled` | `conversational_insights_enabled` |
| `FlexV1FlexTeamContext` | `historicalReportingEnabled` | `historical_reporting_enabled` |
| `FlexV1FlexTeamMembers` | `flexUserSid` | `flex_user_sid` |
| `FlexV1FlexTeamMembers` | `friendlyName` | `friendly_name` |
| `FlexV1FlexTeamMembers` | `workerSid` | `worker_sid` |
| `FlexV1FlexTeamMembers` | `teamSid` | `team_sid` |
| `FlexV1FlexTeamMembers` | `instanceSid` | `instance_sid` |
| `FlexV1FlexTeamMembers` | `accountSid` | `account_sid` |
| `FlexV1FlexTeamOwners` | `flexUserSid` | `flex_user_sid` |
| `FlexV1FlexTeamOwners` | `friendlyName` | `friendly_name` |
| `FlexV1FlexTeamOwners` | `workerSid` | `worker_sid` |
| `FlexV1FlexTeamOwners` | `teamSid` | `team_sid` |
| `FlexV1FlexTeamOwners` | `instanceSid` | `instance_sid` |
| `FlexV1FlexTeamOwners` | `accountSid` | `account_sid` |
| `FlexV1InsightsAssessments` | `accountSid` | `account_sid` |
| `FlexV1InsightsAssessments` | `assessmentSid` | `assessment_sid` |
| `FlexV1InsightsAssessments` | `agentId` | `agent_id` |
| `FlexV1InsightsAssessments` | `segmentId` | `segment_id` |
| `FlexV1InsightsAssessments` | `userName` | `user_name` |
| `FlexV1InsightsAssessments` | `userEmail` | `user_email` |
| `FlexV1InsightsAssessments` | `answerText` | `answer_text` |
| `FlexV1InsightsAssessments` | `answerId` | `answer_id` |
| `FlexV1InsightsAssessmentsComment` | `accountSid` | `account_sid` |
| `FlexV1InsightsAssessmentsComment` | `assessmentSid` | `assessment_sid` |
| `FlexV1InsightsAssessmentsComment` | `agentId` | `agent_id` |
| `FlexV1InsightsAssessmentsComment` | `segmentId` | `segment_id` |
| `FlexV1InsightsAssessmentsComment` | `userName` | `user_name` |
| `FlexV1InsightsAssessmentsComment` | `userEmail` | `user_email` |
| `FlexV1InsightsConversations` | `accountId` | `account_id` |
| `FlexV1InsightsConversations` | `conversationId` | `conversation_id` |
| `FlexV1InsightsConversations` | `segmentCount` | `segment_count` |
| `FlexV1InsightsQuestionnaires` | `accountSid` | `account_sid` |
| `FlexV1InsightsQuestionnaires` | `questionnaireSid` | `questionnaire_sid` |
| `FlexV1InsightsQuestionnairesCategory` | `accountSid` | `account_sid` |
| `FlexV1InsightsQuestionnairesCategory` | `categorySid` | `category_sid` |
| `FlexV1InsightsQuestionnairesQuestion` | `accountSid` | `account_sid` |
| `FlexV1InsightsQuestionnairesQuestion` | `questionSid` | `question_sid` |
| `FlexV1InsightsQuestionnairesQuestion` | `answerSetId` | `answer_set_id` |
| `FlexV1InsightsQuestionnairesQuestion` | `allowNa` | `allow_na` |
| `FlexV1InsightsQuestionnairesQuestion` | `answerSet` | `answer_set` |
| `FlexV1InsightsSegments` | `segmentId` | `segment_id` |
| `FlexV1InsightsSegments` | `externalId` | `external_id` |
| `FlexV1InsightsSegments` | `externalContact` | `external_contact` |
| `FlexV1InsightsSegments` | `externalSegmentLinkId` | `external_segment_link_id` |
| `FlexV1InsightsSegments` | `accountId` | `account_id` |
| `FlexV1InsightsSegments` | `externalSegmentLink` | `external_segment_link` |
| `FlexV1InsightsSegments` | `agentId` | `agent_id` |
| `FlexV1InsightsSegments` | `agentPhone` | `agent_phone` |
| `FlexV1InsightsSegments` | `agentName` | `agent_name` |
| `FlexV1InsightsSegments` | `agentTeamName` | `agent_team_name` |
| `FlexV1InsightsSegments` | `agentTeamNameInHierarchy` | `agent_team_name_in_hierarchy` |
| `FlexV1InsightsSegments` | `agentLink` | `agent_link` |
| `FlexV1InsightsSegments` | `customerPhone` | `customer_phone` |
| `FlexV1InsightsSegments` | `customerName` | `customer_name` |
| `FlexV1InsightsSegments` | `customerLink` | `customer_link` |
| `FlexV1InsightsSegments` | `segmentRecordingOffset` | `segment_recording_offset` |
| `FlexV1InsightsSegments` | `assessmentType` | `assessment_type` |
| `FlexV1InsightsSegments` | `assessmentPercentage` | `assessment_percentage` |
| `FlexV1InsightsSession` | `workspaceId` | `workspace_id` |
| `FlexV1InsightsSession` | `sessionExpiry` | `session_expiry` |
| `FlexV1InsightsSession` | `sessionId` | `session_id` |
| `FlexV1InsightsSession` | `baseUrl` | `base_url` |
| `FlexV1InsightsSettingsAnswersets` | `accountSid` | `account_sid` |
| `FlexV1InsightsSettingsAnswersets` | `answerSets` | `answer_sets` |
| `FlexV1InsightsSettingsAnswersets` | `answerSetCategories` | `answer_set_categories` |
| `FlexV1InsightsSettingsAnswersets` | `notApplicable` | `not_applicable` |
| `FlexV1InsightsSettingsComment` | `accountSid` | `account_sid` |
| `FlexV1Instance` | `flexInstanceSid` | `flex_instance_sid` |
| `FlexV1Instance` | `accountSid` | `account_sid` |
| `FlexV1Instance` | `dateCreated` | `date_created` |
| `FlexV1Instance` | `dateUpdated` | `date_updated` |
| `FlexV1Interaction` | `interactionContextSid` | `interaction_context_sid` |
| `FlexV1Interaction` | `webhookTtid` | `webhook_ttid` |
| `FlexV1InteractionInteractionChannel` | `interactionSid` | `interaction_sid` |
| `FlexV1InteractionInteractionChannel` | `errorCode` | `error_code` |
| `FlexV1InteractionInteractionChannel` | `errorMessage` | `error_message` |
| `FlexV1InteractionInteractionChannelInteractionChannelInvite` | `interactionSid` | `interaction_sid` |
| `FlexV1InteractionInteractionChannelInteractionChannelInvite` | `channelSid` | `channel_sid` |
| `FlexV1InteractionInteractionChannelInteractionChannelParticipant` | `interactionSid` | `interaction_sid` |
| `FlexV1InteractionInteractionChannelInteractionChannelParticipant` | `channelSid` | `channel_sid` |
| `FlexV1InteractionInteractionChannelInteractionChannelParticipant` | `routingProperties` | `routing_properties` |
| `FlexV1InteractionInteractionChannelInteractionTransfer` | `instanceSid` | `instance_sid` |
| `FlexV1InteractionInteractionChannelInteractionTransfer` | `accountSid` | `account_sid` |
| `FlexV1InteractionInteractionChannelInteractionTransfer` | `interactionSid` | `interaction_sid` |
| `FlexV1InteractionInteractionChannelInteractionTransfer` | `channelSid` | `channel_sid` |
| `FlexV1InteractionInteractionChannelInteractionTransfer` | `executionSid` | `execution_sid` |
| `FlexV1InteractionInteractionChannelInteractionTransfer` | `noteSid` | `note_sid` |
| `FlexV1InteractionInteractionChannelInteractionTransfer` | `summarySid` | `summary_sid` |
| `FlexV1InteractionInteractionChannelInteractionTransfer` | `dateCreated` | `date_created` |
| `FlexV1InteractionInteractionChannelInteractionTransfer` | `dateUpdated` | `date_updated` |
| `FlexV1Plugin` | `accountSid` | `account_sid` |
| `FlexV1Plugin` | `uniqueName` | `unique_name` |
| `FlexV1Plugin` | `friendlyName` | `friendly_name` |
| `FlexV1Plugin` | `dateCreated` | `date_created` |
| `FlexV1Plugin` | `dateUpdated` | `date_updated` |
| `FlexV1PluginPluginVersion` | `pluginSid` | `plugin_sid` |
| `FlexV1PluginPluginVersion` | `accountSid` | `account_sid` |
| `FlexV1PluginPluginVersion` | `pluginUrl` | `plugin_url` |
| `FlexV1PluginPluginVersion` | `dateCreated` | `date_created` |
| `FlexV1PluginArchive` | `accountSid` | `account_sid` |
| `FlexV1PluginArchive` | `uniqueName` | `unique_name` |
| `FlexV1PluginArchive` | `friendlyName` | `friendly_name` |
| `FlexV1PluginArchive` | `dateCreated` | `date_created` |
| `FlexV1PluginArchive` | `dateUpdated` | `date_updated` |
| `FlexV1PluginConfiguration` | `accountSid` | `account_sid` |
| `FlexV1PluginConfiguration` | `dateCreated` | `date_created` |
| `FlexV1PluginConfigurationConfiguredPlugin` | `accountSid` | `account_sid` |
| `FlexV1PluginConfigurationConfiguredPlugin` | `configurationSid` | `configuration_sid` |
| `FlexV1PluginConfigurationConfiguredPlugin` | `pluginSid` | `plugin_sid` |
| `FlexV1PluginConfigurationConfiguredPlugin` | `pluginVersionSid` | `plugin_version_sid` |
| `FlexV1PluginConfigurationConfiguredPlugin` | `pluginUrl` | `plugin_url` |
| `FlexV1PluginConfigurationConfiguredPlugin` | `uniqueName` | `unique_name` |
| `FlexV1PluginConfigurationConfiguredPlugin` | `friendlyName` | `friendly_name` |
| `FlexV1PluginConfigurationConfiguredPlugin` | `pluginArchived` | `plugin_archived` |
| `FlexV1PluginConfigurationConfiguredPlugin` | `pluginVersionArchived` | `plugin_version_archived` |
| `FlexV1PluginConfigurationConfiguredPlugin` | `dateCreated` | `date_created` |
| `FlexV1PluginConfigurationArchive` | `accountSid` | `account_sid` |
| `FlexV1PluginConfigurationArchive` | `dateCreated` | `date_created` |
| `FlexV1PluginRelease` | `accountSid` | `account_sid` |
| `FlexV1PluginRelease` | `configurationSid` | `configuration_sid` |
| `FlexV1PluginRelease` | `dateCreated` | `date_created` |
| `FlexV1PluginVersionArchive` | `pluginSid` | `plugin_sid` |
| `FlexV1PluginVersionArchive` | `accountSid` | `account_sid` |
| `FlexV1PluginVersionArchive` | `pluginUrl` | `plugin_url` |
| `FlexV1PluginVersionArchive` | `dateCreated` | `date_created` |
| `FlexV1WebChannel` | `accountSid` | `account_sid` |
| `FlexV1WebChannel` | `flexFlowSid` | `flex_flow_sid` |
| `FlexV1WebChannel` | `dateCreated` | `date_created` |
| `FlexV1WebChannel` | `dateUpdated` | `date_updated` |
| `FlexV2FlexUser` | `accountSid` | `account_sid` |
| `FlexV2FlexUser` | `instanceSid` | `instance_sid` |
| `FlexV2FlexUser` | `userSid` | `user_sid` |
| `FlexV2FlexUser` | `flexUserSid` | `flex_user_sid` |
| `FlexV2FlexUser` | `workerSid` | `worker_sid` |
| `FlexV2FlexUser` | `workspaceSid` | `workspace_sid` |
| `FlexV2FlexUser` | `flexTeamSid` | `flex_team_sid` |
| `FlexV2FlexUser` | `createdDate` | `created_date` |
| `FlexV2FlexUser` | `updatedDate` | `updated_date` |
| `FlexV2Instance` | `flexInstanceSid` | `flex_instance_sid` |
| `FlexV2Instance` | `accountSid` | `account_sid` |
| `FlexV2Instance` | `dateCreated` | `date_created` |
| `FlexV2Instance` | `dateUpdated` | `date_updated` |
| `FlexV2WebChannel` | `conversationSid` | `conversation_sid` |
| `FlowsPage` | `nextPageId` | `next_page_id` |
| `IncomingPhoneNumberAssignedAddOnExtension` | `accountSid` | `account_sid` |
| `IncomingPhoneNumberAssignedAddOnExtension` | `resourceSid` | `resource_sid` |
| `IncomingPhoneNumberAssignedAddOnExtension` | `assignedAddOnSid` | `assigned_add_on_sid` |
| `IncomingPhoneNumberAssignedAddOnExtension` | `friendlyName` | `friendly_name` |
| `IncomingPhoneNumberAssignedAddOnExtension` | `productName` | `product_name` |
| `IncomingPhoneNumberAssignedAddOnExtension` | `uniqueName` | `unique_name` |
| `InsightsV1AccountSettings` | `accountSid` | `account_sid` |
| `InsightsV1AccountSettings` | `advancedFeatures` | `advanced_features` |
| `InsightsV1AccountSettings` | `voiceTrace` | `voice_trace` |
| `InsightsV1CallAnnotation` | `callSid` | `call_sid` |
| `InsightsV1CallAnnotation` | `accountSid` | `account_sid` |
| `InsightsV1CallAnnotation` | `answeredBy` | `answered_by` |
| `InsightsV1CallAnnotation` | `connectivityIssue` | `connectivity_issue` |
| `InsightsV1CallAnnotation` | `qualityIssues` | `quality_issues` |
| `InsightsV1CallAnnotation` | `callScore` | `call_score` |
| `InsightsV1CallEvent` | `callSid` | `call_sid` |
| `InsightsV1CallEvent` | `accountSid` | `account_sid` |
| `InsightsV1CallEvent` | `carrierEdge` | `carrier_edge` |
| `InsightsV1CallEvent` | `sipEdge` | `sip_edge` |
| `InsightsV1CallEvent` | `sdkEdge` | `sdk_edge` |
| `InsightsV1CallEvent` | `clientEdge` | `client_edge` |
| `InsightsV1CallMetric` | `callSid` | `call_sid` |
| `InsightsV1CallMetric` | `accountSid` | `account_sid` |
| `InsightsV1CallMetric` | `carrierEdge` | `carrier_edge` |
| `InsightsV1CallMetric` | `sipEdge` | `sip_edge` |
| `InsightsV1CallMetric` | `sdkEdge` | `sdk_edge` |
| `InsightsV1CallMetric` | `clientEdge` | `client_edge` |
| `InsightsV1CallSummary` | `accountSid` | `account_sid` |
| `InsightsV1CallSummary` | `callSid` | `call_sid` |
| `InsightsV1CallSummary` | `callType` | `call_type` |
| `InsightsV1CallSummary` | `callState` | `call_state` |
| `InsightsV1CallSummary` | `answeredBy` | `answered_by` |
| `InsightsV1CallSummary` | `processingState` | `processing_state` |
| `InsightsV1CallSummary` | `createdTime` | `created_time` |
| `InsightsV1CallSummary` | `startTime` | `start_time` |
| `InsightsV1CallSummary` | `endTime` | `end_time` |
| `InsightsV1CallSummary` | `connectDuration` | `connect_duration` |
| `InsightsV1CallSummary` | `carrierEdge` | `carrier_edge` |
| `InsightsV1CallSummary` | `clientEdge` | `client_edge` |
| `InsightsV1CallSummary` | `sdkEdge` | `sdk_edge` |
| `InsightsV1CallSummary` | `sipEdge` | `sip_edge` |
| `InsightsV1CallSummaries` | `accountSid` | `account_sid` |
| `InsightsV1CallSummaries` | `callSid` | `call_sid` |
| `InsightsV1CallSummaries` | `answeredBy` | `answered_by` |
| `InsightsV1CallSummaries` | `callType` | `call_type` |
| `InsightsV1CallSummaries` | `callState` | `call_state` |
| `InsightsV1CallSummaries` | `processingState` | `processing_state` |
| `InsightsV1CallSummaries` | `createdTime` | `created_time` |
| `InsightsV1CallSummaries` | `startTime` | `start_time` |
| `InsightsV1CallSummaries` | `endTime` | `end_time` |
| `InsightsV1CallSummaries` | `connectDuration` | `connect_duration` |
| `InsightsV1CallSummaries` | `carrierEdge` | `carrier_edge` |
| `InsightsV1CallSummaries` | `clientEdge` | `client_edge` |
| `InsightsV1CallSummaries` | `sdkEdge` | `sdk_edge` |
| `InsightsV1CallSummaries` | `sipEdge` | `sip_edge` |
| `InsightsV1Conference` | `conferenceSid` | `conference_sid` |
| `InsightsV1Conference` | `accountSid` | `account_sid` |
| `InsightsV1Conference` | `friendlyName` | `friendly_name` |
| `InsightsV1Conference` | `createTime` | `create_time` |
| `InsightsV1Conference` | `startTime` | `start_time` |
| `InsightsV1Conference` | `endTime` | `end_time` |
| `InsightsV1Conference` | `durationSeconds` | `duration_seconds` |
| `InsightsV1Conference` | `connectDurationSeconds` | `connect_duration_seconds` |
| `InsightsV1Conference` | `maxParticipants` | `max_participants` |
| `InsightsV1Conference` | `maxConcurrentParticipants` | `max_concurrent_participants` |
| `InsightsV1Conference` | `uniqueParticipants` | `unique_participants` |
| `InsightsV1Conference` | `endReason` | `end_reason` |
| `InsightsV1Conference` | `endedBy` | `ended_by` |
| `InsightsV1Conference` | `mixerRegion` | `mixer_region` |
| `InsightsV1Conference` | `mixerRegionRequested` | `mixer_region_requested` |
| `InsightsV1Conference` | `recordingEnabled` | `recording_enabled` |
| `InsightsV1Conference` | `detectedIssues` | `detected_issues` |
| `InsightsV1Conference` | `tagInfo` | `tag_info` |
| `InsightsV1Conference` | `processingState` | `processing_state` |
| `InsightsV1ConferenceConferenceParticipant` | `participantSid` | `participant_sid` |
| `InsightsV1ConferenceConferenceParticipant` | `conferenceSid` | `conference_sid` |
| `InsightsV1ConferenceConferenceParticipant` | `callSid` | `call_sid` |
| `InsightsV1ConferenceConferenceParticipant` | `accountSid` | `account_sid` |
| `InsightsV1ConferenceConferenceParticipant` | `callDirection` | `call_direction` |
| `InsightsV1ConferenceConferenceParticipant` | `callStatus` | `call_status` |
| `InsightsV1ConferenceConferenceParticipant` | `countryCode` | `country_code` |
| `InsightsV1ConferenceConferenceParticipant` | `isModerator` | `is_moderator` |
| `InsightsV1ConferenceConferenceParticipant` | `joinTime` | `join_time` |
| `InsightsV1ConferenceConferenceParticipant` | `leaveTime` | `leave_time` |
| `InsightsV1ConferenceConferenceParticipant` | `durationSeconds` | `duration_seconds` |
| `InsightsV1ConferenceConferenceParticipant` | `outboundQueueLength` | `outbound_queue_length` |
| `InsightsV1ConferenceConferenceParticipant` | `outboundTimeInQueue` | `outbound_time_in_queue` |
| `InsightsV1ConferenceConferenceParticipant` | `jitterBufferSize` | `jitter_buffer_size` |
| `InsightsV1ConferenceConferenceParticipant` | `isCoach` | `is_coach` |
| `InsightsV1ConferenceConferenceParticipant` | `coachedParticipants` | `coached_participants` |
| `InsightsV1ConferenceConferenceParticipant` | `participantRegion` | `participant_region` |
| `InsightsV1ConferenceConferenceParticipant` | `conferenceRegion` | `conference_region` |
| `InsightsV1ConferenceConferenceParticipant` | `callType` | `call_type` |
| `InsightsV1ConferenceConferenceParticipant` | `processingState` | `processing_state` |
| `InsightsV1VideoRoomSummary` | `accountSid` | `account_sid` |
| `InsightsV1VideoRoomSummary` | `roomSid` | `room_sid` |
| `InsightsV1VideoRoomSummary` | `roomName` | `room_name` |
| `InsightsV1VideoRoomSummary` | `createTime` | `create_time` |
| `InsightsV1VideoRoomSummary` | `endTime` | `end_time` |
| `InsightsV1VideoRoomSummary` | `roomType` | `room_type` |
| `InsightsV1VideoRoomSummary` | `roomStatus` | `room_status` |
| `InsightsV1VideoRoomSummary` | `statusCallback` | `status_callback` |
| `InsightsV1VideoRoomSummary` | `statusCallbackMethod` | `status_callback_method` |
| `InsightsV1VideoRoomSummary` | `createdMethod` | `created_method` |
| `InsightsV1VideoRoomSummary` | `endReason` | `end_reason` |
| `InsightsV1VideoRoomSummary` | `maxParticipants` | `max_participants` |
| `InsightsV1VideoRoomSummary` | `uniqueParticipants` | `unique_participants` |
| `InsightsV1VideoRoomSummary` | `uniqueParticipantIdentities` | `unique_participant_identities` |
| `InsightsV1VideoRoomSummary` | `concurrentParticipants` | `concurrent_participants` |
| `InsightsV1VideoRoomSummary` | `maxConcurrentParticipants` | `max_concurrent_participants` |
| `InsightsV1VideoRoomSummary` | `mediaRegion` | `media_region` |
| `InsightsV1VideoRoomSummary` | `durationSec` | `duration_sec` |
| `InsightsV1VideoRoomSummary` | `totalParticipantDurationSec` | `total_participant_duration_sec` |
| `InsightsV1VideoRoomSummary` | `totalRecordingDurationSec` | `total_recording_duration_sec` |
| `InsightsV1VideoRoomSummary` | `processingState` | `processing_state` |
| `InsightsV1VideoRoomSummary` | `recordingEnabled` | `recording_enabled` |
| `InsightsV1VideoRoomSummary` | `edgeLocation` | `edge_location` |
| `InsightsV1VideoRoomSummaryVideoParticipantSummary` | `participantSid` | `participant_sid` |
| `InsightsV1VideoRoomSummaryVideoParticipantSummary` | `participantIdentity` | `participant_identity` |
| `InsightsV1VideoRoomSummaryVideoParticipantSummary` | `joinTime` | `join_time` |
| `InsightsV1VideoRoomSummaryVideoParticipantSummary` | `leaveTime` | `leave_time` |
| `InsightsV1VideoRoomSummaryVideoParticipantSummary` | `durationSec` | `duration_sec` |
| `InsightsV1VideoRoomSummaryVideoParticipantSummary` | `accountSid` | `account_sid` |
| `InsightsV1VideoRoomSummaryVideoParticipantSummary` | `roomSid` | `room_sid` |
| `InsightsV1VideoRoomSummaryVideoParticipantSummary` | `endReason` | `end_reason` |
| `InsightsV1VideoRoomSummaryVideoParticipantSummary` | `errorCode` | `error_code` |
| `InsightsV1VideoRoomSummaryVideoParticipantSummary` | `errorCodeUrl` | `error_code_url` |
| `InsightsV1VideoRoomSummaryVideoParticipantSummary` | `mediaRegion` | `media_region` |
| `InsightsV1VideoRoomSummaryVideoParticipantSummary` | `edgeLocation` | `edge_location` |
| `InsightsV1VideoRoomSummaryVideoParticipantSummary` | `publisherInfo` | `publisher_info` |
| `InsightsV2AccountReport` | `accountSid` | `account_sid` |
| `InsightsV2AccountReport` | `reportId` | `report_id` |
| `InsightsV2AccountReport` | `requestMeta` | `request_meta` |
| `InsightsV2CreateAccountReportRequest` | `timeRange` | `time_range` |
| `InsightsV2CreatePhoneNumbersReportRequest` | `timeRange` | `time_range` |
| `InsightsV2CreateReportResponse` | `accountSid` | `account_sid` |
| `InsightsV2CreateReportResponse` | `reportId` | `report_id` |
| `InsightsV2CreateReportResponse` | `requestMeta` | `request_meta` |
| `InsightsV2InboundPhoneNumberReport` | `totalCalls` | `total_calls` |
| `InsightsV2InboundPhoneNumberReport` | `callAnswerScore` | `call_answer_score` |
| `InsightsV2InboundPhoneNumberReport` | `callStatePercentage` | `call_state_percentage` |
| `InsightsV2InboundPhoneNumberReport` | `silentCallsPercentage` | `silent_calls_percentage` |
| `InsightsV2OutboundPhoneNumberReport` | `totalCalls` | `total_calls` |
| `InsightsV2OutboundPhoneNumberReport` | `callAnswerScore` | `call_answer_score` |
| `InsightsV2OutboundPhoneNumberReport` | `callsByDeviceType` | `calls_by_device_type` |
| `InsightsV2OutboundPhoneNumberReport` | `answerRateDeviceType` | `answer_rate_device_type` |
| `InsightsV2OutboundPhoneNumberReport` | `callStatePercentage` | `call_state_percentage` |
| `InsightsV2OutboundPhoneNumberReport` | `blockedCallsByCarrier` | `blocked_calls_by_carrier` |
| `InsightsV2OutboundPhoneNumberReport` | `silentCallsPercentage` | `silent_calls_percentage` |
| `InsightsV2OutboundPhoneNumberReport` | `shortDurationCallsPercentage` | `short_duration_calls_percentage` |
| `InsightsV2OutboundPhoneNumberReport` | `longDurationCallsPercentage` | `long_duration_calls_percentage` |
| `InsightsV2OutboundPhoneNumberReport` | `potentialRobocallsPercentage` | `potential_robocalls_percentage` |
| `InsightsV2OutboundPhoneNumberReport` | `answeringMachineDetection` | `answering_machine_detection` |
| `InterruptRelayData` | `sessionId` | `session_id` |
| `InterruptRelayData` | `sequenceNumber` | `sequence_number` |
| `LanguageChangedEvent` | `ttsLanguageCode` | `tts_language_code` |
| `LanguageChangedEvent` | `transcriptionLanguageCode` | `transcription_language_code` |
| `LanguageChangedRelayData` | `sessionId` | `session_id` |
| `LanguageChangedRelayData` | `sequenceNumber` | `sequence_number` |
| `LanguageChangedRelayData` | `languageChanged` | `language_changed` |
| `LastTokenReceivedEvent` | `totalTokens` | `total_tokens` |
| `LastTokenReceivedEvent` | `totalWords` | `total_words` |
| `LastTokenReceivedRelayData` | `sessionId` | `session_id` |
| `LastTokenReceivedRelayData` | `sequenceNumber` | `sequence_number` |
| `LastTokenReceivedRelayData` | `lastTokenReceived` | `last_token_received` |
| `LatencyEvent` | `latencyMs` | `latency_ms` |
| `LookupsV1PhoneNumber` | `callerName` | `caller_name` |
| `LookupsV1PhoneNumber` | `countryCode` | `country_code` |
| `LookupsV1PhoneNumber` | `phoneNumber` | `phone_number` |
| `LookupsV1PhoneNumber` | `nationalFormat` | `national_format` |
| `LookupsV1PhoneNumber` | `addOns` | `add_ons` |
| `MessagingV1BrandRegistrations` | `accountSid` | `account_sid` |
| `MessagingV1BrandRegistrations` | `customerProfileBundleSid` | `customer_profile_bundle_sid` |
| `MessagingV1BrandRegistrations` | `a2PProfileBundleSid` | `a2p_profile_bundle_sid` |
| `MessagingV1BrandRegistrations` | `dateCreated` | `date_created` |
| `MessagingV1BrandRegistrations` | `dateUpdated` | `date_updated` |
| `MessagingV1BrandRegistrations` | `brandType` | `brand_type` |
| `MessagingV1BrandRegistrations` | `tcrId` | `tcr_id` |
| `MessagingV1BrandRegistrations` | `failureReason` | `failure_reason` |
| `MessagingV1BrandRegistrations` | `brandScore` | `brand_score` |
| `MessagingV1BrandRegistrations` | `brandFeedback` | `brand_feedback` |
| `MessagingV1BrandRegistrations` | `identityStatus` | `identity_status` |
| `MessagingV1BrandRegistrations` | `russell3000` | `russell_3000` |
| `MessagingV1BrandRegistrations` | `governmentEntity` | `government_entity` |
| `MessagingV1BrandRegistrations` | `taxExemptStatus` | `tax_exempt_status` |
| `MessagingV1BrandRegistrations` | `skipAutomaticSecVet` | `skip_automatic_sec_vet` |
| `MessagingV1BrandRegistrationsBrandRegistrationOtp` | `accountSid` | `account_sid` |
| `MessagingV1BrandRegistrationsBrandRegistrationOtp` | `brandRegistrationSid` | `brand_registration_sid` |
| `MessagingV1BrandRegistrationsBrandVetting` | `accountSid` | `account_sid` |
| `MessagingV1BrandRegistrationsBrandVetting` | `brandSid` | `brand_sid` |
| `MessagingV1BrandRegistrationsBrandVetting` | `brandVettingSid` | `brand_vetting_sid` |
| `MessagingV1BrandRegistrationsBrandVetting` | `dateUpdated` | `date_updated` |
| `MessagingV1BrandRegistrationsBrandVetting` | `dateCreated` | `date_created` |
| `MessagingV1BrandRegistrationsBrandVetting` | `vettingId` | `vetting_id` |
| `MessagingV1BrandRegistrationsBrandVetting` | `vettingClass` | `vetting_class` |
| `MessagingV1BrandRegistrationsBrandVetting` | `vettingStatus` | `vetting_status` |
| `MessagingV1BrandRegistrationsBrandVetting` | `vettingProvider` | `vetting_provider` |
| `MessagingV1DomainCertV4` | `domainSid` | `domain_sid` |
| `MessagingV1DomainCertV4` | `dateUpdated` | `date_updated` |
| `MessagingV1DomainCertV4` | `dateExpires` | `date_expires` |
| `MessagingV1DomainCertV4` | `dateCreated` | `date_created` |
| `MessagingV1DomainCertV4` | `domainName` | `domain_name` |
| `MessagingV1DomainCertV4` | `certificateSid` | `certificate_sid` |
| `MessagingV1DomainCertV4` | `certInValidation` | `cert_in_validation` |
| `MessagingV1DomainConfig` | `domainSid` | `domain_sid` |
| `MessagingV1DomainConfig` | `configSid` | `config_sid` |
| `MessagingV1DomainConfig` | `fallbackUrl` | `fallback_url` |
| `MessagingV1DomainConfig` | `callbackUrl` | `callback_url` |
| `MessagingV1DomainConfig` | `continueOnFailure` | `continue_on_failure` |
| `MessagingV1DomainConfig` | `dateCreated` | `date_created` |
| `MessagingV1DomainConfig` | `dateUpdated` | `date_updated` |
| `MessagingV1DomainConfig` | `disableHttps` | `disable_https` |
| `MessagingV1DomainConfigMessagingService` | `domainSid` | `domain_sid` |
| `MessagingV1DomainConfigMessagingService` | `configSid` | `config_sid` |
| `MessagingV1DomainConfigMessagingService` | `messagingServiceSid` | `messaging_service_sid` |
| `MessagingV1DomainConfigMessagingService` | `fallbackUrl` | `fallback_url` |
| `MessagingV1DomainConfigMessagingService` | `callbackUrl` | `callback_url` |
| `MessagingV1DomainConfigMessagingService` | `continueOnFailure` | `continue_on_failure` |
| `MessagingV1DomainConfigMessagingService` | `dateCreated` | `date_created` |
| `MessagingV1DomainConfigMessagingService` | `dateUpdated` | `date_updated` |
| `MessagingV1DomainDnsValidation` | `domainSid` | `domain_sid` |
| `MessagingV1DomainDnsValidation` | `isValid` | `is_valid` |
| `MessagingV1ExternalCampaign` | `accountSid` | `account_sid` |
| `MessagingV1ExternalCampaign` | `campaignId` | `campaign_id` |
| `MessagingV1ExternalCampaign` | `messagingServiceSid` | `messaging_service_sid` |
| `MessagingV1ExternalCampaign` | `dateCreated` | `date_created` |
| `MessagingV1LinkshorteningMessagingService` | `domainSid` | `domain_sid` |
| `MessagingV1LinkshorteningMessagingService` | `messagingServiceSid` | `messaging_service_sid` |
| `MessagingV1LinkshorteningMessagingServiceDomainAssociation` | `domainSid` | `domain_sid` |
| `MessagingV1LinkshorteningMessagingServiceDomainAssociation` | `messagingServiceSid` | `messaging_service_sid` |
| `MessagingV1RequestManagedCert` | `domainSid` | `domain_sid` |
| `MessagingV1RequestManagedCert` | `dateUpdated` | `date_updated` |
| `MessagingV1RequestManagedCert` | `dateCreated` | `date_created` |
| `MessagingV1RequestManagedCert` | `dateExpires` | `date_expires` |
| `MessagingV1RequestManagedCert` | `domainName` | `domain_name` |
| `MessagingV1RequestManagedCert` | `certificateSid` | `certificate_sid` |
| `MessagingV1Service` | `accountSid` | `account_sid` |
| `MessagingV1Service` | `friendlyName` | `friendly_name` |
| `MessagingV1Service` | `dateCreated` | `date_created` |
| `MessagingV1Service` | `dateUpdated` | `date_updated` |
| `MessagingV1Service` | `inboundRequestUrl` | `inbound_request_url` |
| `MessagingV1Service` | `inboundMethod` | `inbound_method` |
| `MessagingV1Service` | `fallbackUrl` | `fallback_url` |
| `MessagingV1Service` | `fallbackMethod` | `fallback_method` |
| `MessagingV1Service` | `statusCallback` | `status_callback` |
| `MessagingV1Service` | `stickySender` | `sticky_sender` |
| `MessagingV1Service` | `mmsConverter` | `mms_converter` |
| `MessagingV1Service` | `smartEncoding` | `smart_encoding` |
| `MessagingV1Service` | `scanMessageContent` | `scan_message_content` |
| `MessagingV1Service` | `fallbackToLongCode` | `fallback_to_long_code` |
| `MessagingV1Service` | `areaCodeGeomatch` | `area_code_geomatch` |
| `MessagingV1Service` | `synchronousValidation` | `synchronous_validation` |
| `MessagingV1Service` | `validityPeriod` | `validity_period` |
| `MessagingV1Service` | `usAppToPersonRegistered` | `us_app_to_person_registered` |
| `MessagingV1Service` | `useInboundWebhookOnNumber` | `use_inbound_webhook_on_number` |
| `MessagingV1ServiceAddons` | `accountSid` | `account_sid` |
| `MessagingV1ServiceAddons` | `serviceSid` | `service_sid` |
| `MessagingV1ServiceAddons` | `dateCreated` | `date_created` |
| `MessagingV1ServiceAddons` | `dateUpdated` | `date_updated` |
| `MessagingV1ServiceAddons` | `addOnTypeSid` | `add_on_type_sid` |
| `MessagingV1ServiceAddons` | `addOnConfig` | `add_on_config` |
| `MessagingV1ServiceAlphaSender` | `accountSid` | `account_sid` |
| `MessagingV1ServiceAlphaSender` | `serviceSid` | `service_sid` |
| `MessagingV1ServiceAlphaSender` | `dateCreated` | `date_created` |
| `MessagingV1ServiceAlphaSender` | `dateUpdated` | `date_updated` |
| `MessagingV1ServiceAlphaSender` | `alphaSender` | `alpha_sender` |
| `MessagingV1ServiceChannelSender` | `accountSid` | `account_sid` |
| `MessagingV1ServiceChannelSender` | `messagingServiceSid` | `messaging_service_sid` |
| `MessagingV1ServiceChannelSender` | `senderType` | `sender_type` |
| `MessagingV1ServiceChannelSender` | `countryCode` | `country_code` |
| `MessagingV1ServiceChannelSender` | `dateCreated` | `date_created` |
| `MessagingV1ServiceChannelSender` | `dateUpdated` | `date_updated` |
| `MessagingV1ServiceDestinationAlphaSender` | `accountSid` | `account_sid` |
| `MessagingV1ServiceDestinationAlphaSender` | `serviceSid` | `service_sid` |
| `MessagingV1ServiceDestinationAlphaSender` | `dateCreated` | `date_created` |
| `MessagingV1ServiceDestinationAlphaSender` | `dateUpdated` | `date_updated` |
| `MessagingV1ServiceDestinationAlphaSender` | `alphaSender` | `alpha_sender` |
| `MessagingV1ServiceDestinationAlphaSender` | `isoCountryCode` | `iso_country_code` |
| `MessagingV1ServiceGenericSender` | `accountSid` | `account_sid` |
| `MessagingV1ServiceGenericSender` | `serviceSid` | `service_sid` |
| `MessagingV1ServiceGenericSender` | `dateCreated` | `date_created` |
| `MessagingV1ServiceGenericSender` | `dateUpdated` | `date_updated` |
| `MessagingV1ServiceGenericSender` | `senderType` | `sender_type` |
| `MessagingV1ServiceGenericSender` | `countryCode` | `country_code` |
| `MessagingV1ServicePhoneNumber` | `accountSid` | `account_sid` |
| `MessagingV1ServicePhoneNumber` | `serviceSid` | `service_sid` |
| `MessagingV1ServicePhoneNumber` | `dateCreated` | `date_created` |
| `MessagingV1ServicePhoneNumber` | `dateUpdated` | `date_updated` |
| `MessagingV1ServicePhoneNumber` | `phoneNumber` | `phone_number` |
| `MessagingV1ServicePhoneNumber` | `countryCode` | `country_code` |
| `MessagingV1ServiceServiceForNumber` | `numberSid` | `number_sid` |
| `MessagingV1ServiceServiceForNumber` | `friendlyName` | `friendly_name` |
| `MessagingV1ServiceShortCode` | `accountSid` | `account_sid` |
| `MessagingV1ServiceShortCode` | `serviceSid` | `service_sid` |
| `MessagingV1ServiceShortCode` | `dateCreated` | `date_created` |
| `MessagingV1ServiceShortCode` | `dateUpdated` | `date_updated` |
| `MessagingV1ServiceShortCode` | `shortCode` | `short_code` |
| `MessagingV1ServiceShortCode` | `countryCode` | `country_code` |
| `MessagingV1ServiceUsAppToPerson` | `accountSid` | `account_sid` |
| `MessagingV1ServiceUsAppToPerson` | `brandRegistrationSid` | `brand_registration_sid` |
| `MessagingV1ServiceUsAppToPerson` | `messagingServiceSid` | `messaging_service_sid` |
| `MessagingV1ServiceUsAppToPerson` | `messageSamples` | `message_samples` |
| `MessagingV1ServiceUsAppToPerson` | `usAppToPersonUsecase` | `us_app_to_person_usecase` |
| `MessagingV1ServiceUsAppToPerson` | `hasEmbeddedLinks` | `has_embedded_links` |
| `MessagingV1ServiceUsAppToPerson` | `hasEmbeddedPhone` | `has_embedded_phone` |
| `MessagingV1ServiceUsAppToPerson` | `subscriberOptIn` | `subscriber_opt_in` |
| `MessagingV1ServiceUsAppToPerson` | `ageGated` | `age_gated` |
| `MessagingV1ServiceUsAppToPerson` | `directLending` | `direct_lending` |
| `MessagingV1ServiceUsAppToPerson` | `campaignStatus` | `campaign_status` |
| `MessagingV1ServiceUsAppToPerson` | `campaignId` | `campaign_id` |
| `MessagingV1ServiceUsAppToPerson` | `isExternallyRegistered` | `is_externally_registered` |
| `MessagingV1ServiceUsAppToPerson` | `rateLimits` | `rate_limits` |
| `MessagingV1ServiceUsAppToPerson` | `messageFlow` | `message_flow` |
| `MessagingV1ServiceUsAppToPerson` | `optInMessage` | `opt_in_message` |
| `MessagingV1ServiceUsAppToPerson` | `optOutMessage` | `opt_out_message` |
| `MessagingV1ServiceUsAppToPerson` | `helpMessage` | `help_message` |
| `MessagingV1ServiceUsAppToPerson` | `optInKeywords` | `opt_in_keywords` |
| `MessagingV1ServiceUsAppToPerson` | `optOutKeywords` | `opt_out_keywords` |
| `MessagingV1ServiceUsAppToPerson` | `helpKeywords` | `help_keywords` |
| `MessagingV1ServiceUsAppToPerson` | `dateCreated` | `date_created` |
| `MessagingV1ServiceUsAppToPerson` | `dateUpdated` | `date_updated` |
| `MessagingV1ServiceUsAppToPersonUsecase` | `usAppToPersonUsecases` | `us_app_to_person_usecases` |
| `MessagingV1ServiceUsAppToPersonV2` | `accountSid` | `account_sid` |
| `MessagingV1ServiceUsAppToPersonV2` | `brandRegistrationSid` | `brand_registration_sid` |
| `MessagingV1ServiceUsAppToPersonV2` | `messagingServiceSid` | `messaging_service_sid` |
| `MessagingV1ServiceUsAppToPersonV2` | `messageSamples` | `message_samples` |
| `MessagingV1ServiceUsAppToPersonV2` | `usAppToPersonUsecase` | `us_app_to_person_usecase` |
| `MessagingV1ServiceUsAppToPersonV2` | `hasEmbeddedLinks` | `has_embedded_links` |
| `MessagingV1ServiceUsAppToPersonV2` | `hasEmbeddedPhone` | `has_embedded_phone` |
| `MessagingV1ServiceUsAppToPersonV2` | `subscriberOptIn` | `subscriber_opt_in` |
| `MessagingV1ServiceUsAppToPersonV2` | `ageGated` | `age_gated` |
| `MessagingV1ServiceUsAppToPersonV2` | `directLending` | `direct_lending` |
| `MessagingV1ServiceUsAppToPersonV2` | `campaignStatus` | `campaign_status` |
| `MessagingV1ServiceUsAppToPersonV2` | `campaignId` | `campaign_id` |
| `MessagingV1ServiceUsAppToPersonV2` | `isExternallyRegistered` | `is_externally_registered` |
| `MessagingV1ServiceUsAppToPersonV2` | `rateLimits` | `rate_limits` |
| `MessagingV1ServiceUsAppToPersonV2` | `messageFlow` | `message_flow` |
| `MessagingV1ServiceUsAppToPersonV2` | `optInMessage` | `opt_in_message` |
| `MessagingV1ServiceUsAppToPersonV2` | `optOutMessage` | `opt_out_message` |
| `MessagingV1ServiceUsAppToPersonV2` | `helpMessage` | `help_message` |
| `MessagingV1ServiceUsAppToPersonV2` | `optInKeywords` | `opt_in_keywords` |
| `MessagingV1ServiceUsAppToPersonV2` | `optOutKeywords` | `opt_out_keywords` |
| `MessagingV1ServiceUsAppToPersonV2` | `helpKeywords` | `help_keywords` |
| `MessagingV1ServiceUsAppToPersonV2` | `dateCreated` | `date_created` |
| `MessagingV1ServiceUsAppToPersonV2` | `dateUpdated` | `date_updated` |
| `MessagingV1ServiceUsAppToPersonV2` | `privacyPolicyUrl` | `privacy_policy_url` |
| `MessagingV1ServiceUsAppToPersonV2` | `termsAndConditionsUrl` | `terms_and_conditions_url` |
| `MessagingV1TollfreeVerification` | `accountSid` | `account_sid` |
| `MessagingV1TollfreeVerification` | `customerProfileSid` | `customer_profile_sid` |
| `MessagingV1TollfreeVerification` | `trustProductSid` | `trust_product_sid` |
| `MessagingV1TollfreeVerification` | `dateCreated` | `date_created` |
| `MessagingV1TollfreeVerification` | `dateUpdated` | `date_updated` |
| `MessagingV1TollfreeVerification` | `regulatedItemSid` | `regulated_item_sid` |
| `MessagingV1TollfreeVerification` | `businessName` | `business_name` |
| `MessagingV1TollfreeVerification` | `businessStreetAddress` | `business_street_address` |
| `MessagingV1TollfreeVerification` | `businessStreetAddress2` | `business_street_address2` |
| `MessagingV1TollfreeVerification` | `businessCity` | `business_city` |
| `MessagingV1TollfreeVerification` | `businessStateProvinceRegion` | `business_state_province_region` |
| `MessagingV1TollfreeVerification` | `businessPostalCode` | `business_postal_code` |
| `MessagingV1TollfreeVerification` | `businessCountry` | `business_country` |
| `MessagingV1TollfreeVerification` | `businessWebsite` | `business_website` |
| `MessagingV1TollfreeVerification` | `businessContactFirstName` | `business_contact_first_name` |
| `MessagingV1TollfreeVerification` | `businessContactLastName` | `business_contact_last_name` |
| `MessagingV1TollfreeVerification` | `businessContactEmail` | `business_contact_email` |
| `MessagingV1TollfreeVerification` | `businessContactPhone` | `business_contact_phone` |
| `MessagingV1TollfreeVerification` | `notificationEmail` | `notification_email` |
| `MessagingV1TollfreeVerification` | `useCaseCategories` | `use_case_categories` |
| `MessagingV1TollfreeVerification` | `useCaseSummary` | `use_case_summary` |
| `MessagingV1TollfreeVerification` | `productionMessageSample` | `production_message_sample` |
| `MessagingV1TollfreeVerification` | `optInImageUrls` | `opt_in_image_urls` |
| `MessagingV1TollfreeVerification` | `optInType` | `opt_in_type` |
| `MessagingV1TollfreeVerification` | `messageVolume` | `message_volume` |
| `MessagingV1TollfreeVerification` | `additionalInformation` | `additional_information` |
| `MessagingV1TollfreeVerification` | `tollfreePhoneNumberSid` | `tollfree_phone_number_sid` |
| `MessagingV1TollfreeVerification` | `tollfreePhoneNumber` | `tollfree_phone_number` |
| `MessagingV1TollfreeVerification` | `rejectionReason` | `rejection_reason` |
| `MessagingV1TollfreeVerification` | `errorCode` | `error_code` |
| `MessagingV1TollfreeVerification` | `editExpiration` | `edit_expiration` |
| `MessagingV1TollfreeVerification` | `editAllowed` | `edit_allowed` |
| `MessagingV1TollfreeVerification` | `businessRegistrationNumber` | `business_registration_number` |
| `MessagingV1TollfreeVerification` | `businessRegistrationAuthority` | `business_registration_authority` |
| `MessagingV1TollfreeVerification` | `businessRegistrationCountry` | `business_registration_country` |
| `MessagingV1TollfreeVerification` | `businessType` | `business_type` |
| `MessagingV1TollfreeVerification` | `businessRegistrationPhoneNumber` | `business_registration_phone_number` |
| `MessagingV1TollfreeVerification` | `doingBusinessAs` | `doing_business_as` |
| `MessagingV1TollfreeVerification` | `optInConfirmationMessage` | `opt_in_confirmation_message` |
| `MessagingV1TollfreeVerification` | `helpMessageSample` | `help_message_sample` |
| `MessagingV1TollfreeVerification` | `privacyPolicyUrl` | `privacy_policy_url` |
| `MessagingV1TollfreeVerification` | `termsAndConditionsUrl` | `terms_and_conditions_url` |
| `MessagingV1TollfreeVerification` | `ageGatedContent` | `age_gated_content` |
| `MessagingV1TollfreeVerification` | `optInKeywords` | `opt_in_keywords` |
| `MessagingV1TollfreeVerification` | `rejectionReasons` | `rejection_reasons` |
| `MessagingV1TollfreeVerification` | `resourceLinks` | `resource_links` |
| `MessagingV1TollfreeVerification` | `externalReferenceId` | `external_reference_id` |
| `MessagingV1TollfreeVerification` | `vettingId` | `vetting_id` |
| `MessagingV1TollfreeVerification` | `vettingProvider` | `vetting_provider` |
| `MessagingV1TollfreeVerification` | `vettingIdExpiration` | `vetting_id_expiration` |
| `MessagingV2ChannelsSenderConfiguration` | `wabaId` | `waba_id` |
| `MessagingV2ChannelsSenderConfiguration` | `verificationMethod` | `verification_method` |
| `MessagingV2ChannelsSenderConfiguration` | `verificationCode` | `verification_code` |
| `MessagingV2ChannelsSenderConfiguration` | `voiceApplicationSid` | `voice_application_sid` |
| `MessagingV2ChannelsSenderConfiguration` | `accountType` | `account_type` |
| `MessagingV2ChannelsSenderOfflineReasonsItems` | `moreInfo` | `more_info` |
| `MessagingV2ChannelsSenderProfile` | `logoUrl` | `logo_url` |
| `MessagingV2ChannelsSenderProfile` | `bannerUrl` | `banner_url` |
| `MessagingV2ChannelsSenderProfile` | `privacyUrl` | `privacy_url` |
| `MessagingV2ChannelsSenderProfile` | `termsOfServiceUrl` | `terms_of_service_url` |
| `MessagingV2ChannelsSenderProfile` | `accentColor` | `accent_color` |
| `MessagingV2ChannelsSenderProfile` | `useCase` | `use_case` |
| `MessagingV2ChannelsSenderProfile` | `phoneNumbers` | `phone_numbers` |
| `MessagingV2ChannelsSenderProfileGenericResponse` | `logoUrl` | `logo_url` |
| `MessagingV2ChannelsSenderProfileGenericResponse` | `bannerUrl` | `banner_url` |
| `MessagingV2ChannelsSenderProfileGenericResponse` | `privacyUrl` | `privacy_url` |
| `MessagingV2ChannelsSenderProfileGenericResponse` | `termsOfServiceUrl` | `terms_of_service_url` |
| `MessagingV2ChannelsSenderProfileGenericResponse` | `accentColor` | `accent_color` |
| `MessagingV2ChannelsSenderProfileGenericResponse` | `useCase` | `use_case` |
| `MessagingV2ChannelsSenderProfileGenericResponse` | `phoneNumbers` | `phone_numbers` |
| `MessagingV2ChannelsSenderProperties` | `qualityRating` | `quality_rating` |
| `MessagingV2ChannelsSenderProperties` | `messagingLimit` | `messaging_limit` |
| `MessagingV2ChannelsSenderRequestsCreate` | `senderId` | `sender_id` |
| `MessagingV2ChannelsSenderWebhook` | `callbackUrl` | `callback_url` |
| `MessagingV2ChannelsSenderWebhook` | `callbackMethod` | `callback_method` |
| `MessagingV2ChannelsSenderWebhook` | `fallbackUrl` | `fallback_url` |
| `MessagingV2ChannelsSenderWebhook` | `fallbackMethod` | `fallback_method` |
| `MessagingV2ChannelsSenderWebhook` | `statusCallbackUrl` | `status_callback_url` |
| `MessagingV2ChannelsSenderWebhook` | `statusCallbackMethod` | `status_callback_method` |
| `MessagingV2ChannelsSenderResponse` | `senderId` | `sender_id` |
| `MessagingV2ChannelsSenderResponse` | `offlineReasons` | `offline_reasons` |
| `MessagingV2DomainCertV4` | `domainSid` | `domain_sid` |
| `MessagingV2DomainCertV4` | `dateUpdated` | `date_updated` |
| `MessagingV2DomainCertV4` | `dateExpires` | `date_expires` |
| `MessagingV2DomainCertV4` | `dateCreated` | `date_created` |
| `MessagingV2DomainCertV4` | `domainName` | `domain_name` |
| `MessagingV2DomainCertV4` | `certificateSid` | `certificate_sid` |
| `MessagingV2DomainCertV4` | `certInValidation` | `cert_in_validation` |
| `MessagingV2RcsComplianceCountryResponse` | `registrationSid` | `registration_sid` |
| `MessagingV2RcsComplianceCountryUpdatePatchResponse` | `registrationSid` | `registration_sid` |
| `MessagingV2RcsCompliancePatchUpdateResponse` | `registrationSid` | `registration_sid` |
| `MessagingV2RcsComplianceResponse` | `registrationSid` | `registration_sid` |
| `NumbersV1AvailablePhoneNumber` | `did` | `Did` |
| `NumbersV1AvailablePhoneNumber` | `inventoryDidSid` | `InventoryDidSid` |
| `NumbersV1AvailablePhoneNumber` | `friendlyName` | `FriendlyName` |
| `NumbersV1AvailablePhoneNumber` | `type` | `Type` |
| `NumbersV1AvailablePhoneNumber` | `npa` | `Npa` |
| `NumbersV1AvailablePhoneNumber` | `nxx` | `Nxx` |
| `NumbersV1AvailablePhoneNumber` | `locked` | `Locked` |
| `NumbersV1AvailablePhoneNumber` | `lockedUntil` | `LockedUntil` |
| `NumbersV1AvailablePhoneNumber` | `capabilities` | `Capabilities` |
| `NumbersV1AvailablePhoneNumber` | `geography` | `Geography` |
| `NumbersV1AvailablePhoneNumber` | `addressRequirements` | `AddressRequirements` |
| `NumbersV1AvailablePhoneNumber` | `certifications` | `Certifications` |
| `NumbersV1AvailablePhoneNumber` | `billing` | `Billing` |
| `NumbersV1AvailablePhoneNumber` | `dateCreated` | `DateCreated` |
| `NumbersV1AvailablePhoneNumber` | `dateUpdated` | `DateUpdated` |
| `NumbersV1AvailablePhoneNumber` | `beta` | `Beta` |
| `NumbersV1AvailablePhoneNumber` | `voiceEmergencyCapable` | `VoiceEmergencyCapable` |
| `NumbersV1AvailablePhoneNumber` | `flags` | `Flags` |
| `NumbersV1BulkEligibility` | `requestId` | `request_id` |
| `NumbersV1BulkEligibility` | `friendlyName` | `friendly_name` |
| `NumbersV1BulkEligibility` | `dateCreated` | `date_created` |
| `NumbersV1BulkEligibility` | `dateCompleted` | `date_completed` |
| `NumbersV1PortInRequestList` | `portInRequestSid` | `port_in_request_sid` |
| `NumbersV1PortInRequestList` | `portInRequestStatus` | `port_in_request_status` |
| `NumbersV1PortInRequestList` | `statusLastUpdatedTimestamp` | `status_last_updated_timestamp` |
| `NumbersV1PortInRequestList` | `phoneNumbersRequested` | `phone_numbers_requested` |
| `NumbersV1PortInRequestList` | `phoneNumbersPorted` | `phone_numbers_ported` |
| `NumbersV1PortInRequestList` | `suggestedAction` | `suggested_action` |
| `NumbersV1PortInRequestListMeta` | `previousToken` | `previous_token` |
| `NumbersV1PortInRequestListMeta` | `nextToken` | `next_token` |
| `NumbersV1PortingBulkPhoneNumberUpdateDetail` | `portInPhoneNumberSid` | `port_in_phone_number_sid` |
| `NumbersV1PortingBulkPhoneNumberUpdateDetail` | `currentStatus` | `current_status` |
| `NumbersV1PortingBulkPhoneNumberUpdateDetail` | `requestedStatus` | `requested_status` |
| `NumbersV1PortingBulkPhoneNumberUpdateDetail` | `errorMessage` | `error_message` |
| `NumbersV1PortingBulkUpdateStatusRequest` | `newStatus` | `new_status` |
| `NumbersV1PortingBulkUpdateStatusRequest` | `portInPhoneNumberRequests` | `port_in_phone_number_requests` |
| `NumbersV1PortingBulkUpdateStatusResponse` | `successfulUpdates` | `successful_updates` |
| `NumbersV1PortingBulkUpdateStatusResponse` | `failedUpdates` | `failed_updates` |
| `NumbersV1PortingPortIn` | `portInRequestSid` | `port_in_request_sid` |
| `NumbersV1PortingPortIn` | `accountSid` | `account_sid` |
| `NumbersV1PortingPortIn` | `notificationEmails` | `notification_emails` |
| `NumbersV1PortingPortIn` | `targetPortInDate` | `target_port_in_date` |
| `NumbersV1PortingPortIn` | `targetPortInTimeRangeStart` | `target_port_in_time_range_start` |
| `NumbersV1PortingPortIn` | `targetPortInTimeRangeEnd` | `target_port_in_time_range_end` |
| `NumbersV1PortingPortIn` | `portInRequestStatus` | `port_in_request_status` |
| `NumbersV1PortingPortIn` | `orderCancellationReason` | `order_cancellation_reason` |
| `NumbersV1PortingPortIn` | `losingCarrierInformation` | `losing_carrier_information` |
| `NumbersV1PortingPortIn` | `phoneNumbers` | `phone_numbers` |
| `NumbersV1PortingPortIn` | `bundleSid` | `bundle_sid` |
| `NumbersV1PortingPortIn` | `portabilityAdvanceCarrier` | `portability_advance_carrier` |
| `NumbersV1PortingPortIn` | `autoCancelApprovalNumbers` | `auto_cancel_approval_numbers` |
| `NumbersV1PortingPortIn` | `dateCreated` | `date_created` |
| `NumbersV1PortingPortIn` | `supportTicketId` | `support_ticket_id` |
| `NumbersV1PortingPortIn` | `signatureRequestUrl` | `signature_request_url` |
| `NumbersV1PortingPortInPhoneNumber` | `portInRequestSid` | `port_in_request_sid` |
| `NumbersV1PortingPortInPhoneNumber` | `phoneNumberSid` | `phone_number_sid` |
| `NumbersV1PortingPortInPhoneNumber` | `accountSid` | `account_sid` |
| `NumbersV1PortingPortInPhoneNumber` | `phoneNumberType` | `phone_number_type` |
| `NumbersV1PortingPortInPhoneNumber` | `dateCreated` | `date_created` |
| `NumbersV1PortingPortInPhoneNumber` | `missingRequiredFields` | `missing_required_fields` |
| `NumbersV1PortingPortInPhoneNumber` | `lastUpdated` | `last_updated` |
| `NumbersV1PortingPortInPhoneNumber` | `phoneNumber` | `phone_number` |
| `NumbersV1PortingPortInPhoneNumber` | `notPortabilityReason` | `not_portability_reason` |
| `NumbersV1PortingPortInPhoneNumber` | `notPortabilityReasonCode` | `not_portability_reason_code` |
| `NumbersV1PortingPortInPhoneNumber` | `portInPhoneNumberStatus` | `port_in_phone_number_status` |
| `NumbersV1PortingPortInPhoneNumber` | `portOutPin` | `port_out_pin` |
| `NumbersV1PortingPortInPhoneNumber` | `rejectionReason` | `rejection_reason` |
| `NumbersV1PortingPortInPhoneNumber` | `rejectionReasonCode` | `rejection_reason_code` |
| `NumbersV1PortingPortInPhoneNumber` | `portDate` | `port_date` |
| `NumbersV1PortingPortability` | `phoneNumber` | `phone_number` |
| `NumbersV1PortingPortability` | `accountSid` | `account_sid` |
| `NumbersV1PortingPortability` | `pinAndAccountNumberRequired` | `pin_and_account_number_required` |
| `NumbersV1PortingPortability` | `notPortableReason` | `not_portable_reason` |
| `NumbersV1PortingPortability` | `notPortableReasonCode` | `not_portable_reason_code` |
| `NumbersV1PortingPortability` | `numberType` | `number_type` |
| `NumbersV1PortingWebhookConfiguration` | `portInTargetUrl` | `port_in_target_url` |
| `NumbersV1PortingWebhookConfiguration` | `portOutTargetUrl` | `port_out_target_url` |
| `NumbersV1PortingWebhookConfiguration` | `notificationsOf` | `notifications_of` |
| `NumbersV1PortingWebhookConfigurationDelete` | `webhookType` | `webhook_type` |
| `NumbersV1PortingWebhookConfigurationFetch` | `portInTargetUrl` | `port_in_target_url` |
| `NumbersV1PortingWebhookConfigurationFetch` | `portOutTargetUrl` | `port_out_target_url` |
| `NumbersV1PortingWebhookConfigurationFetch` | `notificationsOf` | `notifications_of` |
| `NumbersV1PortingWebhookConfigurationFetch` | `portInTargetDateCreated` | `port_in_target_date_created` |
| `NumbersV1PortingWebhookConfigurationFetch` | `portOutTargetDateCreated` | `port_out_target_date_created` |
| `NumbersV1SigningRequestConfiguration` | `logoSid` | `logo_sid` |
| `NumbersV1SigningRequestConfiguration` | `friendlyName` | `friendly_name` |
| `NumbersV1SigningRequestConfiguration` | `emailSubject` | `email_subject` |
| `NumbersV1SigningRequestConfiguration` | `emailMessage` | `email_message` |
| `NumbersV1SigningRequestConfiguration` | `urlRedirection` | `url_redirection` |
| `NumbersV2Address` | `accountSid` | `account_sid` |
| `NumbersV2Address` | `customerName` | `customer_name` |
| `NumbersV2Address` | `dateCreated` | `date_created` |
| `NumbersV2Address` | `dateUpdated` | `date_updated` |
| `NumbersV2Address` | `emergencyEnabled` | `emergency_enabled` |
| `NumbersV2Address` | `friendlyName` | `friendly_name` |
| `NumbersV2Address` | `isoCountry` | `iso_country` |
| `NumbersV2Address` | `postalCode` | `postal_code` |
| `NumbersV2Address` | `streetSecondary` | `street_secondary` |
| `NumbersV2Address` | `subresourceUris` | `subresource_uris` |
| `NumbersV2AddressCreate` | `friendlyName` | `friendly_name` |
| `NumbersV2AddressCreate` | `customerName` | `customer_name` |
| `NumbersV2AddressCreate` | `streetSecondary` | `street_secondary` |
| `NumbersV2AddressCreate` | `postalCode` | `postal_code` |
| `NumbersV2AddressCreate` | `isoCountry` | `iso_country` |
| `NumbersV2AddressCreate` | `forceValidation` | `force_validation` |
| `NumbersV2AddressCreate` | `bypassValidation` | `bypass_validation` |
| `NumbersV2AddressCreate` | `autoCorrectAddress` | `auto_correct_address` |
| `NumbersV2AddressCreate` | `emergencyEnabled` | `emergency_enabled` |
| `NumbersV2AuthorizationDocument` | `addressSid` | `address_sid` |
| `NumbersV2AuthorizationDocument` | `ccEmails` | `cc_emails` |
| `NumbersV2AuthorizationDocument` | `dateCreated` | `date_created` |
| `NumbersV2AuthorizationDocument` | `dateUpdated` | `date_updated` |
| `NumbersV2AuthorizationDocumentDependentHostedNumberOrder` | `bulkHostingRequestSid` | `bulk_hosting_request_sid` |
| `NumbersV2AuthorizationDocumentDependentHostedNumberOrder` | `nextStep` | `next_step` |
| `NumbersV2AuthorizationDocumentDependentHostedNumberOrder` | `accountSid` | `account_sid` |
| `NumbersV2AuthorizationDocumentDependentHostedNumberOrder` | `incomingPhoneNumberSid` | `incoming_phone_number_sid` |
| `NumbersV2AuthorizationDocumentDependentHostedNumberOrder` | `addressSid` | `address_sid` |
| `NumbersV2AuthorizationDocumentDependentHostedNumberOrder` | `signingDocumentSid` | `signing_document_sid` |
| `NumbersV2AuthorizationDocumentDependentHostedNumberOrder` | `phoneNumber` | `phone_number` |
| `NumbersV2AuthorizationDocumentDependentHostedNumberOrder` | `friendlyName` | `friendly_name` |
| `NumbersV2AuthorizationDocumentDependentHostedNumberOrder` | `failureReason` | `failure_reason` |
| `NumbersV2AuthorizationDocumentDependentHostedNumberOrder` | `dateCreated` | `date_created` |
| `NumbersV2AuthorizationDocumentDependentHostedNumberOrder` | `dateUpdated` | `date_updated` |
| `NumbersV2AuthorizationDocumentDependentHostedNumberOrder` | `ccEmails` | `cc_emails` |
| `NumbersV2AuthorizationDocumentDependentHostedNumberOrder` | `contactTitle` | `contact_title` |
| `NumbersV2AuthorizationDocumentDependentHostedNumberOrder` | `contactPhoneNumber` | `contact_phone_number` |
| `NumbersV2BulkHostedNumberOrder` | `bulkHostingSid` | `bulk_hosting_sid` |
| `NumbersV2BulkHostedNumberOrder` | `requestStatus` | `request_status` |
| `NumbersV2BulkHostedNumberOrder` | `friendlyName` | `friendly_name` |
| `NumbersV2BulkHostedNumberOrder` | `notificationEmail` | `notification_email` |
| `NumbersV2BulkHostedNumberOrder` | `dateCreated` | `date_created` |
| `NumbersV2BulkHostedNumberOrder` | `dateCompleted` | `date_completed` |
| `NumbersV2BulkHostedNumberOrder` | `totalCount` | `total_count` |
| `NumbersV2BundleClone` | `bundleSid` | `bundle_sid` |
| `NumbersV2BundleClone` | `accountSid` | `account_sid` |
| `NumbersV2BundleClone` | `regulationSid` | `regulation_sid` |
| `NumbersV2BundleClone` | `friendlyName` | `friendly_name` |
| `NumbersV2BundleClone` | `validUntil` | `valid_until` |
| `NumbersV2BundleClone` | `statusCallback` | `status_callback` |
| `NumbersV2BundleClone` | `dateCreated` | `date_created` |
| `NumbersV2BundleClone` | `dateUpdated` | `date_updated` |
| `NumbersV2HostedNumberOrder` | `accountSid` | `account_sid` |
| `NumbersV2HostedNumberOrder` | `incomingPhoneNumberSid` | `incoming_phone_number_sid` |
| `NumbersV2HostedNumberOrder` | `addressSid` | `address_sid` |
| `NumbersV2HostedNumberOrder` | `signingDocumentSid` | `signing_document_sid` |
| `NumbersV2HostedNumberOrder` | `phoneNumber` | `phone_number` |
| `NumbersV2HostedNumberOrder` | `friendlyName` | `friendly_name` |
| `NumbersV2HostedNumberOrder` | `failureReason` | `failure_reason` |
| `NumbersV2HostedNumberOrder` | `dateCreated` | `date_created` |
| `NumbersV2HostedNumberOrder` | `dateUpdated` | `date_updated` |
| `NumbersV2HostedNumberOrder` | `ccEmails` | `cc_emails` |
| `NumbersV2HostedNumberOrder` | `contactTitle` | `contact_title` |
| `NumbersV2HostedNumberOrder` | `contactPhoneNumber` | `contact_phone_number` |
| `NumbersV2HostedNumberOrder` | `bulkHostingRequestSid` | `bulk_hosting_request_sid` |
| `NumbersV2HostedNumberOrder` | `nextStep` | `next_step` |
| `NumbersV2HostedNumberOrder` | `verificationAttempts` | `verification_attempts` |
| `NumbersV2HostedNumberOrder` | `verificationCallSids` | `verification_call_sids` |
| `NumbersV2HostedNumberOrder` | `verificationCallDelay` | `verification_call_delay` |
| `NumbersV2HostedNumberOrder` | `verificationCallExtension` | `verification_call_extension` |
| `NumbersV2HostedNumberOrder` | `verificationCode` | `verification_code` |
| `NumbersV2HostedNumberOrder` | `verificationType` | `verification_type` |
| `NumbersV2RegulatoryComplianceBundle` | `accountSid` | `account_sid` |
| `NumbersV2RegulatoryComplianceBundle` | `regulationSid` | `regulation_sid` |
| `NumbersV2RegulatoryComplianceBundle` | `friendlyName` | `friendly_name` |
| `NumbersV2RegulatoryComplianceBundle` | `validUntil` | `valid_until` |
| `NumbersV2RegulatoryComplianceBundle` | `statusCallback` | `status_callback` |
| `NumbersV2RegulatoryComplianceBundle` | `dateCreated` | `date_created` |
| `NumbersV2RegulatoryComplianceBundle` | `dateUpdated` | `date_updated` |
| `NumbersV2RegulatoryComplianceBundleBundleCopy` | `accountSid` | `account_sid` |
| `NumbersV2RegulatoryComplianceBundleBundleCopy` | `regulationSid` | `regulation_sid` |
| `NumbersV2RegulatoryComplianceBundleBundleCopy` | `friendlyName` | `friendly_name` |
| `NumbersV2RegulatoryComplianceBundleBundleCopy` | `validUntil` | `valid_until` |
| `NumbersV2RegulatoryComplianceBundleBundleCopy` | `statusCallback` | `status_callback` |
| `NumbersV2RegulatoryComplianceBundleBundleCopy` | `dateCreated` | `date_created` |
| `NumbersV2RegulatoryComplianceBundleBundleCopy` | `dateUpdated` | `date_updated` |
| `NumbersV2RegulatoryComplianceBundleEvaluation` | `accountSid` | `account_sid` |
| `NumbersV2RegulatoryComplianceBundleEvaluation` | `regulationSid` | `regulation_sid` |
| `NumbersV2RegulatoryComplianceBundleEvaluation` | `bundleSid` | `bundle_sid` |
| `NumbersV2RegulatoryComplianceBundleEvaluation` | `dateCreated` | `date_created` |
| `NumbersV2RegulatoryComplianceBundleItemAssignment` | `bundleSid` | `bundle_sid` |
| `NumbersV2RegulatoryComplianceBundleItemAssignment` | `accountSid` | `account_sid` |
| `NumbersV2RegulatoryComplianceBundleItemAssignment` | `objectSid` | `object_sid` |
| `NumbersV2RegulatoryComplianceBundleItemAssignment` | `dateCreated` | `date_created` |
| `NumbersV2RegulatoryComplianceBundleReplaceItems` | `accountSid` | `account_sid` |
| `NumbersV2RegulatoryComplianceBundleReplaceItems` | `regulationSid` | `regulation_sid` |
| `NumbersV2RegulatoryComplianceBundleReplaceItems` | `friendlyName` | `friendly_name` |
| `NumbersV2RegulatoryComplianceBundleReplaceItems` | `validUntil` | `valid_until` |
| `NumbersV2RegulatoryComplianceBundleReplaceItems` | `statusCallback` | `status_callback` |
| `NumbersV2RegulatoryComplianceBundleReplaceItems` | `dateCreated` | `date_created` |
| `NumbersV2RegulatoryComplianceBundleReplaceItems` | `dateUpdated` | `date_updated` |
| `NumbersV2RegulatoryComplianceEndUser` | `accountSid` | `account_sid` |
| `NumbersV2RegulatoryComplianceEndUser` | `friendlyName` | `friendly_name` |
| `NumbersV2RegulatoryComplianceEndUser` | `dateCreated` | `date_created` |
| `NumbersV2RegulatoryComplianceEndUser` | `dateUpdated` | `date_updated` |
| `NumbersV2RegulatoryComplianceEndUserType` | `friendlyName` | `friendly_name` |
| `NumbersV2RegulatoryComplianceEndUserType` | `machineName` | `machine_name` |
| `NumbersV2RegulatoryComplianceRegulation` | `friendlyName` | `friendly_name` |
| `NumbersV2RegulatoryComplianceRegulation` | `isoCountry` | `iso_country` |
| `NumbersV2RegulatoryComplianceRegulation` | `numberType` | `number_type` |
| `NumbersV2RegulatoryComplianceRegulation` | `endUserType` | `end_user_type` |
| `NumbersV2RegulatoryComplianceSupportingDocument` | `accountSid` | `account_sid` |
| `NumbersV2RegulatoryComplianceSupportingDocument` | `friendlyName` | `friendly_name` |
| `NumbersV2RegulatoryComplianceSupportingDocument` | `mimeType` | `mime_type` |
| `NumbersV2RegulatoryComplianceSupportingDocument` | `failureReason` | `failure_reason` |
| `NumbersV2RegulatoryComplianceSupportingDocument` | `dateCreated` | `date_created` |
| `NumbersV2RegulatoryComplianceSupportingDocument` | `dateUpdated` | `date_updated` |
| `NumbersV2RegulatoryComplianceSupportingDocumentType` | `friendlyName` | `friendly_name` |
| `NumbersV2RegulatoryComplianceSupportingDocumentType` | `machineName` | `machine_name` |
| `ProxyV1Service` | `uniqueName` | `unique_name` |
| `ProxyV1Service` | `accountSid` | `account_sid` |
| `ProxyV1Service` | `chatInstanceSid` | `chat_instance_sid` |
| `ProxyV1Service` | `callbackUrl` | `callback_url` |
| `ProxyV1Service` | `defaultTtl` | `default_ttl` |
| `ProxyV1Service` | `numberSelectionBehavior` | `number_selection_behavior` |
| `ProxyV1Service` | `geoMatchLevel` | `geo_match_level` |
| `ProxyV1Service` | `interceptCallbackUrl` | `intercept_callback_url` |
| `ProxyV1Service` | `outOfSessionCallbackUrl` | `out_of_session_callback_url` |
| `ProxyV1Service` | `dateCreated` | `date_created` |
| `ProxyV1Service` | `dateUpdated` | `date_updated` |
| `ProxyV1ServicePhoneNumber` | `accountSid` | `account_sid` |
| `ProxyV1ServicePhoneNumber` | `serviceSid` | `service_sid` |
| `ProxyV1ServicePhoneNumber` | `dateCreated` | `date_created` |
| `ProxyV1ServicePhoneNumber` | `dateUpdated` | `date_updated` |
| `ProxyV1ServicePhoneNumber` | `phoneNumber` | `phone_number` |
| `ProxyV1ServicePhoneNumber` | `friendlyName` | `friendly_name` |
| `ProxyV1ServicePhoneNumber` | `isoCountry` | `iso_country` |
| `ProxyV1ServicePhoneNumber` | `isReserved` | `is_reserved` |
| `ProxyV1ServicePhoneNumber` | `inUse` | `in_use` |
| `ProxyV1ServiceSession` | `serviceSid` | `service_sid` |
| `ProxyV1ServiceSession` | `accountSid` | `account_sid` |
| `ProxyV1ServiceSession` | `dateStarted` | `date_started` |
| `ProxyV1ServiceSession` | `dateEnded` | `date_ended` |
| `ProxyV1ServiceSession` | `dateLastInteraction` | `date_last_interaction` |
| `ProxyV1ServiceSession` | `dateExpiry` | `date_expiry` |
| `ProxyV1ServiceSession` | `uniqueName` | `unique_name` |
| `ProxyV1ServiceSession` | `closedReason` | `closed_reason` |
| `ProxyV1ServiceSession` | `dateCreated` | `date_created` |
| `ProxyV1ServiceSession` | `dateUpdated` | `date_updated` |
| `ProxyV1ServiceSessionInteraction` | `sessionSid` | `session_sid` |
| `ProxyV1ServiceSessionInteraction` | `serviceSid` | `service_sid` |
| `ProxyV1ServiceSessionInteraction` | `accountSid` | `account_sid` |
| `ProxyV1ServiceSessionInteraction` | `inboundParticipantSid` | `inbound_participant_sid` |
| `ProxyV1ServiceSessionInteraction` | `inboundResourceSid` | `inbound_resource_sid` |
| `ProxyV1ServiceSessionInteraction` | `inboundResourceStatus` | `inbound_resource_status` |
| `ProxyV1ServiceSessionInteraction` | `inboundResourceType` | `inbound_resource_type` |
| `ProxyV1ServiceSessionInteraction` | `inboundResourceUrl` | `inbound_resource_url` |
| `ProxyV1ServiceSessionInteraction` | `outboundParticipantSid` | `outbound_participant_sid` |
| `ProxyV1ServiceSessionInteraction` | `outboundResourceSid` | `outbound_resource_sid` |
| `ProxyV1ServiceSessionInteraction` | `outboundResourceStatus` | `outbound_resource_status` |
| `ProxyV1ServiceSessionInteraction` | `outboundResourceType` | `outbound_resource_type` |
| `ProxyV1ServiceSessionInteraction` | `outboundResourceUrl` | `outbound_resource_url` |
| `ProxyV1ServiceSessionInteraction` | `dateCreated` | `date_created` |
| `ProxyV1ServiceSessionInteraction` | `dateUpdated` | `date_updated` |
| `ProxyV1ServiceSessionParticipant` | `sessionSid` | `session_sid` |
| `ProxyV1ServiceSessionParticipant` | `serviceSid` | `service_sid` |
| `ProxyV1ServiceSessionParticipant` | `accountSid` | `account_sid` |
| `ProxyV1ServiceSessionParticipant` | `friendlyName` | `friendly_name` |
| `ProxyV1ServiceSessionParticipant` | `proxyIdentifier` | `proxy_identifier` |
| `ProxyV1ServiceSessionParticipant` | `proxyIdentifierSid` | `proxy_identifier_sid` |
| `ProxyV1ServiceSessionParticipant` | `dateDeleted` | `date_deleted` |
| `ProxyV1ServiceSessionParticipant` | `dateCreated` | `date_created` |
| `ProxyV1ServiceSessionParticipant` | `dateUpdated` | `date_updated` |
| `ProxyV1ServiceSessionParticipantMessageInteraction` | `sessionSid` | `session_sid` |
| `ProxyV1ServiceSessionParticipantMessageInteraction` | `serviceSid` | `service_sid` |
| `ProxyV1ServiceSessionParticipantMessageInteraction` | `accountSid` | `account_sid` |
| `ProxyV1ServiceSessionParticipantMessageInteraction` | `participantSid` | `participant_sid` |
| `ProxyV1ServiceSessionParticipantMessageInteraction` | `inboundParticipantSid` | `inbound_participant_sid` |
| `ProxyV1ServiceSessionParticipantMessageInteraction` | `inboundResourceSid` | `inbound_resource_sid` |
| `ProxyV1ServiceSessionParticipantMessageInteraction` | `inboundResourceStatus` | `inbound_resource_status` |
| `ProxyV1ServiceSessionParticipantMessageInteraction` | `inboundResourceType` | `inbound_resource_type` |
| `ProxyV1ServiceSessionParticipantMessageInteraction` | `inboundResourceUrl` | `inbound_resource_url` |
| `ProxyV1ServiceSessionParticipantMessageInteraction` | `outboundParticipantSid` | `outbound_participant_sid` |
| `ProxyV1ServiceSessionParticipantMessageInteraction` | `outboundResourceSid` | `outbound_resource_sid` |
| `ProxyV1ServiceSessionParticipantMessageInteraction` | `outboundResourceStatus` | `outbound_resource_status` |
| `ProxyV1ServiceSessionParticipantMessageInteraction` | `outboundResourceType` | `outbound_resource_type` |
| `ProxyV1ServiceSessionParticipantMessageInteraction` | `outboundResourceUrl` | `outbound_resource_url` |
| `ProxyV1ServiceSessionParticipantMessageInteraction` | `dateCreated` | `date_created` |
| `ProxyV1ServiceSessionParticipantMessageInteraction` | `dateUpdated` | `date_updated` |
| `RecordingAddOnResultPayloadData` | `redirectTo` | `redirect_to` |
| `ReportMetadata` | `startDatetime` | `start_datetime` |
| `ReportMetadata` | `endDatetime` | `end_datetime` |
| `ServiceConversationMessageReceipt` | `accountSid` | `account_sid` |
| `ServiceConversationMessageReceipt` | `chatServiceSid` | `chat_service_sid` |
| `ServiceConversationMessageReceipt` | `conversationSid` | `conversation_sid` |
| `ServiceConversationMessageReceipt` | `messageSid` | `message_sid` |
| `ServiceConversationMessageReceipt` | `channelMessageSid` | `channel_message_sid` |
| `ServiceConversationMessageReceipt` | `participantSid` | `participant_sid` |
| `ServiceConversationMessageReceipt` | `errorCode` | `error_code` |
| `ServiceConversationMessageReceipt` | `dateCreated` | `date_created` |
| `ServiceConversationMessageReceipt` | `dateUpdated` | `date_updated` |
| `SipAuthCallsIpAccessControlListMapping` | `accountSid` | `account_sid` |
| `SipAuthCallsIpAccessControlListMapping` | `dateCreated` | `date_created` |
| `SipAuthCallsIpAccessControlListMapping` | `dateUpdated` | `date_updated` |
| `SipAuthCallsIpAccessControlListMapping` | `friendlyName` | `friendly_name` |
| `SipAuthRegistrationsCredentialListMapping` | `accountSid` | `account_sid` |
| `SipAuthRegistrationsCredentialListMapping` | `dateCreated` | `date_created` |
| `SipAuthRegistrationsCredentialListMapping` | `dateUpdated` | `date_updated` |
| `SipAuthRegistrationsCredentialListMapping` | `friendlyName` | `friendly_name` |
| `StirShaken` | `callCount` | `call_count` |
| `StirShaken` | `answerRate` | `answer_rate` |
| `SttLatencyRelayData` | `sessionId` | `session_id` |
| `SttLatencyRelayData` | `sequenceNumber` | `sequence_number` |
| `SttLatencyRelayData` | `sttLatency` | `stt_latency` |
| `StudioV1Flow` | `accountSid` | `account_sid` |
| `StudioV1Flow` | `friendlyName` | `friendly_name` |
| `StudioV1Flow` | `dateCreated` | `date_created` |
| `StudioV1Flow` | `dateUpdated` | `date_updated` |
| `StudioV1FlowEngagement` | `accountSid` | `account_sid` |
| `StudioV1FlowEngagement` | `flowSid` | `flow_sid` |
| `StudioV1FlowEngagement` | `contactSid` | `contact_sid` |
| `StudioV1FlowEngagement` | `contactChannelAddress` | `contact_channel_address` |
| `StudioV1FlowEngagement` | `dateCreated` | `date_created` |
| `StudioV1FlowEngagement` | `dateUpdated` | `date_updated` |
| `StudioV1FlowEngagementEngagementContext` | `accountSid` | `account_sid` |
| `StudioV1FlowEngagementEngagementContext` | `engagementSid` | `engagement_sid` |
| `StudioV1FlowEngagementEngagementContext` | `flowSid` | `flow_sid` |
| `StudioV1FlowEngagementStep` | `accountSid` | `account_sid` |
| `StudioV1FlowEngagementStep` | `flowSid` | `flow_sid` |
| `StudioV1FlowEngagementStep` | `engagementSid` | `engagement_sid` |
| `StudioV1FlowEngagementStep` | `parentStepSid` | `parent_step_sid` |
| `StudioV1FlowEngagementStep` | `transitionedFrom` | `transitioned_from` |
| `StudioV1FlowEngagementStep` | `transitionedTo` | `transitioned_to` |
| `StudioV1FlowEngagementStep` | `dateCreated` | `date_created` |
| `StudioV1FlowEngagementStep` | `dateUpdated` | `date_updated` |
| `StudioV1FlowEngagementStepStepContext` | `accountSid` | `account_sid` |
| `StudioV1FlowEngagementStepStepContext` | `engagementSid` | `engagement_sid` |
| `StudioV1FlowEngagementStepStepContext` | `flowSid` | `flow_sid` |
| `StudioV1FlowEngagementStepStepContext` | `stepSid` | `step_sid` |
| `StudioV1FlowExecution` | `accountSid` | `account_sid` |
| `StudioV1FlowExecution` | `flowSid` | `flow_sid` |
| `StudioV1FlowExecution` | `contactSid` | `contact_sid` |
| `StudioV1FlowExecution` | `contactChannelAddress` | `contact_channel_address` |
| `StudioV1FlowExecution` | `dateCreated` | `date_created` |
| `StudioV1FlowExecution` | `dateUpdated` | `date_updated` |
| `StudioV1FlowExecutionExecutionContext` | `accountSid` | `account_sid` |
| `StudioV1FlowExecutionExecutionContext` | `flowSid` | `flow_sid` |
| `StudioV1FlowExecutionExecutionContext` | `executionSid` | `execution_sid` |
| `StudioV1FlowExecutionExecutionStep` | `accountSid` | `account_sid` |
| `StudioV1FlowExecutionExecutionStep` | `flowSid` | `flow_sid` |
| `StudioV1FlowExecutionExecutionStep` | `executionSid` | `execution_sid` |
| `StudioV1FlowExecutionExecutionStep` | `parentStepSid` | `parent_step_sid` |
| `StudioV1FlowExecutionExecutionStep` | `transitionedFrom` | `transitioned_from` |
| `StudioV1FlowExecutionExecutionStep` | `transitionedTo` | `transitioned_to` |
| `StudioV1FlowExecutionExecutionStep` | `dateCreated` | `date_created` |
| `StudioV1FlowExecutionExecutionStep` | `dateUpdated` | `date_updated` |
| `StudioV1FlowExecutionExecutionStepExecutionStepContext` | `accountSid` | `account_sid` |
| `StudioV1FlowExecutionExecutionStepExecutionStepContext` | `executionSid` | `execution_sid` |
| `StudioV1FlowExecutionExecutionStepExecutionStepContext` | `flowSid` | `flow_sid` |
| `StudioV1FlowExecutionExecutionStepExecutionStepContext` | `stepSid` | `step_sid` |
| `StudioV2Flow` | `accountSid` | `account_sid` |
| `StudioV2Flow` | `authorSid` | `author_sid` |
| `StudioV2Flow` | `friendlyName` | `friendly_name` |
| `StudioV2Flow` | `commitMessage` | `commit_message` |
| `StudioV2Flow` | `dateCreated` | `date_created` |
| `StudioV2Flow` | `dateUpdated` | `date_updated` |
| `StudioV2Flow` | `webhookUrl` | `webhook_url` |
| `StudioV2FlowExecution` | `accountSid` | `account_sid` |
| `StudioV2FlowExecution` | `flowSid` | `flow_sid` |
| `StudioV2FlowExecution` | `contactChannelAddress` | `contact_channel_address` |
| `StudioV2FlowExecution` | `contactSid` | `contact_sid` |
| `StudioV2FlowExecution` | `flowVersion` | `flow_version` |
| `StudioV2FlowExecution` | `dateCreated` | `date_created` |
| `StudioV2FlowExecution` | `dateUpdated` | `date_updated` |
| `StudioV2FlowExecution` | `initiatedBy` | `initiated_by` |
| `StudioV2FlowFlowRevision` | `accountSid` | `account_sid` |
| `StudioV2FlowFlowRevision` | `authorSid` | `author_sid` |
| `StudioV2FlowFlowRevision` | `friendlyName` | `friendly_name` |
| `StudioV2FlowFlowRevision` | `commitMessage` | `commit_message` |
| `StudioV2FlowFlowRevision` | `dateCreated` | `date_created` |
| `StudioV2FlowFlowRevision` | `dateUpdated` | `date_updated` |
| `StudioV2FlowTestUser` | `testUsers` | `test_users` |
| `SyncV1Service` | `uniqueName` | `unique_name` |
| `SyncV1Service` | `accountSid` | `account_sid` |
| `SyncV1Service` | `friendlyName` | `friendly_name` |
| `SyncV1Service` | `dateCreated` | `date_created` |
| `SyncV1Service` | `dateUpdated` | `date_updated` |
| `SyncV1Service` | `webhookUrl` | `webhook_url` |
| `SyncV1Service` | `webhooksFromRestEnabled` | `webhooks_from_rest_enabled` |
| `SyncV1Service` | `reachabilityWebhooksEnabled` | `reachability_webhooks_enabled` |
| `SyncV1Service` | `aclEnabled` | `acl_enabled` |
| `SyncV1Service` | `reachabilityDebouncingEnabled` | `reachability_debouncing_enabled` |
| `SyncV1Service` | `reachabilityDebouncingWindow` | `reachability_debouncing_window` |
| `SyncV1ServiceDocument` | `uniqueName` | `unique_name` |
| `SyncV1ServiceDocument` | `accountSid` | `account_sid` |
| `SyncV1ServiceDocument` | `serviceSid` | `service_sid` |
| `SyncV1ServiceDocument` | `dateExpires` | `date_expires` |
| `SyncV1ServiceDocument` | `dateCreated` | `date_created` |
| `SyncV1ServiceDocument` | `dateUpdated` | `date_updated` |
| `SyncV1ServiceDocument` | `createdBy` | `created_by` |
| `SyncV1ServiceDocumentDocumentPermission` | `accountSid` | `account_sid` |
| `SyncV1ServiceDocumentDocumentPermission` | `serviceSid` | `service_sid` |
| `SyncV1ServiceDocumentDocumentPermission` | `documentSid` | `document_sid` |
| `SyncV1ServiceSyncList` | `uniqueName` | `unique_name` |
| `SyncV1ServiceSyncList` | `accountSid` | `account_sid` |
| `SyncV1ServiceSyncList` | `serviceSid` | `service_sid` |
| `SyncV1ServiceSyncList` | `dateExpires` | `date_expires` |
| `SyncV1ServiceSyncList` | `dateCreated` | `date_created` |
| `SyncV1ServiceSyncList` | `dateUpdated` | `date_updated` |
| `SyncV1ServiceSyncList` | `createdBy` | `created_by` |
| `SyncV1ServiceSyncListSyncListItem` | `accountSid` | `account_sid` |
| `SyncV1ServiceSyncListSyncListItem` | `serviceSid` | `service_sid` |
| `SyncV1ServiceSyncListSyncListItem` | `listSid` | `list_sid` |
| `SyncV1ServiceSyncListSyncListItem` | `dateExpires` | `date_expires` |
| `SyncV1ServiceSyncListSyncListItem` | `dateCreated` | `date_created` |
| `SyncV1ServiceSyncListSyncListItem` | `dateUpdated` | `date_updated` |
| `SyncV1ServiceSyncListSyncListItem` | `createdBy` | `created_by` |
| `SyncV1ServiceSyncListSyncListPermission` | `accountSid` | `account_sid` |
| `SyncV1ServiceSyncListSyncListPermission` | `serviceSid` | `service_sid` |
| `SyncV1ServiceSyncListSyncListPermission` | `listSid` | `list_sid` |
| `SyncV1ServiceSyncMap` | `uniqueName` | `unique_name` |
| `SyncV1ServiceSyncMap` | `accountSid` | `account_sid` |
| `SyncV1ServiceSyncMap` | `serviceSid` | `service_sid` |
| `SyncV1ServiceSyncMap` | `dateExpires` | `date_expires` |
| `SyncV1ServiceSyncMap` | `dateCreated` | `date_created` |
| `SyncV1ServiceSyncMap` | `dateUpdated` | `date_updated` |
| `SyncV1ServiceSyncMap` | `createdBy` | `created_by` |
| `SyncV1ServiceSyncMapSyncMapItem` | `accountSid` | `account_sid` |
| `SyncV1ServiceSyncMapSyncMapItem` | `serviceSid` | `service_sid` |
| `SyncV1ServiceSyncMapSyncMapItem` | `mapSid` | `map_sid` |
| `SyncV1ServiceSyncMapSyncMapItem` | `dateExpires` | `date_expires` |
| `SyncV1ServiceSyncMapSyncMapItem` | `dateCreated` | `date_created` |
| `SyncV1ServiceSyncMapSyncMapItem` | `dateUpdated` | `date_updated` |
| `SyncV1ServiceSyncMapSyncMapItem` | `createdBy` | `created_by` |
| `SyncV1ServiceSyncMapSyncMapPermission` | `accountSid` | `account_sid` |
| `SyncV1ServiceSyncMapSyncMapPermission` | `serviceSid` | `service_sid` |
| `SyncV1ServiceSyncMapSyncMapPermission` | `mapSid` | `map_sid` |
| `SyncV1ServiceSyncStream` | `uniqueName` | `unique_name` |
| `SyncV1ServiceSyncStream` | `accountSid` | `account_sid` |
| `SyncV1ServiceSyncStream` | `serviceSid` | `service_sid` |
| `SyncV1ServiceSyncStream` | `dateExpires` | `date_expires` |
| `SyncV1ServiceSyncStream` | `dateCreated` | `date_created` |
| `SyncV1ServiceSyncStream` | `dateUpdated` | `date_updated` |
| `SyncV1ServiceSyncStream` | `createdBy` | `created_by` |
| `TaskrouterV1Workspace` | `accountSid` | `account_sid` |
| `TaskrouterV1Workspace` | `dateCreated` | `date_created` |
| `TaskrouterV1Workspace` | `dateUpdated` | `date_updated` |
| `TaskrouterV1Workspace` | `defaultActivityName` | `default_activity_name` |
| `TaskrouterV1Workspace` | `defaultActivitySid` | `default_activity_sid` |
| `TaskrouterV1Workspace` | `eventCallbackUrl` | `event_callback_url` |
| `TaskrouterV1Workspace` | `eventsFilter` | `events_filter` |
| `TaskrouterV1Workspace` | `friendlyName` | `friendly_name` |
| `TaskrouterV1Workspace` | `multiTaskEnabled` | `multi_task_enabled` |
| `TaskrouterV1Workspace` | `timeoutActivityName` | `timeout_activity_name` |
| `TaskrouterV1Workspace` | `timeoutActivitySid` | `timeout_activity_sid` |
| `TaskrouterV1Workspace` | `prioritizeQueueOrder` | `prioritize_queue_order` |
| `TaskrouterV1WorkspaceActivity` | `accountSid` | `account_sid` |
| `TaskrouterV1WorkspaceActivity` | `dateCreated` | `date_created` |
| `TaskrouterV1WorkspaceActivity` | `dateUpdated` | `date_updated` |
| `TaskrouterV1WorkspaceActivity` | `friendlyName` | `friendly_name` |
| `TaskrouterV1WorkspaceActivity` | `workspaceSid` | `workspace_sid` |
| `TaskrouterV1WorkspaceEvent` | `accountSid` | `account_sid` |
| `TaskrouterV1WorkspaceEvent` | `actorSid` | `actor_sid` |
| `TaskrouterV1WorkspaceEvent` | `actorType` | `actor_type` |
| `TaskrouterV1WorkspaceEvent` | `actorUrl` | `actor_url` |
| `TaskrouterV1WorkspaceEvent` | `eventData` | `event_data` |
| `TaskrouterV1WorkspaceEvent` | `eventDate` | `event_date` |
| `TaskrouterV1WorkspaceEvent` | `eventDateMs` | `event_date_ms` |
| `TaskrouterV1WorkspaceEvent` | `eventType` | `event_type` |
| `TaskrouterV1WorkspaceEvent` | `resourceSid` | `resource_sid` |
| `TaskrouterV1WorkspaceEvent` | `resourceType` | `resource_type` |
| `TaskrouterV1WorkspaceEvent` | `resourceUrl` | `resource_url` |
| `TaskrouterV1WorkspaceEvent` | `sourceIpAddress` | `source_ip_address` |
| `TaskrouterV1WorkspaceEvent` | `workspaceSid` | `workspace_sid` |
| `TaskrouterV1WorkspaceTask` | `accountSid` | `account_sid` |
| `TaskrouterV1WorkspaceTask` | `assignmentStatus` | `assignment_status` |
| `TaskrouterV1WorkspaceTask` | `dateCreated` | `date_created` |
| `TaskrouterV1WorkspaceTask` | `dateUpdated` | `date_updated` |
| `TaskrouterV1WorkspaceTask` | `taskQueueEnteredDate` | `task_queue_entered_date` |
| `TaskrouterV1WorkspaceTask` | `taskQueueSid` | `task_queue_sid` |
| `TaskrouterV1WorkspaceTask` | `taskQueueFriendlyName` | `task_queue_friendly_name` |
| `TaskrouterV1WorkspaceTask` | `taskChannelSid` | `task_channel_sid` |
| `TaskrouterV1WorkspaceTask` | `taskChannelUniqueName` | `task_channel_unique_name` |
| `TaskrouterV1WorkspaceTask` | `workflowSid` | `workflow_sid` |
| `TaskrouterV1WorkspaceTask` | `workflowFriendlyName` | `workflow_friendly_name` |
| `TaskrouterV1WorkspaceTask` | `workspaceSid` | `workspace_sid` |
| `TaskrouterV1WorkspaceTask` | `virtualStartTime` | `virtual_start_time` |
| `TaskrouterV1WorkspaceTask` | `ignoreCapacity` | `ignore_capacity` |
| `TaskrouterV1WorkspaceTask` | `routingTarget` | `routing_target` |
| `TaskrouterV1WorkspaceTaskTaskReservation` | `accountSid` | `account_sid` |
| `TaskrouterV1WorkspaceTaskTaskReservation` | `dateCreated` | `date_created` |
| `TaskrouterV1WorkspaceTaskTaskReservation` | `dateUpdated` | `date_updated` |
| `TaskrouterV1WorkspaceTaskTaskReservation` | `reservationStatus` | `reservation_status` |
| `TaskrouterV1WorkspaceTaskTaskReservation` | `taskSid` | `task_sid` |
| `TaskrouterV1WorkspaceTaskTaskReservation` | `workerName` | `worker_name` |
| `TaskrouterV1WorkspaceTaskTaskReservation` | `workerSid` | `worker_sid` |
| `TaskrouterV1WorkspaceTaskTaskReservation` | `workspaceSid` | `workspace_sid` |
| `TaskrouterV1WorkspaceTaskChannel` | `accountSid` | `account_sid` |
| `TaskrouterV1WorkspaceTaskChannel` | `dateCreated` | `date_created` |
| `TaskrouterV1WorkspaceTaskChannel` | `dateUpdated` | `date_updated` |
| `TaskrouterV1WorkspaceTaskChannel` | `friendlyName` | `friendly_name` |
| `TaskrouterV1WorkspaceTaskChannel` | `uniqueName` | `unique_name` |
| `TaskrouterV1WorkspaceTaskChannel` | `workspaceSid` | `workspace_sid` |
| `TaskrouterV1WorkspaceTaskChannel` | `channelOptimizedRouting` | `channel_optimized_routing` |
| `TaskrouterV1WorkspaceTaskQueue` | `accountSid` | `account_sid` |
| `TaskrouterV1WorkspaceTaskQueue` | `assignmentActivitySid` | `assignment_activity_sid` |
| `TaskrouterV1WorkspaceTaskQueue` | `assignmentActivityName` | `assignment_activity_name` |
| `TaskrouterV1WorkspaceTaskQueue` | `dateCreated` | `date_created` |
| `TaskrouterV1WorkspaceTaskQueue` | `dateUpdated` | `date_updated` |
| `TaskrouterV1WorkspaceTaskQueue` | `friendlyName` | `friendly_name` |
| `TaskrouterV1WorkspaceTaskQueue` | `maxReservedWorkers` | `max_reserved_workers` |
| `TaskrouterV1WorkspaceTaskQueue` | `reservationActivitySid` | `reservation_activity_sid` |
| `TaskrouterV1WorkspaceTaskQueue` | `reservationActivityName` | `reservation_activity_name` |
| `TaskrouterV1WorkspaceTaskQueue` | `targetWorkers` | `target_workers` |
| `TaskrouterV1WorkspaceTaskQueue` | `taskOrder` | `task_order` |
| `TaskrouterV1WorkspaceTaskQueue` | `workspaceSid` | `workspace_sid` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueBulkRealTimeStatistics` | `accountSid` | `account_sid` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueBulkRealTimeStatistics` | `workspaceSid` | `workspace_sid` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueBulkRealTimeStatistics` | `taskQueueData` | `task_queue_data` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueBulkRealTimeStatistics` | `taskQueueResponseCount` | `task_queue_response_count` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics` | `accountSid` | `account_sid` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics` | `avgTaskAcceptanceTime` | `avg_task_acceptance_time` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics` | `startTime` | `start_time` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics` | `endTime` | `end_time` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics` | `reservationsCreated` | `reservations_created` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics` | `reservationsAccepted` | `reservations_accepted` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics` | `reservationsRejected` | `reservations_rejected` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics` | `reservationsTimedOut` | `reservations_timed_out` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics` | `reservationsCanceled` | `reservations_canceled` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics` | `reservationsRescinded` | `reservations_rescinded` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics` | `splitByWaitTime` | `split_by_wait_time` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics` | `taskQueueSid` | `task_queue_sid` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics` | `waitDurationUntilAccepted` | `wait_duration_until_accepted` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics` | `waitDurationUntilCanceled` | `wait_duration_until_canceled` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics` | `waitDurationInQueueUntilAccepted` | `wait_duration_in_queue_until_accepted` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics` | `tasksCanceled` | `tasks_canceled` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics` | `tasksCompleted` | `tasks_completed` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics` | `tasksDeleted` | `tasks_deleted` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics` | `tasksEntered` | `tasks_entered` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics` | `tasksMoved` | `tasks_moved` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics` | `workspaceSid` | `workspace_sid` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics` | `accountSid` | `account_sid` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics` | `activityStatistics` | `activity_statistics` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics` | `longestTaskWaitingAge` | `longest_task_waiting_age` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics` | `longestTaskWaitingSid` | `longest_task_waiting_sid` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics` | `longestRelativeTaskAgeInQueue` | `longest_relative_task_age_in_queue` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics` | `longestRelativeTaskSidInQueue` | `longest_relative_task_sid_in_queue` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics` | `taskQueueSid` | `task_queue_sid` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics` | `tasksByPriority` | `tasks_by_priority` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics` | `tasksByStatus` | `tasks_by_status` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics` | `totalAvailableWorkers` | `total_available_workers` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics` | `totalEligibleWorkers` | `total_eligible_workers` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics` | `totalTasks` | `total_tasks` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics` | `workspaceSid` | `workspace_sid` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueStatistics` | `accountSid` | `account_sid` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueStatistics` | `taskQueueSid` | `task_queue_sid` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueStatistics` | `workspaceSid` | `workspace_sid` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueuesStatistics` | `accountSid` | `account_sid` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueuesStatistics` | `taskQueueSid` | `task_queue_sid` |
| `TaskrouterV1WorkspaceTaskQueueTaskQueuesStatistics` | `workspaceSid` | `workspace_sid` |
| `TaskrouterV1WorkspaceWorker` | `accountSid` | `account_sid` |
| `TaskrouterV1WorkspaceWorker` | `activityName` | `activity_name` |
| `TaskrouterV1WorkspaceWorker` | `activitySid` | `activity_sid` |
| `TaskrouterV1WorkspaceWorker` | `dateCreated` | `date_created` |
| `TaskrouterV1WorkspaceWorker` | `dateStatusChanged` | `date_status_changed` |
| `TaskrouterV1WorkspaceWorker` | `dateUpdated` | `date_updated` |
| `TaskrouterV1WorkspaceWorker` | `friendlyName` | `friendly_name` |
| `TaskrouterV1WorkspaceWorker` | `workspaceSid` | `workspace_sid` |
| `TaskrouterV1WorkspaceWorkerWorkerChannel` | `accountSid` | `account_sid` |
| `TaskrouterV1WorkspaceWorkerWorkerChannel` | `assignedTasks` | `assigned_tasks` |
| `TaskrouterV1WorkspaceWorkerWorkerChannel` | `availableCapacityPercentage` | `available_capacity_percentage` |
| `TaskrouterV1WorkspaceWorkerWorkerChannel` | `configuredCapacity` | `configured_capacity` |
| `TaskrouterV1WorkspaceWorkerWorkerChannel` | `dateCreated` | `date_created` |
| `TaskrouterV1WorkspaceWorkerWorkerChannel` | `dateUpdated` | `date_updated` |
| `TaskrouterV1WorkspaceWorkerWorkerChannel` | `taskChannelSid` | `task_channel_sid` |
| `TaskrouterV1WorkspaceWorkerWorkerChannel` | `taskChannelUniqueName` | `task_channel_unique_name` |
| `TaskrouterV1WorkspaceWorkerWorkerChannel` | `workerSid` | `worker_sid` |
| `TaskrouterV1WorkspaceWorkerWorkerChannel` | `workspaceSid` | `workspace_sid` |
| `TaskrouterV1WorkspaceWorkerWorkerInstanceStatistics` | `accountSid` | `account_sid` |
| `TaskrouterV1WorkspaceWorkerWorkerInstanceStatistics` | `workerSid` | `worker_sid` |
| `TaskrouterV1WorkspaceWorkerWorkerInstanceStatistics` | `workspaceSid` | `workspace_sid` |
| `TaskrouterV1WorkspaceWorkerWorkerReservation` | `accountSid` | `account_sid` |
| `TaskrouterV1WorkspaceWorkerWorkerReservation` | `dateCreated` | `date_created` |
| `TaskrouterV1WorkspaceWorkerWorkerReservation` | `dateUpdated` | `date_updated` |
| `TaskrouterV1WorkspaceWorkerWorkerReservation` | `reservationStatus` | `reservation_status` |
| `TaskrouterV1WorkspaceWorkerWorkerReservation` | `taskSid` | `task_sid` |
| `TaskrouterV1WorkspaceWorkerWorkerReservation` | `workerName` | `worker_name` |
| `TaskrouterV1WorkspaceWorkerWorkerReservation` | `workerSid` | `worker_sid` |
| `TaskrouterV1WorkspaceWorkerWorkerReservation` | `workspaceSid` | `workspace_sid` |
| `TaskrouterV1WorkspaceWorkerWorkerStatistics` | `accountSid` | `account_sid` |
| `TaskrouterV1WorkspaceWorkerWorkerStatistics` | `workspaceSid` | `workspace_sid` |
| `TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics` | `accountSid` | `account_sid` |
| `TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics` | `startTime` | `start_time` |
| `TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics` | `endTime` | `end_time` |
| `TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics` | `activityDurations` | `activity_durations` |
| `TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics` | `reservationsCreated` | `reservations_created` |
| `TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics` | `reservationsAccepted` | `reservations_accepted` |
| `TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics` | `reservationsRejected` | `reservations_rejected` |
| `TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics` | `reservationsTimedOut` | `reservations_timed_out` |
| `TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics` | `reservationsCanceled` | `reservations_canceled` |
| `TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics` | `reservationsRescinded` | `reservations_rescinded` |
| `TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics` | `workspaceSid` | `workspace_sid` |
| `TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics` | `accountSid` | `account_sid` |
| `TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics` | `activityStatistics` | `activity_statistics` |
| `TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics` | `totalWorkers` | `total_workers` |
| `TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics` | `workspaceSid` | `workspace_sid` |
| `TaskrouterV1WorkspaceWorkflow` | `accountSid` | `account_sid` |
| `TaskrouterV1WorkspaceWorkflow` | `assignmentCallbackUrl` | `assignment_callback_url` |
| `TaskrouterV1WorkspaceWorkflow` | `dateCreated` | `date_created` |
| `TaskrouterV1WorkspaceWorkflow` | `dateUpdated` | `date_updated` |
| `TaskrouterV1WorkspaceWorkflow` | `documentContentType` | `document_content_type` |
| `TaskrouterV1WorkspaceWorkflow` | `fallbackAssignmentCallbackUrl` | `fallback_assignment_callback_url` |
| `TaskrouterV1WorkspaceWorkflow` | `friendlyName` | `friendly_name` |
| `TaskrouterV1WorkspaceWorkflow` | `taskReservationTimeout` | `task_reservation_timeout` |
| `TaskrouterV1WorkspaceWorkflow` | `workspaceSid` | `workspace_sid` |
| `TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics` | `accountSid` | `account_sid` |
| `TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics` | `avgTaskAcceptanceTime` | `avg_task_acceptance_time` |
| `TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics` | `startTime` | `start_time` |
| `TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics` | `endTime` | `end_time` |
| `TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics` | `reservationsCreated` | `reservations_created` |
| `TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics` | `reservationsAccepted` | `reservations_accepted` |
| `TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics` | `reservationsRejected` | `reservations_rejected` |
| `TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics` | `reservationsTimedOut` | `reservations_timed_out` |
| `TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics` | `reservationsCanceled` | `reservations_canceled` |
| `TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics` | `reservationsRescinded` | `reservations_rescinded` |
| `TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics` | `splitByWaitTime` | `split_by_wait_time` |
| `TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics` | `waitDurationUntilAccepted` | `wait_duration_until_accepted` |
| `TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics` | `waitDurationUntilCanceled` | `wait_duration_until_canceled` |
| `TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics` | `tasksCanceled` | `tasks_canceled` |
| `TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics` | `tasksCompleted` | `tasks_completed` |
| `TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics` | `tasksEntered` | `tasks_entered` |
| `TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics` | `tasksDeleted` | `tasks_deleted` |
| `TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics` | `tasksMoved` | `tasks_moved` |
| `TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics` | `tasksTimedOutInWorkflow` | `tasks_timed_out_in_workflow` |
| `TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics` | `workflowSid` | `workflow_sid` |
| `TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics` | `workspaceSid` | `workspace_sid` |
| `TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics` | `accountSid` | `account_sid` |
| `TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics` | `longestTaskWaitingAge` | `longest_task_waiting_age` |
| `TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics` | `longestTaskWaitingSid` | `longest_task_waiting_sid` |
| `TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics` | `tasksByPriority` | `tasks_by_priority` |
| `TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics` | `tasksByStatus` | `tasks_by_status` |
| `TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics` | `totalTasks` | `total_tasks` |
| `TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics` | `workflowSid` | `workflow_sid` |
| `TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics` | `workspaceSid` | `workspace_sid` |
| `TaskrouterV1WorkspaceWorkflowWorkflowStatistics` | `accountSid` | `account_sid` |
| `TaskrouterV1WorkspaceWorkflowWorkflowStatistics` | `workflowSid` | `workflow_sid` |
| `TaskrouterV1WorkspaceWorkflowWorkflowStatistics` | `workspaceSid` | `workspace_sid` |
| `TaskrouterV1WorkspaceWorkspaceCumulativeStatistics` | `accountSid` | `account_sid` |
| `TaskrouterV1WorkspaceWorkspaceCumulativeStatistics` | `avgTaskAcceptanceTime` | `avg_task_acceptance_time` |
| `TaskrouterV1WorkspaceWorkspaceCumulativeStatistics` | `startTime` | `start_time` |
| `TaskrouterV1WorkspaceWorkspaceCumulativeStatistics` | `endTime` | `end_time` |
| `TaskrouterV1WorkspaceWorkspaceCumulativeStatistics` | `reservationsCreated` | `reservations_created` |
| `TaskrouterV1WorkspaceWorkspaceCumulativeStatistics` | `reservationsAccepted` | `reservations_accepted` |
| `TaskrouterV1WorkspaceWorkspaceCumulativeStatistics` | `reservationsRejected` | `reservations_rejected` |
| `TaskrouterV1WorkspaceWorkspaceCumulativeStatistics` | `reservationsTimedOut` | `reservations_timed_out` |
| `TaskrouterV1WorkspaceWorkspaceCumulativeStatistics` | `reservationsCanceled` | `reservations_canceled` |
| `TaskrouterV1WorkspaceWorkspaceCumulativeStatistics` | `reservationsRescinded` | `reservations_rescinded` |
| `TaskrouterV1WorkspaceWorkspaceCumulativeStatistics` | `splitByWaitTime` | `split_by_wait_time` |
| `TaskrouterV1WorkspaceWorkspaceCumulativeStatistics` | `waitDurationUntilAccepted` | `wait_duration_until_accepted` |
| `TaskrouterV1WorkspaceWorkspaceCumulativeStatistics` | `waitDurationUntilCanceled` | `wait_duration_until_canceled` |
| `TaskrouterV1WorkspaceWorkspaceCumulativeStatistics` | `tasksCanceled` | `tasks_canceled` |
| `TaskrouterV1WorkspaceWorkspaceCumulativeStatistics` | `tasksCompleted` | `tasks_completed` |
| `TaskrouterV1WorkspaceWorkspaceCumulativeStatistics` | `tasksCreated` | `tasks_created` |
| `TaskrouterV1WorkspaceWorkspaceCumulativeStatistics` | `tasksDeleted` | `tasks_deleted` |
| `TaskrouterV1WorkspaceWorkspaceCumulativeStatistics` | `tasksMoved` | `tasks_moved` |
| `TaskrouterV1WorkspaceWorkspaceCumulativeStatistics` | `tasksTimedOutInWorkflow` | `tasks_timed_out_in_workflow` |
| `TaskrouterV1WorkspaceWorkspaceCumulativeStatistics` | `workspaceSid` | `workspace_sid` |
| `TaskrouterV1WorkspaceWorkspaceRealTimeStatistics` | `accountSid` | `account_sid` |
| `TaskrouterV1WorkspaceWorkspaceRealTimeStatistics` | `activityStatistics` | `activity_statistics` |
| `TaskrouterV1WorkspaceWorkspaceRealTimeStatistics` | `longestTaskWaitingAge` | `longest_task_waiting_age` |
| `TaskrouterV1WorkspaceWorkspaceRealTimeStatistics` | `longestTaskWaitingSid` | `longest_task_waiting_sid` |
| `TaskrouterV1WorkspaceWorkspaceRealTimeStatistics` | `tasksByPriority` | `tasks_by_priority` |
| `TaskrouterV1WorkspaceWorkspaceRealTimeStatistics` | `tasksByStatus` | `tasks_by_status` |
| `TaskrouterV1WorkspaceWorkspaceRealTimeStatistics` | `totalTasks` | `total_tasks` |
| `TaskrouterV1WorkspaceWorkspaceRealTimeStatistics` | `totalWorkers` | `total_workers` |
| `TaskrouterV1WorkspaceWorkspaceRealTimeStatistics` | `workspaceSid` | `workspace_sid` |
| `TaskrouterV1WorkspaceWorkspaceStatistics` | `accountSid` | `account_sid` |
| `TaskrouterV1WorkspaceWorkspaceStatistics` | `workspaceSid` | `workspace_sid` |
| `TrusthubV1ComplianceInquiry` | `inquiryId` | `inquiry_id` |
| `TrusthubV1ComplianceInquiry` | `inquirySessionToken` | `inquiry_session_token` |
| `TrusthubV1ComplianceInquiry` | `customerId` | `customer_id` |
| `TrusthubV1ComplianceRegistration` | `inquiryId` | `inquiry_id` |
| `TrusthubV1ComplianceRegistration` | `inquirySessionToken` | `inquiry_session_token` |
| `TrusthubV1ComplianceRegistration` | `registrationId` | `registration_id` |
| `TrusthubV1ComplianceTollfreeInquiry` | `inquiryId` | `inquiry_id` |
| `TrusthubV1ComplianceTollfreeInquiry` | `inquirySessionToken` | `inquiry_session_token` |
| `TrusthubV1ComplianceTollfreeInquiry` | `registrationId` | `registration_id` |
| `TrusthubV1CustomerProfile` | `accountSid` | `account_sid` |
| `TrusthubV1CustomerProfile` | `policySid` | `policy_sid` |
| `TrusthubV1CustomerProfile` | `friendlyName` | `friendly_name` |
| `TrusthubV1CustomerProfile` | `validUntil` | `valid_until` |
| `TrusthubV1CustomerProfile` | `statusCallback` | `status_callback` |
| `TrusthubV1CustomerProfile` | `dateCreated` | `date_created` |
| `TrusthubV1CustomerProfile` | `dateUpdated` | `date_updated` |
| `TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment` | `customerProfileSid` | `customer_profile_sid` |
| `TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment` | `accountSid` | `account_sid` |
| `TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment` | `channelEndpointType` | `channel_endpoint_type` |
| `TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment` | `channelEndpointSid` | `channel_endpoint_sid` |
| `TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment` | `dateCreated` | `date_created` |
| `TrusthubV1CustomerProfileCustomerProfileEntityAssignment` | `customerProfileSid` | `customer_profile_sid` |
| `TrusthubV1CustomerProfileCustomerProfileEntityAssignment` | `accountSid` | `account_sid` |
| `TrusthubV1CustomerProfileCustomerProfileEntityAssignment` | `objectSid` | `object_sid` |
| `TrusthubV1CustomerProfileCustomerProfileEntityAssignment` | `dateCreated` | `date_created` |
| `TrusthubV1CustomerProfileCustomerProfileEvaluation` | `accountSid` | `account_sid` |
| `TrusthubV1CustomerProfileCustomerProfileEvaluation` | `policySid` | `policy_sid` |
| `TrusthubV1CustomerProfileCustomerProfileEvaluation` | `customerProfileSid` | `customer_profile_sid` |
| `TrusthubV1CustomerProfileCustomerProfileEvaluation` | `dateCreated` | `date_created` |
| `TrusthubV1EndUser` | `accountSid` | `account_sid` |
| `TrusthubV1EndUser` | `friendlyName` | `friendly_name` |
| `TrusthubV1EndUser` | `dateCreated` | `date_created` |
| `TrusthubV1EndUser` | `dateUpdated` | `date_updated` |
| `TrusthubV1Policies` | `friendlyName` | `friendly_name` |
| `TrusthubV1SupportingDocument` | `accountSid` | `account_sid` |
| `TrusthubV1SupportingDocument` | `friendlyName` | `friendly_name` |
| `TrusthubV1SupportingDocument` | `mimeType` | `mime_type` |
| `TrusthubV1SupportingDocument` | `dateCreated` | `date_created` |
| `TrusthubV1SupportingDocument` | `dateUpdated` | `date_updated` |
| `TrusthubV1TrustProduct` | `accountSid` | `account_sid` |
| `TrusthubV1TrustProduct` | `policySid` | `policy_sid` |
| `TrusthubV1TrustProduct` | `friendlyName` | `friendly_name` |
| `TrusthubV1TrustProduct` | `validUntil` | `valid_until` |
| `TrusthubV1TrustProduct` | `statusCallback` | `status_callback` |
| `TrusthubV1TrustProduct` | `dateCreated` | `date_created` |
| `TrusthubV1TrustProduct` | `dateUpdated` | `date_updated` |
| `TrusthubV1TrustProductTrustProductChannelEndpointAssignment` | `trustProductSid` | `trust_product_sid` |
| `TrusthubV1TrustProductTrustProductChannelEndpointAssignment` | `accountSid` | `account_sid` |
| `TrusthubV1TrustProductTrustProductChannelEndpointAssignment` | `channelEndpointType` | `channel_endpoint_type` |
| `TrusthubV1TrustProductTrustProductChannelEndpointAssignment` | `channelEndpointSid` | `channel_endpoint_sid` |
| `TrusthubV1TrustProductTrustProductChannelEndpointAssignment` | `dateCreated` | `date_created` |
| `TrusthubV1TrustProductTrustProductEntityAssignment` | `trustProductSid` | `trust_product_sid` |
| `TrusthubV1TrustProductTrustProductEntityAssignment` | `accountSid` | `account_sid` |
| `TrusthubV1TrustProductTrustProductEntityAssignment` | `objectSid` | `object_sid` |
| `TrusthubV1TrustProductTrustProductEntityAssignment` | `dateCreated` | `date_created` |
| `TrusthubV1TrustProductTrustProductEvaluation` | `accountSid` | `account_sid` |
| `TrusthubV1TrustProductTrustProductEvaluation` | `policySid` | `policy_sid` |
| `TrusthubV1TrustProductTrustProductEvaluation` | `trustProductSid` | `trust_product_sid` |
| `TrusthubV1TrustProductTrustProductEvaluation` | `dateCreated` | `date_created` |
| `TtsLatencyRelayData` | `sessionId` | `session_id` |
| `TtsLatencyRelayData` | `sequenceNumber` | `sequence_number` |
| `TtsLatencyRelayData` | `ttsLatency` | `tts_latency` |
| `TwilioCatalog` | `dynamicItems` | `dynamic_items` |
| `TwilioFlows` | `buttonText` | `button_text` |
| `TwilioFlows` | `mediaUrl` | `media_url` |
| `Types` | `twilioText` | `twilio/text` |
| `Types` | `twilioMedia` | `twilio/media` |
| `Types` | `twilioLocation` | `twilio/location` |
| `Types` | `twilioListPicker` | `twilio/list-picker` |
| `Types` | `twilioCallToAction` | `twilio/call-to-action` |
| `Types` | `twilioQuickReply` | `twilio/quick-reply` |
| `Types` | `twilioCard` | `twilio/card` |
| `Types` | `twilioCatalog` | `twilio/catalog` |
| `Types` | `twilioCarousel` | `twilio/carousel` |
| `Types` | `twilioFlows` | `twilio/flows` |
| `Types` | `twilioSchedule` | `twilio/schedule` |
| `Types` | `whatsappCard` | `whatsapp/card` |
| `Types` | `whatsappAuthentication` | `whatsapp/authentication` |
| `Types` | `whatsappFlows` | `whatsapp/flows` |
| `VerifyV2Form` | `formType` | `form_type` |
| `VerifyV2Form` | `formMeta` | `form_meta` |
| `VerifyV2Safelist` | `phoneNumber` | `phone_number` |
| `VerifyV2Service` | `accountSid` | `account_sid` |
| `VerifyV2Service` | `friendlyName` | `friendly_name` |
| `VerifyV2Service` | `codeLength` | `code_length` |
| `VerifyV2Service` | `lookupEnabled` | `lookup_enabled` |
| `VerifyV2Service` | `psd2Enabled` | `psd2_enabled` |
| `VerifyV2Service` | `skipSmsToLandlines` | `skip_sms_to_landlines` |
| `VerifyV2Service` | `dtmfInputRequired` | `dtmf_input_required` |
| `VerifyV2Service` | `ttsName` | `tts_name` |
| `VerifyV2Service` | `doNotShareWarningEnabled` | `do_not_share_warning_enabled` |
| `VerifyV2Service` | `customCodeEnabled` | `custom_code_enabled` |
| `VerifyV2Service` | `defaultTemplateSid` | `default_template_sid` |
| `VerifyV2Service` | `verifyEventSubscriptionEnabled` | `verify_event_subscription_enabled` |
| `VerifyV2Service` | `dateCreated` | `date_created` |
| `VerifyV2Service` | `dateUpdated` | `date_updated` |
| `VerifyV2ServiceAccessToken` | `accountSid` | `account_sid` |
| `VerifyV2ServiceAccessToken` | `serviceSid` | `service_sid` |
| `VerifyV2ServiceAccessToken` | `entityIdentity` | `entity_identity` |
| `VerifyV2ServiceAccessToken` | `factorType` | `factor_type` |
| `VerifyV2ServiceAccessToken` | `factorFriendlyName` | `factor_friendly_name` |
| `VerifyV2ServiceAccessToken` | `dateCreated` | `date_created` |
| `VerifyV2ServiceEntity` | `accountSid` | `account_sid` |
| `VerifyV2ServiceEntity` | `serviceSid` | `service_sid` |
| `VerifyV2ServiceEntity` | `dateCreated` | `date_created` |
| `VerifyV2ServiceEntity` | `dateUpdated` | `date_updated` |
| `VerifyV2ServiceEntityChallenge` | `accountSid` | `account_sid` |
| `VerifyV2ServiceEntityChallenge` | `serviceSid` | `service_sid` |
| `VerifyV2ServiceEntityChallenge` | `entitySid` | `entity_sid` |
| `VerifyV2ServiceEntityChallenge` | `factorSid` | `factor_sid` |
| `VerifyV2ServiceEntityChallenge` | `dateCreated` | `date_created` |
| `VerifyV2ServiceEntityChallenge` | `dateUpdated` | `date_updated` |
| `VerifyV2ServiceEntityChallenge` | `dateResponded` | `date_responded` |
| `VerifyV2ServiceEntityChallenge` | `expirationDate` | `expiration_date` |
| `VerifyV2ServiceEntityChallenge` | `respondedReason` | `responded_reason` |
| `VerifyV2ServiceEntityChallenge` | `hiddenDetails` | `hidden_details` |
| `VerifyV2ServiceEntityChallenge` | `factorType` | `factor_type` |
| `VerifyV2ServiceEntityChallengeNotification` | `accountSid` | `account_sid` |
| `VerifyV2ServiceEntityChallengeNotification` | `serviceSid` | `service_sid` |
| `VerifyV2ServiceEntityChallengeNotification` | `entitySid` | `entity_sid` |
| `VerifyV2ServiceEntityChallengeNotification` | `challengeSid` | `challenge_sid` |
| `VerifyV2ServiceEntityChallengeNotification` | `dateCreated` | `date_created` |
| `VerifyV2ServiceEntityFactor` | `accountSid` | `account_sid` |
| `VerifyV2ServiceEntityFactor` | `serviceSid` | `service_sid` |
| `VerifyV2ServiceEntityFactor` | `entitySid` | `entity_sid` |
| `VerifyV2ServiceEntityFactor` | `dateCreated` | `date_created` |
| `VerifyV2ServiceEntityFactor` | `dateUpdated` | `date_updated` |
| `VerifyV2ServiceEntityFactor` | `friendlyName` | `friendly_name` |
| `VerifyV2ServiceEntityFactor` | `factorType` | `factor_type` |
| `VerifyV2ServiceEntityNewFactor` | `accountSid` | `account_sid` |
| `VerifyV2ServiceEntityNewFactor` | `serviceSid` | `service_sid` |
| `VerifyV2ServiceEntityNewFactor` | `entitySid` | `entity_sid` |
| `VerifyV2ServiceEntityNewFactor` | `dateCreated` | `date_created` |
| `VerifyV2ServiceEntityNewFactor` | `dateUpdated` | `date_updated` |
| `VerifyV2ServiceEntityNewFactor` | `friendlyName` | `friendly_name` |
| `VerifyV2ServiceEntityNewFactor` | `factorType` | `factor_type` |
| `VerifyV2ServiceMessagingConfiguration` | `accountSid` | `account_sid` |
| `VerifyV2ServiceMessagingConfiguration` | `serviceSid` | `service_sid` |
| `VerifyV2ServiceMessagingConfiguration` | `messagingServiceSid` | `messaging_service_sid` |
| `VerifyV2ServiceMessagingConfiguration` | `dateCreated` | `date_created` |
| `VerifyV2ServiceMessagingConfiguration` | `dateUpdated` | `date_updated` |
| `VerifyV2ServiceRateLimit` | `serviceSid` | `service_sid` |
| `VerifyV2ServiceRateLimit` | `accountSid` | `account_sid` |
| `VerifyV2ServiceRateLimit` | `uniqueName` | `unique_name` |
| `VerifyV2ServiceRateLimit` | `dateCreated` | `date_created` |
| `VerifyV2ServiceRateLimit` | `dateUpdated` | `date_updated` |
| `VerifyV2ServiceRateLimitBucket` | `rateLimitSid` | `rate_limit_sid` |
| `VerifyV2ServiceRateLimitBucket` | `serviceSid` | `service_sid` |
| `VerifyV2ServiceRateLimitBucket` | `accountSid` | `account_sid` |
| `VerifyV2ServiceRateLimitBucket` | `dateCreated` | `date_created` |
| `VerifyV2ServiceRateLimitBucket` | `dateUpdated` | `date_updated` |
| `VerifyV2ServiceVerification` | `serviceSid` | `service_sid` |
| `VerifyV2ServiceVerification` | `accountSid` | `account_sid` |
| `VerifyV2ServiceVerification` | `sendCodeAttempts` | `send_code_attempts` |
| `VerifyV2ServiceVerification` | `dateCreated` | `date_created` |
| `VerifyV2ServiceVerification` | `dateUpdated` | `date_updated` |
| `VerifyV2ServiceVerificationCheck` | `serviceSid` | `service_sid` |
| `VerifyV2ServiceVerificationCheck` | `accountSid` | `account_sid` |
| `VerifyV2ServiceVerificationCheck` | `dateCreated` | `date_created` |
| `VerifyV2ServiceVerificationCheck` | `dateUpdated` | `date_updated` |
| `VerifyV2ServiceVerificationCheck` | `snaAttemptsErrorCodes` | `sna_attempts_error_codes` |
| `VerifyV2ServiceWebhook` | `serviceSid` | `service_sid` |
| `VerifyV2ServiceWebhook` | `accountSid` | `account_sid` |
| `VerifyV2ServiceWebhook` | `friendlyName` | `friendly_name` |
| `VerifyV2ServiceWebhook` | `eventTypes` | `event_types` |
| `VerifyV2ServiceWebhook` | `webhookUrl` | `webhook_url` |
| `VerifyV2ServiceWebhook` | `webhookMethod` | `webhook_method` |
| `VerifyV2ServiceWebhook` | `dateCreated` | `date_created` |
| `VerifyV2ServiceWebhook` | `dateUpdated` | `date_updated` |
| `VerifyV2VerificationAttempt` | `accountSid` | `account_sid` |
| `VerifyV2VerificationAttempt` | `serviceSid` | `service_sid` |
| `VerifyV2VerificationAttempt` | `verificationSid` | `verification_sid` |
| `VerifyV2VerificationAttempt` | `dateCreated` | `date_created` |
| `VerifyV2VerificationAttempt` | `dateUpdated` | `date_updated` |
| `VerifyV2VerificationAttempt` | `conversionStatus` | `conversion_status` |
| `VerifyV2VerificationAttempt` | `channelData` | `channel_data` |
| `VerifyV2VerificationAttemptsSummary` | `totalAttempts` | `total_attempts` |
| `VerifyV2VerificationAttemptsSummary` | `totalConverted` | `total_converted` |
| `VerifyV2VerificationAttemptsSummary` | `totalUnconverted` | `total_unconverted` |
| `VerifyV2VerificationAttemptsSummary` | `conversionRatePercentage` | `conversion_rate_percentage` |
| `VerifyV2VerificationTemplate` | `accountSid` | `account_sid` |
| `VerifyV2VerificationTemplate` | `friendlyName` | `friendly_name` |
| `VideoV1Composition` | `accountSid` | `account_sid` |
| `VideoV1Composition` | `dateCreated` | `date_created` |
| `VideoV1Composition` | `dateCompleted` | `date_completed` |
| `VideoV1Composition` | `dateDeleted` | `date_deleted` |
| `VideoV1Composition` | `roomSid` | `room_sid` |
| `VideoV1Composition` | `audioSources` | `audio_sources` |
| `VideoV1Composition` | `audioSourcesExcluded` | `audio_sources_excluded` |
| `VideoV1Composition` | `videoLayout` | `video_layout` |
| `VideoV1Composition` | `mediaExternalLocation` | `media_external_location` |
| `VideoV1Composition` | `statusCallback` | `status_callback` |
| `VideoV1Composition` | `statusCallbackMethod` | `status_callback_method` |
| `VideoV1CompositionHook` | `accountSid` | `account_sid` |
| `VideoV1CompositionHook` | `friendlyName` | `friendly_name` |
| `VideoV1CompositionHook` | `dateCreated` | `date_created` |
| `VideoV1CompositionHook` | `dateUpdated` | `date_updated` |
| `VideoV1CompositionHook` | `audioSources` | `audio_sources` |
| `VideoV1CompositionHook` | `audioSourcesExcluded` | `audio_sources_excluded` |
| `VideoV1CompositionHook` | `videoLayout` | `video_layout` |
| `VideoV1CompositionHook` | `statusCallback` | `status_callback` |
| `VideoV1CompositionHook` | `statusCallbackMethod` | `status_callback_method` |
| `VideoV1CompositionSettings` | `accountSid` | `account_sid` |
| `VideoV1CompositionSettings` | `friendlyName` | `friendly_name` |
| `VideoV1CompositionSettings` | `awsCredentialsSid` | `aws_credentials_sid` |
| `VideoV1CompositionSettings` | `awsS3Url` | `aws_s3_url` |
| `VideoV1CompositionSettings` | `awsStorageEnabled` | `aws_storage_enabled` |
| `VideoV1CompositionSettings` | `encryptionKeySid` | `encryption_key_sid` |
| `VideoV1CompositionSettings` | `encryptionEnabled` | `encryption_enabled` |
| `VideoV1Recording` | `accountSid` | `account_sid` |
| `VideoV1Recording` | `dateCreated` | `date_created` |
| `VideoV1Recording` | `sourceSid` | `source_sid` |
| `VideoV1Recording` | `containerFormat` | `container_format` |
| `VideoV1Recording` | `groupingSids` | `grouping_sids` |
| `VideoV1Recording` | `trackName` | `track_name` |
| `VideoV1Recording` | `mediaExternalLocation` | `media_external_location` |
| `VideoV1Recording` | `statusCallback` | `status_callback` |
| `VideoV1Recording` | `statusCallbackMethod` | `status_callback_method` |
| `VideoV1RecordingSettings` | `accountSid` | `account_sid` |
| `VideoV1RecordingSettings` | `friendlyName` | `friendly_name` |
| `VideoV1RecordingSettings` | `awsCredentialsSid` | `aws_credentials_sid` |
| `VideoV1RecordingSettings` | `awsS3Url` | `aws_s3_url` |
| `VideoV1RecordingSettings` | `awsStorageEnabled` | `aws_storage_enabled` |
| `VideoV1RecordingSettings` | `encryptionKeySid` | `encryption_key_sid` |
| `VideoV1RecordingSettings` | `encryptionEnabled` | `encryption_enabled` |
| `VideoV1Room` | `dateCreated` | `date_created` |
| `VideoV1Room` | `dateUpdated` | `date_updated` |
| `VideoV1Room` | `accountSid` | `account_sid` |
| `VideoV1Room` | `enableTurn` | `enable_turn` |
| `VideoV1Room` | `uniqueName` | `unique_name` |
| `VideoV1Room` | `statusCallback` | `status_callback` |
| `VideoV1Room` | `statusCallbackMethod` | `status_callback_method` |
| `VideoV1Room` | `endTime` | `end_time` |
| `VideoV1Room` | `maxParticipants` | `max_participants` |
| `VideoV1Room` | `maxParticipantDuration` | `max_participant_duration` |
| `VideoV1Room` | `maxConcurrentPublishedTracks` | `max_concurrent_published_tracks` |
| `VideoV1Room` | `recordParticipantsOnConnect` | `record_participants_on_connect` |
| `VideoV1Room` | `videoCodecs` | `video_codecs` |
| `VideoV1Room` | `mediaRegion` | `media_region` |
| `VideoV1Room` | `audioOnly` | `audio_only` |
| `VideoV1Room` | `emptyRoomTimeout` | `empty_room_timeout` |
| `VideoV1Room` | `unusedRoomTimeout` | `unused_room_timeout` |
| `VideoV1Room` | `largeRoom` | `large_room` |
| `VideoV1RoomRoomParticipant` | `roomSid` | `room_sid` |
| `VideoV1RoomRoomParticipant` | `accountSid` | `account_sid` |
| `VideoV1RoomRoomParticipant` | `dateCreated` | `date_created` |
| `VideoV1RoomRoomParticipant` | `dateUpdated` | `date_updated` |
| `VideoV1RoomRoomParticipant` | `startTime` | `start_time` |
| `VideoV1RoomRoomParticipant` | `endTime` | `end_time` |
| `VideoV1RoomRoomParticipantRoomParticipantAnonymize` | `roomSid` | `room_sid` |
| `VideoV1RoomRoomParticipantRoomParticipantAnonymize` | `accountSid` | `account_sid` |
| `VideoV1RoomRoomParticipantRoomParticipantAnonymize` | `dateCreated` | `date_created` |
| `VideoV1RoomRoomParticipantRoomParticipantAnonymize` | `dateUpdated` | `date_updated` |
| `VideoV1RoomRoomParticipantRoomParticipantAnonymize` | `startTime` | `start_time` |
| `VideoV1RoomRoomParticipantRoomParticipantAnonymize` | `endTime` | `end_time` |
| `VideoV1RoomRoomParticipantRoomParticipantPublishedTrack` | `participantSid` | `participant_sid` |
| `VideoV1RoomRoomParticipantRoomParticipantPublishedTrack` | `roomSid` | `room_sid` |
| `VideoV1RoomRoomParticipantRoomParticipantPublishedTrack` | `dateCreated` | `date_created` |
| `VideoV1RoomRoomParticipantRoomParticipantPublishedTrack` | `dateUpdated` | `date_updated` |
| `VideoV1RoomRoomParticipantRoomParticipantSubscribeRule` | `participantSid` | `participant_sid` |
| `VideoV1RoomRoomParticipantRoomParticipantSubscribeRule` | `roomSid` | `room_sid` |
| `VideoV1RoomRoomParticipantRoomParticipantSubscribeRule` | `dateCreated` | `date_created` |
| `VideoV1RoomRoomParticipantRoomParticipantSubscribeRule` | `dateUpdated` | `date_updated` |
| `VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack` | `participantSid` | `participant_sid` |
| `VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack` | `publisherSid` | `publisher_sid` |
| `VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack` | `roomSid` | `room_sid` |
| `VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack` | `dateCreated` | `date_created` |
| `VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack` | `dateUpdated` | `date_updated` |
| `VideoV1RoomRoomRecording` | `accountSid` | `account_sid` |
| `VideoV1RoomRoomRecording` | `dateCreated` | `date_created` |
| `VideoV1RoomRoomRecording` | `sourceSid` | `source_sid` |
| `VideoV1RoomRoomRecording` | `containerFormat` | `container_format` |
| `VideoV1RoomRoomRecording` | `groupingSids` | `grouping_sids` |
| `VideoV1RoomRoomRecording` | `trackName` | `track_name` |
| `VideoV1RoomRoomRecording` | `mediaExternalLocation` | `media_external_location` |
| `VideoV1RoomRoomRecording` | `roomSid` | `room_sid` |
| `VideoV1RoomRoomRecordingRule` | `roomSid` | `room_sid` |
| `VideoV1RoomRoomRecordingRule` | `dateCreated` | `date_created` |
| `VideoV1RoomRoomRecordingRule` | `dateUpdated` | `date_updated` |
| `VideoV1RoomRoomTranscriptions` | `accountSid` | `account_sid` |
| `VideoV1RoomRoomTranscriptions` | `roomSid` | `room_sid` |
| `VideoV1RoomRoomTranscriptions` | `sourceSid` | `source_sid` |
| `VideoV1RoomRoomTranscriptions` | `dateCreated` | `date_created` |
| `VideoV1RoomRoomTranscriptions` | `dateUpdated` | `date_updated` |
| `VideoV1RoomRoomTranscriptions` | `startTime` | `start_time` |
| `VideoV1RoomRoomTranscriptions` | `endTime` | `end_time` |
| `VoiceIntegrity` | `enabledCalls` | `enabled_calls` |
| `VoiceIntegrity` | `enabledPercentage` | `enabled_percentage` |
| `VoiceIntegrity` | `callsPerBundle` | `calls_per_bundle` |
| `VoiceIntegrityCallsPerBundle` | `bundleSid` | `bundle_sid` |
| `VoiceIntegrityCallsPerBundle` | `enabledPhonenumbers` | `enabled_phonenumbers` |
| `VoiceIntegrityCallsPerBundle` | `totalCalls` | `total_calls` |
| `VoiceIntegrityCallsPerBundle` | `answerRate` | `answer_rate` |
| `VoiceIntegrityCallsPerBundle` | `humanAnswerRate` | `human_answer_rate` |
| `WhatsappAuthentication` | `addSecurityRecommendation` | `add_security_recommendation` |
| `WhatsappAuthentication` | `codeExpirationMinutes` | `code_expiration_minutes` |
| `WhatsappCard` | `headerText` | `header_text` |
| `WhatsappFlows` | `buttonText` | `button_text` |
| `WhatsappFlows` | `mediaUrl` | `media_url` |
| `WhatsappFlows` | `flowId` | `flow_id` |
| `WhatsappFlows` | `flowToken` | `flow_token` |
| `WhatsappFlows` | `flowFirstPageId` | `flow_first_page_id` |
| `WhatsappFlows` | `isFlowFirstPageEndpoint` | `is_flow_first_page_endpoint` |

---

## Servers & auth

**Authentication is per operation.** Every operation declares the requirement it enforces and the SDK sends exactly that: **898 of the 898 operations** require a credential and **0** are public. Each block on a page above carries an **Auth** bullet naming its requirement, `none` included. There is no client-global switch and no per-call override.

| Scheme (as an **Auth** bullet names it) | Configured with | What the SDK sends |
| --- | --- | --- |
| `accountSidAuthToken` | `accountSidAuthToken: { username, password }` | `Authorization: Basic <base64 of username:password>`, UTF-8 |

A scheme **contributes** headers, query parameters and cookies rather than mutating the request, so a credential is encoded by exactly the code that encodes an operation's own parameters. The auth layer goes on **last**, which means a scheme's `Authorization` wins over one the operation declared.

**Composition is emitted, not configured.** Where the spec puts two schemes in one requirement the SDK sends **both**; where it lists alternatives the SDK sends the **first configured** one, in the order the **Auth** bullet prints them. The combinators that express this (`allAuth`, `anyAuth`, `noneAuth`) live in the generated resource modules and are **not exported**.

**A credential may be a function.** Every field typed `TokenProvider` is re-read on **every** request with no caching, so a key can rotate without rebuilding the client. An empty string counts as absent, and a function is treated as present without being invoked.

**An unconfigured scheme does not throw.** The request goes out without that credential and the server decides. So a 401 on a call you believed was authenticated is usually an unset credential field rather than an SDK failure — check the operation's **Auth** bullet against what the client was given.

**A 401 invalidates, it does not retry.** On a **401** — 401 only, not 403 — the SDK clears whatever that operation's scheme had cached, so the *next* call re-acquires. The current request still rejects with the operation's `ResponseError`. There is no retry loop on this SDK, and the credential fields are on `ClientOptions`.

**Environments.** `ClientOptions.serverEnvironment` selects one for the whole client (source: `src/servers.ts`). `ServerEnvironment` is a `const` object with a derived union type, not a TypeScript `enum` — and unlike the model enums it is **closed**, so only the values below are assignable.

| `ServerEnvironment` member | Value |
| --- | --- |
| `ServerEnvironment.Production` *(default)* | `production` |

**Server groups.** 15 logical servers; each operation is bound to one at generation time, and a block carries a **Server** bullet only when its group is not `default`.

| Group | Options type |
| --- | --- |
| `default` | `DefaultServerOptions` |
| `default1` | `Default1ServerOptions` |
| `default2` | `Default2ServerOptions` |
| `default3` | `Default3ServerOptions` |
| `default4` | `Default4ServerOptions` |
| `default5` | `Default5ServerOptions` |
| `default6` | `Default6ServerOptions` |
| `default7` | `Default7ServerOptions` |
| `default8` | `Default8ServerOptions` |
| `default9` | `Default9ServerOptions` |
| `default10` | `Default10ServerOptions` |
| `default11` | `Default11ServerOptions` |
| `default12` | `Default12ServerOptions` |
| `default13` | `Default13ServerOptions` |
| `default14` | `Default14ServerOptions` |

**Base URLs and overrides.** One row per group-and-environment pair, so the table stays four columns wide however many environments a spec declares. Every cell is overridden at `serverOptions.<group>.<environment>.<name>`, where `<name>` is `baseUrl` for the whole template or the variable name for one substitution. An override merges with the built-in defaults **per pair, key by key**.

| Group | Environment | Base URL template | Template variables (default) |
| --- | --- | --- | --- |
| `default` | `production` | `https://api.twilio.com` | — |
| `default1` | `production` | `https://messaging.twilio.com` | — |
| `default2` | `production` | `https://content.twilio.com` | — |
| `default3` | `production` | `https://verify.twilio.com` | — |
| `default4` | `production` | `https://lookups.twilio.com` | — |
| `default5` | `production` | `https://numbers.twilio.com` | — |
| `default6` | `production` | `https://video.twilio.com` | — |
| `default7` | `production` | `https://conversations.twilio.com` | — |
| `default8` | `production` | `https://taskrouter.twilio.com` | — |
| `default9` | `production` | `https://trusthub.twilio.com` | — |
| `default10` | `production` | `https://proxy.twilio.com` | — |
| `default11` | `production` | `https://studio.twilio.com` | — |
| `default12` | `production` | `https://sync.twilio.com` | — |
| `default13` | `production` | `https://flex-api.twilio.com` | — |
| `default14` | `production` | `https://insights.twilio.com` | — |

A `baseUrl` override replaces the template verbatim; variable values are percent-encoded into it, and templates are expanded per request rather than once at construction. An environment value the SDK does not know throws `SdkError` when a server is resolved — at the first call, not at construction. It is the one failure on this surface that throws **synchronously** out of the operation method, so a `try`/`await` catches it but `.asApiResult()` and `.catch()` never see it.

---

## Runtime & packaging

The facts that change what you type, and the floors that decide whether the package loads at all. This section is the home for all of them.

|  |  |
| --- | --- |
| One entry, two dialects | `import` resolves `dist/esm`, `require` resolves `dist/commonjs`, both through the single `.` export. In a TypeScript CommonJS file the typed spelling is `import sdk = require("twilio-sdk")`; a plain `require` destructure works at run time but yields no types. `instanceof` is reliable **within** one dialect — if your app loads both, the two copies declare separate error classes |
| Consumer compiler settings | Under `exactOptionalPropertyTypes`, **omit or spread** an absent optional rather than assigning `undefined` to it. Under `verbatimModuleSyntax`, names that carry no runtime value (the options types, every model type) must be imported with `import type` |
| Required globals, and only these | Always: `fetch` (or a replacement passed as the `fetch` option), `AbortController`, `Headers`, `URL`, `setTimeout` and `clearTimeout`, `JSON`, `BigInt`. Auth adds more, each reached only once the credential needing it is configured. `TextEncoder` and `btoa` build every `Authorization: Basic` value, sent on every request that authenticates with basic. |
| Values that cross the boundary | `Date` for `date-time`, `string` for `date`, `ArrayBuffer` for an undeclared error body, `Headers` on a result and on a thrown `ResponseError`. The engine also carries a `bigint` int64 path and a base64 `bytes()` codec, reached only where a model uses them |
| Browser distribution | The package ships `dist/esm` and `dist/commonjs` and nothing else — **no bundle, no UMD file, no CDN artifact**. Use it through a bundler, which resolves `zod/v4-mini`, deduplicates it against your own copy and tree-shakes the rest |
| Other runtimes | Deno, Bun, Cloudflare Workers and Vercel Edge are all likely to work — the SDK needs only the globals above and imports no Node built-in — but **none of them is tested for this package**, so nothing here claims support for them |

The browser floor comes from the emitted output rather than the sources: `tshy` builds at `target: ES2022`, so native `#private` fields and methods survive into `dist/`.

| Browser | Minimum | Set by |
| --- | --- | --- |
| Chrome / Edge | **85** | `String.prototype.replaceAll`, logical assignment (`??=`) |
| Firefox | **90** | private class fields and methods |
| Safari / iOS Safari | **15** | private class **methods** |

That table is the **module-load** floor: below it the SDK fails while the module is evaluating, not at the first call. Two things degrade quietly above it. `{ cause }` on the `Error` constructor needs Chrome 93, Firefox 91 or Safari 15, so below that `err.cause` is `undefined`. More consequentially, **cancellation needs `AbortController.abort(reason)` and `AbortSignal.reason`**, which arrived in Chrome 98, Firefox 97 and Safari 15.4 — between the module-load floor and those versions the engine still aborts the request but produces no typed error at all.

