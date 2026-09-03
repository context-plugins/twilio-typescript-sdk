<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1DomainConfigMessagingServiceApi — operations

Accessor: `client.messagingV1DomainConfigMessagingServiceApi` · Source: `src/resources/messaging-v1-domain-config-messaging-service-api.ts` · 1 operation · Request types: namespace `MessagingV1DomainConfigMessagingServiceApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchDomainConfigMessagingService

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchDomainConfigMessagingService(request: MessagingV1DomainConfigMessagingServiceApi.FetchDomainConfigMessagingServiceRequest, options?: RequestOptions): ApiPromise<MessagingV1DomainConfigMessagingService, ResponseError>`
- **Wire**: `GET /v1/LinkShortening/MessagingService/{MessagingServiceSid}/DomainConfig`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MessagingV1DomainConfigMessagingService`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1DomainConfigMessagingServiceApi.FetchDomainConfigMessagingServiceRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `messagingServiceSid` | `path` | `MessagingServiceSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagingV1DomainConfigMessagingService` | `messagingV1DomainConfigMessagingServiceSchema` | `src/models/messaging-v1-domain-config-messaging-service.ts` |

