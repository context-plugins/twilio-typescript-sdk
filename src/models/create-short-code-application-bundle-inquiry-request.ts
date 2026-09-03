import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
