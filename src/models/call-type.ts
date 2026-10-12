import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Number of calls made in each type. `carrier`, `sip`, `trunking`, `client`, `whatsapp` */
export type CallType = {
  /** Number of carrier calls */
  carrier?: number;
  /** Number of SIP calls */
  sip?: number;
  /** Number of trunking calls */
  trunking?: number;
  /** Number of client calls */
  client?: number;
  /** Number of WhatsApp Business calls */
  whatsapp?: number;
};

export const callTypeSchema: Schema<CallType> = s.object<CallType>({
  carrier: s.optional(s.int()),
  sip: s.optional(s.int()),
  trunking: s.optional(s.int()),
  client: s.optional(s.int()),
  whatsapp: s.optional(s.int()),
});
