import { s, type EnumSchema } from "../core/index.js";

export const SiprecEnumUpdateStatus = {
  Stopped: "stopped",
} as const;
export type SiprecEnumUpdateStatus =
  | (typeof SiprecEnumUpdateStatus)[keyof typeof SiprecEnumUpdateStatus]
  | (string & {});

export const siprecEnumUpdateStatusSchema: EnumSchema<SiprecEnumUpdateStatus> =
  s.enumOf<SiprecEnumUpdateStatus>(SiprecEnumUpdateStatus);
