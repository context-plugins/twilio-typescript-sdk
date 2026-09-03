import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { insightsV1CallSummariesSchema, type InsightsV1CallSummaries } from "./insights-v1-call-summaries.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListCallSummariesResponse = {
  callSummaries?: InsightsV1CallSummaries[];
  meta?: Meta;
};

export const listCallSummariesResponseSchema: Schema<ListCallSummariesResponse> =
  s.object<ListCallSummariesResponse>({
    callSummaries: s.optional(s.array(s.lazy(() => insightsV1CallSummariesSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
    _keysMap: {
      callSummaries: "call_summaries",
    },
  });
