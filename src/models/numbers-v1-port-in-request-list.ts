import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersV1PortInRequestList = {
  portInRequestSid?: string;
  portInRequestStatus?: string | null;
  statusLastUpdatedTimestamp?: string | null;
  phoneNumbersRequested?: number | null;
  phoneNumbersPorted?: number | null;
  suggestedAction?: string | null;
};

export const numbersV1PortInRequestListSchema: Schema<NumbersV1PortInRequestList> =
  s.object<NumbersV1PortInRequestList>({
    portInRequestSid: s.optional(s.string()),
    portInRequestStatus: s.optionalNullable(s.string()),
    statusLastUpdatedTimestamp: s.optionalNullable(s.string()),
    phoneNumbersRequested: s.optionalNullable(s.number()),
    phoneNumbersPorted: s.optionalNullable(s.number()),
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
