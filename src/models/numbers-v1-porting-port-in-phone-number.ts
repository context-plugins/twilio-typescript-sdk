import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersV1PortingPortInPhoneNumber = {
  portInRequestSid?: string | null;
  phoneNumberSid?: string | null;
  url?: string | null;
  accountSid?: string | null;
  phoneNumberType?: string | null;
  dateCreated?: Date | null;
  country?: string | null;
  missingRequiredFields?: boolean | null;
  lastUpdated?: Date | null;
  phoneNumber?: string | null;
  portable?: boolean | null;
  notPortabilityReason?: string | null;
  notPortabilityReasonCode?: number | null;
  portInPhoneNumberStatus?: string | null;
  portOutPin?: number | null;
  rejectionReason?: string | null;
  rejectionReasonCode?: number | null;
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
    notPortabilityReasonCode: s.optionalNullable(s.number()),
    portInPhoneNumberStatus: s.optionalNullable(s.string()),
    portOutPin: s.optionalNullable(s.number()),
    rejectionReason: s.optionalNullable(s.string()),
    rejectionReasonCode: s.optionalNullable(s.number()),
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
