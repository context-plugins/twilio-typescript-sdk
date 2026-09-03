import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
