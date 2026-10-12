import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagingV1BrandRegistrationsBrandRegistrationOtp = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Brand
   * Registration resource.
   */
  accountSid?: string | null;
  /** The unique string to identify Brand Registration of Sole Proprietor Brand */
  brandRegistrationSid?: string | null;
};

export const messagingV1BrandRegistrationsBrandRegistrationOtpSchema: Schema<MessagingV1BrandRegistrationsBrandRegistrationOtp> =
  s.object<MessagingV1BrandRegistrationsBrandRegistrationOtp>({
    accountSid: s.optionalNullable(s.string()),
    brandRegistrationSid: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      brandRegistrationSid: "brand_registration_sid",
    },
  });
