import { s, type Schema } from "../core/index.js";
import {
  losingCarrierInformationSchema,
  type LosingCarrierInformation,
} from "./losing-carrier-information.js";
import { phoneNumber1Schema, type PhoneNumber1 } from "./phone-number1.js";

export type PortInRequest = {
  accountSid: string;
  documents: string[];
  phoneNumbers?: PhoneNumber1[];
  losingCarrierInformation: LosingCarrierInformation;
  notificationEmails?: string[] | null;
  targetPortInDate?: string | null;
  targetPortInTimeRangeStart?: string | null;
  targetPortInTimeRangeEnd?: string | null;
  bundleSid?: string | null;
  portabilityAdvanceCarrier?: string | null;
  autoCancelApprovalNumbers?: string | null;
};

export const portInRequestSchema: Schema<PortInRequest> = s.object<PortInRequest>({
  accountSid: s.string(),
  documents: s.array(s.string()),
  phoneNumbers: s.optional(s.array(s.lazy(() => phoneNumber1Schema))),
  losingCarrierInformation: losingCarrierInformationSchema,
  notificationEmails: s.optionalNullable(s.array(s.string())),
  targetPortInDate: s.optionalNullable(s.dateOnly()),
  targetPortInTimeRangeStart: s.optionalNullable(s.string()),
  targetPortInTimeRangeEnd: s.optionalNullable(s.string()),
  bundleSid: s.optionalNullable(s.string()),
  portabilityAdvanceCarrier: s.optionalNullable(s.string()),
  autoCancelApprovalNumbers: s.optionalNullable(s.string()),
  _keysMap: {
    accountSid: "account_sid",
    phoneNumbers: "phone_numbers",
    losingCarrierInformation: "losing_carrier_information",
    notificationEmails: "notification_emails",
    targetPortInDate: "target_port_in_date",
    targetPortInTimeRangeStart: "target_port_in_time_range_start",
    targetPortInTimeRangeEnd: "target_port_in_time_range_end",
    bundleSid: "bundle_sid",
    portabilityAdvanceCarrier: "portability_advance_carrier",
    autoCancelApprovalNumbers: "auto_cancel_approval_numbers",
  },
});
