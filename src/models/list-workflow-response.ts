import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  taskrouterV1WorkspaceWorkflowSchema,
  type TaskrouterV1WorkspaceWorkflow,
} from "./taskrouter-v1-workspace-workflow.js";

export type ListWorkflowResponse = {
  workflows?: TaskrouterV1WorkspaceWorkflow[];
  meta?: Meta;
};

export const listWorkflowResponseSchema: Schema<ListWorkflowResponse> = s.object<ListWorkflowResponse>({
  workflows: s.optional(s.array(s.lazy(() => taskrouterV1WorkspaceWorkflowSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
