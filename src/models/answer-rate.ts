import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Answer rate for each STIR/SHAKEN attestation category. */
export type AnswerRate = {
  /** Answer rate for Stir Shaken category A. */
  stshA?: number;
  /** Answer rate for Stir Shaken category B. */
  stshB?: number;
  /** Answer rate for Stir Shaken category C. */
  stshC?: number;
};

export const answerRateSchema: Schema<AnswerRate> = s.object<AnswerRate>({
  stshA: s.optional(s.float64()),
  stshB: s.optional(s.float64()),
  stshC: s.optional(s.float64()),
  _keysMap: {
    stshA: "stsh_a",
    stshB: "stsh_b",
    stshC: "stsh_c",
  },
});
