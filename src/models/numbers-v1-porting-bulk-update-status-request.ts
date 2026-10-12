import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { newStatusSchema, type NewStatus } from "./new-status.js";
import {
  portInPhoneNumberRequestSchema,
  type PortInPhoneNumberRequest,
} from "./port-in-phone-number-request.js";

export type NumbersV1PortingBulkUpdateStatusRequest = {
  /** The new status to set for the port in request. */
  newStatus: NewStatus;
  portInPhoneNumberRequests: PortInPhoneNumberRequest[];
};

export const numbersV1PortingBulkUpdateStatusRequestSchema: Schema<NumbersV1PortingBulkUpdateStatusRequest> =
  s.object<NumbersV1PortingBulkUpdateStatusRequest>({
    newStatus: newStatusSchema,
    portInPhoneNumberRequests: s.array(s.lazy(() => portInPhoneNumberRequestSchema)),
    _keysMap: {
      newStatus: "new_status",
      portInPhoneNumberRequests: "port_in_phone_number_requests",
    },
  });
