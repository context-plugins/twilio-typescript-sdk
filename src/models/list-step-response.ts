import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  studioV1FlowEngagementStepSchema,
  type StudioV1FlowEngagementStep,
} from "./studio-v1-flow-engagement-step.js";

export type ListStepResponse = {
  steps?: StudioV1FlowEngagementStep[];
  meta?: Meta;
};

export const listStepResponseSchema: Schema<ListStepResponse> = s.object<ListStepResponse>({
  steps: s.optional(s.array(s.lazy(() => studioV1FlowEngagementStepSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
