import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Total number of calls for each STIR/SHAKEN attestation category. */
export type CallCount = {
  /** Total number of calls for Stir Shaken category A. */
  stshA?: number;
  /** Total number of calls for Stir Shaken category B. */
  stshB?: number;
  /** Total number of calls for Stir Shaken category C. */
  stshC?: number;
};

export const callCountSchema: Schema<CallCount> = s.object<CallCount>({
  stshA: s.optional(s.int()),
  stshB: s.optional(s.int()),
  stshC: s.optional(s.int()),
  _keysMap: {
    stshA: "stsh_a",
    stshB: "stsh_b",
    stshC: "stsh_c",
  },
});
