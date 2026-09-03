import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TrusthubV1ComplianceInquiry = {
  inquiryId?: string | null;
  inquirySessionToken?: string | null;
  customerId?: string | null;
  url?: string | null;
};

export const trusthubV1ComplianceInquirySchema: Schema<TrusthubV1ComplianceInquiry> =
  s.object<TrusthubV1ComplianceInquiry>({
    inquiryId: s.optionalNullable(s.string()),
    inquirySessionToken: s.optionalNullable(s.string()),
    customerId: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      inquiryId: "inquiry_id",
      inquirySessionToken: "inquiry_session_token",
      customerId: "customer_id",
    },
  });
