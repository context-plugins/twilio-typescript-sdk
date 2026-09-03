import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CallDirection = {
  outbound?: number;
  inbound?: number;
};

export const callDirectionSchema: Schema<CallDirection> = s.object<CallDirection>({
  outbound: s.optional(s.number()),
  inbound: s.optional(s.number()),
});
