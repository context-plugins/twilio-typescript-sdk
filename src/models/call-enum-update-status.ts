import { s, type EnumSchema } from "../core/index.js";

export const CallEnumUpdateStatus = {
  Canceled: "canceled",
  Completed: "completed",
} as const;
export type CallEnumUpdateStatus =
  | (typeof CallEnumUpdateStatus)[keyof typeof CallEnumUpdateStatus]
  | (string & {});

export const callEnumUpdateStatusSchema: EnumSchema<CallEnumUpdateStatus> =
  s.enumOf<CallEnumUpdateStatus>(CallEnumUpdateStatus);
