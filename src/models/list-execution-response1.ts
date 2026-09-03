import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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
