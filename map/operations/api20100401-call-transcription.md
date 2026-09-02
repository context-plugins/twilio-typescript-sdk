<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401CallTranscription — operations

Accessor: `client.api20100401CallTranscription` · Source: `src/resources/api20100401-call-transcription.ts` · 2 operations · Request types: namespace `Api20100401CallTranscription`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createRealtimeTranscription

- **Signature**: `createRealtimeTranscription(request: Api20100401CallTranscription.CreateRealtimeTranscriptionRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountCallRealtimeTranscription, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Transcriptions.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountCallRealtimeTranscription`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401CallTranscription.CreateRealtimeTranscriptionRequest` (20):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `callSid` | `path` | `CallSid` | `string` | yes |
| `name` | `form` | `Name` | `string` | no |
| `track` | `form` | `Track` | `RealtimeTranscriptionEnumTrack` | no |
| `statusCallbackUrl` | `form` | `StatusCallbackUrl` | `string` | no |
| `statusCallbackMethod` | `form` | `StatusCallbackMethod` | `StatusCallbackMethod17` | no |
| `inboundTrackLabel` | `form` | `InboundTrackLabel` | `string` | no |
| `outboundTrackLabel` | `form` | `OutboundTrackLabel` | `string` | no |
| `partialResults` | `form` | `PartialResults` | `boolean` | no |
| `languageCode` | `form` | `LanguageCode` | `string` | no |
| `transcriptionEngine` | `form` | `TranscriptionEngine` | `string` | no |
| `profanityFilter` | `form` | `ProfanityFilter` | `boolean` | no |
| `speechModel` | `form` | `SpeechModel` | `string` | no |
| `hints` | `form` | `Hints` | `string` | no |
| `enableAutomaticPunctuation` | `form` | `EnableAutomaticPunctuation` | `boolean` | no |
| `intelligenceService` | `form` | `IntelligenceService` | `string` | no |
| `conversationConfiguration` | `form` | `ConversationConfiguration` | `string` | no |
| `conversationId` | `form` | `ConversationId` | `string` | no |
| `transcriptionConfigurationId` | `form` | `TranscriptionConfigurationId` | `string` | no |
| `enableProviderData` | `form` | `EnableProviderData` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RealtimeTranscriptionEnumTrack` | `realtimeTranscriptionEnumTrackSchema` | `src/models/realtime-transcription-enum-track.ts` |
| `StatusCallbackMethod17` | `statusCallbackMethod17Schema` | `src/models/status-callback-method17.ts` |
| `ApiV2010AccountCallRealtimeTranscription` | `apiV2010AccountCallRealtimeTranscriptionSchema` | `src/models/api-v2010-account-call-realtime-transcription.ts` |

### updateRealtimeTranscription

- **Signature**: `updateRealtimeTranscription(request: Api20100401CallTranscription.UpdateRealtimeTranscriptionRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountCallRealtimeTranscription, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Transcriptions/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountCallRealtimeTranscription`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401CallTranscription.UpdateRealtimeTranscriptionRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `callSid` | `path` | `CallSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `status` | `form` | `Status` | `RealtimeTranscriptionEnumUpdateStatus` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RealtimeTranscriptionEnumUpdateStatus` | `realtimeTranscriptionEnumUpdateStatusSchema` | `src/models/realtime-transcription-enum-update-status.ts` |
| `ApiV2010AccountCallRealtimeTranscription` | `apiV2010AccountCallRealtimeTranscriptionSchema` | `src/models/api-v2010-account-call-realtime-transcription.ts` |

