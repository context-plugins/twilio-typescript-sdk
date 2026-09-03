import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersV1A2PBrandCampaignComplianceRegistrationSids = {
  campaignComplianceRegistrationSid?: string | null;
  brandComplianceRegistrationSid?: string | null;
};

export const numbersV1A2PBrandCampaignComplianceRegistrationSidsSchema: Schema<NumbersV1A2PBrandCampaignComplianceRegistrationSids> =
  s.object<NumbersV1A2PBrandCampaignComplianceRegistrationSids>({
    campaignComplianceRegistrationSid: s.optionalNullable(s.string()),
    brandComplianceRegistrationSid: s.optionalNullable(s.string()),
  });
