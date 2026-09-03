import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersV2A2PRegistrationDetailsFetch = {
  accountSid: string;
  phoneNumberSid: string;
  phoneNumber: string;
  externalPhoneNumberStatus: string;
  campaignSid?: string | null;
  messagingServiceSid?: string | null;
  externalCampaignId?: string | null;
  lastUpdated?: Date | null;
  brandRegistrationSid?: string | null;
  externalBrandId?: string | null;
};

export const numbersV2A2PRegistrationDetailsFetchSchema: Schema<NumbersV2A2PRegistrationDetailsFetch> =
  s.object<NumbersV2A2PRegistrationDetailsFetch>({
    accountSid: s.string(),
    phoneNumberSid: s.string(),
    phoneNumber: s.string(),
    externalPhoneNumberStatus: s.string(),
    campaignSid: s.optionalNullable(s.string()),
    messagingServiceSid: s.optionalNullable(s.string()),
    externalCampaignId: s.optionalNullable(s.string()),
    lastUpdated: s.optionalNullable(s.dateTime()),
    brandRegistrationSid: s.optionalNullable(s.string()),
    externalBrandId: s.optionalNullable(s.string()),
  });
