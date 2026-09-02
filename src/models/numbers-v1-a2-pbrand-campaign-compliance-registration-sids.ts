import { s, type Schema } from "../core/index.js";

export type NumbersV1A2PBrandCampaignComplianceRegistrationSids = {
  campaignComplianceRegistrationSid?: string | null;
  brandComplianceRegistrationSid?: string | null;
};

export const numbersV1A2PBrandCampaignComplianceRegistrationSidsSchema: Schema<NumbersV1A2PBrandCampaignComplianceRegistrationSids> =
  s.object<NumbersV1A2PBrandCampaignComplianceRegistrationSids>({
    campaignComplianceRegistrationSid: s.optionalNullable(s.string()),
    brandComplianceRegistrationSid: s.optionalNullable(s.string()),
  });
