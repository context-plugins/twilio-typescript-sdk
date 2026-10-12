import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersV1A2PBrandCampaignComplianceRegistrationSids = {
  /** Sid associated with campaign compliance registration */
  campaignComplianceRegistrationSid?: string | null;
  /** Sid associated with brand compliance registration */
  brandComplianceRegistrationSid?: string | null;
};

export const numbersV1A2PBrandCampaignComplianceRegistrationSidsSchema: Schema<NumbersV1A2PBrandCampaignComplianceRegistrationSids> =
  s.object<NumbersV1A2PBrandCampaignComplianceRegistrationSids>({
    campaignComplianceRegistrationSid: s.optionalNullable(s.string()),
    brandComplianceRegistrationSid: s.optionalNullable(s.string()),
  });
