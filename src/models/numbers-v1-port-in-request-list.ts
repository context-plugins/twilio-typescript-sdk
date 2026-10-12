import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersV1PortInRequestList = {
  /** The SID of the Port-in request */
  portInRequestSid?: string;
  /** Status of the Port In Request */
  portInRequestStatus?: string | null;
  /** The last updated timestamp of the request */
  statusLastUpdatedTimestamp?: string | null;
  /** Amount of phone numbers requested */
  phoneNumbersRequested?: number | null;
  /** Amount of phone numbers ported */
  phoneNumbersPorted?: number | null;
  /** Suggested action on this ticket */
  suggestedAction?: string | null;
};

export const numbersV1PortInRequestListSchema: Schema<NumbersV1PortInRequestList> =
  s.object<NumbersV1PortInRequestList>({
    portInRequestSid: s.optional(s.string()),
    portInRequestStatus: s.optionalNullable(s.string()),
    statusLastUpdatedTimestamp: s.optionalNullable(s.string()),
    phoneNumbersRequested: s.optionalNullable(s.int()),
    phoneNumbersPorted: s.optionalNullable(s.int()),
    suggestedAction: s.optionalNullable(s.string()),
    _keysMap: {
      portInRequestSid: "port_in_request_sid",
      portInRequestStatus: "port_in_request_status",
      statusLastUpdatedTimestamp: "status_last_updated_timestamp",
      phoneNumbersRequested: "phone_numbers_requested",
      phoneNumbersPorted: "phone_numbers_ported",
      suggestedAction: "suggested_action",
    },
  });
