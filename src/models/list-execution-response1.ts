import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import { studioV2FlowExecutionSchema, type StudioV2FlowExecution } from "./studio-v2-flow-execution.js";

export type ListExecutionResponse1 = {
  executions?: StudioV2FlowExecution[];
  meta?: Meta;
};

export const listExecutionResponse1Schema: Schema<ListExecutionResponse1> = s.object<ListExecutionResponse1>({
  executions: s.optional(s.array(s.lazy(() => studioV2FlowExecutionSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
