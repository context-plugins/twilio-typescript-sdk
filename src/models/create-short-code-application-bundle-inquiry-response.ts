import { s, type Schema } from "../core/index.js";

export type CreateShortCodeApplicationBundleInquiryResponse = {
  inquiryId?: string;
  inquirySessionToken?: string;
  applicationSid?: string;
  bundleSid?: string;
};

export const createShortCodeApplicationBundleInquiryResponseSchema: Schema<CreateShortCodeApplicationBundleInquiryResponse> =
  s.object<CreateShortCodeApplicationBundleInquiryResponse>({
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
