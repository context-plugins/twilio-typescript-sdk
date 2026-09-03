import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CallEnumUpdateStatus = {
  Canceled: "canceled",
  Completed: "completed",
} as const;
export type CallEnumUpdateStatus =
  | (typeof CallEnumUpdateStatus)[keyof typeof CallEnumUpdateStatus]
  | (string & {});

export const callEnumUpdateStatusSchema: EnumSchema<CallEnumUpdateStatus> =
  s.enumOf<CallEnumUpdateStatus>(CallEnumUpdateStatus);
