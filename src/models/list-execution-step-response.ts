import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  studioV1FlowExecutionExecutionStepSchema,
  type StudioV1FlowExecutionExecutionStep,
} from "./studio-v1-flow-execution-execution-step.js";

export type ListExecutionStepResponse = {
  steps?: StudioV1FlowExecutionExecutionStep[];
  meta?: Meta;
};

export const listExecutionStepResponseSchema: Schema<ListExecutionStepResponse> =
  s.object<ListExecutionStepResponse>({
    steps: s.optional(s.array(s.lazy(() => studioV1FlowExecutionExecutionStepSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
