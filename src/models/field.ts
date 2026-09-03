import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Field = {
  CallerName: "caller_name",
  SimSwap: "sim_swap",
  CallForwarding: "call_forwarding",
  LineTypeIntelligence: "line_type_intelligence",
  LineStatus: "line_status",
  IdentityMatch: "identity_match",
  ReassignedNumber: "reassigned_number",
  SmsPumpingRisk: "sms_pumping_risk",
} as const;
export type Field = (typeof Field)[keyof typeof Field] | (string & {});

export const fieldSchema: EnumSchema<Field> = s.enumOf<Field>(Field);
