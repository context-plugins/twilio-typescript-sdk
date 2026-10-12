import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersV1PortingBulkPhoneNumberUpdateDetail = {
  portInPhoneNumberSid: string;
  currentStatus: string;
  requestedStatus: string;
  /** Error message explaining why the update failed */
  errorMessage?: string | null;
};

export const numbersV1PortingBulkPhoneNumberUpdateDetailSchema: Schema<NumbersV1PortingBulkPhoneNumberUpdateDetail> =
  s.object<NumbersV1PortingBulkPhoneNumberUpdateDetail>({
    portInPhoneNumberSid: s.string(),
    currentStatus: s.string(),
    requestedStatus: s.string(),
    errorMessage: s.optionalNullable(s.string()),
    _keysMap: {
      portInPhoneNumberSid: "port_in_phone_number_sid",
      currentStatus: "current_status",
      requestedStatus: "requested_status",
      errorMessage: "error_message",
    },
  });
