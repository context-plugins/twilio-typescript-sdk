import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DeliveryStatus = {
  Initiated: "INITIATED",
  InProgress: "IN_PROGRESS",
  Delivered: "DELIVERED",
  Completed: "COMPLETED",
  Failed: "FAILED",
} as const;
export type DeliveryStatus = (typeof DeliveryStatus)[keyof typeof DeliveryStatus] | (string & {});

export const deliveryStatusSchema: EnumSchema<DeliveryStatus> = s.enumOf<DeliveryStatus>(DeliveryStatus);
