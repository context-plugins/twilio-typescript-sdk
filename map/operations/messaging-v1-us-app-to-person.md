<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1UsAppToPerson — operations

Accessor: `client.messagingV1UsAppToPerson` · Source: `src/resources/messaging-v1-us-app-to-person.ts` · 5 operations · Request types: namespace `MessagingV1UsAppToPerson`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createUsAppToPerson

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createUsAppToPerson(request: MessagingV1UsAppToPerson.CreateUsAppToPersonRequest, options?: RequestOptions): ApiPromise<MessagingV1ServiceUsAppToPersonResponse, ResponseError>`
- **Wire**: `POST /v1/Services/{MessagingServiceSid}/Compliance/Usa2p`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `MessagingV1ServiceUsAppToPersonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1UsAppToPerson.CreateUsAppToPersonRequest` (20):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `messagingServiceSid` | `path` | `MessagingServiceSid` | `string` | yes |
| `xTwilioApiVersion` | `header` | `X-Twilio-Api-Version` | `string` | no |
| `brandRegistrationSid` | `form` | `BrandRegistrationSid` | `string` | yes |
| `description` | `form` | `Description` | `string` | yes |
| `messageFlow` | `form` | `MessageFlow` | `string` | yes |
| `messageSamples` | `form` | `MessageSamples` | `string[]` | yes |
| `usAppToPersonUsecase` | `form` | `UsAppToPersonUsecase` | `string` | yes |
| `hasEmbeddedLinks` | `form` | `HasEmbeddedLinks` | `boolean` | yes |
| `hasEmbeddedPhone` | `form` | `HasEmbeddedPhone` | `boolean` | yes |
| `optInMessage` | `form` | `OptInMessage` | `string` | no |
| `optOutMessage` | `form` | `OptOutMessage` | `string` | no |
| `helpMessage` | `form` | `HelpMessage` | `string` | no |
| `optInKeywords` | `form` | `OptInKeywords` | `string[]` | no |
| `optOutKeywords` | `form` | `OptOutKeywords` | `string[]` | no |
| `helpKeywords` | `form` | `HelpKeywords` | `string[]` | no |
| `subscriberOptIn` | `form` | `SubscriberOptIn` | `boolean` | no |
| `ageGated` | `form` | `AgeGated` | `boolean` | no |
| `directLending` | `form` | `DirectLending` | `boolean` | no |
| `privacyPolicyUrl` | `form` | `PrivacyPolicyUrl` | `string` | no |
| `termsAndConditionsUrl` | `form` | `TermsAndConditionsUrl` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagingV1ServiceUsAppToPersonResponse` | `messagingV1ServiceUsAppToPersonResponseSchema` | `src/models/unions/messaging-v1-service-us-app-to-person-response.ts` |

### deleteUsAppToPerson

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteUsAppToPerson(request: MessagingV1UsAppToPerson.DeleteUsAppToPersonRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Services/{MessagingServiceSid}/Compliance/Usa2p/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1UsAppToPerson.DeleteUsAppToPersonRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `messagingServiceSid` | `path` | `MessagingServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchUsAppToPerson

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchUsAppToPerson(request: MessagingV1UsAppToPerson.FetchUsAppToPersonRequest, options?: RequestOptions): ApiPromise<MessagingV1ServiceUsAppToPersonResponse, ResponseError>`
- **Wire**: `GET /v1/Services/{MessagingServiceSid}/Compliance/Usa2p/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MessagingV1ServiceUsAppToPersonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1UsAppToPerson.FetchUsAppToPersonRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `messagingServiceSid` | `path` | `MessagingServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `xTwilioApiVersion` | `header` | `X-Twilio-Api-Version` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagingV1ServiceUsAppToPersonResponse` | `messagingV1ServiceUsAppToPersonResponseSchema` | `src/models/unions/messaging-v1-service-us-app-to-person-response.ts` |

### listUsAppToPerson

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listUsAppToPerson(request: MessagingV1UsAppToPerson.ListUsAppToPersonRequest, options?: RequestOptions): ApiPromise<ListUsAppToPersonResponse, ResponseError>`
- **Wire**: `GET /v1/Services/{MessagingServiceSid}/Compliance/Usa2p`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListUsAppToPersonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1UsAppToPerson.ListUsAppToPersonRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `messagingServiceSid` | `path` | `MessagingServiceSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |
| `xTwilioApiVersion` | `header` | `X-Twilio-Api-Version` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListUsAppToPersonResponse` | `listUsAppToPersonResponseSchema` | `src/models/list-us-app-to-person-response.ts` |

### updateUsAppToPerson

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateUsAppToPerson(request: MessagingV1UsAppToPerson.UpdateUsAppToPersonRequest, options?: RequestOptions): ApiPromise<MessagingV1ServiceUsAppToPersonResponse, ResponseError>`
- **Wire**: `POST /v1/Services/{MessagingServiceSid}/Compliance/Usa2p/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `MessagingV1ServiceUsAppToPersonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1UsAppToPerson.UpdateUsAppToPersonRequest` (12):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `messagingServiceSid` | `path` | `MessagingServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `xTwilioApiVersion` | `header` | `X-Twilio-Api-Version` | `string` | no |
| `hasEmbeddedLinks` | `form` | `HasEmbeddedLinks` | `boolean` | yes |
| `hasEmbeddedPhone` | `form` | `HasEmbeddedPhone` | `boolean` | yes |
| `messageSamples` | `form` | `MessageSamples` | `string[]` | yes |
| `messageFlow` | `form` | `MessageFlow` | `string` | yes |
| `description` | `form` | `Description` | `string` | yes |
| `ageGated` | `form` | `AgeGated` | `boolean` | yes |
| `directLending` | `form` | `DirectLending` | `boolean` | yes |
| `privacyPolicyUrl` | `form` | `PrivacyPolicyUrl` | `string` | no |
| `termsAndConditionsUrl` | `form` | `TermsAndConditionsUrl` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagingV1ServiceUsAppToPersonResponse` | `messagingV1ServiceUsAppToPersonResponseSchema` | `src/models/unions/messaging-v1-service-us-app-to-person-response.ts` |

