import { s, type Schema } from "../core/index.js";

export type MessagingV1BrandRegistrationsBrandRegistrationOtp = {
  accountSid?: string | null;
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
