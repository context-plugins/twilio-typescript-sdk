import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CountryRequirement = {
  /** Iso country code as per ISO 3166-1 alpha-2 standard */
  isoCountry: string;
  /** Whether Sender ID needs to be pre-registered for the country */
  registrationRequired: boolean;
  /**
   * Twilio SLA for Sender Id Registration process in business days. For countries requiring dynamic
   * registration, it will be set to 0.
   */
  slaInDays: number;
  /** Whether promotional usage for Sender ID is supported */
  promotionalSupported?: boolean;
  /** Mandatory prefix string for Sender ID when used for promotional purpose in the country */
  promotionalSenderIdPrefix?: string | null;
  /** Mandatory suffix string for Sender ID when used for promotional purpose in the country */
  promotionalSenderIdSuffix?: string | null;
  /** Represents pricing requirements for country with free-flowing string format */
  pricingScheme?: string | null;
  /**
   * Represents public Twilio support URL which has information regarding the instructions and
   * documents required for registration
   */
  documentationUrl?: string | null;
  /**
   * Represents the Twilio public URL for documentation template required to be filled for the
   * Sender ID registration
   */
  documentationTemplateUrl?: string | null;
  /** List of document type machine names */
  documentTypeMachineNames?: string[];
  /** List of document type machine names for Domestic traffic reach */
  domesticDocumentTypeMachineNames?: string[];
  /** List of document type machine names for International traffic reach */
  internationalDocumentTypeMachineNames?: string[];
  /** Sender ID string rules for the country */
  senderIdRegistrationRules?: string | null;
  /** Whether USO (Unified Sender Onboarding) is enabled for this country */
  usoEnabled?: boolean | null;
};

export const countryRequirementSchema: Schema<CountryRequirement> = s.object<CountryRequirement>({
  isoCountry: s.string(),
  registrationRequired: s.boolean(),
  slaInDays: s.int(),
  promotionalSupported: s.optional(s.boolean()),
  promotionalSenderIdPrefix: s.optionalNullable(s.string()),
  promotionalSenderIdSuffix: s.optionalNullable(s.string()),
  pricingScheme: s.optionalNullable(s.string()),
  documentationUrl: s.optionalNullable(s.string()),
  documentationTemplateUrl: s.optionalNullable(s.string()),
  documentTypeMachineNames: s.optional(s.array(s.string())),
  domesticDocumentTypeMachineNames: s.optional(s.array(s.string())),
  internationalDocumentTypeMachineNames: s.optional(s.array(s.string())),
  senderIdRegistrationRules: s.optionalNullable(s.string()),
  usoEnabled: s.optionalNullable(s.boolean()),
  _keysMap: {
    isoCountry: "iso_country",
    registrationRequired: "registration_required",
    slaInDays: "sla_in_days",
    promotionalSupported: "promotional_supported",
    promotionalSenderIdPrefix: "promotional_sender_id_prefix",
    promotionalSenderIdSuffix: "promotional_sender_id_suffix",
    pricingScheme: "pricing_scheme",
    documentationUrl: "documentation_url",
    documentationTemplateUrl: "documentation_template_url",
    documentTypeMachineNames: "document_type_machine_names",
    domesticDocumentTypeMachineNames: "domestic_document_type_machine_names",
    internationalDocumentTypeMachineNames: "international_document_type_machine_names",
    senderIdRegistrationRules: "sender_id_registration_rules",
    usoEnabled: "uso_enabled",
  },
});
