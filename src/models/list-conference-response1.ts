import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { insightsV1ConferenceSchema, type InsightsV1Conference } from "./insights-v1-conference.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListConferenceResponse1 = {
  conferences?: InsightsV1Conference[];
  meta?: Meta;
};

export const listConferenceResponse1Schema: Schema<ListConferenceResponse1> =
  s.object<ListConferenceResponse1>({
    conferences: s.optional(s.array(s.lazy(() => insightsV1ConferenceSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
