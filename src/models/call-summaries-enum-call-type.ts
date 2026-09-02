import { s, type EnumSchema } from "../core/index.js";

export const CallSummariesEnumCallType = {
  Carrier: "carrier",
  Sip: "sip",
  Trunking: "trunking",
  Client: "client",
  Whatsapp: "whatsapp",
} as const;
export type CallSummariesEnumCallType =
  | (typeof CallSummariesEnumCallType)[keyof typeof CallSummariesEnumCallType]
  | (string & {});

export const callSummariesEnumCallTypeSchema: EnumSchema<CallSummariesEnumCallType> =
  s.enumOf<CallSummariesEnumCallType>(CallSummariesEnumCallType);
