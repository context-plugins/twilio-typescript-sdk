import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CampaignFrequency = {
  OneMessagePerSignup: "ONE_MESSAGE_PER_SIGNUP",
  LimitedNumberOfMessagesPerSignup: "LIMITED_NUMBER_OF_MESSAGES_PER_SIGNUP",
  LimitedNumberOfMessagesAtRecurringIntervals: "LIMITED_NUMBER_OF_MESSAGES_AT_RECURRING_INTERVALS",
  VariableNumberOfMessagesAtUnpredictableIntervals: "VARIABLE_NUMBER_OF_MESSAGES_AT_UNPREDICTABLE_INTERVALS",
  LimitedNumberOfMessagesInResponseToKeywords: "LIMITED_NUMBER_OF_MESSAGES_IN_RESPONSE_TO_KEYWORDS",
} as const;
export type CampaignFrequency = (typeof CampaignFrequency)[keyof typeof CampaignFrequency] | (string & {});

export const campaignFrequencySchema: EnumSchema<CampaignFrequency> =
  s.enumOf<CampaignFrequency>(CampaignFrequency);
