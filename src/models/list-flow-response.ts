import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { studioV1FlowSchema, type StudioV1Flow } from "./studio-v1-flow.js";

export type ListFlowResponse = {
  flows?: StudioV1Flow[];
  meta?: Meta;
};

export const listFlowResponseSchema: Schema<ListFlowResponse> = s.object<ListFlowResponse>({
  flows: s.optional(s.array(s.lazy(() => studioV1FlowSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
