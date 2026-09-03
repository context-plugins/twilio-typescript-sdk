import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PhoneNumberResult = {
  notPortabilityReason?: string | null;
  notPortabilityReasonCode?: number | null;
  numberType?: string | null;
  phoneNumber?: string;
  portDate?: Date | null;
  portInPhoneNumberSid?: string;
  portInPhoneNumberStatus?: string;
  portable?: boolean | null;
  rejectionReason?: string | null;
  rejectionReasonCode?: string | null;
  statusLastTimeUpdatedTimestamp?: string | null;
  externalPortingVendorPhoneNumberId?: string | null;
};

export const phoneNumberResultSchema: Schema<PhoneNumberResult> = s.object<PhoneNumberResult>({
  notPortabilityReason: s.optionalNullable(s.string()),
  notPortabilityReasonCode: s.optionalNullable(s.number()),
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
