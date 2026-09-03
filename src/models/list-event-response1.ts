import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { insightsV1CallEventSchema, type InsightsV1CallEvent } from "./insights-v1-call-event.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListEventResponse1 = {
  events?: InsightsV1CallEvent[];
  meta?: Meta;
};

export const listEventResponse1Schema: Schema<ListEventResponse1> = s.object<ListEventResponse1>({
  events: s.optional(s.array(s.lazy(() => insightsV1CallEventSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
