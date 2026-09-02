import { s, type Schema } from "../core/index.js";

export type CreateShortCodeApplicationBundleInquiryRequest = {
  applicationSid: string;
};

export const createShortCodeApplicationBundleInquiryRequestSchema: Schema<CreateShortCodeApplicationBundleInquiryRequest> =
  s.object<CreateShortCodeApplicationBundleInquiryRequest>({
    applicationSid: s.string(),
    _keysMap: {
      applicationSid: "application_sid",
    },
  });
