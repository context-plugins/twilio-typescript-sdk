<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1DomainValidateDns — operations

Accessor: `client.messagingV1DomainValidateDns` · Source: `src/resources/messaging-v1-domain-validate-dns.ts` · 1 operation · Request types: namespace `MessagingV1DomainValidateDns`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchDomainDnsValidation

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchDomainDnsValidation(request: MessagingV1DomainValidateDns.FetchDomainDnsValidationRequest, options?: RequestOptions): ApiPromise<MessagingV1DomainDnsValidation, ResponseError>`
- **Wire**: `GET /v1/LinkShortening/Domains/{DomainSid}/ValidateDns`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MessagingV1DomainDnsValidation`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1DomainValidateDns.FetchDomainDnsValidationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `domainSid` | `path` | `DomainSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagingV1DomainDnsValidation` | `messagingV1DomainDnsValidationSchema` | `src/models/messaging-v1-domain-dns-validation.ts` |

