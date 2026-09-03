import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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
