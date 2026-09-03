import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Percentage = {
  stshA?: number;
  stshB?: number;
  stshC?: number;
};

export const percentageSchema: Schema<Percentage> = s.object<Percentage>({
  stshA: s.optional(s.number()),
  stshB: s.optional(s.number()),
  stshC: s.optional(s.number()),
  _keysMap: {
    stshA: "stsh_a",
    stshB: "stsh_b",
    stshC: "stsh_c",
  },
});
