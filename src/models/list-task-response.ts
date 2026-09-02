import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  taskrouterV1WorkspaceTaskSchema,
  type TaskrouterV1WorkspaceTask,
} from "./taskrouter-v1-workspace-task.js";

export type ListTaskResponse = {
  tasks?: TaskrouterV1WorkspaceTask[];
  meta?: Meta;
};

export const listTaskResponseSchema: Schema<ListTaskResponse> = s.object<ListTaskResponse>({
  tasks: s.optional(s.array(s.lazy(() => taskrouterV1WorkspaceTaskSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
