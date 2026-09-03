import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CallType = {
  carrier?: number;
  sip?: number;
  trunking?: number;
  client?: number;
  whatsapp?: number;
};

export const callTypeSchema: Schema<CallType> = s.object<CallType>({
  carrier: s.optional(s.number()),
  sip: s.optional(s.number()),
  trunking: s.optional(s.number()),
  client: s.optional(s.number()),
  whatsapp: s.optional(s.number()),
});
