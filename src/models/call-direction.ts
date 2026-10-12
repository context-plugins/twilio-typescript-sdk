import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Number of calls made in each direction. */
export type CallDirection = {
  /** Number of outbound calls */
  outbound?: number;
  /** Number of inbound calls */
  inbound?: number;
};

export const callDirectionSchema: Schema<CallDirection> = s.object<CallDirection>({
  outbound: s.optional(s.int()),
  inbound: s.optional(s.int()),
});
