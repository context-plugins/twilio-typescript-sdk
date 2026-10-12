import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { campaignFrequencySchema, type CampaignFrequency } from "./campaign-frequency.js";
import { customerCareChannelSchema, type CustomerCareChannel } from "./customer-care-channel.js";
import {
  tollfreeVerificationEnumUseCaseCategorySchema,
  type TollfreeVerificationEnumUseCaseCategory,
} from "./tollfree-verification-enum-use-case-category.js";

/** SMS campaign details for the application. */
export type SmsCampaignDetails = {
  campaignName?: string;
  campaignBrandWebsite?: string;
  customerCareChannel?: CustomerCareChannel;
  customerCareValue?: string;
  campaignFrequency?: CampaignFrequency[];
  scUseCaseCategories?: TollfreeVerificationEnumUseCaseCategory[];
  smsTermsOfServiceUrl?: string;
  smsPrivacyPolicyUrl?: string;
  monthlyOutboundVolumeExpected?: string;
  monthlyInboundVolumeExpected?: string;
  avgMonthlyMessagesSentToEachSubscriber?: string;
  avgMonthlyMessagesReceivedFromSubscribers?: string;
  estimatedTotalSubscribers?: string;
  durationOfTheCampaign?: string;
  plannedTrafficSpikes?: string;
  spikeDetails?: string;
  expectedTrafficStartDate?: string;
};

export const smsCampaignDetailsSchema: Schema<SmsCampaignDetails> = s.object<SmsCampaignDetails>({
  campaignName: s.optional(s.string()),
  campaignBrandWebsite: s.optional(s.string()),
  customerCareChannel: s.optional(s.lazy(() => customerCareChannelSchema)),
  customerCareValue: s.optional(s.string()),
  campaignFrequency: s.optional(s.array(s.lazy(() => campaignFrequencySchema))),
  scUseCaseCategories: s.optional(s.array(s.lazy(() => tollfreeVerificationEnumUseCaseCategorySchema))),
  smsTermsOfServiceUrl: s.optional(s.string()),
  smsPrivacyPolicyUrl: s.optional(s.string()),
  monthlyOutboundVolumeExpected: s.optional(s.string()),
  monthlyInboundVolumeExpected: s.optional(s.string()),
  avgMonthlyMessagesSentToEachSubscriber: s.optional(s.string()),
  avgMonthlyMessagesReceivedFromSubscribers: s.optional(s.string()),
  estimatedTotalSubscribers: s.optional(s.string()),
  durationOfTheCampaign: s.optional(s.string()),
  plannedTrafficSpikes: s.optional(s.string()),
  spikeDetails: s.optional(s.string()),
  expectedTrafficStartDate: s.optional(s.string()),
  _keysMap: {
    campaignName: "campaign_name",
    campaignBrandWebsite: "campaign_brand_website",
    customerCareChannel: "customer_care_channel",
    customerCareValue: "customer_care_value",
    campaignFrequency: "campaign_frequency",
    scUseCaseCategories: "sc_use_case_categories",
    smsTermsOfServiceUrl: "sms_terms_of_service_url",
    smsPrivacyPolicyUrl: "sms_privacy_policy_url",
    monthlyOutboundVolumeExpected: "monthly_outbound_volume_expected",
    monthlyInboundVolumeExpected: "monthly_inbound_volume_expected",
    avgMonthlyMessagesSentToEachSubscriber: "avg_monthly_messages_sent_to_each_subscriber",
    avgMonthlyMessagesReceivedFromSubscribers: "avg_monthly_messages_received_from_subscribers",
    estimatedTotalSubscribers: "estimated_total_subscribers",
    durationOfTheCampaign: "duration_of_the_campaign",
    plannedTrafficSpikes: "planned_traffic_spikes",
    spikeDetails: "spike_details",
    expectedTrafficStartDate: "expected_traffic_start_date",
  },
});
