import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersV1A2PRegistrationDetails = {
  accountSid: string;
  phoneNumberSid: string;
  phoneNumber: string;
  externalPhoneNumberStatus: string;
  campaignSid?: string | null;
  messagingServiceSid?: string | null;
  externalCampaignId?: string | null;
  lastUpdated?: Date | null;
};

export const numbersV1A2PRegistrationDetailsSchema: Schema<NumbersV1A2PRegistrationDetails> =
  s.object<NumbersV1A2PRegistrationDetails>({
    accountSid: s.string(),
    phoneNumberSid: s.string(),
    phoneNumber: s.string(),
    externalPhoneNumberStatus: s.string(),
    campaignSid: s.optionalNullable(s.string()),
    messagingServiceSid: s.optionalNullable(s.string()),
    externalCampaignId: s.optionalNullable(s.string()),
    lastUpdated: s.optionalNullable(s.dateTime()),
  });
