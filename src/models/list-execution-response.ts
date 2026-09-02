import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import { studioV1FlowExecutionSchema, type StudioV1FlowExecution } from "./studio-v1-flow-execution.js";

export type ListExecutionResponse = {
  executions?: StudioV1FlowExecution[];
  meta?: Meta;
};

export const listExecutionResponseSchema: Schema<ListExecutionResponse> = s.object<ListExecutionResponse>({
  executions: s.optional(s.array(s.lazy(() => studioV1FlowExecutionSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
