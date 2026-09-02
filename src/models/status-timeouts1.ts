import { s, type Schema } from "../core/index.js";

export type StatusTimeouts1 = {
  inactive?: number;
  closed?: number;
};

export const statusTimeouts1Schema: Schema<StatusTimeouts1> = s.object<StatusTimeouts1>({
  inactive: s.optional(s.number()),
  closed: s.optional(s.number()),
});
