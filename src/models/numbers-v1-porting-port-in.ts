import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  losingCarrierInformationSchema,
  type LosingCarrierInformation,
} from "./losing-carrier-information.js";
import { phoneNumberResultSchema, type PhoneNumberResult } from "./phone-number-result.js";

export type NumbersV1PortingPortIn = {
  /** The SID of the Port In request. This is a unique identifier of the port in request. */
  portInRequestSid?: string | null;
  /** The URL of this Port In request */
  url?: string | null;
  /** Account Sid or subaccount where the phone number(s) will be Ported */
  accountSid?: string | null;
  /** Additional emails to send a copy of the signed LOA to. */
  notificationEmails?: string[] | null;
  /**
   * Target date to port the number. We cannot guarantee that this date will be honored by the other
   * carriers, please work with Ops to get a confirmation of the firm order commitment (FOC) date.
   * Expected format is ISO Local Date, example: ‘2011-12-03`. This date must be at least 7 days in
   * the future for US ports and 10 days in the future for Japanese ports. If a start and end range
   * is provided, the date will be converted to its UTC equivalent with the ranges as reference and
   * stored in UTC. We can't guarantee the exact date and time, as this depends on the losing
   * carrier.
   */
  targetPortInDate?: string | null;
  /**
   * The earliest time that the port should occur on the target port in date. Expected format is ISO
   * Offset Time, example: ‘10:15:00-08:00'. We can't guarantee the exact date and time, as this
   * depends on the losing carrier. The time will be stored and returned as UTC standard timezone.
   */
  targetPortInTimeRangeStart?: string | null;
  /**
   * The latest time that the port should occur on the target port in date. Expected format is ISO
   * Offset Time, example: ‘10:15:00-08:00'. We can't guarantee the exact date and time, as this
   * depends on the losing carrier. The time will be stored and returned as UTC standard timezone.
   */
  targetPortInTimeRangeEnd?: string | null;
  /**
   * The status of the port in request. The possible values are: In progress, Completed, Expired, In
   * review, Waiting for Signature, Action Required, and Canceled.
   */
  portInRequestStatus?: string | null;
  /**
   * If the order is cancelled this field will provide further context on the cause of the
   * cancellation.
   */
  orderCancellationReason?: string | null;
  losingCarrierInformation?: LosingCarrierInformation;
  phoneNumbers?: PhoneNumberResult[] | null;
  /**
   * The bundle sid is an optional identifier to reference a group of regulatory documents for a
   * port request.
   */
  bundleSid?: string | null;
  /**
   * A field only required for Japan port in requests. It is a unique identifier for the donor
   * carrier service the line is being ported from.
   */
  portabilityAdvanceCarrier?: string | null;
  /**
   * Japan specific field, indicates the number of phone numbers to automatically approve for
   * cancellation.
   */
  autoCancelApprovalNumbers?: string | null;
  /**
   * List of document SIDs for all phone numbers included in the port in request. At least one
   * document SID referring to a document of the type Utility Bill is required.
   */
  documents?: string[] | null;
  dateCreated?: Date | null;
  /** Unique ID of the request's support ticket */
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
  supportTicketId: s.optional(s.int()),
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
