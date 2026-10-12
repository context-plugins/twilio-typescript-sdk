import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessIdentitySchema, type BusinessIdentity } from "./business-identity.js";
import { messagePurposeSchema, type MessagePurpose } from "./message-purpose.js";

export type CreateRegistrationRequest = {
  /** Global HQ country code (ISO 3166-1 alpha-2) */
  globalHqCountry: string;
  /** Target country for sender ID registration */
  targetCountry: string;
  /** Purpose of SMS messages */
  messagePurpose: MessagePurpose;
  /** Requested alphanumeric sender ID value */
  senderId: string;
  /** Business customer type */
  businessIdentity: BusinessIdentity;
  /** Whether sender ID will be subassigned to other accounts */
  isSubassigned: boolean;
  /** Human-readable name for the registration */
  friendlyName: string;
  /** Bundle SID of customer's profile */
  customerProfileBundleSid: string;
  /**
   * ISV opt-in consent flag. Defaults to true if not provided. Only rejected when explicitly set to
   * false for ISV customers registering in Australia.
   *
   * @default true
   */
  isvOptInConsent?: boolean;
};

export const createRegistrationRequestSchema: Schema<CreateRegistrationRequest> =
  s.object<CreateRegistrationRequest>({
    globalHqCountry: s.string(),
    targetCountry: s.string(),
    messagePurpose: messagePurposeSchema,
    senderId: s.string(),
    businessIdentity: businessIdentitySchema,
    isSubassigned: s.boolean(),
    friendlyName: s.string(),
    customerProfileBundleSid: s.string(),
    isvOptInConsent: s.defaulted(s.boolean(), true),
    _keysMap: {
      globalHqCountry: "global_hq_country",
      targetCountry: "target_country",
      messagePurpose: "message_purpose",
      senderId: "sender_id",
      businessIdentity: "business_identity",
      isSubassigned: "is_subassigned",
      friendlyName: "friendly_name",
      customerProfileBundleSid: "customer_profile_bundle_sid",
      isvOptInConsent: "isv_opt_in_consent",
    },
  });
