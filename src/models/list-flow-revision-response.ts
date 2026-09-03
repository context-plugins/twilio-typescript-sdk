import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  studioV2FlowFlowRevisionSchema,
  type StudioV2FlowFlowRevision,
} from "./studio-v2-flow-flow-revision.js";

export type ListFlowRevisionResponse = {
  revisions?: StudioV2FlowFlowRevision[];
  meta?: Meta;
};

export const listFlowRevisionResponseSchema: Schema<ListFlowRevisionResponse> =
  s.object<ListFlowRevisionResponse>({
    revisions: s.optional(s.array(s.lazy(() => studioV2FlowFlowRevisionSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
