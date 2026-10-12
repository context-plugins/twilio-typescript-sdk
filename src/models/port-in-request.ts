import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  losingCarrierInformationSchema,
  type LosingCarrierInformation,
} from "./losing-carrier-information.js";
import { phoneNumber1Schema, type PhoneNumber1 } from "./phone-number1.js";

export type PortInRequest = {
  /** Account Sid or subaccount where the phone number(s) will be Ported */
  accountSid: string;
  /**
   * List of document SIDs for all phone numbers included in the port in request. At least one
   * document SID referring to a document of the type Utility Bill is required.
   */
  documents: string[];
  /** List of phone numbers to be ported. Maximum of 1,000 phone numbers per request. */
  phoneNumbers?: PhoneNumber1[];
  losingCarrierInformation: LosingCarrierInformation;
  /** Additional emails to send a copy of the signed LOA to. */
  notificationEmails?: string[] | null;
  /**
   * Target date to port the number. We cannot guarantee that this date will be honored by the other
   * carriers, please work with Ops to get a confirmation of the firm order commitment (FOC) date.
   * Expected format is ISO Local Date, example: ‘2011-12-03`. This date must be at least 7 days in
   * the future for US ports and 10 days in the future for Japanese ports. We can't guarantee the
   * exact date and time, as this depends on the losing carrier
   */
  targetPortInDate?: string | null;
  /**
   * The earliest time that the port should occur on the target port in date. Expected format is ISO
   * Offset Time, example: ‘10:15:00-08:00'. We can't guarantee the exact date and time, as this
   * depends on the losing carrier
   */
  targetPortInTimeRangeStart?: string | null;
  /**
   * The latest time that the port should occur on the target port in date. Expected format is ISO
   * Offset Time, example: ‘10:15:00-08:00'. We can't guarantee the exact date and time, as this
   * depends on the losing carrier
   */
  targetPortInTimeRangeEnd?: string | null;
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
