import { s, type Schema } from "../core/index.js";

export type CreateRegistrationResponse = {
  bundleSid: string;
  inquiryId: string;
  inquirySessionToken: string;
};

export const createRegistrationResponseSchema: Schema<CreateRegistrationResponse> =
  s.object<CreateRegistrationResponse>({
    bundleSid: s.string(),
    inquiryId: s.string(),
    inquirySessionToken: s.string(),
    _keysMap: {
      bundleSid: "bundle_sid",
      inquiryId: "inquiry_id",
      inquirySessionToken: "inquiry_session_token",
    },
  });
