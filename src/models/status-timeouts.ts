import { s, type Schema } from "../core/index.js";

export type StatusTimeouts = {
  inactive?: number;
  closed?: number;
};

export const statusTimeoutsSchema: Schema<StatusTimeouts> = s.object<StatusTimeouts>({
  inactive: s.optional(s.number()),
  closed: s.optional(s.number()),
});
