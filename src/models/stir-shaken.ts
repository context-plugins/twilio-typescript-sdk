import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { answerRateSchema, type AnswerRate } from "./answer-rate.js";
import { callCountSchema, type CallCount } from "./call-count.js";
import { percentageSchema, type Percentage } from "./percentage.js";

export type StirShaken = {
  callCount?: CallCount;
  percentage?: Percentage;
  answerRate?: AnswerRate;
};

export const stirShakenSchema: Schema<StirShaken> = s.object<StirShaken>({
  callCount: s.optional(s.lazy(() => callCountSchema)),
  percentage: s.optional(s.lazy(() => percentageSchema)),
  answerRate: s.optional(s.lazy(() => answerRateSchema)),
  _keysMap: {
    callCount: "call_count",
    answerRate: "answer_rate",
  },
});
