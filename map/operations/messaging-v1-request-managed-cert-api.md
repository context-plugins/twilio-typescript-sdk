<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1RequestManagedCertApi — operations

Accessor: `client.messagingV1RequestManagedCertApi` · Source: `src/resources/messaging-v1-request-managed-cert-api.ts` · 1 operation · Request types: namespace `MessagingV1RequestManagedCertApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### updateRequestManagedCert

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateRequestManagedCert(request: MessagingV1RequestManagedCertApi.UpdateRequestManagedCertRequest, options?: RequestOptions): ApiPromise<MessagingV1RequestManagedCert, ResponseError>`
- **Wire**: `POST /v1/LinkShortening/Domains/{DomainSid}/RequestManagedCert`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MessagingV1RequestManagedCert`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1RequestManagedCertApi.UpdateRequestManagedCertRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `domainSid` | `path` | `DomainSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagingV1RequestManagedCert` | `messagingV1RequestManagedCertSchema` | `src/models/messaging-v1-request-managed-cert.ts` |

