import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { studioV1FlowEngagementSchema, type StudioV1FlowEngagement } from "./studio-v1-flow-engagement.js";

export type ListEngagementResponse = {
  engagements?: StudioV1FlowEngagement[];
  meta?: Meta;
};

export const listEngagementResponseSchema: Schema<ListEngagementResponse> = s.object<ListEngagementResponse>({
  engagements: s.optional(s.array(s.lazy(() => studioV1FlowEngagementSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
