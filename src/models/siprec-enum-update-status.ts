import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SiprecEnumUpdateStatus = {
  Stopped: "stopped",
} as const;
export type SiprecEnumUpdateStatus =
  | (typeof SiprecEnumUpdateStatus)[keyof typeof SiprecEnumUpdateStatus]
  | (string & {});

export const siprecEnumUpdateStatusSchema: EnumSchema<SiprecEnumUpdateStatus> =
  s.enumOf<SiprecEnumUpdateStatus>(SiprecEnumUpdateStatus);
