<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1LinkshorteningMessagingServiceApi — operations

Accessor: `client.messagingV1LinkshorteningMessagingServiceApi` · Source: `src/resources/messaging-v1-linkshortening-messaging-service-api.ts` · 2 operations · Request types: namespace `MessagingV1LinkshorteningMessagingServiceApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createLinkshorteningMessagingService

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createLinkshorteningMessagingService(request: MessagingV1LinkshorteningMessagingServiceApi.CreateLinkshorteningMessagingServiceRequest, options?: RequestOptions): ApiPromise<MessagingV1LinkshorteningMessagingService, ApiError>`
- **Wire**: `POST /v1/LinkShortening/Domains/{DomainSid}/MessagingServices/{MessagingServiceSid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessagingV1LinkshorteningMessagingService`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1LinkshorteningMessagingServiceApi.CreateLinkshorteningMessagingServiceRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `domainSid` | `path` | `DomainSid` | `string` | yes |
| `messagingServiceSid` | `path` | `MessagingServiceSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagingV1LinkshorteningMessagingService` | `messagingV1LinkshorteningMessagingServiceSchema` | `src/models/messaging-v1-linkshortening-messaging-service.ts` |

### deleteLinkshorteningMessagingService

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteLinkshorteningMessagingService(request: MessagingV1LinkshorteningMessagingServiceApi.DeleteLinkshorteningMessagingServiceRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /v1/LinkShortening/Domains/{DomainSid}/MessagingServices/{MessagingServiceSid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1LinkshorteningMessagingServiceApi.DeleteLinkshorteningMessagingServiceRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `domainSid` | `path` | `DomainSid` | `string` | yes |
| `messagingServiceSid` | `path` | `MessagingServiceSid` | `string` | yes |

