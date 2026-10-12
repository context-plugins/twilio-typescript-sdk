import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status - one of `stopped`, `in-progress` */
export const SiprecEnumStatus = {
  InProgress: "in-progress",
  Stopped: "stopped",
} as const;
export type SiprecEnumStatus = (typeof SiprecEnumStatus)[keyof typeof SiprecEnumStatus] | (string & {});

export const siprecEnumStatusSchema: EnumSchema<SiprecEnumStatus> =
  s.enumOf<SiprecEnumStatus>(SiprecEnumStatus);
