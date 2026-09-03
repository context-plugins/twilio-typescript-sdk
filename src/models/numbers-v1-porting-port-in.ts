import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  losingCarrierInformationSchema,
  type LosingCarrierInformation,
} from "./losing-carrier-information.js";
import { phoneNumberResultSchema, type PhoneNumberResult } from "./phone-number-result.js";

export type NumbersV1PortingPortIn = {
  portInRequestSid?: string | null;
  url?: string | null;
  accountSid?: string | null;
  notificationEmails?: string[] | null;
  targetPortInDate?: string | null;
  targetPortInTimeRangeStart?: string | null;
  targetPortInTimeRangeEnd?: string | null;
  portInRequestStatus?: string | null;
  orderCancellationReason?: string | null;
  losingCarrierInformation?: LosingCarrierInformation;
  phoneNumbers?: PhoneNumberResult[] | null;
  bundleSid?: string | null;
  portabilityAdvanceCarrier?: string | null;
  autoCancelApprovalNumbers?: string | null;
  documents?: string[] | null;
  dateCreated?: Date | null;
  supportTicketId?: number;
  signatureRequestUrl?: string | null;
};

export const numbersV1PortingPortInSchema: Schema<NumbersV1PortingPortIn> = s.object<NumbersV1PortingPortIn>({
  portInRequestSid: s.optionalNullable(s.string()),
  url: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  notificationEmails: s.optionalNullable(s.array(s.string())),
  targetPortInDate: s.optionalNullable(s.dateOnly()),
  targetPortInTimeRangeStart: s.optionalNullable(s.string()),
  targetPortInTimeRangeEnd: s.optionalNullable(s.string()),
  portInRequestStatus: s.optionalNullable(s.string()),
  orderCancellationReason: s.optionalNullable(s.string()),
  losingCarrierInformation: s.optional(s.lazy(() => losingCarrierInformationSchema)),
  phoneNumbers: s.optionalNullable(s.array(s.lazy(() => phoneNumberResultSchema))),
  bundleSid: s.optionalNullable(s.string()),
  portabilityAdvanceCarrier: s.optionalNullable(s.string()),
  autoCancelApprovalNumbers: s.optionalNullable(s.string()),
  documents: s.optionalNullable(s.array(s.string())),
  dateCreated: s.optionalNullable(s.dateTime()),
  supportTicketId: s.optional(s.number()),
  signatureRequestUrl: s.optionalNullable(s.string()),
  _keysMap: {
    portInRequestSid: "port_in_request_sid",
    accountSid: "account_sid",
    notificationEmails: "notification_emails",
    targetPortInDate: "target_port_in_date",
    targetPortInTimeRangeStart: "target_port_in_time_range_start",
    targetPortInTimeRangeEnd: "target_port_in_time_range_end",
    portInRequestStatus: "port_in_request_status",
    orderCancellationReason: "order_cancellation_reason",
    losingCarrierInformation: "losing_carrier_information",
    phoneNumbers: "phone_numbers",
    bundleSid: "bundle_sid",
    portabilityAdvanceCarrier: "portability_advance_carrier",
    autoCancelApprovalNumbers: "auto_cancel_approval_numbers",
    dateCreated: "date_created",
    supportTicketId: "support_ticket_id",
    signatureRequestUrl: "signature_request_url",
  },
});
