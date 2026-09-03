import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { studioV2FlowSchema, type StudioV2Flow } from "./studio-v2-flow.js";

export type ListFlowResponse1 = {
  flows?: StudioV2Flow[];
  meta?: Meta;
};

export const listFlowResponse1Schema: Schema<ListFlowResponse1> = s.object<ListFlowResponse1>({
  flows: s.optional(s.array(s.lazy(() => studioV2FlowSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
