import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagingV1ServiceUsAppToPersonV2 = {
  sid?: string | null;
  accountSid?: string | null;
  brandRegistrationSid?: string | null;
  messagingServiceSid?: string | null;
  description?: string | null;
  messageSamples?: string[] | null;
  usAppToPersonUsecase?: string | null;
  hasEmbeddedLinks?: boolean | null;
  hasEmbeddedPhone?: boolean | null;
  subscriberOptIn?: boolean | null;
  ageGated?: boolean | null;
  directLending?: boolean | null;
  campaignStatus?: string | null;
  campaignId?: string | null;
  isExternallyRegistered?: boolean | null;
  rateLimits?: Record<string, unknown> | null;
  messageFlow?: string | null;
  optInMessage?: string | null;
  optOutMessage?: string | null;
  helpMessage?: string | null;
  optInKeywords?: string[] | null;
  optOutKeywords?: string[] | null;
  helpKeywords?: string[] | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;
  mock?: boolean | null;
  errors?: Record<string, unknown>[] | null;
  privacyPolicyUrl: string | null;
  termsAndConditionsUrl: string | null;
};

export const messagingV1ServiceUsAppToPersonV2Schema: Schema<MessagingV1ServiceUsAppToPersonV2> =
  s.object<MessagingV1ServiceUsAppToPersonV2>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    brandRegistrationSid: s.optionalNullable(s.string()),
    messagingServiceSid: s.optionalNullable(s.string()),
    description: s.optionalNullable(s.string()),
    messageSamples: s.optionalNullable(s.array(s.string())),
    usAppToPersonUsecase: s.optionalNullable(s.string()),
    hasEmbeddedLinks: s.optionalNullable(s.boolean()),
    hasEmbeddedPhone: s.optionalNullable(s.boolean()),
    subscriberOptIn: s.optionalNullable(s.boolean()),
    ageGated: s.optionalNullable(s.boolean()),
    directLending: s.optionalNullable(s.boolean()),
    campaignStatus: s.optionalNullable(s.string()),
    campaignId: s.optionalNullable(s.string()),
    isExternallyRegistered: s.optionalNullable(s.boolean()),
    rateLimits: s.optionalNullable(s.record(s.string(), s.unknown())),
    messageFlow: s.optionalNullable(s.string()),
    optInMessage: s.optionalNullable(s.string()),
    optOutMessage: s.optionalNullable(s.string()),
    helpMessage: s.optionalNullable(s.string()),
    optInKeywords: s.optionalNullable(s.array(s.string())),
    optOutKeywords: s.optionalNullable(s.array(s.string())),
    helpKeywords: s.optionalNullable(s.array(s.string())),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    mock: s.optionalNullable(s.boolean()),
    errors: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
    privacyPolicyUrl: s.nullable(s.string()),
    termsAndConditionsUrl: s.nullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      brandRegistrationSid: "brand_registration_sid",
      messagingServiceSid: "messaging_service_sid",
      messageSamples: "message_samples",
      usAppToPersonUsecase: "us_app_to_person_usecase",
      hasEmbeddedLinks: "has_embedded_links",
      hasEmbeddedPhone: "has_embedded_phone",
      subscriberOptIn: "subscriber_opt_in",
      ageGated: "age_gated",
      directLending: "direct_lending",
      campaignStatus: "campaign_status",
      campaignId: "campaign_id",
      isExternallyRegistered: "is_externally_registered",
      rateLimits: "rate_limits",
      messageFlow: "message_flow",
      optInMessage: "opt_in_message",
      optOutMessage: "opt_out_message",
      helpMessage: "help_message",
      optInKeywords: "opt_in_keywords",
      optOutKeywords: "opt_out_keywords",
      helpKeywords: "help_keywords",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      privacyPolicyUrl: "privacy_policy_url",
      termsAndConditionsUrl: "terms_and_conditions_url",
    },
  });
