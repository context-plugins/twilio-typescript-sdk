import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { rejectionReasonSchema, type RejectionReason } from "./rejection-reason.js";

export type PortInPhoneNumberRequest = {
  /** The SID of the Port In Phone Number resource that is being updated. */
  portInPhoneNumberSid: string;
  /**
   * The timestamp the phone number will be ported. This will only be set once a port date has been
   * confirmed. Not all carriers can guarantee a specific time on the port date. Twilio will try its
   * best to get the port completed by this time on the port date.
   */
  portDate?: Date | null;
  /**
   * The description of the rejection reason provided by the losing carrier. This field may be null
   * if the number has not been rejected by the losing carrier.
   */
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
