import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AnswerRate = {
  stshA?: number;
  stshB?: number;
  stshC?: number;
};

export const answerRateSchema: Schema<AnswerRate> = s.object<AnswerRate>({
  stshA: s.optional(s.number()),
  stshB: s.optional(s.number()),
  stshC: s.optional(s.number()),
  _keysMap: {
    stshA: "stsh_a",
    stshB: "stsh_b",
    stshC: "stsh_c",
  },
});
