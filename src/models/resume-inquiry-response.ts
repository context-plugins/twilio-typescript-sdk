import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResumeInquiryResponse = {
  /** Persona inquiry ID (existing or new) */
  inquiryId: string;
  /** Persona session token (always new, expires in 24 hours) */
  inquirySessionToken: string;
  /** Bundle SID */
  bundleSid: string;
};

export const resumeInquiryResponseSchema: Schema<ResumeInquiryResponse> = s.object<ResumeInquiryResponse>({
  inquiryId: s.string(),
  inquirySessionToken: s.string(),
  bundleSid: s.string(),
  _keysMap: {
    inquiryId: "inquiry_id",
    inquirySessionToken: "inquiry_session_token",
    bundleSid: "bundle_sid",
  },
});
