<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Feedback — operations

Accessor: `client.api20100401Feedback` · Source: `src/resources/api20100401-feedback.ts` · 1 operation · Request types: namespace `Api20100401Feedback`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createMessageFeedback

- **Signature**: `createMessageFeedback(request: Api20100401Feedback.CreateMessageFeedbackRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountMessageMessageFeedback, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Feedback.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountMessageMessageFeedback`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Feedback.CreateMessageFeedbackRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `messageSid` | `path` | `MessageSid` | `string` | yes |
| `outcome` | `form` | `Outcome` | `MessageFeedbackEnumOutcome` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessageFeedbackEnumOutcome` | `messageFeedbackEnumOutcomeSchema` | `src/models/message-feedback-enum-outcome.ts` |
| `ApiV2010AccountMessageMessageFeedback` | `apiV2010AccountMessageMessageFeedbackSchema` | `src/models/api-v2010-account-message-message-feedback.ts` |

