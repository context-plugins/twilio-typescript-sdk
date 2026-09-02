import { s, type Schema } from "../core/index.js";

export type NumbersV1Eligibility = {
  results?: Record<string, unknown>[] | null;
};

export const numbersV1EligibilitySchema: Schema<NumbersV1Eligibility> = s.object<NumbersV1Eligibility>({
  results: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
});
