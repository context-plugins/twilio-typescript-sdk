import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { flexV1FlexFlowSchema, type FlexV1FlexFlow } from "./flex-v1-flex-flow.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListFlexFlowResponse = {
  flexFlows?: FlexV1FlexFlow[];
  meta?: Meta;
};

export const listFlexFlowResponseSchema: Schema<ListFlexFlowResponse> = s.object<ListFlexFlowResponse>({
  flexFlows: s.optional(s.array(s.lazy(() => flexV1FlexFlowSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
  _keysMap: {
    flexFlows: "flex_flows",
  },
});
