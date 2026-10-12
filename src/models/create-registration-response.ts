import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateRegistrationResponse = {
  /** Bundle SID (same as bundle_sid in KYC Orchestration) */
  bundleSid: string;
  /** Persona inquiry ID */
  inquiryId: string;
  /** Persona session token for embedding Persona UI */
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
