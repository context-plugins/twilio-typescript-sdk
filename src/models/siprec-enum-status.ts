import { s, type EnumSchema } from "../core/index.js";

export const SiprecEnumStatus = {
  InProgress: "in-progress",
  Stopped: "stopped",
} as const;
export type SiprecEnumStatus = (typeof SiprecEnumStatus)[keyof typeof SiprecEnumStatus] | (string & {});

export const siprecEnumStatusSchema: EnumSchema<SiprecEnumStatus> =
  s.enumOf<SiprecEnumStatus>(SiprecEnumStatus);
