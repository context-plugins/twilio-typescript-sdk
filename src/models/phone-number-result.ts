import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PhoneNumberResult = {
  /**
   * The not portability reason code description. This field may be null if the number is portable
   * or if the portability for a number has not yet been evaluated.
   */
  notPortabilityReason?: string | null;
  /**
   * The not portability reason code. This field may be null if the number is portable or if the
   * portability for a number has not yet been evaluated.
   */
  notPortabilityReasonCode?: number | null;
  /**
   * The number type of the phone number. This can be: toll-free, local, mobile or unknown. This
   * field may be null if the number is not portable or if the portability for a number has not yet
   * been evaluated.
   */
  numberType?: string | null;
  /** Phone number to be ported. This will be in the E164 Format. */
  phoneNumber?: string;
  /**
   * The timestamp the phone number will be ported. This will only be set once a port date has been
   * confirmed. Not all carriers can guarantee a specific time on the port date. Twilio will try its
   * best to get the port completed by this time on the port date. Please subscribe to webhooks for
   * confirmation on when a port has actually been completed.
   */
  portDate?: Date | null;
  /** The SID of the Phone number. This is a unique identifier of the phone number. */
  portInPhoneNumberSid?: string;
  /** The status of the port in phone number. */
  portInPhoneNumberStatus?: string;
  /**
   * Whether the number is portable by Twilio or not. This field may be null if the number
   * portability has not yet been evaluated. If a number is not portable reference the
   * `not_portability_reason_code` and `not_portability_reason` fields for more details
   */
  portable?: boolean | null;
  /**
   * The description of the rejection reason provided by the losing carrier. This field may be null
   * if the number has not been rejected by the losing carrier.
   */
  rejectionReason?: string | null;
  /**
   * The code for the rejection reason provided by the losing carrier. This field may be null if the
   * number has not been rejected by the losing carrier.
   */
  rejectionReasonCode?: string | null;
  /** Timestamp indicating when the Port In Phone Number resource was last modified. */
  statusLastTimeUpdatedTimestamp?: string | null;
  externalPortingVendorPhoneNumberId?: string | null;
};

export const phoneNumberResultSchema: Schema<PhoneNumberResult> = s.object<PhoneNumberResult>({
  notPortabilityReason: s.optionalNullable(s.string()),
  notPortabilityReasonCode: s.optionalNullable(s.int()),
  numberType: s.optionalNullable(s.string()),
  phoneNumber: s.optional(s.string()),
  portDate: s.optionalNullable(s.dateTime()),
  portInPhoneNumberSid: s.optional(s.string()),
  portInPhoneNumberStatus: s.optional(s.string()),
  portable: s.optionalNullable(s.boolean()),
  rejectionReason: s.optionalNullable(s.string()),
  rejectionReasonCode: s.optionalNullable(s.string()),
  statusLastTimeUpdatedTimestamp: s.optionalNullable(s.string()),
  externalPortingVendorPhoneNumberId: s.optionalNullable(s.string()),
  _keysMap: {
    notPortabilityReason: "not_portability_reason",
    notPortabilityReasonCode: "not_portability_reason_code",
    numberType: "number_type",
    phoneNumber: "phone_number",
    portDate: "port_date",
    portInPhoneNumberSid: "port_in_phone_number_sid",
    portInPhoneNumberStatus: "port_in_phone_number_status",
    rejectionReason: "rejection_reason",
    rejectionReasonCode: "rejection_reason_code",
    statusLastTimeUpdatedTimestamp: "status_last_time_updated_timestamp",
    externalPortingVendorPhoneNumberId: "external_porting_vendor_phone_number_id",
  },
});
