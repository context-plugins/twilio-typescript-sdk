import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import { taskrouterV1WorkspaceSchema, type TaskrouterV1Workspace } from "./taskrouter-v1-workspace.js";

export type ListWorkspaceResponse = {
  workspaces?: TaskrouterV1Workspace[];
  meta?: Meta;
};

export const listWorkspaceResponseSchema: Schema<ListWorkspaceResponse> = s.object<ListWorkspaceResponse>({
  workspaces: s.optional(s.array(s.lazy(() => taskrouterV1WorkspaceSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
