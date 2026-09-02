import { s, type Schema } from "../core/index.js";

export type CallDirection = {
  outbound?: number;
  inbound?: number;
};

export const callDirectionSchema: Schema<CallDirection> = s.object<CallDirection>({
  outbound: s.optional(s.number()),
  inbound: s.optional(s.number()),
});
