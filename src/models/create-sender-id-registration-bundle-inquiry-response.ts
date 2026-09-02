import { s, type Schema } from "../core/index.js";

export type CreateSenderIdRegistrationBundleInquiryResponse = {
  inquiryId?: string;
  inquirySessionToken?: string;
  applicationSid?: string;
  bundleSid?: string;
};

export const createSenderIdRegistrationBundleInquiryResponseSchema: Schema<CreateSenderIdRegistrationBundleInquiryResponse> =
  s.object<CreateSenderIdRegistrationBundleInquiryResponse>({
    inquiryId: s.optional(s.string()),
    inquirySessionToken: s.optional(s.string()),
    applicationSid: s.optional(s.string()),
    bundleSid: s.optional(s.string()),
    _keysMap: {
      inquiryId: "inquiry_id",
      inquirySessionToken: "inquiry_session_token",
      applicationSid: "application_sid",
      bundleSid: "bundle_sid",
    },
  });
