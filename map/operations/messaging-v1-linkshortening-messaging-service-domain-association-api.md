<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1LinkshorteningMessagingServiceDomainAssociationApi — operations

Accessor: `client.messagingV1LinkshorteningMessagingServiceDomainAssociationApi` · Source: `src/resources/messaging-v1-linkshortening-messaging-service-domain-association-api.ts` · 1 operation · Request types: namespace `MessagingV1LinkshorteningMessagingServiceDomainAssociationApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchLinkshorteningMessagingServiceDomainAssociation

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchLinkshorteningMessagingServiceDomainAssociation(request: MessagingV1LinkshorteningMessagingServiceDomainAssociationApi.FetchLinkshorteningMessagingServiceDomainAssociationRequest, options?: RequestOptions): ApiPromise<MessagingV1LinkshorteningMessagingServiceDomainAssociation, ApiError>`
- **Wire**: `GET /v1/LinkShortening/MessagingServices/{MessagingServiceSid}/Domain`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MessagingV1LinkshorteningMessagingServiceDomainAssociation`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1LinkshorteningMessagingServiceDomainAssociationApi.FetchLinkshorteningMessagingServiceDomainAssociationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `messagingServiceSid` | `path` | `MessagingServiceSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagingV1LinkshorteningMessagingServiceDomainAssociation` | `messagingV1LinkshorteningMessagingServiceDomainAssociationSchema` | `src/models/messaging-v1-linkshortening-messaging-service-domain-association.ts` |

