import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersV1Eligibility = {
  results?: Record<string, unknown>[] | null;
};

export const numbersV1EligibilitySchema: Schema<NumbersV1Eligibility> = s.object<NumbersV1Eligibility>({
  results: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
});
