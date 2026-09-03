import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TrusthubV1ComplianceRegistration = {
  inquiryId?: string | null;
  inquirySessionToken?: string | null;
  registrationId?: string | null;
  url?: string | null;
};

export const trusthubV1ComplianceRegistrationSchema: Schema<TrusthubV1ComplianceRegistration> =
  s.object<TrusthubV1ComplianceRegistration>({
    inquiryId: s.optionalNullable(s.string()),
    inquirySessionToken: s.optionalNullable(s.string()),
    registrationId: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      inquiryId: "inquiry_id",
      inquirySessionToken: "inquiry_session_token",
      registrationId: "registration_id",
    },
  });
