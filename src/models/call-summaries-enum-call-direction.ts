import { s, type EnumSchema } from "../core/index.js";

export const CallSummariesEnumCallDirection = {
  OutboundApi: "outbound_api",
  OutboundDial: "outbound_dial",
  Inbound: "inbound",
  TrunkingOriginating: "trunking_originating",
  TrunkingTerminating: "trunking_terminating",
} as const;
export type CallSummariesEnumCallDirection =
  | (typeof CallSummariesEnumCallDirection)[keyof typeof CallSummariesEnumCallDirection]
  | (string & {});

export const callSummariesEnumCallDirectionSchema: EnumSchema<CallSummariesEnumCallDirection> =
  s.enumOf<CallSummariesEnumCallDirection>(CallSummariesEnumCallDirection);
