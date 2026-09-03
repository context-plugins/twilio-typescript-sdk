import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
