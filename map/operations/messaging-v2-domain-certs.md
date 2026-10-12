<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV2DomainCerts — operations

Accessor: `client.messagingV2DomainCerts` · Source: `src/resources/messaging-v2-domain-certs.ts` · 1 operation · Request types: namespace `MessagingV2DomainCerts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchDomainCertV42

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchDomainCertV42(request: MessagingV2DomainCerts.FetchDomainCertV42Request, options?: RequestOptions): ApiPromise<MessagingV2DomainCertV4, ApiError>`
- **Wire**: `GET /v2/LinkShortening/Domains/{DomainSid}/Certificate`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MessagingV2DomainCertV4`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV2DomainCerts.FetchDomainCertV42Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `domainSid` | `path` | `DomainSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagingV2DomainCertV4` | `messagingV2DomainCertV4Schema` | `src/models/messaging-v2-domain-cert-v4.ts` |

