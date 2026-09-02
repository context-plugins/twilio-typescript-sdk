<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1BrandRegistrationOtp — operations

Accessor: `client.messagingV1BrandRegistrationOtp` · Source: `src/resources/messaging-v1-brand-registration-otp.ts` · 1 operation · Request types: namespace `MessagingV1BrandRegistrationOtp`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createBrandRegistrationOtp

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createBrandRegistrationOtp(request: MessagingV1BrandRegistrationOtp.CreateBrandRegistrationOtpRequest, options?: RequestOptions): ApiPromise<MessagingV1BrandRegistrationsBrandRegistrationOtp, ResponseError>`
- **Wire**: `POST /v1/a2p/BrandRegistrations/{BrandRegistrationSid}/SmsOtp`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MessagingV1BrandRegistrationsBrandRegistrationOtp`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1BrandRegistrationOtp.CreateBrandRegistrationOtpRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `brandRegistrationSid` | `path` | `BrandRegistrationSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagingV1BrandRegistrationsBrandRegistrationOtp` | `messagingV1BrandRegistrationsBrandRegistrationOtpSchema` | `src/models/messaging-v1-brand-registrations-brand-registration-otp.ts` |

