import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Percentage of calls for each STIR/SHAKEN attestation category. */
export type Percentage = {
  /** Percentage of calls for Stir Shaken category A. */
  stshA?: number;
  /** Percentage of calls for Stir Shaken category B. */
  stshB?: number;
  /** Percentage of calls for Stir Shaken category C. */
  stshC?: number;
};

export const percentageSchema: Schema<Percentage> = s.object<Percentage>({
  stshA: s.optional(s.float64()),
  stshB: s.optional(s.float64()),
  stshC: s.optional(s.float64()),
  _keysMap: {
    stshA: "stsh_a",
    stshB: "stsh_b",
    stshC: "stsh_c",
  },
});
