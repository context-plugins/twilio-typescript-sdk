import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateShortCodeApplicationBundleInquiryResponse = {
  /** The unique identifier of the inquiry. */
  inquiryId?: string;
  /** The session token for the inquiry. */
  inquirySessionToken?: string;
  /** The unique identifier of the Short Code Application. */
  applicationSid?: string;
  /** The Bundle SID associated with the inquiry. */
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
