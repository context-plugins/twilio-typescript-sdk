import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersV1PortingPortInPhoneNumber = {
  /** The unique identifier for the port in request that this phone number is associated with. */
  portInRequestSid?: string | null;
  /** The unique identifier for this phone number associated with this port in request. */
  phoneNumberSid?: string | null;
  /** URL reference for this resource. */
  url?: string | null;
  /** Account Sid or subaccount where the phone number(s) will be Ported. */
  accountSid?: string | null;
  /**
   * The number type of the phone number. This can be: toll-free, local, mobile or unknown. This
   * field may be null if the number is not portable or if the portability for a number has not yet
   * been evaluated.
   */
  phoneNumberType?: string | null;
  /** The timestamp for when this port in phone number was created. */
  dateCreated?: Date | null;
  /**
   * The ISO country code that this number is associated with. This field may be null if the number
   * is not portable or if the portability for a number has not yet been evaluated.
   */
  country?: string | null;
  /**
   * Indicates if the phone number is missing required fields such as a PIN or account number. This
   * field may be null if the number is not portable or if the portability for a number has not yet
   * been evaluated.
   */
  missingRequiredFields?: boolean | null;
  /** Timestamp indicating when the Port In Phone Number resource was last modified. */
  lastUpdated?: Date | null;
  /** Phone number to be ported. This will be in the E164 Format. */
  phoneNumber?: string | null;
  /**
   * If the number is portable by Twilio or not. This field may be null if the number portability
   * has not yet been evaluated. If a number is not portable reference the
   * `not_portability_reason_code` and `not_portability_reason` fields for more details
   */
  portable?: boolean | null;
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
  /** The status of the port in phone number. */
  portInPhoneNumberStatus?: string | null;
  /** The pin required by the losing carrier to do the port out. */
  portOutPin?: number | null;
  /**
   * The description of the rejection reason provided by the losing carrier. This field may be null
   * if the number has not been rejected by the losing carrier.
   */
  rejectionReason?: string | null;
  /**
   * The code for the rejection reason provided by the losing carrier. This field may be null if the
   * number has not been rejected by the losing carrier.
   */
  rejectionReasonCode?: number | null;
  /**
   * The timestamp the phone number will be ported. This will only be set once a port date has been
   * confirmed. Not all carriers can guarantee a specific time on the port date. Twilio will try its
   * best to get the port completed by this time on the port date. Please subscribe to webhooks for
   * confirmation on when a port has actually been completed.
   */
  portDate?: Date | null;
};

export const numbersV1PortingPortInPhoneNumberSchema: Schema<NumbersV1PortingPortInPhoneNumber> =
  s.object<NumbersV1PortingPortInPhoneNumber>({
    portInRequestSid: s.optionalNullable(s.string()),
    phoneNumberSid: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    phoneNumberType: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    country: s.optionalNullable(s.string()),
    missingRequiredFields: s.optionalNullable(s.boolean()),
    lastUpdated: s.optionalNullable(s.dateTime()),
    phoneNumber: s.optionalNullable(s.string()),
    portable: s.optionalNullable(s.boolean()),
    notPortabilityReason: s.optionalNullable(s.string()),
    notPortabilityReasonCode: s.optionalNullable(s.int()),
    portInPhoneNumberStatus: s.optionalNullable(s.string()),
    portOutPin: s.optionalNullable(s.int()),
    rejectionReason: s.optionalNullable(s.string()),
    rejectionReasonCode: s.optionalNullable(s.int()),
    portDate: s.optionalNullable(s.dateTime()),
    _keysMap: {
      portInRequestSid: "port_in_request_sid",
      phoneNumberSid: "phone_number_sid",
      accountSid: "account_sid",
      phoneNumberType: "phone_number_type",
      dateCreated: "date_created",
      missingRequiredFields: "missing_required_fields",
      lastUpdated: "last_updated",
      phoneNumber: "phone_number",
      notPortabilityReason: "not_portability_reason",
      notPortabilityReasonCode: "not_portability_reason_code",
      portInPhoneNumberStatus: "port_in_phone_number_status",
      portOutPin: "port_out_pin",
      rejectionReason: "rejection_reason",
      rejectionReasonCode: "rejection_reason_code",
      portDate: "port_date",
    },
  });
