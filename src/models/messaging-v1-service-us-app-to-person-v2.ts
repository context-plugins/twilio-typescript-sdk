import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagingV1ServiceUsAppToPersonV2 = {
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
  /** The unique string to identify the A2P brand. */
  brandRegistrationSid?: string | null;
  /**
   * The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/api/service-resource)
   * that the resource is associated with.
   */
  messagingServiceSid?: string | null;
  /**
   * A short description of what this SMS campaign does. Min length: 40 characters. Max length: 4096
   * characters.
   */
  description?: string | null;
  /**
   * An array of sample message strings, min two and max five. Min length for each sample: 20 chars.
   * Max length for each sample: 1024 chars.
   */
  messageSamples?: string[] | null;
  /**
   * A2P Campaign Use Case. Examples: [ 2FA, EMERGENCY, MARKETING, SOLE_PROPRIETOR...].
   * SOLE_PROPRIETOR campaign use cases can only be created by SOLE_PROPRIETOR Brands, and there can
   * only be one SOLE_PROPRIETOR campaign created per SOLE_PROPRIETOR Brand.
   */
  usAppToPersonUsecase?: string | null;
  /** Indicate that this SMS campaign will send messages that contain links. */
  hasEmbeddedLinks?: boolean | null;
  /** Indicates that this SMS campaign will send messages that contain phone numbers. */
  hasEmbeddedPhone?: boolean | null;
  /** A boolean that specifies whether campaign has Subscriber Optin or not. */
  subscriberOptIn?: boolean | null;
  /** A boolean that specifies whether campaign is age gated or not. */
  ageGated?: boolean | null;
  /** A boolean that specifies whether campaign allows direct lending or not. */
  directLending?: boolean | null;
  /** Campaign status. Examples: IN_PROGRESS, VERIFIED, FAILED. */
  campaignStatus?: string | null;
  /** The Campaign Registry (TCR) Campaign ID. */
  campaignId?: string | null;
  /** Indicates whether the campaign was registered externally or not. */
  isExternallyRegistered?: boolean | null;
  /** Rate limit and/or classification set by each carrier, Ex. AT&T or T-Mobile. */
  rateLimits?: Record<string, unknown> | null;
  /**
   * Details around how a consumer opts-in to their campaign, therefore giving consent to receive
   * their messages. If multiple opt-in methods can be used for the same campaign, they must all be
   * listed. 40 character minimum. 2048 character maximum.
   */
  messageFlow?: string | null;
  /**
   * If end users can text in a keyword to start receiving messages from this campaign, the
   * auto-reply messages sent to the end users must be provided. The opt-in response should include
   * the Brand name, confirmation of opt-in enrollment to a recurring message campaign, how to get
   * help, and clear description of how to opt-out. This field is required if end users can text in
   * a keyword to start receiving messages from this campaign. 20 character minimum. 320 character
   * maximum.
   */
  optInMessage?: string | null;
  /**
   * Upon receiving the opt-out keywords from the end users, Twilio customers are expected to send
   * back an auto-generated response, which must provide acknowledgment of the opt-out request and
   * confirmation that no further messages will be sent. It is also recommended that these opt-out
   * messages include the brand name. This field is required if managing opt out keywords yourself
   * (i.e. not using Twilio's Default or Advanced Opt Out features). 20 character minimum. 320
   * character maximum.
   */
  optOutMessage?: string | null;
  /**
   * When customers receive the help keywords from their end users, Twilio customers are expected to
   * send back an auto-generated response; this may include the brand name and additional support
   * contact information. This field is required if managing help keywords yourself (i.e. not using
   * Twilio's Default or Advanced Opt Out features). 20 character minimum. 320 character maximum.
   */
  helpMessage?: string | null;
  /**
   * If end users can text in a keyword to start receiving messages from this campaign, those
   * keywords must be provided. This field is required if end users can text in a keyword to start
   * receiving messages from this campaign. Values must be alphanumeric. 255 character maximum.
   */
  optInKeywords?: string[] | null;
  /**
   * End users should be able to text in a keyword to stop receiving messages from this campaign.
   * Those keywords must be provided. This field is required if managing opt out keywords yourself
   * (i.e. not using Twilio's Default or Advanced Opt Out features). Values must be alphanumeric.
   * 255 character maximum.
   */
  optOutKeywords?: string[] | null;
  /**
   * End users should be able to text in a keyword to receive help. Those keywords must be provided
   * as part of the campaign registration request. This field is required if managing help keywords
   * yourself (i.e. not using Twilio's Default or Advanced Opt Out features). Values must be
   * alphanumeric. 255 character maximum.
   */
  helpKeywords?: string[] | null;
  /**
   * The date and time in GMT when the resource was created specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated?: Date | null;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated?: Date | null;
  /** The absolute URL of the US App to Person resource. */
  url?: string | null;
  /**
   * A boolean that specifies whether campaign is a mock or not. Mock campaigns will be
   * automatically created if using a mock brand. Mock campaigns should only be used for testing
   * purposes.
   */
  mock?: boolean | null;
  /**
   * Details indicating why a campaign registration failed. These errors can indicate one or more
   * fields that were incorrect or did not meet review requirements.
   */
  errors?: Record<string, unknown>[] | null;
  /** The URL of the privacy policy for the campaign. */
  privacyPolicyUrl: string | null;
  /** The URL of the terms and conditions for the campaign. */
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
