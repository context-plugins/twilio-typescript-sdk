import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TrusthubV1ComplianceRegistration = {
  /** The unique ID used to start an embedded compliance registration session. */
  inquiryId?: string | null;
  /** The session token used to start an embedded compliance registration session. */
  inquirySessionToken?: string | null;
  /**
   * The RegistrationId matching the Registration Profile that should be resumed or resubmitted for
   * editing.
   */
  registrationId?: string | null;
  /** The URL of this resource. */
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
