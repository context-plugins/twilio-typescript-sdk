import { s, type Schema } from "../core/index.js";

export type ResumeInquiryResponse = {
  inquiryId: string;
  inquirySessionToken: string;
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
