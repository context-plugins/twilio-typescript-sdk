import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessIdentitySchema, type BusinessIdentity } from "./business-identity.js";
import { messagePurposeSchema, type MessagePurpose } from "./message-purpose.js";

export type CreateRegistrationRequest = {
  globalHqCountry: string;
  targetCountry: string;
  messagePurpose: MessagePurpose;
  senderId: string;
  businessIdentity: BusinessIdentity;
  isSubassigned: boolean;
  friendlyName: string;
  customerProfileBundleSid: string;
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
    isvOptInConsent: s.optional(s.boolean()),
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
