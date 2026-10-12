import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  messagingV2RcsCarrierStatusSchema,
  type MessagingV2RcsCarrierStatus,
} from "./messaging-v2-rcs-carrier-status.js";

export type MessagingV2RcsCarrier = {
  /** The name of the carrier. For example, `Verizon` or `AT&T` for US. */
  name?: string;
  /** The carrier-level status. */
  status?: MessagingV2RcsCarrierStatus;
};

export const messagingV2RcsCarrierSchema: Schema<MessagingV2RcsCarrier> = s.object<MessagingV2RcsCarrier>({
  name: s.optional(s.string()),
  status: s.optional(s.lazy(() => messagingV2RcsCarrierStatusSchema)),
});
