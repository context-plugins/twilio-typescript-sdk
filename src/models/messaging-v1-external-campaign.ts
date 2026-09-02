import { s, type Schema } from "../core/index.js";

export type MessagingV1ExternalCampaign = {
  sid?: string | null;
  accountSid?: string | null;
  campaignId?: string | null;
  messagingServiceSid?: string | null;
  dateCreated?: Date | null;
};

export const messagingV1ExternalCampaignSchema: Schema<MessagingV1ExternalCampaign> =
  s.object<MessagingV1ExternalCampaign>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    campaignId: s.optionalNullable(s.string()),
    messagingServiceSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    _keysMap: {
      accountSid: "account_sid",
      campaignId: "campaign_id",
      messagingServiceSid: "messaging_service_sid",
      dateCreated: "date_created",
    },
  });
