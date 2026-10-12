import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagingV1ExternalCampaign = {
  /**
   * The unique string that identifies a US A2P Compliance resource
   * `QE2c6890da8086d771620e9b13fadeba0b`.
   */
  sid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that the Campaign belongs
   * to.
   */
  accountSid?: string | null;
  /** ID of the preregistered campaign. */
  campaignId?: string | null;
  /**
   * The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/api/service-resource)
   * that the resource is associated with.
   */
  messagingServiceSid?: string | null;
  /**
   * The date and time in GMT when the resource was created specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
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
