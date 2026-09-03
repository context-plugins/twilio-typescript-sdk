import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { senderIdPurposeSchema, type SenderIdPurpose } from "./sender-id-purpose.js";

export type CreateSenderIdRegistration = {
  isoCountries?: string[];
  companySubsidiary: boolean;
  businessProfileSid?: string;
  identitySid?: string;
  addressSid?: string;
  purpose: SenderIdPurpose;
};

export const createSenderIdRegistrationSchema: Schema<CreateSenderIdRegistration> =
  s.object<CreateSenderIdRegistration>({
    isoCountries: s.optional(s.array(s.string())),
    companySubsidiary: s.boolean(),
    businessProfileSid: s.optional(s.string()),
    identitySid: s.optional(s.string()),
    addressSid: s.optional(s.string()),
    purpose: senderIdPurposeSchema,
    _keysMap: {
      isoCountries: "iso_countries",
      companySubsidiary: "company_subsidiary",
      businessProfileSid: "business_profile_sid",
      identitySid: "identity_sid",
      addressSid: "address_sid",
    },
  });
