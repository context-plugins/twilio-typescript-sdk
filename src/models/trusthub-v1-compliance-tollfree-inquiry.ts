import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TrusthubV1ComplianceTollfreeInquiry = {
  /** The unique ID used to start an embedded compliance registration session. */
  inquiryId?: string | null;
  /** The session token used to start an embedded compliance registration session. */
  inquirySessionToken?: string | null;
  /**
   * The TolfreeId matching the Tollfree Profile that should be resumed or resubmitted for editing.
   */
  registrationId?: string | null;
  /** The URL of this resource. */
  url?: string | null;
};

export const trusthubV1ComplianceTollfreeInquirySchema: Schema<TrusthubV1ComplianceTollfreeInquiry> =
  s.object<TrusthubV1ComplianceTollfreeInquiry>({
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
