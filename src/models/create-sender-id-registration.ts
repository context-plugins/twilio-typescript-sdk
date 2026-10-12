import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { senderIdPurposeSchema, type SenderIdPurpose } from "./sender-id-purpose.js";

export type CreateSenderIdRegistration = {
  /** List of Iso countries */
  isoCountries?: string[];
  /** Whether registering on behalf of subsidiary */
  companySubsidiary: boolean;
  /** Business profile Bundle sid used for the application */
  businessProfileSid?: string;
  /**
   * Identity sid used for the application. It must be of IdentityType 'sender_id_customer_profile'
   */
  identitySid?: string;
  /** Address sid used for the application */
  addressSid?: string;
  /** Purpose for using Sender ID */
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
