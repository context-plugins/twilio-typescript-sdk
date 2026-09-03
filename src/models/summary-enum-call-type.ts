import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SummaryEnumCallType = {
  Carrier: "carrier",
  Sip: "sip",
  Trunking: "trunking",
  Client: "client",
  Whatsapp: "whatsapp",
} as const;
export type SummaryEnumCallType =
  | (typeof SummaryEnumCallType)[keyof typeof SummaryEnumCallType]
  | (string & {});

export const summaryEnumCallTypeSchema: EnumSchema<SummaryEnumCallType> =
  s.enumOf<SummaryEnumCallType>(SummaryEnumCallType);
