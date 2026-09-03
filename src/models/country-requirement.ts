import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CountryRequirement = {
  isoCountry: string;
  registrationRequired: boolean;
  slaInDays: number;
  promotionalSupported?: boolean;
  promotionalSenderIdPrefix?: string | null;
  promotionalSenderIdSuffix?: string | null;
  pricingScheme?: string | null;
  documentationUrl?: string | null;
  documentationTemplateUrl?: string | null;
  documentTypeMachineNames?: string[];
  domesticDocumentTypeMachineNames?: string[];
  internationalDocumentTypeMachineNames?: string[];
  senderIdRegistrationRules?: string | null;
  usoEnabled?: boolean | null;
};

export const countryRequirementSchema: Schema<CountryRequirement> = s.object<CountryRequirement>({
  isoCountry: s.string(),
  registrationRequired: s.boolean(),
  slaInDays: s.number(),
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
