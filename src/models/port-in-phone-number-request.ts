import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { rejectionReasonSchema, type RejectionReason } from "./rejection-reason.js";

export type PortInPhoneNumberRequest = {
  portInPhoneNumberSid: string;
  portDate?: Date | null;
  rejectionReason?: RejectionReason | null;
};

export const portInPhoneNumberRequestSchema: Schema<PortInPhoneNumberRequest> =
  s.object<PortInPhoneNumberRequest>({
    portInPhoneNumberSid: s.string(),
    portDate: s.optionalNullable(s.dateTime()),
    rejectionReason: s.optionalNullable(s.lazy(() => rejectionReasonSchema)),
    _keysMap: {
      portInPhoneNumberSid: "port_in_phone_number_sid",
      portDate: "port_date",
      rejectionReason: "rejection_reason",
    },
  });
