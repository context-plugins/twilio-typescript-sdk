<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1ExternalCampaignApi — operations

Accessor: `client.messagingV1ExternalCampaignApi` · Source: `src/resources/messaging-v1-external-campaign-api.ts` · 1 operation · Request types: namespace `MessagingV1ExternalCampaignApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createExternalCampaign

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createExternalCampaign(request: MessagingV1ExternalCampaignApi.CreateExternalCampaignRequest, options?: RequestOptions): ApiPromise<MessagingV1ExternalCampaign, ResponseError>`
- **Wire**: `POST /v1/Services/PreregisteredUsa2p`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `MessagingV1ExternalCampaign`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1ExternalCampaignApi.CreateExternalCampaignRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `campaignId` | `form` | `CampaignId` | `string` | yes |
| `messagingServiceSid` | `form` | `MessagingServiceSid` | `string` | yes |
| `cnpMigration` | `form` | `CnpMigration` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagingV1ExternalCampaign` | `messagingV1ExternalCampaignSchema` | `src/models/messaging-v1-external-campaign.ts` |

