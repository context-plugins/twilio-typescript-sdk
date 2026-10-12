import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersV1A2PRegistrationDetails = {
  /**
   * Account Sid that the phone number belongs to in Twilio. This is only returned for phone numbers
   * that already exist in Twilio’s inventory and belong to your account or sub account.
   */
  accountSid: string;
  /** Phone Number SID for the requested phone number resource */
  phoneNumberSid: string;
  phoneNumber: string;
  externalPhoneNumberStatus: string;
  /** Campaign Sid associated with the phone number */
  campaignSid?: string | null;
  /** Messaging Service Sid that the number is associated with */
  messagingServiceSid?: string | null;
  /** The identifier for a campaign in the registrar. Typically, this is the TCR Campaign Id. */
  externalCampaignId?: string | null;
  /** The date and time when the A2P registration details were last updated */
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
